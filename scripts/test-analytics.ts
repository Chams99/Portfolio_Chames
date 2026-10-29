import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const source = await readFile(new URL("../src/scripts/analytics.ts", import.meta.url), "utf8");
const compiled = (await new Bun.Transpiler({ loader: "ts", target: "browser" }).transform(source))
  .replaceAll("import.meta.env.PROD", "true")
  .replaceAll("import.meta.env.PUBLIC_GA4_MEASUREMENT_ID", '"G-TEST123"');

function createHarness({ hasMeasurementId = true }: { hasMeasurementId?: boolean } = {}) {
  type Listener = (event?: unknown) => void;
  const listeners: Record<string, Listener[]> = {};
  const scripts: Array<{ id?: string; src?: string; async?: boolean }> = [];
  let canonical = "https://chames.tn/";

  const document = {
    readyState: "interactive",
    title: "Chames Dhibi — Portfolio",
    referrer: "https://search.example/results?private=value#section",
    head: { append: (script: { id?: string; src?: string; async?: boolean }) => scripts.push(script) },
    querySelector(selector: string) {
      if (selector === 'link[rel="canonical"]') return { href: canonical };
      return null;
    },
    createElement: () => ({}),
    getElementById: (id: string) => scripts.find((script) => script.id === id) ?? null,
    addEventListener(name: string, callback: Listener) {
      (listeners[name] ??= []).push(callback);
    },
  };

  const idleTasks: Array<() => void> = [];
  const window = {
    dataLayer: [] as unknown[],
    location: { origin: "https://chames.tn", href: "https://chames.tn/?utm_source=private#section" },
    addEventListener(name: string, callback: Listener) {
      (listeners[`window:${name}`] ??= []).push(callback);
    },
    requestIdleCallback(task: () => void) {
      idleTasks.push(task);
    },
  };

  const moduleCode = hasMeasurementId
    ? compiled
    : compiled.replace('"G-TEST123"', "undefined");
  new Function("window", "document", moduleCode)(window, document);

  function pageLoad() {
    for (const listener of listeners["astro:page-load"] ?? []) listener();
  }

  function setCanonical(value: string) {
    canonical = value;
  }

  function finishLoading() {
    document.readyState = "complete";
    for (const listener of listeners["window:load"] ?? []) listener();
    while (idleTasks.length) idleTasks.shift()?.();
  }

  return { window, scripts, pageLoad, setCanonical, finishLoading, listenerCount: listeners["astro:page-load"]?.length ?? 0 };
}

function events(harness: ReturnType<typeof createHarness>, name: string) {
  return harness.window.dataLayer.filter((entry) => entry[0] === "event" && entry[1] === name);
}

const site = createHarness();
assert.equal(site.scripts.length, 0, "the GA tag waits until the page has loaded");
assert.equal(events(site, "page_view").length, 1, "the first pageview is queued straight away");
site.finishLoading();
assert.equal(site.scripts.length, 1, "configured production ID loads one GA tag once the page is idle");
assert.match(site.scripts[0].src ?? "", /gtag\/js\?id=G-TEST123/);
const config = site.window.dataLayer.find((entry) => entry[0] === "config");
assert.equal(config?.[2].send_page_view, false, "manual pageviews are the only pageview source");
assert.equal(events(site, "page_view").length, 1, "one initial pageview is sent");
assert.deepEqual(events(site, "page_view")[0][2], {
  page_location: "https://chames.tn/",
  page_title: "Chames Dhibi — Portfolio",
  page_referrer: "https://search.example",
});
site.pageLoad();
assert.equal(events(site, "page_view").length, 1, "Astro's initial page-load does not duplicate initialization");

site.setCanonical("https://chames.tn/fr/?email=private@example.com#contact");
site.pageLoad();
assert.equal(events(site, "page_view").length, 2, "Astro route navigation sends one pageview");
assert.equal(events(site, "page_view")[1][2].page_location, "https://chames.tn/fr/");
assert.equal(events(site, "page_view")[1][2].page_referrer, "https://chames.tn/");
assert.equal(JSON.stringify(events(site, "page_view")).includes("private@example.com"), false, "query strings are excluded");
site.pageLoad();
assert.equal(events(site, "page_view").length, 2, "duplicate page-load for one canonical URL is deduplicated");
site.setCanonical("https://chames.tn/");
site.pageLoad();
assert.equal(events(site, "page_view").length, 3, "browser back navigation sends one pageview");
assert.equal(events(site, "page_view")[2][2].page_referrer, "https://chames.tn/fr/");
site.pageLoad();
assert.equal(events(site, "page_view").length, 3, "repeated page-load after back remains deduplicated");
assert.equal(site.scripts.length, 1, "Astro navigation does not add another tag");
assert.equal(site.listenerCount, 1, "one Astro page-load listener is registered");

const noId = createHarness({ hasMeasurementId: false });
noId.finishLoading();
assert.equal(noId.scripts.length, 0, "missing build-time ID disables analytics");
assert.equal(noId.window.dataLayer.length, 0, "missing ID sends no analytics events");

console.log("Analytics checks passed: tag loads after the page, one manual view per route, URL/referrer sanitization, and missing-ID safety.");
