'use strict';

var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', function() {
  	gulp.watch(config.scripts.src, ['scripts']);
  	gulp.watch(config.styles.src, ['styles']);
  	 gulp.watch(config.sourceDir + 'index.html',   ['copyIndex']);
});
