import rule from './index';
import { getHtmlRuleTester, getInvalidTestFactory, getTsRuleTester } from '../../test-helper.spec';

const tsRuleTester = getTsRuleTester();
const htmlRuleTester = getHtmlRuleTester();

const getInvalidBadgeTest = getInvalidTestFactory('clrBadgeFailure');

htmlRuleTester.run('no-clr-badge', rule, {
  invalid: [
    getInvalidBadgeTest({
      code: `<span class="badge"></span>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidBadgeTest({
      code: `
                <div>
                    <span class="badge"></span>
                </div>
            `,
      locations: [{ line: 3, column: 21 }],
    }),
    getInvalidBadgeTest({
      code: `
                <div>
                </div>
                <span class="badge"></span>
            `,
      locations: [{ line: 4, column: 17 }],
    }),
    getInvalidBadgeTest({
      code: `<div><span class="badge"></span></div>`,
      locations: [{ line: 1, column: 6 }],
    }),
    getInvalidBadgeTest({
      code: `<div><span class="badge"></span><span class="badge badge-info"></span></div>`,
      locations: [
        { line: 1, column: 6 },
        { line: 1, column: 33 },
      ],
    }),
    getInvalidBadgeTest({
      code: `
                <div></div>
                <span class="badge"></span>
                <span class="badge badge-info">
                </span>
                <div><span class="badge badge-1"></span></div>
            `,
      locations: [
        { line: 3, column: 17 },
        { line: 4, column: 17 },
        { line: 6, column: 22 },
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
