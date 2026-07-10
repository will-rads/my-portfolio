# William Radiyeh - Portfolio

Single-file static portfolio. One `index.html` + `assets/`, no build step, no dependencies (GSAP via CDN).

- Design: cobalt #2850FF on dark, Bricolage Grotesque / Host Grotesk / JetBrains Mono.
- Motion: GSAP + ScrollTrigger (scroll-driven reveals, tilt cards, live pipeline animation). Respects `prefers-reduced-motion`.

## Deploy (Vercel)

Framework preset must be **Other** (static), not Next.js. No build command, no output directory - serve the repo root.
