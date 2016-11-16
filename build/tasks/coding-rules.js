/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var gulp = require('gulp');
var tslint = require('gulp-tslint');
var format = require('gulp-clang-format');
var clangFormat = require('clang-format');

gulp.task('tslint', function(){
	return gulp.src(['src/**/*.ts', '!src/clarity/angular1/**/*.ts'])
		.pipe(tslint({
			configuration: 'build/tslint.json'
		}))
		.pipe(tslint.report('verbose'));
});

gulp.task('tslint:watch', function(){
	return gulp.src(['src/**/*.ts', '!src/clarity/angular1/**/*.ts'])
		.pipe(tslint({
			configuration: 'build/tslint.json'
		}))
		.pipe(tslint.report('verbose', {
			emitError: false
		}));
});

/**
 Warns if the typescript formatting is valid or not
 */
gulp.task('check-format', function() {
	return gulp.src('src/**/*.ts')
		.pipe(format.checkFormat('file', clangFormat));
});

/**
 Formats the typescript file according to the .clang-format file
 */
gulp.task('format', function() {
	return gulp.src('src/**/*.ts')
		.pipe(format.format('file', clangFormat))
		.pipe(gulp.dest('formatted'));
});