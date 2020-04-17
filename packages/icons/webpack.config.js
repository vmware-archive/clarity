/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.ts',
    'interfaces/icon-interfaces': './src/interfaces/icon-interfaces.ts',
    'utils/descriptor-config': './src/utils/descriptor-config.ts',
    'clr-icons-api': './src/clr-icons-api.ts',
    'clr-icons-element': './src/clr-icons-element.ts',
    'clr-icons-lite.min': './src/index.ts',
    'clr-icons.min': './src/clr-icons-sfx.ts',
    'shapes/all-shapes': './src/shapes/all-shapes.ts',
    'shapes/all-shapes.min': './src/shapes/all-shapes.ts',
    'shapes/commerce-shapes': './src/shapes/commerce-shapes.ts',
    'shapes/commerce-shapes.min': './src/shapes/commerce-shapes.ts',
    'shapes/core-shapes': './src/shapes/core-shapes.ts',
    'shapes/core-shapes.min': './src/shapes/core-shapes.ts',
    'shapes/essential-shapes': './src/shapes/essential-shapes.ts',
    'shapes/essential-shapes.min': './src/shapes/essential-shapes.ts',
    'shapes/media-shapes': './src/shapes/media-shapes.ts',
    'shapes/media-shapes.min': './src/shapes/media-shapes.ts',
    'shapes/social-shapes': './src/shapes/social-shapes.ts',
    'shapes/social-shapes.min': './src/shapes/social-shapes.ts',
    'shapes/travel-shapes': './src/shapes/travel-shapes.ts',
    'shapes/travel-shapes.min': './src/shapes/travel-shapes.ts',
    'shapes/technology-shapes': './src/shapes/technology-shapes.ts',
    'shapes/technology-shapes.min': './src/shapes/technology-shapes.ts',
    'shapes/chart-shapes': './src/shapes/chart-shapes.ts',
    'shapes/chart-shapes.min': './src/shapes/chart-shapes.ts',
    'shapes/text-edit-shapes': './src/shapes/text-edit-shapes.ts',
    'shapes/text-edit-shapes.min': './src/shapes/text-edit-shapes.ts',
  },
  output: {
    path: path.resolve(__dirname, './../../dist/clr-icons'),
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
              configFileName: 'tsconfig.json',
            },
          },
        ],
      },
    ],
  },
};
