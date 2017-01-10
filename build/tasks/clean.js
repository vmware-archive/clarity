/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var gulp = require("gulp");
var del = require("del");

/**
 * Removes all build artifacts
 */
gulp.task("clean", function () {
	return del([
		"aot-compiled",
		"dist",
		"tmp"
	]);
});

/**
 * Deletes the tmp folder
 */
gulp.task("clean:tmp", function () {
	return del([
		"tmp"
	]);
});

/**
 * Cleans out the sample-app
 */
gulp.task("clean:sample-app", function () {
    return del([
        "src/sample-app/aot-compiled"
    ]);
});