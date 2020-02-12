'use strict';
const csso = require('csso');
const fs = require('fs-extra');
const path = require('path');

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
  .filter(f => f.endsWith('.css') && !f.endsWith('.min.css'))
  .forEach(file => {
    const css = fs.readFileSync(file, 'utf8');
    const result = csso.minify(css, { restructure: false });
    fs.writeFileSync(file.replace('.css', '.min.css'), result.css);
  });
