/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Tree, HostTree, SchematicsException } from '@angular-devkit/schematics';
import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { join } from 'path';
import { getFileContent } from '../utility/get-file-content';
import { setupProject } from '../utility/setup-project';

const PROJECT_NAME = 'foo';
const collectionPath = join(__dirname, '../collection.json');

describe('ng add @clr/angular', () => {
  it('should print an error if executed in an empty directory', async () => {
    const runner = new SchematicTestRunner('schematics', collectionPath);
    try {
      await runner.runSchematicAsync('ng-add', { module: 'app' }, Tree.empty()).toPromise();
      fail('expected to throw');
    } catch (e) {
      expect(e instanceof SchematicsException);
      expect(e.message).toEqual('Could not install Clarity, requires Angular and Angular CLI version 6 or greater');
    }
  });

  describe('in a new Angular workspace', async () => {
    let runner: SchematicTestRunner;
    let workspaceTree: UnitTestTree;

    beforeEach(async () => {
      runner = new SchematicTestRunner('schematics', collectionPath);
      workspaceTree = await setupProject(new UnitTestTree(new HostTree()), runner, PROJECT_NAME);
    });

    it('should add dependencies to Clarity packages', async () => {
      const tree = await runner.runSchematicAsync('ng-add', {}, workspaceTree).toPromise();

      const packageJsonPath = '/package.json';
      expect(tree.files).toContain(packageJsonPath);
      const { dependencies } = JSON.parse(getFileContent(tree, packageJsonPath));

      expect(dependencies).toBeDefined();
      expect(dependencies['@clr/angular']).toBeDefined();
      expect(dependencies['@clr/ui']).toBeDefined();
      expect(dependencies['@cds/core']).toBeDefined();
    });

    it('should add Clarity assets in the configuration file', async () => {
      const tree = await runner.runSchematicAsync('ng-add', {}, workspaceTree).toPromise();

      const configFilePath = '/angular.json';
      expect(tree.files).toContain(configFilePath);
      const configFile = JSON.parse(getFileContent(tree, configFilePath));

      const styles = configFile.projects[PROJECT_NAME].architect.build.options.styles;

      expect(styles.includes('node_modules/@clr/ui/clr-ui.min.css')).toBeTruthy();
    });

    it('should not add Clarity assets in the configuration file if they are already present', async () => {
      const configFilePath = '/angular.json';
      const configFile = JSON.parse(getFileContent(workspaceTree, configFilePath));

      const styles = configFile.projects[PROJECT_NAME].architect.build.options.styles || [];
      styles.push('node_modules/@clr/ui/clr-ui');
      configFile.projects[PROJECT_NAME].architect.build.options.styles = styles;

      workspaceTree.overwrite(configFilePath, JSON.stringify(configFile, null, 2));

      const tree = await runner.runSchematicAsync('ng-add', {}, workspaceTree).toPromise();
      expect(tree.files).toContain(configFilePath);
      const updatedConfigFile = JSON.parse(getFileContent(tree, configFilePath));

      const updatedStyles = updatedConfigFile.projects[PROJECT_NAME].architect.build.options.styles;
      expect(updatedStyles.includes('node_modules/@clr/ui/clr-ui.min.css')).toBeFalsy();
      expect(updatedStyles.includes('node_modules/@clr/icons/clr-icons.min.css')).toBeFalsy();
    });

    it('should import ClarityModule to the root module', async () => {
      const tree = await runner.runSchematicAsync('ng-add', {}, workspaceTree).toPromise();
      const rootModulePath = '/src/app/app.module.ts';
      const content = getFileContent(tree, rootModulePath);

      expect(content).toMatch(/import { ClarityModule } from '@clr\/angular'/);
    });

    it('should import BrowserAnimationsModule to the root module', async () => {
      const tree = await runner.runSchematicAsync('ng-add', {}, workspaceTree).toPromise();
      const rootModulePath = '/src/app/app.module.ts';
      const content = getFileContent(tree, rootModulePath);

      expect(content).toMatch(/import { BrowserAnimationsModule } from '@angular\/platform-browser\/animations'/);
    });
  });
});
