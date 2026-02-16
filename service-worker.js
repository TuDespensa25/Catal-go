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

// Instalación del Service Worker
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

// Activación del Service Worker
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

// Estrategia de caché: Network first con fallback a caché
self.addEventListener('fetch', e => {
    e.respondWith(
        fetch(e.request)
            .then(response => {
                // Si la respuesta es válida, clonarla y guardarla en caché
                if (response && response.status === 200 && response.type === 'basic') {
                    const responseClone = response.clone();
                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(e.request, responseClone);
                    });
                }
                return response;
            })
            .catch(() => {
                // Si falla la red, buscar en caché
                return caches.match(e.request);
            })
    );
});

// Manejar notificaciones en segundo plano (Firebase)
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

// Manejar notificaciones push genéricas (no Firebase)
self.addEventListener('push', event => {
    console.log('🔔 Push genérico recibido:', event);
    
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
        },
        actions: [
            {
                action: 'open',
                title: 'Abrir'
            }
        ]
    };
    
    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});

// Manejar clicks en notificaciones (unificado)
self.addEventListener('notificationclick', (event) => {
    console.log('🔔 Click en notificación:', event.notification);
    
    event.notification.close();

    // Si la acción es cerrar, no hacer nada más
    if (event.action === 'close') {
        return;
    }

    // Determinar URL a abrir (prioridad: data.url, luego productId, luego por defecto)
    let urlToOpen = '/';
    const notificationData = event.notification.data;
    
    if (notificationData?.url) {
        urlToOpen = notificationData.url;
    } else if (notificationData?.productId) {
        urlToOpen = `/?product=${notificationData.productId}`;
    }

    event.waitUntil(
        clients.matchAll({
            type: 'window',
            includeUncontrolled: true
        }).then((clientList) => {
            // Buscar una ventana existente de la app
            for (const client of clientList) {
                if (client.url.includes(self.location.origin) && 'focus' in client) {
                    return client.focus().then(() => {
                        // Navegar a la URL si es diferente
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

// Manejar mensajes para actualización
self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        console.log('Service Worker: Actualización forzada');
        self.skipWaiting();
    }
});