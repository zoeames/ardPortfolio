'use strict';

var scriptSource = './src/js/**/*.js';

module.exports = {

  'serverport': 8888,

  'scripts': {
    'src': scriptSource,
    'dest': './dist/js/'
  },

  'images': {
    'src': './src/images/**/*.{jpeg,jpg,png,svg}',
    'dest': './dist/images/'
  },

  'styles': {
    'src': './src/styles/**/*.scss',
    'dest': './dist/css/'
  },

  'sourceDir': './src/',

  'buildDir': './dist/'
};