/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

module.exports = function (config) {

    var node_modules = "node_modules/";
    var dist = "dist/";
    var src = "src/";

    var configuration = {
        basePath: '../',

        frameworks: ['jasmine'],

        files: [
            // Polyfills for older browsers
            'node_modules/core-js/client/shim.min.js',
            'node_modules/web-animations-js/web-animations.min.js',
            'node_modules/@webcomponents/custom-elements/custom-elements.min.js',

            // System.js for module loading
            'node_modules/systemjs/dist/system-polyfills.js',
            'node_modules/systemjs/dist/system.src.js',

            // Reflect and Zone.js
            'node_modules/reflect-metadata/Reflect.js',
            'node_modules/zone.js/dist/zone.js',
            'node_modules/zone.js/dist/long-stack-trace-zone.js',
            'node_modules/zone.js/dist/proxy.js',
            'node_modules/zone.js/dist/sync-test.js',
            'node_modules/zone.js/dist/jasmine-patch.js',
            'node_modules/zone.js/dist/async-test.js',
            'node_modules/zone.js/dist/fake-async-test.js',

            // RxJs.
            { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
            { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },

            // Angular itself and the testing library
            { pattern: 'node_modules/@angular/**/*.js', included: false, watched: false },
            { pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: false },

            // DOMPurify
            { pattern: 'node_modules/dompurify/**/*.js', included: false, watched: false },
            { pattern: 'node_modules/dompurify/**/*.js.map', included: false, watched: false },

            { pattern: 'build/karma-test-shim.js', included: true, watched: false },

            // Clarity's bundles
            //{ pattern: dist + 'bundles/clarity-icons.min.js', included: true, watched: true },
            { pattern: dist + 'bundles/clarity-ui.min.css', included: true, watched: true },
            { pattern: dist + 'bundles/clarity-angular.min.js', included: true, watched: true },

            // Test files
            { pattern: dist + 'tests/**/*.js', included: false, watched: true },
            { pattern: dist + 'clarity-icons/**/*.js', included: false, watched: true },

            // Paths to support debugging with source maps in dev tools
            { pattern: src + '**/*.ts', included: false, watched: true },
            { pattern: dist + '**/*.js.map', included: false, watched: true },

            //PrismJS
            { pattern: 'node_modules/prismjs/themes/prism.css', included: true, watched: false},
            { pattern: 'node_modules/prismjs/prism.js', included: true, watched: false},
            { pattern: 'node_modules/prismjs/components/prism-typescript.min.js', included: true, watched: false}
        ],

        exclude: [ 'node_modules/**/*spec.js' ],
        preprocessors: {},
        reporters: ['progress'],

        // HtmlReporter configuration
        htmlReporter: {
            // Open this file to see results in browser
            outputFile: '_test-output/tests.html',

            // Optional
            pageTitle: 'Unit Tests',
            subPageTitle: __dirname
        },
        browserNoActivityTimeout: 100000,
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ["Chrome_Canary_Headless"],
        singleRun: true,

        customLaunchers: {
            Chrome_Canary_Headless: {
                base: 'ChromeCanary',
                flags: ['--headless', '--disable-gpu', '--remote-debugging-port=9222']
            },
            Chrome_Headless: {
                base: 'Chrome',
                flags: ['--headless', '--disable-gpu', '--remote-debugging-port=9222']
            }

        }
    }

    // Override for Travis CI
    if(process.env.TRAVIS && process.env.TEST_SUITE === "test") {
        configuration.browsers = ['Chrome_Headless'];
    }

    config.set(configuration);
}