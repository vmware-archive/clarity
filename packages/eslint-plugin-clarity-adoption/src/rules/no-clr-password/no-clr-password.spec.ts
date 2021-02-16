import rule from './index';
import { getHtmlRuleTester, getInvalidTestFactory, getTsRuleTester } from '../../test-helper.spec';

const tsRuleTester = getTsRuleTester();
const htmlRuleTester = getHtmlRuleTester();

const getInvalidPasswordTest = getInvalidTestFactory('clrPasswordFailure');

htmlRuleTester.run('no-clr-password', rule, {
  invalid: [
    getInvalidPasswordTest({
      code: `<input clrPassword placeholder="Password" name="password" [(ngModel)]="exampleOne">`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidPasswordTest({
      code: `
        <clr-password-container>
          <input clrPassword placeholder="Password" name="password" [(ngModel)]="exampleOne">
        </clr-password-container>
      `,
      locations: [{ line: 2, column: 9 }],
    }),
  ],
  valid: [`<input>`, `<div clrPassword></div>`, `<input clrInput>`],
});

tsRuleTester.run('no-clr-password', rule, {
  invalid: [
    getInvalidPasswordTest({
      code: `
      @Component({
        template: \`
          <input clrPassword placeholder="Password" name="password" [(ngModel)]="exampleOne">
        \`
      })
      export class CustomPasswordComponent {}
      `,
      locations: [{ line: 4, column: 11 }],
    }),
    getInvalidPasswordTest({
      code: `
      @Component({
        template: \`
          <clr-password-container>
            <input clrPassword placeholder="Password" name="password" [(ngModel)]="exampleOne">
          </clr-password-container>
        \`
      })
      export class CustomPasswordComponent {}
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
    export class CustomPasswordComponent {}
    `,
    `
    @Component({
      template: \`
        <div clrPassword></div>
      \`
    })
    export class CustomPasswordComponent {}
    `,
  ],
});
