/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var gulp = require('gulp');
var tslint = require('gulp-tslint');
var typescriptCompile = require('./../compile-ts');
var runSequence = require('run-sequence');

/**
 * The tasks in this file are used to compile five logical groups of ts files:
 *  - Icons
 *  - Clarity components
 *  - Demo components
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
    'src/icons/**/*.ts'
];

gulp.task('typescript:icons', ['triage:typings', 'triage:icons'], function () {
    return typescriptCompile(['tmp/icons/**/*.ts'], {});
});


/**
 * Clarity components
 */
var claritySources = [
    'src/clarity/**/*.ts',
    '!src/clarity/**/*.spec.ts',
    '!src/clarity/**/*.mock.ts',
    'src/clarity/**/*.html',
    '!src/clarity/**/demo/**'
];

gulp.task('typescript:clarity', ['triage:typings', 'triage:clarity', 'triage:icons'], function () {
    return typescriptCompile(['tmp/clarity-angular/**/*.ts'], { // triage will generate these
        inlineTemplates: true
    });
});

/**
 * Demo components
 */
var demosSources = [
    'src/clarity/**/demo/**/*.ts',
    'src/clarity/**/demo/**/*.html'
];

gulp.task('typescript:demos', ['triage:typings', 'triage:clarity', 'triage:demos', 'triage:icons'], function () {
    return typescriptCompile(['tmp/clarity-demos/**/*.ts'], { // triage will generate these
        inlineTemplates: true
    });
});

/**
 * Tests
 */
var testsSources = ['src/clarity/**/*.spec.ts', 'src/clarity/**/*.mock.ts', 'src/testing/**/*.ts'];

gulp.task('typescript:tests', ['triage:typings', 'triage:clarity', 'triage:tests'], function () {
    return typescriptCompile(['tmp/tests/**/*.ts'], { // triage will generate these
        inlineTemplates: false,
        internal: true
    });
});


/**
 * Sample application
 */
var appSources = ['src/app/**/*.ts', '!src/app/routes.ts'];

gulp.task('typescript:app', ['triage:typings', 'triage:clarity', 'triage:demos', 'triage:icons', 'triage:app'], function () {
    return typescriptCompile(['tmp/app/**/*.ts'], { // triage will generate these
        inlineTemplates: false,
        internal: true
    });
});

/**
 * Watches for changes in ts files (or files that will be inlined in typescript)
 * to retrigger typescript compilation.
 */
gulp.task('typescript:clarity:watch', function () {
    gulp.watch(claritySources, function () {
        return runSequence('tslint:watch', 'typescript:clarity');
    });
});

gulp.task('typescript:icons:watch', function () {
    gulp.watch(iconsSources, function () {
        return runSequence('tslint:watch', 'typescript:icons');
    });
});

gulp.task('typescript:demos:watch', function () {
    gulp.watch(demosSources, function () {
        return runSequence('tslint:watch', 'typescript:demos');
    });

});

gulp.task('typescript:tests:watch', function () {
    gulp.watch(testsSources, function () {
        return runSequence('tslint:watch', 'typescript:tests');
    });
});

gulp.task('typescript:app:watch', function () {
    gulp.watch(appSources, function () {
        return runSequence('tslint:watch', 'typescript:app');
    });
});

gulp.task('typescript', function (callback) {
    return runSequence(
        'tslint',
        ['typescript:clarity', 'typescript:demos', 'typescript:icons', 'typescript:app', 'typescript:tests'],
        callback
    );
});

gulp.task('typescript:watch', [
    'typescript:clarity:watch',
    'typescript:icons:watch',
    'typescript:demos:watch',
    'typescript:app:watch',
    'typescript:tests:watch'
], function () {});
