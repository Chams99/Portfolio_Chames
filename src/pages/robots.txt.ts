import { getCanonicalUrl } from "@/data/site";

export function GET() {
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${getCanonicalUrl("/sitemap.xml")}\n`;
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
