var gulp = require('gulp'), imagemin = require('gulp-imagemin'),
cssmin = require('gulp-cssmin'), rename = require('gulp-rename'),concat = require('gulp-concat');
 

gulp.task('images', () =>
    gulp.src('./images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);

 
gulp.task('concat', function() {
  return gulp.src(['./css/**/*.css')
    .pipe(concat('all.css'))
    .pipe(gulp.dest('./css/all/'));
});
 
gulp.task('cssmin', function () {
    gulp.src('css/all/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/css'));
});




gulp.task('default', ['images','cssmin','concat']);