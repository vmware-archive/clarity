// /**
//  * Takes a routes declaration file and a stream of demo folders and components,
//  * and declares automatically a route for each of these components.
//  *
//  * Returns the completed routes file.
//  */
//
// var through = require('through2');
// var path = require("path");
// var gulp = require("gulp");
// var util = require("gulp-util");
//
// /**
//  * Grabs the name of a demo component's routes.
//  *
//  * @param demoRoutesFile: the file exporting the component's route
//  */
// function getRoutesName(demoRoutesFile) {
// 	var pattern = /export\s+const\s+(\w+)\s*(:)\s*RouterConfig/g;
// 	var matches = pattern.exec(String(demoRoutesFile.contents));
// 	if (matches && matches[1]) {
// 		return matches[1];
// 	} else {
// 		throw new Error("Demo component " + demoRoutesFile.relative +
// 		" does not export a RouterConfig.");
// 	}
// }
//
// /**
//  * Defines a route for a demo.
//  *
//  * @param routes: Contents of app/routes.ts, being progressively incremented with demos
//  * @param demoRoutesFile: The file declaring the demo component to be added
//  * @param basePath: Optional, the part of the component's path to ignore when generating URLs and route names.
//  */
// function getRouteInfo(demoRoutesFile, appToDemosRoot) {
// 	var routeFilePath = demoRoutesFile.relative;
// 	// We grab the demo component's route const name
// 	var routeConst = getRoutesName(demoRoutesFile);
// 	// The component path relative to the routes file, without the .ts extension, to use in the import
// 	var importPath = path.join(appToDemosRoot, path.dirname(routeFilePath), path.basename(routeFilePath, ".ts"))
// 		.replace(new RegExp('\\' + path.sep, 'g'), '/');
//
// 	return {
// 		path: importPath,
// 		constantName: routeConst
// 	};
//
// }
//
// /**
//  * We track demo folders that do not contain a *.demo.ts file,
//  * to warn the user in case it's a mistake.
//  */
// function EmptyFoldersTracker() {
// 	var emptyFolders = {};
//
// 	this.addFolder = function(folder) {
// 		emptyFolders[folder.relative] = true;
// 	};
//
// 	this.foundComponent = function(file) {
// 		var dirname = path.dirname(file.relative);
// 		if (!emptyFolders[dirname]) {
// 			throw new Error("Folder " + dirname + " contains two *.routes.ts files. " +
// 			"Please use only one per component.");
// 		}
// 		delete emptyFolders[path.dirname(file.relative)];
// 	};
//
// 	this.done = function() {
// 		for (var folder in emptyFolders) {
// 			var warning = "The demo folder " + folder + " does not include any *.routes.ts file.";
// 			util.log(util.colors.yellow(warning));
// 		}
// 	};
//
// 	return this;
// }
//
// module.exports = function(options) {
//     if (!options || !options.outFile) {
//         throw new util.PluginError("components-downgrader",
//             "The outFile option was not specified, the components' downgrade could not " +
//             "be written anywhere.");
//     }
//
//     var routes = [];
//     var tracker = new EmptyFoldersTracker();
//
//     return through.obj(function (file, encoding, callback) {
//         if (path.basename(file.relative) === "demo") {
//             tracker.addFolder(file);
//             return callback();
//         }
//         try {
//             tracker.foundComponent(file);
//             routes.push(getRouteInfo(file, options.appToDemosRoot));
//             callback();
//         } catch(err) {
//             callback(new util.PluginError("demos-automount", err.message));
//         }
//     }, function(finalCallback) {
//         tracker.done();
//         var mainStream = this;
//         gulp.src(options.outFile)
//             .pipe(through.obj(function (file, encoding, callback) {
//                 var out = String(file.contents);
//                 // The two insertion points in the routes.ts file
//                 var exportString = "export const ROUTES";
//                 var arrayEnd = "];";
//
//                 routes.forEach(function(route) {
// 					// We can now build the import statement for the demo component
// 					var importString = "import { " + route.constantName + " }  from '" + route.path + "';";
// 					// And the route's definition
// 					var routeDefinition = "..." + route.constantName + ",";
// 					// We finally insert the two pieces we've built into routes.ts.
// 					out = out.replace(exportString, importString + "\n" + exportString)
// 						.replace(arrayEnd, routeDefinition + "\n" + arrayEnd);
//                 });
//
//                 file.contents = new Buffer(out);
//                 mainStream.push(file);
//                 callback();
//                 finalCallback();
//             }));
//     });
// };