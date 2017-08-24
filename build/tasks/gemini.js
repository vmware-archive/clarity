var gulp = require('gulp');
var browserSync = require("browser-sync");
var server = browserSync.create("css-server");
var historyApiFallback = require('connect-history-api-fallback');
var del = require("del");
var util = require('gulp-util');
var ip = require("ip");

function generateRootUrl() {
    let myIp = ip.address();
    return `http://${myIp}:3000/`;
}

var config = {
    open: false,
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
    }
};

gulp.task('css:reference', ["build"], function() {
    server.init(config);

    var testPath = "gemini/tests/"; // test all components by default
    if (util.env.component) {
        testPath += util.env.component + '.js';
    }

    else if (util.env.set) {
        testPath += util.env.set;
    }

    var spawn = require('child_process').spawn;
    var cssReference = spawn('gemini', ['update', testPath, '--root-url', generateRootUrl()], { stdio: 'inherit' });

    cssReference.on('exit', function(code) {
        process.exit(code);
    });
});

gulp.task('css:test', ["build"], function() {
    server.init(config);

    var testPath = "gemini/tests/"; // test all components by default
    if (util.env.component) {
        testPath += util.env.component + '.js';
    }

    else if (util.env.set) {
        testPath += util.env.set;
    }

    var spawn = require('child_process').spawn;
    var cssTest = spawn('gemini', ['test', testPath, '--reporter', 'flat', '--root-url', generateRootUrl()], { stdio: 'inherit' });

    cssTest.on('exit', function(code) {
        process.exit(code);
    });
});

gulp.task('css:clean', [], function() {
    return del([
        "gemini/screens/*",
        "gemini-report/*"
    ]);
});
