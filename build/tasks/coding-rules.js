/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var gulp = require('gulp');
var tslint = require('gulp-tslint');
var format = require('gulp-clang-format');
var clangFormat = require('clang-format');

var iconsSources = [ 'src/clarity-icons/**/*.ts'];

gulp.task('tslint:icons', function(){
	return gulp.src(iconsSources)
		.pipe(tslint({
			configuration: 'build/tslint.json',
            formatter: 'verbose'
		}))
		.pipe(tslint.report());
});

gulp.task('tslint:icons:no-error', function(){
	return gulp.src(iconsSources)
		.pipe(tslint({
			configuration: 'build/tslint.json',
            formatter: 'verbose'
		}))
		.pipe(tslint.report({
			emitError: false
		}));
});

var claritySources = [
    'src/clarity-angular/**/*.ts',
    '!src/clarity-angular/**/*.spec.ts',
    '!src/clarity-angular/**/*.mock.ts',
    '!src/clarity-angular/angular1/**/*.ts'
];

gulp.task('tslint:clarity', function(){
    return gulp.src(claritySources)
        .pipe(tslint({
            configuration: 'build/tslint.json',
            formatter: 'verbose'
        }))
        .pipe(tslint.report());
});

gulp.task('tslint:clarity:no-error', function(){
    return gulp.src(claritySources)
        .pipe(tslint({
            configuration: 'build/tslint.json',
            formatter: 'verbose'
        }))
        .pipe(tslint.report({
            emitError: false
        }));
});

var testsSources = ['src/clarity-angular/**/*.spec.ts', 'src/clarity-icons/**/*.spec.ts', 'src/clarity-angular/**/*.mock.ts'];

gulp.task('tslint:tests', function(){
    return gulp.src(testsSources)
        .pipe(tslint({
            configuration: 'build/tslint.json',
            formatter: 'verbose'
        }))
        .pipe(tslint.report());
});

gulp.task('tslint:tests:no-error', function(){
    return gulp.src(testsSources)
        .pipe(tslint({
            configuration: 'build/tslint.json',
            formatter: 'verbose'
        }))
        .pipe(tslint.report({
            emitError: false
        }));
});

var appSources = ['src/app/**/*.ts'];

gulp.task('tslint:app', function(){
    return gulp.src(appSources)
        .pipe(tslint({
            configuration: 'build/tslint.json',
            formatter: 'verbose'
        }))
        .pipe(tslint.report());
});

gulp.task('tslint:app:no-error', function(){
    return gulp.src(appSources)
        .pipe(tslint({
            configuration: 'build/tslint.json',
            formatter: 'verbose'
        }))
        .pipe(tslint.report({
            emitError: false
        }));
});

gulp.task("tslint", ["tslint:clarity", "tslint:app", "tslint:icons", "tslint:tests"], function(){});

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