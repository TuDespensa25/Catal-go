const CACHE_NAME = 'tudespensa25-v3'; // Cambia la versión cuando actualices
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './offline.html'
];

// Importar Firebase
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

// Configuración de Firebase
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

// Instalación
self.addEventListener('install', e => {
    console.log('Service Worker: Instalando nueva versión...');
    self.skipWaiting(); // Activar inmediatamente
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Service Worker: Cacheando archivos');
                return cache.addAll(urlsToCache);
            })
    );
});

// Activación
self.addEventListener('activate', e => {
    console.log('Service Worker: Activando nueva versión...');
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Service Worker: Eliminando caché viejo:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            // Notificar a todas las pestañas que hay una nueva versión
            self.clients.matchAll().then(clients => {
                clients.forEach(client => {
                    client.postMessage({
                        type: 'NEW_VERSION_ACTIVATED',
                        version: CACHE_NAME
                    });
                });
            });
            return self.clients.claim();
        })
    );
});

// Escuchar mensajes de las pestañas
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        console.log('Service Worker: Saltando waiting...');
        self.skipWaiting();
    }
    
    if (event.data && event.data.type === 'CHECK_VERSION') {
        // Responder con la versión actual
        event.ports[0].postMessage({
            version: CACHE_NAME,
            timestamp: Date.now()
        });
    }
});

// El resto de tu código de notificaciones Firebase...
messaging.onBackgroundMessage((payload) => {
    console.log('📨 Notificación en segundo plano:', payload);
    const notificationTitle = payload.notification?.title || '¡Novedad en TuDespensa.25!';
    const notificationOptions = {
        body: payload.notification?.body || 'Tenemos nuevos productos para ti',
        icon: '/icons/icon-192x192.png',
        badge: '/icons/icon-72x72.png',
        image: payload.notification?.image,
        data: payload.data || {},
        actions: [
            { action: 'open', title: 'Ver oferta' },
            { action: 'close', title: 'Cerrar' }
        ],
        vibrate: [200, 100, 200],
        requireInteraction: true,
        tag: 'tudespensa-notification',
        renotify: true
    };
    return self.registration.showNotification(notificationTitle, notificationOptions);
});

// Manejar clicks en notificaciones
self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    if (event.action === 'close') return;
    
    let urlToOpen = '/';
    const notificationData = event.notification.data;
    if (notificationData?.url) urlToOpen = notificationData.url;
    else if (notificationData?.productId) urlToOpen = `/?product=${notificationData.productId}`;

    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true })
            .then(clientList => {
                for (const client of clientList) {
                    if (client.url.includes(self.location.origin) && 'focus' in client) {
                        return client.focus().then(() => {
                            if (client.url !== urlToOpen) return client.navigate(urlToOpen);
                        });
                    }
                }
                return clients.openWindow(urlToOpen);
            })
    );
});

// Estrategia de caché: Network first
self.addEventListener('fetch', e => {
    e.respondWith(
        fetch(e.request)
            .then(response => {
                if (response && response.status === 200 && response.type === 'basic') {
                    const responseClone = response.clone();
                    caches.open(CACHE_NAME).then(cache => cache.put(e.request, responseClone));
                }
                return response;
            })
            .catch(() => caches.match(e.request))
    );
});