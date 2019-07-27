const gulp = require("gulp");
const { series } = require("gulp");
const sass = require("gulp-sass");
const pug = require("gulp-pug");
const babel = require("gulp-babel");
const webpack = require("webpack-stream");
const browserSync = require("browser-sync").create();

// compile sass
function style() {
  return gulp
    .src("./src/pages/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./dist"))
    .pipe(browserSync.stream());
}
// compile pug
function buildHTML() {
  return gulp
    .src("./src/pages/**/*.pug")
    .pipe(pug())
    .pipe(gulp.dest("./dist"))
    .pipe(browserSync.stream());
}
// compile JS
function compileJS() {
  return gulp
    .src("./src/pages/**/*.js")
    .pipe(webpack(require("./webpack.config.js")))
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.stream());
}
// watch for changes
function watch() {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });
  gulp.watch("./src/**/*.scss", style);
  gulp.watch("./src/**/*.pug", buildHTML).on("change", browserSync.reload);
  gulp.watch("./src/**/*.js", compileJS).on("change", browserSync.reload);
}

exports.style = style;
exports.buildHTML = buildHTML;
exports.compileJS = compileJS;
exports.watch = watch;
exports.buildFiles = series(style, compileJS, buildHTML);
