# SEO Strategy — Made by Human

**Site:** https://madebyhuman.iamjarl.com
**Google Search Console:** Connected
**Analytics:** Umami
**Last updated:** 2026-03-22

---

## 1. Current Status

### What's in place
- Meta title, description, and keywords in `layout.tsx`
- Open Graph and Twitter Card metadata with `og-image.png`
- Canonical URL configured
- `robots.txt` allowing full crawl + sitemap reference
- Static `sitemap.xml` with one entry
- Google Search Console verification (`google25b9a18021b6d68d.html`)
- Umami analytics tracking with custom events (badge clicks, downloads, copies)

### What's missing
- JSON-LD structured data
- Dynamic sitemap generation (currently static, manually maintained)
- Content strategy (blog/articles)
- Backlink strategy
- Performance monitoring via Search Console (newly added)
- Multi-language support (potential Danish/Scandinavian audience)

---

## 2. Target Audience & Keywords

### Primary audience
- Developers and designers who want to signal human involvement in their work
- Open source contributors looking for badges for their projects
- Creatives exploring the intersection of AI and human creativity

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

### Long-tail keywords
- "how to add a made by human badge to github readme"
- "free badges for open source projects"
- "human vs ai created content badge"
- "show human involvement in project"
- "human creativity in the age of ai"

---

## 3. Technical SEO

### 3.1 Structured Data (JSON-LD)
Add the following schemas to `layout.tsx`:

- **WebSite** — helps Google understand the site identity
- **Organization** — establishes brand presence
- **BreadcrumbList** — if additional pages are added

### 3.2 Sitemap
- Automate sitemap generation or update `lastmod` on each deploy
- Add new pages to sitemap as content grows

### 3.3 Performance
- Site is statically exported (Next.js `output: 'export'`) — excellent for Core Web Vitals
- SVG badges are lightweight
- Monitor Core Web Vitals in Search Console

### 3.4 Indexing
- [x] Submit sitemap in Google Search Console
- [ ] Request indexing of main page
- [ ] Monitor "Coverage" report for crawl issues
- [ ] Add Bing Webmaster Tools

---

## 4. Content Strategy

### 4.1 Additional Pages (Phase 1)
Consider adding these pages to increase keyword coverage:

| Page | Purpose | Target Keywords |
|------|---------|----------------|
| `/about` | Deeper story about the movement | human creativity movement, made by human mission |
| `/badges` | Dedicated badge gallery with full descriptions | free open source badges, github readme badges |
| `/guide` | How to choose and use the right badge | how to add badge to github, badge embed guide |

### 4.2 Blog/Articles (Phase 2)
A `/blog` section could capture informational search traffic:

- "Why Transparency About AI Use Matters"
- "How to Signal Human Creativity in Your Projects"
- "The Difference Between AI-Generated and Human-Curated Work"
- "Adding Badges to Your GitHub README: A Complete Guide"

### 4.3 Content Principles
- Write for humans first, search engines second
- Focus on the positive framing (celebrating human creativity, not anti-AI)
- Keep content concise and actionable

---

## 5. Link Building & Distribution

### 5.1 GitHub Presence
- Optimize the GitHub repo README with badge examples and clear descriptions
- Encourage users to link back to the site when using badges
- Add the site URL to the GitHub repo "About" section

### 5.2 Community & Outreach
- Share on relevant developer communities (Hacker News, Reddit r/opensource, Dev.to)
- Submit to badge directories and "awesome" lists on GitHub
- Reach out to bloggers writing about AI and human creativity

### 5.3 Badge-Driven Backlinks
Each badge embeds a URL back to the site. As adoption grows, this creates organic backlinks:
- Markdown embeds in READMEs link to the badge image hosted on the domain
- Consider adding an optional link wrapper so badges can link back to the site

---

## 6. Monitoring & KPIs

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
| Badge download events | Which badges are most popular |
| Copy embed events | Adoption signal — people embedding badges |
| GitHub repo click events | Interest in contributing |
| Page views & unique visitors | Overall reach |

### Review Cadence
- **Weekly:** Check Search Console for crawl errors and new queries
- **Monthly:** Review impressions, clicks, and keyword rankings
- **Quarterly:** Evaluate content strategy and adjust keyword targets

---

## 7. Implementation Roadmap

### Phase 1 — Foundation (Now)
- [x] Google Search Console connected
- [x] Add JSON-LD structured data (WebSite + Organization) — added to `layout.tsx`
- [x] Update `sitemap.xml` lastmod to auto-update on deploy — `scripts/generate-sitemap.mjs` runs as `prebuild`
- [ ] Request indexing in Search Console
- [ ] Add Bing Webmaster Tools
- [ ] Set baseline metrics

### Phase 2 — Content Expansion (1-2 months)
- [ ] Create `/about` page
- [ ] Create dedicated `/badges` page with richer descriptions
- [ ] Create `/guide` page with step-by-step instructions
- [ ] Update sitemap with new pages
- [ ] Optimize internal linking between pages

### Phase 3 — Growth (3-6 months)
- [ ] Launch blog with first 2-3 articles
- [ ] Begin outreach to developer communities
- [ ] Submit to "awesome" lists and badge directories
- [ ] Consider `hreflang` tags if targeting Scandinavian audience
- [ ] Evaluate adding a badge link-back feature for organic backlinks

---

## 8. Notes

- The site uses static export, so any dynamic features (dynamic sitemap, server-side rendering) would require a change in hosting strategy or build-time generation.
- The current single-page structure is effective for a focused project but limits keyword coverage. Adding even 2-3 pages significantly improves SEO potential.
- Badge adoption is the strongest organic growth lever — every README that embeds a badge is a potential backlink and brand impression.
