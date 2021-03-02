const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(ts|mdx)', '../docs/**/*.stories.@(ts|mdx)'],
  addons: [
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
      },
    },
    'storybook-addon-designs',
    '@storybook/addon-knobs',
  ],
  core: {
    builder: 'webpack4',
  },
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: require.resolve('ts-loader'),
          options: {
            configFile: '.storybook/tsconfig.storybook.json',
          },
        },
      ],
    });

    config.resolve.extensions.push('.ts');
    config.resolve.plugins = [new TsConfigPathsPlugin({ configFile: '.storybook/tsconfig.storybook.json' })];
    config.resolve.alias['@cds/core'] = path.resolve(__dirname, '../dist/core');

    // https://github.com/storybookjs/storybook/blob/next/app/web-components/README.md
    const webComponentsRule = config.module.rules.find(
      rule => rule.use && rule.use.options && rule.use.options.babelrc === false
    );
    // disable dependency compilation
    webComponentsRule.test = [];

    return config;
  },
};
