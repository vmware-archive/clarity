/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var gulp = require("gulp");
var env = require('gulp-env');
var requireDir = require('require-dir');
var runSequence = require('run-sequence');
var util = require('gulp-util');

/**
 * Check for prod flag during gulp task executions
 */
if(util.env.prod){
  env.set({NODE_ENV: "prod"});
} else {
  env.set({NODE_ENV: "dev"});
}

requireDir('./build/tasks', {recurse: true});

/**
 * Cleans, compiles and bundles the entire application, before cleaning up the tmp/ folder again.
 */
gulp.task('build', function (callback) {
    var prod = process.env.NODE_ENV==="prod";
    return runSequence(
        'clean',
        'sass',
        prod ? ['typescript', 'html', 'bundle'] : ['typescript', 'html'],
        callback
    );
});

/**
 * Builds one time, then watches for changes and starts Browsersync
 */
gulp.task("serve", function (callback) {
    var prod = process.env.NODE_ENV==="prod";
    return runSequence(
        'build',
        prod ?
            ['sass:watch', 'typescript:watch', 'html:watch', 'bundle:watch'] :
            ['sass:watch', 'typescript:watch', 'html:watch'],
        'live',
        callback
    );
});

/**
 * Builds the application in production mode and runs all tests once on it.
 */
gulp.task("test", function (callback) {
    env.set({NODE_ENV: "prod"}); // We only run tests in production mode for now
    return runSequence(
        'build',
        'karma:verbose',
        callback
    );
});

/**
 * Builds the application in production mode, runs all tests on it,
 * then watches for file changes to re-run tests.
 */
gulp.task("test:watch", function(callback) {
    env.set({NODE_ENV: "prod"}); // We only run tests in production mode for now
    return runSequence(
        'build',
        ['sass:watch', 'typescript:watch', 'html:watch', 'bundle:watch'],
        'karma:watch',
        callback
    );
});

/**
 * Publishes the Clarity package to the NPM registry
 */
gulp.task("npm:prepare", function(callback) {
    env.set({NODE_ENV: "prod"}); // The build is in production mode
    return runSequence(
        'build',
        'npm:all',
        callback
    );
});
