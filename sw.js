const CACHE_NAME = 'game-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// Installation : on met en cache tous les fichiers
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Stratégie : Récupérer depuis le cache d'abord, sinon réseau
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
