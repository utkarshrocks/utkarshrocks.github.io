'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "72e3359166d6bebcba728c4633084341",
".git/config": "17e4ed11829953f070f9cc7bb5028cc0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d0f29c026222acaa048cec713f1b833e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7b60ee410c95a13bafeda1c9e8f17526",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "33dfbdeb0e704ad522fdcc5ca5686f27",
".git/logs/refs/heads/master": "33dfbdeb0e704ad522fdcc5ca5686f27",
".git/logs/refs/remotes/origin/master": "faf4856967ea483743b2562ab8a97ff4",
".git/objects/00/92c52f002dec96b4b8d9ea63101c34f775c2cd": "4457419450bb6a1fd22204782732c520",
".git/objects/08/e6fe71726f71256532f4ec0cfd4c8f2725e7bc": "eed52affca5a813b5927573a5e0fd6db",
".git/objects/0a/bf826a7125d666121fcb62fba8c097bf397bdd": "d3c11854307c7a7785971857928cd008",
".git/objects/15/0344540fb3f533a17cf8c9810320ebcf7d3e10": "c25c66d477a5d4f624ff58951569fa88",
".git/objects/17/c6a4c28637c804fc1be01bfb5ce8bbe8b8bef3": "9568fef66cdf0718998b24e87ebe7a8d",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/9527b799aa24a5e30ac5a4279f330fef380ca5": "a1bdd8458bef86933a40739327ee9720",
".git/objects/2f/d9d134aa73e78f7d1a4ff82bf77f1b3e9526cc": "2ffbd96d52560f0f4a4292e932a46c6f",
".git/objects/38/a63e7a1991b66475bd358e568c9f086cef8f9f": "66562f34801cb04ea364beee0eb34daa",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/51/cd00fec8d28ae3845b57b3360e61cab4058fcc": "58a5d2694fc55e14fb6f4e41f4f3f3c6",
".git/objects/59/09445fe44f8b3758288009be6719fc8a4cfbea": "7fd87c444c80fe781adbd6b9ea2c825f",
".git/objects/63/66f4f7d27c4248144c7f41d839d945bc025fa8": "57b23c2ac1b65ada21be5b107f2fda32",
".git/objects/68/ba78d7facfe9d938c8b0a131dbf91a66acefac": "e0c3c6c668669f18aa504e6c99482e4e",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/85/1ebfbe3d1ef6f0907599c74034107c5a85b21e": "b6f410f9a8b8fcfeb1c3f676efbf21cc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/f468c86b817c668834d4de296b39ccdc9f7e8f": "cc0f55f97560275e5f75710b845f59e8",
".git/objects/99/5634199668fe800b4ee746fd5332780bd6683d": "a9032f8d745b76211ed5ba70d4cb707a",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/cade3ccd5a358cc7ff5eb1abfd4176361017ec": "48bf1992ef67bc487fb78149ed79c39e",
".git/objects/a5/c75bc5b3445d8cead84be94f8689b030ec7191": "36f16e5c8c0e12be2177b35b570794d4",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/44e0a57fc5965e4eb7109cc0b66cdc556c6878": "a9b159632b1a294b9b6327e725cc7f03",
".git/objects/b5/491711cd581a16f0862bab1bb09ed8c3089e32": "5010fcd62bb3fe5459d541c818c6eeb9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c0/82c83335931128f972c3f05dc6efb4e28482f7": "8d12323e5841a4e0bccef158f20dc87a",
".git/objects/c7/358e67b3d0a2377061f408aa025a0b3fb99865": "0a7ac96df67dcc25193277f2f171ac4b",
".git/objects/cf/e80ef91922d7e7b5bc3e20eabeb44575d08c7c": "f65b472ebbdcabc522d2a042c2012d44",
".git/objects/d0/e97f4a4d2ffaa277a6c5af268dec998b9bd5b2": "64aeec1e9d145afef814923b9bb02c7c",
".git/objects/d3/0c37e6e73255675fa9d1d96514e57d8d30a974": "0b05986a3c127da29f88bc5ec3729313",
".git/objects/e0/bbb25e26eff0acf10f80d83e0ee991d85d510e": "a5cb7163763b975354cc8f1c70a84e67",
".git/objects/e4/7d3a1e8c3d5c08af27f592b4964fcb08d10a11": "e5195ea987c6618bbafada282a29b79f",
".git/objects/e4/e7e900b1815ce1620251ce2b7d0d8ec82adb69": "274ee6ea6f1577112b23108847a31e56",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/3bcd31a564b26c31956213527d807885fe68ad": "aa2a5098af9b52654607d0a2325a647d",
".git/objects/ea/9740789b7aa376a51bb0829dedf5517da041a7": "6cee75320fc4d0f535b5967b01c6f367",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f2/9437d4447ad1ca8e964feff12a8b51cdb0dab1": "822a8fd717d9077ff86c4c2c5af770d0",
".git/objects/ff/42e74eae75def17526fbf1213c5f2d40e28eaa": "a2914f7edb8d8c13e4d7e9895436b6d1",
".git/ORIG_HEAD": "ca2d7883b35391b659b9d2acabf1cc6c",
".git/refs/heads/master": "8cb4f2a1d46753f108675c3284a6fe40",
".git/refs/remotes/origin/master": "591c80595ba1537971cdd15e5b440086",
"assets/AssetManifest.json": "d866541db73779e049e4ff328a3f4f68",
"assets/assets/images.png": "48e8995966bf5788bfa689f8059ada14",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "8e44f5a7fa5c005b486500f07f711dbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "860577a949c806b029b315d4ba9f3a03",
"/": "860577a949c806b029b315d4ba9f3a03",
"main.dart.js": "ca5583c17902f85529869c4afd677360",
"manifest.json": "a4eeda315a54b635f72df9321450960d",
"version.json": "0d08b4858f78f62d003b791b805c6284"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
