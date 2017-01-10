var gulp = require("gulp");
var runSequence = require('run-sequence');
var os = require('os');

gulp.task('sample:build', function (cb) {
    var exec = require('child_process').exec;

    var cmd = os.platform() === 'win32' ?
        'node_modules\\.bin\\ngc' : './node_modules/.bin/ngc';

    cmd += ' -p src/sample-app/tsconfig.sample-app.json'; // use config for compile

    exec(cmd, function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task("sample:rollup", ["sample:build"], function(cb){
    var exec = require('child_process').exec;

    var cmd = os.platform() === 'win32' ?
        'node_modules\\.bin\\rollup' : './node_modules/.bin/rollup';

    cmd += ' -c build/rollup-sample-app.config.js'; // use config for rollup

    exec(cmd, function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

/**
 * Watches for changes in the sample app source to rebuild it
 */
gulp.task("sample:watch", function () {

    var sampleAppSources = [
        "src/sample-app/**/*.ts",
        "src/sample-app/**/*.html"
    ];

    gulp.watch(sampleAppSources, ["sample:rollup"]);
});


/**
 * Runs the sample application with npm package candidates installed
 */
gulp.task("sample", function(callback) {
    return runSequence(
        "clean:sample-app",
        "html:sample-app",
        "sample:rollup",
        "live:sample-app",
        "sample:watch",
        callback
    );
});
