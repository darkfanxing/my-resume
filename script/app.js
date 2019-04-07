if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js');
    });

    window.addEventListener('activate', event => {
          event.waitUntil(
            caches.keys().then(function(cacheNames) {
                var promiseArr = cacheNames.map(function(item) {
                    if (item !== cacheName) {
                        // Delete that cached file
                        return caches.delete(item);
                    }
                });

                return Promise.all(promiseArr);
            })
        );
    });

    window.addEventListener('fetch', function(event) {
        event.respondWith(
            new Response('bad')
        );
    });
}