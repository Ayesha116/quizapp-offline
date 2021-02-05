const cacheNames = 'quiz app with pwa'
const filestocache = [
    "index.html",
    'https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple',

]
// const self = this
self.addEventListener('activate' , ()=>{
    console.log('service worker activate')
})

self.addEventListener('install' , (e) =>{
    e.waitUntil(
        caches.open(cacheNames).then(()=>{
            return caches.addAll(filestocache)
        })
    )
})

self.addEventListener('fetch' , (e)=>{
    e.respondWith(
        caches.match(e.request).then((response)=>{
            return response || fetch(e.request)

        })
    )
})