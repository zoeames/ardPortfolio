'use strict';

var gulp   		= require('gulp');
var config 		= require('../config');
var refresh 	= require('gulp-livereload');
var lrserver 	= require('tiny-lr')();

gulp.task('copyIndex', function() {

  gulp.src(config.sourceDir + 'index.html')
  	  .pipe(gulp.dest(config.buildDir))
  	  .pipe(refresh(lrserver));

});