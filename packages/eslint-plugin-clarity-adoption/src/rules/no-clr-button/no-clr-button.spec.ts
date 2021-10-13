import rule from './index';
import { getHtmlRuleTester, getInvalidTestFactory, getTsRuleTester } from '../../test-helper.spec';

const tsRuleTester = getTsRuleTester();
const htmlRuleTester = getHtmlRuleTester();

const getInvalidButtonTest = getInvalidTestFactory('clrButtonFailure');

htmlRuleTester.run('no-clr-button', rule, {
  invalid: [
    getInvalidButtonTest({
      code: `
      <button class="btn btn-primary foo">Shalqlq</button>
      `,
      output: `
      <cds-button class="foo">Shalqlq</cds-button>
      `,
      locations: [{ line: 2, column: 7 }],
    }),
    getInvalidButtonTest({
      code: `
        <div>
          <button class="btn btn-primary">Shalqlq</button>
        </div>
      `,
      output: `
        <div>
          <cds-button>Shalqlq</cds-button>
        </div>
      `,
      locations: [{ line: 3, column: 11 }],
    }),
    getInvalidButtonTest({
      code: `
      <div></div>
      <button class="btn btn-primary">Shalqlq</button>
      `,
      output: `
      <div></div>
      <cds-button>Shalqlq</cds-button>
      `,
      locations: [{ line: 3, column: 7 }],
    }),
    getInvalidButtonTest({
      code: `
      <div></div>
      <button id="#button" data-id="foo" class="btn btn-primary">Shalqlq</button>
      `,
      output: `
      <div></div>
      <cds-button id="#button" data-id="foo">Shalqlq</cds-button>
      `,
      locations: [{ line: 3, column: 7 }],
    }),
    getInvalidButtonTest({
      code: `
      <div><ul></ul><button class="btn btn-primary">foo</button></div>
      `,
      output: `
      <div><ul></ul><cds-button>foo</cds-button></div>
      `,
      locations: [{ line: 2, column: 21 }],
    }),
    getInvalidButtonTest({
      code: `
      <button class="btn btn-primary">Le button</button>
      <div><ul></ul><button class="btn btn-success"></button></div>
      `,
      output: `
      <cds-button>Le button</cds-button>
      <div><ul></ul><cds-button status="success"></cds-button></div>
      `,
      locations: [
        { line: 2, column: 7 },
        { line: 3, column: 21 },
      ],
    }),
    getInvalidButtonTest({
      code: `
      <button class="btn btn-outline">Le button</button>
      <div><ul></ul><button class="btn btn-success">foo</button></div>
      `,
      output: `
      <cds-button action="outline">Le button</cds-button>
      <div><ul></ul><cds-button status="success">foo</cds-button></div>
      `,
      locations: [
        { line: 2, column: 7 },
        { line: 3, column: 21 },
      ],
    }),
    getInvalidButtonTest({
      code: `
      <button class="btn btn-success-outline">Le button</button>
      <div><ul></ul><button class="btn btn-success">foo</button></div>
      `,
      output: `
      <cds-button action="outline" status="success">Le button</cds-button>
      <div><ul></ul><cds-button status="success">foo</cds-button></div>
      `,
      locations: [
        { line: 2, column: 7 },
        { line: 3, column: 21 },
      ],
    }),
    getInvalidButtonTest({
      code: `
      <button class="btn btn-success-outline">Le button</button>
      <div><ul></ul><button class="btn btn-block">foo</button></div>
      `,
      output: `
      <cds-button action="outline" status="success">Le button</cds-button>
      <div><ul></ul><cds-button block>foo</cds-button></div>
      `,
      locations: [
        { line: 2, column: 7 },
        { line: 3, column: 21 },
      ],
    }),
    getInvalidButtonTest({
      code: `
      <button class="btn btn-success-outline">Le button</button>
      <div><ul></ul><button class="btn btn-link">foo</button></div>
      `,
      output: `
      <cds-button action="outline" status="success">Le button</cds-button>
      <div><ul></ul><cds-button action="flat">foo</cds-button></div>
      `,
      locations: [
        { line: 2, column: 7 },
        { line: 3, column: 21 },
      ],
    }),
    getInvalidButtonTest({
      code: `
      <button class="btn btn-success-outline">Le button</button>
      <div><ul></ul><button class="btn btn-link btn-sm">foo</button></div>
      `,
      output: `
      <cds-button action="outline" status="success">Le button</cds-button>
      <div><ul></ul><cds-button action="flat" size="sm">foo</cds-button></div>
      `,
      locations: [
        { line: 2, column: 7 },
        { line: 3, column: 21 },
      ],
    }),
    getInvalidButtonTest({
      code: `
      <button class="btn btn-success-outline">Le button</button>
      <div><ul></ul><button class="btn btn-link btn-sm btn-inverse">foo</button></div>
      `,
      output: `
      <cds-button action="outline" status="success">Le button</cds-button>
      <div><ul></ul><cds-button action="flat" size="sm" status="inverse">foo</cds-button></div>
      `,
      locations: [
        { line: 2, column: 7 },
        { line: 3, column: 21 },
      ],
    }),
    getInvalidButtonTest({
      code: `
      <button class="btn btn-success-outline">Le button</button>
      <div><ul></ul><button class="btn btn-icon">foo</button></div>
      `,
      output: `
      <cds-button action="outline" status="success">Le button</cds-button>
      <div><ul></ul><cds-button>foo</cds-button></div>
      `,
      locations: [
        { line: 2, column: 7 },
        { line: 3, column: 21 },
      ],
    }),
    getInvalidButtonTest({
      code: `
      <button class="btn btn-danger foo">Shalqlq</button>
      `,
      output: `
      <cds-button class="foo" status="danger">Shalqlq</cds-button>
      `,
      locations: [{ line: 2, column: 7 }],
    }),
    getInvalidButtonTest({
      code: `
      <button class="btn btn-warning foo">Shalqlq</button>
      `,
      output: `
      <cds-button class="foo" status="warning">Shalqlq</cds-button>
      `,
      locations: [{ line: 2, column: 7 }],
    }),
    getInvalidButtonTest({
      code: `
      <button class="btn btn-info-outline foo">Shalqlq</button>
      `,
      output: `
      <cds-button class="foo" action="outline">Shalqlq</cds-button>
      `,
      locations: [{ line: 2, column: 7 }],
    }),
    getInvalidButtonTest({
      code: `
      <button class="btn btn-danger-outline foo">Shalqlq</button>
      `,
      output: `
      <cds-button class="foo" action="outline" status="danger">Shalqlq</cds-button>
      `,
      locations: [{ line: 2, column: 7 }],
    }),
    getInvalidButtonTest({
      code: `
      <button class="btn btn-warning-outline foo">Shalqlq</button>
      `,
      output: `
      <cds-button class="foo" action="outline" status="warning">Shalqlq</cds-button>
      `,
      locations: [{ line: 2, column: 7 }],
    }),
    getInvalidButtonTest({
      code: `
      <button class="btn btn-secondary-outline foo">Shalqlq</button>
      `,
      output: `
      <cds-button class="foo" action="outline">Shalqlq</cds-button>
      `,
      locations: [{ line: 2, column: 7 }],
    }),
    getInvalidButtonTest({
      code: `
      <button class="btn btn-outline-secondary foo">Shalqlq</button>
      `,
      output: `
      <cds-button class="foo" action="outline">Shalqlq</cds-button>
      `,
      locations: [{ line: 2, column: 7 }],
    }),
    getInvalidButtonTest({
      code: `
      <button [clrLoading]="1" class="btn btn-primary">Le button</button>
      <div><ul></ul><button [clrLoading]="1" class="btn btn-icon">foo</button></div>
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
          <div>
            <button class="btn btn-outline custom-class">Primary</button>
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
          <div>
            <button class="btn btn-success custom-class">Primary</button>
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
          <div>
            <button class="btn btn-info-outline custom-class">Primary</button>
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
          <div>
            <button class="btn btn-success-outline custom-class">Primary</button>
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
          <div>
            <button class="btn btn-danger-outline custom-class">Primary</button>
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
          <div>
            <button class="btn btn-warning-outline custom-class">Primary</button>
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
          <div>
            <button class="btn btn-block custom-class">Primary</button>
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
          <div>
            <button class="btn btn-link custom-class">Primary</button>
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
          <div>
            <button class="btn btn-sm custom-class">Primary</button>
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
          <div>
            <button class="btn btn-inverse custom-class">Primary</button>
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
          <div>
            <button class="btn btn-icon custom-class">Primary</button>
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
          <div>
            <button class="btn btn-secondary custom-class">Primary</button>
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
          <div>
            <button class="btn btn-outline-secondary custom-class">Primary</button>
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
          <div>
            <button class="btn btn-secondary-outline custom-class">Primary</button>
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
          <div>
            <button class="btn btn-outline-secondary custom-class">Primary</button>
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
          <div>
            <button class="btn btn-warning custom-class">Primary</button>
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
          <div>
            <button [clrLoading]="1" class="btn btn-primary custom-class">Primary</button>
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
