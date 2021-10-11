/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

'use strict';

// Adds JSON supplied as parameter to the website release notes.
// Implementation specific! Different branches should have different scripts.
// Note! Should only be run from the source root folder.

const fs = require('fs');
const path = require('path');

const file = path.join(process.cwd(), 'changelogs/v5.json');

const notes = require(file);
let jsonStr = process.argv.slice(2)[0];

function includesAll(needles, haystack) {
  if (!Array.isArray(needles)) {
    needles = [needles];
  }
  if (!Array.isArray(haystack)) {
    haystack = [haystack];
  }
  return needles.every(needle => haystack.includes(needle));
}

function includesAny(needles, haystack) {
  if (!Array.isArray(needles)) {
    needles = [needles];
  }
  if (!Array.isArray(haystack)) {
    haystack = [haystack];
  }
  return needles.some(needle => haystack.includes(needle));
}

function verifyJsonStructure(json) {
  return (
    includesAll(['version', 'date', 'description'], Object.keys(json)) &&
    includesAny(['feat', 'fix'], Object.keys(json))
  );
}

if (!jsonStr) {
  throw 'New version data not supplied';
}

let json = JSON.parse(jsonStr);

if (!verifyJsonStructure(json)) {
  throw 'JSON structure invalid';
}

console.log(json);
notes.releases.unshift(json);
fs.writeFileSync(file, JSON.stringify(notes, null, 2) + '\n', { encoding: 'utf8' });

console.log('* File patched: ' + file.split('/').pop());
