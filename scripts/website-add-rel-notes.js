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

const base = 'projects/website/src/releases';
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

function updateReleaseList(version, date) {
  const file = path.join(process.cwd(), base, 'release-list.json');
  const relList = require(file);
  const [major] = version.split('.');
  const srcAll = { ...relList.all };
  const vers = Object.keys(srcAll).slice();
  const latestIx = vers.findIndex(ver => ver.startsWith(major + '.'));

  // Only update current if this is the latest version
  const [currentMajor] = relList.current.split('.');
  if (parseInt(major) >= parseInt(currentMajor)) {
    relList.current = version;
  }

  // We can't add object properties at specific position
  // So we recreate the object
  vers.splice(latestIx, 0, version);
  srcAll[version] = {
    date: date,
    figma: '2.2.0',
    sketch: '2.2.0',
  };
  relList.all = {};
  for (let ver of vers) {
    relList.all[ver] = srcAll[ver];
  }

  fs.writeFileSync(file, JSON.stringify(relList, null, 2) + '\n', { encoding: 'utf8' });
  console.log('* File patched: ' + file.split('/').pop());
}

function updateTemplateStub(version) {
  const file = path.join(process.cwd(), base, 'release-template-stub.json');
  let relList = require(file);
  const srcAll = { ...relList };
  const [major] = version.split('.');
  const vers = Object.keys(srcAll).slice();
  const latestIx = vers.findIndex(ver => ver.startsWith(major + '.'));

  // We can't add object properties at specific position
  // So we recreate the object
  vers.splice(latestIx, 0, version);
  srcAll[version] = `src/releases/${major}.x/${version}.html`;
  relList = {};
  for (let ver of vers) {
    relList[ver] = srcAll[ver];
  }

  fs.writeFileSync(file, JSON.stringify(relList, null, 2) + '\n', { encoding: 'utf8' });
  console.log('* File patched: ' + file.split('/').pop());
}

function createTemplate(json) {
  const version = json.version;
  const [major] = version.split('.');

  const dir = path.join(process.cwd(), base, `${major}.x`);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  const file = path.join(dir, `${version}.html`);

  let note = `<!--
  ~ Copyright (c) 2016-2021 VMWare, Inc. All Rights Reserved.
  ~ This software is released under MIT License.
  ~ The full license information can be found in LICENSE in the root directory of this project.
-->\n`;

  if (json.feat && Array.isArray(json.feat) && json.feat.length > 0) {
    note += `\n<h2>Highlights</h2>\n`;
    note += '<ul class="list">\n';
    for (let item of json.feat) {
      note += '  <li>\n';
      note += `    ${item.title}\n`;
      note += `    <a href="https://github.com/vmware/clarity/issues/${item.issue}" target="_blank"> (#${item.issue}) </a>\n`;
      note += '  </li>\n';
    }
    note += '</ul>\n';
  }

  if (json.fix && Array.isArray(json.fix) && json.fix.length > 0) {
    note += `\n<h2>Bug Fixes</h2>\n`;
    note += '<ul class="list">\n';
    for (let item of json.fix) {
      note += '  <li bug-fix>\n';
      note += `    ${item.title}\n`;
      note += `    <a href="https://github.com/vmware/clarity/issues/${item.issue}" target="_blank"> (#${item.issue}) </a>\n`;
      note += '  </li>\n';
    }
    note += '</ul>\n';
  }

  fs.writeFileSync(file, note);
  console.log('* File patched: ' + file.split('/').pop());
}

if (!jsonStr) {
  throw 'New version data not supplied';
}

let json = JSON.parse(jsonStr);

if (!verifyJsonStructure(json)) {
  throw 'JSON structure invalid';
}

console.log(json.version, json.date);

updateReleaseList(json.version, json.date);
updateTemplateStub(json.version);
createTemplate(json);
