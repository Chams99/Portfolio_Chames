import { c as createComponent } from './astro-component_CfxgHBJO.mjs';
import 'piccolore';
import { m as maybeRenderHead, g as addAttribute, r as renderTemplate, i as renderComponent } from './server_CxHHWH61.mjs';
import 'clsx';
import { $ as $$BaseLayout } from './BaseLayout_CrYWDZ-8.mjs';
import { p as principles, e as experience, a as processSteps } from './site_D5q6Aank.mjs';

const $$ExperienceStack = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$ExperienceStack;
  const { items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid gap-5"> ${items.map((item, index) => renderTemplate`<article${addAttribute(`atmospheric-card panel-gradient p-7 ${index % 2 === 1 ? "md:ml-12" : ""}`, "class")}> <p class="eyebrow">${item.period}</p> <h3 class="mt-4 text-2xl text-white">${item.title}</h3> <p class="mt-2 text-sm text-[color:var(--primary)]">${item.place}</p> <p class="mt-4 text-sm leading-6 text-white/62">${item.details}</p> </article>`)} </div>`;
}, "D:/1_DEV/1_APORTFOLIO/portfolio v3/src/astro/ExperienceStack.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About", "description": "About Dhibi Chames Eddine, a full-stack web and mobile developer building products across frontend, backend, and mobile." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="pb-16"> <section class="page-shell relative overflow-hidden py-12 md:py-20"> <p class="section-word pointer-events-none absolute left-0 top-12 text-[5rem] sm:text-[7rem] md:text-[12rem]">About</p> <div class="relative z-10 grid gap-12 lg:grid-cols-[1.06fr_0.94fr]"> <div> <p class="eyebrow">About</p> <h1 class="display-monument mt-5 text-[4.3rem] text-white sm:text-[5.4rem] md:text-[7rem]">
Building products that stay
<span class="editorial-outline ml-2 inline-block">usable</span>
,
<br>
fast, and reliable.
</h1> <div class="mt-8 grid gap-5 text-base leading-7 text-white/62"> <p>I work across frontend, backend, and mobile, so the product work is always tied to real implementation.</p> <p>That comes from current computer science studies at Universite de Gafsa and ongoing freelance work across web, mobile, and APIs.</p> </div> </div> <div class="grid gap-4 lg:grid-rows-[auto_1fr_auto]"> <div class="ml-auto max-w-sm rounded-[1.75rem] border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur-sm"> <p class="eyebrow text-white/70">Current direction</p> <p class="mt-2 text-sm leading-6 text-white/86">Next.js, Flutter, Node.js, and products built for real users.</p> </div> <div class="relative mx-auto w-full max-w-[31rem]"> <div class="image-frame relative aspect-[4/5] overflow-hidden rounded-[2.6rem]"> <div class="absolute inset-0 z-[1] bg-gradient-to-t from-black/35 via-transparent to-transparent"></div> <img src="/images/avatar.webp" alt="Portrait of Chames Dhibi" class="h-full w-full object-cover"> </div> </div> <div class="max-w-sm rounded-[1.75rem] border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur-sm"> <p class="eyebrow text-[color:var(--primary)]">What matters most</p> <p class="mt-2 text-sm leading-6 text-white/82">The product should be clear, stable, and ready to ship.</p> </div> </div> </div> </section> <section class="section-line overflow-hidden"> <div class="page-shell relative py-16 md:py-20"> <p class="section-word pointer-events-none absolute right-0 top-10 text-[5rem] sm:text-[7rem] md:text-[11rem]">Values</p> <div class="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]"> <div><p class="eyebrow">Principles</p></div> <div class="grid gap-5 md:grid-cols-3"> ${principles.map((item, index) => renderTemplate`<article${addAttribute(`atmospheric-card p-7 ${index === 1 ? "md:translate-y-12" : ""}`, "class")}> <h2 class="text-2xl text-white">${item.title}</h2> <p class="mt-4 text-sm leading-6 text-white/62">${item.body}</p> </article>`)} </div> </div> </div> </section> <section class="section-line overflow-hidden"> <div class="page-shell relative py-16 md:py-20"> <p class="section-word pointer-events-none absolute left-0 top-10 text-[5rem] sm:text-[7rem] md:text-[11rem]">Path</p> <div class="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]"> <div><p class="eyebrow">Experience</p></div> ${renderComponent($$result2, "ExperienceStack", $$ExperienceStack, { "items": experience })} </div> </div> </section> <section class="section-line overflow-hidden"> <div class="page-shell relative py-16 md:py-20"> <p class="section-word pointer-events-none absolute right-0 top-16 text-[5rem] sm:text-[7rem] md:text-[10rem]">Process</p> <div class="max-w-3xl"> <p class="eyebrow">How I work</p> <h2 class="display-monument mt-4 text-[3.8rem] text-white sm:text-[4.8rem] md:text-[6rem]">
Clear process.
<span class="editorial-outline ml-2 inline-block">Better result.</span> </h2> </div> <div class="mt-10 grid gap-4 md:grid-cols-2"> ${processSteps.map((step, index) => renderTemplate`<article${addAttribute(`atmospheric-card panel-gradient p-7 ${index % 2 === 1 ? "md:translate-y-10" : ""}`, "class")}> <p class="eyebrow text-[color:var(--primary)]">${step.label}</p> <h3 class="mt-4 text-2xl text-white">${step.title}</h3> <p class="mt-3 text-sm leading-6 text-white/62">${step.body}</p> </article>`)} </div> </div> </section> </main> ` })}`;
}, "D:/1_DEV/1_APORTFOLIO/portfolio v3/src/pages/about.astro", void 0);

const $$file = "D:/1_DEV/1_APORTFOLIO/portfolio v3/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
