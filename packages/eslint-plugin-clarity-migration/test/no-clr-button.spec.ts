import rule from '../src/rules/no-clr-button';
import { RuleTester } from './test-helper';

interface InvalidTest {
  code: string;
  errors: Array<{ messageId: string }>;
  output?: string;
}

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
  parser: 'eslint-html-parser',
});

function getInvalidTest(code: string, output?: string): InvalidTest {
  const invalidTest: InvalidTest = {
    code,
    errors: [{ messageId: 'clrButtonFailure' }],
  };

  if (output) {
    invalidTest.output = output;
  }

  return invalidTest;
}

htmlRuleTester.run('no-clr-button', rule, {
  invalid: [
    getInvalidTest(`
            <button class="btn btn-primary">Shalqlq</button>
        `),
    getInvalidTest(`
            <div>
                <button class="btn btn-primary">Shalqlq</button>
            </div>
        `),
    // TODO: The HTML parser can't handle this case.
    // It traverses only the first tag.
    // getInvalidTest(`
    //     <div></div>
    //     <button class="btn btn-primary">Shalqlq</button>
    // `),
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
            `
    ),
    getInvalidTest(
      `
            @Component({
                selector: 'app-custom-button',
                template: \`
                    <button class="btn btn-primary custom-class">Primary</button>
                \`
              })
              export class CustomButtonComponent {
              }
            `
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
