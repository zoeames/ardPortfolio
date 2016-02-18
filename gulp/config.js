'use strict';

var scriptSource = './src/js/**/*.js';

module.exports = {

    'serverport': 8888,

    'scripts': {
        'src': scriptSource,
        'dest': './dist/js/'
    },

    'html': {
        'src': './src/views/**/*.html',
        'dest': './dist/views/'
    },

    'images': {
        'src': './src/images/**/*.{jpeg,jpg,png,svg}',
        'dest': './dist/images/'
    },

    'styles': {
        'src': './src/styles/**/*.scss',
        'dest': './dist/css/'
    },
    'vendor': {
        'src': './src/node_modules/**/*.{*}',
        'dist': './dist/vendor/'
    },

    'sourceDir': './src/',

    'buildDir': './dist/',

    'npmDir': "./node_modules/"
};