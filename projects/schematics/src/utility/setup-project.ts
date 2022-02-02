/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { UnitTestTree, SchematicTestRunner } from '@angular-devkit/schematics/testing';

export async function setupProject(
  tree: UnitTestTree,
  schematicRunner: SchematicTestRunner,
  name: string
): Promise<UnitTestTree> {
  tree = await schematicRunner
    .runExternalSchematicAsync('@schematics/angular', 'workspace', {
      name: 'workspace',
      version: '10.0.0',
      newProjectRoot: '',
    })
    .toPromise();

  tree = await schematicRunner
    .runExternalSchematicAsync(
      '@schematics/angular',
      'application',
      {
        name,
        projectRoot: '',
      },
      tree
    )
    .toPromise();

  return tree;
}
