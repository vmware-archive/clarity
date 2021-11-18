import nodeResolve from '@rollup/plugin-node-resolve';
import html from '@open-wc/rollup-plugin-html';
import browsersync from 'rollup-plugin-browsersync';
import { terser } from 'rollup-plugin-terser';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import styles from 'rollup-plugin-styles';

const prod = !process.env.ROLLUP_WATCH;

export default {
  input: 'demo/index.html',
  output: { dir: 'dist', format: 'esm' },
  plugins: [
    nodeResolve(),
    html(),
    styles(),
    prod ? minifyHTML() : [],
    prod
      ? terser({
          ecma: 2020,
          warnings: true,
          module: true,
          compress: { unsafe: true, passes: 2 },
        })
      : [],
    !prod ? browsersync({ server: 'dist' }) : [],
  ],
};
