// Sends the live sitemap's pages to IndexNow (Bing and the other engines that share it), so they
// recrawl after a deploy instead of waiting to find changes. Run it once the new version is live:
//   bun run indexnow            send the pages
//   bun run indexnow --dry-run  list them and check the key file without sending anything
import { readdir, readFile } from "node:fs/promises";

const siteUrl = new URL(process.env.PUBLIC_SITE_URL ?? "https://chames.tn");
const endpoint = "https://api.indexnow.org/indexnow";
const dryRun = process.argv.includes("--dry-run");
const timeoutMs = 15_000;

const responseMeanings: Record<number, string> = {
  200: "Submitted.",
  202: "Accepted. IndexNow is still verifying the key file, so the pages are queued.",
  400: "Rejected: the request was malformed.",
  403: "Rejected: the key file is missing or does not match the key.",
  422: "Rejected: some URLs do not belong to the site or do not match the key's location.",
  429: "Rejected: too many requests. Try again later.",
};

// The key lives in one place: public/<key>.txt, whose content is the key itself.
async function readKey() {
  const publicDir = new URL("../public/", import.meta.url);
  const keys: string[] = [];
  for (const name of await readdir(publicDir)) {
    const match = /^([a-f0-9]{32})\.txt$/.exec(name);
    if (!match) continue;
    const content = (await readFile(new URL(name, publicDir), "utf8")).trim();
    if (content === match[1]) keys.push(match[1]);
  }
  if (keys.length !== 1) {
    throw new Error(`Expected one IndexNow key file in public/ (a 32-character name whose content is the same key), found ${keys.length}.`);
  }
  return keys[0];
}

async function fetchText(url: URL) {
  const response = await fetch(url, { signal: AbortSignal.timeout(timeoutMs) });
  return { ok: response.ok, status: response.status, text: await response.text() };
}

function sitemapUrls(xml: string) {
  // Only page <loc> entries; image:loc entries inside them are not pages.
  const urls = [...xml.matchAll(/<url>\s*<loc>([^<]+)<\/loc>/g)].map((match) => match[1].trim());
  const foreign = urls.filter((url) => new URL(url).host !== siteUrl.host);
  if (foreign.length) throw new Error(`The sitemap lists URLs on another host: ${foreign.join(", ")}`);
  if (!urls.length) throw new Error("The sitemap lists no pages.");
  return urls;
}

const key = await readKey();
const keyLocation = new URL(`${key}.txt`, siteUrl);

const sitemap = await fetchText(new URL("/sitemap.xml", siteUrl));
if (!sitemap.ok) throw new Error(`Could not read ${siteUrl.origin}/sitemap.xml (HTTP ${sitemap.status}).`);
const urlList = sitemapUrls(sitemap.text);

const liveKey = await fetchText(keyLocation).catch(() => ({ ok: false, status: 0, text: "" }));
const keyIsLive = liveKey.ok && liveKey.text.trim() === key;

console.log(`Key file: ${keyLocation.href} (${keyIsLive ? "live" : "not live yet"})`);
console.log(`Pages from the sitemap (${urlList.length}):`);
for (const url of urlList) console.log(`  ${url}`);

if (dryRun) {
  console.log("Dry run: nothing was sent.");
  process.exit(0);
}

if (!keyIsLive) {
  console.error("The key file is not live yet, so IndexNow would reject the request. Deploy first, then run this again.");
  process.exit(1);
}

const response = await fetch(endpoint, {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: siteUrl.host, key, keyLocation: keyLocation.href, urlList }),
  signal: AbortSignal.timeout(timeoutMs),
});
console.log(`IndexNow answered HTTP ${response.status}: ${responseMeanings[response.status] ?? "Unexpected response."}`);
if (!response.ok) process.exit(1);
