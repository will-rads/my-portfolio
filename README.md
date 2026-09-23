# William Radiyeh - Portfolio

Static portfolio with two pages sharing `assets/`: `index.html` serves `/`, and `job/index.html` serves `/job/`. No build step; GSAP loads from a CDN.

- Homepage design: cobalt #2850FF on dark, Bricolage Grotesque / Host Grotesk / JetBrains Mono.
- Motion: GSAP + ScrollTrigger (scroll-driven reveals, tilt cards, live pipeline animation). Respects `prefers-reduced-motion`.

## White folder portfolio

`job/index.html` serves `/job/`. It uses Geist, a white background, folder carousels, and expandable project rows. Native dialogs handle folder browsing and document previews. Thumbnails stay local; every preview links to the original document or site.

Experience and education rows use square logos from `assets/logos/`.

The Projects folder opens three GitHub share cards: Moteur Check, MarketMind AI, and Hate Speech Classifier. A matching section below credentials includes descriptions and direct repo/demo links. The images in `assets/previews/*-github.png` are snapshots of GitHub's social cards, captured on 2026-09-23; their stats do not update automatically. MarketMind is labelled in development to match its current public repository.

The brochure demo uses `/maireed-5576-sqft-plot/` on `namou-brochures.vercel.app`. Its current preview is `assets/previews/brochure-after-v2.png`; the older preview remains for the main portfolio.

To check the folder and preview flows, serve this folder with `python -m http.server 5599 --bind 127.0.0.1`, then run `node tests/check-job.cjs`. Requires Playwright and Chrome; set `PLAYWRIGHT_MODULE` to an existing Playwright installation if it is not locally resolvable. `PORTFOLIO_URL` overrides the local page URL.

## Deploy (Vercel)

Framework preset must be **Other** (static), not Next.js. No build command, no output directory - serve the repo root.

Pushes to `main` deploy through Vercel. Public folder portfolio: https://william-radiyeh.vercel.app/job/.
