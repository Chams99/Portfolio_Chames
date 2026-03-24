import type { APIRoute } from "astro";
import { siteConfig } from "@/data/site";

const fallbackSite = new URL(siteConfig.siteUrl);

function buildRobotsTxt(site: URL) {
  return `User-agent: *\nAllow: /\n\nSitemap: ${new URL("/sitemap.xml", site).toString()}\n`;
}

export const GET: APIRoute = ({ site }) =>
  new Response(buildRobotsTxt(site ?? fallbackSite), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
