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
		files: ["dist/**/*"]
	});
});
