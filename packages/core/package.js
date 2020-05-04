'use strict';

const fs = require('fs-extra');
const path = require('path');
const del = require('del');

// Temporary script needed to remove cache files and
// files Angular CLI leaves in referenced dependencies
// https://github.com/ng-packagr/ng-packagr/pull/1372
// https://github.com/ng-packagr/ng-packagr/issues/1318
// https://github.com/angular/angular/issues/33395
// https://justinfagnani.com/2019/11/01/how-to-publish-web-components-to-npm/
const read = dir =>
  fs
    .readdirSync(dir)
    .reduce(
      (files, file) =>
        fs.statSync(path.join(dir, file)).isDirectory()
          ? files.concat(read(path.join(dir, file)))
          : files.concat(path.join(dir, file)),
      []
    );

del.sync(
  [
    './dist/core/**/*.{tsbuildinfo,spec.js,spec.js.map,spec.d.ts}',
    './dist/core/*.{tsbuildinfo,spec.js,spec.js.map,spec.d.ts}',
  ],
  { force: true }
);

read('./dist/core')
  .filter(f => f.includes('package.json'))
  .forEach(file => {
    const packageFile = fs.readJsonSync(file);
    ['__processed_by_ivy_ngcc__', 'scripts'].forEach(p => delete packageFile[p]);

    const metaData = {
      main: './index.js',
      module: './index.js',
      typings: './index.d.ts',
      type: 'module',
    };

    fs.writeJsonSync(file, { ...packageFile, ...metaData }, { spaces: 2 });
  });
