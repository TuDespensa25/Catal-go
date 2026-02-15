export function usePushNotifications() {
  // Esta función se conectará con el servidor de notificaciones
  
  const VAPID_PUBLIC_KEY = 'BMrLhLdLdLdLdLdLdLdLdLdLdLdLdLdLdLdLdLdLdLdLdLdLdLdLdLdLdLdLdLdLdLd';
  const SERVER_URL = 'http://localhost:3000'; // Después lo cambiaremos

  // Función para suscribirse a notificaciones
  const subscribeToNotifications = async () => {
    try {
      // 1. Pedir permiso al usuario
      const permission = await Notification.requestPermission();
      
      if (permission !== 'granted') {
        alert('Necesitamos permiso para enviarte notificaciones');
        return false;
      }

      // 2. Obtener el service worker
      const registration = await navigator.serviceWorker.ready;

      // 3. Crear la suscripción
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC_KEY)
      });

      // 4. Guardar la suscripción en nuestro servidor
      const response = await fetch(`${SERVER_URL}/api/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(subscription)
      });

      if (response.ok) {
        alert('✅ Notificaciones activadas correctamente');
        return true;
      } else {
        alert('❌ Error al activar notificaciones');
        return false;
      }
    } catch (error) {
      console.error('Error:', error);
      alert('❌ No se pudieron activar las notificaciones');
      return false;
    }
  };

  // Función para desuscribirse
  const unsubscribeFromNotifications = async () => {
    try {
      const registration = await navigator.serviceWorker.ready;
      const subscription = await registration.pushManager.getSubscription();
      
      if (subscription) {
        await subscription.unsubscribe();
        
        // Avisar al servidor
        await fetch(`${SERVER_URL}/api/unsubscribe`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ endpoint: subscription.endpoint })
        });
        
        alert('❌ Notificaciones desactivadas');
        return true;
      }
    } catch (error) {
      console.error('Error:', error);
      return false;
    }
  };

  // Función auxiliar (no la modifiques)
  function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, '+')
      .replace(/_/g, '/');
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  return {
    subscribeToNotifications,
    unsubscribeFromNotifications
  };
}