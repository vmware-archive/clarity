const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(ts|mdx)', '../docs/**/*.stories.@(ts|mdx)'],
  addons: [
    '@storybook/addon-storysource',
    '@storybook/addon-cssresources',
    'storybook-addon-designs',
    'storybook-addon-themes',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-links',
    '@storybook/addon-viewport',
  ],
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

    // https://github.com/storybookjs/storybook/blob/next/app/web-components/README.md
    const webComponentsRule = config.module.rules.find(
      rule => rule.use && rule.use.options && rule.use.options.babelrc === false
    );
    // disable dependency compilation
    webComponentsRule.test = [];

    return config;
  },
};
