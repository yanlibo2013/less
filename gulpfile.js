var gulp = require('gulp');
var watchLess = require('gulp-watch-less');
var less = require('gulp-less');

gulp.task('default', function () {
    return gulp.src('less/mooc3.1.2/index.less')
       /* .pipe(watchLess('less/!**!/!*.less'))*/
        .pipe(less())
        .pipe(gulp.dest('dist'));
});