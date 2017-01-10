/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var gulp = require("gulp");
var preprocess = require('gulp-preprocess');

var indexFiles = ["src/app/index.html", "src/app/ng1.html"];
var appFiles = ["src/app/**/*.html", "!src/app/index.html", "!src/app/ng1.html"];
var assetFiles = ["src/app/img/**"];

/**
 * Preprocesses index.html and copies it directly to the dist/ folder
 */
gulp.task("html:index", function(){
	return gulp.src(indexFiles)
		.pipe(preprocess({context: { NODE_ENV: process.env.NODE_ENV}})) //To set environment variables in-line
		.pipe(gulp.dest("dist/app/"));
});

/**
 * Copies all html from the sample application to dist/
 */
gulp.task("html:app", function(){
	return gulp.src(appFiles, {base: "src"})
		.pipe(gulp.dest("dist"));
});

gulp.task("html:assets", function () {
	return gulp.src(assetFiles, {base: "src"})
		.pipe(gulp.dest("dist"));
});

gulp.task("html:sample-app", function(){
    return gulp.src(["src/sample-app/index.html"], {base: "src"})
        .pipe(gulp.dest("dist"));
});

gulp.task("html", ["html:index", "html:app", "html:assets"], function(){});

/**
 * Watches for changes in the index.html file to copy it again to the dist/ folder.
 */
gulp.task("html:watch", function () {
	gulp.watch(indexFiles, ["html:index"]);
    gulp.watch(appFiles, ["html:app"]);
});
