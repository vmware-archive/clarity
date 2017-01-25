/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var gulp = require("gulp");
var Builder = require("systemjs-builder");
var zip = require('gulp-zip');

/**
 * Bundles the compiled icon js files into self-executing clarity-icons.min.js,
 * which will be used for publishing clarity icons as an independent package
 */
gulp.task("bundle:icons:sfx", ["typescript:icons"], function () {

    var buildOpts = {minify: true, mangle: false, normalize: true};

    var builder = new Builder("dist/");
    builder.config({
        packages: {
            'clarity-icons': {defaultExtension: 'js'}
        }
    });

    return builder.buildStatic("clarity-icons/clarity-icons-sfx.js", "dist/bundles/clarity-icons.min.js", buildOpts)
        .catch(function (err) {
            console.error(err);
            process.exit(1);
        });

});

gulp.task("bundle:icons-lite:sfx", ["typescript:icons"], function () {

    var buildOpts = {minify: true, mangle: false, normalize: true};

    var builder = new Builder("dist/");
    builder.config({
        packages: {
            'clarity-icons': {main: 'index.js', defaultExtension: 'js'}
        }
    });

    builder.buildStatic("clarity-icons/index.js", "dist/bundles/clarity-icons-lite.umd.js", buildOpts)
        .catch(function (err) {
            console.error(err);
            process.exit(1);
        });

});

gulp.task("bundle:icons:shapes", ["typescript:icons"], function () {

    var buildOpts = {minify: true, mangle: false, normalize: true};

    var builder = new Builder("dist/");
    builder.config({
        packages: {
            'clarity-icons': {defaultExtension: 'js'}
        }
    });

    /* TODO: BasicShapes is deprecated, so is this task and will be removed in 0.9.0 */
    builder.buildStatic("clarity-icons/shapes/basic-shapes.js", "dist/bundles/basic-shapes.umd.js", buildOpts)
        .catch(function (err) {
            console.error(err);
            process.exit(1);
        });

    builder.buildStatic("clarity-icons/shapes/essential-shapes.js", "dist/bundles/essential-shapes.umd.js", buildOpts)
        .catch(function (err) {
            console.error(err);
            process.exit(1);
        });

    builder.buildStatic("clarity-icons/shapes/social-shapes.js", "dist/bundles/social-shapes.umd.js", buildOpts)
        .catch(function (err) {
            console.error(err);
            process.exit(1);
        });

    builder.buildStatic("clarity-icons/shapes/technology-shapes.js", "dist/bundles/technology-shapes.umd.js", buildOpts)
        .catch(function (err) {
            console.error(err);
            process.exit(1);
        });

});

/**
 * Bundles the compiled js files into clarity.min.js
 */
gulp.task("bundle:clarity:js", ["typescript:clarity"], function () {
    var buildOpts = {minify: true, mangle: false, normalize: true};

    var builder = new Builder("dist/");
    builder.config({
        meta: {
            "@angular/*": {build: false},
            "rxjs*": {build: false}
        },
        packages: {
            'clarity-angular': {main: 'index.js', defaultExtension: 'js'}
        }
    });

    return builder.bundle("clarity-angular/**/*.js", "dist/bundles/clarity-angular.min.js", buildOpts)
        .catch(function (err) {
            console.error(err);
            process.exit(1);
        });
});

/**
 * Specific ng1-compatible bundle for Angular 1 applications. Do not publicize.
 */
gulp.task("bundle:clarity:js:ng1", ["typescript:clarity"], function () {
    var buildOpts = {minify: true, mangle: false, runtime: false};

    var packages = {
        'tmp/clarity-angular': {defaultExtension: 'js'},
        'rxjs*': {defaultExtension: 'js'}
    };

    var builder = new Builder();
    builder.config({
        // We bundle both Angular and RxJS with us.
        map: {
            'rxjs': 'node_modules/rxjs',
            '@angular/core': 'node_modules/@angular/core/bundles/core.umd.js',
            '@angular/common': 'node_modules/@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'node_modules/@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/router': 'node_modules/@angular/router/bundles/router.umd.js',
            '@angular/forms': 'node_modules/@angular/forms/bundles/forms.umd.js'
        },
        packages: packages
    });

    return builder.buildStatic("tmp/clarity-angular/**/*.js", "dist/bundles/angular1/clarity-angular1.min.js", buildOpts)
        .catch(function (err) {
            console.error(err);
            process.exit(1);
        });
});

/**
 * Compresses our deliverables and definition files for third-party devs.
 */
gulp.task("bundle:zip", ["bundle:clarity:js", "sass:static"], function () {
    return gulp.src([
        "dist/bundles/clarity-ui.min.css",
        "dist/bundles/clarity-angular.min.js",
        "tmp/definitions/**/*.d.ts"
    ])
        .pipe(zip('clarity-angular.dev.zip'))
        .pipe(gulp.dest("dist/bundles/"));
});

/**
 * Bundles all js files into a single minified one, then puts it in the bundles/ folder.
 * Also creates a zip with our css and js deliverables and our definition files
 * for third-party devs, then adds it to the bundles/ folder.
 */
gulp.task("bundle", [
    "bundle:icons:sfx",
    "bundle:icons-lite:sfx",
    "bundle:icons:shapes",
    "bundle:clarity:js",
    "bundle:zip"
], function () {
});

/**
 * Watches for changes in the transpiled js files to rebundle them
 */
gulp.task("bundle:watch", function () {

    var iconsSources = ["src/clarity-icons/**/*.ts"];

    var claritySources = [
        "src/clarity-angular/**/*.ts",
        "!src/clarity-angular/**/*.spec.ts",
        "!src/clarity-angular/**/*.mock.ts",
        "src/clarity-angular/**/*.html",
        "src/**/*.scss",
        "!src/**/*.clarity.scss"
    ];

    gulp.watch(iconsSources, ["bundle:icons:sfx", "bundle:icons-lite:sfx", "bundle:icons:shapes"]);
    gulp.watch(claritySources, ["bundle:clarity:js"]);

});
