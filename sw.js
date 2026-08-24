self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));

self.addEventListener('push', (event) => {
  const data = event.data?.json() || {};
  event.waitUntil(self.registration.showNotification(data.title || 'REVISE', {
    body: data.body || 'Your study session is ready.',
    icon: data.icon || './icon-192.png',
    tag: data.tag || 'study-session'
  }));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(clients.matchAll({ type: 'window', includeUncontrolled: true }).then((pages) => {
    const page = pages.find((candidate) => 'focus' in candidate);
    return page ? page.focus() : clients.openWindow('./');
  }));
});
