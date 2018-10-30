const cacheVersion = 'multiapp-static-v1'

self.addEventListener('install', (event) => {
  const urlsToCache = [
    '/',
    '/static/js/bundle.js',
    '/static/js/0.chunk.js',
    '/static/js/main.chunk.js',
    '/manifest.json',
    '/stations.data.json',
    '/station.png',
    '/tram-red.png',
  ];
  event.waitUntil(
    caches.open(cacheVersion)
      .then(cache => cache.addAll(urlsToCache))
      .catch(err => console.log('Catche on install error'))
  )
});

self.addEventListener('fetch', (event) => {
  if (event.request.url.slice(-4) === '.pbf') {
    event.respondWith(
      caches.open(cacheVersion)
        .then(cache => cache.match(event.request)
          .then(response => response || fetch(event.request)
            .then(response => {
              cache.put(event.request, response.clone());
              return response;
            })
          )
        )
    );
  } else {
    console.log(event)
    event.respondWith(
      caches.match(event.request)
        .then(res => {
          if (res) return res;
          return fetch(event.request)
            .catch(error => console.log('Fetch error'))
        })
    )
  }
});