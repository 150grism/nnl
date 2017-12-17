const gulp = require('gulp')
  sass = require('gulp-sass')
  concat = require('gulp-concat')
  browserSync = require('browser-sync').create()
  sourcemaps = require('gulp-sourcemaps');
  

gulp.task('hey', ['sass'], function() {
  console.log('hey');
});

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
})

gulp.task('sass', function() {
  return gulp.src('./scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(concat('bundle.scss', {newLine: '\r\r'}))
    .pipe(sass())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
});

gulp.task('watch', ['browser-sync'], function() {
  gulp.watch('scss/*.scss', ['sass']);
  gulp.watch('*.html').on('change', browserSync.reload);
})