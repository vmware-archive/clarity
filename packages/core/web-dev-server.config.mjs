/**
 * Base Web Dev Server
 *
 * All dev hosting env in Core uses @web/dev-server including Storybook, Sandbox and Tests
 */

import { importMapsPlugin } from '@web/dev-server-import-maps';
import { hmrPlugin, presets } from '@open-wc/dev-server-hmr';
// import { fromRollup } from '@web/dev-server-rollup';
// import alias from '@rollup/plugin-alias';

/** Use Hot Module replacement by adding --hmr to the start command */
const hmr = process.argv.includes('--hmr');

// const rollupAlias = fromRollup(alias);

export default /** @type {import('@web/dev-server').DevServerConfig} */ ({
  open: './',
  watch: !hmr,
  nodeResolve: {
    exportConditions: ['development'],
  },
  plugins: [
    // rollupAlias({
    //   entries: [
    //     { find: '@cds/core/tokens/tokens.json', replacement: `${process.cwd()}/dist/core/tokens/tokens.json` },
    //     { find: /^@cds\/core\/([^.]+)$/, replacement: `${process.cwd()}/dist/core/$1/index.js` },
    //     { find: /^@cds\/core\/(.+)\.js$/, replacement: `${process.cwd()}/dist/core/$1.js` },
    //     { find: /^@cds\/core\/(.+)\.css$/, replacement: `${process.cwd()}/dist/core/$1.css` },
    //   ],
    // }),
    importMapsPlugin({
      inject: {
        importMap: {
          imports: {
            'lit/': '/node_modules/lit/',
            lit: '/node_modules/lit/index.js',
            'ramda/': '/node_modules/ramda/',
            ramda: '/node_modules/ramda/es/index.js',
            'tslib/': '/node_modules/tslib/',
            tslib: '/node_modules/tslib/tslib.es6.js',
            '@cds/core/': '/dist/core/',
            '@cds/core': '/dist/core/index.js',
            '@cds/core/polyfills': '/dist/core/polyfills/index.js',
            '@cds/core/accordion': '/dist/core/accordion/index.js',
            '@cds/core/alert': '/dist/core/alert/index.js',
            '@cds/core/badge': '/dist/core/badge/index.js',
            '@cds/core/breadcrumb': '/dist/core/breadcrumb/index.js',
            '@cds/core/button': '/dist/core/button/index.js',
            '@cds/core/button-action': '/dist/core/button-action/index.js',
            '@cds/core/button-expand': '/dist/core/button-expand/index.js',
            '@cds/core/button-handle': '/dist/core/button-handle/index.js',
            '@cds/core/button-inline': '/dist/core/button-inline/index.js',
            '@cds/core/button-sort': '/dist/core/button-sort/index.js',
            '@cds/core/button-split': '/dist/core/button-split/index.js',
            '@cds/core/card': '/dist/core/card/index.js',
            '@cds/core/checkbox': '/dist/core/checkbox/index.js',
            '@cds/core/datalist/index.js': '/dist/core/datalist/index.js',
            '@cds/core/date': '/dist/core/date/index.js',
            '@cds/core/demo': '/dist/core/demo/index.js',
            '@cds/core/divider': '/dist/core/divider/index.js',
            '@cds/core/dropdown': '/dist/core/dropdown/index.js',
            '@cds/core/file': '/dist/core/file/index.js',
            '@cds/core/forms': '/dist/core/forms/index.js',
            '@cds/core/grid': '/dist/core/grid/index.js',
            '@cds/core/icon': '/dist/core/icon/index.js',
            '@cds/core/input': '/dist/core/input/index.js',
            '@cds/core/internal': '/dist/core/internal/index.js',
            '@cds/core/internal-components/close-button': '/dist/core/internal-components/close-button/index.js',
            '@cds/core/internal-components/overlay': '/dist/core/internal-components/overlay/index.js',
            '@cds/core/internal-components/panel': '/dist/core/internal-components/panel/index.js',
            '@cds/core/internal-components/visual-checkbox': '/dist/core/internal-components/visual-checkbox/index.js',
            '@cds/core/internal-components/popup': '/dist/core/internal-components/popup/index.js',
            '@cds/core/modal': '/dist/core/modal/index.js',
            '@cds/core/navigation': '/dist/core/navigation/index.js',
            '@cds/core/pagination': '/dist/core/pagination/index.js',
            '@cds/core/progress-circle': '/dist/core/progress-circle/index.js',
            '@cds/core/radio': '/dist/core/radio/index.js',
            '@cds/core/range': '/dist/core/range/index.js',
            '@cds/core/search': '/dist/core/search/index.js',
            '@cds/core/select': '/dist/core/select/index.js',
            '@cds/core/selection-panels/checkbox': '/dist/core/selection-panels/checkbox/index.js',
            '@cds/core/selection-panels/radio': '/dist/core/selection-panels/index.js',
            '@cds/core/signpost': '/dist/core/signpost/index.js',
            '@cds/core/tag': '/dist/core/tag/index.js',
            '@cds/core/test': '/dist/core/test/index.js',
            '@cds/core/test-dropdown': '/dist/core/test-dropdown/index.js',
            '@cds/core/textarea': '/dist/core/textarea/index.js',
            '@cds/core/time': '/dist/core/time/index.js',
            '@cds/core/tree-view': '/dist/core/tree-view/index.js',
            '@cds/core/toggle': '/dist/core/toggle/index.js',
          },
        },
      },
    }),
    /** Use Hot Module Replacement by uncommenting. Requires @open-wc/dev-server-hmr plugin */
    hmr &&
      hmrPlugin({
        include: ['./dist/core/**/*'],
        exclude: ['**/*/node_modules/**/*', '**/*.json'],
        presets: [presets.lit],
      }),
  ],
});
