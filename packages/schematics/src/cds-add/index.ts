/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { chain, Rule, SchematicContext, SchematicsException, Tree } from '@angular-devkit/schematics';
import { JSDOM } from 'jsdom';

import { updateStyleAssets } from '../utility/add-assets-to-config-file';
import { addModuleImportToModule } from '../utility/add-module-import-to-module';
import { configFileName } from '../utility/angular-config-filename';
import { compareVersions } from '../utility/compare-versions';
import { findAppModule } from '../utility/find-app-module';
import { getFileContent } from '../utility/get-file-content';
import { getIndexHtmlPath } from '../utility/get-index-html-path';
import { getJsonFile } from '../utility/get-json-file';
import { NgAddOptions } from '../utility/ng-add-options';
import { runNpmInstall } from '../utility/run-npm-install';
import { updateJsonFile } from '../utility/update-json-file';
import { cdsAngularVersion, cdsCityVersion } from './versions';

interface ProjectSettings extends NgAddOptions {
  indexHtml?: string;
}

let projectSettings: ProjectSettings = {};

function setProjectSettings(options: ProjectSettings) {
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
    projectSettings.indexHtml = getIndexHtmlPath(config, projectSettings.project || '');
  };
}

function addClarityDependencies(host: Tree): void {
  updateJsonFile(host, 'package.json', json => {
    json.dependencies['@cds/city'] = json.dependencies['@cds/city'] || cdsCityVersion;

    const existingCoreVersion = json.dependencies['@cds/core'];
    if (!existingCoreVersion) {
      json.dependencies['@cds/core'] = cdsAngularVersion;
      json.dependencies['@cds/angular'] = json.dependencies['@cds/angular'] || cdsAngularVersion;
    } else {
      // If the version of @cds/core in the package.json is higher than the latest @cds/angular version,
      // set the version of @cds/angular to the latest one.
      // Otherwise, set the version of @cds/angular to the version of @cds/core from package.json.
      const ngVersionToAdd =
        compareVersions(existingCoreVersion, cdsAngularVersion) > -1 ? cdsAngularVersion : existingCoreVersion;

      json.dependencies['@cds/angular'] = ngVersionToAdd;
    }
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
    const assets = [
      'node_modules/modern-normalize.css/modern-normalize.css',
      'node_modules/@cds/core/global.min.css',
      'node_modules/@cds/city/css/bundles/default.min.css',
    ];

    updateStyleAssets(target, pathPrefix, assets);
  });
}

function importCdsModule() {
  return (host: Tree): void => addModuleImportToModule(host, 'CdsModule', '@cds/angular', projectSettings.module || '');
}

function addCdsTextToBodyTag() {
  return (host: Tree, context: SchematicContext): void => {
    const stepFailedWarnMessage = `Could not update index.html to add 'cds-body' attribute. You'll have to add it manually.`;
    const indexFilePath = projectSettings.indexHtml;

    let indexFile;
    if (!indexFilePath) {
      context.logger.warn(stepFailedWarnMessage);

      return;
    }

    try {
      indexFile = getFileContent(host, indexFilePath);
    } catch (e) {
      context.logger.debug(e);
      context.logger.warn(stepFailedWarnMessage);

      return;
    }

    const dom = new JSDOM(indexFile);
    const bodyTag = dom.window.document.querySelector('body');
    if (!bodyTag) {
      context.logger.warn(stepFailedWarnMessage);

      return;
    }

    bodyTag.setAttribute('cds-text', 'body');
    const updatedContent = dom.serialize();
    host.overwrite(indexFilePath, updatedContent);
  };
}

// Chain a series of tasks to setup @cds/angular
// 1. Add Clarity dependencies
// 2. Add style assets to angular.json
// 3. Add CdsModule to NgModule
// 4. Add cds-text="body" to the body tag in index.html
// 5. Run npm install
export default function (options: NgAddOptions): Rule {
  return chain([
    setProjectSettings(options),
    addClarityDependencies,
    addAssetsToConfigFile,
    importCdsModule,
    addCdsTextToBodyTag,
    runNpmInstall,
  ]);
}
