'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('watch', ['browserSync'], function () {

	gulp.watch('app/**/*.tpl.html', ['fileinclude']).on('change', browserSync.reload);

});