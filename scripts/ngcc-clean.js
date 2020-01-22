/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

'use strict';

const fs = require('fs');

const files = require('./ngcc');

// We have to run ngcc during postinstall since it does not support parallel builds https://github.com/angular/angular/issues/32431
// ngcc pollutes package.json files in the monorepo use case https://github.com/angular/angular/issues/33395
// this script removes the breaking generated properties from ngcc

files.forEach(pkg => {
  cleanNGCCPollution(pkg);
});

function cleanNGCCPollution(file) {
  const data = JSON.parse(fs.readFileSync(file));
  delete data['__processed_by_ivy_ngcc__'];
  delete data['scripts'];
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + '\n');
}
