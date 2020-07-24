/*
 * Copyright (c) 2016-2020 VMware, Inc.
 * All Rights ReserveThis software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: ['../src/**/*.stories.ts'],
  addons: ['@storybook/addon-knobs', '@storybook/addon-actions', '@storybook/addon-cssresources/register'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: require.resolve('ts-loader'),
          options: {
            configFile: '.storybook/tsconfig.json',
          },
        },
      ],
    });

    config.resolve.extensions.push('.ts');
    config.resolve.plugins = [new TsConfigPathsPlugin({ configFile: '.storybook/tsconfig.json' })];

    return config;
  },
};
