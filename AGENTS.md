# AGENTS.md: Made by Human

Quick-start context for developers and AI assistants working in this repo.

## What is Made by Human?

A free, open-source badge system and manifesto site for people who want to say how their
creative work was made. Four SVG badges cover the range from fully hand-made to AI-assisted
work with a human in charge, and the site explains the stance behind them. It is not a product
and has nothing to sell: no accounts, no sign-up, no paid tier. It is a static site with
privacy-respecting analytics only.

- **Developer:** [IAMJARL](https://iamjarl.com) (Jarl). The full personal name is never used in copy or docs; see `BRAND_LEGAL.md` in the hub.
- **Website:** [madebyhuman.iamjarl.com](https://madebyhuman.iamjarl.com)
- **License:** [MIT](LICENSE), open source.
- **Price:** free. No purchases, no subscription, no ads, and no plan to add any.
- **Status:** live since April 2026.
- **Sister projects:** the rest of the IAMJARL portfolio, cross-linked from the site footer.

## Boundaries: work only in this repo

- Commit, push and open pull requests **only in this repo**. Never edit, commit to, push to or
  open a pull request in another IAMJARL repo, and that includes `iamjarl-design`.
- To ask another repo for something, **open an issue there**. Public repos get findings, never
  measured numbers. If it is strategic, or not safe in public, it goes to the hub instead.
- The one place outside this repo you write is this project's own folder in the private hub
  (`MadeByHuman/`). Shared hub files (`PORTFOLIO.md`, the standards, `tools/`) are changed from
  inside the hub; if one needs changing, open an issue there.
- If a task seems to need a change in another repo, stop, open the issue, and carry on with what
  this repo can do.

## Strategy lives in the private hub

Target audience, positioning, distribution notes, analytics readouts and competitor analysis
are **not** in this public repo. They live in the private
[iamjarl-strategy](https://github.com/JarlLyng/iamjarl-strategy) hub, folder `MadeByHuman/`.
Before any audience, positioning or marketing-planning work, read that repo's `CONVENTIONS.md`
and write results there, not here. `BOOTSTRAP_PROMPT.md` in that repo has the full brief.

### Read these hub files before the task they govern

- **`VOICE.md`** before writing *any* public copy: site pages, blog posts, badge descriptions,
  community posts, replies. Base rules: no em-dashes, no bullet lists in copy, minimal emojis.
  Made by Human has its own overlay, the manifesto voice: principled and warm, a stance rather
  than a sell. It is the one place the writing may reach a little, and it earns that with
  conviction, not adjectives.
- **`BRAND_LEGAL.md`** before anything naming the maker, copyright or a third-party product
  (for example "Not By AI"). The public identity is IAMJARL; a human name is the first name only.
- **`DESIGN.md`** before visual changes. Its rule for every site applies here: above the fold,
  the product may move, the copy may not hide. First-screen text must render visible without
  waiting on an animation.
- **`SEO_GUIDANCE.md`** before site SEO work.
- **Public issues carry findings, never measured numbers.** No traffic, click, impression or
  adoption figures in this repo or its issues. State the finding, drop the number.

### Keep this file current

When a badge, page or feature is added or removed, update the lines in this file in the same
change. A stale AGENTS.md is worse than none: an assistant will build on what it says.

## Two portfolio rules that work differently here

- **The AI wording is the product.** The portfolio standard keeps "co-created with AI" and
  similar wording off marketing sites. This site is where that badge lives, so the wording here
  is the point, not a violation. Do not "fix" the site's own badge names or copy to remove it.
- **Attribution from other sites.** Decided in iamjarl-design#19: portfolio sites drop their own
  badge graphic, and the shared footer component carries a plain "Made by Human" text link
  instead. This repo owns the badge assets and the copy that explains them, so changes to badge
  file names or URLs break links elsewhere. Keep existing URLs stable.

## Features (be precise, do not invent features that don't exist)

- **Four badges**, each in a white and a black SVG variant, served from `public/badges/`:
  Made by Human (`made`), Co-created with AI (`co-created`), Crafted by Human (`crafted`),
  Human in the Loop (`loop`). File pattern: `/badges/<filename>-<white|black>.svg`.
  `src/lib/badges.ts` is the single source of truth for names, file names and descriptions.
- **Embed codes** (Markdown, HTML, plain URL) that wrap the badge in a link back to the site.
  Built in `src/app/config.ts`.
- **Pages:** home with the manifesto and an interactive badge picker (`/`), about (`/about`),
  badge gallery with download and copy buttons (`/badges`), step-by-step guide (`/guide`),
  blog index and posts (`/blog`, `/blog/<slug>`).
- **Blog:** MDX files in `src/content/blog/` with frontmatter (title, description, date,
  author, tags). Posts get JSON-LD and a related-posts section. Sitemap and RSS feed
  (`/rss.xml`) are generated on build.
- **Analytics:** Umami, loaded in `src/app/layout.tsx`. It honors Do Not Track and only counts
  the production domain. Custom events: `copy_embed`, `download_badge`, `badge_modal_open`,
  `cta_github_repo_click`.
- **Footer** cross-links the IAMJARL portfolio sites.

### Features that do NOT exist (common hallucination targets)

- No accounts, sign-up, login or newsletter.
- No verification of badge claims. The badges are self-disclosure, not certification.
- No registry or directory of projects that use a badge.
- No tracking of who embeds a badge. Badge SVGs are static files; nothing is logged per embed.
- No custom or generated badges, and no localized badge variants (French and others have been
  requested but do not exist yet).
- No backend, API or database. The site is a static export.

## Requirements

- Node.js 20.9 or newer (Next.js 16 requirement; CI uses Node 20).

## Build & run

- `npm install`, then `npm run dev` for local development.
- `npm run build` runs `scripts/generate-sitemap.mjs` first (sitemap and RSS), then a static
  export to `out/`.
- `npm run lint` for ESLint.
- Every push to `main` deploys to GitHub Pages through `.github/workflows/deploy.yml`.
- Optional env vars are documented in `.env.example` (site origin and Umami overrides); the
  code has production fallbacks, so none are required.

## Conventions

- Next.js App Router with `output: 'export'`, React 19, Tailwind CSS v4, TypeScript, Framer
  Motion for animation.
- Does **not** use `iamjarl-design` tokens today. Whether it should, or stays deliberately
  independent as the portfolio's outlier, is open in #108. Record the decision here once made.
- Security fixes for transitive dependencies go in `overrides` in `package.json`.
