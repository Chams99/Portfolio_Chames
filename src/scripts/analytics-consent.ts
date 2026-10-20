type ConsentChoice = "accepted" | "declined" | null;
type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

const choiceKey = "portfolio-analytics-consent-v1";
const measurementId = document
  .querySelector<HTMLElement>("[data-analytics-consent]")
  ?.dataset.measurementId;
const hasConsentControls = Boolean(
  document.querySelector("[data-analytics-consent]") &&
  document.querySelector("[data-analytics-preferences]") &&
  document.querySelector("[data-analytics-accept]") &&
  document.querySelector("[data-analytics-decline]"),
);

if (
  import.meta.env.PROD &&
  measurementId &&
  /^G-[A-Z0-9]+$/.test(measurementId) &&
  hasConsentControls
) {
  let choice = readChoice();
  let currentPageLocation: string | null = null;
  let currentPageReferrer = sanitizeReferrer(document.referrer);
  let lastSentPageLocation: string | null = null;
  let hasSentPageView = false;
  let tagInitialized = false;
  let clickController: AbortController | null = null;

  const analyticsDisableKey = `ga-disable-${measurementId}`;

  function updateConsentUi() {
    const panel = document.querySelector<HTMLElement>("[data-analytics-consent]");
    const preferences = document.querySelector<HTMLButtonElement>("[data-analytics-preferences]");
    if (panel) panel.hidden = choice !== null;
    if (preferences) preferences.hidden = false;
  }

  function readChoice(): ConsentChoice {
    try {
      const value = window.localStorage.getItem(choiceKey);
      return value === "accepted" || value === "declined" ? value : null;
    } catch {
      return null;
    }
  }

  function saveChoice(nextChoice: Exclude<ConsentChoice, null>) {
    choice = nextChoice;
    try {
      window.localStorage.setItem(choiceKey, nextChoice);
    } catch {
      // Keep this session's choice in memory; a later page load safely asks again.
    }
  }

  function canonicalPageLocation() {
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.href;
    const page = new URL(canonical || window.location.href, window.location.origin);
    return `${page.origin}${page.pathname}`;
  }

  function sanitizeReferrer(value: string) {
    if (!value) return "";

    try {
      const referrer = new URL(value, window.location.origin);
      if (referrer.origin === window.location.origin) {
        return `${referrer.origin}${referrer.pathname}`;
      }

      return referrer.origin;
    } catch {
      return "";
    }
  }

  function clearGoogleAnalyticsCookies() {
    const names = document.cookie
      .split(";")
      .map((cookie) => cookie.trim().split("=")[0])
      .filter((name) => /^_ga(?:_|$)/.test(name));
    const host = window.location.hostname;
    const domains = ["", `; domain=${host}`];

    if (host === "chames.tn" || host.endsWith(".chames.tn")) {
      domains.push("; domain=.chames.tn");
    }

    for (const name of names) {
      for (const domain of domains) {
        document.cookie = `${name}=; max-age=0; path=/${domain}; SameSite=Lax`;
      }
    }
  }

  function initializeTag() {
    if (tagInitialized) return;

    window[analyticsDisableKey as keyof Window] = false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtag() {
      window.dataLayer?.push(arguments);
    };

    window.gtag("consent", "default", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "denied",
    });
    window.gtag("js", new Date());
    window.gtag("consent", "update", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
    window.gtag("config", measurementId, {
      send_page_view: false,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
    });

    if (!document.getElementById("portfolio-ga4-script")) {
      const script = document.createElement("script");
      script.id = "portfolio-ga4-script";
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
      document.head.append(script);
    }

    tagInitialized = true;
  }

  function sendPageView() {
    if (choice !== "accepted") return;

    initializeTag();
    const pageLocation = currentPageLocation ?? canonicalPageLocation();
    if (pageLocation === lastSentPageLocation) return;

    window.gtag?.("event", "page_view", {
      page_location: pageLocation,
      page_title: document.title,
      page_referrer: currentPageReferrer,
    });
    lastSentPageLocation = pageLocation;
    hasSentPageView = true;
  }

  function onPageLoad() {
    bindClickHandler();
    updateConsentUi();
    const pageLocation = canonicalPageLocation();
    if (pageLocation !== currentPageLocation) {
      if (currentPageLocation && hasSentPageView) currentPageReferrer = currentPageLocation;
      currentPageLocation = pageLocation;
    }

    sendPageView();
  }

  function acceptAnalytics() {
    saveChoice("accepted");
    updateConsentUi();
    window[analyticsDisableKey as keyof Window] = false;

    if (tagInitialized) {
      window.gtag?.("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
    }

    sendPageView();
  }

  function declineAnalytics() {
    saveChoice("declined");
    updateConsentUi();
    lastSentPageLocation = null;
    window[analyticsDisableKey as keyof Window] = true;
    if (tagInitialized) {
      window.gtag?.("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
      });
    }
    clearGoogleAnalyticsCookies();
  }

  function handleDocumentClick(event: Event) {
    const target = event.target as Element | null;
    if (!target) return;

    if (target.closest("[data-analytics-preferences]")) {
      const panel = document.querySelector<HTMLElement>("[data-analytics-consent]");
      if (panel) panel.hidden = false;
    } else if (target.closest("[data-analytics-accept]")) {
      acceptAnalytics();
    } else if (target.closest("[data-analytics-decline]")) {
      declineAnalytics();
    }
  }

  function bindClickHandler() {
    clickController?.abort();
    clickController = new AbortController();
    document.addEventListener("click", handleDocumentClick, { signal: clickController.signal });
  }

  function cleanupClickHandler() {
    clickController?.abort();
    clickController = null;
  }

  bindClickHandler();
  document.addEventListener("astro:before-swap", cleanupClickHandler);
  document.addEventListener("astro:page-load", onPageLoad);

  updateConsentUi();
  if (choice === "accepted") {
    sendPageView();
  }
}
