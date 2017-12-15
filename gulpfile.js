const gulp = require('gulp')
  sass = require('gulp-sass')
  concat = require('gul-concat');

gulp.task('hey', function() {
  console.log('hey');
});

gulp.task('sass', function() {
  return gulp.src('scss/*.scss')
    .pipe(concat())
    // .pipe(sass())
    .pipe(gulp.dest(''))
});

gulp.task('watch', function() {
  gulp.watch('*.scss', ['sass']);
})