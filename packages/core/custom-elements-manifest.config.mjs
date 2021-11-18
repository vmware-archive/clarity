import { readonlyPlugin } from 'cem-plugin-readonly';
import { moduleFileExtensionsPlugin } from 'cem-plugin-module-file-extensions';

export default {
  globs: ['./**/*.d.ts'],
  litelement: true,
  plugins: [readonlyPlugin(), moduleFileExtensionsPlugin({ from: /\.d\.(t|j)sx?$/, to: '.js' })],
};
