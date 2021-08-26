/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

'use strict';

const fs = require('fs');
const path = require('path');
const Mustache = require('mustache');

const SOURCE_PATH = path.join(__dirname, './../packages/core/dist/core/custom-elements.json');
const TARGET_PATH = path.join(__dirname, './../packages/angular/projects/cds-angular/src/cds/components');
const MUSTACHE_TEMPLTATE_PATH = path.join(__dirname, './../packages/angular/projects/cds-angular/src/cds/_stubs');

const MODULE_NAME = 'cds-angular.module.ts'; // hard-coded in the root index mustache template

const directiveTemplate = fs.readFileSync(MUSTACHE_TEMPLTATE_PATH + '/directive.ts.mustache', 'utf8');
const moduleTemplate = fs.readFileSync(MUSTACHE_TEMPLTATE_PATH + '/module.ts.mustache', 'utf8');
const indexTemplate = fs.readFileSync(MUSTACHE_TEMPLTATE_PATH + '/index.ts.mustache', 'utf8');
const rootIndexTemplate = fs.readFileSync(MUSTACHE_TEMPLTATE_PATH + '/root-index.ts.mustache', 'utf8');
const rootModuleTemplate = fs.readFileSync(MUSTACHE_TEMPLTATE_PATH + '/root-module.ts.mustache', 'utf8');

function formatName(string) {
  return string
    .split('-')
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join('');
}

function extractDirectoryFromPath({ path }) {
  return path.split('/')[0];
}

function filterByPath({ path }) {
  /**
   * @note the regex here could only try to get only `*.element.d.ts` files and ignore
   * everything else.
   */
  return !new RegExp(
    [
      '^internal', // Internal code is not exported
      'index.d.ts', // ignore index.d.ts
      'collections', // Icons collections
      'shapes', // Icons shapes
      'register.d.ts', // Register is not a component
      '.js', // Drop all javscript files
      'interfaces', // Drop all interfaces
      'tokens', // Drop all tokens
      'service', // Drop all services
      'utils', // Drop all utils
      '^test', // Drop all test components
    ].join('|'),
    'mg'
  ).test(path);
}

function reformatDirectiveProps(props) {
  return props
    .filter(prop => prop.privacy === undefined) // public
    .filter(prop => prop.type && prop.type.text && !prop.type.text.includes('EventEmitter')) // exclude events
    .map(prop => {
      const { name, type } = prop;
      const isBoolean = type && type.text === 'boolean';
      return { name, isBoolean };
    });
}

function reformatDirectiveEvents(events) {
  return events
    .filter(event => event.privacy === undefined) // public
    .filter(prop => prop.type && prop.type.text && prop.type.text.includes('EventEmitter')) // include only events
    .map(event => {
      const { name } = event;
      return { name };
    });
}

function writeToDisk(filename, content) {
  fs.mkdirSync(path.dirname(filename), { recursive: true });
  fs.writeFileSync(filename, content);
}

// Read custom elements data
(function (CustomElementsData) {
  // Remove previous custom elements data
  fs.rmdirSync(TARGET_PATH, { recursive: true });

  // Create new custom elements data
  fs.mkdirSync(TARGET_PATH);

  const componentsFound = CustomElementsData.modules.filter(filterByPath);
  const modulesToCreate = {};

  // Locate directives to create
  componentsFound.forEach(entry => {
    (entry.declarations || []).forEach(directive => {
      // Read only classes
      if (directive.kind !== 'class') {
        return;
      }

      const directory = extractDirectoryFromPath(entry);

      const templateData = {
        module: directory,
        tagName: directive.tagName,
        directiveClassName: `${directive.name}Directive`,
        props: (directive.members && reformatDirectiveProps(directive.members)) || [],
        events: (directive.members && reformatDirectiveEvents(directive.members)) || [],
      };

      // Re-use already calculated data
      templateData.hasEvents = !!templateData.events.length;
      templateData.hasProps = !!templateData.props.length;

      const file = {
        filename: `${directive.tagName}.directive.ts`,
        path: path.join(TARGET_PATH, directory),
        data: templateData,
      };

      // Write directive file
      writeToDisk(path.join(file.path, file.filename), Mustache.render(directiveTemplate, file.data));

      modulesToCreate[templateData.module] = [...(modulesToCreate[templateData.module] || []), file];
    });
  });

  Object.keys(modulesToCreate).forEach(moduleName => {
    modulesToCreate[moduleName].forEach(directive => {
      const data = {
        moduleDirectory: moduleName,
        moduleClassName: `Cds${formatName(moduleName)}Module`,
        directives: modulesToCreate[moduleName].map(directive => {
          return {
            directiveClassName: directive.data.directiveClassName,
            directiveFileName: directive.data.tagName,
          };
        }),
      };

      // Write component module
      writeToDisk(
        path.join(directive.path, `cds-${directive.data.module}.module.ts`),
        Mustache.render(moduleTemplate, data)
      );

      // Write component index
      writeToDisk(
        path.join(directive.path, `index.ts`),
        Mustache.render(indexTemplate, {
          moduleFileName: `cds-${moduleName}`,
          directives: data.directives,
        })
      );
    });
  });

  // Calculate root module data
  const moduleData = {
    modules: Object.keys(modulesToCreate)
      .sort()
      .map(moduleName => {
        return {
          moduleClassName: `Cds${formatName(moduleName)}Module`,
          moduleDirectory: moduleName,
          moduleDirectoryName: moduleName,
        };
      }),
  };

  // Write root index
  writeToDisk(path.join(TARGET_PATH, `index.ts`), Mustache.render(rootIndexTemplate, moduleData));

  // Write root module
  writeToDisk(path.join(TARGET_PATH, MODULE_NAME), Mustache.render(rootModuleTemplate, moduleData));
})(JSON.parse(fs.readFileSync(SOURCE_PATH)));
