/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

'use strict';

// Sanity check verification for the dist folder and modules inside it

const fs = require('fs');
const path = require('path');
const pkg = require('../package.json');

const roots = ['clr-angular', 'clr-ui'];

function getFile(root) {
  return `dist/${root}/package.json`;
}

function verifyRoot(root) {
  let files = fs.readdirSync(`dist/${root}`);
  if (!root) {
    throw `Folder "${root}" could not be loaded.`;
  }
  if (files.length <= 1) {
    throw `Folder "${root}" does not contain enough files.`;
  }
  console.log(`* Folder "${root}" OK`);
}

function verifyModule(file) {
  file = path.join(process.cwd(), file);
  const json = require(file);
  if (!json.version || json.version !== pkg.version) {
    throw `Versions mismatch at ${file})`;
  }
  console.log(`* Module "${file}" OK`);
}

console.log(`Verifying ${pkg.version} version`);
roots.forEach(root => {
  verifyRoot(root);
  verifyModule(getFile(root));
});
console.log('Verification successful.');
