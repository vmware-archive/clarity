/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'karma-typescript'],
    plugins: [require('karma-jasmine'), require('karma-typescript'), require('karma-chrome-launcher')],
    files: ['src/**/*.ts', 'typings.d.ts'],
    preprocessors: {
      'src/**/*.ts': ['karma-typescript'],
    },
    client: {
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
    },
    karmaTypescriptConfig: {
      coverageOptions: {
        fixWebpackSourcePaths: true,
        thresholds: {
          statements: 90,
          lines: 90,
          branches: 90,
          functions: 90,
        },
      },
      reports: {
        html: '../../reports/clr-icons/html',
      },
    },
    reporters: ['progress', 'karma-typescript'],
    colors: true,
    singleRun: true,
    browsers: ['ChromeHeadless'],
  });
};
