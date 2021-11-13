'use strict'
var gulp = require('gulp')
var sass = require('gulp-sass')(require('sass'))

var sassPaths = [
  'bower_components/normalize.scss/sass',
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
]

function buildStyles () {
  return gulp.src('scss/app.scss')
    .pipe(sass(
      {
        includePaths: sassPaths,
        outputStyle: 'compressed' // if css compressed **file size**
      }).on('error', sass.logError))
    .pipe(gulp.dest('css'))
};

exports.default = buildStyles
