// @ts-check
import { defineConfig } from "astro/config";
import sitemap, { ChangeFreqEnum } from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const siteUrl = "https://50beautifulplaces.com";
const lastmod = new Date().toISOString();

export default defineConfig({
  site: "https://50beautifulplaces.com",
  output: "static",
  image: {
    domains: [
      "live.staticflickr.com",
      "upload.wikimedia.org",
      "inaturalist-open-data.s3.amazonaws.com",
    ],
  },
  integrations: [
    sitemap({
      serialize(item) {
        item.lastmod = lastmod;
        if (item.url === `${siteUrl}/`) {
          item.changefreq = ChangeFreqEnum.WEEKLY;
          item.priority = 1.0;
        } else if (item.url === `${siteUrl}/places/`) {
          item.changefreq = ChangeFreqEnum.WEEKLY;
          item.priority = 0.9;
        } else if (item.url === `${siteUrl}/all-destinations/`) {
          item.changefreq = ChangeFreqEnum.MONTHLY;
          item.priority = 0.8;
        } else if (item.url.includes("/places/")) {
          item.changefreq = ChangeFreqEnum.MONTHLY;
          item.priority = 0.8;
        } else if (item.url === `${siteUrl}/why-do-you-travel/`) {
          item.changefreq = ChangeFreqEnum.MONTHLY;
          item.priority = 0.7;
        } else {
          item.changefreq = ChangeFreqEnum.MONTHLY;
          item.priority = 0.6;
        }
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
