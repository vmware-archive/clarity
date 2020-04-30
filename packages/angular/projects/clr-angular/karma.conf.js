/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['parallel', 'jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-parallel'),
      require('karma-chrome-launcher'),
      require('karma-mocha-reporter'),
      require('karma-notify-reporter'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
    ],
    parallelOptions: {
      executors: process.env.npm_lifecycle_event === 'test:watch' ? 1 : 4,
      shardStrategy: 'round-robin',
    },
    client: {
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
      jasmine: {
        random: false,
      },
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../../../../reports/clr-angular'),
      reports: ['html', 'lcovonly', 'cobertura'],
      fixWebpackSourcePaths: true,
      thresholds: {
        statements: 90,
        lines: 90,
        branches: 80, // goal to increase this to 90%
        functions: 90,
      },
    },
    mochaReporter: {
      ignoreSkipped: true,
    },
    reporters: ['mocha', 'notify'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_LOG,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: false,
    restartOnFileChange: true,
  });
};
