import rule from './index';
import { getHtmlRuleTester, getInvalidTestFactory, getTsRuleTester } from '../../test-helper.spec';

const tsRuleTester = getTsRuleTester();
const htmlRuleTester = getHtmlRuleTester();

const getInvalidFormTest = getInvalidTestFactory('clrFormFailure');

htmlRuleTester.run('no-clr-form', rule, {
  invalid: [
    getInvalidFormTest({
      code: `<form clrForm></form>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidFormTest({
      code: `
        <form clrForm>
          <clr-input-container>
            <label>My name</label>
            <input clrInput placeholder="Enter text here!" name="name" [(ngModel)]="name" />
          </clr-input-container>
        </form>
      `,
      locations: [{ line: 2, column: 9 }],
    }),
    getInvalidFormTest({
      code: `<form class="clr-form"></form>`,
      locations: [{ line: 1, column: 1 }],
    }),
  ],
  valid: [`<form></form>`, `<div clrForm></div>`],
});

tsRuleTester.run('no-clr-form', rule, {
  invalid: [
    getInvalidFormTest({
      code: `
      @Component({
        template: \`
          <form clrForm>
            <clr-input-container>
              <label>My name</label>
              <input clrInput placeholder="Enter text here!" name="name" [(ngModel)]="name" />
            </clr-input-container>
          </form>
        \`
      })
      export class CustomFormComponent {}
      `,
      locations: [{ line: 4, column: 11 }],
    }),
    getInvalidFormTest({
      code: `
      @Component({
        template: \`
          <form clrForm></form>
        \`
      })
      export class CustomFormComponent {}
      `,
      locations: [{ line: 4, column: 11 }],
    }),

    getInvalidFormTest({
      code: `
      @Component({
        template: \`
          <form class="clr-form"></form>
        \`
      })
      export class CustomFormComponent {}
      `,
      locations: [{ line: 4, column: 11 }],
    }),
  ],
  valid: [
    `
    @Component({
      template: \`
        <form></form>
      \`
    })
    export class CustomFormComponent {}
    `,
    `
    @Component({
      template: \`
        <div clrForm></div>
      \`
    })
    export class CustomFormComponent {}
    `,
  ],
});
