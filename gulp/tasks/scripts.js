'use strict';
var gulp 		= require('gulp');
var concat 		= require('gulp-concat');
var rename 		= require("gulp-rename");
var uglify 		= require('gulp-uglify');
var config 		= require('../config');
var refresh 	= require('gulp-livereload');
var lrserver 	= require('tiny-lr')();

gulp.task('scripts', function() {
  	return gulp.src(config.scripts.src)
	    	   .pipe(gulp.dest(config.scripts.dest))
	    	   .pipe(refresh(lrserver));
});