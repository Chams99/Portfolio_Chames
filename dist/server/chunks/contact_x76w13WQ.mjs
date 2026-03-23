import { c as createComponent } from './astro-component_p_H4d2Hr.mjs';
import 'piccolore';
import { i as renderComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute } from './server_BudBFOcP.mjs';
import { $ as $$BaseLayout } from './BaseLayout_CQYW-qy5.mjs';
import { s as siteConfig, c as contactChannels, i as isExternalHref } from './site_D5q6Aank.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Contact", "description": "Contact Dhibi Chames Eddine for web apps, Flutter work, backend-powered products, and full-stack development." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="pb-16"> <section class="page-shell relative overflow-hidden pt-24 pb-12 md:pt-32 md:pb-20"> <p class="section-word pointer-events-none absolute left-0 top-20 text-[4.5rem] sm:text-[6.5rem] md:text-[10rem] lg:text-[11rem]">Contact</p> <div class="relative z-10 max-w-5xl"> <p class="eyebrow">Contact</p> <h1 class="display-monument mt-5 max-w-[13ch] text-[3.8rem] text-white sm:text-[4.8rem] md:text-[5.9rem] lg:text-[6.8rem]">
For projects that need
<span class="editorial-outline ml-2 inline-block">clean builds</span>
and solid execution.
</h1> <p class="mt-8 max-w-2xl text-base leading-7 text-white/62">
Open to web apps, Flutter work, APIs, internal tools, and backend-powered products that need clean execution and reliable foundations.
</p> </div> </section> <section class="section-line overflow-hidden"> <div class="page-shell grid gap-10 py-16 md:py-20 lg:grid-cols-[0.9fr_1.1fr]"> <div class="space-y-5"> <p class="eyebrow">Best fit</p> <h2 class="editorial-title text-5xl text-white md:text-6xl">Launch-ready product work.</h2> <p class="max-w-xl text-sm leading-6 text-white/62">
Best for web apps, mobile apps, APIs, internal tools, and product sites that need clear execution.
</p> <div class="atmospheric-card panel-gradient max-w-md p-6"> <p class="eyebrow">Primary contact</p> <a${addAttribute(`mailto:${siteConfig.email}`, "href")} class="mt-3 inline-flex min-w-0 max-w-full items-center gap-3 text-xl text-white transition-colors hover:text-[color:var(--primary)]"> <span class="[overflow-wrap:anywhere]">${siteConfig.email}</span> <span>↗</span> </a> </div> </div> <div class="grid gap-4 md:grid-cols-2"> ${contactChannels.map((item, index) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute(isExternalHref(item.href) ? "_blank" : void 0, "target")}${addAttribute(isExternalHref(item.href) ? "noreferrer" : void 0, "rel")}${addAttribute(`atmospheric-card panel-gradient flex min-h-48 flex-col justify-between p-6 hover:bg-white/[0.06] ${index % 2 === 1 ? "md:translate-y-10" : ""}`, "class")}> <div class="flex items-center justify-between gap-3"> <p class="eyebrow text-white/70">${item.label}</p> <span class="text-white/55">↗</span> </div> <p class="text-lg leading-7 text-white [overflow-wrap:anywhere]">${item.value}</p> </a>`)} </div> </div> </section> </main> ` })}`;
}, "D:/1_DEV/1_APORTFOLIO/portfolio v3/src/pages/contact.astro", void 0);

const $$file = "D:/1_DEV/1_APORTFOLIO/portfolio v3/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
