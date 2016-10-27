// /**
//  * Replaces relative paths in require() statements by absolute paths,
//  * starting after the base path of the files stream (see options.base for gulp.src()).
//  *
//  * Has the option to rename specific folders in these paths. For instance, to rename
//  * "foo" to "bar", you would call:
//  *     absoluteRequires({
//  *       rename: {
//  *         "foo": "bar"
//  *       }
//  *     })
//  */
//
// var through = require('through2');
// var path = require("path");
//
// module.exports = function(options) {
// 	options = options || {};
//
//     var relativeRequire = new RegExp("require\\((?:'|\")" +
// 		"(\\."+ (options.parentOnly ? "" : "?") + "\\./[^'\"]*)" +
// 		"(?:'|\")\\)", "g");
//
// 	return through.obj(function (file, encoding, callback) {
// 		file.contents = new Buffer(String(file.contents).replace(relativeRequire, absoluteRequire));
// 		callback(null, file);
//
// 		function absoluteRequire(match, relative) {
//             var absolute = path.join(file.relative, "..", relative)
//                 .replace(new RegExp('\\' + path.sep, 'g'), '/');
// 			if (options.rename) {
// 				Object.keys(options.rename)
// 					.forEach(function(key) {
// 						absolute = absolute.replace(key, options.rename[key]);
// 					})
// 			}
// 			return "require('" + absolute + "')";
// 		}
// 	});
// };