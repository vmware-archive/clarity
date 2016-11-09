var gulp = require("gulp");
var Builder = require("systemjs-builder");
var zip = require('gulp-zip');


/**
 * Bundles the compiled icon js files into define-clarity-icons.min.js
 */
gulp.task("bundle:icons", ["typescript:icons"], function() {
    var buildOpts = { minify: true, mangle: false, normalize: true };

    var builder = new Builder("tmp/");
    builder.config({
        packages: {
            'icons': { defaultExtension: 'js' }
        }
    });

    return builder.bundle("icons/**/*.js", "dist/bundles/define-clarity-icons.min.js", buildOpts)
        .catch(function(err) {
            console.error(err);
        });


});

/**
 * Bundles the compiled icon js files into self-executing clarity-icons.min.js,
 * which will be used for publishing clarity icons as an independent package
 */
gulp.task("bundle:icons:sfx", ["typescript:icons"], function() {

    var buildOpts = { minify: true, mangle: false, normalize: true };

    var builder = new Builder("tmp/");
    builder.config({
        packages: {
            'icons': { defaultExtension: 'js' }
        }
    });

    return builder.buildStatic("icons/**/*.js", "dist/bundles/clarity-icons.min.js", buildOpts)
        .catch(function(err) {
            console.error(err);
        });

});

/**
 * Bundles the compiled js files into clarity.min.js
 */
gulp.task("bundle:clarity:js", ["typescript:clarity"], function() {
    var buildOpts = { minify: true, mangle: false, normalize: true };

    var builder = new Builder("tmp/");
    builder.config({
        meta: {
            "@angular/*": {
                build: false
            },
            "rxjs": {
                build: false
            }
        },
        packages: {
            'clarity-angular': { main: 'index.js', defaultExtension: 'js' }
        }
    });

    return builder.bundle("clarity-angular/**/*.js", "dist/bundles/clarity-angular.min.js", buildOpts)
        .catch(function(err) {
            console.error(err);
        });
});

/**
 * Specific ng1-compatible bundle for Angular 1 applications. Do not publicize.
 */
gulp.task("bundle:clarity:js:ng1", ["typescript:clarity"], function() {
    var buildOpts = { minify: true, mangle: false, runtime: false };

    var packages = {
        'tmp/clarity-angular':  { defaultExtension: 'js' },
        'rxjs':                 { defaultExtension: 'js' }
    };

    var builder = new Builder();
    builder.config({
        // We bundle both Angular and RxJS with us.
        map: {
            'rxjs':                                 'node_modules/rxjs',
            '@angular/core':                        'node_modules/@angular/core/bundles/core.umd.js',
            '@angular/common':                      'node_modules/@angular/common/bundles/common.umd.js',
            '@angular/compiler':                    'node_modules/@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser':            'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic':    'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/router':                      'node_modules/@angular/router/bundles/router.umd.js',
            '@angular/forms':                       'node_modules/@angular/forms/bundles/forms.umd.js'
        },
        packages: packages
    });

    return builder.buildStatic("tmp/clarity-angular/**/*.js", "dist/bundles/angular1/clarity-angular1.min.js", buildOpts)
        .catch(function(err) {
            console.error(err);
        });
});

/**
 * Bundles the compiled js files into clarity-demos.min.js
 */
gulp.task("bundle:demos:js", ["typescript:demos"], function() {
    var buildOpts = { minify: true, mangle: false, normalize: true };

    var builder = new Builder("tmp/");
    builder.config({
        meta: {
            "@angular/*": {
                build: false
            },
            "clarity-angular/*": {
                build: false
            }
        },
        packages: {
            "clarity-demos": {
                defaultExtension: "js"
            }
        }
    });

    return builder.bundle("clarity-demos/**/demo/*.js", "dist/bundles/clarity-demos.min.js", buildOpts)
        .catch(function(err) {
            console.error(err);
        });
});

/**
 * Compresses our deliverables and definition files for third-party devs.
 */
gulp.task("bundle:zip", ["bundle:clarity:js", "bundle:demos:js", "sass:static"], function() {
    return gulp.src([
        "dist/bundles/clarity-ui.min.css",
        "dist/bundles/clarity-angular.min.js",
        "dist/bundles/clarity-demos.min.js",
        "tmp/definitions/**/*.d.ts"
    ])
        .pipe(zip('clarity-angular.dev.zip'))
        .pipe(gulp.dest("dist/bundles/"));
});

/**
 * Bundles all js files into a single minified one, then puts it in the bundles/ folder.
 * Also creates a zip with our css and js deliverables and our definition files
 * for third-party devs, then adds it to the bundles/ folder.
 */
gulp.task("bundle", ["bundle:icons", "bundle:icons:sfx", "bundle:clarity:js", "bundle:demos:js", "bundle:zip"], function(){});

/**
 * Watches for changes in the transpiled js files to rebundle them
 */
gulp.task("bundle:watch", function () {

    var iconsSources = ["src/icons/**/*.ts"];

    var claritySources = [
        "src/clarity/**/*.ts",
        "!src/clarity/**/*.spec.ts",
        "!src/clarity/**/*.mock.ts",
        "src/clarity/**/*.html",
        "!src/clarity/**/demo/**",
        "src/**/*.scss",
        "!src/**/*.clarity.scss"
    ];

    var demosSources = ["src/clarity/**/demo/**"];


    gulp.watch(iconsSources, ["bundle:icons", "bundle:icons:sfx"]);
    gulp.watch(claritySources, ["bundle:clarity:js"]);
    gulp.watch(demosSources, ["bundle:demos:js"]);
});
