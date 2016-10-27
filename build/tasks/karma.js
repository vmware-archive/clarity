var gulp = require("gulp");
var path = require("path");
var Server = require('karma').Server;

var configFile = path.resolve('build/karma.conf.js');

/**
 * Run tests once and exit
 */
gulp.task('karma', function (done) {
	new Server({
		configFile: configFile
	}, function(exitStatus) {
		done(exitStatus ? new Error("There are failing unit tests") : undefined);
	}).start();
});

/**
 * Run tests once and exit, with verbose output
 */
gulp.task('karma:verbose', function (done) {
	new Server({
		configFile: configFile,
		reporters: ['mocha']
	}, function() {
		// Ignore possible errors, the log should be enough when using :verbose
		done();
	}).start();
});

/**
 * Run tests and watch for file changes (either test files or source ones).
 */
gulp.task('karma:watch', function (done) {
	new Server({
		configFile: configFile,
		autoWatch: true,
		singleRun: false,
		reporters: ['mocha'],
		mochaReporter: {
			output: 'autowatch'
		}
	}, function() {
		// Ignore possible errors, the log should be enough when using :watch
		done();
	}).start();
});