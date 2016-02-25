'use strict';

var gulp   		= require('gulp');
var config 		= require('../config');
var refresh 	= require('gulp-livereload');
var lrserver  	= require('tiny-lr')();

gulp.task('copyIcons', function() {

  // Copy icons from root directory to build/
  return gulp.src(['./*.png', './favicon.ico'])
    		 .pipe(gulp.dest(config.buildDir))
    		 .pipe(refresh(lrserver));

});