import { s as siteConfig } from './site_CA3Q-_Nt.mjs';

function GET() {
  return new Response(
    JSON.stringify({
      name: siteConfig.name,
      short_name: siteConfig.shortName,
      start_url: "/",
      display: "standalone",
      background_color: "#0b0a0f",
      theme_color: "#0b0a0f",
      icons: [
        {
          src: "/opengraph-image.png",
          sizes: "1200x630",
          type: "image/png"
        }
      ]
    }),
    {
      headers: {
        "Content-Type": "application/manifest+json"
      }
    }
  );
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
