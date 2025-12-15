# Anbefalinger for Made by Human

- **Harmoniser base path og embed-koder**  
  - Problem: `copyEmbedCode` i `src/app/page.tsx` hardcoder `https://jarllyng.github.io/madebyhuman/...`, mens download bruger et dynamisk base path. Ved andre deployments bliver kopierede links døde.  
  - Anbefaling: Centralisér base path (fx `NEXT_PUBLIC_BASE_PATH` + evt. `SITE_ORIGIN`) og generér både download-URL og embed-koder ud fra samme helper, så forks og alternative domæner virker.

- **Konsolider metadata/base path-konfiguration**  
  - Problem: `next.config.ts` læser `BASE_PATH`, mens metadata og ikoner i `src/app/layout.tsx` bruger `NEXT_PUBLIC_BASE_PATH` og falder tilbage til GitHub-domain og `/madebyhuman`, som giver 404 lokalt og forkerte canonical/OG-URLs ved andre domæner.  
  - Anbefaling: Brug én konfiguration til `basePath/assetPrefix` og metadata (incl. icons/OG/canonical). Sæt lokal default til tom streng, og en eksplicit produktion-domain via env, så links er korrekte i både lokal udvikling, Pages og andre hosts.

- **Reducer re-renders i hero-mus-effekten**  
  - Problem: Mouse tracking laver `setState` på hvert frame og rerender hele siden. Kan koste FPS på svagere enheder.  
  - Anbefaling: Brug motion values direkte i SVG-masken (fx `useMotionTemplate` + CSS var) eller throttle via `requestAnimationFrame`/`useReducedMotion`. Deaktiver evt. effekten på low-power enheder.
