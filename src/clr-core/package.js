'use strict';

const fs = require('fs');
const path = require('path');

// Temporary script needed for modern build toolchains that default and expect es2015 modules as the main entry point.
// https://github.com/ng-packagr/ng-packagr/pull/1372
// https://github.com/ng-packagr/ng-packagr/issues/1318
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

read('./dist/clr-core')
  .filter(file => file.includes('package.json'))
  .forEach(file => {
    const data = JSON.parse(fs.readFileSync(file));
    data.module = data.module.replace('fesm5', 'fesm2015');
    data.main = data.module;
    data.type = 'module';

    // ngcc pollutes package.json files in the monorepo use case https://github.com/angular/angular/issues/33395
    delete data['__processed_by_ivy_ngcc__'];
    delete data['scripts'];

    fs.writeFileSync(file, JSON.stringify(data, null, 2));
  });
