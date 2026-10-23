const CACHE = 'costanera-v2';
const PRECACHE = ['/', '/en/', '/site.webmanifest', '/icons/icon-192.png', '/icons/icon-512.png'];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(PRECACHE)).then(() => self.skipWaiting())));
self.addEventListener('activate', event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('costanera-') && key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim())));
self.addEventListener('fetch', event => {
 const request = event.request, url = new URL(request.url);
 // Weather must reach the native endpoint; offline data must never imply current conditions.
 if (request.method !== 'GET' || url.origin !== self.location.origin || url.pathname.startsWith('/api/')) return;
 event.respondWith(fetch(request).then(response => {
  if (response.ok) {const copy = response.clone();event.waitUntil(caches.open(CACHE).then(cache => cache.put(request, copy)).catch(() => {}));}
  return response;
 }).catch(async () => (await caches.match(request)) || new Response('Offline: this page or resource is not available. / Sin conexión: este recurso no está disponible.', {status:503, headers:{'Content-Type':'text/plain; charset=utf-8','Cache-Control':'no-store'}})));
});
