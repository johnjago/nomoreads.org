const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify');

function html() {
  return gulp.src('*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
}

function css() {
  return gulp.src('css/*.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('dist/css/'));
}

function js() {
  return gulp.src('js/*.js')
    .pipe(minify({
        ext: {
            min:'.js'
        },
        noSource: true,
        ignoreFiles: ['.min.js']
    }))
    .pipe(gulp.dest('dist/js'));
}

function fonts() {
  return gulp.src('fonts/*')
    .pipe(gulp.dest('dist/fonts/'));
}

function img() {
  return gulp.src('img/**/*')
    .pipe(gulp.dest('dist/img/'));
}

const build = gulp.parallel(html, css, js, fonts, img);
gulp.task('default', build);
