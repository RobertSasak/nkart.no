'use strict';

var config = require('../config');
var browserSync = require('browser-sync');
var gulp = require('gulp');

gulp.task('browserSync', function () {

	browserSync({
		server: './build',
		port: config.browserport,
		ui: {
			port: config.uiport
		},
	});

});