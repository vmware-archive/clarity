import rule from './index';
import { getHtmlRuleTester, getInvalidTestFactory, getTsRuleTester } from '../../test-helper.spec';

const tsRuleTester = getTsRuleTester();
const htmlRuleTester = getHtmlRuleTester();

const getInvalidLabelTest = getInvalidTestFactory('clrLabelFailure');

htmlRuleTester.run('no-clr-label', rule, {
  invalid: [
    getInvalidLabelTest({
      code: `<span class="label"></span>`,
      output: `<cds-tag readonly></cds-tag>`,
      locations: [{ line: 1, column: 1 }],
    }),
    /**
     * Status
     */
    getInvalidLabelTest({
      code: `<span class="label label-info"></span>`,
      output: `<cds-tag status="info" readonly></cds-tag>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidLabelTest({
      code: `<span class="label label-success"></span>`,
      output: `<cds-tag status="success" readonly></cds-tag>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidLabelTest({
      code: `<span class="label label-warning"></span>`,
      output: `<cds-tag status="warning" readonly></cds-tag>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidLabelTest({
      code: `<span class="label label-danger"></span>`,
      output: `<cds-tag status="danger" readonly></cds-tag>`,
      locations: [{ line: 1, column: 1 }],
    }),
    /**
     * Clickable
     */
    getInvalidLabelTest({
      code: `<span class="label clickable"></span>`,
      output: `<cds-tag></cds-tag>`,
      locations: [{ line: 1, column: 1 }],
    }),
    /**
     * Links
     */
    getInvalidLabelTest({
      code: `<a href="javascript://" class="label clickable"></a>`,
      output: `<a href="javascript://"><cds-tag></cds-tag></a>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidLabelTest({
      code: `<a href="javascript://" class="label label-purple clickable">Austin<span class="badge">1</span></a>`,
      output: `<a href="javascript://"><cds-tag color="purple">Austin<span class="badge">1</span></cds-tag></a>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidLabelTest({
      code: `
        <a href="javascript://" class="label label-purple clickable">Austin<span class="badge">1</span></a>
        <div></div>
        <a href="javascript://" class="label label-info label-purple clickable">
          Austin<span class="badge">1</span>
        </a>
      `,
      output: `
        <a href="javascript://"><cds-tag color="purple">Austin<span class="badge">1</span></cds-tag></a>
        <div></div>
        <a href="javascript://"><cds-tag status="info" color="purple">
          Austin<span class="badge">1</span>
        </cds-tag></a>
      `,
      locations: [
        { line: 2, column: 9 },
        { line: 4, column: 9 },
      ],
    }),
    /**
     * Color
     */
    getInvalidLabelTest({
      code: `<span class="label label-blue"></span>`,
      output: `<cds-tag color="blue" readonly></cds-tag>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidLabelTest({
      code: `<span class="label label-orange"></span>`,
      output: `<cds-tag color="orange" readonly></cds-tag>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidLabelTest({
      code: `<span class="label label-light-blue"></span>`,
      output: `<cds-tag color="light-blue" readonly></cds-tag>`,
      locations: [{ line: 1, column: 1 }],
    }),
    /**
     * Multiple components
     */
    getInvalidLabelTest({
      code: `
        <div>
          <span class="label"></span>
        </div>
      `,
      output: `
        <div>
          <cds-tag readonly></cds-tag>
        </div>
      `,
      locations: [{ line: 3, column: 11 }],
    }),
    getInvalidLabelTest({
      code: `
        <div>
        </div>
        <span class="label"></span>
      `,
      output: `
        <div>
        </div>
        <cds-tag readonly></cds-tag>
      `,
      locations: [{ line: 4, column: 9 }],
    }),
    getInvalidLabelTest({
      code: `<div><span class="label"></span></div>`,
      output: `<div><cds-tag readonly></cds-tag></div>`,
      locations: [{ line: 1, column: 6 }],
    }),
    getInvalidLabelTest({
      code: `<span class="label"></span><span class="label label-info"></span>`,
      output: `<cds-tag readonly></cds-tag><cds-tag status="info" readonly></cds-tag>`,
      locations: [
        { line: 1, column: 1 },
        { line: 1, column: 28 },
      ],
    }),
  ],
  valid: [`<span class="my-label"></span>`, `<a href="" class="my-label"></a>`],
});

tsRuleTester.run('no-clr-label', rule, {
  invalid: [
    getInvalidLabelTest({
      code: `
      @Component({
        selector: 'app-custom-label',
        template: \`
          <span class="label"></span>
        \`
      })
      export class CustomLabelComponent {
      }
      `,
      locations: [{ line: 5, column: 11 }],
    }),
    getInvalidLabelTest({
      code: `
      @Component({
        selector: 'app-custom-label',
        template: \`
          <span class="label label-blue"></span>
        \`
      })
      export class CustomLabelComponent {
      }
      `,
      locations: [{ line: 5, column: 11 }],
    }),
    getInvalidLabelTest({
      code: `
      @Component({
        selector: 'app-custom-label',
        template: \`
          <span class="label label-info"></span>
          <a href="javascript://" class="label label-purple clickable">Austin<span class="badge">1</span></a>
        \`
      })
      export class CustomLabelComponent {
      }
      `,
      locations: [
        { line: 5, column: 11 },
        { line: 6, column: 11 },
      ],
    }),
    getInvalidLabelTest({
      code: `
      @Component({
        selector: 'app-custom-label',
        template: \`
          <span class="label label-info"></span><a href="javascript://" class="label label-purple clickable">Austin<span class="badge">1</span></a>
        \`
      })
      export class CustomLabelComponent {
      }
      `,
      locations: [
        { line: 5, column: 11 },
        { line: 5, column: 49 },
      ],
    }),
  ],
  valid: [
    `
    @Component({
      selector: 'app-custom-label',
      template: \`
        <div></div>
      \`
      })
      export class CustomLabelComponent {
        const myLabel = \`
          <span class="label"></span>
        \`;
      }
    `,
  ],
});
