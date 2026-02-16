// Importar Firebase en el Service Worker
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
            for (const client of clientList) {
                if (client.url.includes(self.location.origin) && 'focus' in client) {
                    return client.focus().then(() => {
                        if (client.url !== urlToOpen) {
                            return client.navigate(urlToOpen);
                        }
                    });
                }
            }
            return clients.openWindow(urlToOpen);
        })
    );
});