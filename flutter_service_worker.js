'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "2e072309f8a2ca60c315c5ebf8554b6d",
"index.html": "4c2828df41ea69a86af659399ef417c9",
"/": "4c2828df41ea69a86af659399ef417c9",
"main.dart.js": "d9b154fa8b6259aa9581156bde19f344",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon1.png": "5dcef449791fa27946b3d35ad8803796",
"favicon.png": "19d2dc7752c8a8c1275f8e86d672bfc8",
"icons/Icon-192-1.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-192.png": "ac0f2b3464cf788ff1e1ae8e0c3fa613",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512-1.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "8d6add522eb0b7246207026935d7949e",
"manifest.json": "23144854d044511386df70c4061edfc5",
".git/config": "3b1607c81bee004d385941f0f2920cc6",
".git/objects/9b/b84fcb74b0e577052bb85906649e1b4e346b0b": "def1ade8ef5436c7c59b62a156deb4c9",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/58/526ae8420e5540a31fe2fa6a5244958db145e7": "ffdaf8d12101ba9306fd5d098affbc3b",
".git/objects/67/65e0bbd41a479703b20d69d58864a87126647c": "21ae14dc2e8edc6ca6e62e9ddcf30165",
".git/objects/93/aa6ce368c884af50da3cefd419b5fda08813f2": "be0e7aae6f1844e4bddf12924f9e576f",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/34/c5d6f5667a6986df29d64dc498c38e9492885c": "315321aec00a74d1780b5953c432ef01",
".git/objects/b5/2059d1f33d35852538b4562c23935830568c96": "e307aa00baca54c83887bebcdb623c93",
".git/objects/b2/68110227d9eab8c29eb0a09df4ac44d0a067b9": "755e1ed871fd823651a39d0e3f55b2e4",
".git/objects/bb/298a37e43c61675ffcd486be962e7eb3a8397c": "3963d6cac263ed0f6b7a4f1d7ce6d968",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/be/9f1456dc6a68b9290a2a8e326d96e8066f945a": "71011181d88cbb2ae5b84122c115c7d6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/69b3fcbf92bce7851aba79fe9f40469349f2e2": "d88bc58e454eb584fc809884fb3242c8",
".git/objects/e2/135a57d5b7149f9efdf20b31fe4823ff55b906": "c59318b8dd616b5b9c6da982daef15f4",
".git/objects/f4/eb58b7a4bd4dc7036420ff1347e5008b50fccc": "eccf4112339e95c8b114df784245caae",
".git/objects/f3/da98dbcc468714f2bb57f1029f381c58dc0379": "867077bb95b6fc6f6c7aa8c382bbe794",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/80bca8f14c718d5704880b803730ac4eb26050": "82a6cd117000e2ea1f69295b4cf4fcbe",
".git/objects/ee/7f3e85880ce8ebd3fd301796d34f2166eaaf79": "111b943c4bddb14019ad2786cc782d32",
".git/objects/fc/31d7ec528f359577ac2cb408a699a302772179": "d5e891c323f1b57b454a25ef81c48449",
".git/objects/ca/9bf1b62aec0c8a258e37b12f754b7843e523da": "1934a24bb8853737cc56608b8b4de47d",
".git/objects/ca/20589bddd3dd03663555c17baae59f67934d7b": "7b1a543e3ab9283cff967aa0049a0fd7",
".git/objects/c6/108230076da726e9a264611a04127f50162449": "a2538b41a24449d481cb7061b9aafcba",
".git/objects/c6/18fef96b47607f589fae9d30670d8d57e3dc8b": "cab5b540620cd3a1f476fa25bd0a4217",
".git/objects/4e/a46abf8a1a13c463a9c7e3da7e7cc8539d99f4": "c3beb1898faf76b89130a6a95225ed28",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/4b/08c92a6448f807045994c6de22d8ee9093aaab": "73d0aae290bed3c22142aa1a7a3ba56f",
".git/objects/7c/cb8c4ec9c768e4d32694487afd5df86f8f4700": "3f3dcf4c11edb0ba3d071f35d5573a38",
".git/objects/45/d16d80a1a1dad93f08f75b2b52b26114a66137": "f325ebb836dfe3f9b59a912ec8c98072",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/3e0709ac133bbb97dcbc06b4e09b2479f1ede1": "055f88ef8509cfb5307d6abd4ebe3ad2",
".git/objects/19/8f292b3fd7b90d751e2bae96165a0f19dd0f8f": "91f1e9258666687955c34bc7dcc881cb",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/08d69010de603fb54ccca341e67849c4a4d0c6": "11860a77c370873a78d00606d3397064",
".git/objects/00/7ba443e31969ed93f8e08bc7021ed5647dfce4": "35dcabb7e75185ba2abb317ca1dacd98",
".git/objects/6e/2b675c46d670cf417aa3ec2eb0d5dff172d280": "b7bc737e37cfbf7da7fdfb6756ab9786",
".git/objects/5c/c6b490a6d2abcb3104cd22d8091b93110b3719": "d4c8ffaa5603b7e1787b74cceb0cd761",
".git/objects/31/4bee0fd9326f5544b533e8d58b200bfe80827a": "fa7340a315bb335a4416622415e671b7",
".git/objects/3a/7f44f70b662c3a96faf9c02199a60a7159067f": "e87d1eca83ca4a2da64f62d38c32dcc6",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/52/8bc26f40ca8c640a30bcd780e7ac57b7b90fff": "9199b39d5976c93801774cba72d02849",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/b8/6c7a028bca9f4ccf1a852b2020f08f114da088": "3862b3f8258963c28ed81b85cad28125",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b0/1a02685918d449af7b34895f9a4ad96ee5d7a5": "7e62a9a2a2a9db7290eb0ab8f6a504ca",
".git/objects/c3/417463d3521b33ddcfbce17d6ad789254d9c5e": "2089157a3d3a70cae179f8d0208558b1",
".git/objects/cd/647477cf646b156fa78edbf40ab3b78a8f99c5": "7a4085a53fff01e1cbc4b473fcc5e845",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f9/7d9d090c846d257d6f47099e800c3eeeefec09": "1d3228c0790fbe1e7b9ea09f6f59208c",
".git/objects/ff/6dffb0371c55fdd5e1d2033e70081016eae493": "71f831dee38e58c5cdda4f52715ca989",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/8c/47efbdee94ffc289ea0c4540e55d65d95be9f1": "dc006d17216f0d9f384c593ff9888a87",
".git/objects/8c/b0ea63fbf418016676c1aaee60c3845f50bd66": "7be5aa573d83ca58c83c34557f469ce5",
".git/objects/85/23cc7d4381e80259c1a849947ce84af6e9da70": "a2151c872da2bac5e911e4871f3893ad",
".git/objects/76/a13c000e19afc1c77cb2b72bae1484f6d46e79": "f98a9b2f26c2ed5c1696caf2ed0a6fba",
".git/objects/2e/f92f0808e74e685d9087763ec528a52329c19b": "9c195e2e17de807c06737d1c4d6d3781",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8815e7ce7676011a62a3d0124716e7fa",
".git/logs/refs/heads/main": "8815e7ce7676011a62a3d0124716e7fa",
".git/logs/refs/remotes/origin/main": "fdad16e7b4f9e68fc41d2a3f96d616f7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "ff6b12ba843d6d1a8aaacf2c8d6f8c0a",
".git/refs/remotes/origin/main": "ff6b12ba843d6d1a8aaacf2c8d6f8c0a",
".git/index": "f016c589b645d8b7706574ee92d4b0b6",
".git/COMMIT_EDITMSG": "63a4c702cf2b7fdc24212afeb4c90379",
".git/FETCH_HEAD": "2cf33e0dff90603e7af03e995186c477",
"assets/AssetManifest.json": "e4b7d945f8d183cab2fdcd17fe7758de",
"assets/NOTICES": "9f929d9811e6d4c2a19f3f882c162eba",
"assets/image/logo/logo.png": "bcc7dd82c7ecfb5ae6bd522f159bb2f9",
"assets/image/vector/loading.json": "a4ea6cf01df23d22140c0b4b17e03f72",
"assets/image/vector/light_theme.json": "65eb7d7e5299f1f6e515fa64ae8f338c",
"assets/image/vector/todo_home.png": "7fd40983eb62a6dac14c20244fbbaea5",
"assets/FontManifest.json": "6410a9cee6e4224422b5b5b0ada200f5",
"assets/AssetManifest.bin.json": "c09b9c7d9949c9e01f6758c6cb5f0a0e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/nb_utils/fonts/LineAwesome.ttf": "4fe1928e582fd2e3316275954fc92e86",
"assets/packages/nb_utils/assets/icons/ic_beautify.png": "a680304f89d7cf2de6ebaabcb05e6947",
"assets/packages/nb_utils/assets/lottie/typing.json": "e5cad2457b51962714dfde13e0931a9d",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "8f1261a2e17eb12d02c732db3177075b",
"assets/fonts/MaterialIcons-Regular.otf": "62992a21a980e36365c7bd4526059f1a",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
