import { HostTree } from '@angular-devkit/schematics';
import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import { join } from 'path';
import { setupProject } from '../../utility/setup-project';
import { getFileContent } from '../../utility/get-file-content';

const PROJECT_NAME = 'foo';
const collectionPath = join(__dirname, '../../collection.json');

describe('Migrate Angular alerts to Core alerts', () => {
  let runner: SchematicTestRunner;
  let workspaceTree: UnitTestTree;

  beforeEach(async () => {
    runner = new SchematicTestRunner('schematics', collectionPath);
    workspaceTree = await setupProject(new UnitTestTree(new HostTree()), runner, PROJECT_NAME);
  });

  // Enable to run the migration test
  xit('should migrate <clr-alert> to <cds-alert-group>', async () => {
    const fileWithCodeToMigrate = '/src/app/app.component.html';
    const codeToMigrate = `
      <clr-alert [clrAlertClosable]="true">
        <clr-alert-item>
          <span class="alert-text">
            This is the ClrAlert (with one clr-alert-item).
          </span>
        </clr-alert-item>
      </clr-alert>
    `;
    workspaceTree.overwrite(fileWithCodeToMigrate, codeToMigrate);

    const tree = await runner.runSchematicAsync('migrate-alert', {}, workspaceTree).toPromise();

    const migratedContent = getFileContent(tree, fileWithCodeToMigrate);

    const expectedContent = `
      <cds-alert-group status="info" *ngIf="coreAlertIsOpen">
        <cds-alert closable (closeChange)="log($event)">
          This is the cds-alert-group with one cds-alert.
        </cds-alert>
      </cds-alert-group>
    `;

    expect(migratedContent).toEqual(expectedContent);
  });
});
