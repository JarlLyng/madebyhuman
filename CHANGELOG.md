# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- **Blog section** at `/blog` and `/blog/[slug]` powered by MDX files in `src/content/blog/`. Posts use frontmatter (title, description, date, author, tags) parsed via `gray-matter` and rendered server-side with `next-mdx-remote/rsc`. Tailwind `@tailwindcss/typography` plugin styles post bodies.
- **RSS feed** at `/rss.xml`, regenerated on every build alongside the sitemap.
- **JSON-LD on blog pages**: `BreadcrumbList` on `/blog` and both `BreadcrumbList` + `BlogPosting` on individual posts for rich search results.
- **"From the blog" teaser** section on the home page surfacing the 3 latest posts.
- **Blog link** in the main navigation and the footer link row.
- Six initial blog posts: welcome, transparency, curation, made-by-human-vs-not-by-ai, signaling, and a Next.js/React how-to.

### Changed

- `scripts/generate-sitemap.mjs` now reads blog frontmatter and emits both `sitemap.xml` and `rss.xml`. Sitemap includes per-post `lastmod` dates.
- Home page (`src/app/page.tsx`) is now a thin server shell composing the interactive badge picker (`HomeContent`) and the server-rendered `LatestPostsTeaser`.

### Security

- Bumped `next` 16.2.4 → 16.2.6 — addresses 13 advisories including high-severity middleware/proxy bypasses, SSRF via WebSocket upgrades, DoS with Server Components, and several XSS/cache-poisoning issues.
- Added `postcss` override pinning to `^8.5.10` to patch the XSS-via-unescaped-`</style>` advisory affecting transitive copies under `next` and `@tailwindcss/postcss`.
- Bumped `framer-motion`, `react`, `react-dom`, and several development dependencies to their latest patch versions.

## [1.0.0] - 2026-04-29

First public release.

### Added

- Four badge designs in white and black SVG variants:
  - **Made by Human** — general badge for human creativity
  - **Co-created with AI** — for human-AI collaboration
  - **Crafted by Human** — for fully hand-made work
  - **Human in the Loop** — for AI-assisted work with human oversight
- Homepage (`/`) with hero, philosophy, badge gallery modal, and how-to-use section
- About page (`/about`) telling the origin story and philosophy, with a link to the [Medium article](https://medium.com/@jarllyng/made-by-human-6fe8ccf0ce2f)
- Badge gallery (`/badges`) with per-badge previews, variant selector, SVG download, and Markdown/HTML/URL embed codes
- Step-by-step guide (`/guide`) for adding badges to GitHub READMEs and websites
- Embed codes wrap the badge in a link back to `madebyhuman.iamjarl.com` so each adoption is also a backlink
- JSON-LD structured data for rich search results: `WebSite`, `Organization`, `ItemList`, `FAQPage`, `BreadcrumbList`, and `HowTo`
- `sitemap.xml` generated automatically on each deploy
- `robots.txt` with explicit allow rules for AI crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.)
- `llms.txt` for AI engine indexing
- Footer cross-links to other IAMJARL projects (Emotionwave, BeerTuner, Get to the Movie!, Running from Horses, TrimrPix)
- Accessibility: skip-to-content link, visible focus rings, `aria-pressed` toggles, `aria-live` copy feedback, `aria-current` nav state, `prefers-reduced-motion` support
- Umami analytics with custom events for badge downloads and embed copies
- GitHub Pages deployment via GitHub Actions
- Dependabot configuration for npm and GitHub Actions updates
- CodeQL code scanning, secret scanning, and push protection
- Issue templates (bug report, feature request, badge idea), PR template, `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SECURITY.md`

[Unreleased]: https://github.com/JarlLyng/madebyhuman/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/JarlLyng/madebyhuman/releases/tag/v1.0.0
