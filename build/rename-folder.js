/**
 * Renames a folder in the path of a a stream of files.
 * For instance, if the files are foo/bar/*, and you rename {"bar": "baz"},
 * the files will become foo/baz/*.
 */

var through = require('through2');
var rename = require("gulp-rename");

module.exports = function(renaming) {
	return rename(function (path) {
		Object.keys(renaming)
			.forEach(function(key) {
				path.dirname = path.dirname.replace(key, renaming[key]);
			})
	});
};