/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

'use strict';

// To use this script, update the version in the root package.json file. Then run this script to copy the version to all packages.

const fs = require('fs');
const path = require('path');
const pkg = require('../package.json');

const files = [
  'packages/angular/package.json',
  'packages/core/package.json',
  'packages/icons/package.json',
  'packages/react/package.json',
  'packages/eslint-plugin-clarity-adoption/package.json',
  'packages/ui/package.json',
];

files.forEach(file => {
  file = path.join(process.cwd(), file);
  const json = require(file);
  json.version = pkg.version;
  fs.writeFileSync(file, JSON.stringify(json, null, '  '), { encoding: 'utf8' });
});
