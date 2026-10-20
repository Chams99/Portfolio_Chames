type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

const measurementId = import.meta.env.PUBLIC_GA4_MEASUREMENT_ID;

if (import.meta.env.PROD && measurementId && /^G-[A-Z0-9]+$/.test(measurementId)) {
  let currentPageLocation: string | null = null;
  let currentPageReferrer = sanitizeReferrer(document.referrer);
  let lastSentPageLocation: string | null = null;
  let tagInitialized = false;

  function canonicalPageLocation() {
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.href;
    const page = new URL(canonical || window.location.href, window.location.origin);
    return `${page.origin}${page.pathname}`;
  }

  function sanitizeReferrer(value: string) {
    if (!value) return "";

    try {
      const referrer = new URL(value, window.location.origin);
      return referrer.origin === window.location.origin
        ? `${referrer.origin}${referrer.pathname}`
        : referrer.origin;
    } catch {
      return "";
    }
  }

  function initializeTag() {
    if (tagInitialized) return;

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtag() {
      window.dataLayer?.push(arguments);
    };
    window.gtag("js", new Date());
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

  function onPageLoad() {
    const pageLocation = canonicalPageLocation();
    if (pageLocation !== currentPageLocation) {
      if (currentPageLocation) currentPageReferrer = currentPageLocation;
      currentPageLocation = pageLocation;
    }

    if (pageLocation === lastSentPageLocation) return;

    initializeTag();
    window.gtag?.("event", "page_view", {
      page_location: pageLocation,
      page_title: document.title,
      page_referrer: currentPageReferrer,
    });
    lastSentPageLocation = pageLocation;
  }

  document.addEventListener("astro:page-load", onPageLoad);
  onPageLoad();
}
