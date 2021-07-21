/**
 * Web Test Runner
 *
 * This configures Core unit tests to run using @web/test-runner
 */
import { playwrightLauncher } from '@web/test-runner-playwright';
import { esbuildPlugin } from '@web/dev-server-esbuild';
import { fromRollup } from '@web/dev-server-rollup';
import alias from '@rollup/plugin-alias';
import { voiceOverPlugin } from 'web-test-runner-voiceover';
import baseConfig from './web-test-runner.config.mjs';

// alias mapping used rather than import maps due to missing support in Safari/Webkit
const rollupAlias = fromRollup(alias);

export default /** @type {import("@web/test-runner").TestRunnerConfig} */ ({
  ...baseConfig,
  concurrency: 1,
  concurrentBrowsers: 1,
  files: ['./src/**/*.a11y.ts'],
  testsFinishTimeout: 60000 * 5,
  browsers: [playwrightLauncher({ product: 'webkit', launchOptions: { headless: false } })],
  plugins: [
    // we don't use import maps due to Safari
    rollupAlias({
      entries: [
        { find: '@cds/core/tokens/tokens.json', replacement: `${process.cwd()}/dist/core/tokens/tokens.json` },
        { find: /^@cds\/core\/([^.]+)$/, replacement: `${process.cwd()}/dist/core/$1/index.js` },
        { find: /^@cds\/core\/(.+)\/register.js$/, replacement: `${process.cwd()}/dist/core/$1/register.js` },
        { find: /^@cds\/core\/(.+)\.js$/, replacement: `${process.cwd()}/dist/core/$1.js` },
        { find: /^(.*)\.ts$/, replacement: `${process.cwd()}/$1.js` },
        { find: '.js', replacement: `.ts` },
      ],
    }),
    voiceOverPlugin(),
    a11ySnapshotPlugin(),
    esbuildPlugin({ ts: true, json: true, target: 'auto', sourceMap: true }),
  ],
});

function a11ySnapshotPlugin() {
  return {
    name: 'a11y',
    async executeCommand({ command, payload, session }) {
      if (command === 'a11y:snapshot' && session.browser.type === 'playwright') {
        const page = session.browser.getPage(session.id);
        const root = await page.$(payload.root);
        const snapshot = await page.accessibility.snapshot({ interestingOnly: false, root });
        return snapshot;
      }
    },
  };
}
