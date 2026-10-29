import { siteConfig } from "@/data/site";

export function GET() {
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
          src: "/favicon.svg?v=cd",
          sizes: "any",
          type: "image/svg+xml",
        },
        {
          src: "/icon-192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/icon-512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    }),
    {
      headers: {
        "Content-Type": "application/manifest+json",
      },
    },
  );
}
