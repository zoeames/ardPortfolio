'use strict';

var gulp   = require('gulp');
var config = require('../config');

gulp.task('copyVendor', function() {
	 var bower = {
        "bootstrap" : "bootstrap/dist/**/*.{js,css,woff,eot}",
        "jquery" : "jquery/dist/jquery*.js",
        "angular" : "angular/angular*.js"
    }

    for (var destinationDir in bower) {
        gulp.src('./node_modules/' + bower[destinationDir])
          .pipe(gulp.dest(config.vendor.dist+destinationDir));
    }
});