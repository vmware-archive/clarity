/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var gulp = require('gulp');
var format = require('gulp-clang-format');
var clangFormat = require('clang-format');

var tsSources = [
    'src/**/*.ts',
    '!src/ks-app/node_modules/**/*',
    '!src/sample-app/aot-compiled/**/*'
];

/**
 Formats the typescript file according to the .clang-format file
 */
gulp.task('clang:format', function() {
    return gulp.src(tsSources)
        .pipe(format.format('file', clangFormat))
        .pipe(gulp.dest('src/'));
});

gulp.task('clang:check', function() {
    return gulp.src(tsSources)
        .pipe(format.checkFormat('file', clangFormat, {verbose: true, fail: true}));
});
