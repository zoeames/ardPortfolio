'use strict';

var gulp   = require('gulp');
var config = require('../config');
var refresh = require('gulp-livereload');
var lrserver = require('tiny-lr')();


gulp.task('copyFonts', function() {

  return gulp.src([config.sourceDir + 'fonts/**/*'])
    .pipe(gulp.dest(config.buildDir + 'fonts/'))
    .pipe(refresh(lrserver));

});