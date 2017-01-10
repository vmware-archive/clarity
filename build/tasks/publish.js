/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var gulp = require("gulp");
var rename = require('gulp-rename');
var preprocess = require('gulp-preprocess');
var util = require('gulp-util');
var es = require('event-stream');

// All packages share the same version number.
var VERSION = util.env.version;
var npmFolder = "dist/npm/";


/**
 * Preparing the clarity-icons package
 */

gulp.task("npm:icons:bundles", function () {
    return gulp.src([
        "dist/bundles/clarity-icons.min.css",
        "dist/bundles/clarity-icons.min.js",
        "dist/bundles/clarity-icons-lite.umd.js",
        "!dist/clarity-icons/**/*.spec.ts",
        "dist/clarity-icons/**/*.ts",
        "dist/clarity-icons/**/*.js",
        "!dist/clarity-icons/clarity-icons-sfx.js",
        "!dist/clarity-icons/clarity-icons-sfx.d.ts",
        "!dist/clarity-icons/interfaces/**/*.js"
    ]).pipe(gulp.dest(npmFolder + "/clarity-icons"));
});

/**
 * Preparing the clarity-icons shapes package
 */

gulp.task("npm:icons:shapes", function () {
    return gulp.src([
        "dist/bundles/*-shapes.umd.js",
    ]).pipe(gulp.dest(npmFolder + "/clarity-icons/shapes"));
});

/**
 * We publish icons' sources just for information.
 */
gulp.task("npm:icons:sources", function () {
    return gulp.src([
        "src/clarity-icons/**/*.scss",
        "src/clarity-icons/**/*.ts",
    ])
    .pipe(gulp.dest(npmFolder + "/clarity-icons/src"));
});

/**
 * We insert the version number in the correct package.json
 * and copy it to the root of our package.
 */
gulp.task("npm:icons:package", function () {
    return gulp.src("build/npm/clarity-icons.json")
        .pipe(preprocess({context: {VERSION: VERSION}, extension: "js"}))
        .pipe(rename("package.json"))
        .pipe(gulp.dest(npmFolder + "/clarity-icons"));
});

gulp.task("npm:icons:readme", function () {
    return gulp.src("build/npm/clarity-icons-README.md")
        .pipe(rename("README.md"))
        .pipe(gulp.dest(npmFolder + "/clarity-icons"));
});

gulp.task("npm:icons", ["npm:icons:bundles", "npm:icons:shapes", "npm:icons:sources", "npm:icons:package", "npm:icons:readme"], function () {});

/**
 * Preparing the clarity-ui package
 */

/**
 * The only deliverable for clarity-ui is the minified CSS bundle.
 */
gulp.task("npm:ui:bundles", function () {
    return gulp.src("dist/bundles/clarity-ui.min.css")

        .pipe(gulp.dest(npmFolder + "/clarity-ui"));
});

/**
 * We publish SCSS sources so users can make changes to them and compile on their own.
 */
gulp.task("npm:ui:sources", function () {
    return gulp.src([
        "src/clarity-angular/main.scss",
        "src/clarity-angular/**/*.clarity.scss"
    ])
        .pipe(gulp.dest(npmFolder + "/clarity-ui/src"));
});

/**
 * We insert the version number in the correct package.json
 * and copy it to the root of our package.
 */
gulp.task("npm:ui:package", function () {
    return gulp.src("build/npm/clarity-ui.json")
        .pipe(preprocess({context: {VERSION: VERSION}, extension: "js"}))
        .pipe(rename("package.json"))
        .pipe(gulp.dest(npmFolder + "/clarity-ui"));
});

gulp.task("npm:ui:readme", function () {
    return gulp.src("build/npm/clarity-ui-README.md")
        .pipe(rename("README.md"))
        .pipe(gulp.dest(npmFolder + "/clarity-ui"));
});


gulp.task("npm:ui", ["npm:ui:bundles", "npm:ui:sources", "npm:ui:package", "npm:ui:readme"], function () {});

/**
 * Preparing the clarity-angular package
 */

/**
 * The deliverables for clarity-angular are:
 *   - the compiled js files in es5 with es2015 module format
 *   - the umd JS bundle
 *   - the minified JS bundle (in register format)
 *   - the Typescript declaration files for our components
 */
gulp.task("npm:angular:bundles", function () {
    gulp.src([
        "dist/bundles/clarity-angular.min.js",
        "dist/bundles/clarity-angular.umd.js",
        'tmp/**/*.metadata.json',
        'tmp/**/*.d.ts',
        'tmp/**/*.js',
        'tmp/**/*.js.map'
    ]).pipe(gulp.dest(npmFolder + "/clarity-angular"));
});

/**
 * We publish our components' sources just for information.
 */
gulp.task("npm:angular:sources", function () {
    return gulp.src([
        "src/clarity-angular/**/*.ts",
        "!src/clarity-angular/**/*.spec.ts",
        "!src/clarity-angular/**/*.mock.ts",
        "src/clarity-angular/**/*.html",
        "src/clarity-angular/**/*.scss",
        "!src/clarity-angular/**/*.clarity.scss",
        "dist/clarity-angular/**/*.d.ts",
    ])
        .pipe(gulp.dest(npmFolder + "/clarity-angular/src/"));
});

/**
 * We insert the version number in the correct package.json
 * and copy it to the root of our package.
 */
gulp.task("npm:angular:package", function () {
    return gulp.src("build/npm/clarity-angular.json")
        .pipe(preprocess({context: {VERSION: VERSION}, extension: "js"}))
        .pipe(rename("package.json"))
        .pipe(gulp.dest(npmFolder + "/clarity-angular"));
});

gulp.task("npm:angular:readme", function () {
    return gulp.src("build/npm/clarity-angular-README.md")
        .pipe(rename("README.md"))
        .pipe(gulp.dest(npmFolder + "/clarity-angular"));
});

gulp.task("npm:angular", ["npm:angular:bundles", "npm:angular:sources", "npm:angular:package", "npm:angular:readme"], function () {});

gulp.task("npm:all", ["npm:icons", "npm:ui", "npm:angular"], function () {});