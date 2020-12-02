'use strict';
const fs = require('fs-extra');
const path = require('path');
const del = require('del');

const sourcePackagePath = path.join(__dirname, '../', process.argv.slice(2)[0]);
const sourcePackage = fs.readJSONSync(sourcePackagePath);
const sourcePackageDistPath = sourcePackagePath.replace('package.json', '');
const sourcePackagePublishPath = getSourcePackagePublishPath();
const localPackages = getLocalPackages();
const projects = getLocalProjects();

createPublishDirectory()
  .then(() => updateLocalPackages())
  .then(targets => console.log(`Local package ${sourcePackage.name} updated:\n${targets.join('\n')}`))
  .catch(err => console.error(err));

function createPublishDirectory() {
  return fs.copy(sourcePackageDistPath, sourcePackagePublishPath).then(() => {
    const sourcePackage = fs.readJSONSync(sourcePackagePath);

    if (sourcePackage.dependencies) {
      Object.keys(sourcePackage.dependencies)
        .filter(dep => localPackages[dep])
        .forEach(localDep => (sourcePackage.dependencies[localDep] = localPackages[localDep].version));
    }

    if (sourcePackage.peerDependencies) {
      Object.keys(sourcePackage.peerDependencies)
        .filter(dep => localPackages[dep])
        .forEach(localDep => (sourcePackage.peerDependencies[localDep] = localPackages[localDep].version));
    }

    fs.writeJsonSync(path.join(sourcePackagePublishPath, 'package.json'), sourcePackage, { spaces: 2 });
  });
}

function updateLocalPackages() {
  return Promise.all(
    projects
      .filter(targetPackage => {
        const pkg = fs.readJsonSync(targetPackage);
        const hasDependency = pkg.dependencies && pkg.dependencies[sourcePackage.name];
        const hasPeerDependency = pkg.peerDependencies && pkg.peerDependencies[sourcePackage.name];
        return hasDependency || hasPeerDependency;
      })
      .map(targetPackage => {
        const targetPackagePath = `${targetPackage.replace('/package.json', `/node_modules/${sourcePackage.name}`)}`;
        del.sync(targetPackagePath, { force: true });
        return fs.copy(sourcePackageDistPath, targetPackagePath).then(() => targetPackagePath);
      })
  );
}

function getLocalProjects() {
  return [...read(path.join(__dirname, '../', 'packages')), ...read(path.join(__dirname, '../', 'apps'))].filter(
    p =>
      p.endsWith('/package.json') &&
      !p.includes('dist') &&
      !p.includes('src') &&
      fs.existsSync(p.replace('/package.json', '/node_modules/'))
  );
}

function getLocalPackages() {
  return read(path.join(__dirname, '../', 'dist'))
    .filter(p => p.endsWith('/package.json') && !p.includes('src'))
    .map(p => fs.readJsonSync(p))
    .reduce((prev, p) => ({ ...prev, [p.name]: p }), {});
}

function getSourcePackagePublishPath() {
  return path.join(__dirname, '../dist', sourcePackage.name.replace('@cds/', '').replace('@clr/', 'clr-'));
}

function read(dir) {
  return fs
    .readdirSync(dir)
    .reduce(
      (files, file) =>
        fs.statSync(path.join(dir, file)).isDirectory() && !dir.includes('node_modules')
          ? files.concat(read(path.join(dir, file)))
          : files.concat(path.join(dir, file)),
      []
    );
}
