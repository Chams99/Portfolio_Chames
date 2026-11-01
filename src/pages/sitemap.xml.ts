import type { APIRoute } from "astro";
import { getCanonicalUrl, siteConfig } from "@/data/site";

const fallbackSite = new URL(siteConfig.siteUrl);

export const GET: APIRoute = ({ site }) => {
  const englishUrls = ["/", "/work", "/contact"];
  const frenchUrls = ["/fr", "/fr/work", "/fr/contact"];
  const urls = [...englishUrls, ...frenchUrls];
  const siteUrl = site ?? fallbackSite;
  const portraitUrl = getCanonicalUrl(siteConfig.portraitImage, siteUrl);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n${urls
    .map((url) => {
      const image = url === "/" || url === "/fr"
        ? `<image:image><image:loc>${portraitUrl}</image:loc></image:image>`
        : "";
      return `  <url><loc>${getCanonicalUrl(url, siteUrl)}</loc>${image}</url>`;
    })
    .join("\n")}\n</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
