import rule from './index';
import { getHtmlRuleTester, getInvalidTestFactory, getTsRuleTester } from '../../test-helper.spec';

const tsRuleTester = getTsRuleTester();
const htmlRuleTester = getHtmlRuleTester();

const getInvalidRangeTest = getInvalidTestFactory('clrRangeFailure');

htmlRuleTester.run('no-clr-range', rule, {
  invalid: [
    getInvalidRangeTest({
      code: `<input type="range" clrRange min="60" max="80" />`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidRangeTest({
      code: `
        <clr-range-container>
          <input type="range" clrRange min="60" max="80" />
        </clr-range-container>
      `,
      locations: [{ line: 2, column: 9 }],
    }),
  ],
  valid: [`<input>`, `<div clrRange></div>`, `<input clrInput>`],
});

tsRuleTester.run('no-clr-range', rule, {
  invalid: [
    getInvalidRangeTest({
      code: `
      @Component({
        template: \`
          <input type="range" clrRange min="60" max="80" />
        \`
      })
      export class CustomRangeComponent {}
      `,
      locations: [{ line: 4, column: 11 }],
    }),
    getInvalidRangeTest({
      code: `
      @Component({
        template: \`
          <clr-range-container>
            <input type="range" clrRange min="60" max="80" />
          </clr-range-container>
        \`
      })
      export class CustomRangeComponent {}
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
    export class CustomRangeComponent {}
    `,
    `
    @Component({
      template: \`
        <div clrRange></div>
      \`
    })
    export class CustomRangeComponent {}
    `,
  ],
});
