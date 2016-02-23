'use strict';
var gulp = require('gulp'),
  //refresh = require('gulp-livereload'),
  lrserver = require('tiny-lr')(),
  express = require('express'),
  livereload = require('connect-livereload'),
  livereloadport = 35729,
  serverport = 5000;

//We only configure the server here and start it only when running the watch task
var server = express();
//Add livereload middleware before static-middleware
server.use(livereload({
  port: livereloadport
}));
server.use(express.static('./dist'));

gulp.task('server', function() {
  //Set up your static fileserver, which serves files in the build dir
  server.listen(serverport);

  //Set up your livereload server
  lrserver.listen(livereloadport);
});
