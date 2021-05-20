/**
 * Storybook Build
 *
 * This is the rollup build for building Storybook
 * Storybook builds with node require instead of esm
 */

const image = require('@rollup/plugin-image');
const alias = require('@rollup/plugin-alias');
const json = require('@rollup/plugin-json');
const typescript = require('@rollup/plugin-typescript');
const nodeResolve = require('@rollup/plugin-node-resolve');
const styles = require('rollup-plugin-styles');
const path = require('path');
const terser = require('rollup-plugin-terser');

module.exports = {
  getConfig(config) {
    // remove default plugins not needed
    config.plugins = [
      ...config.plugins.filter(
        p =>
          p.name !== '@web/rollup-plugin-polyfills-loader' &&
          p.name !== 'babel' &&
          p.name !== 'node-resolve' &&
          p.name !== 'terser'
      ),
    ];
    config.output.format = 'es';

    config.plugins = [
      nodeResolve.default(),
      alias({ entries: [{ find: '@cds/core', replacement: path.resolve(path.resolve(__dirname), './dist/core') }] }),
      image(),
      json(),
      styles(),
      typescript({ tsconfig: path.resolve(path.resolve(__dirname), './tsconfig.storybook.json') }),
      ...config.plugins,
      terser.terser({ ecma: 2020, warnings: true, module: true, compress: { unsafe: true, passes: 2 } }),
    ];

    return config;
  },
};
