import { c as createComponent } from './astro-component_CfxgHBJO.mjs';
import 'piccolore';
import { i as renderComponent, r as renderTemplate, m as maybeRenderHead } from './server_CxHHWH61.mjs';
import { $ as $$BaseLayout } from './BaseLayout_CrYWDZ-8.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Not Found", "description": "Page not found." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="page-shell py-24"> <p class="eyebrow">404</p> <h1 class="editorial-title mt-4 text-5xl text-white md:text-7xl">Page not found.</h1> <p class="mt-6 max-w-lg text-base leading-7 text-white/62">The page you are looking for does not exist or has moved.</p> <a href="/" class="mt-8 inline-flex rounded-full border border-white/10 px-5 py-3 text-sm text-white hover:bg-white/5">
Back home
</a> </main> ` })}`;
}, "D:/1_DEV/1_APORTFOLIO/portfolio v3/src/pages/404.astro", void 0);

const $$file = "D:/1_DEV/1_APORTFOLIO/portfolio v3/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
