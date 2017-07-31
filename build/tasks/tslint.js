/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var gulp = require('gulp');
var tslint = require('gulp-tslint');

var tsSources = ['src/**/*.ts', '!src/sample-app/aot-compiled/**/*'];

gulp.task('tslint:fix', function(){
    return gulp.src(tsSources)
        .pipe(tslint({
            configuration: 'build/tslint.json',
            fix: true,
            formatter: 'stylish'
        }))
        .pipe(tslint.report({
            emitError: false
        }));
});

gulp.task('tslint:check', function(){
    return gulp.src(tsSources)
        .pipe(tslint({
            configuration: 'build/tslint.json',
            formatter: 'stylish'
        }))
        .pipe(tslint.report({
            emitError: true,
            summarizeFailureOutput: true
        }));
});
