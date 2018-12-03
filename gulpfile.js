var gulp = require('gulp');

var browserSync = require('browser-sync'); //起服务

var sass = require('gulp-sass');

var minCss = require('gulp-clean-css');

var concat = require('gulp-concat');

var uglify = require('gulp-uglify');

gulp.task('server',function(){
    browserSync({
        server:{
            baseDir:'src',
            // middleware:function(req,res,next){

            // }
        },
        port:9090,
        files:['src']
    })
})

//css
gulp.task('devScss',function(){
    return gulp.src('./src/scss/*.scss')
    .pipe(sass())
    .pipe(concat('all.css'))
    .pipe(minCss())
    .pipe(gulp.dest('./src/css'))
})

//js
gulp.task('devJs',function(){
    return gulp.src('./src/js/*.js')
    .pipe(uglify())
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./src/js/minJs'))
})

