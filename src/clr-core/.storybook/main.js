const { TsConfigPathsPlugin } = require('awesome-typescript-loader');
const path = require('path');

module.exports = {
  stories: ['../**/*.stories.(ts|mdx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-storysource'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts)$/,
      use: [
        {
          loader: require.resolve('awesome-typescript-loader'),
          options: {
            configFileName: 'src/clr-core/.storybook/tsconfig.json',
          },
        },
      ],
    });

    config.resolve.extensions.push('.ts');
    config.resolve.extensions.push('.js');
    config.resolve.alias = {
      '@clr/core': path.resolve(__dirname, '../../../dist/clr-core'),
      '@clr/core/*': path.resolve(__dirname, '../../../dist/clr-core/*'),
    };
    config.resolve.plugins = [new TsConfigPathsPlugin({ configFileName: 'src/clr-core/.storybook/tsconfig.json' })];

    return config;
  },
};
