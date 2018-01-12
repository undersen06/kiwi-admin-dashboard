var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('connect', function(){
  connect.server({
    root: 'app',
    livereload: true
  });
});

var paths = {
  sass: ['./app/js/views/**/*.scss']
};

// keeps gulp from crashing for scss errors
gulp.task('sass', function(done) {
    console.log("Sass compilation");
    gulp.src(paths.sass)
        // .pipe(changed(_baseDest)) TODO fix
        .pipe(sourcemaps.init())
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest(_baseDest))
        .on('end', done);

    function _baseDest(file) {
        return file.base;
    }
});

gulp.task('livereload', function (){
  gulp.src('./app/**/**/**/*')
  .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch('./app/**/**/**/*', ['livereload']);
});

gulp.task('default', ['connect', 'watch', 'sass']);
