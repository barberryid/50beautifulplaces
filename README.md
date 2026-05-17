# 50 Beautiful Places

Astro static website for [50beautifulplaces.com](https://www.50beautifulplaces.com/home), designed as a fast, image-led travel inspiration and destination guide site.

## Tech Stack

- Astro static site generation
- Markdown content collections for destinations
- Netlify hosting
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

The Netlify build settings are defined in `netlify.toml`:

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: `20`

During active development, avoid pushing every small change if the Netlify site is connected to GitHub automatic deploys. Netlify's free tier includes a 300 build-minute monthly limit.

Preferred iteration workflow:

```bash
npm run dev
npm run build
npm run preview
netlify deploy
```

For production:

```bash
npm run build
netlify deploy --prod
```

Or push a stable grouped commit to the GitHub branch connected to Netlify, typically `main`.

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

Connect the repository to GitHub, then connect the GitHub repository to Netlify for automatic production deployments from `main`.
