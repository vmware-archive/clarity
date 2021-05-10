/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './projects/icons/src/index.ts',
    'interfaces/icon-interfaces': './projects/icons/src/interfaces/icon-interfaces.ts',
    'utils/descriptor-config': './projects/icons/src/utils/descriptor-config.ts',
    'clr-icons-api': './projects/icons/src/clr-icons-api.ts',
    'clr-icons-element': './projects/icons/src/clr-icons-element.ts',
    'clr-icons-lite.min': './projects/icons/src/index.ts',
    'clr-icons.min': './projects/icons/src/clr-icons-sfx.ts',
    'shapes/all-shapes': './projects/icons/src/shapes/all-shapes.ts',
    'shapes/all-shapes.min': './projects/icons/src/shapes/all-shapes.ts',
    'shapes/commerce-shapes': './projects/icons/src/shapes/commerce-shapes.ts',
    'shapes/commerce-shapes.min': './projects/icons/src/shapes/commerce-shapes.ts',
    'shapes/core-shapes': './projects/icons/src/shapes/core-shapes.ts',
    'shapes/core-shapes.min': './projects/icons/src/shapes/core-shapes.ts',
    'shapes/essential-shapes': './projects/icons/src/shapes/essential-shapes.ts',
    'shapes/essential-shapes.min': './projects/icons/src/shapes/essential-shapes.ts',
    'shapes/media-shapes': './projects/icons/src/shapes/media-shapes.ts',
    'shapes/media-shapes.min': './projects/icons/src/shapes/media-shapes.ts',
    'shapes/social-shapes': './projects/icons/src/shapes/social-shapes.ts',
    'shapes/social-shapes.min': './projects/icons/src/shapes/social-shapes.ts',
    'shapes/travel-shapes': './projects/icons/src/shapes/travel-shapes.ts',
    'shapes/travel-shapes.min': './projects/icons/src/shapes/travel-shapes.ts',
    'shapes/technology-shapes': './projects/icons/src/shapes/technology-shapes.ts',
    'shapes/technology-shapes.min': './projects/icons/src/shapes/technology-shapes.ts',
    'shapes/chart-shapes': './projects/icons/src/shapes/chart-shapes.ts',
    'shapes/chart-shapes.min': './projects/icons/src/shapes/chart-shapes.ts',
    'shapes/text-edit-shapes': './projects/icons/src/shapes/text-edit-shapes.ts',
    'shapes/text-edit-shapes.min': './projects/icons/src/shapes/text-edit-shapes.ts',
  },
  output: {
    path: path.resolve(__dirname, '../../dist/clr-icons'),
    filename: '[name].js',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  target: 'web',
  resolve: {
    modules: ['./node_modules'],
    extensions: ['.ts', '.ts', '.js'],
  },
  devtool: 'source-map',
  plugins: [
    new UglifyJsPlugin({
      include: /\.min\.js$/,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loaders: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: './projects/icons/tsconfig.json',
            },
          },
        ],
      },
    ],
  },
};
