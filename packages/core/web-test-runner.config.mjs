/**
 * Web Test Runner
 *
 * This configures Core unit tests to run using @web/test-runner
 */

import { playwrightLauncher } from '@web/test-runner-playwright';
import { esbuildPlugin } from '@web/dev-server-esbuild';
import { fromRollup } from '@web/dev-server-rollup';
import { jasmineTestRunnerConfig } from 'web-test-runner-jasmine';
import execute from 'rollup-plugin-shell';
import baseConfig from './web-dev-server.config.mjs';

export default /** @type {import("@web/test-runner").TestRunnerConfig} */ ({
  // uncomment open/manual to debug in browser
  // open: true,
  // manual: true,
  ...jasmineTestRunnerConfig(),
  testFramework: {
    config: {
      styles: ['./dist/core/global.min.css'],
    },
  },
  files: ['./src/**/*.spec.ts'],
  browsers: [playwrightLauncher({ product: 'chromium' })],
  coverageConfig: {
    require: ['ts-node/register'],
    extension: ['.ts'],
    exclude: [
      '**/*.d.ts',
      '**/*.scss.js',
      '**/node_modules/**',
      '**/test/**',
      '**/dist/core/**/index.js',
      '**/dist/core/polyfills/*.js',
      '**/dist/core/**/register.js',
      '**/dist/core/polyfills/*.js',
      '**/dist/core/grid/dropdown.element.js', // temporary
    ],
    report: true,
    reportDir: 'dist/coverage',
    threshold: {
      statements: 90,
      branches: 85,
      functions: 50,
      lines: 90,
    },
  },
  nodeResolve: true,
  dedupe: true,
  plugins: [
    ...baseConfig.plugins,
    esbuildPlugin({ ts: true, json: true, target: 'auto', sourceMap: true }),
    fromRollup(execute)({ commands: [`tsc --noEmit src/**/*.spec.ts src/**/*.spec.*`], hook: 'writeBundle' }),
  ],
});
