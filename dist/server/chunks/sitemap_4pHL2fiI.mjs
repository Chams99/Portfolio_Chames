import { b as projectSlugs, s as siteConfig } from './site_CA3Q-_Nt.mjs';

const fallbackSite = new URL(siteConfig.siteUrl);
const GET = ({ site }) => {
  const urls = ["/", "/about", "/work", "/contact", ...projectSlugs.map((slug) => `/work/${slug}`)];
  const siteUrl = site ?? fallbackSite;
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${new URL(url, siteUrl).toString()}</loc></url>`).join("\n")}
</urlset>`;
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
