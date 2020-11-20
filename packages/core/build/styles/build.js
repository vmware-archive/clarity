'use strict';
import { default as csso } from 'csso';
import { default as fs } from 'fs-extra';
import { default as path } from 'path';
import { default as PurgeCSSDefault } from 'purgecss';

const PurgeCSS = PurgeCSSDefault.PurgeCSS;

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

read('../../dist/core')
  .filter(f => f.endsWith('.css') && !f.endsWith('.min.css'))
  .forEach(file => {
    // remove internal shadow dom selectors from global light dom styles + ie11 fix with error on ::slotted
    const optimizedFilePath = file.replace('.css', '.min.css');
    const updated = fs.readFileSync(file, 'utf8').replace(/(,|,\n  \[)[^,]*(::slotted).*{/g, '{');
    const current = fs.existsSync(optimizedFilePath) ? fs.readFileSync(optimizedFilePath, 'utf8') : '';
    const optimized = csso.minify(updated).css;

    if (current !== optimized) {
      fs.writeFileSync(file, updated);
      fs.writeFileSync(optimizedFilePath, optimized);
    }
  });

// This will remove unused utilities from cds-layout and typography from core components
async function treeshakeCommonCSS() {
  const cssFile = fs.readFileSync('../../src/internal/base/base.element.css.ts', 'utf8');
  const css = cssFile.match(/`([^`]+)`/)[1];

  const purgeCSSResult = await new PurgeCSS().purge({
    content: ['../../src/**/*.element.ts'],
    defaultExtractor: content => content.match(/[\w-\/:@]+(?<!:)/g) || [],
    whitelistPatterns: [/:host$/],
    css: [{ raw: css }],
    variables: true,
  });

  const result = cssFile.replace(/`([^`]+)`/, '`' + purgeCSSResult[0].css + '`');
  fs.writeFileSync('../../dist/core/internal/base/base.element.css.js', result);
}

treeshakeCommonCSS();
