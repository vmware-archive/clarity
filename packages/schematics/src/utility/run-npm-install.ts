/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Tree, SchematicContext } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';

export function runNpmInstall(_tree: Tree, context: SchematicContext): void {
  context.addTask(new NodePackageInstallTask());
}
