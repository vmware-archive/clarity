import rule from './index';
import { getHtmlRuleTester, getInvalidTestFactory, getTsRuleTester } from '../../test-helper.spec';

const tsRuleTester = getTsRuleTester();
const htmlRuleTester = getHtmlRuleTester();

const getInvalidBadgeTest = getInvalidTestFactory('clrBadgeFailure');

htmlRuleTester.run('no-clr-badge', rule, {
  invalid: [
    getInvalidBadgeTest({
      code: `<span class="badge">1</span>`,
      output: `<cds-badge>1</cds-badge>`,
      locations: [{ line: 1, column: 1 }],
    }),
    /**
     * Color
     */
    getInvalidBadgeTest({
      code: `<span class="badge badge-1">1</span>`,
      output: `<cds-badge color="gray">1</cds-badge>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidBadgeTest({
      code: `<span class="badge badge-2">1</span>`,
      output: `<cds-badge color="purple">1</cds-badge>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidBadgeTest({
      code: `<span class="badge badge-3">1</span>`,
      output: `<cds-badge color="blue">1</cds-badge>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidBadgeTest({
      code: `<span class="badge badge-4">1</span>`,
      output: `<cds-badge color="orange">1</cds-badge>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidBadgeTest({
      code: `<span class="badge badge-5">1</span>`,
      output: `<cds-badge color="light-blue">1</cds-badge>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidBadgeTest({
      code: `<span class="badge badge-purple">1</span>`,
      output: `<cds-badge color="purple">1</cds-badge>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidBadgeTest({
      code: `<span class="badge badge-blue">1</span>`,
      output: `<cds-badge color="blue">1</cds-badge>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidBadgeTest({
      code: `<span class="badge badge-orange">1</span>`,
      output: `<cds-badge color="orange">1</cds-badge>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidBadgeTest({
      code: `<span class="badge badge-light-blue">1</span>`,
      output: `<cds-badge color="light-blue">1</cds-badge>`,
      locations: [{ line: 1, column: 1 }],
    }),
    /**
     * Status
     */
    getInvalidBadgeTest({
      code: `<span class="badge badge-info">1</span>`,
      output: `<cds-badge status="info">1</cds-badge>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidBadgeTest({
      code: `<span class="badge badge-success">1</span>`,
      output: `<cds-badge status="success">1</cds-badge>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidBadgeTest({
      code: `<span class="badge badge-warning">1</span>`,
      output: `<cds-badge status="warning">1</cds-badge>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidBadgeTest({
      code: `<span class="badge badge-danger">1</span>`,
      output: `<cds-badge status="danger">1</cds-badge>`,
      locations: [{ line: 1, column: 1 }],
    }),
    /**
     * Additional classes
     */
    getInvalidBadgeTest({
      code: `<span class="badge custom">1</span>`,
      output: `<cds-badge class="custom">1</cds-badge>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidBadgeTest({
      code: `<span class="badge custom badge-info">1</span>`,
      output: `<cds-badge class="custom" status="info">1</cds-badge>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidBadgeTest({
      code: `<span class="custom badge badge-purple">1</span>`,
      output: `<cds-badge class="custom" color="purple">1</cds-badge>`,
      locations: [{ line: 1, column: 1 }],
    }),
    /**
     * Multiple components
     */
    getInvalidBadgeTest({
      code: `
        <div>
          <span class="badge"></span>
        </div>
      `,
      output: `
        <div>
          <cds-badge></cds-badge>
        </div>
      `,
      locations: [{ line: 3, column: 11 }],
    }),
    getInvalidBadgeTest({
      code: `
        <div>
        </div>
        <span class="badge"></span>
      `,
      output: `
        <div>
        </div>
        <cds-badge></cds-badge>
      `,
      locations: [{ line: 4, column: 9 }],
    }),
    getInvalidBadgeTest({
      code: `<div><span class="badge"></span></div>`,
      output: `<div><cds-badge></cds-badge></div>`,
      locations: [{ line: 1, column: 6 }],
    }),
    getInvalidBadgeTest({
      code: `
        <div></div>
        <span class="badge"></span>
        <span class="badge badge-info">
        </span>
        <div><span class="badge badge-1"></span></div>
      `,
      output: `
        <div></div>
        <cds-badge></cds-badge>
        <cds-badge status="info">
        </cds-badge>
        <div><cds-badge color="gray"></cds-badge></div>
      `,
      locations: [
        { line: 3, column: 9 },
        { line: 4, column: 9 },
        { line: 6, column: 14 },
      ],
    }),
    /**
     * Two components on the same line
     */
    getInvalidBadgeTest({
      code: `<div><span class="badge"></span><span class="badge badge-info"></span></div>`,
      output: `<div><cds-badge></cds-badge><cds-badge status="info"></cds-badge></div>`,
      locations: [
        { line: 1, column: 6 },
        { line: 1, column: 33 },
      ],
    }),
  ],
  valid: [`<span class="my-class"></span>`, `<div></div>`],
});

tsRuleTester.run('no-clr-badge', rule, {
  invalid: [
    getInvalidBadgeTest({
      code: `
                @Component({
                selector: 'app-home',
                template: \`
                    <span class="badge"></span>
                \`
                })
                export class HomeComponent {
                }
            `,
      locations: [{ line: 5, column: 21 }],
    }),

    getInvalidBadgeTest({
      code: `
                @Component({
                selector: 'app-home',
                template: \`
                    <span class="badge badge-info"></span>
                \`
                })
                export class HomeComponent {
                }
            `,
      locations: [{ line: 5, column: 21 }],
    }),

    getInvalidBadgeTest({
      code: `
                @Component({
                selector: 'app-home',
                template: \`
                    <span class="badge"></span>
                    <div></div>
                    <span class="badge"></span>
                    <div><span class="badge"></span></div>
                \`
                })
                export class HomeComponent {
                }
            `,
      locations: [
        { line: 5, column: 21 },
        { line: 7, column: 21 },
        { line: 8, column: 26 },
      ],
    }),
  ],
  valid: [
    `
        @Component({
        selector: 'app-home',
        template: \`
            <span class="my-class"></span>
        \`
        })
        export class HomeComponent {
        }
        `,
  ],
});
