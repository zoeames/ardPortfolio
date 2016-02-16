'use strict';
var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var config = require('../config');



gulp.task('scripts', function() {
  	return gulp.src(config.scripts.src)
	    .pipe(concat('app.js'))
	    .pipe(gulp.dest(config.scripts.dest))
	    .pipe(uglify())
	    .pipe(rename({
	      suffix: '.min'
	    }))
	    .pipe(gulp.dest(config.scripts.dest));
});