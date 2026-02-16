import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging/sw';

const firebaseConfig = {
  apiKey: "AIzaSyBLAHBLAHBLAH",
  authDomain: "tudespensa25.firebaseapp.com",
  projectId: "tudespensa25",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// El resto de tu service worker actual...
const CACHE_NAME = 'tudespensa25-v1';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './offline.html'
];

self.addEventListener('install', e => {
  console.log('Service Worker: Instalando...');
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  console.log('Service Worker: Activado');
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request)
      .then(response => response || fetch(e.request))
  );
});