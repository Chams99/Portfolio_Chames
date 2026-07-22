// Masked line-by-line headline reveals.
// Targets any element marked [data-split].

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

let splits: SplitText[] = [];
let triggers: ScrollTrigger[] = [];

function show(el: Element) {
  el.classList.add("split-ready");
}

function showAll() {
  document.querySelectorAll("[data-split]").forEach(show);
}

// Only tear down what this module created — leaves any other ScrollTrigger alone.
function teardown() {
  triggers.forEach((t) => t.kill());
  triggers = [];
  splits.forEach((s) => s.revert());
  splits = [];
}

// SplitText measures rendered line boxes. Splitting before Bodoni Moda swaps in
// would break lines against fallback metrics, then leave them wrong after swap.
async function fontsSettled() {
  if (!document.fonts) return;
  await Promise.race([
    document.fonts.ready,
    new Promise((resolve) => setTimeout(resolve, 2000)),
  ]);
}

// Bumped per run so a slow run that lost the race can't split over a newer one.
let runId = 0;

async function init() {
  const myRun = ++runId;
  teardown();

  if (reducedMotion.matches) {
    showAll();
    return;
  }

  await fontsSettled();
  if (myRun !== runId) return;

  document.querySelectorAll<HTMLElement>("[data-split]").forEach((el) => {
    const split = new SplitText(el, {
      type: "lines",
      linesClass: "split-line",
      mask: "lines",
      autoSplit: true,
    });
    splits.push(split);
    show(el);

    const tween = gsap.from(split.lines, {
      yPercent: 118,
      duration: 1.1,
      ease: "power3.out",
      stagger: 0.085,
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        once: true,
      },
    });

    if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
  });
}

// Last resort: if anything above throws, text must never stay invisible.
function initSafely() {
  init().catch((err) => {
    console.error("[type-reveal] falling back to static text:", err);
    showAll();
  });
}

// Fires on every ClientRouter navigation.
document.addEventListener("astro:page-load", initSafely);

// GSAP is a large import, so this module can finish executing *after*
// astro:page-load already fired. Without this the event never comes again and
// the staged headlines stay hidden permanently.
if (document.readyState !== "loading") {
  initSafely();
}

// Dead-man switch: staging relies on CSS that hides [data-split]. If init has
// not un-hidden them by now, something went wrong — show the text regardless.
setTimeout(() => {
  const stuck = document.querySelectorAll("[data-split]:not(.split-ready)");
  if (stuck.length) {
    console.warn("[type-reveal] reveal never ran; forcing text visible");
    document.documentElement.classList.remove("js-split");
    stuck.forEach(show);
  }
}, 3000);

// If motion preference flips mid-session, re-stage rather than leaving it stale.
reducedMotion.addEventListener("change", initSafely);
