#!/usr/bin/env node
/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

const colors = require('colors/safe');
const path = require('path');
const prettier = path.join(process.cwd(), 'node_modules', '.bin', 'prettier');
const shell = require('shelljs');
const unPrettyFiles = [];

console.log('Formatting Test');

let result = shell.exec(`${prettier} --list-different ./**/*.{js,json,md,ts,scss}`, { silent: true });
result.stdout.split('\n').forEach(file => {
  unPrettyFiles.push(file);
});

if (unPrettyFiles.length > 1) {
  console.log(colors.yellow.underline(`There are ${unPrettyFiles.length - 1} un-formatted files`));
  unPrettyFiles.forEach(file => {
    console.log(colors.red(file));
  });
} else {
  console.log(colors.green('Formatting OK'));
}

process.exit(result.code);
