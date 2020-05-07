/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

const path = require('path');

module.exports = config => {
  /**
   * We need to add a rule to compile the lit-element module (which is
   * shipped in es6 format) to es5.
   * This is a pattern that consumers will follow if they need to support legacy browsers and
   * is included here in the dev app so we can test against IE11 and non-Chromium Edge.
   */
  config.module.rules.push({
    test: /\.js$/,
    include: [
      path.resolve('node_modules/lit-element'),
      path.resolve('node_modules/lit-html'),
      path.resolve('dist/core'),
    ],
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            '@babel/plugin-transform-runtime',
            {
              corejs: false,
              helpers: false,
              regenerator: true,
              useESModules: false,
            },
          ],
        ],
      },
    },
  });
  return config;
};
