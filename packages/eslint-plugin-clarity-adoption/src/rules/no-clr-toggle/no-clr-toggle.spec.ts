import rule from './index';
import { getHtmlRuleTester, getInvalidTestFactory, getTsRuleTester } from '../../test-helper.spec';

const tsRuleTester = getTsRuleTester();
const htmlRuleTester = getHtmlRuleTester();

const getInvalidClrToggleTest = getInvalidTestFactory('clrToggleFailure');

htmlRuleTester.run('no-clr-toggle', rule, {
  invalid: [
    getInvalidClrToggleTest({
      code: `<input type="checkbox" clrToggle />`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidClrToggleTest({
      code: `
        <div></div>
        <input type="checkbox" clrToggle />
        <div></div>
        <div><input type="checkbox" clrToggle /></div>
        <input type="checkbox" clrToggle />
      `,
      locations: [
        { line: 3, column: 9 },
        { line: 5, column: 14 },
        { line: 6, column: 9 },
      ],
    }),
    getInvalidClrToggleTest({
      code: `
        <clr-toggle-wrapper>
          <input type="checkbox" clrToggle />
          <label>Test</label>
        </clr-toggle-wrapper>
      `,
      locations: [{ line: 2, column: 9 }],
    }),
    getInvalidClrToggleTest({
      code: `
        <clr-toggle-container>
          <label>Default</label>
          <clr-toggle-wrapper>
            <label>One</label>
            <input clrToggle type="checkbox" [(ngModel)]="options" name="options" />
          </clr-toggle-wrapper>
          <clr-toggle-wrapper>
            <label>Two</label>
            <input clrToggle type="checkbox" [(ngModel)]="options" name="options" />
          </clr-toggle-wrapper>
          <clr-toggle-wrapper>
            <label>Three</label>
            <input clrToggle type="checkbox" [(ngModel)]="options" name="options" />
          </clr-toggle-wrapper>
          <clr-control-helper>Helper text</clr-control-helper>
          <clr-control-error>There was an error</clr-control-error>
        </clr-toggle-container>
      `,
      locations: [{ line: 2, column: 9 }],
    }),

    getInvalidClrToggleTest({
      code: `
        <div>
          <div>
            <clr-toggle-wrapper>
              <input type="checkbox" clrToggle />
              <label>Test</label>
            </clr-toggle-wrapper>
          </div>
          <div></div>
          <input type="checkbox" clrToggle />
          <div></div>
          <clr-toggle-container>
            <label>Default</label>
            <clr-toggle-wrapper>
              <label>One</label>
              <input clrToggle type="checkbox" [(ngModel)]="options" name="options" />
            </clr-toggle-wrapper>
            <clr-toggle-wrapper>
              <label>Two</label>
              <input clrToggle type="checkbox" [(ngModel)]="options" name="options" />
            </clr-toggle-wrapper>
            <clr-toggle-wrapper>
              <label>Three</label>
              <input clrToggle type="checkbox" [(ngModel)]="options" name="options" />
            </clr-toggle-wrapper>
            <clr-control-helper>Helper text</clr-control-helper>
            <clr-control-error>There was an error</clr-control-error>
          </clr-toggle-container>
        </div>
      `,
      locations: [
        { line: 4, column: 13 },
        { line: 10, column: 11 },
        { line: 12, column: 11 },
      ],
    }),
  ],
  valid: [`<input type="checkbox"></input>`],
});

tsRuleTester.run('no-clr-toggle', rule, {
  invalid: [
    getInvalidClrToggleTest({
      code: `
        @Component({
          selector: 'app-home',
          template: \`
            <input type="checkbox" clrToggle />
          \`
          })
          export class HomeComponent {
        }
      `,
      locations: [{ line: 5, column: 13 }],
    }),
    getInvalidClrToggleTest({
      code: `
        @Component({
          selector: 'app-home',
          template: \`
            <clr-toggle-wrapper>
              <input type="checkbox" clrToggle />
              <label>Test</label>
            </clr-toggle-wrapper>
          \`
          })
          export class HomeComponent {
        }
      `,
      locations: [{ line: 5, column: 13 }],
    }),
    getInvalidClrToggleTest({
      code: `
        @Component({
          selector: 'app-home',
          template: \`
            <clr-toggle-container>
              <label>Default</label>
              <clr-toggle-wrapper>
                <label>One</label>
                <input clrToggle type="checkbox" [(ngModel)]="options" name="options" />
              </clr-toggle-wrapper>
              <clr-toggle-wrapper>
                <label>Two</label>
                <input clrToggle type="checkbox" [(ngModel)]="options" name="options" />
              </clr-toggle-wrapper>
              <clr-toggle-wrapper>
                <label>Three</label>
                <input clrToggle type="checkbox" [(ngModel)]="options" name="options" />
              </clr-toggle-wrapper>
              <clr-control-helper>Helper text</clr-control-helper>
              <clr-control-error>There was an error</clr-control-error>
            </clr-toggle-container>
          \`
          })
          export class HomeComponent {
        }
      `,
      locations: [{ line: 5, column: 13 }],
    }),

    getInvalidClrToggleTest({
      code: `
        @Component({
          selector: 'app-home',
          template: \`
            <div>
              <div>
                <clr-toggle-wrapper>
                  <input type="checkbox" clrToggle />
                  <label>Test</label>
                </clr-toggle-wrapper>
              </div>
              <div></div>
              <input type="checkbox" clrToggle />
              <div></div>
              <clr-toggle-container>
                <label>Default</label>
                <clr-toggle-wrapper>
                  <label>One</label>
                  <input clrToggle type="checkbox" [(ngModel)]="options" name="options" />
                </clr-toggle-wrapper>
                <clr-toggle-wrapper>
                  <label>Two</label>
                  <input clrToggle type="checkbox" [(ngModel)]="options" name="options" />
                </clr-toggle-wrapper>
                <clr-toggle-wrapper>
                  <label>Three</label>
                  <input clrToggle type="checkbox" [(ngModel)]="options" name="options" />
                </clr-toggle-wrapper>
                <clr-control-helper>Helper text</clr-control-helper>
                <clr-control-error>There was an error</clr-control-error>
              </clr-toggle-container>
            </div>
          \`
          })
          export class HomeComponent {
        }
      `,
      locations: [
        { line: 7, column: 17 },
        { line: 13, column: 15 },
        { line: 15, column: 15 },
      ],
    }),
  ],
  valid: [
    `
      @Component({
        selector: 'app-home',
        template: \`<input type="checkbox" />\`
        })
        export class HomeComponent {
      }
    `,
  ],
});
