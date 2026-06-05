# CLAUDE.md

## Project Reference

- **Site:** 50beautifulplaces.com / [www.50beautifulplaces.com](https://www.50beautifulplaces.com)
- **Stack:** GitHub, Git Bash, Astro, Cloudflare Pages, Tailwind CSS v4
- **GitHub:** https://github.com/barberryid/50beautifulplaces
- **Cloudflare preview:** https://50beautifulplaces.pages.dev/

### Paths

- Project folder: `C:\Users\Gary\code\50beautifulplaces`
- Source images: `C:\Users\Gary\OneDrive\All Steviafinca data\Isabel\Documents\Claude\Projects\50Beautifulplaces\images 50beautifulplaces`

### Build (Git Bash)

```bash
cd "/c/Users/Gary/code/50beautifulplaces"
npm run build
```

PowerShell: `cd "C:\Users\Gary\code\50beautifulplaces"`

### Publish changes

```bash
git status
git add .
git commit -m "Update 50 beautiful place guides"
git push
```

## Tailwind CSS

- Tailwind CSS v4 is installed using `@tailwindcss/vite` (Vite plugin, not the legacy Astro integration).
- Global Tailwind import is in `src/styles/global.css` via `@import "tailwindcss"`.
- Use Tailwind utility classes for all new styling.
- Do NOT create `tailwind.config.js` — v4 uses CSS-first configuration.
- Do NOT use v3 directives (`@tailwind base`, `@tailwind components`, `@tailwind utilities`).
- Avoid reinstalling Tailwind unless the setup is visibly broken.
- Do NOT run `npm audit fix --force` without explicit user approval.
