/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var concat = require("gulp-concat");
var util = require('gulp-util');
var autoprefixer = require('gulp-autoprefixer');
var sass = require("gulp-sass");
var stylestats = require('gulp-stylestats');
var preprocess = require('gulp-preprocess');
var util = require('gulp-util');

var compressed = { outputStyle: "compressed" };
var uncompressed = { sourceComments: 'map', errLogToConsole: true, sourceMap: 'sass' };

var clarityStaticFiles = [
    "src/clarity-angular/utils/*.clarity.scss",
    "src/clarity-angular/**/*.clarity.scss",
    "src/clarity-angular/main.scss"
];

var clarityFiles = [
    "src/clarity-angular/**/*.scss",
    "!src/clarity-angular/**/*.clarity.scss"
];

var appFiles =  "src/app/**/*.scss";

var iconFiles = "src/clarity-icons/**/*.scss";

/*
 * Adds the current clarity version to generated css files
 * Depends on this being in the *.scss files: \/* @echo VERSION *\/
 * NOTE: for this to work we must generate a loud comment -> /*!
 */
// var env = require('gulp-env');
// var pjson = require('../../package.json'); // Grab the projects package.json w/ version info
// env.set({BUILD_VERSION: pjson.version});
var VERSION = `
/*!
 * Clarity v${util.env.version} | MIT license | https://github.com/vmware/clarity
 */
`;
// var VERSION = "/*! \n\s*\n\\s*Clarity v" + process.env.BUILD_VERSION + " | MIT license | https://github.com/vmware/clarity \n\\s*/";

var SUPPORTED_BROWSERS = ['last 3 versions','ie 10','ie 11','> 5%','Firefox > 35','Chrome > 35'];
/**
 * compiles the .clarity.sass files from the src/ folder to create the bundled clarity css
 * and its sourcemap in the dist/ folder
 */
gulp.task("sass:static", function(){
    var prod = process.env.NODE_ENV==="prod";
    if (process.env.TESTING) {
        SUPPORTED_BROWSERS.push('safari >= 4');
    }

    return gulp.src(["src/clarity-angular/main.scss"], {base: "src"})
        // Sourcemaps only for development
        .pipe(prod ? util.noop() : sourcemaps.init())
        .pipe(preprocess({context: {VERSION: VERSION}}))
        .pipe(sass(prod ? compressed : uncompressed).on("error", sass.logError))
        .pipe(prod ? util.noop() : sourcemaps.write({includeContent: false}))
        .pipe(prod ? util.noop() : sourcemaps.init({loadMaps: true}))
        .pipe(autoprefixer({
                browsers: SUPPORTED_BROWSERS,
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
        .pipe(gulp.dest("dist/clarity"));
});

/**
 * compiles the app's sass files from the src/ folder to the dist/ folder.
 */
gulp.task("sass:app", function(){
    return gulp.src(appFiles, {base: "src/app"})
        .pipe(sourcemaps.init())
        .pipe(sass(uncompressed).on("error", sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 3 versions','ie 10','ie 11','> 5%','Firefox > 35','Chrome > 35'],
            cascade: false
        }))
        .pipe(sourcemaps.write(".", {sourceRoot: "/src"}))
        .pipe(gulp.dest("dist/app"));
});

/**
 * compiles the icons' sass file from the src/clarity-icons folder to the dist/clarity-ui folder.
 */
gulp.task("sass:icons", function(){
    var prod = process.env.NODE_ENV==="prod";

    return gulp.src(iconFiles, {base: "src"})
    // Sourcemaps only for development
        .pipe(prod ? util.noop() : sourcemaps.init())
        .pipe(preprocess({context: {VERSION: VERSION}}))
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
 * compiles all sass files, puts them in the tmp/ folder for other build tasks,
 * and puts the deliverable css in the dist/ folder.
 */
gulp.task("sass", ["sass:static", "sass:clarity", "sass:app", "sass:icons"], function(){});

/**
 * watches for changes in scss files to retrigger sass compilation, and subsequently compiles relevant ts files
 */
gulp.task("sass:watch", function () {

    gulp.watch(clarityStaticFiles, ["sass:static"]);

    gulp.watch(appFiles, ["sass:app"]);

    gulp.watch(iconFiles, ["sass:icons"]);

    gulp.watch(clarityFiles,["sass:clarity"]);

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
