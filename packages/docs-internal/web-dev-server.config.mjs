import { importMapsPlugin } from '@web/dev-server-import-maps';
import { hmrPlugin, presets } from '@open-wc/dev-server-hmr';

/** Use Hot Module replacement by adding --hmr to the start command */
const hmr = process.argv.includes('--hmr');

export default /** @type {import('@web/dev-server').DevServerConfig} */ ({
  nodeResolve: true,
  open: './',
  watch: !hmr,
  plugins: [
    importMapsPlugin({
      inject: {
        importMap: {
          imports: {
            tslib: '/node_modules/tslib/tslib.es6.js',
            lit: '/node_modules/lit/index.js',
            'lit/decorators/custom-element.js': '/node_modules/lit/decorators/custom-element.js',
            'lit/decorators/property.js': '/node_modules/lit/decorators/property.js',
            'lib/custom-elements.json': '/dist/lib/custom-elements.json',
            'lib/global.min.css': '/dist/lib/global.min.css',
            'lib/component-status/register.js': '/dist/lib/component-status/register.js',
          },
        },
      },
    }),
    /** Use Hot Module Replacement by uncommenting. Requires @open-wc/dev-server-hmr plugin */
    hmr &&
      hmrPlugin({
        include: ['src/**/*'],
        exclude: ['**/*/node_modules/**/*'],
        presets: [presets.lit],
      }),
  ],
});
