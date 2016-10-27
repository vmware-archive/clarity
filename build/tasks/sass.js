var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var concat = require("gulp-concat");
var util = require('gulp-util');
var autoprefixer = require('gulp-autoprefixer');
var sass = require("gulp-sass");
var stylestats = require('gulp-stylestats');
var runSequence = require('run-sequence');

var compressed = { outputStyle: "compressed" };
var uncompressed = { sourceComments: 'map', errLogToConsole: true, sourceMap: 'sass' };

var clarityStaticFiles = [
    "src/clarity/utils/*.clarity.scss",
    "src/clarity/**/*.clarity.scss",
    "src/clarity/main.scss"
];

var clarityFiles = [
    "src/clarity/**/*.scss",
    "!src/clarity/**/demo/**/*.scss",
    "!src/clarity/**/*.clarity.scss"
];

var demosFiles = "src/clarity/**/demo/**/*.scss";

var appFiles =  "src/app/**/*.scss";

var iconFiles = "src/icons/**/*.scss";

var assets = ["src/clarity/img/*.png","src/clarity/img/*.svg"];

/**
 * compiles the .clarity.sass files from the src/ folder to create the bundled clarity css
 * and its sourcemap in the dist/ folder
 */
gulp.task("sass:static", function(){
    var prod = process.env.NODE_ENV==="prod";

    return gulp.src(["src/clarity/main.scss"], {base: "src"})
        // Sourcemaps only for development
        .pipe(prod ? util.noop() : sourcemaps.init())
        .pipe(sass(prod ? compressed : uncompressed).on("error", sass.logError))
        .pipe(prod ? util.noop() : sourcemaps.write({includeContent: false}))
        .pipe(prod ? util.noop() : sourcemaps.init({loadMaps: true}))
        .pipe(autoprefixer({
                browsers: ['last 3 versions','ie 10','ie 11','> 5%','Firefox > 35','Chrome > 35'],
    			cascade: false
    		}))
        .pipe(concat(prod ? 'clarity-ui.min.css' : 'clarity-ui.css'))
        .pipe(prod ? util.noop() : sourcemaps.write(".", {sourceRoot: "/src"}))
        .pipe(gulp.dest(prod ? "dist/bundles": "dist"));
});

/**
 * compiles the components' sass files from the src/ folder to the tmp/ folder
 * to create the css that will be inlined into the components' typescript.
 */
gulp.task("sass:clarity", function(){
    return gulp.src(clarityFiles, {base: "src/clarity"})
        // we need to force the compressed style for components, otherwise we break sourcemaps when inlining.
        // this will be customizable once gulp-inline-ng2-template supports sourcemaps.
        .pipe(sass(compressed).on("error", sass.logError))
        .pipe(autoprefixer({
    			browsers: ['last 3 versions','ie 10','ie 11','> 5%','Firefox > 35','Chrome > 35'],
    			cascade: false
    		}))
        .pipe(gulp.dest("tmp/clarity-angular"));
});

/**
 * compiles the app's sass files from the src/ folder to the dist/ folder.
 */
gulp.task("sass:app", function(){
    return gulp.src(appFiles, {base: "src"})
        .pipe(sourcemaps.init())
        .pipe(sass(uncompressed).on("error", sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 3 versions','ie 10','ie 11','> 5%','Firefox > 35','Chrome > 35'],
            cascade: false
        }))
        .pipe(sourcemaps.write(".", {sourceRoot: "/src"}))
        .pipe(gulp.dest("dist"));
});

/**
 * compiles the icons' sass file from the src/icons folder to the dist/clarity-ui folder.
 */
gulp.task("sass:icons", function(){
    var prod = process.env.NODE_ENV==="prod";

    return gulp.src(iconFiles, {base: "src"})
    // Sourcemaps only for development
        .pipe(prod ? util.noop() : sourcemaps.init())
        .pipe(sass(prod ? compressed : uncompressed).on("error", sass.logError))
        .pipe(prod ? util.noop() : sourcemaps.write({includeContent: false}))
        .pipe(prod ? util.noop() : sourcemaps.init({loadMaps: true}))
        .pipe(autoprefixer({
            browsers: ['last 3 versions','ie 10','ie 11','> 5%','Firefox > 35','Chrome > 35'],
            cascade: false
        }))
        .pipe(concat(prod ? 'clarity-icons.min.css' : 'clarity-icons.css'))
        .pipe(prod ? util.noop() : sourcemaps.write(".", {sourceRoot: "/src"}))
        .pipe(gulp.dest(prod ? "dist/bundles": "dist"));
});

/**
 * compiles the demos' sass files from the src/ folder to the dist/ folder.
 */
gulp.task("sass:demos", function(){
    return gulp.src(demosFiles, {base: "src/clarity"})
        .pipe(sass(compressed).on("error", sass.logError))
        .pipe(autoprefixer({
    			browsers: ['last 3 versions','ie 10','ie 11','> 5%','Firefox > 35','Chrome > 35'],
    			cascade: false
    		}))
        .pipe(gulp.dest("tmp/clarity-demos"));
});

/**
 * Moves images to dist
 */
gulp.task("images", function(){
    return gulp.src(assets)
        .pipe(gulp.dest("dist/img"));
});

/**
 * compiles all sass files, puts them in the tmp/ folder for other build tasks,
 * and puts the deliverable css in the dist/ folder.
 */
gulp.task("sass", ["sass:static", "sass:clarity", "sass:app", "sass:demos", "sass:icons",  "images"], function(){});

/**
 * watches for changes in scss files to retrigger sass compilation, and subsequently compiles relevant ts files
 */
gulp.task("sass:watch", function () {

    gulp.watch(clarityStaticFiles, ["sass:static"]);

    gulp.watch(appFiles, ["sass:app"]);

    gulp.watch(iconFiles, ["sass:icons"]);

    gulp.watch(clarityFiles, function(){
        return runSequence("sass:clarity", "typescript:clarity");
    });

    gulp.watch(demosFiles, function(){
        return runSequence("sass:demos", "typescript:demos");
    });

});

/**
 * Checks Clarity css stats and outputs a json file in dist.
 */
gulp.task('stylestats', function () {
  gulp.src('./dist/clarity-ui.css')
    .pipe(stylestats({
      type: 'json',
      outfile: true
    }))
    .pipe(gulp.dest('./dist/'));
});
