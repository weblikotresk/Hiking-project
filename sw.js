const cacheName = 'app_v1';

// Call Install Event
self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((resp) => {
        return resp || fetch(event.request).then((response) => {
          return caches.open('app_v1').then((cache) => {
            cache.put(event.request, response.clone());
            return response;
          });
        });
      })
    );
  });
