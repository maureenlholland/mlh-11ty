const version = '1.0.0';
const staticCache = `${version}staticfiles`;

addEventListener('install', e => {
  skipWaiting();
  e.waitUntil(
    caches.open(staticCache)
      .then(cache => {
        // split into nice to have that isn't returned
        // return must have cache
        return cache.addAll([
          'img/typewriter-favicon.png',
          'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700&display=swap',
          'styles.css'
        ]);
      })
  ); // end waitUntil
});

addEventListener('activate', e => {
  e.waitUntil(
    // clean old caches
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(name => {
            if (name !== staticCache) {
              return caches.delete(cacheName);
            }
          })
        )
          // take control over any opened tabs
          .then(() => clients.claim());
      })
  ); // end waitUntil
});

addEventListener("fetch", e => {
  const request = e.request;
  e.respondWith(
    // return cache
    caches.match(request)
      .then(resp => {
        if (resp) {
          return resp;
        }
        // return network resp
        return fetch(request)
                .catch(() => {
                  // return offline page
                })
      })
  ); // end respondWith
});
