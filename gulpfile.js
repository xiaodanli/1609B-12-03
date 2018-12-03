var gulp = require('gulp');

var browserSync = require('browser-sync'); //起服务

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

