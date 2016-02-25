'use strict';

var gulp 		= require('gulp');
var cssnano 	= require('gulp-cssnano');
var rename 		= require("gulp-rename");
var sass 		= require('gulp-sass');
var config 		= require('../config');
var refresh 	= require('gulp-livereload');
var lrserver 	= require('tiny-lr')();

gulp.task('styles', function() {
	return gulp.src(config.styles.src)
		       .pipe(sass())
		       .pipe(gulp.dest(config.styles.dest))
		       .pipe(cssnano())
		       .pipe(rename({
		      	   suffix: '.min'
		   	   }))
		       .pipe(gulp.dest(config.styles.dest))
		       .pipe(refresh(lrserver));
});