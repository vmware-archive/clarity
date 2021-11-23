/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Tree, HostTree, SchematicsException } from '@angular-devkit/schematics';
import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { join } from 'path';
import { configFileName } from '../utility/angular-config-filename';
import { getFileContent } from '../utility/get-file-content';
import { setupProject } from '../utility/setup-project';
import { cdsAngularVersion, cdsCityVersion } from './versions';

const PROJECT_NAME = 'foo';
const collectionPath = join(__dirname, '../cds-collection.json');
const packageJsonPath = '/package.json';

describe('ng add @cds/angular', () => {
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

      expect(tree.files).toContain(packageJsonPath);
      const { dependencies } = JSON.parse(getFileContent(tree, packageJsonPath));

      expect(dependencies).toBeDefined();
      expect(dependencies['@cds/core']).toEqual(cdsAngularVersion);
      expect(dependencies['@cds/angular']).toEqual(cdsAngularVersion);
      expect(dependencies['@cds/city']).toEqual(cdsCityVersion);
    });

    it('should add @cds/angular with version the same as the already defined @cds/core version', async () => {
      const alreadyDefinedCoreVersion = '~5.0.1';

      const packageJsonBuffer = workspaceTree.read(packageJsonPath);
      const packageJson = JSON.parse(packageJsonBuffer?.toString() || '');
      packageJson.dependencies['@cds/core'] = alreadyDefinedCoreVersion;
      workspaceTree.overwrite(packageJsonPath, JSON.stringify(packageJson, null, 2));

      const tree = await runner.runSchematicAsync('ng-add', {}, workspaceTree).toPromise();

      expect(tree.files).toContain(packageJsonPath);
      const { dependencies } = JSON.parse(getFileContent(tree, packageJsonPath));

      expect(dependencies).toBeDefined();
      expect(dependencies['@cds/core']).toEqual(alreadyDefinedCoreVersion);
      expect(dependencies['@cds/angular']).toEqual(alreadyDefinedCoreVersion);
      expect(dependencies['@cds/city']).toEqual(cdsCityVersion);
    });

    it("should add the latest version of @cds/angular if there's a newer version of @cds/core in the package.json", async () => {
      const alreadyDefinedCoreVersion = '~100.0.0';

      const packageJsonBuffer = workspaceTree.read(packageJsonPath);
      const packageJson = JSON.parse(packageJsonBuffer?.toString() || '');
      packageJson.dependencies['@cds/core'] = alreadyDefinedCoreVersion;
      workspaceTree.overwrite(packageJsonPath, JSON.stringify(packageJson, null, 2));

      const tree = await runner.runSchematicAsync('ng-add', {}, workspaceTree).toPromise();

      expect(tree.files).toContain(packageJsonPath);
      const { dependencies } = JSON.parse(getFileContent(tree, packageJsonPath));

      expect(dependencies).toBeDefined();
      expect(dependencies['@cds/core']).toEqual(alreadyDefinedCoreVersion);
      expect(dependencies['@cds/angular']).toEqual(cdsAngularVersion);
      expect(dependencies['@cds/city']).toEqual(cdsCityVersion);
    });

    it('should not override the existing version of @cds/city', async () => {
      const alreadyDefinedCityVersion = '~1.0.0';

      const packageJsonBuffer = workspaceTree.read(packageJsonPath);
      const packageJson = JSON.parse(packageJsonBuffer?.toString() || '');
      packageJson.dependencies['@cds/city'] = alreadyDefinedCityVersion;
      workspaceTree.overwrite(packageJsonPath, JSON.stringify(packageJson, null, 2));

      const tree = await runner.runSchematicAsync('ng-add', {}, workspaceTree).toPromise();

      expect(tree.files).toContain(packageJsonPath);
      const { dependencies } = JSON.parse(getFileContent(tree, packageJsonPath));

      expect(dependencies).toBeDefined();
      expect(dependencies['@cds/city']).toEqual(alreadyDefinedCityVersion);
      expect(dependencies['@cds/core']).toEqual(cdsAngularVersion);
      expect(dependencies['@cds/angular']).toEqual(cdsAngularVersion);
    });

    it('should add Clarity assets in the configuration file', async () => {
      const tree = await runner.runSchematicAsync('ng-add', {}, workspaceTree).toPromise();

      const configFilePath = `/${configFileName}`;
      expect(tree.files).toContain(configFilePath);
      const configFile = JSON.parse(getFileContent(tree, configFilePath));

      const styles = configFile.projects[PROJECT_NAME].architect.build.options.styles;

      expect(styles.includes('node_modules/modern-normalize.css/modern-normalize.css')).toBeTruthy();
      expect(styles.includes('node_modules/@cds/core/global.min.css')).toBeTruthy();
      expect(styles.includes('node_modules/@cds/core/styles/module.shims.min.css')).toBeTruthy();
      expect(styles.includes('node_modules/@cds/city/css/bundles/default.min.css')).toBeTruthy();
    });

    it('should import CdsModule to the root module', async () => {
      const tree = await runner.runSchematicAsync('ng-add', {}, workspaceTree).toPromise();
      const rootModulePath = '/src/app/app.module.ts';
      const content = getFileContent(tree, rootModulePath);

      expect(content).toMatch(/import { CdsModule } from '@cds\/angular'/);
    });

    it('should add cds-text tag to the body tag in the index.html', async () => {
      const tree = await runner.runSchematicAsync('ng-add', {}, workspaceTree).toPromise();
      const indexHtmlPath = '/src/index.html';
      const content = getFileContent(tree, indexHtmlPath);

      expect(content).toMatch(/<body cds-text="body">/);
    });
  });
});
