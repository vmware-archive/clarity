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
