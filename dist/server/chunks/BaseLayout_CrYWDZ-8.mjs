import { c as createComponent } from './astro-component_CfxgHBJO.mjs';
import 'piccolore';
import { j as createRenderInstruction, m as maybeRenderHead, r as renderTemplate, i as renderComponent, g as addAttribute, k as renderHead, l as renderSlot } from './server_CxHHWH61.mjs';
import 'clsx';
import { s as siteConfig, n as navItems, c as contactChannels, i as isExternalHref, g as getCanonicalUrl } from './site_D5q6Aank.mjs';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$HelloMarquee = createComponent(($$result, $$props, $$slots) => {
  const texts = ["Hello", "Hola", "Hallo", "Bonjour", "Ciao", "مرحبا"];
  const sequence = texts.join(" • ");
  return renderTemplate`${maybeRenderHead()}<div class="border-y border-white/8 py-4"> <div class="marquee"> <div class="marquee-track font-display text-[2.6rem] leading-none tracking-[-0.03em] text-white/90 md:text-[4rem]"> <span class="marquee-copy">${sequence}</span> <span class="marquee-copy" aria-hidden="true">${sequence}</span> </div> </div> </div>`;
}, "D:/1_DEV/1_APORTFOLIO/portfolio v3/src/astro/HelloMarquee.astro", void 0);

const $$SiteFooter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="section-line mt-24"> ${renderComponent($$result, "HelloMarquee", $$HelloMarquee, {})} <div class="page-shell py-14"> <div class="grid gap-10 lg:grid-cols-[1.2fr_0.9fr_0.9fr]"> <div class="space-y-4"> <p class="eyebrow">Closing note</p> <h2 class="editorial-title max-w-xl text-4xl text-white md:text-6xl">
Built for products that need clean code and clear UX.
</h2> <p class="max-w-lg text-sm leading-6 text-white/62">
Full-stack work across web, mobile, backend, and product sites.
</p> </div> <div class="space-y-3"> <p class="eyebrow">Navigate</p> <div class="flex flex-col gap-2"> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")} class="link-underline w-fit text-sm text-white/62 hover:text-white"> ${item.label} </a>`)} </div> </div> <div class="space-y-3"> <p class="eyebrow">Connect</p> <div class="flex flex-col gap-2"> ${contactChannels.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(isExternalHref(item.href) ? "_blank" : void 0, "target")}${addAttribute(isExternalHref(item.href) ? "noreferrer" : void 0, "rel")} class="link-underline w-fit text-sm text-white/62 hover:text-white"> ${item.label}: ${item.value} </a>`)} </div> </div> </div> <div class="mt-12 border-t border-white/8 pt-5 text-sm text-white/62">
Copyright ${(/* @__PURE__ */ new Date()).getFullYear()} ${siteConfig.name} </div> </div> </footer>`;
}, "D:/1_DEV/1_APORTFOLIO/portfolio v3/src/astro/SiteFooter.astro", void 0);

const $$SiteHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SiteHeader;
  const { pathname } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="sticky top-0 z-40 border-b border-white/8 bg-black/72 backdrop-blur-xl"> <header class="page-shell"> <nav class="flex items-center justify-between gap-4 py-5" aria-label="Main navigation"> <a href="/" class="group"> <div class="eyebrow text-white/75 transition-colors group-hover:text-white">${siteConfig.name}</div> <div class="text-sm text-white/62">Full-Stack Web &amp; Mobile Developer</div> </a> <div class="flex items-center gap-3 sm:gap-5"> ${navItems.map((item) => {
    const isActive = pathname === item.href;
    return renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(`link-underline text-sm ${isActive ? "text-white" : "text-white/62 hover:text-white"}`, "class")}${addAttribute(isActive ? "page" : void 0, "aria-current")}> ${item.label} </a>`;
  })} </div> </nav> </header> </div>`;
}, "D:/1_DEV/1_APORTFOLIO/portfolio v3/src/astro/SiteHeader.astro", void 0);

const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title = siteConfig.title,
    description = siteConfig.description,
    canonical = getCanonicalUrl(Astro2.url.pathname)
  } = Astro2.props;
  const pageTitle = title === siteConfig.title ? title : `${title} | ${siteConfig.name}`;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${pageTitle}</title><meta name="description"${addAttribute(description, "content")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="theme-color" content="#0b0a0f"><meta property="og:type" content="website"><meta property="og:locale"${addAttribute(siteConfig.locale, "content")}><meta property="og:site_name"${addAttribute(siteConfig.shortName, "content")}><meta property="og:title"${addAttribute(pageTitle, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:url"${addAttribute(canonical, "content")}><meta property="og:image"${addAttribute(getCanonicalUrl(siteConfig.ogImage), "content")}><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(pageTitle, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(getCanonicalUrl(siteConfig.ogImage), "content")}><link rel="canonical"${addAttribute(canonical, "href")}><link rel="icon" href="/opengraph-image.png"><link rel="manifest" href="/manifest.webmanifest"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:wght@400;500;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">${maybeRenderHead()}<noscript><style>
        [data-simplebar] {
          overflow: auto;
        }
      </style></noscript>${renderHead()}</head> <body> <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:border focus:border-white/10 focus:bg-black focus:px-4 focus:py-2 focus:text-sm focus:text-white">
Skip to content
</a> <div class="min-h-screen"> ${renderComponent($$result, "SiteHeader", $$SiteHeader, { "pathname": Astro2.url.pathname })} <div id="main-content" tabindex="-1"> ${renderSlot($$result, $$slots["default"])} </div> ${renderComponent($$result, "SiteFooter", $$SiteFooter, {})} </div> ${renderScript($$result, "D:/1_DEV/1_APORTFOLIO/portfolio v3/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "D:/1_DEV/1_APORTFOLIO/portfolio v3/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
