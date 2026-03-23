import { c as createComponent } from './astro-component_CfxgHBJO.mjs';
import 'piccolore';
import { i as renderComponent, r as renderTemplate, m as maybeRenderHead } from './server_CxHHWH61.mjs';
import { $ as $$ProjectCard } from './ProjectCard_Da0QkQK0.mjs';
import { $ as $$BaseLayout } from './BaseLayout_CrYWDZ-8.mjs';
import { d as projects } from './site_D5q6Aank.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Work", "description": "Selected case studies from Chames Dhibi across digital products, service platforms, company websites, and interactive tools." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="pb-16"> <section class="page-shell relative overflow-hidden py-12 md:py-20"> <p class="section-word pointer-events-none absolute left-0 top-14 text-[5rem] sm:text-[8rem] md:text-[13rem]">Archive</p> <div class="relative z-10 max-w-5xl"> <p class="eyebrow">Archive</p> <h1 class="display-monument mt-5 text-[4.3rem] text-white sm:text-[5.4rem] md:text-[7.4rem]">
Selected work with a
<span class="editorial-outline ml-2 inline-block">sharper presence</span>
.
</h1> <p class="mt-6 max-w-xl text-base leading-7 text-white/62">Websites, tools, and apps built for clarity, presence, and real use.</p> </div> </section> <section class="section-line overflow-hidden"> <div class="page-shell py-16 md:py-20"> <div class="grid gap-6 lg:grid-cols-12"> ${projects.map((project, index) => {
    const layouts = [
      "lg:col-span-7",
      "lg:col-span-5 lg:pt-10",
      "lg:col-span-6",
      "lg:col-span-6 lg:pt-10",
      "lg:col-span-5",
      "lg:col-span-7 lg:pt-10"
    ];
    return renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "project": project, "compact": true, "className": layouts[index % layouts.length] })}`;
  })} </div> </div> </section> </main> ` })}`;
}, "D:/1_DEV/1_APORTFOLIO/portfolio v3/src/pages/work/index.astro", void 0);

const $$file = "D:/1_DEV/1_APORTFOLIO/portfolio v3/src/pages/work/index.astro";
const $$url = "/work";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
