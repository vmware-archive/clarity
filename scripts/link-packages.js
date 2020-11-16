'use strict';

const { join } = require('path');
const { readdirSync, statSync } = require('fs');
const { spawnSync } = require('child_process');
const { exit } = require('process');

const args = process.argv.slice(2);

const config = args.filter(x => x.includes('--'));

const silent = config.find(x => x === '--silent');

const currentFolder = process.cwd();

const distFolder = join(currentFolder, '/dist');

/**
 * Links set of packages with another set of packages
 *
 * @param {Array<{ name, file, dir }>} targetPackages Target packages
 * @return { with: Function } object of functions
 */
function linkPackages(targetPackages) {
  return {
    with: packages => {
      targetPackages.forEach(pkg => {
        const packageJson = require(pkg.file);

        // Escapes package that doesn't have dependecies
        if (!packageJson.dependencies) {
          return;
        }

        /**
         * Checks if the currenct package depends on other packages in the mono repo and links them
         *
         * e.g. Website -> @clr/core
         * e.g. @clr/angular -> @clr/core
         */
        packages.forEach(distPkg => {
          if (!packageJson.dependencies[distPkg.name]) {
            return;
          }

          packageConnector(distPkg, pkg);
        });
      });
    },
  };
}

/**
 * Checks name of the package to consider if the package is part of larger package/library
 *
 * @description
 * The function is based on `npm` name convensions.
 *
 * @link https://docs.npmjs.com/cli/v6/using-npm/scope
 * @link https://docs.npmjs.com/cli/v6/configuring-npm/package-json#name
 *
 * @param {*} packageJson The name of the package, extracted from package.json
 *
 * @returns {boolean} Package is root or not
 */
function isRootPackage(packageJson) {
  if (!packageJson) {
    throw new Error('Missing package.json');
  }

  if (!packageJson.name) {
    throw new ReferenceError(`package.json doesn't have a 'name'`);
  }

  return packageJson.name.split('/').length <= 2;
}

/**
 * Runs 'yarn link' inside package directory
 *
 * @param { name, file, dir } pkg Package that will be linked
 * @returns {undefined}
 */
function linkPackage(pkg) {
  if (!pkg) {
    throw new Error('There is no package provided to link!');
  }

  if (!pkg.dir) {
    throw new ReferenceError('Package directory location is missing!');
  }

  if (!pkg.name) {
    throw new ReferenceError('Package name is missing!');
  }

  const spawn = spawnSync('yarn', ['link'], {
    cwd: pkg.dir,
  });

  const errorMessage = spawn.stderr.toString('utf8');

  const errorMessageIncludesWarning = errorMessage.includes('warning');

  if (errorMessage && !errorMessageIncludesWarning) {
    // 'warning' message is part of 'yarn cli' but is not an error.
    console.log(errorMessage);
    throw new Error(`${pkg.name} failed to link!`);
  } else {
    console.log(errorMessage);
  }

  if (!silent) {
    console.log(`${pkg.name} - linked`);
  }
}

/**
 * Links package to another package
 *
 * @param { name, file, dir } linkPkg Package that will be linked
 * @param { name, file, dir } targetPkg Target package
 * @return {undefined}
 */
function packageConnector(linkPkg, targetPkg) {
  if (!linkPkg && !targetPkg) {
    throw new Error('No packages provided to connect!');
  }

  const spawn = spawnSync('yarn', ['link', linkPkg.name], {
    cwd: targetPkg.dir,
  });

  const message = `${linkPkg.name} => ${targetPkg.name}`;

  const errorMessage = spawn.stderr.toString('utf8');

  if (errorMessage) {
    console.log(errorMessage);
    throw new Error('Failed:', message);
  } else {
    console.log(message);
  }
}

/**
 * Extract recusively all `package.json`s inside directory
 *
 * @param {string} directory absolute directory location
 * @param {Array<{ name, file, dir }>} files list of package.json
 * @return {Array<{ name, file, dir }>} list of package.json
 */
function extractRootPackageJsons(directory, files) {
  // Excludes others than the built packages
  if (directory.includes('node_modules')) {
    return;
  }

  if (!files) {
    files = [];
  }

  readdirSync(directory).forEach(file => {
    const absolute = join(directory, file);

    if (statSync(absolute).isDirectory()) {
      return extractRootPackageJsons(absolute, files);
    }

    // Returns only folders that contains `package.json`
    if (file === 'package.json') {
      const json = require(absolute);

      const isPkgRoot = isRootPackage(json);

      if (!isPkgRoot) {
        return files;
      }

      // Add root package.json to the list
      return files.push({
        name: json.name,
        file: absolute,
        dir: directory,
      });
    }
  });

  return files;
}

function main() {
  const packageJsons = extractRootPackageJsons(process.cwd()); // Collect `package.json` every root package inside the monorepo

  if (!packageJsons) {
    console.log('Warning: No packages available!');
    exit(0);
  }

  const distPackages = packageJsons.filter(x => x.dir.includes(distFolder)); // Get all package.jsons inside the the `distFolder`

  if (!distPackages.length) {
    console.log('No packages available to link!');

    exit(0); // nothing to link
  }

  const packages = packageJsons.filter(x => !x.dir.includes('dist')); // All packages/projects that may need a package link

  // Link all packages in dist
  distPackages.forEach(pkg => linkPackage(pkg));

  linkPackages(packages).with(distPackages);

  exit(0);
}

main();
