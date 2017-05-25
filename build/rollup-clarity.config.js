import buble from 'rollup-plugin-buble';

export default {
    entry: 'tmp/index.js',
    dest: 'dist/bundles/clarity-angular.umd.js',
    format: 'umd',
    moduleName: 'ng.clarity',
    external: [
        '@angular/animations',
        '@angular/core',
        '@angular/common',
        '@angular/forms',
        '@angular/platform-browser',
        'rxjs',
        'rxjs/BehaviorSubject',
        'rxjs/Subject',
        'rxjs/Observable'
    ],
    globals: {
        '@angular/animations' : 'ng.animations',
        '@angular/core' : 'ng.core',
        '@angular/common' : 'ng.common',
        '@angular/forms' : 'ng.forms',
        '@angular/platform-browser' : 'ng.platformBrowser',
        'rxjs' : 'Rx',
        'rxjs/BehaviorSubject' : 'Rx/BehaviorSubject',
        'rxjs/Subject' : 'Rx/Subject',
        'rxjs/Observable' : 'Rx/Observable'
    },
    plugins: [
        buble()
    ],
    onwarn: function (message) {
        // Suppress ignore-able warning messages. See: https://github.com/rollup/rollup/issues/794
        if (/The 'this' keyword is equivalent to 'undefined' at the top level of an ES module, and has been rewritten./.test(message)) {
            return;
        }
        console.error(message);
    }
};
