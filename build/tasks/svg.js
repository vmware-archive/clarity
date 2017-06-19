/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var gulp = require("gulp");
var mergeStream = require('merge-stream');
var writeSVGIcons = require('../write-svg-icons');
var zip = require('gulp-zip');

gulp.task("svg:icons", ["typescript:icons"], function (cb) {

    writeSVGIcons(function (err) {

        if (err) return cb(err);

        cb();

    });

});

gulp.task("svg:icons:zip", ["svg:icons"], function () {

    let stmZipCoreShapes = gulp.src("dist/clarity-icons/shapes/svg-source/core-shapes/*")
        .pipe(zip("core-shapes.zip"))
        .pipe(gulp.dest("dist/clarity-icons/shapes/svg-source/"));

    let stmZipEssentialShapes = gulp.src("dist/clarity-icons/shapes/svg-source/essential-shapes/*")
        .pipe(zip("essential-shapes.zip"))
        .pipe(gulp.dest("dist/clarity-icons/shapes/svg-source/"));

    let stmZipSocialShapes = gulp.src("dist/clarity-icons/shapes/svg-source/social-shapes/*")
        .pipe(zip("social-shapes.zip"))
        .pipe(gulp.dest("dist/clarity-icons/shapes/svg-source/"));

    let stmZipTechnologyShapes = gulp.src("dist/clarity-icons/shapes/svg-source/technology-shapes/*")
        .pipe(zip("technology-shapes.zip"))
        .pipe(gulp.dest("dist/clarity-icons/shapes/svg-source/"));

    let stmZipAllShapes = gulp.src([
            "dist/clarity-icons/shapes/svg-source/**/*",
        ])
        .pipe(zip("all-shapes.zip"))
        .pipe(gulp.dest("dist/clarity-icons/shapes/svg-source/"));

    return mergeStream(stmZipCoreShapes, stmZipEssentialShapes, stmZipSocialShapes, stmZipTechnologyShapes, stmZipAllShapes);

});

gulp.task("svg", ["svg:icons:zip"]);
