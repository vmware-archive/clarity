var gulp = require("gulp");
var replace = require('gulp-replace');
var sourcemaps = require("gulp-sourcemaps");
var inlineNg2Template = require("gulp-inline-ng2-template");
var ts = require("gulp-typescript");
var mergeStream = require('merge-stream');

var typings = ["tmp/typings.d.ts", 'typings/index.d.ts'];

module.exports = function(tsSources, options) {
    // always include typings to the sources;
    // this function is always called after the "triage" task so the tmp typings file exists
    var allSources = typings.concat(tsSources);

    var tsConfig = {
        typescript: require('typescript'),
        baseUrl: "../tmp/"
    };
    if (options.module) {
        tsConfig.module = options.module;
    }
    var tsProject = ts.createProject("build/tsconfig.json", tsConfig);

    var prod = process.env.NODE_ENV==="prod";

    var stream = gulp.src(allSources, {base: "tmp/"})
        // replace .scss references in styleUrls: [...] in the files
        .pipe(replace(/styleUrls\s*:\s*\[([^\]]*)\]/g, function(match, group) {
            // here, match = styleUrls: [...]  and group = string inside []
            return match.replace(group, group.replace(/\.scss/g, ".css"));
        }));
    if (!prod) {
        stream = stream.pipe(sourcemaps.init());
    }
    if (options.inlineTemplates) {
        stream = stream.pipe(inlineNg2Template({
            base: "dist",
            target: 'es5',
            useRelativePaths: true
        }));
    }
    stream = stream.pipe(ts(tsProject));
    if (!prod) {
        stream = stream.pipe(sourcemaps.write(".", {sourceRoot: "/src"}));
    }

    if (!options.internal && prod) {
        // Merge the two output streams, so this task is finished when the IO of both operations are done.
        return mergeStream([
            stream.js.pipe(gulp.dest("tmp")),
            stream.dts.pipe(gulp.dest("tmp"))
        ]);
    } else {
        return stream.pipe(gulp.dest("dist"));
    }
};