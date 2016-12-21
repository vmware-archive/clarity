/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

/**
 * Replaces relative paths in require() statements by absolute paths,
 * starting after the base path of the files stream (see options.base for gulp.src()).
 *
 * Has the option to rename specific folders in these paths. For instance, to rename
 * "foo" to "bar", you would call:
 *     absoluteRequires({
 *       rename: {
 *         "foo": "bar"
 *       }
 *     })
 */

var through = require('through2');
var path = require("path");

module.exports = function(options) {
	options = options || {};

    var relativeRequire = "require\\((?:'|\")(";
    if (options.pattern) {
        var patternString = options.pattern.source || options.pattern;
        // We replace the "any character" dot by [^'"],
        // to make sure we stop at the end of the import.
        relativeRequire += patternString.replace(/([^\\])\./, "$1[^'\"]");
    } else {
        relativeRequire += "\\."+ (options.parentOnly ? "" : "?") + "\\./[^'\"]*";
    }
    relativeRequire +=	")(?:'|\")\\)";
    var requireRegexp = new RegExp(relativeRequire, "g");

	return through.obj(function (file, encoding, callback) {
		file.contents = new Buffer(String(file.contents).replace(requireRegexp, absoluteRequire));
		callback(null, file);

		function absoluteRequire(match, relative) {
            var absolute = path.join(file.relative, "..", relative)
                .replace(new RegExp('\\' + path.sep, 'g'), '/');

			if (options.rename) {
				Object.keys(options.rename)
					.forEach(function(key) {
						absolute = absolute.replace(key, options.rename[key]);
					})
			}
			return "require('" + absolute + "')";
		}
	});
};