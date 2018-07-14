var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');
var minify = require('gulp-minify');

gulp.task('html', function() {
  return gulp.src('*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('public'));
});

gulp.task('css', function() {
  return gulp.src('css/*.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('public/css/'));
});

gulp.task('js', function() {
  return gulp.src('js/*.js')
    .pipe(minify({
        ext: {
            min:'.js'
        },
        noSource: true,
        ignoreFiles: ['.min.js']
    }))
    .pipe(gulp.dest('public/js'));
});

gulp.task('fonts', function() {
  return gulp.src('fonts/*')
    .pipe(gulp.dest('public/fonts/'));
});

gulp.task('img', function() {
  return gulp.src('img/**/*')
    .pipe(gulp.dest('public/img/'));
});

gulp.task('default', ['html', 'css', 'js', 'fonts', 'img']);
