import { COORDS, buildUrl, transform } from '../src/lib/weather';

export interface Env {
  ASSETS: Fetcher;
}

// Server-side weather endpoint: fetches the forecast once, caches it at the edge,
// and returns a normalized payload for the front-end. No API key required.
async function handleWeather(url: URL): Promise<Response> {
  const lang = url.searchParams.get('lang') === 'en' ? 'en' : 'es';
  const apiUrl = buildUrl(COORDS.lat, COORDS.lon);
  const cacheKey = new Request(apiUrl);
  const cache = caches.default;

  let upstream = await cache.match(cacheKey).catch(() => undefined);
  if (!upstream) {
    try {
      upstream = await fetch(apiUrl);
    } catch {
      return new Response(JSON.stringify({ error: 'weather_unavailable' }), {
        status: 502,
        headers: { 'content-type': 'application/json; charset=utf-8' },
      });
    }
    const copy = upstream.clone();
    cache.put(cacheKey, copy).catch(() => {});
  }

  const data = await upstream.json();
  const payload = transform(data, lang);
  return new Response(JSON.stringify(payload), {
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'public, max-age=300',
      'access-control-allow-origin': '*',
    },
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === '/api/weather') {
      return handleWeather(url);
    }
    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
