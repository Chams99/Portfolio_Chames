import { s as siteConfig } from './site_CA3Q-_Nt.mjs';

const fallbackSite = new URL(siteConfig.siteUrl);
function buildRobotsTxt(site) {
  return `User-agent: *
Allow: /

Sitemap: ${new URL("/sitemap.xml", site).toString()}
`;
}
const GET = ({ site }) => new Response(buildRobotsTxt(site ?? fallbackSite), {
  headers: {
    "Content-Type": "text/plain; charset=utf-8"
  }
});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
