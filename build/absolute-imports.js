/**
 * Replaces relative paths in import statements by absolute paths,
 * starting after the base path of the files stream (see options.base for gulp.src()).
 *
 * Can also filter which imports to replace based on a given regexp pattern. For instance, to only
 * replace imports from modules ending in ".spec", you could call
 *     absoluteImports({
 *       pattern: /.*\.spec/
 *     })
 *
 * Has the option to rename specific folders in these paths. For instance, to rename
 * "foo" to "bar", you would call:
 *     absoluteImports({
 *       rename: {
 *         "foo": "bar"
 *       }
 *     })
 */

var through = require('through2');
var path = require("path");

module.exports = function(options) {
    options = options || {};
    options.prefix = options.prefix || "";

    var relativeImport = "(import\\s*[^'\"]*\\s*from\\s*)(?:'|\")(";
    if (options.pattern) {
        var patternString = options.pattern.source || options.pattern;
        // We replace the "any character" dot by [^'"],
        // to make sure we stop at the end of the import.
        relativeImport += patternString.replace(/([^\\])\./, "$1[^'\"]");
    } else {
        relativeImport += "\\."+ (options.parentOnly ? "" : "?") + "\\./[^'\"]*";
    }
    relativeImport += ")(?:'|\")";
    var importRegexp = new RegExp(relativeImport, "g");

	return through.obj(function (file, encoding, callback) {
	    var depth = 0;
        if (options.demo) {
            depth = file.relative.split("demo"+path.sep)[1].split(path.sep).length;
        }

		file.contents = new Buffer(String(file.contents).replace(importRegexp, absoluteImport));
		callback(null, file);

		function absoluteImport(match, importString, relative) {
            if (options.demo && relative.split("../").length <= depth) {
                return match;
            }

            var absolute = path.join(options.prefix, file.relative, "..", relative)
                .replace(new RegExp('\\' + path.sep, 'g'), '/');
            if (options.rename) {
                Object.keys(options.rename)
                    .forEach(function(key) {
                        absolute = absolute.replace(key, options.rename[key]);
                    })
            }
			return importString + "'" + absolute + "'";
		}
	});
};