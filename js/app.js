if ('serviceWorker' in navigator) {
    //local
    navigator.serviceWorker.register('/shopy-money/sw.js');
    //deployment
    // navigator.serviceWorker.register('sw.js');
}