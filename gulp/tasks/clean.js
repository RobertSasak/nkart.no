'use strict';

var gulp = require('gulp');

gulp.task('clean', function (cb) {

	var del = require('del');

	del('./build', cb);

});