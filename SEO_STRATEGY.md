# SEO & GEO Strategy — Made by Human

Site: https://madebyhuman.iamjarl.com  
Stack: Next.js 16 (static export) + GitHub Pages  
Google Search Console: Connected  
Umami Analytics: Connected  
Last updated: 2026-04-15

---

## 1. Product positioning

Made by Human er en åben bevægelse der fejrer menneskelig kreativitet — ikke ved at afvise AI, men ved at ære intention, dømmekraft og personligt præg. Gratis SVG-badges (8 varianter: Made by Human, Co-created with AI, Crafted by Human, Human in the Loop — hvid + sort) til websites, GitHub READMEs, apps og kunstprojekter. Open source (MIT). Next.js static export på GitHub Pages.

SEO positioning: **den positive "made by human" badge-bevægelse** — differentierer fra anti-AI-holdninger via positiv framing. Konkurrerer med GitHub badge-generatorer, shields.io og lignende badge-tjenester, men med unik filosofisk vinkel.

---

## 2. Hvad der allerede er på plads

### Technical SEO (done)

- [x] JSON-LD `@graph`: WebSite + Organization i `layout.tsx`
- [x] Comprehensive metadata i `layout.tsx`: title, description, keywords (8 stk), OG tags, Twitter cards
- [x] OG image (1200x630)
- [x] `robots.txt` med sitemap-reference
- [x] `sitemap.xml` med 3 URL'er (/, /about, /badges) — genereret via `scripts/generate-sitemap.mjs`
- [x] Google Search Console connected + verification file
- [x] Canonical URL
- [x] `lang="en"`
- [x] Umami analytics med custom events (badge clicks, downloads, copies)
- [x] Favicon-set (ICO, SVG, PNG 192/512, Apple Touch Icon)
- [x] Static export (excellent Core Web Vitals)

### Sider (done)

- [x] Homepage (`/`) — Hero, manifest/philosophy, badge preview, how to use, contributing
- [x] About page (`/about`) — Dybere historie om bevægelsen
- [x] Badges page (`/badges`) — Dedikeret badge-galleri med download + embed kode

### Cross-linking (delvist)

- [x] Footer link til iamjarl.com
- [ ] Andre IAMJARL-projekter mangler i footer

---

## 3. DU SKAL: Ret fejl i koden

Se `RETTELSER.md` i projektets rod. Opsummering:

1. **JSON-LD på undersider** → /about og /badges mangler structured data. Tilføj BreadcrumbList til begge
2. **FAQPage JSON-LD** → Tilføj til homepage eller about-side
3. **llms.txt** → Opret i `public/`
4. **robots.txt AI-bots** → Tilføj eksplicitte Allow-regler
5. **Sitemap lastmod** → Sikr automatisk opdatering ved deploy
6. **Footer cross-links** → Tilføj links til IAMJARL-projekter der bruger badges

---

## 4. Keyword-strategi

### Tier 1 — Badge-søgninger (transactional, high intent)

- made by human badge
- human made badge for github
- co-created with ai badge
- crafted by human badge
- human in the loop badge
- ai collaboration badge

### Tier 2 — Bevægelses-søgninger (informational)

- human creativity movement
- human creativity in the age of ai
- show human involvement in project
- ai transparency badge
- made by human vs ai

### Tier 3 — Long-tail / how-to

- how to add a made by human badge to github readme
- free badges for open source projects
- human vs ai created content badge
- badge embed code for github

### Tier 4 — Open source badges (bredere)

- free svg badges for projects
- github readme badges
- open source project badges
- developer badges free download

---

## 5. GEO — Generative Engine Optimization

### Hvad der er på plads

- WebSite + Organization JSON-LD
- God meta description med klar positionering
- Static export = fuld HTML for crawlere
- 3 indeksbare sider

### DU SKAL: Tilføj llms.txt

Opret `public/llms.txt`:

