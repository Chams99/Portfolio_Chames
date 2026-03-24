import { c as createComponent } from './astro-component_ClCll87c.mjs';
import 'piccolore';
import { i as renderComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute } from './server_CaBh-Yw7.mjs';
import { $ as $$ProjectCard } from './ProjectCard_C1ZukFIE.mjs';
import { $ as $$BaseLayout } from './BaseLayout_PlYOITJw.mjs';
import { b as projectSlugs, g as getProjectBySlug, f as featuredProjects } from './site_CA3Q-_Nt.mjs';

function getStaticPaths() {
  return projectSlugs.map((slug) => ({ params: { slug } }));
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const project = slug ? getProjectBySlug(slug) : void 0;
  if (!project) {
    return Astro2.redirect("/404");
  }
  const relatedProjects = featuredProjects.filter((item) => item.slug !== project.slug).slice(0, 2);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": project.title, "description": project.summary }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="pb-16"> <section class="page-shell relative overflow-hidden py-12 md:py-16"> <p class="section-word pointer-events-none absolute left-0 top-16 text-[5rem] sm:text-[7rem] md:text-[12rem]">${project.category}</p> <a href="/work" class="link-underline relative z-10 inline-flex items-center gap-2 text-sm text-white/62 hover:text-white"> <span>&larr;</span>
Back to work
</a> <div class="relative z-10 mt-10 grid gap-12 lg:grid-cols-[1.05fr_0.95fr]"> <div> <p class="eyebrow">${project.year}</p> <h1 class="display-monument mt-4 text-[4.3rem] text-white sm:text-[5.2rem] md:text-[7rem]">${project.title}</h1> <div class="mt-8 flex flex-wrap gap-2"> ${project.roles.slice(0, 3).map((role) => renderTemplate`<span class="rounded-full border border-white/10 px-3 py-1 text-[0.7rem] uppercase tracking-[0.24em] text-white/55"> ${role} </span>`)} </div> </div> <aside class="atmospheric-card panel-gradient glow-accent relative overflow-hidden p-6"> <p class="section-word pointer-events-none absolute -right-4 bottom-0 text-[4rem] md:text-[6rem]">Note</p> <div class="relative z-10"> <p class="eyebrow">Opening note</p> <p class="mt-4 max-w-md text-sm leading-6 text-white/62">${project.intro}</p> ${project.metrics?.length ? renderTemplate`<div class="mt-8 grid gap-3 sm:grid-cols-2"> ${project.metrics.map((metric, index) => renderTemplate`<div${addAttribute(`rounded-2xl border border-white/8 bg-white/[0.04] p-4 ${index === 1 ? "sm:translate-y-6" : ""}`, "class")}> <p class="eyebrow">${metric.label}</p> <p class="mt-3 text-lg text-white">${metric.value}</p> </div>`)} </div>` : null} ${project.externalLink ? renderTemplate`<a${addAttribute(project.externalLink, "href")} target="_blank" rel="noreferrer" class="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white hover:bg-white/5">
Visit project
<span>&larr;</span> </a>` : null} </div> </aside> </div> </section> <section class="section-line overflow-hidden"> <div class="page-shell py-12 md:py-16"> <div class="grid gap-6 lg:grid-cols-12"> <div class="image-frame relative min-h-[24rem] lg:col-span-8 lg:aspect-[16/10]"> <img${addAttribute(project.heroImage, "src")}${addAttribute(project.title, "alt")} class="h-full w-full object-cover"> </div> <div class="atmospheric-card panel-gradient flex flex-col justify-end p-6 lg:col-span-4 lg:translate-y-16"> <p class="eyebrow text-[color:var(--primary)]">Core idea</p> <p class="mt-4 text-2xl leading-tight text-white">${project.quote}</p> </div> </div> </div> </section> <section class="section-line overflow-hidden"> <div class="page-shell relative py-16 md:py-20"> <p class="section-word pointer-events-none absolute right-0 top-8 text-[4.5rem] sm:text-[6.5rem] md:text-[10rem]">Story</p> <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-12"> <article class="atmospheric-card p-7 lg:col-span-4"> <p class="eyebrow">Problem</p> <p class="mt-4 text-sm leading-6 text-white/62">${project.problem}</p> </article> <article class="atmospheric-card p-7 lg:col-span-5"> <p class="eyebrow text-[color:var(--primary)]">Creative approach</p> <p class="mt-4 text-sm leading-6 text-white/62">${project.creativeApproach}</p> </article> <article class="atmospheric-card p-7 lg:col-span-3"> <p class="eyebrow">Outcome</p> <p class="mt-4 text-sm leading-6 text-white/62">${project.outcome}</p> </article> </div> </div> </section> <section class="section-line overflow-hidden"> <div class="page-shell relative py-16 md:py-20"> <p class="section-word pointer-events-none absolute left-0 top-12 text-[4.5rem] sm:text-[6.5rem] md:text-[10rem]">Frames</p> <div class="relative z-10 grid gap-4 md:grid-cols-2 lg:grid-cols-12"> ${project.gallery.map((image, index) => {
    const layout = index === 0 ? "lg:col-span-7 lg:aspect-[16/9]" : index === 1 ? "lg:col-span-5 lg:pt-10" : "lg:col-span-6";
    return renderTemplate`<div${addAttribute(`image-frame relative min-h-72 aspect-[4/5] ${layout}`, "class")}> <img${addAttribute(image, "src")}${addAttribute(`${project.title} gallery image ${index + 1}`, "alt")} class="h-full w-full object-cover"> </div>`;
  })} </div> </div> </section> ${relatedProjects.length ? renderTemplate`<section class="section-line overflow-hidden"> <div class="page-shell relative py-16 md:py-20"> <p class="section-word pointer-events-none absolute right-0 top-16 text-[4.5rem] sm:text-[6.5rem] md:text-[10rem]">Next</p> <div class="relative z-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"> <div> <p class="eyebrow">Related work</p> <h2 class="display-monument mt-4 text-[3.6rem] text-white sm:text-[4.4rem] md:text-[5.6rem]">More case studies</h2> </div> <a href="/work" class="link-underline w-fit text-sm text-white/62 hover:text-white">Return to archive</a> </div> <div class="relative z-10 mt-10 grid gap-6 md:grid-cols-2"> ${relatedProjects.map((item, index) => renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "project": item, "compact": true, "className": index === 1 ? "md:pt-8" : "" })}`)} </div> </div> </section>` : null} </main> ` })}`;
}, "D:/1_DEV/1_APORTFOLIO/portfolio v3/src/pages/work/[slug].astro", void 0);

const $$file = "D:/1_DEV/1_APORTFOLIO/portfolio v3/src/pages/work/[slug].astro";
const $$url = "/work/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
