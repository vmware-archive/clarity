'use strict';
const fs = require('fs-extra');
const path = require('path');
const packageName = process.argv.slice(2)[0];

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

function getProjects() {
  return [...read('../packages'), ...read('../apps')]
    .filter(
      f => f.endsWith('/package.json') && !f.includes('node_modules') && !f.includes('dist') && !f.includes('src')
    )
    .map(f => ({ path: f, json: fs.readJsonSync(f) }));
}

function packageHasDependency(packageJSON, dependency) {
  return (
    (packageJSON.dependencies && packageJSON.dependencies[dependency]) ||
    (packageJSON.peerDependencies && packageJSON.peerDependencies[dependency])
  );
}

const projects = getProjects();
const packages = projects
  .filter(p => (packageName ? p.json.name.includes(packageName) : true))
  .filter(project => project.path.includes('packages/') && project.json.name.includes('@clr/'));

Promise.all(
  packages.map(pkg =>
    projects
      .filter(p => packageHasDependency(p.json, pkg.json.name))
      .forEach(dep => {
        const distName = pkg.json.name.replace('@clr/', '');
        const dest = `./${dep.path.replace('/package.json', `/node_modules/@clr/${distName}`)}`;
        const src = `./${pkg.path.replace('/package.json', `/dist/${distName}/`)}`;
        return fs.copy(src, dest);
      })
  )
)
  .then(() => console.log(`Local package ${packageName} distributed.`))
  .catch(err => console.error(err));