```
# Made by Human

> Celebrating human creativity — not by rejecting AI, but by honoring the intention, judgement, and personal touch that humans bring to every creative project.

Made by Human is a free, open-source badge system for websites, GitHub READMEs, apps, and art projects. Each badge acknowledges a different nuance in how humans and AI work together.

## Available Badges (8 SVG variants)
- Made by Human (white + black) — General badge celebrating human creativity
- Co-created with AI (white + black) — For projects created in collaboration with AI tools
- Crafted by Human (white + black) — For projects created entirely by human hands
- Human in the Loop (white + black) — For projects where humans guide and curate the process

## How to Use
1. Choose your badge at https://madebyhuman.iamjarl.com/badges
2. Download the SVG or copy the embed code
3. Add to your GitHub README, website, or project

## Badge URLs
All badges hosted at: https://madebyhuman.iamjarl.com/badges/[name]-[variant].svg
Example: https://madebyhuman.iamjarl.com/badges/made-white.svg

## Technical
- Open source (MIT License) on GitHub
- SVG format for sharp rendering at any size
- White and black variants for any background

## Links
- Website: https://madebyhuman.iamjarl.com
- Badges: https://madebyhuman.iamjarl.com/badges
- About: https://madebyhuman.iamjarl.com/about
- GitHub: https://github.com/JarlLyng/madebyhuman
- Creator: https://iamjarl.com
```

### DU SKAL: Tilføj FAQPage JSON-LD

Tilføj til homepage eller about-side:

1. "What is Made by Human?" — A positive movement celebrating human creativity with free SVG badges
2. "Is Made by Human anti-AI?" — No. We celebrate human creativity regardless of whether AI was used
3. "How do I add a badge to my GitHub README?" — Copy the markdown embed code from the badges page
4. "Which badge should I choose?" — Made by Human (general), Co-created with AI (used AI tools), Crafted by Human (no AI), Human in the Loop (guided AI)
5. "Are the badges free?" — Yes, open source under MIT License
6. "Can I customize the badges?" — Fork the repo and modify the SVGs

### Target queries for AI-citation

- "Made by human badge for github" → /badges
- "Free human creativity badge" → homepage
- "AI collaboration badge open source" → /badges
- "How to show human involvement in project" → /about
- "Human in the loop badge" → /badges

---

## 6. Cross-linking

### Fra Made by Human til andre IAMJARL-projekter

Tilføj i footer:

- [iamjarl.com](https://iamjarl.com) — portfolio (allerede til stede)
- [BeerTuner](https://beertuner.iamjarl.com) — uses Made by Human badge
- [EmotionWave](https://emotionwave.iamjarl.com) — AI-powered art project
- [Get to the Movie!](https://gettothemovie.iamjarl.com) — AI-matched recommendations

### Badge-drevet backlinking

Hver badge der embeddes i et GitHub README eller website skaber et potentielt backlink. Overvej at tilføje en valgfri link-wrapper:

```markdown
[![Made by Human](https://madebyhuman.iamjarl.com/badges/made-white.svg)](https://madebyhuman.iamjarl.com)
```

---

## 7. Where to make noise

### Reddit

- **r/opensource** — "Free 'Made by Human' badges for your open source projects"
- **r/github** — "Show human involvement in your README with free SVG badges"
- **r/webdev** (~1M) — developer angle
- **r/design** — badge design + philosophy
- **r/artificial** — AI transparency diskussion

### Andre kanaler

- **Hacker News** — Show HN: Made by Human — Free badges celebrating human creativity
- **Product Hunt** — "Celebrate human creativity with free badges for your projects"
- **Dev.to** — artikel: "How to Signal Human Creativity in Your Open Source Projects"
- **GitHub "awesome" lists** — submit til awesome-badges, awesome-open-source
- **Indie Hackers** — bevægelses-vinkel

### Badge-adoption strategi

- Brug Made by Human badges på ALLE IAMJARL-projekter
- Opfordr GitHub-community til at adopte
- Hver README med badge = organic backlink + brand impression

---

## 8. Monitoring

- **Google Search Console**: Ugentlig — impressions, clicks, crawl errors
- **Umami Analytics**: Badge downloads, embed copies, page views, referral sources
- **Nøgletal**: Badge adoption rate (downloads + embeds), organic traffic, backlinks fra badge-embeds
