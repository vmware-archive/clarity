/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

const fs = require('fs');
const files = require('./ngcc');

const errors = [];

files.forEach(file => {
  const content = JSON.parse(fs.readFileSync(file));
  if (content.__processed_by_ivy_ngcc__) {
    errors.push(file);
  }
});

if (errors.length) {
  console.error('Some package files have ngcc private data in them, please clean them up.');
  errors.forEach(error => console.log(`Fix: ${error}`));
  process.exit(1);
}
