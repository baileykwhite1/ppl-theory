/* Offline support. Everything the app needs is static, so the strategy is simple:
   pre-cache the shell on install, serve same-origin GETs cache-first, and refresh
   the cache in the background. Cross-origin calls (the weather APIs) are never
   touched — they must stay live, and must fail cleanly when there is no signal.

   Bump CACHE_VERSION whenever the shell changes. The old cache is deleted on
   activate, and the app shows "an update is ready" rather than reloading the page
   out from under you — losing a half-finished quiz to a background update would be
   worse than seeing yesterday's build for one more session. */

const CACHE_VERSION = 'ppl-2026-09-12-c';

const SHELL = [
  './',
  './index.html',
  './app.js',
  './manifest.webmanifest',
  './data/syllabus.js',
  './data/diagrams.js',
  './data/airfields.js',
  './data/coast.js',
  './data/content/010.js',
  './data/content/020.js',
  './data/content/030.js',
  './data/content/040.js',
  './data/content/050.js',
  './data/content/060.js',
  './data/content/070.js',
  './data/content/081.js',
  './data/content/090.js'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_VERSION)
      // addAll is all-or-nothing; add individually so one bad path cannot
      // leave the whole app uncached.
      .then(c => Promise.all(SHELL.map(u => c.add(u).catch(() => null))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;   // leave the weather APIs alone

  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then(hit => {
      // Serve from cache immediately, then quietly refresh it for next time.
      const net = fetch(req).then(res => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE_VERSION).then(c => c.put(req, copy));
        }
        return res;
      }).catch(() => null);

      if (hit) { net; return hit; }
      return net.then(res => res || caches.match('./index.html'));
    })
  );
});

self.addEventListener('message', e => {
  if (e.data === 'skipWaiting') self.skipWaiting();
});
