import { nodeResolve } from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';
import { terser } from 'rollup-plugin-terser';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import copy from 'rollup-plugin-copy-watch';
import postcss from 'rollup-plugin-postcss';
import path from 'path';
import cssnano from 'cssnano';
import cssImport from 'postcss-import';
import purgecss from '@fullhuman/postcss-purgecss';

const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.js',
  output: { dir: 'dist', format: 'es', sourcemap: true },
  plugins: [
    minifyHTML(),
    copy({
      watch: production ? null : ['src/**/*.html'],
      targets: [
        { src: 'node_modules/@cds/city/Webfonts', dest: 'dist' },
        { src: 'src/index.html', dest: 'dist' },
        { src: 'src/favicon.ico', dest: 'dist' },
      ],
    }),
    alias({
      // https://lit-element.polymer-project.org/guide/build
      entries: [
        {
          find: 'lit-html/lib/shady-render.js',
          replacement: 'node_modules/lit-html/lit-html.js',
        },
      ],
    }),
    nodeResolve(),
    production && terser({ output: { comments: false } }),
    postcss({
      extract: true,
      extract: path.resolve('dist/index.css'),
      plugins: [
        cssImport(),
        production &&
          purgecss({
            content: ['./src/**/*.html'],
            variables: true,
            // custom matcher to better find Clarity utilities with cds-text and cds-layout
            defaultExtractor: content => content.match(/[\w-\/:@]+(?<!:)/g) || [],
          }),
        cssnano(),
      ],
    }),
  ],
};
