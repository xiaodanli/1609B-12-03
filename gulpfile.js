var gulp = require('gulp');

var browserSync = require('browser-sync'); //起服务

var sass = require('gulp-sass');

var minCss = require('gulp-clean-css');

var concat = require('gulp-concat');

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

gulp.task('devScss',function(){
    return gulp.src('./src/scss/*.scss')
    .pipe(sass())
    .pipe(concat('all.css'))
    .pipe(minCss())
    .pipe(gulp.dest('./src/css'))
})

