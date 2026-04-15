# RETTELSER — Made by Human

Fejl og mangler fundet ved gennemgang af koden 2026-04-15.
Rettet i PR feat/seo-rettelser 2026-04-16.

---

## 1. /about og /badges mangler JSON-LD — RETTET

BreadcrumbList JSON-LD tilføjet til begge sider:
- `src/app/about/page.tsx` — BreadcrumbList (Home → About)
- `src/app/badges/layout.tsx` — BreadcrumbList (Home → Badges)

Homepage (`layout.tsx`) har nu også ItemList (4 badges) + FAQPage (6 spørgsmål).

---

## 2. Ingen FAQPage JSON-LD — RETTET

FAQPage schema tilføjet i `src/app/layout.tsx` med 6 spørgsmål:
1. "What is Made by Human?"
2. "Is Made by Human anti-AI?"
3. "How do I add a badge to my GitHub README?"
4. "Which badge should I choose?"
5. "Are the badges free to use?"
6. "Can I customize the badges?"

---

## 3. Ingen llms.txt — RETTET

Oprettet `public/llms.txt` med badge-beskrivelser, URLs, og how-to for AI-indeksering.

---

## 4. robots.txt nævner ikke AI-bots — RETTET

`public/robots.txt` opdateret med eksplicitte Allow-regler for:
GPTBot, ChatGPT-User, Google-Extended, Anthropic-AI, ClaudeBot, PerplexityBot, Cohere-ai.

---

## 5. Sitemap lastmod er statisk — RETTET

`scripts/generate-sitemap.mjs` er nu wired i `.github/workflows/deploy.yml` (kører før build).
Sitemap genereres automatisk med dagens dato ved hvert deploy.

---

## 6. Footer mangler cross-links til IAMJARL-projekter — RETTET

`src/components/Footer.tsx` har nu links til:
- IAMJARL (iamjarl.com)
- Emotionwave (emotionwave.iamjarl.com)
- BeerTuner (beertuner.iamjarl.com)
- Get to the Movie! (gettothemovie.iamjarl.com)
- GitHub (github.com/JarlLyng/madebyhuman)
