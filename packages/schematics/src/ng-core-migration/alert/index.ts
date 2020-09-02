/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Tree, SchematicContext } from '@angular-devkit/schematics';

export function migrateAlert() {
  return (tree: Tree, context: SchematicContext) => {
    context.logger.info(`Migrating clr-alert to cds-alert-group...`);
    return tree;
  };
}
