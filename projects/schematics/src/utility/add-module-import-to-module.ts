/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Tree, SchematicsException } from '@angular-devkit/schematics';
import { InsertChange, Change } from '@schematics/angular/utility/change';
import { addImportToModule } from '@schematics/angular/utility/ast-utils';
import { getTypeScriptSourceFile } from './get-typescript-source-file';

/**
 * Import and add module to specific module path.
 * @param host {Tree} The source tree.
 * @param importedModuleName {String} The name of the imported module.
 * @param importedModulePath {String} The location of the imported module.
 * @param moduleToImportIn {String} The location of the module to import in.
 */
export function addModuleImportToModule(
  host: Tree,
  importedModuleName: string,
  importedModulePath: string,
  moduleToImportIn: string
): void {
  if (!moduleToImportIn) {
    throw new SchematicsException(`Entry module not found.`);
  }

  const moduleSource = getTypeScriptSourceFile(host, moduleToImportIn);
  if (!moduleSource) {
    throw new SchematicsException(`Module not found: ${moduleToImportIn}`);
  }

  const changes = addImportToModule(moduleSource, moduleToImportIn, importedModuleName, importedModulePath);
  const recorder = host.beginUpdate(moduleToImportIn);

  changes
    .filter((change: Change) => change instanceof InsertChange)
    .forEach((change: InsertChange) => recorder.insertLeft(change.pos, change.toAdd));

  host.commitUpdate(recorder);
}
