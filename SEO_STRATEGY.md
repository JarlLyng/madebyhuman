# SEO Strategy — Made by Human

**Site:** https://madebyhuman.iamjarl.com  
**Framework:** Next.js (static export)  
**Google Search Console:** Connected  
**Analytics:** Umami  
**Last updated:** 2026-04-15

---

## 1. Current Status

### What's in place
- Meta title, description, and keywords in `src/app/layout.tsx`
- Open Graph and Twitter Card metadata with `og-image.png`
- Canonical URL configured per page (`/`, `/about`, `/badges`)
- `robots.txt` allowing full crawl + sitemap reference
- `sitemap.xml` with 3 pages (`/`, `/about`, `/badges`) + auto-generation script (`scripts/generate-sitemap.mjs`)
- Google Search Console verification (`google25b9a18021b6d68d.html`)
- Umami analytics tracking with custom events (badge clicks, downloads, copies) via `src/lib/umami.ts`
- JSON-LD structured data: WebSite + Organization + ItemList (4 badges) + FAQPage (4 questions) in `layout.tsx`
- Shared Nav component with internal links (`/`, `/about`, `/badges`, GitHub)
- Shared Footer component with cross-links (IAMJARL, Emotionwave, GitHub)
- `/about` page with origin story, philosophy, and internal link to `/badges`
- `/badges` page with full descriptions, use cases, download + embed codes per badge
- Unique meta title + description + canonical + OG tags per page (`about/page.tsx`, `badges/layout.tsx`)
- Anchor IDs on badge sections for deep linking (`/badges#made-by-human`, etc.)
- Badge data centralized in `src/lib/badges.ts` (single source of truth)
- GitHub Pages deployment via GitHub Actions (`deploy.yml`)
- Auto-merge enabled on repository for Dependabot PRs

### What's not yet implemented
- `/guide` page (step-by-step how-to for GitHub badges)
- Blog/articles section
- Badge adoption statistics on site
- Sitemap auto-generation wired into CI build pipeline (script exists, not yet in `deploy.yml`)

---

## 2. Target Audience & Keywords

### Primary audience
- Developers and designers who want to signal human involvement in their work
- Open source contributors looking for badges for their projects
- Creatives exploring the intersection of AI and human creativity
- Indie builders wanting to be transparent about AI collaboration

### Primary keywords
| Keyword | Intent | Priority |
|---------|--------|----------|
| made by human badge | Transactional | High |
| human made badge for github | Transactional | High |
| co-created with ai badge | Transactional | High |
| crafted by human badge | Transactional | Medium |
| human in the loop badge | Transactional | Medium |
| human creativity badge | Informational | Medium |
| ai collaboration badge | Transactional | Medium |
| transparency badge ai | Informational | Medium |
| open source badges free | Informational | Medium |

### Long-tail keywords
- "how to add a made by human badge to github readme"
- "free badges for open source projects"
- "human vs ai created content badge"
- "show human involvement in project"
- "human creativity in the age of ai"
- "transparent ai collaboration badges"
- "co-created with ai badge svg"
- "github readme transparency badges"
- "human-centered ai development"

---

## 3. Core SEO Positioning

Position "Made by Human" as the **standard transparency badge for responsible AI-human collaboration.** Target builders, designers, and open-source creators who want to celebrate human involvement while being honest about AI assistance. Position as the ethical alternative to "AI-generated" labeling.

**Unique Angle:** Positive framing (celebrating human + AI partnership) vs. gatekeeping or anti-AI messaging.

---

## 4. Technical SEO

### 4.1 Structured Data (JSON-LD) — IMPLEMENTED

Quad-schema stacking in `src/app/layout.tsx` — injected as `<script type="application/ld+json">` in `<head>`:

| Schema | Purpose | Status |
|--------|---------|--------|
| `WebSite` | Site identity + publisher reference | Implemented |
| `Organization` | Brand entity with logo, founder, sameAs links | Implemented |
| `ItemList` | 4 badges with deep-link URLs (`/badges#made-by-human`, etc.) | Implemented |
| `FAQPage` | 4 Q&As targeting question-based search queries | Implemented |

