import rule from './index';
import { getHtmlRuleTester, getInvalidTestFactory, getTsRuleTester } from '../../test-helper.spec';

const tsRuleTester = getTsRuleTester();
const htmlRuleTester = getHtmlRuleTester();

const getInvalidButtonTest = getInvalidTestFactory('clrButtonFailure');

htmlRuleTester.run('no-clr-button', rule, {
  invalid: [
    getInvalidButtonTest({
      code: `
      <button class="btn btn-primary">Shalqlq</button>
      `,
      locations: [{ line: 2, column: 7 }],
    }),
    getInvalidButtonTest({
      code: `
      <div>
        <button class="btn btn-primary">Shalqlq</button>
        </div>
      `,
      locations: [{ line: 3, column: 9 }],
    }),
    getInvalidButtonTest({
      code: `
      <div></div>
      <button class="btn btn-primary">Shalqlq</button>
      `,
      locations: [{ line: 3, column: 7 }],
    }),
    getInvalidButtonTest({
      code: `
      <div></div>
      <button id="#button" class="btn btn-primary">Shalqlq</button>
      `,
      locations: [{ line: 3, column: 7 }],
    }),
    getInvalidButtonTest({
      code: `
      <div><ul></ul><button class="btn btn-primary"></button></div>
      `,
      locations: [{ line: 2, column: 21 }],
    }),
    getInvalidButtonTest({
      code: `
      <button class="btn btn-primary">Le button</button>
      <div><ul></ul><button class="btn btn-success"></button></div>
      `,
      locations: [
        { line: 2, column: 7 },
        { line: 3, column: 21 },
      ],
    }),
  ],
  valid: [`<button class="shalqlq">Le button</button>`, `<div></div>`],
});

tsRuleTester.run('no-clr-button', rule, {
  invalid: [
    getInvalidButtonTest({
      code: `
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
      locations: [{ line: 6, column: 13 }],
    }),
    getInvalidButtonTest({
      code: `
      @Component({
        selector: 'app-custom-button',
        template: \`
          <button class="btn btn-warning custom-class">Primary</button>
        \`
      })
      export class CustomButtonComponent {
      }
      `,
      locations: [{ line: 5, column: 11 }],
    }),
    getInvalidButtonTest({
      code: `
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
      locations: [
        { line: 5, column: 11 },
        { line: 7, column: 11 },
        { line: 8, column: 26 },
      ],
    }),
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
