import rule from './index';
import { getHtmlRuleTester, getInvalidTestFactory, getTsRuleTester } from '../../test-helper.spec';

const tsRuleTester = getTsRuleTester();
const htmlRuleTester = getHtmlRuleTester();

const getInvalidTextareaTest = getInvalidTestFactory('clrTextareaFailure');

htmlRuleTester.run('no-clr-textarea', rule, {
  invalid: [
    getInvalidTextareaTest({
      code: `<textarea clrTextarea>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidTextareaTest({
      code: `
        <clr-textarea-container>
          <textarea clrTextarea>
        </clr-textarea-container>
      `,
      locations: [{ line: 2, column: 9 }],
    }),

    getInvalidTextareaTest({
      code: `<textarea class="clr-textarea">`,
      locations: [{ line: 1, column: 1 }],
    }),
  ],
  valid: [`<textarea>`, `<div clrTextarea></div>`],
});

tsRuleTester.run('no-clr-textarea', rule, {
  invalid: [
    getInvalidTextareaTest({
      code: `
      @Component({
        template: \`
          <textarea clrTextarea>
        \`
      })
      export class CustomTextareaComponent {}
      `,
      locations: [{ line: 4, column: 11 }],
    }),
    getInvalidTextareaTest({
      code: `
      @Component({
        template: \`
          <clr-textarea-container>
            <textarea clrTextarea>
          </clr-textarea-container>
        \`
      })
      export class CustomTextareaComponent {}
      `,
      locations: [{ line: 4, column: 11 }],
    }),
    getInvalidTextareaTest({
      code: `
      @Component({
        template: \`
          <textarea class="clr-textarea">
        \`
      })
      export class CustomTextareaComponent {}
      `,
      locations: [{ line: 4, column: 11 }],
    }),
  ],
  valid: [
    `
    @Component({
      template: \`
        <textarea>
      \`
    })
    export class CustomTextareaComponent {}
    `,
    `
    @Component({
      template: \`
        <div clrTextarea></div>
      \`
    })
    export class CustomTextareaComponent {}
    `,
  ],
});
