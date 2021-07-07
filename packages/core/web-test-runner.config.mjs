/**
 * Web Test Runner
 *
 * This configures Core unit tests to run using @web/test-runner
 */

import { playwrightLauncher } from '@web/test-runner-playwright';
import { esbuildPlugin } from '@web/dev-server-esbuild';
import { fromRollup } from '@web/dev-server-rollup';
import execute from 'rollup-plugin-shell';
import baseConfig from './web-dev-server.config.mjs';

export default /** @type {import("@web/test-runner").TestRunnerConfig} */ ({
  // uncomment open/manual to debug in browser
  // open: true,
  // manual: true,
  files: ['./src/**/*.spec.ts'],
  testsFinishTimeout: 20000,
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
      '**/dist/core/**/register.js',
    ],
    report: true,
    reportDir: 'dist/coverage',
    threshold: {
      statements: 90,
      branches: 85,
      functions: 85,
      lines: 90,
    },
  },
  nodeResolve: true,
  plugins: [
    ...baseConfig.plugins,
    esbuildPlugin({ ts: true, json: true, target: 'auto' }),
    fromRollup(execute)({ commands: [`tsc --noEmit src/**/*.spec.ts`], hook: 'writeBundle' }),
  ],
  testRunnerHtml: (testRunnerImport, config) => `<html>
    <head>
      <link href="./node_modules/modern-normalize/modern-normalize.css" rel="stylesheet" />
      <link href="./dist/core/global.min.css" rel="stylesheet" />
      <script>window.process = { env: { NODE_ENV: "development" } }</script>
      <script type="text/javascript" src="./node_modules/jasmine-core/lib/jasmine-core/jasmine.js"></script>
      <script type="module" src="./web-test-runner.jasmine.js"></script>
    </head>
    <body></body>
  </html>`,
});
