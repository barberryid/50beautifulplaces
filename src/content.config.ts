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

const bestForCategory = z.enum([
  "Dramatic landscapes",
  "First-time Africa trips",
  "Photography",
  "Hiking",
  "Beaches without crowds",
  "Culture and architecture",
  "Wildlife",
  "Road trips",
  "Remote/adventurous travel",
  "Easy luxury trips",
  "Family-friendly natural beauty"
]);

const monthStatus = z.enum([
  "Best",
  "Good",
  "Possible",
  "Avoid",
  "Rainy",
  "Very hot",
  "Crowded",
  "Closed / limited access"
]);

const whenToGo = z.object({
  summary: z.string(),
  jan: monthStatus,
  feb: monthStatus,
  mar: monthStatus,
  apr: monthStatus,
  may: monthStatus,
  jun: monthStatus,
  jul: monthStatus,
  aug: monthStatus,
  sep: monthStatus,
  oct: monthStatus,
  nov: monthStatus,
  dec: monthStatus,
  notes: z.string().optional()
});

const destinations = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/destinations" }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string().optional(),
    countryRegionLabel: z.string().optional(),
    country: z.string(),
    region: z.string(),
    summary: z.string(),
    mainImage: imagePath,
    imageAlt: z.string(),
    imageCredit: z.string(),
    imageCreditUrl: z.string().url(),
    imageLicenseUrl: z.string().url().optional(),
    googleMapsQuery: z.string().optional(),
    visaIntro: z.string().optional(),
    visaVerificationNote: z.string().optional(),
    galleryImages: z.array(z.object({
      src: imagePath,
      alt: z.string(),
      caption: z.string().optional(),
      featured: z.boolean().optional()
    })).optional(),
    hotelName: z.string(),
    hotelBookingUrl: z.string().url(),
    hotelRating: z.string(),
    hotelNote: z.string(),
    bestTime: z.string(),
    duration: z.string(),
    bestFor: z.array(bestForCategory).min(1),
    travelStyle: z.array(z.string()).optional(),
    realisticVisit: z.string(),
    whenToGo,
    comparisonGroup: z.string(),
    physicalDifficulty: z.string(),
    logisticalDifficulty: z.string(),
    perfectFor: z.array(z.string()).min(1),
    notIdealFor: z.array(z.string()).min(1),
    practicalIntro: z.string().optional(),
    accessSummary: z.string().optional(),
    planningDifficulty: z.string().optional(),
    bestTimeExpanded: z.string().optional(),
    durationExpanded: z.string().optional(),
    commonMistakes: z.array(z.string()).optional(),
    combineWith: z.string().optional(),
    beforeBooking: z.array(z.string()).optional(),
    healthPlanningNote: z.string().optional(),
    practicalDisclaimer: z.string().optional(),
    planningResources: z.array(z.object({
      label: z.string(),
      href: z.string().url(),
      note: z.string(),
      official: z.boolean().default(false)
    })).optional(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    seoTitle: z.string(),
    seoDescription: z.string()
  })
});

export const collections = { destinations };
