/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/clr-icons/index.ts',
    'interfaces/icon-interfaces': './src/clr-icons/interfaces/icon-interfaces.ts',
    'utils/descriptor-config': './src/clr-icons/utils/descriptor-config.ts',
    'clr-icons-api': './src/clr-icons/clr-icons-api.ts',
    'clr-icons-element': './src/clr-icons/clr-icons-element.ts',
    'clr-icons-lite.min': './src/clr-icons/index.ts',
    'clr-icons.min': './src/clr-icons/clr-icons-sfx.ts',
    'shapes/all-shapes': './src/clr-icons/shapes/all-shapes.ts',
    'shapes/all-shapes.min': './src/clr-icons/shapes/all-shapes.ts',
    'shapes/commerce-shapes': './src/clr-icons/shapes/commerce-shapes.ts',
    'shapes/commerce-shapes.min': './src/clr-icons/shapes/commerce-shapes.ts',
    'shapes/core-shapes': './src/clr-icons/shapes/core-shapes.ts',
    'shapes/core-shapes.min': './src/clr-icons/shapes/core-shapes.ts',
    'shapes/essential-shapes': './src/clr-icons/shapes/essential-shapes.ts',
    'shapes/essential-shapes.min': './src/clr-icons/shapes/essential-shapes.ts',
    'shapes/media-shapes': './src/clr-icons/shapes/media-shapes.ts',
    'shapes/media-shapes.min': './src/clr-icons/shapes/media-shapes.ts',
    'shapes/social-shapes': './src/clr-icons/shapes/social-shapes.ts',
    'shapes/social-shapes.min': './src/clr-icons/shapes/social-shapes.ts',
    'shapes/travel-shapes': './src/clr-icons/shapes/travel-shapes.ts',
    'shapes/travel-shapes.min': './src/clr-icons/shapes/travel-shapes.ts',
    'shapes/technology-shapes': './src/clr-icons/shapes/technology-shapes.ts',
    'shapes/technology-shapes.min': './src/clr-icons/shapes/technology-shapes.ts',
    'shapes/chart-shapes': './src/clr-icons/shapes/chart-shapes.ts',
    'shapes/chart-shapes.min': './src/clr-icons/shapes/chart-shapes.ts',
    'shapes/text-edit-shapes': './src/clr-icons/shapes/text-edit-shapes.ts',
    'shapes/text-edit-shapes.min': './src/clr-icons/shapes/text-edit-shapes.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist/clr-icons'),
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
              configFileName: 'src/clr-icons/tsconfig.icons.json',
            },
          },
        ],
      },
    ],
  },
};
