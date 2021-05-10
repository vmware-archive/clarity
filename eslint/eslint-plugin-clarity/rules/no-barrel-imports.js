/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

// eslint-disable-next-line
const { resolve, extname, basename } = require('path');
// eslint-disable-next-line
const { statSync } = require('fs');

module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'disallow importing files from directory index',
      category: 'Possible Errors',
    },
  },

  create: function noRelativePackages(context) {
    return {
      ImportDeclaration: function (node) {
        const importFile = context.getFilename();
        let path = node.source.value;
        const pathDir = importFile.substring(0, importFile.lastIndexOf('/'));

        // Only target relative paths
        if (path.startsWith('.')) {
          // console.table([context.getFilename(), node.source.value, resolve(context.getFilename(), node.source.value)]);
          // We need to add add `.ts` for full path, unless it has one of our supported file types already
          if (
            ['.html', '.txt', '.ts', '.json', '.js', '.css'].indexOf(extname(path)) === -1 &&
            !basename(path).includes('index')
          ) {
            path = path + '.ts';
          } else {
            return;
          }

          // Try to get file stats, or else its not a file and we throw fail
          try {
            // Using resolve we get the full path of what is being imported to check if
            // it is a file or not
            statSync(resolve(pathDir, path)).isFile();
          } catch (e) {
            // IF this fails (because statSync will fail if the path is not known),
            // we catch it and throw an error because its a barrel.
            context.report({
              node,
              message: `Not allowed to import from a barrel`,
            });
          }
        }

        if (path.startsWith('src') || path.includes('clr-angular/') || path.includes('golden/')) {
          context.report({
            node,
            message: `Invalid import path, please use relative paths`,
          });
        }
      },
    };
  },
};
