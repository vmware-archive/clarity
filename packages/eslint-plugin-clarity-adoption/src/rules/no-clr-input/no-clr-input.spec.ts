import rule from './index';
import { getHtmlRuleTester, getInvalidTestFactory, getTsRuleTester } from '../../test-helper.spec';

const tsRuleTester = getTsRuleTester();
const htmlRuleTester = getHtmlRuleTester();

const getInvalidInputTest = getInvalidTestFactory('clrInputFailure');

htmlRuleTester.run('no-clr-input', rule, {
  invalid: [
    getInvalidInputTest({
      code: `<input clrInput>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidInputTest({
      code: `
        <clr-input-container>
          <input clrInput>
        </clr-input-container>
      `,
      locations: [{ line: 2, column: 9 }],
    }),

    getInvalidInputTest({
      code: `<input class="clr-input">`,
      locations: [{ line: 1, column: 1 }],
    }),
  ],
  valid: [`<input>`, `<div clrInput></div>`],
});

tsRuleTester.run('no-clr-input', rule, {
  invalid: [
    getInvalidInputTest({
      code: `
      @Component({
        template: \`
          <input clrInput>
        \`
      })
      export class CustomInputComponent {}
      `,
      locations: [{ line: 4, column: 11 }],
    }),
    getInvalidInputTest({
      code: `
      @Component({
        template: \`
          <clr-input-container>
            <input clrInput>
          </clr-input-container>
        \`
      })
      export class CustomInputComponent {}
      `,
      locations: [{ line: 4, column: 11 }],
    }),
    getInvalidInputTest({
      code: `
      @Component({
        template: \`
          <input class="clr-input">
        \`
      })
      export class CustomInputComponent {}
      `,
      locations: [{ line: 4, column: 11 }],
    }),
  ],
  valid: [
    `
    @Component({
      template: \`
        <input>
      \`
    })
    export class CustomInputComponent {}
    `,
    `
    @Component({
      template: \`
        <div clrInput></div>
      \`
    })
    export class CustomInputComponent {}
    `,
  ],
});
