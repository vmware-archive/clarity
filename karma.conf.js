/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

const browsers = {
  chrome_latest_win_10: {
    base: 'SauceLabs',
    browserName: 'chrome',
    version: 'latest',
    platform: 'Windows 10',
  },
  firefox_latest_win_10: {
    base: 'SauceLabs',
    browserName: 'firefox',
    version: 'latest',
    platform: 'Windows 10',
  },
  safari_latest_osx_11: {
    base: 'SauceLabs',
    browserName: 'safari',
    version: 'latest',
    platform: 'macOS 10.13',
  },
  ie_11_win_8_1: {
    base: 'SauceLabs',
    browserName: 'internet explorer',
    version: 'latest',
    platform: 'Windows 8.1',
  },
  edge_latest_win_10: {
    base: 'SauceLabs',
    browserName: 'MicrosoftEdge',
    version: 'latest',
    platform: 'Windows 10',
  },
};

module.exports = function(karma) {
  'use strict';

  const config = {
    autoWatch: true,
    basePath: '',
    frameworks: ['jasmine', 'jasmine-matchers', '@angular-devkit/build-angular'],
    plugins: [
      // Frameworks
      require('karma-jasmine'),
      require('karma-jasmine-matchers'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-scss-preprocessor'),
      // Reporters
      require('karma-jasmine-html-reporter'),
      require('karma-htmlfile-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-mocha-reporter'),
      require('karma-notify-reporter'),
      // Launchers
      require('karma-chrome-launcher'),
      require('karma-edge-launcher'),
      require('karma-ie-launcher'),
      require('karma-firefox-launcher'),
      require('karma-safari-launcher'),
      require('karma-sauce-launcher'),
    ],
    files: [
      // Custom Elements
      {
        pattern: './node_modules/@webcomponents/custom-elements/custom-elements.min.js',
        included: true,
        watched: false,
      },

      // Clarity UI
      {
        pattern: './src/clr-angular/main.scss',
        included: true,
        watched: true,
      },

      // Entry point to all our spec files
      { pattern: './tests/tests.entry.ts', watched: false },
    ],
    preprocessors: {
      'src/clr-angular/**/*.scss': ['scss'],
    },
    client: {
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
    },
    reporters: ['mocha', 'coverage-istanbul', 'html', 'notify'],
    htmlReporter: {
      outputFile: './reports/unit/index.html',
      useLegacyStyle: true,
      useCompactStyle: true,
    },
    scssPreprocessor: {
      options: {
        sourceMap: true,
        includePaths: ['node_modules'],
      },
    },
    coverageIstanbulReporter: {
      dir: './reports/coverage/',
      fixWebpackSourcePaths: true,
      reports: ['html', 'lcovonly', 'cobertura'],
    },
    browsers: [
      // ChromeHeadless is the default, but you can toggle this list in dev. Always reset back to just ChromeHeadless.
      'ChromeHeadless',
      // "FirefoxHeadless",
      // "Safari",
      // "Edge",
      // "IE",
    ],
    browserNoActivityTimeout: 100000,
    port: 9090,
    runnerPort: 9191,
    colors: true,
    logLevel: karma.LOG_INFO,
    singleRun: process.env.TRAVIS ? true : false,
    concurrency: Infinity,
    captureTimeout: 120000,
    customLaunchers: {
      ChromeHeadless: {
        base: 'Chrome',
        flags: ['--headless', '--disable-gpu', '--remote-debugging-port=9222'],
      },
    },
    mochaReporter: {
      ignoreSkipped: true,
    },
  };

  // We'll use saucelabs for testing if and only if the access key is set in ENV, and CI flag is set.
  // We'll modify the config as necessary.
  if (process.env.SAUCE_ACCESS_KEY && process.env.TRAVIS === 'true') {
    config.reporters.push('saucelabs');
    config.browsers = [
      'chrome_latest_win_10',
      'firefox_latest_win_10',
      // "safari_latest_osx_11",
      // "ie_11_win_8_1",
      // "edge_latest_win_10",
    ];
    config.customLaunchers = browsers;
    config.sauceLabs = {
      testName: 'Unit Tests',
      startConnect: true,
      extendedDebugging: true,
      // If you need to debug, here are some options
      // connectOptions: {
      //     verbose: true,
      //     logfile: './sauceconnect.log'
      // }
    };
  }

  karma.set(config);
};
