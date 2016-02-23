'use strict';
var gulp       = require('gulp');
var lrserver   = require('tiny-lr')();
var express    = require('express');
var livereload = require('connect-livereload');
var gutil      = require('gulp-util');
var config     = require('../config');  

//We only configure the server here and start it only when running the watch task
var server = express();
//Add livereload middleware before static-middleware
server.use(livereload({
  port: config.livereloadport
}));
server.use(express.static('./dist'));

gulp.task('server', function() {
  //Set up your static fileserver, which serves files in the build dir
  server.listen(config.serverport);

  //Set up your livereload server
  lrserver.listen(config.livereloadport);
  gutil.log("Your site is serving on port: "+ config.serverport);
});
