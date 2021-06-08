import rule from './index';
import { getHtmlRuleTester, getInvalidTestFactory, getTsRuleTester } from '../../test-helper.spec';

const tsRuleTester = getTsRuleTester();
const htmlRuleTester = getHtmlRuleTester();

const getInvalidCardTest = getInvalidTestFactory('clrCardFailure');

htmlRuleTester.run('no-clr-card', rule, {
  invalid: [
    getInvalidCardTest({
      code: `<div class="card"></div>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidCardTest({
      code: `<a href="" class="card clickable"></a>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidCardTest({
      code: `<div class="card"></div>
             <div></div>
             <div class="card"></div>
             <div><div class="card"></div></div>`,
      locations: [
        { line: 1, column: 1 },
        { line: 3, column: 14 },
        { line: 4, column: 19 },
      ],
    }),
  ],
  valid: [`<cds-card></cds-card>`, `<div></div>`],
});

tsRuleTester.run('no-clr-card', rule, {
  invalid: [
    getInvalidCardTest({
      code: `
                @Component({
                selector: 'app-home',
                template: \`
                    <div class="card"></div>
                \`
                })
                export class HomeComponent {
                }
            `,
      locations: [{ line: 5, column: 21 }],
    }),

    getInvalidCardTest({
      code: `
                @Component({
                selector: 'app-home',
                template: \`
                    <a href="" class="card clickable"></a>
                \`
                })
                export class HomeComponent {
                }
            `,
      locations: [{ line: 5, column: 21 }],
    }),

    getInvalidCardTest({
      code: `
                @Component({
                selector: 'app-home',
                template: \`
                    <div class="card"></div>
                    <div></div>
                    <div class="card"></div>
                    <div><div class="card"></div></div>
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
            <cds-card></cds-card>
        \`
        })
        export class HomeComponent {
        }
        `,
  ],
});
