import { g as getCanonicalUrl } from './site_D5q6Aank.mjs';

function GET() {
  const body = `User-agent: *
Allow: /

Sitemap: ${getCanonicalUrl("/sitemap.xml")}
`;
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
