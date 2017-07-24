/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

const gulp = require("gulp");
const mergeStream = require('merge-stream');
const writeSVGIcons = require('../write-svg-icons');
const zip = require('gulp-zip');

const SHAPE_SETS = ["core-shapes",
    "commerce-shapes",
    "essential-shapes",
    "media-shapes",
    "social-shapes",
    "technology-shapes",
    "travel-shapes"];

gulp.task("svg:icons", ["typescript:icons"], function (cb) {

    writeSVGIcons(SHAPE_SETS, function (err) {

        if (err) return cb(err);

        cb();
    });
});

gulp.task("svg:icons:zip", ["svg:icons"], function () {

    let mergedStreams = mergeStream();

    SHAPE_SETS.forEach((setName) => {

        let stmZipSet = gulp.src("dist/clarity-icons/shapes/svg-source/" + setName + "/*")
            .pipe(zip(setName + ".zip"))
            .pipe(gulp.dest("dist/clarity-icons/shapes/svg-source/"));

        mergedStreams.add(stmZipSet);
    });

    let stmZipAllShapesSet = gulp.src([
        "dist/clarity-icons/shapes/svg-source/**/*",
    ])
        .pipe(zip("all-shapes.zip"))
        .pipe(gulp.dest("dist/clarity-icons/shapes/svg-source/"));

    mergedStreams.add(stmZipAllShapesSet);

    return mergedStreams;

});

gulp.task("svg", ["svg:icons:zip"]);
