/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { chain, Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import * as fs from 'fs';

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

export default function (options: any): Rule {
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

    // Add Clarity packages to package.json, if not found
    updateJsonFile('package.json', json => {
      const packages = Object.keys(json.dependencies);
      if (!packages.includes('@clr/core')) {
        json.dependencies['@clr/core'] = '^3.0.0';
      }
      if (!packages.includes('@webcomponents/webcomponentsjs')) {
        json.dependencies['@webcomponents/webcomponentsjs'] = '^2.0.0';
      }
      if (packages.includes('@webcomponents/custom-elements')) {
        delete json.dependencies['@webcomponents/custom-elements'];
      }
    });

    // Add Clarity assets to .angular.json, if not found
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

      const scriptsSearch = scripts.join('|');
      const pathPrefix = json.apps ? '../' : '';

      if (scriptsSearch.search('node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js') < 0) {
        // Want this second
        scripts.unshift(pathPrefix + 'node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js');
      }
      if (scriptsSearch.search('node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js') < 0) {
        // Want this first
        scripts.unshift(pathPrefix + 'node_modules/@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js');
      }
      // Remove old polyfill
      const old = scripts.findIndex(
        (file: string) => file === pathPrefix + 'node_modules/@webcomponents/custom-elements/custom-elements.min.js'
      );
      if (old > -1) {
        scripts.splice(old, 1);
      }
    });

    // Chain a series of tasks to setup Clarity
    // 1. Add ClarityModule to NgModule
    // 2. Add BrowserAnimationsModule to NgModule
    // 3. Run npm install
    return chain([
      (_tree: Tree, context: SchematicContext) => {
        context.addTask(new NodePackageInstallTask());
      },
    ])(host, context);
  };
}
