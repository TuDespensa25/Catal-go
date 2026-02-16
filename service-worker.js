const CACHE_NAME = 'tudespensa25-v2'; // Versión actualizada
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './offline.html'
];

// Importar Firebase en el Service Worker
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

// Configuración de Firebase (misma que en index.html)
firebase.initializeApp({
    apiKey: "AIzaSyD93j0jVzFSUHhfFX2BfKIbBBM8vNCFQ0o",
    authDomain: "tudespensa25-5606a.firebaseapp.com",
    projectId: "tudespensa25-5606a",
    storageBucket: "tudespensa25-5606a.firebasestorage.app",
    messagingSenderId: "1004027123407",
    appId: "1:1004027123407:web:18dfc21271cd4ea6c4c9ba",
    measurementId: "G-FF0KPDKF5D"
});

const messaging = firebase.messaging();

// Manejar notificaciones en segundo plano
messaging.onBackgroundMessage((payload) => {
    console.log('📨 Notificación en segundo plano:', payload);

    const notificationTitle = payload.notification?.title || '¡Novedad en TuDespensa.25!';
    const notificationOptions = {
        body: payload.notification?.body || 'Tenemos nuevos productos para ti',
        icon: '/icons/icon-192x192.png',
        badge: '/icons/icon-72x72.png',
        image: payload.notification?.image,
        data: payload.data,
        actions: [
            {
                action: 'open',
                title: 'Ver oferta'
            },
            {
                action: 'close',
                title: 'Cerrar'
            }
        ],
        vibrate: [200, 100, 200],
        requireInteraction: true,
        silent: false,
        tag: 'tudespensa-notification',
        renotify: true
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});

// Manejar clicks en notificaciones
self.addEventListener('notificationclick', (event) => {
    console.log('🔔 Click en notificación:', event.notification);
    
    event.notification.close();

    if (event.action === 'close') {
        return;
    }

    // Determinar URL a abrir
    let urlToOpen = '/';
    if (event.notification.data?.url) {
        urlToOpen = event.notification.data.url;
    } else if (event.notification.data?.productId) {
        urlToOpen = `/?product=${event.notification.data.productId}`;
    }

    event.waitUntil(
        clients.matchAll({
            type: 'window',
            includeUncontrolled: true
        }).then((clientList) => {
            // Si ya hay una ventana abierta, enfocarla
            for (const client of clientList) {
                if (client.url.includes(self.location.origin) && 'focus' in client) {
                    return client.focus().then(() => {
                        if (client.url !== urlToOpen) {
                            return client.navigate(urlToOpen);
                        }
                    });
                }
            }
            // Si no hay ventana abierta, abrir una nueva
            return clients.openWindow(urlToOpen);
        })
    );
});

// Instalación del Service Worker
self.addEventListener('install', e => {
<<<<<<< HEAD
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

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request)
            .then(response => {
                return response || fetch(e.request);
            })
    );
});

// Manejar mensajes para actualización
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        console.log('Service Worker: Actualización forzada');
        self.skipWaiting();
    }
=======
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

// NOTIFICACIONES PUSH
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
>>>>>>> a3280519e27dca82cad55bc568f64409ab523686
});