'use strict';
const csso = require('csso');
const fs = require('fs-extra');
const path = require('path');
const { PurgeCSS } = require('purgecss');

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

read('./dist/core')
  .filter(f => f.endsWith('.css') && !f.endsWith('.min.css'))
  .forEach(file => {
    const css = fs.readFileSync(file, 'utf8');
    const result = csso.minify(css, { restructure: false });
    fs.writeFileSync(file.replace('.css', '.min.css'), result.css);
  });

// This will remove unused utilities from cds-layout and typography from core components
async function treeshakeCommonCSS() {
  const sharedComponentStylesPath = './dist/core/internal/base/base.element.css.js';
  const cssFile = fs.readFileSync(sharedComponentStylesPath, 'utf8');
  const css = cssFile.match(/`([^`]+)`/)[1];

  const purgeCSSResult = await new PurgeCSS().purge({
    content: ['./**/*.element.ts'],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
    css: [{ raw: css }],
  });

  const result = cssFile.replace(/`([^`]+)`/, '`' + purgeCSSResult[0].css + '`');
  fs.writeFileSync(sharedComponentStylesPath, result);
}

treeshakeCommonCSS();
