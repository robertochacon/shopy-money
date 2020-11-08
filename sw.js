// const local_url = [
//     '/2020/first_wpa/index.html',
//     '/2020/first_wpa/detail.html',
//     '/2020/first_wpa/css/style.css',
//     '/2020/first_wpa/css/animate.css',
//     '/2020/first_wpa/js/app.js',
//     '/2020/first_wpa/js/main.js',
//     '/2020/first_wpa/img/image.png',
//     '/2020/first_wpa/img/micky.png'
// ];

const web_url = [
    '/shopy-money/index.html',
    '/shopy-money/login.html',
    '/shopy-money/registro.html',
    '/shopy-money/css/style.css',
    '/shopy-money/css/animate.css',
    '/shopy-money/css/bootstrap.min.css',
    '/shopy-money/js/app.js',
    '/shopy-money/js/main.js',
    '/shopy-money/img/image.png',
    '/shopy-money/img/login.png',
    '/shopy-money/img/register.png',
];

//intall app
self.addEventListener('install', e => {
    const cachePromise = caches.open('first_wpa-rca')
        .then(cache => {

            //local
            // return cache.addAll(local_url);
            //deployment
            return cache.addAll(web_url);

        });
    e.waitUntil(cachePromise);
});

//request fetch
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(cacheReq => {
            return cacheReq || fetch(event.request)
        })
    )
})