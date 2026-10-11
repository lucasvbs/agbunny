const CACHE_NAME = "agbunny-app-v1";
const APP_SCOPE = self.registration.scope;
const APP_ENTRY = new URL("./", APP_SCOPE).href;
const PRECACHE_URLS = [
  APP_ENTRY,
  new URL("manifest.webmanifest", APP_SCOPE).href,
  new URL("pwa-icon-180.png", APP_SCOPE).href,
  new URL("pwa-icon-192.png", APP_SCOPE).href,
  new URL("pwa-icon-512.png", APP_SCOPE).href,
  new URL("pwa-icon-maskable-512.png", APP_SCOPE).href,
  new URL("logo-agbunny-new.png", APP_SCOPE).href,
  new URL("logo-agbunny-symbol.png", APP_SCOPE).href,
  new URL("team-wander.jpg", APP_SCOPE).href,
  new URL("team-lucas.jpg", APP_SCOPE).href,
  new URL("team-leo.jpg", APP_SCOPE).href,
  new URL("team-matheus.jpg", APP_SCOPE).href,
  new URL("team-nilon.jpg", APP_SCOPE).href,
  new URL("video-bunny-poster.jpg", APP_SCOPE).href,
];

async function precacheApplication() {
  const cache = await caches.open(CACHE_NAME);
  await cache.addAll(PRECACHE_URLS);

  const entryPage = await cache.match(APP_ENTRY);
  if (!entryPage) return;

  const html = await entryPage.text();
  const assetPaths = [...html.matchAll(/(?:src|href)="([^"]+\.(?:js|css))"/g)]
    .map((match) => new URL(match[1], APP_SCOPE).href);

  if (assetPaths.length) await cache.addAll(assetPaths);
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    precacheApplication()
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => Promise.all(
        cacheNames
          .filter((cacheName) => cacheName.startsWith("agbunny-app-") && cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName)),
      ))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const requestUrl = new URL(request.url);

  if (request.method !== "GET" || requestUrl.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            void caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(async () => (await caches.match(request)) || (await caches.match(APP_ENTRY))),
    );
    return;
  }

  if (requestUrl.pathname.endsWith(".mp4")) return;

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;

      return fetch(request).then((response) => {
        const contentLength = Number(response.headers.get("content-length") || 0);
        if (response.ok && (!contentLength || contentLength < 8 * 1024 * 1024)) {
          const copy = response.clone();
          void caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        }
        return response;
      });
    }),
  );
});
