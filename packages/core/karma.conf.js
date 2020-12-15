const path = require('path');
const glob = require('glob');

module.exports = config => {
  config.set({
    frameworks: ['jasmine', 'esm'],
    plugins: [
      require('@open-wc/karma-esm'),
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
    ],
    client: { clearContext: false },
    files: [
      ...glob.sync('dist/core/**/!(test-dropdown.element).spec.js').map(f => ({ pattern: f, type: 'module' })),
      'node_modules/normalize.css/normalize.css',
      'dist/core/global.min.css',
      'node_modules/@cds/city/css/bundles/default.min.css',
    ],
    esm: {
      coverage: true,
      importMap: './import-map.importmap',
      coverageExclude: ['dist/core/**/*.spec.js', 'dist/internal/css-vars/*.js'],
    },
    colors: true,
    browsers: ['ChromeHeadlessNoSandbox'],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'Chrome',
        flags: [
          '--headless',
          '--disable-gpu',
          '--remote-debugging-port=9222',
          '--no-sandbox', //default karma-esm configuration
          '--disable-setuid-sandbox', //default karma-esm configuration
          '--enable-experimental-web-platform-features', // necessary when using importMap option
        ],
      },
    },
    singleRun: true,
    restartOnFileChange: true,
    autoWatch: false,
    concurrency: Infinity,
    reporters: ['dots', 'coverage-istanbul'],
    coverageIstanbulReporter: {
      dir: '../../reports/coverage/core',
      reports: ['html', 'lcovonly'],
      combineBrowserReports: true,
      skipFilesWithNoCoverage: true,
      thresholds: {
        statements: 90,
        lines: 90,
        branches: 89,
        functions: 90,
      },
    },
  });
  return config;
};
