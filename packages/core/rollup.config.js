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

const config = {
  baseDir: './src',
  outDir: './dist/core',
  entryPoints: {
    modules: ['./src', './src/internal', './src/test'],
    components: [
      './src/accordion',
      './src/alert',
      './src/badge',
      './src/breadcrumb',
      './src/button',
      './src/card',
      './src/checkbox',
      './src/datalist',
      './src/date',
      './src/divider',
      './src/file',
      './src/forms',
      './src/icon',
      './src/input',
      './src/internal-components/close-button',
      './src/internal-components/overlay',
      './src/internal-components/panel',
      './src/modal',
      './src/navigation',
      './src/pagination',
      './src/password',
      './src/progress-circle',
      './src/radio',
      './src/range',
      './src/search',
      './src/select',
      './src/tag',
      './src/textarea',
      './src/test-dropdown',
      './src/time',
      './src/toggle',
    ],
    styles: [
      { input: './src/styles/global.scss', output: './dist/core/global.css' },
      { input: './dist/core/styles/module.tokens.css', output: './dist/core/styles/module.tokens.css' },
      './src/styles/module.layout.scss',
      './src/styles/module.reset.scss',
      './src/styles/module.shims.scss',
      './src/styles/module.typography.scss',
      './src/styles/theme.dark.scss',
      './src/styles/theme.low-motion.scss',
      './src/list/list.scss',
      './src/table/table.scss',
    ],
    assets: ['./README.md'],
    explicitExports: [
      { input: './icon/shapes/*', output: './icon/shapes/*' },
      { input: './icon/icon.service.js', output: './icon/icon.service.js' },
    ],
  },
};

const prod = !process.env.ROLLUP_WATCH;
const version = fs.readJsonSync('./package.json').version;

export default [
  ...globalStyles({
    baseDir: config.baseDir,
    outDir: config.outDir,
    styles: config.entryPoints.styles,
  }),
  {
    external: [/^tslib/, /^ramda/, /^@lit/, /^lit/, /^lit-html/, /^lit-element/, /^@cds\/core/],
    input: 'library-entry-points',
    treeshake: false,
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
          ...config.entryPoints.assets.map(src => ({ src, dest: config.outDir })),
        ],
      }),
      !prod ? esmCache(config.outDir) : [],
      prod ? minifyHTML() : [],
      prod ? terser({ ecma: 2020, warnings: true, module: true, compress: { unsafe: true, passes: 2 } }) : [],
      prod ? replace({ preventAssignment: false, values: { PACKAGE_VERSION: version } }) : [],
      prod ? webComponentAnalyer(config.outDir) : [],
      prod ? packageCheck(config.outDir) : [],
      del({ targets: ['./dist/**/assets', './dist/core/.tsbuildinfo', './dist/_virtual/'], hook: 'writeBundle' }),
    ],
  },
];
