'use strict';

const fs = require('fs-extra');
const path = require('path');

// Temporary script needed for modern build tools that default that expect es2015 modules as the main entry point.
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

if (fs.existsSync('./dist/clr-core/esm2015')) {
  fs.copySync('./dist/clr-core/esm2015', './dist/clr-core');
  ['bundles', 'esm5', 'fesm5', 'esm2015', 'fesm2015'].forEach(f => fs.removeSync(`./dist/clr-core/${f}`));
}

read('./dist/clr-core')
  .filter(f => f.includes('clr-core.') || f.includes('clr-core-') || f.includes('public-api.'))
  .forEach(f => fs.removeSync(f));
read('./dist/clr-core')
  .filter(f => f.includes('package.json'))
  .forEach(file => {
    const data = fs.readJsonSync(file);
    data.typings = './index.d.ts';
    data.module = './index.js';
    data.main = './index.js';
    data.type = 'module';
    ['__processed_by_ivy_ngcc__', 'scripts', 'es2015', 'esm5', 'esm2015', 'fesm5', 'fesm2015'].forEach(
      p => delete data[p]
    );
    fs.writeJsonSync(file, data, { spaces: 2 });
  });
