/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');


module.exports = {
  entry: {
    'clr-ui/clr-ui-dark': './src/clr-angular/dark-theme.scss',
    'clr-ui/clr-ui-dark.min': './src/clr-angular/dark-theme.scss'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].css'
  },
  module: {

    rules: [
      {
        include: [
          path.join(process.cwd(), "src/clr-angular/dark-theme.scss")
        ],
        test: /\.scss$/,
        loaders: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'text-transform-loader',
              options: {
                transformText: function(content, loaderOptions) {
                  return content.replace(/@VERSION/g, require('./package.json').version);
                }
              }
            },
            "css-loader",
            "sass-loader", // loaders to preprocess css
          ],
          fallback: "style-loader"
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ // define where to save the file
      filename: '[name].css',
      allChunks: true,
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.min\.css$/,
      cssProcessorOptions: {
        autoprefixer: false,
        safe: true,
        mergeLonghand: false,
        discardComments: {remove: (comment) => !(/Copyright|@preserve|@license|[@#]\s*source(?:Mapping)?URL|^!/i.test(comment))}
      }
    }),
  ],
};