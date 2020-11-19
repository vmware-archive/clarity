'use strict';

const fs = require('fs-extra');
const path = require('path');
const del = require('del');
const cpy = require('cpy');

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

function removeCacheFiles() {
  del.sync(
    [
      './dist/react/**/*.{tsbuildinfo,test.js,test.js.map,test.d.ts,.snap}',
      './dist/react/*.{tsbuildinfo,test.js,test.js.map,test.d.ts,.snap}',
    ],
    { force: true }
  );
}

function copyAssets() {
  return Promise.all([
    cpy(['./**/package.json'], './../dist/react/', { cwd: './src', parents: true }),
    cpy(['./package.json'], './dist/react/', { cwd: './', parents: true }),
    cpy(['./README.md'], './dist/react/', { cwd: './', parents: true }),
  ]);
}

function cleanPackageFiles() {
  read('./dist/react')
    .filter(f => f.includes('package.json'))
    .forEach(file => {
      const packageFile = fs.readJsonSync(file);
      ['alias', 'browserslist', 'scripts', 'devDependencies'].forEach(p => delete packageFile[p]);

      const metaData = {
        main: './index.js',
        module: './index.js',
        typings: './index.d.ts',
        type: 'module',
      };
      fs.writeJsonSync(file, { ...packageFile, ...metaData }, { spaces: 2 });
    });
}

(async () => {
  await copyAssets();
  removeCacheFiles();
  cleanPackageFiles();
})();
