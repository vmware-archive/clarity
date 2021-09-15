/**
 * Core Library Build
 *
 * This is the main rollup build for the Core library.
 * The build compiles and optimizes the library for production.
 */

import * as fs from 'fs-extra';
import autoprefixer from 'autoprefixer';
import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import styles from 'rollup-plugin-styles';
import { terser } from 'rollup-plugin-terser';
import {
  packageCheck,
  webComponentAnalyer,
  addComponentEntryPoints,
  createLibraryEntryPoints,
  litSass,
  globalStyles,
  esmCache,
} from './rollup.utils.js';

/**
 * This config defines your entry points for your library.
 *
 * Modules: entrypoints that are not components such as internal utilities
 * Components: entrypoints for each component
 * Styles: entrypoints for any global stylesheets to include with your library
 * Assets: any static assets to be published with your library
 */
const config = {
  baseDir: './src',
  outDir: './dist/lib',
  entryPoints: {
    modules: ['./src', './src/internal'],
    components: ['./src/component-status'],
    styles: ['./src/global.scss'],
    assets: ['./README.md'],
  },
};

const prod = !process.env.ROLLUP_WATCH;
const version = fs.readJsonSync('./npm.json').version;

export default [
  ...globalStyles({
    baseDir: config.baseDir,
    outDir: config.outDir,
    styles: config.entryPoints.styles,
  }),
  {
    external: [/^tslib/, /^@lit/, /^lit/, /^lit-html/, /^lit-element/, /^@cds\/core/],
    input: 'library-entry-points',
    preserveEntrySignatures: 'strict',
    output: {
      preserveModules: true,
      dir: config.outDir,
      format: 'esm',
      sourcemap: prod,
      sourcemapExcludeSources: true,
      minifyInternalExports: prod,
    },
    plugins: [
      createLibraryEntryPoints(config.entryPoints),
      styles({ mode: 'emit', plugins: [autoprefixer] }),
      litSass(),
      nodeResolve(),
      typescript({ tsconfig: './tsconfig.lib.json' }),
      copy({
        copyOnce: true,
        targets: [
          {
            src: './npm.json',
            rename: 'package.json',
            dest: config.outDir,
            transform: p => addComponentEntryPoints(p, config),
          },
          ...config.entryPoints.assets.map(src => ({
            src,
            dest: config.outDir,
          })),
        ],
      }),
      !prod ? esmCache(config.outDir) : [],
      prod ? minifyHTML() : [],
      prod
        ? terser({
            ecma: 2020,
            warnings: true,
            module: true,
            compress: { unsafe: true, passes: 2 },
          })
        : [],
      prod
        ? replace({
            preventAssignment: false,
            values: { PACKAGE_VERSION: version },
          })
        : [],
      prod ? webComponentAnalyer(config.outDir) : [],
      prod ? packageCheck(config.outDir) : [],
      del({
        targets: ['./dist/**/assets', './dist/core/.tsbuildinfo', './dist/_virtual/'],
        hook: 'writeBundle',
      }),
    ],
  },
];
