/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

const fs = require('fs');
const glob = require('glob');

function prepare(_, context) {
  const version = context.nextRelease.version;
  const patterns = ['./dist/clr-ui/*.*(css|css.map)', './dist/*/package.json'];

  patterns
    .reduce((filePaths, pattern) => [...filePaths, ...glob.sync(pattern)], [])
    .forEach(filePath => {
      const content = fs.readFileSync(filePath, 'utf8');
      const regex = /@VERSION/gim;

      if (regex.test(content)) {
        const newContent = content.replace(regex, version);
        fs.writeFileSync(filePath, newContent, { encoding: 'utf8' });
        console.log(`synced ${filePath} version to ${version}`);
      }
    });
}

module.exports = {
  prepare,
};
