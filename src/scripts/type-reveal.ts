// Optional masked line-by-line headline reveals.
// Static text remains visible while this enhancement loads or fails.

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let splits: SplitText[] = [];
let triggers: ScrollTrigger[] = [];
let runId = 0;

function teardown() {
  runId += 1;
  triggers.forEach((trigger) => trigger.kill());
  triggers = [];
  splits.forEach((split) => split.revert());
  splits = [];
}

async function fontsSettled() {
  if (!document.fonts) return;
  await Promise.race([
    document.fonts.ready,
    new Promise((resolve) => window.setTimeout(resolve, 2000)),
  ]);
}

async function init() {
  teardown();
  const currentRun = ++runId;

  if (reducedMotion.matches) return;

  await fontsSettled();
  if (currentRun !== runId) return;

  document.querySelectorAll<HTMLElement>("[data-split]").forEach((element) => {
    const split = new SplitText(element, {
      type: "lines",
      linesClass: "split-line",
      mask: "lines",
      autoSplit: true,
    });
    splits.push(split);

    const tween = gsap.from(split.lines, {
      yPercent: 118,
      duration: 1.1,
      ease: "power3.out",
      stagger: 0.085,
      scrollTrigger: {
        trigger: element,
        start: "top 88%",
        once: true,
      },
    });

    if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
  });
}

function initSafely() {
  init().catch((error) => {
    // The base copy is already visible, so an optional motion failure is safe.
    console.error("[type-reveal] optional animation skipped:", error);
  });
}

document.addEventListener("astro:before-swap", teardown);
document.addEventListener("astro:page-load", initSafely);
reducedMotion.addEventListener("change", initSafely);

if (document.readyState !== "loading") initSafely();
