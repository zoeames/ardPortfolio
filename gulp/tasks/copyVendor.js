'use strict';

var gulp   = require('gulp');
var config = require('../config');

gulp.task('copyVendor', function() {
	 var bower = {
        "bootstrap": "bootstrap/dist/**/*.{js,map,css,ttf,svg,woff,eot}",
        "jquery": "jquery/jquery*.{js,map}"
    }

    for (var destinationDir in bower) {
        gulp.src(config.npmDir + bower[destinationDir])
          .pipe(gulp.dest(paths.lib + destinationDir));
    }

  gulp.src(config.vendor.src).pipe(gulp.dest(config.vendor.dist));

});