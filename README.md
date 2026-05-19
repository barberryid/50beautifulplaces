# 50 Beautiful Places

Astro static website for [50beautifulplaces.com](https://50beautifulplaces.com), designed as a fast, image-led travel inspiration and destination guide site.

## Tech Stack

- Astro static site generation
- Markdown content collections for destinations
- Cloudflare Pages hosting
- GitHub version control

## Local Development

Install dependencies:

```bash
npm install
```

Start the local dev server:

```bash
npm run dev
```

Run a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deployment

Cloudflare Pages deploys automatically from the GitHub repository.

- Build command: `npm run build`
- Build output directory: `dist`
- Framework preset: `Astro`
- Node version: `18` or later

Required Cloudflare Pages environment variables:

- `EXCHANGERATE_API_KEY`

Add `EXCHANGERATE_API_KEY` under Cloudflare Pages `Settings -> Variables and Secrets` for both Production and Preview environments. Do not commit local `.env` files.

Preferred iteration workflow:

```bash
npm run dev
npm run build
npm run preview
```

For production:

```bash
git add .
git commit -m "Migrate site from Netlify to Cloudflare Pages"
git push
```

Cloudflare Pages will build and deploy the pushed commit from the connected GitHub branch, typically `main`.

The project keeps useful host-level redirects in `public/_redirects`, which Cloudflare Pages publishes with the static site. The build output must remain `dist/`.

## Adding Destinations

Create a new Markdown file in `src/content/destinations/`.

Required frontmatter:

```yaml
---
title: "Destination Name"
country: "Country or region"
region: "Continent or region"
summary: "Short destination summary."
mainImage: "https://example.com/image.jpg"
imageAlt: "Descriptive image alt text"
imageCredit: "Free image via Unsplash"
imageCreditUrl: "https://unsplash.com/s/photos/example"
imageLicenseUrl: "https://creativecommons.org/licenses/by/2.0/"
hotelName: "Hotels rated 8+ near Destination Name"
hotelBookingUrl: "https://www.booking.com/searchresults.html?ss=Destination&nflt=review_score%3D80"
hotelRating: "8+ guest review score on Booking.com"
hotelNote: "Booking.com opens with an 8+ guest-score filter for this destination."
bestTime: "Best months or season"
duration: "Suggested trip length"
tags: ["Hiking", "Coast", "Culture"]
featured: false
seoTitle: "Destination Name Travel Guide"
seoDescription: "Concise SEO description for the destination page."
---
```

Then write the guide body in Markdown. The site automatically creates a page at `/places/file-name/`.

## Image Licensing

Destination images should use stable image file URLs from free sources with no licensing cost. The current image updater uses Openverse results filtered for commercial use, which generally means Creative Commons or public-domain media. Keep attribution and license links with each image, and verify licenses before treating a page as final editorial content.

## Booking.com Hotel Links

Destination pages include Booking.com search links filtered for 8+ guest review scores. Booking.com hotel photos, current prices, availability, and live ratings remain on Booking.com; do not hotlink or copy Booking.com hotel images into this static site unless you have explicit permission or an approved partner/API integration.

## Git Workflow

Suggested repository name: `50beautifulplaces`.

Recommended first commit sequence:

```bash
git init
git add .
git commit -m "Initial Astro site setup"
```

Connect the repository to GitHub, then connect the GitHub repository to Cloudflare Pages for automatic production deployments from `main`.
