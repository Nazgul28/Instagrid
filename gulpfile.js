

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var autoprefixer = require ('gulp-autoprefixer');


gulp.task('scss', function () {
  gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });



gulp.watch('./scss/**/*.scss', ['scss']);
gulp.watch(["index.html", "css/*.css", "js/*.js"]).on('change', browserSync.reload);

});






