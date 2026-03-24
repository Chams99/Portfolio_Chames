import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import { fileURLToPath } from "node:url";

const fallbackSiteUrl = "https://v1.chames.dhibi.tn";

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL ?? fallbackSiteUrl,
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  server: {
    host: true,
    port: 3000,
  },
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
});
