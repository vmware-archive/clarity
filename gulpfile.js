var Builder = require("systemjs-builder");
var concat = require("gulp-concat");
var gulp = require('gulp');

gulp.task('concat', function() {
    return gulp.src([
            'node_modules/core-js/client/shim.min.js',
            'node_modules/zone.js/dist/zone.min.js',
            'node_modules/reflect-metadata/Reflect.js',
            'node_modules/systemjs/dist/system.src.js'
        ])
        .pipe(concat("vendor.js"))
        .pipe(gulp.dest('js'));
});

gulp.task('bundle', function(){
    var buildOpts = { minify: true, mangle: false, normalize: true };
    var builder = new Builder();
    // map tells the System loader where to look for things
    var map = {
        'app':                                  'app',
        'clarity-angular':                      'node_modules/clarity-angular',
        'clarity-demos':                        'node_modules/clarity-demos',
        'rxjs':                                 'node_modules/rxjs',
        '@angular/core':                        'node_modules/@angular/core/bundles/core.umd.js',
        '@angular/common':                      'node_modules/@angular/common/bundles/common.umd.js',
        '@angular/compiler':                    'node_modules/@angular/compiler/bundles/compiler.umd.js',
        '@angular/platform-browser':            'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic':    'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/router':                      'node_modules/@angular/router/bundles/router.umd.js',
        '@angular/forms':                       'node_modules/@angular/forms/bundles/forms.umd.js'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app':                          { defaultExtension: 'js' },
        'clarity-angular':              { main: "index.js", defaultExtension: 'js' },
        'clarity-demos':                { defaultExtension: "js" },
        'rxjs':                         { defaultExtension: 'js' }
    };

    builder.config({
        map: map,
        packages: packages
    });

    return builder.bundle("app/**/*.js", 'js/app.min.js', buildOpts)
        .catch(function(err) {
            console.error(err);
        });
});

gulp.task('build', ['preprocess'], function (gulpCallBack){
    var spawn = require('child_process').spawn;
    var jekyll = spawn('jekyll', ['build'], { stdio: 'inherit' });

    jekyll.on('exit', function(code) {
        gulpCallBack(code === 0 ? null : 'ERROR: Jekyll process exited with code: '+code);
    });
});

gulp.task('serve', ['preprocess'], function (gulpCallBack){
    var spawn = require('child_process').spawn;
    var jekyll = spawn('jekyll', ['serve'], { stdio: 'inherit' });

    jekyll.on('exit', function(code) {
        gulpCallBack(code === 0 ? null : 'ERROR: Jekyll process exited with code: '+code);
    });
});

gulp.task("preprocess", ['concat', 'bundle'], function(){});

gulp.task("default", ['serve'], function(){});
