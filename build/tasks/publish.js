var gulp = require("gulp");
var absoluteImports = require("../absolute-imports");
var rename = require('gulp-rename');
var preprocess = require('gulp-preprocess');
var util = require('gulp-util');
var es = require('event-stream');

// All packages share the same version number.
var VERSION = util.env.version;
var npmFolder = "dist/npm/";


/**
 * Preparing the clarity-icons package
 */

gulp.task("npm:icons:deliverables", function () {
    return gulp.src([
        "dist/bundles/clarity-icons.min.js",
        "dist/bundles/clarity-icons.min.css"
    ]).pipe(gulp.dest(npmFolder + "/clarity-icons"));
});

/**
 * We publish icons' sources just for information.
 */
gulp.task("npm:icons:sources", function () {
    return gulp.src([
        "src/icons/**/*.scss",
        "src/icons/**/*.ts",
    ])
    .pipe(gulp.dest(npmFolder + "/clarity-icons/src"));
});

/**
 * We insert the version number in the correct package.json
 * and copy it to the root of our package.
 */
gulp.task("npm:icons:package", function () {
    return gulp.src("build/npm/clarity-icons.json")
        .pipe(preprocess({context: {VERSION: VERSION}, extension: "js"}))
        .pipe(rename("package.json"))
        .pipe(gulp.dest(npmFolder + "/clarity-icons"));
});

gulp.task("npm:icons:readme", function () {
    return gulp.src("build/npm/clarity-icons-README.md")
        .pipe(rename("README.md"))
        .pipe(gulp.dest(npmFolder + "/clarity-icons"));
});

gulp.task("npm:icons", ["npm:icons:deliverables", "npm:icons:sources", "npm:icons:package", "npm:icons:readme"], function () {});

/**
 * Preparing the clarity-ui package
 */

/**
 * The only deliverable for clarity-ui is the minified CSS bundle.
 */
gulp.task("npm:ui:deliverables", function () {
    return gulp.src("dist/bundles/clarity-ui.min.css")

        .pipe(gulp.dest(npmFolder + "/clarity-ui"));
});

/**
 * We publish SCSS sources so users can make changes to them and compile on their own.
 */
gulp.task("npm:ui:sources", function () {
    return gulp.src([
        "src/clarity/main.scss",
        "src/clarity/**/*.clarity.scss",
        "!src/clarity/**/demo/**"
    ])
        .pipe(gulp.dest(npmFolder + "/clarity-ui/src"));
});

/**
 * We insert the version number in the correct package.json
 * and copy it to the root of our package.
 */
gulp.task("npm:ui:package", function () {
    return gulp.src("build/npm/clarity-ui.json")
        .pipe(preprocess({context: {VERSION: VERSION}, extension: "js"}))
        .pipe(rename("package.json"))
        .pipe(gulp.dest(npmFolder + "/clarity-ui"));
});

gulp.task("npm:ui:readme", function () {
    return gulp.src("build/npm/clarity-ui-README.md")
        .pipe(rename("README.md"))
        .pipe(gulp.dest(npmFolder + "/clarity-ui"));
});

gulp.task("npm:ui", ["npm:ui:deliverables", "npm:ui:sources", "npm:ui:package", "npm:ui:readme"], function () {});

/**
 * Preparing the clarity-angular package
 */

/**
 * The deliverables for clarity-angular are:
 *   - the compiled js files in commonJS format
 *   - the minified JS bundle
 *   - the Typescript declaration files for our components
 */
gulp.task("npm:angular:deliverables", function () {
    // We have to use 2 streams here because we want the angular 1 bundle to preserve its path.
    return es.merge(
        gulp.src([
            "dist/bundles/clarity-angular.min.js",
            "dist/bundles/angular1/clarity-angular1.min.js"
        ], {base: "dist/bundles/"}),
        gulp.src([
            "tmp/clarity-angular/**/*.js",
            "tmp/clarity-angular/**/*.d.ts"
        ])
    ).pipe(gulp.dest(npmFolder + "/clarity-angular"));
});

/**
 * We publish our components' sources just for information.
 */
gulp.task("npm:angular:sources", function () {
    return gulp.src([
        "src/clarity/**/*.ts",
        "!src/clarity/**/*.spec.ts",
        "!src/clarity/**/*.mock.ts",
        "src/clarity/**/*.html",
        "src/clarity/**/*.scss",
        "!src/clarity/**/*.clarity.scss",
        "!src/clarity/**/demo/**"
    ])
        .pipe(gulp.dest(npmFolder + "/clarity-angular/src/"));
});

/**
 * We insert the version number in the correct package.json
 * and copy it to the root of our package.
 */
gulp.task("npm:angular:package", function () {
    return gulp.src("build/npm/clarity-angular.json")
        .pipe(preprocess({context: {VERSION: VERSION}, extension: "js"}))
        .pipe(rename("package.json"))
        .pipe(gulp.dest(npmFolder + "/clarity-angular"));
});

gulp.task("npm:angular:readme", function () {
    return gulp.src("build/npm/clarity-angular-README.md")
        .pipe(rename("README.md"))
        .pipe(gulp.dest(npmFolder + "/clarity-angular"));
});

gulp.task("npm:angular", ["npm:angular:deliverables", "npm:angular:sources", "npm:angular:package", "npm:angular:readme"], function () {});

/**
 * Preparing the clarity-demos package
 */

/**
 * The deliverables for clarity-demos are:
 *   - the CONTRIBUTING.md and README.md
 *   - the compiled js files in commonJS format
 *   - the minified JS bundle
 *   - the Typescript declaration files for our components
 */
gulp.task("npm:demos:deliverables", function () {
    return gulp.src([
        "dist/bundles/clarity-demos.min.js",
        "tmp/clarity-demos/**/*.js",
        "tmp/clarity-demos/**/*.d.ts"
    ])
        .pipe(gulp.dest(npmFolder + "/clarity-demos"));
});

/**
 * We publish our demo components' sources just for information.
 */

gulp.task("npm:demos:sources", function () {
    return gulp.src([
        "src/clarity/**/demo/**/*.ts",
        "src/clarity/**/demo/**/*.scss",
        "src/clarity/**/demo/**/*.html"
    ], {base: "src/clarity"})
        .pipe(absoluteImports({
            parentOnly: true,
            prefix: "clarity-angular"
        }))
        .pipe(gulp.dest(npmFolder + "/clarity-demos/src/"));
});

/**
 * We insert the version number in the correct package.json
 * and copy it to the root of our package.
 */
gulp.task("npm:demos:package", function () {
    return gulp.src("build/npm/clarity-demos.json")
        .pipe(preprocess({context: {VERSION: VERSION}, extension: "js"}))
        .pipe(rename("package.json"))
        .pipe(gulp.dest(npmFolder + "/clarity-demos"));
});

gulp.task("npm:demos:readme", function () {
    return gulp.src("build/npm/clarity-demos-README.md")
        .pipe(rename("README.md"))
        .pipe(gulp.dest(npmFolder + "/clarity-demos"));
});

gulp.task("npm:demos", ["npm:demos:deliverables", "npm:demos:sources", "npm:demos:package", "npm:demos:readme"], function () {});

gulp.task("npm:all", ["npm:icons", "npm:ui", "npm:angular", "npm:demos"], function () {});