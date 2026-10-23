import { COORDS, buildUrl, transform } from '../src/lib/weather.ts';
export interface Env { ASSETS: { fetch(request: Request): Promise<Response> }; }
interface Context { waitUntil(promise: Promise<unknown>): void; }
const pages = new Set(['/','/en/','/legal/privacy/','/legal/terms/','/legal/cookies/','/en/legal/privacy/','/en/legal/terms/','/en/legal/cookies/']);
async function handleWeather(request: Request, ctx?: Context): Promise<Response> {
 const input = new URL(request.url), lang = input.searchParams.get('lang') === 'en' ? 'en' : 'es';
 const apiUrl = buildUrl(COORDS.lat, COORDS.lon), key = new Request(apiUrl);
 const cache = (globalThis as any).caches?.default;
 let payload;
 if (cache) {
  try { const hit = await cache.match(key); if (hit) payload = transform(await hit.json(), lang); } catch {}
 }
 if (!payload) {
  try {
   const upstream = await fetch(apiUrl, { signal: AbortSignal.timeout(6000) });
   if (!upstream.ok) throw new Error('Upstream unavailable');
   const raw = await upstream.json(); payload = transform(raw, lang);
   if (cache) {
    const store = cache.put(key, Response.json(raw, {headers:{'Cache-Control':'public,max-age=300'}})).catch(() => {});
    if (ctx) ctx.waitUntil(store); else await store;
   }
  } catch { return Response.json({error:'weather_unavailable'}, {status:502,headers:{'Cache-Control':'no-store'}}); }
 }
 return Response.json(payload, {headers:{'Cache-Control':'public,max-age=300','access-control-allow-origin':'*'}});
}
export default {
 async fetch(request: Request, env: Env, ctx?: Context): Promise<Response> {
  const url = new URL(request.url);
  if (url.protocol === 'http:' && ['costaneractes.com','www.costaneractes.com'].includes(url.hostname)) {url.protocol='https:';return Response.redirect(url.href,301);}
  if (!['GET','HEAD'].includes(request.method)) return new Response('Method not allowed',{status:405,headers:{Allow:'GET, HEAD'}});
  let response: Response;
  if (url.pathname === '/api/weather') response = await handleWeather(request,ctx);
  else {
   let normalized = url.pathname.replace(/\/index\.html$/,'/'); if (normalized==='/en') normalized='/en/'; if (!normalized.endsWith('/')&&pages.has(normalized+'/')) normalized+='/';
   if (normalized!==url.pathname&&pages.has(normalized)) {url.pathname=normalized;return Response.redirect(url.href,301);}
   response = await env.ASSETS.fetch(request);
   if (response.status===404 || ['/404','/404/','/404.html','/en/404','/en/404/','/en/404.html'].includes(url.pathname)) {
    const target=new URL(url);target.pathname=url.pathname.startsWith('/en/')?'/en/404/':'/404/';const page=await env.ASSETS.fetch(new Request(target,request));response=new Response(page.body,{status:404,headers:page.headers});
   }
  }
  const headers=new Headers(response.headers);headers.set('X-Content-Type-Options','nosniff');headers.set('Referrer-Policy','strict-origin-when-cross-origin');if(response.status===404)headers.set('X-Robots-Tag','noindex');
  if(headers.get('Content-Type')?.includes('text/html'))headers.set('Cache-Control','no-cache');
  return new Response(request.method==='HEAD'?null:response.body,{status:response.status,headers});
 }
};
