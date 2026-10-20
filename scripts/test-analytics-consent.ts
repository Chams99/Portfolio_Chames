import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const source = await readFile(new URL("../src/scripts/analytics-consent.ts", import.meta.url), "utf8");
const browserCode = (await new Bun.Transpiler({ loader: "ts", target: "browser" }).transform(source)).replaceAll(
  "import.meta.env.PROD",
  "true",
);

function createHarness({ storageThrows = false }: { storageThrows?: boolean } = {}) {
  type Listener = { callback: (event?: { target: { closest: (selector: string) => object | null } }) => void; signal?: AbortSignal };
  const listeners: Record<string, Listener[]> = {};
  const store = new Map<string, string>();
  const scripts: Array<{ id?: string; src?: string; async?: boolean }> = [];
  let canonical = "https://chames.tn/";
  let controls = createControls();

  function createControls() {
    return {
      panel: { hidden: true, dataset: { measurementId: "G-TEST123" } },
      preferences: { hidden: true },
      accept: {},
      decline: {},
    };
  }

  const document = {
    title: "Chames Dhibi — Portfolio",
    referrer: "https://search.example/results?private=value#section",
    cookie: "",
    head: { append: (script: { id?: string; src?: string; async?: boolean }) => scripts.push(script) },
    querySelector(selector: string) {
      if (selector === "[data-analytics-consent]") return controls.panel;
      if (selector === "[data-analytics-preferences]") return controls.preferences;
      if (selector === "[data-analytics-accept]") return controls.accept;
      if (selector === "[data-analytics-decline]") return controls.decline;
      if (selector === 'link[rel="canonical"]') return { href: canonical };
      return null;
    },
    createElement: () => ({}),
    getElementById: () => null,
    addEventListener(name: string, callback: Listener["callback"], options?: { signal?: AbortSignal }) {
      (listeners[name] ??= []).push({ callback, signal: options?.signal });
    },
  };

  const window = {
    location: { origin: "https://chames.tn", hostname: "chames.tn", href: "https://chames.tn/?utm_source=private#section" },
    localStorage: {
      getItem(key: string) {
        if (storageThrows) throw new Error("storage unavailable");
        return store.get(key) ?? null;
      },
      setItem(key: string, value: string) {
        if (storageThrows) throw new Error("storage unavailable");
        store.set(key, value);
      },
    },
  };

  new Function("window", "document", "AbortController", browserCode)(window, document, AbortController);

  function dispatch(name: string, event?: Parameters<Listener["callback"]>[0]) {
    for (const listener of listeners[name] ?? []) {
      if (!listener.signal?.aborted) listener.callback(event);
    }
  }

  return {
    window,
    scripts,
    store,
    get controls() {
      return controls;
    },
    setCanonical(value: string) {
      canonical = value;
    },
    replaceControls() {
      controls = createControls();
    },
    pageLoad() {
      dispatch("astro:page-load");
    },
    beforeSwap() {
      dispatch("astro:before-swap");
    },
    click(selector: string) {
      dispatch("click", { target: { closest: (candidate) => (candidate === selector ? {} : null) } });
    },
  };
}

function pageViews(harness: ReturnType<typeof createHarness>) {
  return (harness.window.dataLayer ?? []).filter((entry) => entry[0] === "event" && entry[1] === "page_view");
}

const site = createHarness();
site.pageLoad();
assert.equal(site.scripts.length, 0, "no Google tag loads before consent");
assert.equal(site.window.dataLayer, undefined, "no tag queue exists before consent");

site.setCanonical("https://chames.tn/work/?email=private@example.com#work");
site.pageLoad();
assert.equal(site.scripts.length, 0, "pre-consent client navigation does not load the tag");
site.click("[data-analytics-accept]");
assert.equal(site.scripts.length, 1, "acceptance loads one Google tag");
assert.equal(site.store.get("portfolio-analytics-consent-v1"), "accepted");
assert.equal(site.window.dataLayer?.find((entry) => entry[0] === "config")?.[2].send_page_view, false);
assert.equal(pageViews(site).length, 1, "first acceptance records one current page view");
assert.equal(pageViews(site)[0][2].page_location, "https://chames.tn/work/");
assert.equal(pageViews(site)[0][2].page_referrer, "https://search.example", "first view retains only external referrer origin");

site.pageLoad();
assert.equal(pageViews(site).length, 1, "repeated page-load for the same route is deduplicated");
site.beforeSwap();
site.setCanonical("https://chames.tn/fr/?email=private@example.com#contact");
site.replaceControls();
site.pageLoad();
assert.equal(site.controls.preferences.hidden, false, "footer control is refreshed after Astro swaps the page");
assert.equal(pageViews(site).length, 2, "one view is recorded for the next client route");
assert.equal(pageViews(site)[1][2].page_location, "https://chames.tn/fr/");
assert.equal(pageViews(site)[1][2].page_referrer, "https://chames.tn/work/");

site.click("[data-analytics-preferences]");
assert.equal(site.controls.panel.hidden, false, "preferences can reopen after navigation");
site.click("[data-analytics-decline]");
assert.equal(site.store.get("portfolio-analytics-consent-v1"), "declined");
assert.equal(site.window["ga-disable-G-TEST123"], true, "declining disables future tag events");
site.beforeSwap();
site.setCanonical("https://chames.tn/work/");
site.replaceControls();
site.pageLoad();
assert.equal(site.controls.panel.hidden, true, "decline remains in effect after navigation");
assert.equal(pageViews(site).length, 2, "declined navigation sends no page view");
site.click("[data-analytics-preferences]");
site.click("[data-analytics-accept]");
assert.equal(pageViews(site).length, 3, "accepting again records the current route");
assert.equal(site.window["ga-disable-G-TEST123"], false);
assert.equal(site.scripts.length, 1, "re-accepting does not insert a second Google script");

const blockedStorage = createHarness({ storageThrows: true });
blockedStorage.pageLoad();
assert.equal(blockedStorage.scripts.length, 0, "blocked storage defaults to no tracking");
blockedStorage.click("[data-analytics-accept]");
assert.equal(blockedStorage.scripts.length, 1, "in-memory consent still works for the current session");
assert.equal(pageViews(blockedStorage).length, 1);

console.log("Analytics consent checks passed: opt-in gate, one tag, manual route views, URL/referrer redaction, Astro swaps, revocation, and storage failures.");
