var gulp = require('gulp'),
uglify = require('gulp-uglify'),
concat = require('gulp-concat'),
cleanCSS = require('gulp-clean-css'),
autoprefixer = require('gulp-autoprefixer'),
plumber = require('gulp-plumber'),
livereload = require('gulp-livereload'),
sourcemaps = require('gulp-sourcemaps');

var less = require('gulp-less'),
LessAutoprefix = require('less-plugin-autoprefix'),
lessAutoprefix = new LessAutoprefix({
    browsers: ['last 2 versions']
});

// FILE PATHS
var DIST_PATH = 'public/dist';
var LESS_PATH = 'public/assets/less/**/*.less';
// var CSS_PATH = 'public/assets/css/**/*.css';

// gulp.task('styles', function(){
//     console.log('styles task running');

//     return gulp.src(CSS_PATH)
//         .pipe(autoprefixer({
//             browsers: ['last 2 versions']
//         }))
//         .pipe(concat('styles.css'))
//         .pipe(cleanCSS())
//         .pipe(gulp.dest(DIST_PATH))
// });

// styles less
gulp.task('styles', function() {
    console.log('Starting styles task');

    return gulp.src('public/assets/less/styles.less')
        .pipe(plumber(function(err) {
            console.log('Styles Task Error');
            console.log(err);
            this.emit('end');
        }))
        .pipe(sourcemaps.init())
        .pipe(less({
            plugins: [lessAutoprefix]
        }))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(DIST_PATH))
        .pipe(livereload());
});

gulp.task('watch', function() {
    console.log('starting watch');
    require('./server.js');
    livereload.listen();
    gulp.watch(LESS_PATH, ['styles']);
});