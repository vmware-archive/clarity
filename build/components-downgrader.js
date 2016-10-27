/**
 * Takes an Angular 1 module declaration file and a stream of components,
 * and downgrades automatically each of these components to be used in an Angular 1 application.
 * See https://angular.io/docs/ts/latest/guide/upgrade.html
 *
 * Returns the completed Angular 1 module declaration file.
 */

var through = require('through2');
var path = require("path");
var gulp = require("gulp");
var util = require("gulp-util");

module.exports = function(options) {
    if (!options || !options.outFile) {
        throw new util.PluginError("components-downgrader",
            "The outFile option was not specified, the components' downgrade could not " +
            "be written anywhere.");
    }

    var toDowngrade = [];

    return through.obj(function (componentFile, encoding, callback) {
        // Whoa.
        var matcher = /@Component\s*\(\s*\{[\s\S]*?selector\s*:\s*(?:"|')([^'"]*)(?:"|')[\s\S]*?\}\s*\)\s*export\s+class\s+(\w+)\W/g;
        var match = matcher.exec(componentFile.contents);
        if (match) {
            var stemPath = path.join(
                path.dirname(componentFile.relative),
                path.basename(componentFile.relative, ".ts")
            );
            toDowngrade.push({
                path: stemPath,
                selector: match[1],
                className: match[2]
            });
        }
        callback();
    }, function(finalCallback) {
        var mainStream = this;
        gulp.src(options.outFile, {base: options.srcRoot})
            .pipe(through.obj(function (file, encoding, callback) {
                var out = String(file.contents);
                var moduleDeclaration = 'angular.module("clarity-angular", [])';

                toDowngrade.forEach(function(component) {
                    var importPath = path.relative(file.relative + "/..", component.path)
                        // Support for Windows
                        .replace(new RegExp('\\' + path.sep, 'g'), '/');
                    // Switch the selector to camelCase for Angular 1
                    var directiveName = component.selector.replace(/-(\w)/g,
                        function(match, letter) { return letter.toUpperCase() });

                    var importString = "import {" + component.className + "} from '" + importPath + "';";
                    var downgradeString = ".directive('" + directiveName + "', " +
                        "UPGRADE_ADAPTER.downgradeNg2Component(" + component.className + "))";
                    out = importString + "\n" + out
                        .replace(moduleDeclaration, moduleDeclaration + "\n" + downgradeString);
                });

                file.contents = new Buffer(out);
                mainStream.push(file);
                callback();
                finalCallback();
            }));
    });
};