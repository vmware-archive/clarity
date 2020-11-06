'use strict';

import * as fs from 'fs-extra';
import * as path from 'path';
import * as del from 'del';
import * as cpy from 'cpy';
import * as shellEx from 'child_process';

const shell = shellEx.execSync;

function read(dir) {
  return fs
    .readdirSync(dir)
    .reduce(
      (files, file) =>
        fs.statSync(path.join(dir, file)).isDirectory()
          ? files.concat(read(path.join(dir, file)))
          : files.concat(path.join(dir, file)),
      []
    );
}

function copyAssets() {
  return Promise.all([
    cpy(['./**/package.json'], '../dist/core/', { cwd: '../src', parents: true }),
    cpy(['./package.json'], './dist/core/', { cwd: '../', parents: true }),
    cpy(['./README.md'], './dist/core/', { cwd: '../', parents: true }),
  ]);
}

function removeCacheFiles() {
  del.sync(
    [
      '../dist/core/**/*.{tsbuildinfo,spec.js,spec.js.map,spec.d.ts}',
      '../dist/core/*.{tsbuildinfo,spec.js,spec.js.map,spec.d.ts}',
    ],
    { force: true }
  );
}

function cleanPackageFiles() {
  // https://open-wc.org/publishing
  // https://justinfagnani.com/2019/11/01/how-to-publish-web-components-to-npm
  read('../dist/core')
    .filter(f => f.includes('package.json'))
    .forEach(file => {
      const packageFile = fs.readJsonSync(file);
      ['scripts', 'devDependencies'].forEach(p => delete packageFile[p]);

      const metaData = {
        main: './index.js',
        module: './index.js',
        typings: './index.d.ts',
        type: 'module',
      };

      fs.writeJsonSync(file, { ...packageFile, ...metaData }, { spaces: 2 });
    });
}

function updateFileVersions() {
  shell(`replace '@VERSION' $npm_package_version ../dist/core/internal/utils/global.js`);
}

function generateAPIMetaData() {
  // We link/unlink the package so wca can properly follow the root import paths
  shell(`cd ../dist/core && yarn link && yarn link @cds/core`);
  shell(`wca analyze '../dist/core/**/*.ts' --silent --format=json --outFile ../dist/core/custom-elements.json`);
  shell(`cd ../dist/core && yarn unlink @cds/core && yarn unlink --no-save @cds/core`);
  del.sync('../dist/core/node_modules', { force: true }); // leftover from link

  // update empty default slot names to have name 'default'
  const metadata = fs.readJsonSync('../dist/core/custom-elements.json');
  metadata.tags.filter(t => t.slots && t.slots[0].name === '').forEach(t => (t.slots[0].name = 'default'));
  fs.writeJsonSync('../dist/core/custom-elements.json', metadata, { spaces: 2 });
}

(async () => {
  await copyAssets();
  removeCacheFiles();
  cleanPackageFiles();
  updateFileVersions();
  generateAPIMetaData();
})();
