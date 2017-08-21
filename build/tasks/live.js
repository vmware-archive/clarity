/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var historyApiFallback = require('connect-history-api-fallback');

/**
 * Uses browserSync to watch the dist folder and refresh the browser on any changes
 */
gulp.task("live", function() {
	browserSync.init({
		server: {
			baseDir: "./dist/",
			routes: {
				"/node_modules": "./node_modules",
				"/src": "./src"
			},
			// Necessary middleware for a single-page application with client-side routing
			middleware: [
				historyApiFallback({ index: "./app/index.html" })
			]
		},
		files: ["dist/**/*"],
        reloadDebounce: 500,
        reloadDelay: 500
	});
});

gulp.task("live:sample-app", function() {
    browserSync.init({
        server: {
            baseDir: "./dist/sample-app/",
            routes: {
                "/node_modules": "./node_modules"
            },
            // Necessary middleware for a single-page application with client-side routing
            middleware: [
                historyApiFallback({ index: "./index.html" })
            ]
        },
        files: ["dist/sample-app/index.html","dist/sample-app/dist/build.js"]
    });
});
