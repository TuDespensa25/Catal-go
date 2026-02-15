const CACHE_NAME = 'tudespensa25-v1';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './offline.html'
  // 👈 SOLO ARCHIVOS ESENCIALES, SIN IMÁGENES
];

self.addEventListener('install', e => {
  console.log('Service Worker: Instalando...');
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Cacheando archivos');
        return cache.addAll(urlsToCache);
      })
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
            console.log('Service Worker: Eliminando caché viejo', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Estrategia: Network First con fallback a caché
self.addEventListener('fetch', e => {
  // Ignorar requests que no sean GET
  if (e.request.method !== 'GET') return;

  // Para archivos HTML, intentar red primero
  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request)
        .catch(() => caches.match('./offline.html'))
    );
    return;
  }

  // Para el resto, caché primero
  e.respondWith(
    caches.match(e.request)
      .then(response => {
        return response || fetch(e.request);
      })
  );
});

// ===== NUEVO: PARA NOTIFICACIONES PUSH =====
self.addEventListener('push', event => {
  console.log('Notificación recibida:', event);
  
  let data = { 
    title: 'TuDespensa.25', 
    body: '¡Nueva notificación!', 
    icon: '/icons/icon-192x192.png' 
  };
  
  if (event.data) {
    try {
      data = event.data.json();
    } catch (e) {
      data.body = event.data.text();
    }
  }
  
  const options = {
    body: data.body,
    icon: data.icon || '/icons/icon-192x192.png',
    badge: '/icons/icon-72x72.png',
    vibrate: [200, 100, 200],
    data: {
      url: data.url || '/'
    }
  };
  
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// ===== NUEVO: CUANDO EL USUARIO HACE CLIC EN LA NOTIFICACIÓN =====
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  const urlToOpen = event.notification.data.url || '/';
  
  event.waitUntil(
    clients.matchAll({
      type: 'window',
      includeUncontrolled: true
    }).then(windowClients => {
      for (let client of windowClients) {
        if (client.url === urlToOpen && 'focus' in client) {
          return client.focus();
        }
      }
      return clients.openWindow(urlToOpen);
    })
  );
});

// ===== NUEVO: PARA ACTUALIZACIONES =====
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    console.log('Service Worker: Actualizando...');
    self.skipWaiting();
  }
});