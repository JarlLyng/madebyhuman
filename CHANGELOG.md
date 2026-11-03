# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.1.0] - 2026-11-03

### Added

- **Blog** at `/blog` and `/blog/<slug>`, written as MDX files with frontmatter in `src/content/blog/`. Six posts, JSON-LD (`BreadcrumbList`, `BlogPosting`), a related-posts section on every post (#91) and a "From the blog" section on the home page. (#79, #82, #83)
- **RSS feed** at `/rss.xml`, generated on every build alongside the sitemap, and advertised in the page head. (#79, #85)
- **Social card on every page.** All page metadata goes through `socialMetadata()` in `src/lib/social.ts`, so each page carries `og:image` and its own Twitter card text. (#156)
- **Footer cross-links** to Anvil Workout, WODrounds and Walkful alongside the other IAMJARL sites. (#100, #101)
- **`AGENTS.md`** for developers and coding agents: the project, its boundaries, what exists and what does not. (#133, #139, #148)

### Changed

- **Mobile first screen.** The wordmark stays on one line at phone widths, and the hero copy renders visible instead of waiting on an animation. (#132)
- **Sitemap dates are true.** Each page's `lastmod` is the last git commit that touched its sources, posts included, and is left out when no git history is available. (#147, #156)
- **Copy follows the house voice.** Em-dashes are gone from the site and the blog, and page titles use ` | ` as the separator. The two longest post titles were shortened to fit search results. (#134, #156, #161)
- **Analytics** honor Do Not Track and only count the production domain. (#85)
- **README** rewritten around a new first screen and a fresh screenshot. (#153, #154)
- `/badges` metadata rewritten for search results, and the home subtitle meets WCAG AA contrast in dark mode. (#89, #156)
- Node.js 20.19 or newer is required (ESLint 10), recorded in `engines`.

### Fixed

- Hydration mismatch on the home page: embed-code examples now always use the canonical site origin. (#134)
- `npm run lint` works again with TypeScript pinned to 6.0, since typescript-eslint does not yet support TypeScript 7. (#157)
- Dependabot configuration is valid again. (#149)

### Security

- `next` is on 16.4 and receives patch updates through Dependabot, which waits seven days before proposing a new version. (#148, #160)
- Transitive fixes are pinned in `overrides` in `package.json`: `postcss`, `@babel/core` and `postcss-selector-parser`. (#77, #129, #149)

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

[Unreleased]: https://github.com/JarlLyng/madebyhuman/compare/v1.1.0...HEAD
[1.1.0]: https://github.com/JarlLyng/madebyhuman/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/JarlLyng/madebyhuman/releases/tag/v1.0.0
