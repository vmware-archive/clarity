/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { Schema as ComponentOptions } from '../add/schema';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { updateJsonFile } from './../utility/json-utils';

export default function(options: ComponentOptions): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    // Update the packagae.json dependencies with "@clr/city": "^1.0.0" (if not already there)
    updateJsonFile('package.json', json => {
      const packages = Object.keys(json.dependencies);
      if (!packages.includes('@clr/city')) {
        json.dependencies['@clr/city'] = '^1.0.0';
      }
    });

    // Update angular.json with addition to the styles array
    updateJsonFile('angular.json', json => {
      const projects = Object.keys(json.projects);
      const project = projects.find(key => {
        if (key === options.project) {
          return true;
        }
        return false;
      });
      if (!project) {
        // tslint:disable-next-line:no-console
        console.info(`Could not update CLI config file to add scripts and styles. You'll have to add them manually.`);
        return;
      }

      if (!project) {
        // tslint:disable-next-line:no-console
        console.info(`Could not update CLI config file to add scripts and styles. You'll have to add them manually.`);
        return;
      }

      const target = json.projects[project].targets ? json.projects[project].targets : json.projects[project].architect;

      const styles = target.build.options.styles;

      const stylesSearch = styles.join('|');
      const pathPrefix = json.apps ? '../' : '';

      if (stylesSearch.search('node_modules/@clr/city/css/bundles/default.min.css') < 0) {
        styles.unshift(pathPrefix + 'node_modules/@clr/city/css/bundles/default.min.css');
      }
    });
    // 3. Install the "@clr/city": "^1.0.0" package if not already installed.
    _context.addTask(new NodePackageInstallTask());
    _context.logger.info('✅️ Upgraded to Clarity City');

    return tree;
  };
}
