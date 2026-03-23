import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import { fileURLToPath } from "node:url";

export default defineConfig({
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
