const gulp = require('gulp'),
  sass = require('gulp-sass'),
  connect = require('gulp-connect'),
  concat = require('gulp-concat'),
  cleanCSS = require('gulp-clean-css'),
  autoprefixer = require('gulp-autoprefixer'),
  babel = require('gulp-babel');

function scss() {
  return gulp.src('./src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/temp/css'))
};

function css() {
  return gulp.src('./src/temp/css/*.css')
    .pipe(concat('style.css'))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./public/styles'))
    .pipe(connect.reload());
};

function html() {
  return gulp.src([
    './*.html',
    './src/html/**/*.html'
  ])
    .pipe(connect.reload());
};

function js() {
  return gulp.src([
    './src/**/*.js'
  ])
    .pipe(concat('scripts.js'))
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(gulp.dest('./public/js'))
    .pipe(connect.reload());
};

function connection() {
  connect.server({
    port: 8080,
    livereload: true
  });
};

function watch() {
  gulp.watch(['./src/temp/css/*.css'], css);
  gulp.watch(['./src/scss/*.scss'], scss);
  gulp.watch(['./**/*.html'], html);
  gulp.watch(['./src/js/*.js'], js);
  connection();
};


gulp.task('default',
  gulp.series(scss, css, html, js, connection)
);
gulp.task('watch', watch);