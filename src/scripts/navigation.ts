export {};

let runController: AbortController | undefined;

function cleanupNavigation() {
  runController?.abort();
  runController = undefined;
}

function initNavigation() {
  cleanupNavigation();

  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  const nav = document.getElementById("desktop-nav");
  const indicator = document.getElementById("nav-indicator");
  const controller = new AbortController();
  const { signal } = controller;
  runController = controller;

  if (btn && menu) {
    let closeTimer: number | undefined;
    const header = btn.closest("header");

    const setOpen = (open: boolean) => {
      if (closeTimer) window.clearTimeout(closeTimer);

      btn.classList.toggle("active", open);
      btn.setAttribute("aria-expanded", String(open));

      if (open) {
        menu.hidden = false;
        menu.setAttribute("aria-hidden", "false");
        menu.removeAttribute("inert");
        requestAnimationFrame(() => menu.classList.add("open"));
        return;
      }

      menu.classList.remove("open");
      menu.setAttribute("aria-hidden", "true");
      menu.setAttribute("inert", "");

      if (menu.contains(document.activeElement)) {
        btn.focus();
      }

      closeTimer = window.setTimeout(() => {
        if (!menu.classList.contains("open")) menu.hidden = true;
      }, 240);
    };

    btn.addEventListener("click", () => {
      setOpen(btn.getAttribute("aria-expanded") !== "true");
    }, { signal });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setOpen(false), { signal });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && btn.getAttribute("aria-expanded") === "true") {
        setOpen(false);
      }
    }, { signal });

    document.addEventListener("click", (event) => {
      const target = event.target;
      if (
        btn.getAttribute("aria-expanded") === "true" &&
        target instanceof Node &&
        header &&
        !header.contains(target)
      ) {
        setOpen(false);
      }
    }, { signal });

    signal.addEventListener("abort", () => {
      if (closeTimer) window.clearTimeout(closeTimer);
      setOpen(false);
    }, { once: true });
  }

  document.querySelectorAll<HTMLAnchorElement>("[data-back-to-top]").forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = new URL(link.href, window.location.href);
      const staysOnThisPage =
        target.origin === window.location.origin &&
        target.pathname === window.location.pathname &&
        target.search === window.location.search;

      if (!staysOnThisPage) return;

      event.preventDefault();
      window.history.replaceState(null, "", `${target.pathname}${target.search}`);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      });
    }, { signal });
  });

  document.querySelectorAll<HTMLAnchorElement>('a[href$="#top"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = new URL(link.href, window.location.href);
      const staysOnThisPage =
        target.origin === window.location.origin &&
        target.pathname === window.location.pathname &&
        target.search === window.location.search &&
        target.hash === "#top";

      if (!staysOnThisPage) return;

      event.preventDefault();
      event.stopPropagation();
      window.history.replaceState(null, "", `${target.pathname}${target.search}#top`);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      });
    }, { signal });
  });

  document.querySelectorAll<HTMLAnchorElement>(
    'a[href$="#projects"], a[href$="#stack"], a[href$="#experiences"], a[href$="#contact"]',
  ).forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetUrl = new URL(link.href, window.location.href);
      const staysOnThisPage =
        targetUrl.origin === window.location.origin &&
        targetUrl.pathname === window.location.pathname &&
        targetUrl.search === window.location.search;
      const target = targetUrl.hash ? document.getElementById(targetUrl.hash.slice(1)) : null;

      if (!staysOnThisPage || !target) return;

      event.preventDefault();
      event.stopPropagation();
      window.history.replaceState(null, "", `${targetUrl.pathname}${targetUrl.search}${targetUrl.hash}`);

      const headerHeight = document.querySelector(".site-header-shell")?.getBoundingClientRect().height ?? 0;
      const targetTop = Math.max(0, target.getBoundingClientRect().top + window.scrollY - headerHeight - 16);

      window.scrollTo({
        top: targetTop,
        left: 0,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      });
    }, { signal });
  });

  if (!nav || !indicator) return;

  const links = nav.querySelectorAll<HTMLAnchorElement>("a[data-section]");
  if (!links.length) return;

  const moveIndicatorTo = (section: string): boolean => {
    const target = nav.querySelector<HTMLAnchorElement>(`a[data-section="${section}"]`);
    if (!target) {
      indicator.style.opacity = "0";
      return false;
    }

    indicator.style.opacity = "1";
    indicator.style.transform = `translateX(${target.offsetLeft}px)`;
    indicator.style.width = `${target.offsetWidth}px`;
    return true;
  };

  const path = window.location.pathname;
  if (path.includes("/work")) {
    moveIndicatorTo("projects");
    return;
  }

  if (path.includes("/contact")) {
    moveIndicatorTo("contact");
    return;
  }

  const sectionIds = ["top", "projects", "stack", "experiences", "contact"];
  const offset = 120;
  let current = "top";
  let ticking = false;

  const updateActiveSection = () => {
    const scrollPos = window.scrollY + offset;
    let active = "top";

    for (const id of sectionIds) {
      const section = document.getElementById(id);
      if (section && section.offsetTop <= scrollPos) active = id;
    }

    if (active !== current) {
      current = active;
      moveIndicatorTo(current);
    }
  };

  const onScroll = () => {
    if (ticking) return;
    window.requestAnimationFrame(() => {
      updateActiveSection();
      ticking = false;
    });
    ticking = true;
  };

  window.addEventListener("scroll", onScroll, { passive: true, signal });
  window.addEventListener("resize", () => moveIndicatorTo(current), { signal });
  moveIndicatorTo(current);
  updateActiveSection();
}

document.addEventListener("astro:before-swap", cleanupNavigation);
document.addEventListener("astro:page-load", initNavigation);

if (document.readyState !== "loading") initNavigation();
