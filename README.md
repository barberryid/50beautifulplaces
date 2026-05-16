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

The seeded destination images use Unsplash free image searches. Unsplash images can be used for free for commercial and non-commercial purposes without permission, though attribution is appreciated. Avoid Unsplash+ or paid stock images unless the licensing is reviewed separately.

## Git Workflow

Suggested repository name: `50beautifulplaces`.

Recommended first commit sequence:

```bash
git init
git add .
git commit -m "Initial Astro site setup"
```

Connect the repository to GitHub, then connect the GitHub repository to Netlify for automatic production deployments from `main`.
