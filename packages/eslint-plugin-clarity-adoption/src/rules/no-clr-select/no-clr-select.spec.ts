import rule from './index';
import { getHtmlRuleTester, getInvalidTestFactory, getTsRuleTester } from '../../test-helper.spec';

const tsRuleTester = getTsRuleTester();
const htmlRuleTester = getHtmlRuleTester();

const getInvalidSelectTest = getInvalidTestFactory('clrSelectFailure');

htmlRuleTester.run('no-clr-select', rule, {
  invalid: [
    getInvalidSelectTest({
      code: `<select clrSelect name="options" [(ngModel)]="options">
        <option value="one">One</option>
        <option value="two">Two</option>
        <option value="three">Three</option>
      </select>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidSelectTest({
      code: `
        <clr-select-container>
          <label>Select options</label>
          <select clrSelect name="options" [(ngModel)]="options">
            <option value="one">One</option>
            <option value="two">Two</option>
            <option value="three">Three</option>
          </select>
        </clr-select-container>
      `,
      locations: [{ line: 2, column: 9 }],
    }),
  ],
  valid: [`<select>`, `<input clrSelect>`, `<select clrInput>`],
});

tsRuleTester.run('no-clr-select', rule, {
  invalid: [
    getInvalidSelectTest({
      code: `
      @Component({
        template: \`
          <select clrSelect name="options" [(ngModel)]="options">
            <option value="one">One</option>
            <option value="two">Two</option>
            <option value="three">Three</option>
          </select>
        \`
      })
      export class CustomSelectComponent {}
      `,
      locations: [{ line: 4, column: 11 }],
    }),
    getInvalidSelectTest({
      code: `
      @Component({
        template: \`
          <clr-select-container>
            <select clrSelect name="options" [(ngModel)]="options">
              <option value="one">One</option>
              <option value="two">Two</option>
              <option value="three">Three</option>
            </select>
          </clr-select-container>
        \`
      })
      export class CustomSelectComponent {}
      `,
      locations: [{ line: 4, column: 11 }],
    }),
  ],
  valid: [
    `
    @Component({
      template: \`
        <select>
      \`
    })
    export class CustomSelectComponent {}
    `,
    `
    @Component({
      template: \`
        <div clrSelect></div>
      \`
    })
    export class CustomSelectComponent {}
    `,
  ],
});
