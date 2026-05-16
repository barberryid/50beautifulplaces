import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const destinations = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/destinations" }),
  schema: z.object({
    title: z.string(),
    country: z.string(),
    region: z.string(),
    summary: z.string(),
    mainImage: z.string().url(),
    imageAlt: z.string(),
    imageCredit: z.string(),
    imageCreditUrl: z.string().url(),
    imageLicenseUrl: z.string().url().optional(),
    bestTime: z.string(),
    duration: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    seoTitle: z.string(),
    seoDescription: z.string()
  })
});

export const collections = { destinations };
