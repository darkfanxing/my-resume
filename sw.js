/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.2.0/workbox-sw.js");

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [{
        "url": "image/background.jpg",
        "revision": "ef8997c447a8b065b6599994bfbb5854"
    },
    {
        "url": "image/li-style.jpg",
        "revision": "d4aea34109cad2f134a4293b00bb0da7"
    },
    {
        "url": "image/myself.jpg",
        "revision": "f0826f405cd206db68d7ce6fa89f5a91"
    },
    {
        "url": "index.html",
        "revision": "059f931c885b83f958c8e65e77ac9621"
    },
    {
        "url": "README.md",
        "revision": "d41d8cd98f00b204e9800998ecf8427e"
    },
    {
        "url": "style/main.css",
        "revision": "0d077045c37448abbcee3ea54fbff5d4"
    },
    {
        "url": "style/reset.css",
        "revision": "3084b7a05057ac5a579a4b247a5901b5"
    }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});