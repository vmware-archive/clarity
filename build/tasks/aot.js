/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var path = require("path");
var gulp = require("gulp");
var inlineNg2Template = require("gulp-inline-ng2-template");
var runSequence = require('run-sequence');
var del = require("del");
var os = require('os');

gulp.task("aot:copy", function () {
    var claritySources = [
        'src/clarity-angular/**/*.ts',
        'src/clarity-angular/**/*.html',
        '!src/clarity-angular/**/*.spec.ts',
        '!src/clarity-angular/**/*.mock.ts'
    ];

    return gulp.src(claritySources)
        .pipe(inlineNg2Template({
            base: '/src/clarity-angular/',
            useRelativePaths: true
        }))
        .pipe(gulp.dest("tmp"));
});


gulp.task('aot:build', function (cb) {
    var exec = require('child_process').exec;

    var cmd = os.platform() === 'win32' ?
        'node_modules\\.bin\\ngc' : './node_modules/.bin/ngc';

    cmd += ' -p tsconfig.es2015.json'; // use config for aot to compile

    exec(cmd, function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('aot:build:test', function (cb) {
    var exec = require('child_process').exec;

    var cmd = os.platform() === 'win32' ?
        'node_modules\\.bin\\ngc' : './node_modules/.bin/ngc';

    cmd += ' -p tsconfig.test.json'; // use config for aot to compile

    exec(cmd, function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });

});

gulp.task("aot:umd", function (cb) {
    var exec = require('child_process').exec;

    var cmd = os.platform() === 'win32' ?
        'node_modules\\.bin\\rollup' : './node_modules/.bin/rollup';

    cmd += ' -c build/rollup-clarity.config.js'; // use config for rollup

    exec(cmd, function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task("aot:test", function (callback) {
    return runSequence(
        'aot:copy',
        'aot:build',
        'aot:build:test',
        callback
    );
});

gulp.task("aot", function (callback) {
    return runSequence(
        'aot:copy',
        'aot:build',
        'aot:umd',
        callback
    );
});
