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
    files: glob.sync('dist/clr-core/**/*.spec.js').map(f => ({ pattern: f, type: 'module' })),
    basePath: path.resolve(__dirname, '..', '..'),
    esm: {
      coverage: true,
      importMap: 'src/clr-core/import-map.importmap',
      coverageExclude: ['dist/clr-core/**/*.spec.js', 'dist/clr-core/internal/css-vars/*.js'],
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
    reporters: ['progress', 'coverage-istanbul'],
    coverageIstanbulReporter: {
      dir: './reports/coverage/clr-core',
      reports: ['html', 'lcovonly'],
      combineBrowserReports: true,
      skipFilesWithNoCoverage: true,
      thresholds: {
        statements: 90,
        lines: 90,
        branches: 85, // need to get to 90
        functions: 90,
      },
    },
  });
  return config;
};
