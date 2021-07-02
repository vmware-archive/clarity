/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

'use strict';

const fs = require('fs');
const path = require('path');
const Mustache = require('mustache');

const SOURCE_PATH = path.join(__dirname, './../packages/core/dist/core/custom-elements.legacy.json');
const TARGET_PATH = path.join(__dirname, './../packages/angular/projects/cds-angular/src/cds/components');
const MUSTACHE_TEMPLTATE_PATH = path.join(__dirname, './../packages/angular/projects/cds-angular/src/cds/_stubs');

// TODO: check if a directory is already created for the same tag
const IGNORE_DIRECTORY_NAMES = ['index.d.ts', 'internal-components', 'icon-shapes'];
const MODULE_NAME = 'cds-angular.module.ts'; // hard-coded in the root index mustache template

const directiveTemplate = fs.readFileSync(MUSTACHE_TEMPLTATE_PATH + '/directive.ts.mustache', 'utf8');
const moduleTemplate = fs.readFileSync(MUSTACHE_TEMPLTATE_PATH + '/module.ts.mustache', 'utf8');
const indexTemplate = fs.readFileSync(MUSTACHE_TEMPLTATE_PATH + '/index.ts.mustache', 'utf8');
const rootIndexTemplate = fs.readFileSync(MUSTACHE_TEMPLTATE_PATH + '/root-index.ts.mustache', 'utf8');
const rootModuleTemplate = fs.readFileSync(MUSTACHE_TEMPLTATE_PATH + '/root-module.ts.mustache', 'utf8');

function getDiretoryName(tagPath) {
  return tagPath.split('/')[1];
}

function getDirectiveName(tagName) {
  return tagName + '.directive.ts';
}

// turns kebab case to camel case with options of adding prefix and suffix
// eg: getDirectiveClassName("modal-body", "Clr", "Directive") -> ClrModalBodyDirective
function getDirectiveClassName(tagName, prefix, suffix) {
  return (
    prefix +
    tagName
      .split('-')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join('') +
    suffix
  );
}

function createFileOnTemplate(mustacheTemplate, templateData, fileName, targetPath, subDir = '') {
  // if subDir is defined, we will create a sub directory inside the target path and create the file there
  if (fs.existsSync(path.join(targetPath, subDir))) {
    const filePath = path.join(targetPath, subDir, fileName);
    const templateRender = Mustache.render(mustacheTemplate, templateData);
    fs.writeFileSync(filePath, templateRender);
  }
}

function createRootIndex(moduleData) {
  if (moduleData) {
    const templateData = {
      modules: Object.keys(moduleData).map(md => ({ moduleDirectoryName: md })),
    };

    createFileOnTemplate(rootIndexTemplate, templateData, 'index.ts', TARGET_PATH);
  }
}

function createIndexes(moduleData) {
  if (moduleData) {
    Object.keys(moduleData).forEach(moduleDirectory => {
      const templateData = {
        directives: Object.keys(moduleData[moduleDirectory]).map(md => ({
          directiveFileName: md,
        })),
        moduleFileName: 'cds-' + moduleDirectory,
      };

      createFileOnTemplate(indexTemplate, templateData, 'index.ts', TARGET_PATH, moduleDirectory);
    });

    createRootIndex(moduleData);
  }
}

function createModules(moduleData) {
  if (moduleData) {
    const rootModuleTemplateData = { modules: [] };
    Object.keys(moduleData).forEach(moduleDirectory => {
      const templateData = {
        directives: Object.keys(moduleData[moduleDirectory]).map(md => ({
          directiveFileName: md,
          directiveClassName: moduleData[moduleDirectory][md],
        })),
        moduleClassName: getDirectiveClassName(moduleDirectory, 'Cds', 'Module'),
        moduleDirectory,
      };

      rootModuleTemplateData.modules.push({ moduleClassName: templateData.moduleClassName, moduleDirectory });

      const moduleFileName = 'cds-' + moduleDirectory + '.module.ts';
      createFileOnTemplate(moduleTemplate, templateData, moduleFileName, TARGET_PATH, moduleDirectory);
    });

    createFileOnTemplate(rootModuleTemplate, rootModuleTemplateData, MODULE_NAME, TARGET_PATH);

    return moduleData;
  }
}

function createDirectives(componentDirectories) {
  if (componentDirectories) {
    const customElementsData = JSON.parse(fs.readFileSync(SOURCE_PATH));

    return customElementsData.tags.reduce((moduleData, tag) => {
      const templateData = {
        tagName: tag.name,
        directiveClassName: getDirectiveClassName(tag.name, '', 'Directive'),
        props: tag.properties && tag.properties.map(p => ({ ...p, isBoolean: p.type === 'boolean' })),
        events: tag.events,
        hasProps: !!tag.properties,
        hasEvents: !!tag.events,
      };

      const directory = getDiretoryName(tag.path);

      createFileOnTemplate(directiveTemplate, templateData, getDirectiveName(tag.name), TARGET_PATH, directory);

      if (componentDirectories.includes(directory)) {
        if (moduleData[directory]) {
          moduleData[directory][templateData.tagName] = [templateData.directiveClassName];
        } else {
          moduleData[directory] = { [templateData.tagName]: templateData.directiveClassName };
        }
      }

      return moduleData;
    }, {});
  }
}

function createComponentDirectories() {
  if (fs.existsSync(SOURCE_PATH)) {
    const customElementsData = JSON.parse(fs.readFileSync(SOURCE_PATH));

    const componentDirectories = [...new Set(customElementsData.tags.map(tag => getDiretoryName(tag.path)))].filter(
      dirName => !IGNORE_DIRECTORY_NAMES.includes(dirName)
    );

    // clear existing directory
    fs.rmdirSync(TARGET_PATH, { recursive: true });

    fs.mkdirSync(TARGET_PATH);
    componentDirectories.forEach(d => {
      fs.mkdirSync(path.join(TARGET_PATH, d));
    });

    return componentDirectories;
  } else {
    console.warn(`WARNING: Skipped generating ng-core modules because ${SOURCE_PATH} doesn't exist.`, '\n');
  }
}

const directories = createComponentDirectories();
const directives = createDirectives(directories);
const modules = createModules(directives);
createIndexes(modules);
