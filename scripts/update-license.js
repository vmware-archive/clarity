#!/usr/bin/env node

/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

/**
 * This script is designed to be used as a precommit hook to auto-update staged file license headers.
 */

const exec = require('child_process').execSync;
const fs = require('fs');
const path = require('path');

const supported = ['.js', '.ts', '.html', '.css', '.scss', '.sass'];

// Grab list of staged files
const files = exec('git diff --name-only --cached', { encoding: 'utf8' }).split('\n');
const year = new Date().getFullYear();

files.forEach(file => {
  const filePath = path.join(__dirname, '../', file);
  if (fs.existsSync(filePath) && supported.indexOf(path.extname(filePath)) > -1) {
    let content = fs.readFileSync(filePath, { encoding: 'utf8' });
    content = content.replace(/\(c\) 2016-(\d\d\d\d)/gim, `(c) 2016-${year}`);
    fs.writeFileSync(filePath, content);
  }
});

console.log('Updated license headers');

exec(`git add ${files.map(file => "'" + path.join(__dirname, '../', file) + "'").join(' ')}`);
