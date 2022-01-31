import { playwrightLauncher } from '@web/test-runner-playwright';
import { esbuildPlugin } from '@web/dev-server-esbuild';
import { defaultReporter } from '@web/test-runner';
import { renderPerformancePlugin, bundlePerformancePlugin, performanceReporter } from 'web-test-runner-performance';
import { fromRollup } from '@web/dev-server-rollup';
import alias from '@rollup/plugin-alias';
import baseConfig from './web-test-runner.config.mjs';

const rollupAlias = fromRollup(alias);

const aliases = [
  { find: /^@cds\/core\/([^.]+)$/, replacement: `${process.cwd()}/dist/core/$1/index.js` },
  { find: /^@cds\/core\/(.+)\.js$/, replacement: `${process.cwd()}/dist/core/$1.js` },
  { find: /^@cds\/core\/(.+)\.css$/, replacement: `${process.cwd()}/dist/core/$1.css` },
  { find: /^(.*)\.ts$/, replacement: `${process.cwd()}/$1.js` },
  { find: '.js', replacement: `.ts` },
];

export default /** @type {import("@web/test-runner").TestRunnerConfig} */ ({
  ...baseConfig,
  nodeResolve: true,
  concurrency: 1,
  concurrentBrowsers: 1,
  testFramework: {
    config: {
      defaultTimeoutInterval: 60000,
    },
  },
  files: ['./src/**/*.performance.ts'],
  browsers: [playwrightLauncher({ product: 'chromium', launchOptions: { headless: !!process.env.GITHUB_ACTION } })],
  plugins: [
    rollupAlias({ entries: aliases }),
    esbuildPlugin({ ts: true, json: true, target: 'auto' }),
    renderPerformancePlugin(),
    bundlePerformancePlugin({
      aliases,
      optimize: false,
      // writePath: `./dist/performance`, // uncomment to see bundle output with sourcemaps
      // external: [] // externals are not used so each bundle measured includes all third party dependencies
    }),
  ],
  reporters: [
    defaultReporter({ reportTestResults: true, reportTestProgress: true }),
    performanceReporter({ writePath: `./dist/performance` }),
  ],
});
