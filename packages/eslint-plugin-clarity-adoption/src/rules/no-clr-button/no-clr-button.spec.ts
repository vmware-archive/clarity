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

interface Location {
  line: number;
  column: number;
}

const buttonFailureMessageId = 'clrButtonFailure';

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
  locations?: Array<Location>,
  messageIds?: Array<string>,
  output?: string
): InvalidTest {
  if (!messageIds) {
    messageIds = [buttonFailureMessageId];
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

htmlRuleTester.run('no-clr-button', rule, {
  invalid: [
    getInvalidTest(
      `
      <button class="btn btn-primary">Shalqlq</button>
    `,
      [{ line: 2, column: 7 }]
    ),
    getInvalidTest(
      `
      <div>
        <button class="btn btn-primary">Shalqlq</button>
        </div>
    `,
      [{ line: 3, column: 9 }]
    ),
    getInvalidTest(
      `
      <div></div>
      <button class="btn btn-primary">Shalqlq</button>
    `,
      [{ line: 3, column: 7 }]
    ),
    getInvalidTest(
      `
      <div></div>
      <button id="#button" class="btn btn-primary">Shalqlq</button>
    `,
      [{ line: 3, column: 7 }]
    ),
    getInvalidTest(
      `
      <div><ul></ul><button class="btn btn-primary"></button></div>
    `,
      [{ line: 2, column: 21 }]
    ),
    getInvalidTest(
      `
      <button class="btn btn-primary">Le button</button>
      <div><ul></ul><button class="btn btn-success"></button></div>
    `,
      [
        { line: 2, column: 7 },
        { line: 3, column: 21 },
      ],
      [buttonFailureMessageId, buttonFailureMessageId]
    ),
  ],
  valid: [`<button class="shalqlq">Le button</button>`, `<div></div>`],
});

tsRuleTester.run('no-clr-button', rule, {
  invalid: [
    getInvalidTest(
      `
      @Component({
        selector: 'app-custom-button',
        template: \`
          <div>
            <button class="btn btn-primary custom-class">Primary</button>
          </div>
        \`
      })
      export class CustomButtonComponent {
      }
    `,
      [{ line: 6, column: 13 }]
    ),
    getInvalidTest(
      `
      @Component({
        selector: 'app-custom-button',
        template: \`
          <button class="btn btn-warning custom-class">Primary</button>
        \`
      })
      export class CustomButtonComponent {
      }
    `,
      [{ line: 5, column: 11 }]
    ),
    getInvalidTest(
      `
      @Component({
        selector: 'app-custom-button',
        template: \`
          <button class="btn btn-primary custom-class">Primary</button>
          <div>Text</div>
          <button class="btn btn-danger custom-class">Primary</button>
          <div>Text</div><button class="btn btn-success custom-class">Primary</button><p></p>
        \`
      })
      export class CustomButtonComponent {
      }
    `,
      [
        { line: 5, column: 11 },
        { line: 7, column: 11 },
        { line: 8, column: 26 },
      ],
      [buttonFailureMessageId, buttonFailureMessageId, buttonFailureMessageId]
    ),
  ],
  valid: [
    `
      @Component({
        selector: 'app-custom-button',
        template: \`
          <div></div>
        \`
        })
        export class CustomButtonComponent {
          // Should we catch that case?
          const myButton = \`
            <button class="btn btn-primary custom-class">Primary</button>
          \`;
        }
      `,
  ],
});
