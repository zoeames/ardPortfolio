'use strict';
var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');



gulp.task('scripts', function() {
  	return gulp.src(paths.scripts)
	    .pipe(concat('app.js'))
	    .pipe(gulp.dest('./dist/js/'))
	    .pipe(uglify())
	    .pipe(rename({
	      suffix: '.min'
	    }))
	    .pipe(gulp.dest('./dist/js/'));
});