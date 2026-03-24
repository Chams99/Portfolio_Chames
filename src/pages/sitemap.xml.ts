import type { APIRoute } from "astro";
import { projectSlugs, siteConfig } from "@/data/site";

const fallbackSite = new URL(siteConfig.siteUrl);

export const GET: APIRoute = ({ site }) => {
  const urls = ["/", "/about", "/work", "/contact", ...projectSlugs.map((slug) => `/work/${slug}`)];
  const siteUrl = site ?? fallbackSite;
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((url) => `  <url><loc>${new URL(url, siteUrl).toString()}</loc></url>`)
    .join("\n")}\n</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
