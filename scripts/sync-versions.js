/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

'use strict';

// To use this script, update the version in the root package.json file. Then run this script to copy the version to all packages.

/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');
const pkg = require('../package.json');

const files = ['dist/clr-angular/package.json', 'dist/clr-icons/package.json', 'dist/clr-ui/package.json'];

files.forEach(file => {
  file = path.join(process.cwd(), file);
  const json = require(file);
  json.version = pkg.version;
  fs.writeFileSync(file, JSON.stringify(json, null, '  '), { encoding: 'utf8' });

  console.log(`The version in ${file} is synced to ${json.version}.`);
});
