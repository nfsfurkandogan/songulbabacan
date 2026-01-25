/* eslint-disable no-restricted-globals */
const CACHE = "sb-static-v4";

const ASSETS = [
  "/",
  "/index.html",
  "/farmasi/",
  "/farmasi/index.html",
  "/basari-hikayem/",
  "/basari-hikayem/index.html",
  "/kayit-ol/",
  "/kayit-ol/index.html",
  "/iletisim/",
  "/iletisim/index.html",
  "/blog/",
  "/blog/index.html",
  "/privacy.html",
  "/404.html",
  "/manifest.webmanifest",
  "/assets/css/styles.css",
  "/assets/js/main.js",
  "/assets/img/logo.png",
  "/assets/img/hero-spa.jpg",
  "/assets/img/portrait.jpg",
  "/assets/img/heading-bird.png",
  "/assets/img/heading-cloud-bird.png",
  "/assets/img/skin-care.jpg",
  "/assets/img/product-1.jpg",
  "/assets/img/product-2.jpg",
  "/assets/img/product-3.jpg",
  "/assets/img/ig/ig-03.jpg",
  "/assets/img/ig/ig-04.jpg",
  "/assets/img/ig/ig-05.jpg",
  "/assets/img/ig/ig-06.jpg",
  "/assets/img/ig/ig-07.jpg",
  "/assets/img/ig/ig-08.jpg",
  "/assets/img/ig/ig-09.jpg",
  "/assets/img/ig/ig-10.jpg",
  "/assets/icons/icon-192.png",
  "/assets/icons/icon-512.png",
  "/assets/icons/apple-touch-icon.png",
  "/assets/icons/favicon-32.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.map((k) => (k === CACHE ? null : caches.delete(k)))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);

  if (request.method !== "GET") return;
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(request).then((cached) => {
      const fetchPromise = fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put(request, copy)).catch(() => {});
          return response;
        })
        .catch(() => cached);

      return cached || fetchPromise;
    }),
  );
});
