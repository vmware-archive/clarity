/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { chain, Rule, SchematicContext, SchematicsException, Tree } from '@angular-devkit/schematics';
import { existsSync } from 'fs';
import { join } from 'path';
import { getJsonFile } from '../utility/get-json-file';
import { updateJsonFile } from '../utility/update-json-file';
import { findAppModule } from '../utility/find-app-module';
import { addModuleImportToModule } from '../utility/add-module-import-to-module';
import { runNpmInstall } from '../utility/run-npm-install';
import { updateStyleAssets } from '../utility/add-assets-to-config-file';
import { configFileName } from '../utility/angular-config-filename';
import { NgAddOptions } from '../utility/ng-add-options';

let projectSettings: NgAddOptions = {};

// TODO: Stop using fs, keep the version somewhere else
// Determine where to load the package.json, if doing local dev or not
let corePackage: any;
if (existsSync(join(__dirname, '../../package.json'))) {
  corePackage = require('../../package.json');
} else {
  corePackage = require('../../../../package.json');
}

function setProjectSettings(options: NgAddOptions) {
  return (host: Tree): void => {
    if (!host.exists(configFileName)) {
      throw new SchematicsException('Could not install Clarity, requires Angular and Angular CLI version 6 or greater');
    }

    projectSettings = { ...options };
    const config = getJsonFile(host, configFileName) as any;

    if (!options.project) {
      if (!config.defaultProject) {
        throw new SchematicsException('Could not find a default project, please specify --project PROJECT_NAME');
      }
      projectSettings.project = config.defaultProject;
    }

    projectSettings.module = findAppModule(host, config, projectSettings.project || '');
  };
}

// Checks if a version of Angular is compatible with current or next
function getVersion(ngVersion: string, clrVersion: string): string {
  const diff = 6; // Number disparity between Angular and Clarity, this works as long as we stay in sync with versioning
  const majorNgVersion = Number.parseInt(ngVersion.split('.')[0].replace(/\D/g, ''));
  const majorClrVersion = Number.parseInt(clrVersion.split('.')[0].replace(/\D/g, ''));

  if (majorNgVersion - majorClrVersion < diff) {
    // If Angular is less than 6 versions ahead, backtrack Clarity version
    return `^${majorNgVersion - diff}.0.0`;
  } else {
    // Otherwise, just link to installed version for latest or next releases
    return clrVersion;
  }
}

function addClarityDependencies(host: Tree): void {
  updateJsonFile(host, 'package.json', json => {
    const version = getVersion(json.dependencies['@angular/core'], corePackage.version);

    json.dependencies['@clr/angular'] = version;
    json.dependencies['@clr/ui'] = version;
    json.dependencies['@cds/core'] = '^5.0.0';
  });
}

function addAssetsToConfigFile(host: Tree, context: SchematicContext): void {
  updateJsonFile(host, configFileName, json => {
    const project = Object.keys(json.projects).find(key => key === projectSettings.project);

    if (!project) {
      context.logger.warn(`Could not update CLI config file to add styles. You'll have to add them manually.`);

      return;
    }

    const target = json.projects[project].targets || json.projects[project].architect;
    const pathPrefix = json.apps ? '../' : '';
    updateStyleAssets(target, pathPrefix, ['node_modules/@clr/ui/clr-ui.min.css']);
  });
}

function importClarityModule() {
  return (host: Tree): void =>
    addModuleImportToModule(host, 'ClarityModule', '@clr/angular', projectSettings.module || '');
}

function importBrowserAnimationsModule() {
  return (host: Tree): void =>
    addModuleImportToModule(
      host,
      'BrowserAnimationsModule',
      '@angular/platform-browser/animations',
      projectSettings.module || ''
    );
}

// Chain a series of tasks to setup Clarity
// 1. Add Clarity dependencies
// 2. Add style assets to angular.json
// 3. Add ClarityModule to NgModule
// 4. Add BrowserAnimationsModule to NgModule
// 5. Run npm install
export default function (options: NgAddOptions): Rule {
  return chain([
    setProjectSettings(options),
    addClarityDependencies,
    addAssetsToConfigFile,
    importClarityModule,
    importBrowserAnimationsModule,
    runNpmInstall,
  ]);
}
