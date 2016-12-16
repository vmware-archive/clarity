/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var gulp = require("gulp");
var absoluteImports = require("../absolute-imports");
var indexExports = require("../index-exports");
var componentDowngrader = require("../components-downgrader");
var renameFolder = require("../rename-folder");

/**
 * Typings
 */
var typings = "src/typings.d.ts";
gulp.task("triage:typings", function(){
    return gulp.src(typings)
        .pipe(gulp.dest("tmp"));
});

/**
 * Clarity components
 */
var upgradeAdapter = "src/clarity/angular1/upgrade-adapter.ts";
var claritySources = [
    "src/clarity/**/*.ts",
    "!src/clarity/**/*.spec.ts",
    "!src/clarity/**/*.mock.ts",
    "src/clarity/**/*.html",
    "!src/clarity/**/demo/**",
    "!"+upgradeAdapter
];
gulp.task("triage:clarity:main", function(){
    var sourcesMinusIndex = claritySources.concat("!src/clarity/index.ts");
    return gulp.src(sourcesMinusIndex, {base: "src/clarity"})
        .pipe(gulp.dest("tmp/clarity-angular"));
});

gulp.task("triage:clarity:index", function(){
    return gulp.src(claritySources, {base: "src/clarity"})
        .pipe(indexExports('src/clarity/index.ts'))
        .pipe(gulp.dest("tmp/clarity-angular"));
});

/**
 * Downgrade declarations of Clarity components, automatically populated
 */
gulp.task("triage:clarity:downgrade", function(){
    return gulp.src(claritySources, {base: "src/clarity"})
        .pipe(componentDowngrader({
            outFile: upgradeAdapter,
            srcRoot: "src/clarity"
        }))
        .pipe(gulp.dest("tmp/clarity-angular"));
});

/**
 * Clarity Icons
 */
var clarityIconSources = [
    'src/clarity-icons/**/*.ts'
];
gulp.task("triage:icons", function(){
    return gulp.src(clarityIconSources, {base: "src/clarity-icons"})
        .pipe(gulp.dest("tmp/clarity-icons"));
});

/**
 * Demo components
 *
 * Imports from clarity components are converted to absolute paths.
 */
var demosSources = [
    "src/clarity/**/demo/**/*.ts",
    "src/clarity/**/demo/**/*.html"
];
gulp.task("triage:demos", function(){
    return gulp.src(demosSources, {base: "src/clarity"})
        .pipe(absoluteImports({
            parentOnly: true,
            demo: true,
            prefix: "clarity-angular"
        }))
        .pipe(gulp.dest("tmp/clarity-demos"));
});

/**
 * Tests
 *
 * Imports from everywhere are converted to absolute paths, by provenance.
 */
var testsSources = ["src/clarity/**/*.spec.ts", "src/clarity/**/*.mock.ts"];
gulp.task("triage:tests", function(){
    return gulp.src(testsSources, {base: "src"})
        // Other test sources and mocks imports
        .pipe(absoluteImports({
            pattern: /\.\.?\/.*(mock|spec)/,
            rename: {
                "clarity": "tests"
            }
        }))
        // The imports remaining are all actual clarity classes
        .pipe(absoluteImports({
            rename: {
                "clarity": "clarity-angular"
            }
        }))
        .pipe(renameFolder({"clarity": "tests"}))
        .pipe(gulp.dest("tmp"));
});

/**
 * Sample application
 *
 * Import for Clarity providers is converted to an absolute path
 */
var appSources = ["src/app/**/*.ts"];
gulp.task("triage:app", function(){
    return gulp.src(appSources, {base: "src"})
        .pipe(absoluteImports({
            parentOnly: true,
            rename: {
                "clarity": "clarity-angular"
            }
        }))
        .pipe(gulp.dest("tmp"));
});

gulp.task("triage:clarity", ["triage:clarity:main", "triage:clarity:index", "triage:clarity:downgrade"], function(){});

gulp.task("triage", [
    "triage:typings",
    "triage:clarity",
    "triage:demos",
    "triage:icons",
    "triage:tests",
    "triage:app"
], function(){});
