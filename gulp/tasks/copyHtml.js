'use strict';

var gulp   = require('gulp');
var config = require('../config');

gulp.task('copyHtml', function() {

  gulp.src(config.html.src).pipe(gulp.dest(config.html.dest));

});