self.addEventListener("push", (event) => {
  const data = event.data.json();
  console.log("New notification", data);
  const options = {
    body: data.body,
  };
  event.waitUntil(self.registration.showNotification(data.title, options));
});

self.addEventListener("notificationclick", (event) => {
  clients.openWindow("http://localhost:5000/kanban");
});
