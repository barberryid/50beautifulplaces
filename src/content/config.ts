import { defineCollection, z } from "astro:content";

const destinations = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    country: z.string(),
    region: z.string(),
    summary: z.string(),
    mainImage: z.string().url(),
    imageAlt: z.string(),
    bestTime: z.string(),
    duration: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    seoTitle: z.string(),
    seoDescription: z.string()
  })
});

export const collections = { destinations };
