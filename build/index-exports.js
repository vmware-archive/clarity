/**
 *  Takes a stream of component files and auto-generates export statements for index.ts.
 *  This module assumes that files in the format of <component>/index.ts represent
 *  the main file that should be exported. 
 */
var through = require('through2');
var path = require("path");
var gulp = require("gulp");
var util = require("gulp-util");

module.exports = function(indexFile) {
    var indexPaths = [];
    
    return through.obj(function (file, encoding, callback) {
        var directoryName = path.dirname(file.relative);
        var fileName = path.basename(file.relative, ".ts");

        if (directoryName != "." && fileName === "index") {
            var indexFilePath = path.join(directoryName, fileName).replace(new RegExp('\\' + path.sep, 'g'), '/');
            indexPaths.push(indexFilePath);
        }
        try {
            callback();
        } catch(err) {
            callback(new util.PluginError("index-exports", err.message));
        }
    }, function(finalCallback) {
        var mainStream = this;
        gulp.src(indexFile)
            .pipe(through.obj(function (file, encoding, callback) {
                var out = String(file.contents);

                var prefix = "export * from './";
                var suffix = "';";

                // this will generate statements like: "export * from './alert/index';"
                // and append to the main index.ts
                indexPaths.forEach(function(path) {
                    out += "\n" + prefix + path + suffix;
                });

                file.contents = new Buffer(out);
                mainStream.push(file);
                callback();
                finalCallback();
            }));
    });
};