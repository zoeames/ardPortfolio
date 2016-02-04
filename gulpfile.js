var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var cssmin = require('gulp-minify-css');
var rename = require("gulp-rename");
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');


var bases = {
 app: 'app/',
 src: 'src/',
 dist: 'dist/',
};


var paths = {
 scripts: ['./src/js/*.js'],
 libs: ['scripts/libs/jquery/dist/jquery.js', 'scripts/libs/underscore/underscore.js', 'scripts/backbone/backbone.js'],
 styles: ['./src/sass/*.scss'],
 html: ['./src/index.html', './src/html/*.html'],
 images: ['images/**/*.png'],
 extras: ['favicon.ico']
};

gulp.task('clean', function() {
 return gulp.src(bases.dist)
 .pipe(clean());
});


gulp.task('copy', function() {
 // Copy html
 gulp.src(paths.html, {cwd: bases.src})
 .pipe(gulp.dest(bases.dist));
});

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

gulp.task('styles', function() {
	return gulp.src(paths.styles)
	    .pipe(sass())
	    .pipe(gulp.dest('./dist/css/'))
	    .pipe(cssmin())
	    .pipe(rename({
	      	suffix: '.min'
	   	}))
	    .pipe(gulp.dest('./dist/css/'));
});

gulp.task('watch', function() {
  	gulp.watch('./src/js/*.js', ['scripts']);
  	gulp.watch('./src/sass/*.scss', ['styles']);
});



gulp.task('default', ['clean', 'copy', 'scripts', 'styles', 'watch']);
gulp.task('default', ['scripts', 'styles']);