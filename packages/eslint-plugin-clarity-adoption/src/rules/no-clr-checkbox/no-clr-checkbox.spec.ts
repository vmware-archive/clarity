import rule from './index';
import { getHtmlRuleTester, getInvalidTestFactory, getTsRuleTester } from '../../test-helper.spec';

const tsRuleTester = getTsRuleTester();
const htmlRuleTester = getHtmlRuleTester();

const getInvalidClrCheckboxTest = getInvalidTestFactory('clrCheckboxFailure');

htmlRuleTester.run('no-clr-checkbox', rule, {
  invalid: [
    getInvalidClrCheckboxTest({
      code: `<input type="checkbox" clrCheckbox />`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidClrCheckboxTest({
      code: `
        <div></div>
        <input type="checkbox" clrCheckbox />
        <div></div>
        <div><input type="checkbox" clrCheckbox /></div>
        <input type="checkbox" clrCheckbox />
      `,
      locations: [
        { line: 3, column: 9 },
        { line: 5, column: 14 },
        { line: 6, column: 9 },
      ],
    }),
    getInvalidClrCheckboxTest({
      code: `
        <clr-checkbox-wrapper>
          <input type="checkbox" clrCheckbox />
          <label>Test</label>
        </clr-checkbox-wrapper>
      `,
      locations: [{ line: 2, column: 9 }],
    }),
    getInvalidClrCheckboxTest({
      code: `
        <clr-checkbox-container>
          <label>Default</label>
          <clr-checkbox-wrapper>
            <label>One</label>
            <input clrCheckbox type="checkbox" [(ngModel)]="vertical.default.one" name="vertical.default.one" />
          </clr-checkbox-wrapper>
          <clr-checkbox-wrapper>
            <label>Two</label>
            <input clrCheckbox type="checkbox" [(ngModel)]="vertical.default.two" name="vertical.default.two" />
          </clr-checkbox-wrapper>
          <clr-checkbox-wrapper>
            <label>Three</label>
            <input clrCheckbox type="checkbox" [(ngModel)]="vertical.default.three" name="vertical.default.three" />
          </clr-checkbox-wrapper>
          <clr-control-helper>Helper text</clr-control-helper>
          <clr-control-error>There was an error</clr-control-error>
        </clr-checkbox-container>
      `,
      locations: [{ line: 2, column: 9 }],
    }),

    getInvalidClrCheckboxTest({
      code: `
        <div>
          <div>
            <clr-checkbox-wrapper>
              <input type="checkbox" clrCheckbox />
              <label>Test</label>
            </clr-checkbox-wrapper>
          </div>
          <div></div>
          <input type="checkbox" clrCheckbox />
          <div></div>
          <clr-checkbox-container>
            <label>Default</label>
            <clr-checkbox-wrapper>
              <label>One</label>
              <input clrCheckbox type="checkbox" [(ngModel)]="vertical.default.one" name="vertical.default.one" />
            </clr-checkbox-wrapper>
            <clr-checkbox-wrapper>
              <label>Two</label>
              <input clrCheckbox type="checkbox" [(ngModel)]="vertical.default.two" name="vertical.default.two" />
            </clr-checkbox-wrapper>
            <clr-checkbox-wrapper>
              <label>Three</label>
              <input clrCheckbox type="checkbox" [(ngModel)]="vertical.default.three" name="vertical.default.three" />
            </clr-checkbox-wrapper>
            <clr-control-helper>Helper text</clr-control-helper>
            <clr-control-error>There was an error</clr-control-error>
          </clr-checkbox-container>
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

tsRuleTester.run('no-clr-checkbox', rule, {
  invalid: [
    getInvalidClrCheckboxTest({
      code: `
        @Component({
          selector: 'app-home',
          template: \`
            <input type="checkbox" clrCheckbox />
          \`
          })
          export class HomeComponent {
        }
      `,
      locations: [{ line: 5, column: 13 }],
    }),
    getInvalidClrCheckboxTest({
      code: `
        @Component({
          selector: 'app-home',
          template: \`
            <clr-checkbox-wrapper>
              <input type="checkbox" clrCheckbox />
              <label>Test</label>
            </clr-checkbox-wrapper>
          \`
          })
          export class HomeComponent {
        }
      `,
      locations: [{ line: 5, column: 13 }],
    }),
    getInvalidClrCheckboxTest({
      code: `
        @Component({
          selector: 'app-home',
          template: \`
            <clr-checkbox-container>
              <label>Default</label>
              <clr-checkbox-wrapper>
                <label>One</label>
                <input clrCheckbox type="checkbox" [(ngModel)]="vertical.default.one" name="vertical.default.one" />
              </clr-checkbox-wrapper>
              <clr-checkbox-wrapper>
                <label>Two</label>
                <input clrCheckbox type="checkbox" [(ngModel)]="vertical.default.two" name="vertical.default.two" />
              </clr-checkbox-wrapper>
              <clr-checkbox-wrapper>
                <label>Three</label>
                <input clrCheckbox type="checkbox" [(ngModel)]="vertical.default.three" name="vertical.default.three" />
              </clr-checkbox-wrapper>
              <clr-control-helper>Helper text</clr-control-helper>
              <clr-control-error>There was an error</clr-control-error>
            </clr-checkbox-container>
          \`
          })
          export class HomeComponent {
        }
      `,
      locations: [{ line: 5, column: 13 }],
    }),

    getInvalidClrCheckboxTest({
      code: `
        @Component({
          selector: 'app-home',
          template: \`
            <div>
              <div>
                <clr-checkbox-wrapper>
                  <input type="checkbox" clrCheckbox />
                  <label>Test</label>
                </clr-checkbox-wrapper>
              </div>
              <div></div>
              <input type="checkbox" clrCheckbox />
              <div></div>
              <clr-checkbox-container>
                <label>Default</label>
                <clr-checkbox-wrapper>
                  <label>One</label>
                  <input clrCheckbox type="checkbox" [(ngModel)]="vertical.default.one" name="vertical.default.one" />
                </clr-checkbox-wrapper>
                <clr-checkbox-wrapper>
                  <label>Two</label>
                  <input clrCheckbox type="checkbox" [(ngModel)]="vertical.default.two" name="vertical.default.two" />
                </clr-checkbox-wrapper>
                <clr-checkbox-wrapper>
                  <label>Three</label>
                  <input clrCheckbox type="checkbox" [(ngModel)]="vertical.default.three" name="vertical.default.three" />
                </clr-checkbox-wrapper>
                <clr-control-helper>Helper text</clr-control-helper>
                <clr-control-error>There was an error</clr-control-error>
              </clr-checkbox-container>
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
