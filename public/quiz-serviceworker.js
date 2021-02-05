const cacheNames = 'quiz app with pwa'
const filestocache = [
    '/',
    // '/index.html'
    // 'https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple',


]
const self = this


// self.addEventListener('install' , function(event){
//     console.log('installing serviceworker ...')
//     event.waitUntil(
//         caches.open(cacheNames).then(()=>{
//             caches.addAll(filestocache)
//             console.log('cache add success')
//         }).catch((err)=>{console.log('err' , err)})
//     )

// })

self.addEventListener('install', event => {
    console.log("[sw.js] Install event.");
    event.waitUntil(
        caches.open(cacheNames)
            .then(cache =>{
                console.log('no error')
                return cache.addAll(filestocache)})
            .then(self.skipWaiting())
            .catch(err => console.error("[sw.js] Error trying to pre-fetch cache files:", err))
    );
});

self.addEventListener('fetch' , (e)=>{
    e.respondWith(
        caches.match(e.request).then((response)=>{
            return response || fetch(e.request)

        })
    )
})

self.addEventListener('activate' , ()=>{
    console.log('service worker activate')
})