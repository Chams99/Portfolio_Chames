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
          src: "/app-icon.png",
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
