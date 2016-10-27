var gulp = require("gulp");
var del = require("del");

/**
 * Removes all build artifacts
 */
gulp.task("clean", function () {
	return del([
		"dist/*",
		"tmp/"
	]);
});

/**
 * Deletes the tmp folder
 */
gulp.task("clean:tmp", function () {
	return del([
		"tmp/"
	]);
});