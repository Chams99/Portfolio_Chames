import node from "@astrojs/node";
import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";

const fallbackSiteUrl = "https://v1.chames.dhibi.tn";

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL ?? fallbackSiteUrl,
  output: "static",
  adapter: node({
    mode: "standalone",
  }),
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  redirects: {
    "/about": "/",
    "/fr/a-propos": "/fr",
  },
  server: {
    host: true,
    port: 3000,
  },
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "astro/entrypoints/prerender": fileURLToPath(new URL("./node_modules/astro/dist/entrypoints/prerender.js", import.meta.url)),
      },
    },
  },
});
