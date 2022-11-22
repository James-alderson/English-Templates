const LAZY_IMAGES = document.querySelectorAll('img[data-src]')
const OPTIONS = {
  threshold: 0,
  rootMargin: '0px 0px 100px 0px',
}
const IMG_OBSERVER = new IntersectionObserver(image_observer, OPTIONS)

function image_observer(entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return

    let lazyImage = entry.target
    lazyImage.src = lazyImage.dataset.src

    observer.unobserve(lazyImage)
  })
}

LAZY_IMAGES.forEach((lazyImage) => IMG_OBSERVER.observe(lazyImage))
