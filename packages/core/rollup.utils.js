/**
 * Rollup Utils
 *
 * Utilities for the main Core library rollup build.
 */

import * as fs from 'fs-extra';
import execute from 'rollup-plugin-shell';
import { resolve, dirname, extname } from 'path';
import * as glob from 'glob';
import * as csso from 'csso';
import autoprefixer from 'autoprefixer';
import * as PurgeCSSDefault from 'purgecss';
import styles from 'rollup-plugin-styles';
import virtual from '@rollup/plugin-virtual';

const prod = !process.env.ROLLUP_WATCH;

/**
 * Rollup plugin for running the package-check validation
 * https://docs.skypack.dev/package-authors/package-checks
 */
export const packageCheck = dir => {
  return execute({ commands: [`package-check --cwd ${resolve(dir)}`], hook: 'writeBundle' });
};

/**
 * Rollup plugin for creating custom-elements.json with the Web Component Analyzer
 */
export const webComponentAnalyer = () => {
  return execute({
    commands: [
      `cd src && cem analyze --config ${resolve('./custom-elements-manifest.config.mjs')}`, // https://github.com/open-wc/custom-elements-manifest/tree/master/packages/analyzer
    ],
    hook: 'writeBundle',
  });
};

/**
 * Rollup plugin for creating multiple entrypoint builds
 *
 * Accepts a list of modules or components and creates a virtual file importing
 * all of provided modules and components. This enables Rollup to process and
 * build all entrypoints without needing a single explicit index.js to read.
 */
export const createLibraryEntryPoints = entryPoints => {
  const paths = [...entryPoints.flatMap(i => glob.sync(i))].map(entry => `export * from '${entry}';`).join('\n');

  return virtual({ 'library-entry-points': paths });
};

/**
 * Rollup plugin for converting CSS to lit CSS template tags
 */
export const litSass = () => {
  return {
    load(id) {
      return id.slice(-5) === '.scss' ? this.addWatchFile(resolve(id)) : null;
    },
    transform: async (css, id) => {
      if (id.slice(-5) === '.scss') {
        if (id.includes('base.element.scss')) {
          // import into TS file to share betwen core components
          css = await treeshakeCSS(['**/*.element.ts'], css); // rollup find references that import the active scss file and treeshake against
        }

        return {
          code: `import { css } from 'lit';export default css\`${
            prod ? csso.minify(css, { comments: false }).css : css
          }\``,
          map: { mappings: '' },
        };
      } else {
        return null;
      }
    },
  };
};

/**
 * Rollup plugin for global style sheets
 *
 * Will accept style sheets and write to disk without bundling
 * Creates a minified version of each provided file.
 */
export const globalStyles = config => {
  return config.styles.map(path => {
    let input = typeof path === 'string' ? path : path.input;
    let output = typeof path === 'string' ? path : path.output;

    return {
      input: resolve(input),
      output: {
        file: resolve(output).replace(resolve(config.baseDir), resolve(config.outDir)).replace(extname(output), '.css'),
      },
      plugins: [
        styles({ mode: 'extract', plugins: [autoprefixer({ flexbox: false })] }),
        {
          writeBundle(outputOptions, bundle) {
            const css = Object.entries(bundle)[1][1].source;
            fs.writeFileSync(outputOptions.file, css);
            fs.writeFileSync(outputOptions.file.replace('.css', '.min.css'), csso.minify(css, { comments: false }).css);
          },
          buildStart() {
            this.addWatchFile(input);
          },
        },
      ],
    };
  });
};

async function treeshakeCSS(content, css) {
  const value = await new PurgeCSSDefault.PurgeCSS().purge({
    content,
    defaultExtractor: content => content.match(/[\w-\/:@]+(?<!:)/g) || [],
    safelist: [/:host$/, /:slotted$/],
    css: [{ raw: css }],
    variables: true,
  });
  return value[0].css;
}

/**
 * Creates package.json file for publishing
 * Adds entrypoints and side effects
 */
export const createPackageModuleMetadata = (packageFile, config) => {
  // https://lit.dev/docs/tools/publishing/
  // https://justinfagnani.com/2019/11/01/how-to-publish-web-components-to-npm
  // https://nodejs.org/api/packages.html#packages_subpath_exports

  const moduleExports = config.modules.entryPoints
    .flatMap(i => glob.sync(i))
    .flatMap(m => {
      const path = `.${resolve(m).replace(resolve(config.baseDir), '').replace('.ts', '.js')}`;

      if (path.includes('index.js')) {
        return [`"./${resolve(dirname(m)).replace(resolve(config.baseDir), '').replace('/', '')}": "${path}"`];
      } else {
        return [`"${path}": "${path}"`, `"${path.replace('.js', '')}": "${path}"`];
      }
    });

  const styleExports = config.styles.flatMap(m => {
    const output = typeof m === 'string' ? m : m.output;
    const path = `.${resolve(output)
      .replace(resolve(m.output ? config.outDir : config.baseDir), '')
      .replace(extname(output), '.css')}`;
    const minPath = path.replace(extname(path), '.min.css');
    return [`"${path}": "${path}"`, `"${minPath}": "${minPath}"`];
  });

  const packageExports = config.package.exports.map(m => (m.input ? `"${m.input}": "${m.output}"` : `"${m}": "${m}"`));

  const exports = JSON.parse(`{
     "./package.json": "./package.json",
     "./custom-elements.json": "./custom-elements.json",
     ${[moduleExports, styleExports, packageExports].join(',')}
   }`);

  const sideEffects = [
    ...config.modules.sideEffects
      .flatMap(i => glob.sync(i))
      .map(i => `.${resolve(i).replace(resolve(config.baseDir), '').replace('.ts', '.js')}`),
  ];

  return JSON.stringify({ ...JSON.parse(packageFile), sideEffects, exports }, null, 2);
};

const fileCache = {};
/**
 * Rollup plugin for local file writes
 *
 * Will compare the output of rollup to the current file on disk.
 * If same it will prevent rollup from writting to the file again.
 * This helps prevent dev servers from reloading unnecessarily.
 */
export const esmCache = outDir => {
  return {
    name: 'esm-cache',
    generateBundle(_options, bundles) {
      for (const [key, bundle] of Object.entries(bundles)) {
        const path = `${outDir}/${bundle.fileName}`;

        if (extname(path) === '.js' && fileCache[path] !== bundle.code) {
          fileCache[path] = bundle.code;
        } else {
          delete bundles[key];
        }
      }
    },
  };
};
