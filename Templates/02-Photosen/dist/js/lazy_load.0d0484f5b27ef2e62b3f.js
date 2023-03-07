/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!*****************************!*\
  !*** ./src/js/lazy-load.js ***!
  \*****************************/
var LAZY_IMAGES = document.querySelectorAll('img[data-src]');
var OPTIONS = {
  threshold: 0,
  rootMargin: '0px 0px 100px 0px'
};
var IMG_OBSERVER = new IntersectionObserver(image_observer, OPTIONS);
function image_observer(entries, observer) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) return;
    var lazyImage = entry.target;
    lazyImage.src = lazyImage.dataset.src;
    observer.unobserve(lazyImage);
  });
}
LAZY_IMAGES.forEach(function (lazyImage) {
  return IMG_OBSERVER.observe(lazyImage);
});
/******/ })()
;
//# sourceMappingURL=lazy_load.0d0484f5b27ef2e62b3f.js.map