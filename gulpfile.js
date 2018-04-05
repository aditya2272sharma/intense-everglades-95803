'use strict';

const gulp = require('gulp');
const watch = require('gulp-watch');
const argv = require('yargs').argv;
const $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*'],
  replaceStrings: /\bgulp[\-.]/,
  lazy: false,
  camelize: true
});

const options = {
  dev: {
    styles: '/views/styles/**/*.less',
    scripts: '/views/scripts/**/*.js',
  },
  dist: {
    styles: '/public/stylesheets/',
    scripts: '/public/scripts/'
  }
};

const LOCAL = 'local';
const environment = 



gulp.task('copy:js', function(){
  return gulp.src([
    options.dev.scripts
  ])

  // Timestamp for static files
  .pipe($.replace('@@timestamp', Date.now()))

  // Copy to destination directory
  .pipe(gulp.dest(options.dist.scripts));
});



gulp.task('less', function(){
  return gulp.src(options.dev.styles)

  // sourcemaps initialization
  .pipe($.if(environment === LOCAL, $.sourcemaps.init({ loadMaps: true })))

  .pipe($.less({ paths: options.dev.styles }))

  // Copy to destination directory
  .pipe(gulp.dest(options.dist.styles))
});



gulp.task('watch', function(){
  gulp.watch(options.dev.scripts, ['copy:js']);
  gulp.watch(options.dev.styles, ['less']);
});
