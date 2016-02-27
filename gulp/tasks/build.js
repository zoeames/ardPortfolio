'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function(callback) {

  callback = callback || function() {};

  // Run all tasks once
  return runSequence(['clean', 'scripts', 'styles', 'copyIndex', 'copyHtml', 'copyFonts', 'copyIcons', 'copyVendor'], callback);

});