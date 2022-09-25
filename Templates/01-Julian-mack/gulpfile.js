// Initialize modules
const { src, dest, watch, series, parallel } = require("gulp")

// Import packages
const postcss = require("gulp-postcss")
const autoprefixer = require("autoprefixer")
const cssnano = require("cssnano")
const concat = require("gulp-concat")
const terser = require("gulp-terser")
const replace = require("gulp-replace")
const ttf2woff = require("gulp-ttf2woff")
const imagemin = require("gulp-imagemin")
const browser_sync = require("browser-sync").create()

// Files path
const files = {
  htmlPath: "./**/*.html",
  cssPath: "src/css/*.css",
  jsPath: "src/js/**/*.js",
  fontPath: "src/fonts/**/*.ttf",
  imagePath: "src/images/main/*",
}

/* Css task
    1. Add vendor prefixes
    2. Minify css
============ */
function css_task() {
  return src(files.cssPath)
    .pipe(postcss([autoprefixer("last 4 versions"), cssnano()]))
    .pipe(dest("dist/css"))
}

/* Js task
    1. Unify files
    2. Minify js
========== */
function js_task() {
  return src(files.jsPath)
    .pipe(concat("script.js"))
    .pipe(terser())
    .pipe(dest("dist/js"))
}

// Cachebust task
function cachebust_task() {
  let dateString = new Date().getTime()

  return src([files.htmlPath])
    .pipe(replace(/cb=\d+/g, "cb=" + dateString))
    .pipe(dest("."))
}

// CopyCss task
function copyCss_task() {
  return src("src/css/vendors/**/*")
    .pipe(dest("dist/css/vendors"))
}

// CopyImage task
function copyImage_task() {
  return src([
    "src/images/LQIP/*",
    "src/images/favicon/*",
    "src/images/svg/**/*"], { "base": "./src/images" })
    .pipe(dest("dist/images"))
}

/* Font task
    1. Convert ttf format to woff
============ */
function font_task() {
  return src(files.fontPath)
    .pipe(ttf2woff())
    .pipe(dest("dist/fonts"))
}

/* Image task
    1. Compressing images
============= */
function image_task() {
  return src(files.imagePath)
    .pipe(imagemin([
      imagemin.mozjpeg({ quality: 50, progressive: true })
    ]).on("error", error => console.log(error)))
    .pipe(dest("dist/images/main"))
}

// Initialize browserSync
function browserSync(callback) {
  browser_sync.init({
    server: {
      baseDir: "."
    },
    notify: {
      styles: {
        top: "auto",
        bottom: "0"
      }
    }
  })
  callback()
}

// Reload browserSync
function browserSyncReload(callback) {
  browser_sync.reload()
  callback()
}

// BrowserSync watch task
function browserSyncWatch() {
  watch([files.htmlPath], browserSyncReload)
  watch([files.cssPath, files.jsPath], series(parallel(css_task, js_task), cachebust_task))
}

// Gulp watch task
function watch_task() {
  watch([files.cssPath, files.jsPath], series(parallel(css_task, js_task), cachebust_task))
}

// Gulp default task
exports.default = series(parallel(css_task, js_task), cachebust_task, copyCss_task, copyImage_task, font_task, image_task, watch_task)

// Run browserSync
exports.bs = series(parallel(css_task, js_task), cachebust_task, copyCss_task, copyImage_task, font_task, image_task, browserSync, browserSyncWatch)
