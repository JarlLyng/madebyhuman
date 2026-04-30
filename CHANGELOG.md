# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
