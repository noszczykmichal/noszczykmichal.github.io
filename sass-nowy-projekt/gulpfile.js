let gulp = require('gulp');
let sass = require('gulp-sass');
let browserSync = require('browser-sync').create(); // 1 step npm install browser-sync --save-dev

gulp.task('test', function () {
  console.log('test');
});

// funkcja 2 steps
gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})
gulp.task('sass', function () {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    // 3 steps
    .pipe(browserSync.reload({
      stream: true
    }));
});


gulp.task('watch', function () {
  gulp.watch('app/scss/**/*.scss', gulp.series('sass'));
});
// 4 steps
gulp.task('default', gulp.parallel('sass', 'browserSync'));