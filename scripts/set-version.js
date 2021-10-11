/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

'use strict';

// Updates the version in the root package.json file.

const fs = require('fs');
const path = require('path');
const { exit } = require('process');

const file = path.join(process.cwd(), 'package.json');
const pkg = require(file);

const newVersion = process.argv.slice(2)[0];

if (!newVersion) {
  throw 'New version not supplied';
}
pkg.version = newVersion;
fs.writeFileSync(file, JSON.stringify(pkg, null, 2) + '\n', { encoding: 'utf8' });
