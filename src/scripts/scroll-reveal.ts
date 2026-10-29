let observer: IntersectionObserver | undefined;

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function clearReveal() {
  observer?.disconnect();
  observer = undefined;
  document.documentElement.classList.remove("reveal-ready");
}

function revealImmediately(elements: NodeListOf<HTMLElement>) {
  elements.forEach((element) => element.classList.add("revealed"));
}

function initReveal() {
  clearReveal();

  const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
  if (!elements.length) return;

  document.querySelectorAll("[data-reveal-stagger]").forEach((parent) => {
    parent.querySelectorAll<HTMLElement>(":scope > [data-reveal]").forEach((child, index) => {
      child.style.setProperty("--reveal-i", String(index));
    });
  });

  if (reducedMotion.matches || !("IntersectionObserver" in window)) {
    revealImmediately(elements);
    return;
  }

  // Only stage an optional reveal after this controller is ready. If the
  // bundle fails or JavaScript is disabled, the default CSS remains visible.
  document.documentElement.classList.add("reveal-ready");
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("revealed");
        observer?.unobserve(entry.target);
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
  );

  elements.forEach((element) => observer?.observe(element));
}

document.addEventListener("astro:before-swap", clearReveal);
document.addEventListener("astro:page-load", initReveal);
reducedMotion.addEventListener("change", initReveal);

if (document.readyState !== "loading") initReveal();
