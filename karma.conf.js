/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

module.exports = function(karma) {
    "use strict";

    karma.set({
        autoWatch: true,
        basePath: "",
        frameworks: ["jasmine", "jasmine-matchers"],
        files: [
            //PrismJS
            { pattern: './node_modules/prismjs/themes/prism.css', included: true, watched: false },
            { pattern: './node_modules/prismjs/prism.js', included: true, watched: false },
            { pattern: './node_modules/prismjs/components/prism-typescript.min.js', included: true, watched: false },

            // Custom Elements
            { pattern: './node_modules/@webcomponents/custom-elements/custom-elements.min.js', included: true, watched: false },

            // Clarity
            { pattern: './dist/clr-ui/clr-ui.min.css', included: true, watched: true },

            // Entry point to all our spec files
            { pattern: "./tests/tests.entry.ts", watched: false }
        ],
        exclude: [ 'node_modules/**/*spec.js' ],
        preprocessors: {
            "./tests/tests.entry.ts": ["webpack"]
        },
        mime: {
            'text/x-typescript': ['ts','tsx']
        },
        reporters: ["mocha"],
        coverageReporter: {
            dir: "tests/coverage/",
            reporters: [
                { type: "text-summary" },
                { type: "json" },
                { type: "html" }
            ]
        },
        browsers: ["Chrome_Headless"],
        browserNoActivityTimeout: 100000,
        port: 9018,
        runnerPort: 9101,
        colors: true,
        logLevel: karma.LOG_INFO,
        singleRun: process.env.TRAVIS? true: false,
        concurrency: Infinity,
        webpackServer: { noInfo: true, quiet: true },
        webpackMiddleware: { noInfo: true, quiet: true },
        webpack: require("./webpack.test.config"),
        customLaunchers: {
            Chrome_Headless: {
                base: 'Chrome',
                flags: ['--headless', '--disable-gpu', '--remote-debugging-port=9222']
            }

        },
        mochaReporter: {
            ignoreSkipped: true
        }
    });
};
