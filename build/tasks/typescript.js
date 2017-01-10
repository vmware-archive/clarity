/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var gulp = require('gulp');
var tslint = require('gulp-tslint');
var typescriptCompile = require('./../compile-ts');
var runSequence = require('run-sequence');
var absoluteRequires = require("../absolute-requires");
var renameFolder = require("../rename-folder");
/**
 * The tasks in this file are used to compile five logical groups of ts files:
 *  - Icons
 *  - Clarity components
 *  - Test files
 *  - Sample application
 *
 * Each task:
 * 1. Converts the external html templates and css to inline html and css (if we specify in options)
 * 2. Transpiles the typescript files from the tmp/ folder to ES5 javascript
 * 3. Creates sourcemaps
 */


/**
 * Clarity Icons
 */
var iconsSources = [
    'src/clarity-icons/**/*.ts',
    '!src/clarity-icons/**/*.spec.ts'
];

gulp.task('typescript:icons', function () {
    return typescriptCompile(iconsSources, {})
        .pipe(gulp.dest("dist"));
});


/**
 * Clarity components
 */
var claritySources = [
    'src/clarity-angular/**/*.ts',
    '!src/clarity-angular/**/*.spec.ts',
    '!src/clarity-angular/**/*.mock.ts'
];

gulp.task('typescript:clarity', function () {
    return typescriptCompile(claritySources, {
        inlineTemplates: true
    })
    .pipe(gulp.dest("dist"));
});

/**
 * Tests
 */
var testsSources = [
    'src/clarity-angular/**/*.spec.ts',
    'src/clarity-angular/**/*.mock.ts'
];

gulp.task('typescript:tests', function () {
    return typescriptCompile(testsSources, {
        inlineTemplates: false,
        internal: true
    })
    .pipe(absoluteRequires({
        pattern: /\.\.?\/.*(mock|spec)/,
        rename: {
            "clarity-angular": "tests"
        }
    }))
    // The requires remaining are all actual clarity classes
    .pipe(absoluteRequires({}))
    .pipe(renameFolder({"clarity-angular": "tests"}))
    .pipe(gulp.dest("dist"));
});

var testsIconSources = [
    'src/clarity-icons/**/*.spec.ts',
];

gulp.task('typescript:tests:icons', function () {
    return typescriptCompile(testsIconSources, {
        inlineTemplates: false,
        internal: true
    })
        .pipe(absoluteRequires({
            pattern: /\.\.?\/.*(mock|spec)/,
            rename: {
                "clarity-icons": "tests"
            }
        }))
        // The requires remaining are all actual clarity classes
        .pipe(absoluteRequires({}))
        .pipe(renameFolder({"clarity-icons": "tests"}))
        .pipe(gulp.dest("dist"));
});


/**
 * Sample application
 */
var appSources = ['src/app/**/*.ts'];

gulp.task('typescript:app', function () {
    return typescriptCompile(appSources, {
        inlineTemplates: false,
        internal: true
    })
    .pipe(absoluteRequires({
        parentOnly: true
    }))
    .pipe(gulp.dest("dist"));
});

/**
 * Watches for changes in ts files (or files that will be inlined in typescript)
 * to retrigger typescript compilation.
 */
var clarityHtmlFiles = ["src/clarity-angular/**/*.html"];
gulp.task('typescript:clarity:watch', function () {
    gulp.watch(claritySources.concat(clarityHtmlFiles), function () {
        return runSequence('tslint:clarity:no-error', 'typescript:clarity');
    });
});

gulp.task('typescript:icons:watch', function () {
    gulp.watch(iconsSources, function () {
        return runSequence('tslint:icons:no-error', 'typescript:icons');
    });
});

gulp.task('typescript:tests:watch', function () {
    gulp.watch(testsSources, function () {
        return runSequence('tslint:tests:no-error', 'typescript:tests');
    });
});

gulp.task('typescript:tests:icons:watch', function () {
    gulp.watch(testsIconSources, function () {
        return runSequence('tslint:tests:no-error', 'typescript:tests:icons');
    });
});

gulp.task('typescript:app:watch', function () {
    gulp.watch(appSources, function () {
        return runSequence('tslint:app:no-error', 'typescript:app');
    });
});

gulp.task('typescript', function (callback) {
    return runSequence(
        'tslint',
        ['typescript:clarity', 'typescript:icons', 'typescript:app', 'typescript:tests', 'typescript:tests:icons'],
        callback
    );
});

gulp.task('typescript:watch', [
    'typescript:clarity:watch',
    'typescript:icons:watch',
    'typescript:tests:icons:watch',
    'typescript:app:watch',
    'typescript:tests:watch'
], function () {});
