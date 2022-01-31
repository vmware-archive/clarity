import { readonlyPlugin } from 'cem-plugin-readonly';

export default {
  globs: ['**/*.ts'],
  exclude: [
    '**/*.spec.ts',
    '**/*.performance.ts',
    '**/*.a11y.ts',
    '**/*.d.ts',
    '**/*.stories.ts',
    '**/*.story.ts',
    '**/test/**',
    '**/demo/**',
  ],
  outdir: '../dist/core',
  litelement: true,
  plugins: [readonlyPlugin(), tsExtensionPlugin()],
};

export function tsExtensionPlugin() {
  return {
    name: 'ts-extensions',
    packageLinkPhase({ customElementsManifest }) {
      customElementsManifest.modules = JSON.parse(
        JSON.stringify(customElementsManifest.modules).replace(/\.ts"/g, '.js"')
      );
    },
  };
}
