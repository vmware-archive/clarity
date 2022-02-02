/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Tree } from '@angular-devkit/schematics';
import { getAppModulePath } from '@schematics/angular/utility/ng-ast-utils';
import { getMainPath } from './get-main-path';

export function findAppModule(host: Tree, config: any, projectName: string): string {
  const mainPath = getMainPath(config, projectName);
  const appModulePath = getAppModulePath(host, mainPath);

  return appModulePath;
}
