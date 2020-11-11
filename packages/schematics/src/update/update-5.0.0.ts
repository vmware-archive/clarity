/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Rule, Tree, SchematicContext } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { updateJsonFile } from '../utility/update-json-file';

const clarityCorePackageName = '@clr/core';
const clarityAngularPackageName = '@clr/angular';
const clarityCorePackageUpdateVersion = '^5.0.0';

export default function (): Rule {
  return (host: Tree, context: SchematicContext): void => {
    updateJsonFile(host, 'package.json', json => {
      // Do nothing if @clr/core is already a dependency
      const deps = json?.dependencies || {};
      if (Object.keys(deps).includes(clarityCorePackageName)) {
        return;
      }

      if (!json.dependencies) {
        json.dependencies = {};
      }
      const clarityAngularVersion = json.dependencies[clarityAngularPackageName];
      // Do nothing if @clr/angular is not a dependency
      if (!clarityAngularVersion) {
        return;
      }
      // Add the same version of @clr/core as
      // the version of @clr/angular that's in the package.json
      json.dependencies[clarityCorePackageName] = clarityCorePackageUpdateVersion;
    });

    context.addTask(new NodePackageInstallTask());
  };
}
