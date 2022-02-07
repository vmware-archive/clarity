/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

'use strict';

const fs = require('fs');
const path = require('path');
const Mustache = require('mustache');

const SOURCE_PATH = path.join(__dirname, './../packages/core/dist/core/custom-elements.json');
const TARGET_PATH = path.join(__dirname, './../packages/angular/projects/cds-angular');
const ROOT_SOURCE_PATH = path.join(__dirname, './../packages/angular/projects/cds-angular/src');
const MUSTACHE_TEMPLTATE_PATH = path.join(__dirname, './../packages/angular/projects/cds-angular/_stubs');
const MODULE_NAME = 'cds-angular.module.ts'; // hard-coded in the root index mustache template

const directiveTemplate = fs.readFileSync(MUSTACHE_TEMPLTATE_PATH + '/directive.ts.mustache', 'utf8');
const moduleTemplate = fs.readFileSync(MUSTACHE_TEMPLTATE_PATH + '/module.ts.mustache', 'utf8');
const indexTemplate = fs.readFileSync(MUSTACHE_TEMPLTATE_PATH + '/index.ts.mustache', 'utf8');
const packageTemplate = fs.readFileSync(MUSTACHE_TEMPLTATE_PATH + '/package.json.mustache', 'utf8');
const publicAPITemplate = fs.readFileSync(MUSTACHE_TEMPLTATE_PATH + '/public-api.ts.mustache', 'utf8');
const rootIndexTemplate = fs.readFileSync(MUSTACHE_TEMPLTATE_PATH + '/root-index.ts.mustache', 'utf8');
const rootModuleTemplate = fs.readFileSync(MUSTACHE_TEMPLTATE_PATH + '/root-module.ts.mustache', 'utf8');

const metadata = JSON.parse(fs.readFileSync(SOURCE_PATH));
const entrypoints = createEntryPoints(metadata.modules);

writeRootModule(entrypoints);
writeRootPublicAPI(entrypoints);
writeComponentSubModules(entrypoints);

function createEntryPoints(modules) {
  return findEntryPointModules(modules).map(module => {
    const elements = findModuleElements(module.exports);
    const moduleDirectory = path.dirname(module.path);
    const moduleFileName = `${moduleDirectory.replace(/\//g, '-')}`;
    const moduleFilePath = path.resolve(TARGET_PATH, path.join(moduleDirectory, `${moduleFileName}.module.ts`));
    const indexFilePath = path.resolve(TARGET_PATH, path.join(moduleDirectory, 'index.ts'));
    const publicAPIFilePath = path.resolve(TARGET_PATH, path.join(moduleDirectory, 'public-api.ts'));
    const packageFilePath = path.resolve(TARGET_PATH, path.join(moduleDirectory, 'package.json'));
    const moduleClassName = createModuleClassName(module);
    const directives = elements.map(element => createDirective(element, module));

    return {
      moduleDirectory,
      moduleFileName,
      moduleFilePath,
      moduleClassName,
      packageFilePath,
      indexFilePath,
      publicAPIFilePath,
      directives,
    };
  });
}

function writeRootPublicAPI(modules) {
  writeToDisk(path.join(ROOT_SOURCE_PATH, `public-api.ts`), Mustache.render(rootIndexTemplate, { modules }));
}

function writeRootModule(modules) {
  writeToDisk(path.join(ROOT_SOURCE_PATH, MODULE_NAME), Mustache.render(rootModuleTemplate, { modules }));
}

function writeComponentSubModules(modules) {
  modules.forEach(module => {
    writeToDisk(module.moduleFilePath, Mustache.render(moduleTemplate, module));
    writeToDisk(module.indexFilePath, Mustache.render(indexTemplate, module));
    writeToDisk(module.packageFilePath, Mustache.render(packageTemplate, module));
    writeToDisk(module.publicAPIFilePath, Mustache.render(publicAPITemplate));
    module.directives.forEach(directive =>
      writeToDisk(directive.directiveFilePath, Mustache.render(directiveTemplate, directive))
    );
  });
}

function findEntryPointModules(modules) {
  return modules
    .filter(module => module.path.includes('/register.js'))
    .map(module => metadata.modules.find(m => m.path === `${path.dirname(module.path)}/index.js`))
    .filter(m => m?.exports);
}

function findModuleElements(exports) {
  const elements = exports
    .filter(m => !!m.declaration.package)
    .map(e => findCustomElements().find(c => path.basename(c.path) === path.basename(e.declaration.package)))
    .flatMap(m => m?.declarations)
    .filter(e => !!e?.tagName);
  return elements;
}

function findCustomElements() {
  return metadata.modules.filter(module => module.declarations.find(d => d.customElement));
}

function createModuleClassName(module) {
  let className = path
    .dirname(module.path)
    .replace(/\//g, '-')
    .split('-')
    .map(i => i.charAt(0).toUpperCase() + i.slice(1)) // capitalize
    .join('');

  return `Cds${className}Module`;
}

function createDirective(element, module) {
  const directive = {
    tagName: element.tagName,
    elementClassName: element.name,
    directiveFileName: element.tagName,
    directiveClassName: `${element.name}Directive`,
    props: (element.members && getDirectiveProps(element.members)) || [],
    events: (element.members && getDirectiveEvents(element.members, element.events)) || [],
    directiveFilePath: path.join(TARGET_PATH, path.dirname(module.path), `${element.tagName}.directive.ts`),
    directiveModule: path.dirname(module.path),
  };

  directive.hasEvents = !!directive.events.length;
  directive.hasProps = !!directive.props.length;
  return directive;
}

function getDirectiveProps(props) {
  return props
    .filter(prop => prop.privacy === undefined) // public
    .filter(prop => !prop.static)
    .filter(prop => !prop.readonly)
    .filter(prop => prop.type && prop.type.text && !prop.type.text.includes('EventEmitter')) // exclude events
    .map(prop => ({ name: prop.name, isBoolean: prop?.type?.text === 'boolean' }));
}

function getDirectiveEvents(members = [], events = []) {
  const memberEvents = members
    .filter(event => event.privacy === undefined) // public
    .filter(prop => prop.type && prop.type.text && prop.type.text.includes('EventEmitter')) // include only events
    .map(event => ({ name: event.name }));

  // return distinct list of events when combining @output members and @event annotations
  return Object.values([...memberEvents, ...events].reduce((prev, next) => ({ ...prev, [next.name]: next }), {}));
}

function writeToDisk(filename, content) {
  fs.mkdirSync(path.dirname(filename), { recursive: true });
  fs.writeFileSync(filename, content);
}
