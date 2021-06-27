'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "7f69617f4c17dae2a3a86091e704b2a0",
"index.html": "3360672a2e5abc3cd441398aecd944ab",
"/": "3360672a2e5abc3cd441398aecd944ab",
"main.dart.js": "a5626e05b49796485813c34a2204a8e8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9dad637b4a405e56f7ee70949bd91290",
".git/config": "89a41e39a5412d5e922b693d0a4458ef",
".git/objects/68/477481be533fe4ad029f1ef852916f491e9b82": "c95d48f0419d9abe277e7f43a6580090",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/60/7c0e25be530d9b36ac375bffa9fd7ddb1f87cb": "707e9905f45f51e2de50d297e473009d",
".git/objects/a4/4d8af2cc9c5900a115cf840b8c507243d917d5": "cc41a2b23ddea704b31832d07216a050",
".git/objects/a3/8b148665ff72169a7c4691a2481a6d8487a065": "dee73b1c1f31068ebcb4c9da1e97dfc1",
".git/objects/a2/5e049c98df5578b572c598a5e750ca99870cd3": "3182c29828aef889fd38bd610c413375",
".git/objects/d6/222b92a4b9feee98c57424132dd7ebb2130a58": "03c81a5a754577f6675a83782db468c1",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f2/9c7d43a2795238cd691d59469d4d767a26d910": "694c4547d94bc5e95f15d7aea36b0a8b",
".git/objects/f5/8debabed07230a50afa3f12dfb6b72460a0426": "4a78fb123e15869ab1fd1321c6797c1d",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/45/460423471208bf333c83249dce4d191d86b6ec": "a329096035ee36559114be0431a926c4",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4d/2d18166b169d34744cc1a2f014cc1b83cf4bd2": "f904acede821001a63eadfb45e95419a",
".git/objects/4d/ab85904e3d6ac62cae10a119c08b8580e94955": "68fd4c47a3caabfb37a227b894542b7f",
".git/objects/81/333dbad9683c2568e4ce9ee8ea3a5b044599c9": "879b8ebe64490b17d22892c2ca0845de",
".git/objects/72/f8226fe23fb7bdedcb7411bce0a84269cbde34": "38488ad508723de3dbb799743799b8aa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/cd2cde8a2a52a5fbf7615af32fa357046d6b50": "9c6650a434fd40837a5e5ec2bc06bc39",
".git/objects/3f/01d723cef3fc21686d237449f623a22252c9fa": "30af73bf6024ba950ffc6785093a88dd",
".git/objects/01/f1d8f53c546760610d0e3f11707175dcde78a5": "f9a771e6bbfb096c12b40cc3dcca950d",
".git/objects/0f/d9bab22d60336b8321a6153f643f5669343f27": "c6a42b84ce6c546d2961d0bb2f8966cc",
".git/objects/b6/a28389fc3ee5bf98e75a52072d218cf1476063": "f302c75a454a8fd247fcc769eda8426a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cc/f6a12a88020b1735e50f312c01091dc0ba5bd9": "7d8bafa2ee43e9d9d00330978d59cd56",
".git/objects/cb/c8a08df1edc5432a5ba9720a6e6f1e5db068c4": "a4dade90e85509e8e5d9b28f1ad4828d",
".git/objects/f8/0fc56f82fa0ef3d60bc32c6f47fe8817bd4756": "a42335d2fb10ac7f4cebea3a97542a2a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/75493f7648ada2e9850fd835f016df8df83e53": "7a7a03199b55ca2543b3e623ef6a6aa2",
".git/objects/1b/62ad1a5f0aacca8fa98334739607c5f66008d3": "72da854959682de3045a6f0065068720",
".git/objects/1e/7ef52545dd5d60a8c0e16dbb57abcdd96faac2": "56c78a26590db4fb7006e8d4a3a8a2ca",
".git/objects/84/b2e3097eb8a208f98ee9e85ed5fca0194d18d8": "e4456dbfe62cf7fc3826781eafb85bd7",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3b9181678e385cf36f667a7d61314165",
".git/logs/refs/heads/master": "3b9181678e385cf36f667a7d61314165",
".git/logs/refs/remotes/origin/master": "9a7a03217f1f6555c04ec60094fd80a7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "fae92bc202a1cf9efb6ba65949f82779",
".git/refs/remotes/origin/master": "fae92bc202a1cf9efb6ba65949f82779",
".git/index": "49f58a6c6215d59399f9072ea0a8c194",
".git/COMMIT_EDITMSG": "17b10cc633424f8429c06e270e7f256b",
"assets/AssetManifest.json": "1c3d94617b05ea9720e6763c456430d6",
"assets/NOTICES": "bb845f5ea22b5cd70f1aee7d6147ea72",
"assets/FontManifest.json": "fbd6b7a10e8772283bbb7465386c6c9b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/Trebuchet_MS.ttf": "c75c5a89e1cde8945350a42396f95689",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/ig_logo.jpg": "18670410c9f831f015222f27ffb1a224",
"assets/assets/splash_screen.json": "c26243cfda99d92ceb22cf7c07f589e0",
"assets/assets/NITW_LOGO_BLACK@2x.png": "2b3fff8577c7f98f01dc483af9080a99",
"assets/assets/C4II_@2x.png": "5860d2c6e0064c6ee85f74212e9076b4",
"assets/assets/NITW_LOGO_BLACK.png": "4a5b0d38c2d16ed52be881b3229cbd69",
"assets/assets/Ellipse_1.png": "097d4dc87fbb160162b95800893745b7",
"assets/assets/C4II_@2x@2x.png": "e8a66f6d2e713bff15c945ae63e8b2c5"
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
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
