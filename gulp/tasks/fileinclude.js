'use strict';

var gulp = require('gulp'),
	fileinclude = require('gulp-file-include'),
	rename = require('gulp-rename');

gulp.task('fileinclude', function () {
	return gulp.src('./app/*.tpl.html')
		.pipe(fileinclude())
		.pipe(rename({
			extname: ''
		}))
		.pipe(rename({
			extname: '.html'
		}))
		.pipe(gulp.dest('./build'));
});