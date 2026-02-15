const express = require('express');
const webPush = require('web-push');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ===== CONFIGURACIÓN VAPID =====
const vapidKeys = {
  publicKey: "BH4PgxcsagZ-gEtYG-fCX6-BaaVSj5obs0Zr_sFfx8alIPVcVntQ8CoKbvuLddoHNMGbfNZjPnATP6PZBwL1N-g",
  privateKey: "cW6Lfk-mtjjLFi306I6Kq0Y1pUS7Yl5ty5ozcxGwE_k"
};

webPush.setVapidDetails(
  'mailto:ventas@tudespensa25.com',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// ===== BASE DE DATOS SIMPLE (archivo JSON) =====
const DB_FILE = './subscriptions.json';

// Leer suscripciones guardadas
function getSubscriptions() {
  if (!fs.existsSync(DB_FILE)) {
    return [];
  }
  const data = fs.readFileSync(DB_FILE);
  return JSON.parse(data);
}

// Guardar suscripción
function saveSubscription(subscription) {
  const subscriptions = getSubscriptions();
  
  const exists = subscriptions.some(s => s.endpoint === subscription.endpoint);
  if (!exists) {
    subscriptions.push(subscription);
    fs.writeFileSync(DB_FILE, JSON.stringify(subscriptions, null, 2));
  }
  return !exists;
}

// Eliminar suscripción
function removeSubscription(endpoint) {
  const subscriptions = getSubscriptions();
  const filtered = subscriptions.filter(s => s.endpoint !== endpoint);
  fs.writeFileSync(DB_FILE, JSON.stringify(filtered, null, 2));
  return subscriptions.length !== filtered.length;
}

// ===== API ENDPOINTS =====

app.post('/api/subscribe', (req, res) => {
  const subscription = req.body;
  const isNew = saveSubscription(subscription);
  
  console.log(isNew ? '✅ Nueva suscripción' : 'ℹ️ Suscripción ya existente');
  res.json({ success: true });
});

app.post('/api/unsubscribe', (req, res) => {
  const { endpoint } = req.body;
  const removed = removeSubscription(endpoint);
  
  console.log(removed ? '❌ Suscripción eliminada' : 'ℹ️ Suscripción no encontrada');
  res.json({ success: true });
});

app.get('/api/stats', (req, res) => {
  const subscriptions = getSubscriptions();
  res.json({ subscribers: subscriptions.length });
});

app.post('/api/send-notification', async (req, res) => {
  const { title, body, icon, url } = req.body;
  
  const payload = JSON.stringify({
    title: title || 'TuDespensa.25',
    body: body || '¡Nueva notificación!',
    icon: icon || '/icons/icon-192x192.png',
    url: url || '/'
  });

  const subscriptions = getSubscriptions();
  let successCount = 0;

  for (const subscription of subscriptions) {
    try {
      await webPush.sendNotification(subscription, payload);
      successCount++;
    } catch (error) {
      console.error('Error enviando a', subscription.endpoint, error.statusCode);
      
      if (error.statusCode === 410) {
        removeSubscription(subscription.endpoint);
      }
    }
  }

  console.log(`📨 Notificación enviada a ${successCount} de ${subscriptions.length} usuarios`);
  res.json({
    success: true,
    sent: successCount,
    total: subscriptions.length
  });
});

// ===== INICIAR SERVIDOR =====
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor de notificaciones corriendo en http://localhost:${PORT}`);
  console.log(`📊 API disponible en:`);
  console.log(`   - POST  http://localhost:${PORT}/api/subscribe`);
  console.log(`   - POST  http://localhost:${PORT}/api/unsubscribe`);
  console.log(`   - GET   http://localhost:${PORT}/api/stats`);
  console.log(`   - POST  http://localhost:${PORT}/api/send-notification`);
});