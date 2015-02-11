var gulp = require('gulp');
var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function () {
    gulp.src('sass/*.scss')
        .pipe(sass({errLogToConsole: true}))
        .pipe(gulp.dest('css/'))
        .pipe(autoprefixer('last 10 version'))
//        .pipe(minifycss())
        //.pipe(gulp.dest('./css'));
}); 

gulp.task('watch', function () {
   gulp.watch('sass/**/*.scss', ['sass']);
});

gulp.task('default', ['watch']); 