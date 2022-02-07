#!/usr/bin/env node

/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

const childProcess = require('child_process');
const minimatch = require('minimatch');

function main(filter) {
  const files = getChanges()
    .filter(file => file.status !== 'D')
    .filter(file => !filter || minimatch(file.name, filter))
    .map(file => file.name);

  if (files.length) {
    childProcess.spawn('npx', ['-q', ...[...arguments].splice(1), ...files], { stdio: 'inherit' });
  }
}

function getChanges() {
  return childProcess.execSync('git status --porcelain -u', { encoding: 'utf8' }).trim().split('\n').map(getFile);
}

function getFile(entry) {
  const data = entry.trim().split(/\s+/);
  return { status: data[0], name: data[1] };
}

module.exports = { main };
