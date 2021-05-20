/**
 * Jasmine @web/test-runner plugin
 *
 * This is a custom plugin to run Jasmine with @web/test-runner
 * https://modern-web.dev/docs/test-runner/test-frameworks/write-your-own/
 * https://jasmine.github.io/tutorials/custom_boot
 * https://jasmine.github.io/tutorials/custom_reporter
 */

import { getConfig, sessionStarted, sessionFinished, sessionFailed } from '@web/test-runner-core/browser/session.js';

const jasmine = jasmineRequire.core(window.jasmineRequire);
const global = jasmine.getGlobal();
global.jasmine = jasmine;
const env = jasmine.getEnv();
Object.assign(window, jasmineRequire.interface(jasmine, env));
window.onload = function () {};

const failedSpecs = [];
const allSpecs = [];
const failedImports = [];

env.addReporter({
  jasmineStarted: () => {},
  suiteStarted: () => {},
  specStarted: () => {},
  suiteDone: () => {},
  specDone: result => {
    [...result.passedExpectations, ...result.failedExpectations].forEach(e => {
      allSpecs.push({
        name: e.description,
        passed: e.passed,
      });
    });

    if (result.status !== 'passed' || result.status !== 'incomplete') {
      result.failedExpectations.forEach(e => {
        failedSpecs.push({
          message: `${result.description}: ${e.message}`,
          name: e.description,
          stack: e.stack,
          expected: e.expected,
          actual: e.actual,
        });
      });
    }
  },
  jasmineDone: result => {
    sessionFinished({
      passed: result.overallStatus === 'passed',
      errors: [...failedSpecs, ...failedImports],
      testResults: {
        name: '',
        suites: [],
        tests: allSpecs,
      },
    });
  },
});

(async () => {
  sessionStarted();

  const { testFile, watch, debug, testFrameworkConfig } = await getConfig();

  await import(new URL(testFile, document.baseURI).href).catch(error => {
    failedImports.push({ file: testFile, error: { message: error.message, stack: error.stack } });
  });

  try {
    env.execute();
  } catch (error) {
    console.log(error);
    sessionFailed(error);
    return;
  }
})();
