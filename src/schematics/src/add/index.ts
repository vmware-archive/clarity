/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { normalize, Path } from '@angular-devkit/core';
import { chain, Rule, SchematicContext, SchematicsException, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import * as fs from 'fs';
import { join } from 'path';
import * as ts from 'typescript';

import { addSymbolToNgModuleMetadata } from '../utility/ast-utils';
import { InsertChange } from '../utility/change';

import { Schema as ComponentOptions } from './schema';

// Determine where to load the package.json, if doing local dev or not
let corePackage: any;
if (fs.existsSync(join(__dirname, '../../package.json'))) {
  corePackage = require('../../package.json');
} else {
  corePackage = require('../../../../package.json');
}

// Looks up and finds the path to the app module (or other module if specified)
function findModuleFromOptions(host: Tree, options: ComponentOptions, config: any): Path {
  const modulePath = normalize('/' + config.projects[options.project].sourceRoot + '/' + options.module);
  const moduleBaseName = normalize(options.module)
    .split('/')
    .pop();

  // Try to handle any number of semi-valid paths
  if (host.exists(modulePath)) {
    // Default /[PROJECT_SRC]/[MODULE]
    return normalize(modulePath);
  } else if (host.exists(modulePath + '.ts')) {
    // /[PROJECT_SRC]/[MODULE].ts
    return normalize(modulePath + '.ts');
  } else if (host.exists(modulePath + '.module.ts')) {
    // /[PROJECT_SRC]/[MODULE].module.ts
    return normalize(modulePath + '.module.ts');
  } else if (host.exists(modulePath + '/app/' + moduleBaseName)) {
    // /[PROJECT_SRC]/app/[MODULE]
    return normalize(modulePath + '/app/' + moduleBaseName);
  } else if (host.exists(modulePath + '/app/' + moduleBaseName + '.ts')) {
    // /[PROJECT_SRC]/app/[MODULE].ts
    return normalize(modulePath + '/app/' + moduleBaseName + '.ts');
  } else if (host.exists(modulePath + '/app/' + moduleBaseName + '.module.ts')) {
    // /[PROJECT_SRC]/app/[MODULE].module..ts
    return normalize(modulePath + '/app/' + moduleBaseName + '.module.ts');
  } else {
    throw new Error('Could not find the module, please specify a path to the app module file with the --module flag');
  }
}

// Read a file
function readJsonFile(path: string) {
  return JSON.parse(fs.readFileSync(path, 'utf-8'));
}

// Writes changes to a JSON file
function updateJsonFile(path: string, callback: (a: any) => any) {
  const json = readJsonFile(path);
  callback(json);
  fs.writeFileSync(path, JSON.stringify(json, null, 2));
}

// Handles adding a module to the NgModule
function addDeclarationToNgModule(
  options: ComponentOptions,
  imports: string,
  moduleName: string,
  packageName: string
): Rule {
  return (host: Tree) => {
    const modulePath = options.module as string;

    const text = host.read(modulePath);
    if (text === null) {
      throw new SchematicsException(`File ${modulePath} does not exist.`);
    }
    const sourceText = text.toString('utf-8');
    const source = ts.createSourceFile(modulePath, sourceText, ts.ScriptTarget.Latest, true);

    const declarationChanges = addSymbolToNgModuleMetadata(source, modulePath, imports, moduleName, packageName);

    const declarationRecorder = host.beginUpdate(modulePath);
    for (const change of declarationChanges) {
      if (change instanceof InsertChange) {
        declarationRecorder.insertLeft(change.pos, change.toAdd);
      }
    }
    host.commitUpdate(declarationRecorder);

    return host;
  };
}

export default function(options: ComponentOptions): Rule {
  return (host: Tree, context: SchematicContext) => {
    const configFile = 'angular.json';

    if (!fs.existsSync(configFile)) {
      console.error('Could not install Clarity, requires Angular and Angular CLI version 6 or greater');
      return;
    }

    const config = readJsonFile(configFile);

    if (!options.project) {
      if (!config.defaultProject) {
        console.error('Could not find a default project, please specify --project PROJECT_NAME');
        return;
      }
      options.project = config.defaultProject;
    }

    options.module = findModuleFromOptions(host, options, config);

    // Add Clarity packages to package.json, if not found
    updateJsonFile('package.json', json => {
      const packages = Object.keys(json.dependencies);
      if (!packages.includes('@clr/angular')) {
        json.dependencies['@clr/angular'] = `^${corePackage.version}`;
      }
      if (!packages.includes('@clr/ui')) {
        json.dependencies['@clr/ui'] = `^${corePackage.version}`;
      }
      if (!packages.includes('@clr/icons')) {
        json.dependencies['@clr/icons'] = `^${corePackage.version}`;
      }
      if (!packages.includes('@webcomponents/custom-elements')) {
        json.dependencies['@webcomponents/custom-elements'] = '^1.0.0';
      }
    });

    // Add Clarity assets to .angular-cli.json, if not found
    updateJsonFile(configFile, json => {
      const projects = Object.keys(json.projects);
      const project = projects.find(key => {
        if (key === options.project) {
          return true;
        }
        return false;
      });
      if (!project) {
        console.info(`Could not update CLI config file to add scripts and styles. You'll have to add them manually.`);
        return;
      }

      const target = json.projects[project].targets ? json.projects[project].targets : json.projects[project].architect;

      const scripts = target.build.options.scripts;
      const styles = target.build.options.styles;

      const scriptsSearch = scripts.join('|');
      const stylesSearch = styles.join('|');
      const pathPrefix = json.apps ? '../' : '';

      if (stylesSearch.search('node_modules/@clr/ui/clr-ui') < 0) {
        styles.unshift(pathPrefix + 'node_modules/@clr/ui/clr-ui.min.css');
      }
      if (stylesSearch.search('node_modules/@clr/icons/clr-icons') < 0) {
        styles.unshift(pathPrefix + 'node_modules/@clr/icons/clr-icons.min.css');
      }
      if (scriptsSearch.search('node_modules/@clr/icons/clr-icons.min.js') < 0) {
        scripts.push(pathPrefix + 'node_modules/@clr/icons/clr-icons.min.js');
      }
      if (scriptsSearch.search('node_modules/@webcomponents/custom-elements/custom-elements.min.js') < 0) {
        // Want this first
        scripts.unshift(pathPrefix + 'node_modules/@webcomponents/custom-elements/custom-elements.min.js');
      }
    });

    // Chain a series of tasks to setup Clarity
    // 1. Add ClarityModule to NgModule
    // 2. Add BrowserAnimationsModule to NgModule
    // 3. Run npm install
    return chain([
      addDeclarationToNgModule(options, 'imports', 'ClarityModule', '@clr/angular'),
      addDeclarationToNgModule(options, 'imports', 'BrowserAnimationsModule', '@angular/platform-browser/animations'),
      (_tree: Tree, context: SchematicContext) => {
        context.addTask(new NodePackageInstallTask());
      },
    ])(host, context);
  };
}
