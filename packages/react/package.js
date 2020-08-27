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
    './dist/react/**/*.{tsbuildinfo,test.js,test.js.map,test.d.ts,.snap}',
    './dist/react/*.{tsbuildinfo,test.js,test.js.map,test.d.ts,.snap}',
  ],
  { force: true }
);

read('./dist/react')
  .filter(f => f.includes('package.json'))
  .forEach(file => {
    const packageFile = fs.readJsonSync(file);
    const metaData = {
      main: './index.js',
      module: './index.js',
      typings: './index.d.ts',
      type: 'module',
    };

    if (file === 'dist/react/package.json') {
      ['alias', 'browserslist', 'scripts', 'devDependencies'].forEach(p => delete packageFile[p]);
      // move @clr/core from dependencies to peerDependencies and assign version number that matches the package.json
      packageFile.peerDependencies = { '@clr/core': `^${packageFile.version}` };
      delete packageFile.dependencies['@clr/core'];
    }

    fs.writeJsonSync(file, { ...packageFile, ...metaData }, { spaces: 2 });
  });
