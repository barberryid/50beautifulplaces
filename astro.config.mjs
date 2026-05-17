import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.50beautifulplaces.com",
  output: "static",
  integrations: [sitemap()]
});
