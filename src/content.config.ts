import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const imagePath = z.string().refine((value) => {
  if (value.startsWith("/")) return true;
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
}, {
  message: "Image must be an absolute URL or a site-root path starting with /"
});

const destinations = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/destinations" }),
  schema: z.object({
    title: z.string(),
    country: z.string(),
    region: z.string(),
    summary: z.string(),
    mainImage: imagePath,
    imageAlt: z.string(),
    imageCredit: z.string(),
    imageCreditUrl: z.string().url(),
    imageLicenseUrl: z.string().url().optional(),
    galleryImages: z.array(z.object({
      src: imagePath,
      alt: z.string(),
      caption: z.string().optional()
    })).optional(),
    hotelName: z.string(),
    hotelBookingUrl: z.string().url(),
    hotelRating: z.string(),
    hotelNote: z.string(),
    bestTime: z.string(),
    duration: z.string(),
    practicalIntro: z.string().optional(),
    accessSummary: z.string().optional(),
    planningDifficulty: z.string().optional(),
    physicalDifficulty: z.string().optional(),
    bestTimeExpanded: z.string().optional(),
    durationExpanded: z.string().optional(),
    perfectFor: z.array(z.string()).optional(),
    notIdealFor: z.array(z.string()).optional(),
    commonMistakes: z.array(z.string()).optional(),
    combineWith: z.string().optional(),
    beforeBooking: z.array(z.string()).optional(),
    healthPlanningNote: z.string().optional(),
    practicalDisclaimer: z.string().optional(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    seoTitle: z.string(),
    seoDescription: z.string()
  })
});

export const collections = { destinations };
