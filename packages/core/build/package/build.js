'use strict';

import { default as fs } from 'fs-extra';
import { default as path } from 'path';
import { default as del } from 'del';
import { default as cpy } from 'cpy';
import { default as shellEx } from 'child_process';

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
    cpy(['./**/package.json'], '../dist/core/', { cwd: '../../src', parents: true }),
    cpy(['./package.json'], './dist/core/', { cwd: '../../', parents: true }),
    cpy(['./README.md'], './dist/core/', { cwd: '../../', parents: true }),
  ]);
}

function removeCacheFiles() {
  del.sync(
    [
      '../../dist/core/**/*.{tsbuildinfo,spec.js,spec.js.map,spec.d.ts}',
      '../../dist/core/*.{tsbuildinfo,spec.js,spec.js.map,spec.d.ts}',
    ],
    { force: true }
  );
}

function cleanPackageFiles() {
  // https://open-wc.org/publishing
  // https://justinfagnani.com/2019/11/01/how-to-publish-web-components-to-npm

  read('../../dist/core')
    .filter(f => f.includes('package.json'))
    .forEach(file => {
      const packageFile = fs.readJsonSync(file);
      // Angular CLI leaves in referenced dependencies
      // https://github.com/ng-packagr/ng-packagr/pull/1372
      // https://github.com/ng-packagr/ng-packagr/issues/1318
      // https://github.com/angular/angular/issues/33395
      ['__processed_by_ivy_ngcc__', 'scripts', 'devDependencies'].forEach(p => delete packageFile[p]);

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
  shell(`replace '@VERSION' $npm_package_version ../../dist/core/internal/utils/global.js`);
}

function generateAPIMetaData() {
  // We link/unlink the package so wca can properly follow the root import paths
  shell(`cd ../../dist/core && yarn link && yarn link @clr/core`);
  shell(`wca analyze '../../dist/core/**/*.ts' --silent --format=json --outFile ../../dist/core/custom-elements.json`);
  shell(`cd ../../dist/core && yarn unlink @clr/core && yarn unlink --no-save @clr/core`);

  // update empty default slot names to have name 'default'
  const metadata = fs.readJsonSync('../../dist/core/custom-elements.json');
  metadata.tags.filter(t => t.slots && t.slots[0].name === '').forEach(t => (t.slots[0].name = 'default'));
  fs.writeJsonSync('../../dist/core/custom-elements.json', metadata, { spaces: 2 });
}

function distributeBuild() {
  return Promise.all([
    // make copy into root dist for publishing
    cpy(['./core'], '../../../dist', { cwd: '../../dist', parents: true }),

    // copy latest for react wrapper dev app
    cpy(['./core'], '../../react/node_modules/@clr', { cwd: '../../dist', parents: true }),

    // copy latest for demo apps (many tools don't support symlinks so this is a workaround of sorts)
    ...[
      'core-angular-cli',
      'core-angular-js',
      'core-angular-universal',
      'core-create-react-app',
      'core-ie',
      'core-parcel-js',
      'core-rollup-js',
      'core-snowpack',
      'core-vue-cli',
    ].map(app => cpy(['./core'], `../../../../apps/${app}/node_modules/@clr`, { cwd: '../../dist', parents: true })),
  ]);
}

(async () => {
  await copyAssets();
  removeCacheFiles();
  cleanPackageFiles();
  updateFileVersions();
  generateAPIMetaData();
  await distributeBuild();
})();
