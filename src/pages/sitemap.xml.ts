import { getCanonicalUrl, projectSlugs } from "@/data/site";

export function GET() {
  const urls = ["/", "/about", "/work", "/contact", ...projectSlugs.map((slug) => `/work/${slug}`)];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((url) => `  <url><loc>${getCanonicalUrl(url)}</loc></url>`)
    .join("\n")}\n</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}
