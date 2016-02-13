'use strict';

var gulp = require('gulp');
var cssmin = require('gulp-minify-css');
var rename = require("gulp-rename");
var sass = require('gulp-sass');


gulp.task('styles', function() {
	return gulp.src(config.styles.src)
	    .pipe(sass())
	    .pipe(gulp.dest(config.styles.dest))
	    .pipe(cssmin())
	    .pipe(rename({
	      	suffix: '.min'
	   	}))
	    .pipe(gulp.dest(config.styles.dest));
});