**Key implementation details:**
- Base URL is dynamic via `getBaseUrl()` from `src/app/config.ts` (defaults to `https://madebyhuman.iamjarl.com`)
- `Organization.founder` links to `https://iamjarl.com` (Jarl Lyng)
- `Organization.sameAs` includes GitHub repo + iamjarl.com
- `ItemList` URLs point to anchor IDs on `/badges` page (e.g. `/badges#co-created-with-ai`)
- Anchor IDs are generated from badge names via `badgeSlug()` in `src/app/badges/page.tsx`
- `FAQPage` covers: "What is Made by Human?", "How do I add a badge?", "Difference between badges?", "Are they free?"

**Validate at:** https://validator.schema.org/ or https://search.google.com/test/rich-results

### 4.2 AI Answer Optimization (2026 Best Practices)

Structure content for AI extraction — 74% boost from "Top N" lists:

- **"Top 4 Transparency Badges"** with stats
  1. Made by Human — 100% human creation (most popular)
  2. Co-created with AI — Equal partnership
  3. Human in the Loop — AI-assisted with oversight
  4. Crafted by Human — Emphasizes craftsmanship

- **Badge Adoption Stats** (increases AI visibility):
  - Free downloads: [Count]
  - Projects using badges: [Count]
  - GitHub README embeds: [Count]
  - Monthly active installations: [Count]

- **Use Case Examples** (standalone):
  - Open-source projects using transparency badges
  - Designer portfolios marking AI assistance
  - AI blog posts using badges
  - Developer projects celebrating collaboration

### 4.3 Sitemap & Indexing
- [x] `sitemap.xml` includes all 3 pages (`/`, `/about`, `/badges`) with `lastmod` dates
- [x] Auto-generation script: `scripts/generate-sitemap.mjs` (run `node scripts/generate-sitemap.mjs` to regenerate)
- [ ] Wire sitemap generation into CI build pipeline (`deploy.yml`) so `lastmod` auto-updates on each deploy
- [ ] Request indexing in Google Search Console for `/about` and `/badges`
- [ ] Monitor "Coverage" report for crawl issues

### 4.4 Performance
- [x] Site is statically exported (Next.js `output: 'export'`) — excellent for Core Web Vitals
- [x] SVG badges are lightweight
- [ ] Monitor Core Web Vitals in Search Console
- [ ] Lighthouse CI maintains >90 score

---

## 5. GEO Strategy (2026 AI-Engine Optimization)

### AI Citation Potential

Every section must stand alone (for AI extraction):

**Key Extractable Sections:**
- Badges available (4 badge descriptions)
- How to use badges (step-by-step guide)
- Why transparency matters (positioning)
- FAQ (answers to common questions)

