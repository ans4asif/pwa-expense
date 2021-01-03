var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  "/",
  "/index.html",
  "/static/js/bundle.js",
  "/static/js/0.chunk.js",
  "/static/js/main.chunk.js",
  "/manifest.json",
  "/logo192.png",
  "/favicon.ico",
  "/robots.txt",
  // "/static/js/2.2dab9184.chunk.js",
  // "static/js/main.c77922a6.chunk.js",
  // "/static/css/main.19ef27d0.chunk.css",
  



];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  });