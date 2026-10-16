# imp.so landing page

Served at https://imp.so via GitHub Pages. React + Vite ([Vite+](https://viteplus.dev)), prerendered at build time so the shipped page is plain HTML/CSS/JS with no third-party requests (fonts are self-hosted via Fontsource).

## Develop

```sh
pnpm install
pnpm dev          # http://localhost:5173
pnpm build        # → dist/ (prerendered)
pnpm preview      # serve dist/
vp check --fix    # format + lint + typecheck
```

- Page content: `src/App.tsx`, copy/data in `src/content.ts`
- Design-system tokens and component classes: `src/styles/industry.css`; page layout: `src/styles/page.css`
- Static assets (favicons, OG card, `CNAME`): `public/`

## Build pipeline

`pnpm build` runs `tsc -b`, the client build, an SSR build of `src/entry-server.tsx`, then `scripts/prerender.mjs`, which renders `<App />` into `dist/index.html`. The client bundle hydrates that markup.

## SEO and agent files

Generated at build time from `src/content.ts` via `src/seo.ts`, so they never drift from the page:

- `<head>`: title, description, canonical, Open Graph/Twitter tags, Schema.org JSON-LD (Organization, WebSite, WebPage, SoftwareApplication), `rel="alternate"` link to the Markdown copy, font preloads
- `/index.md`: Markdown version of the page for agents
- `/llms.txt`: [llms.txt](https://llmstxt.org) summary
- `/sitemap.xml`: `lastmod` set to the build date

`public/robots.txt` is static.

## Deploy

Pushing to `main` runs `.github/workflows/pages.yml` (check → build → deploy `dist/` to Pages). Pull requests run check and build only.
