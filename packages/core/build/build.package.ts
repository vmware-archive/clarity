import * as fs from 'fs-extra';
import * as del from 'del';
import * as cpy from 'cpy';
import * as shellEx from 'child_process';
import { read } from './utils';

const shell = shellEx.execSync;

function copyAssets() {
  return Promise.all([
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

function createPackageFile() {
  // https://open-wc.org/publishing
  // https://justinfagnani.com/2019/11/01/how-to-publish-web-components-to-npm
  // https://docs.skypack.dev/package-authors/package-checks
  // https://nodejs.org/api/packages.html#packages_subpath_exports
  const packageFile = fs.readJsonSync('../dist/core/package.json');
  const packageComponentNames = read('../dist/core')
    .filter(f => f.endsWith('register.js') && !f.includes('/internal/'))
    .map(f => f.replace('../dist/core/', '').replace('/register.js', ''));

  const exports = JSON.parse(`{
    ".": "./index.js",
    "./package.json": "./package.json",
    "./custom-elements.json": "./custom-elements.json",
    "./global.css": "./global.css",
    "./global.min.css": "./global.min.css",
    "./styles/*": "./styles/*",
    "./list/*": "./list/*",
    "./test": "./test/index.js",
    "./internal": "./internal/index.js",
    "./icon/shapes/*": "./icon/shapes/*",
    "./icon/icon.service.js": "./icon/icon.service.js",
    ${packageComponentNames.map(name => {
      return `
      "./${name}": "./${name}/index.js",
      "./${name}/register": "./${name}/register.js",
      "./${name}/register.js": "./${name}/register.js"`;
    })}
  }`);

  const sideEffects = packageComponentNames.map(name => `./${name}/register.js`);

  fs.writeJsonSync(
    '../dist/core/package.json',
    {
      ...packageFile,
      main: './index.js',
      module: './index.js',
      typings: './index.d.ts',
      type: 'module',
      sideEffects,
      exports,
      scripts: undefined,
      devDependencies: undefined,
    },
    { spaces: 2 }
  );
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
  createPackageFile();
  updateFileVersions();
  generateAPIMetaData();
})();
