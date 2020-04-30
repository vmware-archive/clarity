/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

'use strict';

const fs = require('fs');
const path = require('path');

const ignoreList = ['src/schematics'];

const findPackagesSync = function (dir, list = []) {
  if (dir.indexOf('src/schematics') > -1) {
    return list;
  }
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    if (fs.statSync(dir + '/' + file).isDirectory()) {
      list = findPackagesSync(dir + '/' + file, list);
    } else {
      if (path.basename(file) === 'package.json') {
        list.push(dir + '/' + file);
      }
    }
  });
  return list;
};

module.exports = findPackagesSync(path.join(process.cwd(), 'src'));

// module.exports = [
//   './src/clr-angular/package.json',
//   './src/clr-ui/package.json',
//   './src/clr-icons/package.json',
//   './src/clr-core/package.json',
//   './src/clr-core/badge/package.json',
//   './src/clr-core/button/package.json',
//   './src/clr-core/internal/package.json',
//   './src/clr-core/icon-shapes/package.json',
//   './src/clr-core/icon/package.json',
//   './src/clr-core/tag/package.json',
//   './src/clr-core/test-dropdown/package.json',
// ];
