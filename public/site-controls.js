// Refresh the existing offline worker; its new fetch handler excludes live weather.
if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js').then(registration => registration.update()).catch(() => {}));
