const cleanCSS = require('gulp-clean-css'),
    console = require('better-console'),
    gulp = require('gulp'),
    less = require('gulp-less'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    sourceMaps = require('gulp-sourcemaps');

gulp.task('default', ['build']);

gulp.task('build', ['less', 'watch'], function() {
  console.info('Build successful!');
});

gulp.task('watch', function() {
  gulp.watch(['src/less/*.less', 'src/less/**/*.less'], ['less']);
});

gulp.task('less', function() {
  return gulp.src('src/less/styles.less')
      .pipe(plumber())
      .pipe(sourceMaps.init())
      .pipe(less())
      .pipe(gulp.dest('dist/css'))
      .pipe(cleanCSS({
        compatibility: 'ie8'
      }))
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(gulp.dest('dist/css'))
      .pipe(sourceMaps.write('maps'))
      .on('finish', function() {
        console.info('Styles compiled!');
      });
});
