import { LineAndColumnData } from '@typescript-eslint/types/dist/ts-estree';
import rule from './index';
import { RuleTester } from '../../test-helper.spec';

interface InvalidTest {
  code: string;
  errors: Array<{
    messageId: string;
    line?: number;
    column?: number;
  }>;
  output?: string;
}

const alertFailureMessageId = 'clrAlertFailure';

const tsRuleTester = new RuleTester({
  parserOptions: {
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
});

const htmlRuleTester = new RuleTester({
  parserOptions: {
    sourceType: 'module',
  },
  parser: '../src/html-parser',
});

function getInvalidTest(
  code: string,
  locations?: Array<LineAndColumnData>,
  messageIds?: Array<string>,
  output?: string
): InvalidTest {
  if (!messageIds) {
    messageIds = [alertFailureMessageId];
  }

  const invalidTest: InvalidTest = {
    code,
    errors: [],
  };

  messageIds.forEach(messageId => {
    invalidTest.errors.push({ messageId });
  });

  locations?.forEach((location, index) => {
    invalidTest.errors[index].line = location.line;
    invalidTest.errors[index].column = location.column;
  });

  if (output) {
    invalidTest.output = output;
  }

  return invalidTest;
}

htmlRuleTester.run('no-clr-alert', rule, {
  invalid: [
    getInvalidTest(
      `
      <clr-alert [clrAlertType]="'danger'" [clrAlertAppLevel]="true">
        <clr-alert-item>
          <span class="alert-text">
            This is an app level alert.
          </span>
          <div class="alert-actions">
            <button class="btn alert-action">Fix</button>
          </div>
        </clr-alert-item>
      </clr-alert>
      `,
      [{ line: 2, column: 7 }]
    ),

    getInvalidTest(
      `
      <clr-alerts>
        <clr-alert [clrAlertType]="'info'" [clrAlertAppLevel]="true">
          <clr-alert-item>
          <span class="alert-text">
            This is the first app level alert.
          </span>
          <div class="alert-actions">
            <button class="btn alert-action">Fix</button>
          </div>
        </clr-alert-item>
        </clr-alert>
        <clr-alert [clrAlertType]="'danger'" [clrAlertAppLevel]="true">
          <clr-alert-item>
          <span class="alert-text">
            This is a second app level alert.
          </span>
          <div class="alert-actions">
            <button class="btn alert-action">Fix</button>
          </div>
          </clr-alert-item>
        </clr-alert>
      </clr-alerts>
      `,
      [
        { line: 3, column: 9 },
        { line: 13, column: 9 },
      ],
      [alertFailureMessageId, alertFailureMessageId]
    ),
    getInvalidTest(
      `
      <div class="alert alert-danger" role="alert">
        <div class="alert-items">
            <div class="alert-item static"></div>
            <div class="alert-item static"></div>
        </div>
      </div>

      <div class="alert alert-warning" role="alert">
        <div class="alert-items">
          <div class="alert-item static">
            <div class="alert-icon-wrapper">
              <clr-icon class="alert-icon" shape="exclamation-triangle"></clr-icon>
            </div>
            <span class="alert-text">...</span>
            <div class="alert-actions">
              <div class="alert-action dropdown bottom-right open">
                <button class="dropdown-toggle">
                  Actions
                  <clr-icon shape="caret down"></clr-icon>
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="...">Shutdown</a>
                  <a class="dropdown-item" href="...">Suspend</a>
                  <a class="dropdown-item" href="...">Reboot</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button type="button" class="close" aria-label="Close">
          <clr-icon aria-hidden="true" shape="close"></clr-icon>
        </button>
      </div>
      `,
      [
        { line: 2, column: 7 },
        { line: 9, column: 7 },
      ],
      [alertFailureMessageId, alertFailureMessageId]
    ),
  ],
  valid: [
    `
      <div class="my-alert"></div>
    `,
    `
      <cl-alert><cl-alert>
    `,
    `
      <alert></alert>
    `,
  ],
});

tsRuleTester.run('no-clr-alert', rule, {
  invalid: [
    getInvalidTest(
      `
      @Component({
        template: \`
          <clr-alert [clrAlertType]="'warning'">
            <clr-alert-item>
              <span class="alert-text">
                Try closing this alert.
              </span>
            </clr-alert-item>
          </clr-alert>
        \`
      })
      export class CustomAlertComponent {

      }
      `,
      [{ line: 4, column: 11 }]
    ),
    getInvalidTest(
      `
      @Component({
        template: \`
          <div class="alert alert-danger" role="alert">
            <div class="alert-items">
                <div class="alert-item static"></div>
                <div class="alert-item static"></div>
            </div>
          </div>
        \`
      })
      export class CustomAlertComponent {

      }
      `,
      [{ line: 4, column: 11 }]
    ),
  ],
  valid: [
    `
    @Component({
      selector: 'app-custom-alert',
      template: \`
        <div></div>
      \`
      })
      export class CustomAlertComponent {
        // Should we catch that case?
        const myAlert = \`
          <clr-alert [clrAlertType]="'warning'">
            <clr-alert-item>
              <span class="alert-text">
                Try closing this alert.
              </span>
            </clr-alert-item>
          </clr-alert>
        \`;
      }
    `,
  ],
});
