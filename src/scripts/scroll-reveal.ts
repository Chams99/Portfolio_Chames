// Lightweight scroll reveal using IntersectionObserver
function initReveal() {
  const els = document.querySelectorAll<HTMLElement>("[data-reveal]");

  // assign stagger indices
  document.querySelectorAll("[data-reveal-stagger]").forEach((parent) => {
    parent.querySelectorAll<HTMLElement>(":scope > [data-reveal]").forEach((child, i) => {
      child.style.setProperty("--reveal-i", String(i));
    });
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  els.forEach((el) => observer.observe(el));
}

// Run on initial load
initReveal();

// Re-run after Astro view transitions
document.addEventListener("astro:after-swap", initReveal);
