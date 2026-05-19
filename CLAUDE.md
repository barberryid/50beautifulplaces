# CLAUDE.md

## Tailwind CSS

- Tailwind CSS v4 is installed using `@tailwindcss/vite` (Vite plugin, not the legacy Astro integration).
- Global Tailwind import is in `src/styles/global.css` via `@import "tailwindcss"`.
- Use Tailwind utility classes for all new styling.
- Do NOT create `tailwind.config.js` — v4 uses CSS-first configuration.
- Do NOT use v3 directives (`@tailwind base`, `@tailwind components`, `@tailwind utilities`).
- Avoid reinstalling Tailwind unless the setup is visibly broken.
- Do NOT run `npm audit fix --force` without explicit user approval.
