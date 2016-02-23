'use strict';

var gulp   = require('gulp');
var config = require('../config');
var refresh = require('gulp-livereload');
var lrserver = require('tiny-lr')();

gulp.task('copyHtml', function() {

  gulp.src(config.html.src)
  	  .pipe(gulp.dest(config.html.dest))
      .pipe(refresh(lrserver));

});