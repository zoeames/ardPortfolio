'use strict';

var gulp   		= require('gulp');
var config 		= require('../config');
var refresh 	= require('gulp-livereload');
var lrserver 	= require('tiny-lr')();

gulp.task('copyVendor', function() {
	 var npm = {
        "bootstrap" : "bootstrap/dist/**/*.{js,css,woff,eot}",
        "jquery" : "jquery/dist/jquery*.js",
        "angular" : "angular/angular*.js",
        "angular-route":"angular-route/angular-route.js",
       "materialize":"materialize-css/dist/**/*" 
    }

    for (var destinationDir in npm) {
        gulp.src(config.npmDir + npm[destinationDir])
            .pipe(gulp.dest(config.vendor.dist+destinationDir))
            .pipe(refresh(lrserver));
    }
});