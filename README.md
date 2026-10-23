# Costanera Corrientes guide

Independent Spanish and English visitor guide at https://costaneractes.com/.
Astro static pages and the native Cloudflare Worker preserve the existing architecture.

## Development

The project pins Node 22.13.0 and pnpm 11.20.0. Install with `pnpm install --frozen-lockfile`, then run `pnpm check`, `pnpm build` and `node --test tests/*.test.mjs`. The Worker entry is `worker/index.ts`; `wrangler.jsonc` identifies `costaneractes` and its static asset binding.

Spanish is at `/`, English at `/en/`. Each locale has privacy, terms and cookie settings pages. Legal pages and localized error pages are excluded from indexing and the sitemap. Language links preserve the corresponding topic. The Worker normalizes known page aliases, returns localized 404 responses and serves the existing `/api/weather` endpoint using the attraction location. Forecast data is an Open-Meteo model estimate, cached for five minutes; it does not establish river levels, water quality, beach openings or official alerts. Errors remain unavailable rather than displaying invented zero values.

The existing optional Google Analytics setting is retained. Rejecting or failing to save a preference disables measurement on the current page. Persistence failures are explained without promising a saved preference or control over other provider resources. The existing offline service worker is retained with network-first refresh and an explicit exclusion for the live weather endpoint; only its own previous caches are removed.

## Public facts and visuals

Municipal tourism describes the historic General San Martín section as 2.5 km and Juan Pablo II as 900 m, inaugurated in 2008. These section lengths do not guarantee a present continuous route. Sources: [Paseo por la Costa](https://visitcorrientes.tur.ar/quehacer/paseo-por-la-costa/) and [municipal beach information](https://visitcorrientes.tur.ar/quehacer/playas/). The dated Google Maps listing is attributed visibly and is not republished as an independent aggregate rating.

See [VISUAL-CREDITS.md](VISUAL-CREDITS.md). Unsupported photographic assets were removed; the river illustration is a conceptual graphic, not a location photograph or map.
