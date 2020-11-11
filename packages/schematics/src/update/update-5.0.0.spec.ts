/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { HostTree } from '@angular-devkit/schematics';
import { setupProject } from '../utility/setup-project';
import { getFileContent } from '../utility/get-file-content';

const clarityCorePackageName = '@clr/core';

describe('Migration to version 5.0', () => {
  let runner: SchematicTestRunner;
  let workspaceTree: UnitTestTree;

  beforeEach(async () => {
    runner = new SchematicTestRunner('migrations', require.resolve('../migration-collection.json'));
    workspaceTree = await setupProject(new UnitTestTree(new HostTree()), runner, 'foo');
  });

  it('should add the @clr/core package to the project dependencies', async () => {
    const packageJsonPath = '/package.json';
    const packageJsonString = workspaceTree.read(packageJsonPath)?.toString();
    if (packageJsonString === undefined) {
      fail('Could not read package.json');
    }
    const packageJson = JSON.parse(packageJsonString!);
    packageJson.dependencies['@clr/angular'] = '4.0.0';
    workspaceTree.overwrite(packageJsonPath, JSON.stringify(packageJson));

    const tree = await runner.runSchematicAsync('migration-5.0', {}, workspaceTree).toPromise();
    expect(tree.files).toContain(packageJsonPath);
    const { dependencies } = JSON.parse(getFileContent(tree, packageJsonPath));

    expect(dependencies).toBeDefined();
    expect(dependencies[clarityCorePackageName]).toEqual('^5.0.0');
  });

  it('should not modify the project dependencies if @clr/angular is not a dependency', async () => {
    const tree = await runner.runSchematicAsync('migration-5.0', {}, workspaceTree).toPromise();
    const packageJsonPath = '/package.json';
    expect(tree.files).toContain(packageJsonPath);
    const { dependencies } = JSON.parse(getFileContent(tree, packageJsonPath));

    expect(dependencies).toBeDefined();
    expect(dependencies[clarityCorePackageName]).not.toBeDefined();
  });

  it('should not modify the project dependencies if @clr/core is already a dependency', async () => {
    const packageJsonPath = '/package.json';
    const predefinedClarityCoreVersion = 'latest';
    const packageJsonString = workspaceTree.read(packageJsonPath)?.toString();
    if (packageJsonString === undefined) {
      fail('Could not read package.json');
    }
    const packageJson = JSON.parse(packageJsonString!);
    packageJson.dependencies[clarityCorePackageName] = predefinedClarityCoreVersion;
    workspaceTree.overwrite(packageJsonPath, JSON.stringify(packageJson));

    const tree = await runner.runSchematicAsync('migration-5.0', {}, workspaceTree).toPromise();
    expect(tree.files).toContain(packageJsonPath);
    const { dependencies } = JSON.parse(getFileContent(tree, packageJsonPath));

    expect(dependencies).toBeDefined();
    expect(dependencies[clarityCorePackageName]).toEqual(predefinedClarityCoreVersion);
  });
});
