'use strict';

var gulp   		= require('gulp');
var config 		= require('../config');
var refresh 	= require('gulp-livereload');
var lrserver  	= require('tiny-lr')();

gulp.task('copyImages', function() {

  gulp.src(config.images.src)
  	  .pipe(gulp.dest(config.images.dest))
      .pipe(refresh(lrserver));

});