**Optimization Tactics:**
- Include statistics wherever possible (free vs paid, adoption rates)
- Use structured "Top N" lists (AI's favorite format)
- Write FAQs directly targeting question-based queries
- Include hyperlinks to related projects (emotionwave, iamjarl.com)

---

## 6. Content Strategy

### 6.1 Landing Page (Current)
1. **Hero** — "Made by Human" tagline + badge display
2. **What It Is** — 2-3 sentence explanation
3. **Badge Gallery** — All 4 badges with descriptions + download buttons
4. **How to Use** — Markdown + HTML copy-paste code
5. **FAQ** — 4-6 FAQs covering use cases + attribution

### 6.2 Additional Pages (Phase 1 — 1-2 months)

#### `/about` — "The Mission" — IMPLEMENTED
- **File:** `src/app/about/page.tsx` (server component with metadata)
- Origin story: "Not By AI" counterpoint narrative
- Philosophy: "Intention Over Purity" — celebrate human + AI partnership
- The Badges section with internal link to `/badges`
- Looking Forward section with GitHub contribution CTA
- **Meta:** `About - Made by Human` + custom description + canonical + OG tags
- **Missing:** Direct link to emotionwave.iamjarl.com (exists in shared footer, not in page body)
- Target: "human creativity movement", "made by human mission"

#### `/badges` — Dedicated Badge Gallery — IMPLEMENTED
- **File:** `src/app/badges/page.tsx` (client component) + `badges/layout.tsx` (metadata)
- Full descriptions + visual previews for all 4 badges (from `src/lib/badges.ts`)
- "When to use" section per badge with specific use cases
- Variant selector (white/black) per badge
- Download SVG button + 3 embed code copy buttons (Markdown, HTML, URL) per badge
- Anchor IDs for deep linking (`#made-by-human`, `#co-created-with-ai`, etc.)
- CTA to contribute on GitHub
- **Meta:** `Free Transparency Badges for GitHub & Websites - Made by Human`
- Target: "free github badges", "transparency badges", "ai collaboration badges"

#### `/guide` — "How to Use Made by Human Badges" — NOT YET BUILT
- Step-by-step guide for GitHub README
- Instructions for web projects (HTML embed)
- Examples from real projects
- Best practices for transparency
- Video tutorial (optional, high-value)
- Target: "how to add badge to github", "github readme badges", "embedding badges"

### 6.3 Blog/Articles (Phase 2 — 2-3 months)
Content that ranks for informational keywords + positions as authority:

- **"Why Transparency About AI Use Matters"**
  - Ethical considerations of AI in creative work
  - Building trust with audiences
  - Standards for disclosure
  - Target: "ai transparency", "ethical ai disclosure"

- **"How to Signal Human Creativity in Your Projects"**
  - Using badges in portfolios
  - Writing about your process
  - Celebrating collaboration
  - Target: "human creativity in ai age", "marking human work"

- **"The Difference Between AI-Generated and Human-Curated Work"**
  - Nuance: AI as tool vs. AI as creator
  - Quality markers of human oversight
  - Why "human in the loop" matters
  - Target: "ai-generated vs human", "human oversight"

- **"Adding Badges to Your GitHub README: A Complete Guide"**
  - Comprehensive how-to for developers
  - Examples with code blocks
  - Troubleshooting + best practices
  - Target: "add badge github readme", "github readme tutorial"

- **"Made by Human: Using AI Responsibly in Your Creative Process"**
  - How to use AI as a tool without replacing human creativity
  - Workflow integration
  - Transparency practices
  - Target: "responsible ai use", "human ai collaboration"

### 6.4 Content Principles
- Write for humans first, search engines second
- Focus on positive framing (celebrating human creativity, not gatekeeping)
- Keep content concise and actionable
- Emphasize transparency as a feature, not a burden
- Include real examples + case studies

---

## 7. Cross-linking Strategy

### Links TO Other IAMJARL Projects

**In Footer (every page) — IMPLEMENTED** (`src/components/Footer.tsx`):
- IAMJARL → `https://iamjarl.com/`
- Emotionwave → `https://emotionwave.iamjarl.com/`
- GitHub → `https://github.com/JarlLyng/madebyhuman`

**In Nav (every page) — IMPLEMENTED** (`src/components/Nav.tsx`):
- Internal: `/` (home), `/about`, `/badges`
- External: GitHub repo

**In About Page — PARTIALLY IMPLEMENTED** (`src/app/about/page.tsx`):
- [x] GitHub contribution link
- [x] Internal link to `/badges` page
- [ ] Direct link to iamjarl.com in page body (exists in shared footer only)
- [ ] Direct link to emotionwave.iamjarl.com in page body
- [ ] Mention other projects using Made by Human badge

**In Blog Posts:**
- Case studies linking to iamjarl.com projects
- Example: "Get to the Movie uses Made by Human badge"

### Links FROM Other Projects

**From iamjarl.com:**
- Add "Made by Human" badge to footer
- Link to madebyhuman.iamjarl.com in About section
- Use as case study in portfolio

**From all subdomains:**
- Every project footer includes: "Made by Human + AI" badge linking to madebyhuman.iamjarl.com
- Creates consistent 12+ backlinks from IAMJARL ecosystem

### Anchor Text Strategy
- `<a href="https://iamjarl.com">Jarl Lyng's portfolio</a>`
- `<a href="https://emotionwave.iamjarl.com">Emotionwave AI tool</a>`
- `<a href="https://madebyhuman.iamjarl.com">Made by Human badge</a>`
- Avoid keyword stuffing; prioritize navigation clarity

---

## 8. Where to Make Noise

### Subreddits (Tier 1 — High Relevance)
- **r/opensource** — "I created free transparency badges for AI-human work"
- **r/webdev** — Sharing badges for GitHub README transparency
- **r/programming** — Developer tools + open source angle
- **r/SideProject** — "Made by Human badge collection I built"
- **r/design** — Design community interested in transparency + ethics
- **r/artificialintelligence** — Responsible AI / ethics angle

### Subreddits (Tier 2 — Related Interest)
- **r/github** — GitHub README tools + badges
- **r/indiehackers** — "Built a free resource for responsible AI disclosure"
- **r/InternetIsBeautiful** — Beautiful design + utility
- **r/FreeTools** — Free resource angle

### Platforms
- **Product Hunt** — "Made by Human: Free badges for transparent AI collaboration"
- **Hacker News** — "I created free transparency badges for human-AI work"
  - Technical angle: SVG, embedded Web Standards, GitHub integration
- **GitHub Trending** — Star the repo, get on GitHub trending (high visibility)
- **Indie Hackers** — Launched as free resource for the community
- **Dev.to** — Technical post on implementing badges in projects
- **Twitter/X** — Share badge design + use cases, retweet projects using them

### Directories & Lists
- **Awesome Lists** — Submit to:
  - `awesome-open-source` (badges section)
  - `awesome-html5` (SVG badges)
  - `awesome-ethics` (responsible AI)
- **Badge Directories:**
  - shields.io (if applicable)
  - badgen.net
  - other badge repository sites
- **GitHub Topic Tags:** `badge`, `transparency`, `open-source`, `ai-ethics`

### Press & Community
- **Blogs about responsible AI**, ethics in tech, indie tools
- **Email newsletters** — AI + ethics newsletters, indie hacker newsletters
- **GitHub README** — Ensure your own repo README is exemplary (use the badges on your own project!)

---

## 9. Technical SEO Checklist

**Foundation:**
- [x] Google Search Console connected
- [x] Meta title, description, keywords in `layout.tsx`
- [x] Open Graph and Twitter Card metadata
- [x] Canonical URL configured (per page)
- [x] `robots.txt` allowing full crawl + sitemap reference
- [x] `sitemap.xml` with 3 pages + auto-generation script
- [x] Umami analytics tracking (`src/lib/umami.ts`)
- [x] JSON-LD structured data: WebSite + Organization + ItemList + FAQPage (in `layout.tsx`)
- [ ] Wire sitemap generation into CI build (`deploy.yml`)
- [ ] Validate JSON-LD at https://validator.schema.org/
- [ ] Validate rich results at https://search.google.com/test/rich-results

**Performance & Quality:**
- [x] Static export (Next.js `output: 'export'`) — excellent Core Web Vitals
- [x] SVG badges are lightweight
- [ ] Lighthouse CI: Maintain >90 score
- [ ] Monitor Core Web Vitals in Search Console
- [ ] Image optimization: compress OG image
- [ ] Lazy-load badges on page (if multiple)

**Accessibility:**
- [x] Alt text on badge previews (all `<Image>` components have `alt`)
- [x] Keyboard navigation: ESC to close modals, Tab navigation, focus trap
- [x] ARIA labels on modal and close button (homepage badge modal)
- [ ] Full ARIA audit on `/badges` page buttons
- [ ] Color contrast WCAG AA audit
- [ ] Code snippets have proper syntax highlighting

**Content:**
- [x] Unique meta tags for `/about` and `/badges` (title, description, canonical, OG)
- [x] Internal linking: Nav (all pages), About → Badges, Footer (all pages)
- [ ] Unique meta tags for `/guide` (page not yet built)
- [ ] Schema.org validation: https://validator.schema.org/

**Monitoring:**
- [ ] Weekly: Check Search Console for errors + new queries
- [ ] Monthly: Review impressions, clicks, keyword rankings
- [ ] Quarterly: Analyze content strategy, adjust keyword targets

---

## 10. 90-Day Roadmap

### Phase 1 — Foundation (Weeks 1-2) — COMPLETE
- [x] Google Search Console connected
- [x] Analytics tracking enabled (Umami)
- [x] JSON-LD structured data: WebSite + Organization + ItemList + FAQPage
- [x] Sitemap auto-generation script (`scripts/generate-sitemap.mjs`)
- [ ] Wire sitemap generation into CI build pipeline
- [ ] Set baseline metrics (impressions, clicks, positions)

### Phase 2 — Content Expansion (Weeks 3-8) — MOSTLY COMPLETE
- [x] `/about` page with origin story, philosophy, CTA
- [x] `/badges` page with full descriptions, use cases, download + embed codes
- [x] Sitemap updated with all 3 pages
- [x] Internal linking: Nav component, about → badges, shared footer
- [x] Unique meta tags per page (title, description, canonical, OG)
- [x] Cross-links in footer (IAMJARL, Emotionwave, GitHub)
- [ ] Create `/guide` page with step-by-step instructions
- [ ] Review Search Console impressions; adjust meta descriptions

### Phase 3 — Distribution & Growth (Weeks 9-12)
- [ ] Post on r/opensource + r/webdev + r/programming
- [ ] Submit to Product Hunt
- [ ] Create Hacker News post
- [ ] Submit to "awesome" lists on GitHub
- [ ] Launch blog with 2-3 initial articles
- [ ] Begin direct outreach to AI ethics + transparency publications

### Phase 4 — Authority Building (Months 2-3)
- [ ] Publish 2-3 more blog articles
- [ ] Monitor Search Console; create content targeting top impressions (low CTR)
- [ ] Consider badge link-back feature (organic backlink generator)
- [ ] Partner with other indie projects (mutual linking)
- [ ] Create video tutorial (YouTube/embed)

---

## 11. Monitoring & KPIs

### Search Console Metrics
| Metric | Baseline | Target (3 months) | Target (6 months) |
|--------|----------|--------------------|--------------------|
| Indexed pages | 1 | 4+ | 8+ |
| Total impressions | TBD | 500/month | 2,000/month |
| Total clicks | TBD | 50/month | 300/month |
| Average position | TBD | Top 20 for primary keywords | Top 10 for primary keywords |

### Umami Metrics
| Metric | What it tells us |
|--------|-----------------|
| Badge download events | Most popular badge styles |
| Copy embed events | Adoption signal — people embedding badges |
| GitHub repo clicks | Interest in open-source community |
| Page views by page | Content performance (which pages drive traffic) |
| Referral sources | Where visitors come from |

### Growth Metrics
| Metric | Target |
|--------|--------|
| Monthly unique visitors | 500 → 2,000 → 5,000 |
| Badge downloads | 100 → 500 → 1,500 |
| Projects using badges (visible via backlinks) | 10 → 50 → 200+ |
| Backlinks from GitHub READMEs | 5+ → 30+ → 100+ |

### Review Cadence
- **Weekly:** Check Search Console for crawl errors and new queries
- **Monthly:** Review impressions, clicks, and keyword rankings
- **Quarterly:** Evaluate content strategy and adjust keyword targets

---

## 12. Notes

- **Organic Backlink Strategy:** Every README that embeds a badge is a potential backlink. This is the strongest growth lever — as adoption grows, backlinks multiply automatically.
- **Static Site Advantage:** No dynamic features needed; static export ensures excellent performance and SEO.
- **Focus on Adoption:** The real SEO win comes from adoption (more projects using badges = more backlinks + brand awareness).
- **Positioning:** Avoid being preachy about anti-AI sentiment. Focus on responsibility + transparency as positives.
- **Cross-Promotion:** Made by Human badges can be used on all IAMJARL projects, creating internal link velocity.
- **Future Monetization:** Could add premium features (custom badges, analytics) without compromising free core offering.

---

## 13. Implementation Checklist

**Done:**
- [x] JSON-LD structured data in `src/app/layout.tsx` (WebSite + Organization + ItemList + FAQPage)
- [x] `/about` page (`src/app/about/page.tsx`) with meta tags
- [x] `/badges` page (`src/app/badges/page.tsx` + `layout.tsx`) with meta tags
- [x] Nav component (`src/components/Nav.tsx`) with internal links
- [x] Footer component (`src/components/Footer.tsx`) with cross-links
- [x] Sitemap with all 3 pages + auto-generation script
- [x] Badge data centralized in `src/lib/badges.ts`
- [x] Umami tracking centralized in `src/lib/umami.ts`
- [x] Anchor IDs on badge sections for deep linking
- [x] Auto-merge enabled on GitHub repo for Dependabot PRs

**Next up (This Month):**
- [ ] Wire sitemap generation into CI (`deploy.yml`)
- [ ] Validate JSON-LD at https://validator.schema.org/
- [ ] Request indexing for `/about` and `/badges` in Search Console
- [ ] Set baseline metrics in Search Console
- [ ] Build `/guide` page
- [ ] Post on r/opensource + r/webdev
- [ ] Submit to Product Hunt

**Mid-term (Weeks 5-8):**
- [ ] Create initial blog post
- [ ] Launch 2-3 more blog articles
- [ ] Submit to "awesome" lists
- [ ] Hacker News post
- [ ] Review Search Console data; optimize for gaps

**Long-term (Months 2-3):**
- [ ] Video tutorial (YouTube)
- [ ] Partner outreach
- [ ] Consider badge analytics feature
- [ ] Quarterly SEO review + planning

---

## 14. File Reference

Quick reference for developers/AI working on SEO-related changes:

| File | Purpose |
|------|---------|
| `src/app/layout.tsx` | Root layout: metadata (title, OG, Twitter), JSON-LD schemas, Umami script, Nav + Footer |
| `src/app/config.ts` | Centralized URL config: `getBaseUrl()`, `getBadgeUrl()`, `getFullBadgeUrl()` |
| `src/app/page.tsx` | Homepage: hero, philosophy, badge gallery (modal), how-to, contributing |
| `src/app/about/page.tsx` | About page: origin story, philosophy, badges intro, future vision (server component with metadata) |
| `src/app/badges/page.tsx` | Badge gallery: per-badge sections with preview, download, embed codes (client component) |
| `src/app/badges/layout.tsx` | Badges page metadata: title, description, canonical, OG tags |
| `src/lib/badges.ts` | Badge data: name, filename, description, longDescription, useCases (single source of truth) |
| `src/lib/umami.ts` | Analytics helper: `trackEvent()` for custom Umami events |
| `src/components/Nav.tsx` | Navigation: internal links (`/`, `/about`, `/badges`) + GitHub external link |
| `src/components/Footer.tsx` | Footer: badge image, MIT license, cross-links (IAMJARL, Emotionwave, GitHub) |
| `public/sitemap.xml` | Sitemap: 3 URLs with `lastmod` dates |
| `public/robots.txt` | Crawl rules: allow all + sitemap reference |
| `public/og-image.png` | Open Graph image (1200x630) |
| `public/google25b9a18021b6d68d.html` | Google Search Console verification |
| `scripts/generate-sitemap.mjs` | Sitemap generator: reads page list, writes `public/sitemap.xml` with today's date |
| `.github/workflows/deploy.yml` | CI/CD: lint → build → deploy to GitHub Pages |