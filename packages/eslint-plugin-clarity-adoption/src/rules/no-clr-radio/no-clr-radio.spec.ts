import rule from './index';
import { getHtmlRuleTester, getInvalidTestFactory, getTsRuleTester } from '../../test-helper.spec';

const tsRuleTester = getTsRuleTester();
const htmlRuleTester = getHtmlRuleTester();

const getInvalidClrRadioTest = getInvalidTestFactory('clrRadioFailure');

htmlRuleTester.run('no-clr-radio', rule, {
  invalid: [
    getInvalidClrRadioTest({
      code: `<input type="radio" clrRadio />`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidClrRadioTest({
      code: `
        <div></div>
        <input type="radio" clrRadio />
        <div></div>
        <div><input type="radio" clrRadio /></div>
        <input type="radio" clrRadio />
      `,
      locations: [
        { line: 3, column: 9 },
        { line: 5, column: 14 },
        { line: 6, column: 9 },
      ],
    }),
    getInvalidClrRadioTest({
      code: `
        <clr-radio-wrapper>
          <input type="radio" clrRadio />
          <label>Test</label>
        </clr-radio-wrapper>
      `,
      locations: [{ line: 2, column: 9 }],
    }),
    getInvalidClrRadioTest({
      code: `
        <clr-radio-container clrInline *ngIf="showRadioButtons">
          <clr-radio-wrapper *ngIf="scopeTypes.includes(ScopeType.Organization)">
              <input type="radio" clrRadio name="options" [value]="ScopeType.Organization" [(ngModel)]="defaultOption"
                  (ngModelChange)="emitSelection()" />
              <label>Organization</label>
          </clr-radio-wrapper>
          <clr-radio-wrapper *ngIf="scopeTypes.includes(ScopeType.Projects)">
              <input type="radio" clrRadio name="options" [value]="ScopeType.Projects" [(ngModel)]="defaultOption"
                  (ngModelChange)="emitSelection()"/>
              <label>Projects</label>
          </clr-radio-wrapper>
          <clr-radio-wrapper *ngIf="scopeTypes.includes(ScopeType.CloudAccounts)">
              <input type="radio" clrRadio name="options" [value]="ScopeType.CloudAccounts" [(ngModel)]="defaultOption"
                  (ngModelChange)="emitSelection()"/>
              <label data-test="scope-selector-cloud-accounts">Cloud Accounts</label>
          </clr-radio-wrapper>
        </clr-radio-container>
      `,
      locations: [{ line: 2, column: 9 }],
    }),

    getInvalidClrRadioTest({
      code: `
        <div>
          <div>
            <clr-radio-wrapper>
              <input type="radio" clrRadio />
              <label>Test</label>
            </clr-radio-wrapper>
          </div>
          <div></div>
          <input type="radio" clrRadio />
          <div></div>
          <clr-radio-container clrInline *ngIf="showRadioButtons">
            <clr-radio-wrapper *ngIf="scopeTypes.includes(ScopeType.Organization)">
                <input type="radio" clrRadio name="options" [value]="ScopeType.Organization" [(ngModel)]="defaultOption"
                    (ngModelChange)="emitSelection()" />
                <label>Organization</label>
            </clr-radio-wrapper>
            <clr-radio-wrapper *ngIf="scopeTypes.includes(ScopeType.Projects)">
                <input type="radio" clrRadio name="options" [value]="ScopeType.Projects" [(ngModel)]="defaultOption"
                    (ngModelChange)="emitSelection()"/>
                <label>Projects</label>
            </clr-radio-wrapper>
            <clr-radio-wrapper *ngIf="scopeTypes.includes(ScopeType.CloudAccounts)">
                <input type="radio" clrRadio name="options" [value]="ScopeType.CloudAccounts" [(ngModel)]="defaultOption"
                    (ngModelChange)="emitSelection()"/>
                <label data-test="scope-selector-cloud-accounts">Cloud Accounts</label>
            </clr-radio-wrapper>
          </clr-radio-container>
        </div>
      `,
      locations: [
        { line: 4, column: 13 },
        { line: 10, column: 11 },
        { line: 12, column: 11 },
      ],
    }),
  ],
  valid: [`<input type="radio"></input>`],
});

tsRuleTester.run('no-clr-radio', rule, {
  invalid: [
    getInvalidClrRadioTest({
      code: `
        @Component({
          selector: 'app-home',
          template: \`
            <input type="radio" clrRadio />
          \`
          })
          export class HomeComponent {
        }
      `,
      locations: [{ line: 5, column: 13 }],
    }),
    getInvalidClrRadioTest({
      code: `
        @Component({
          selector: 'app-home',
          template: \`
            <clr-radio-wrapper>
              <input type="radio" clrRadio />
              <label>Test</label>
            </clr-radio-wrapper>
          \`
          })
          export class HomeComponent {
        }
      `,
      locations: [{ line: 5, column: 13 }],
    }),
    getInvalidClrRadioTest({
      code: `
        @Component({
          selector: 'app-home',
          template: \`
            <clr-radio-container clrInline *ngIf="showRadioButtons">
              <clr-radio-wrapper *ngIf="scopeTypes.includes(ScopeType.Organization)">
                  <input type="radio" clrRadio name="options" [value]="ScopeType.Organization" [(ngModel)]="defaultOption"
                      (ngModelChange)="emitSelection()" />
                  <label>Organization</label>
              </clr-radio-wrapper>
              <clr-radio-wrapper *ngIf="scopeTypes.includes(ScopeType.Projects)">
                  <input type="radio" clrRadio name="options" [value]="ScopeType.Projects" [(ngModel)]="defaultOption"
                      (ngModelChange)="emitSelection()"/>
                  <label>Projects</label>
              </clr-radio-wrapper>
              <clr-radio-wrapper *ngIf="scopeTypes.includes(ScopeType.CloudAccounts)">
                  <input type="radio" clrRadio name="options" [value]="ScopeType.CloudAccounts" [(ngModel)]="defaultOption"
                      (ngModelChange)="emitSelection()"/>
                  <label data-test="scope-selector-cloud-accounts">Cloud Accounts</label>
              </clr-radio-wrapper>
            </clr-radio-container>
          \`
          })
          export class HomeComponent {
        }
      `,
      locations: [{ line: 5, column: 13 }],
    }),

    getInvalidClrRadioTest({
      code: `
        @Component({
          selector: 'app-home',
          template: \`
            <div>
              <div>
                <clr-radio-wrapper>
                  <input type="radio" clrRadio />
                  <label>Test</label>
                </clr-radio-wrapper>
              </div>
              <div></div>
              <input type="radio" clrRadio />
              <div></div>
              <clr-radio-container clrInline *ngIf="showRadioButtons">
                <clr-radio-wrapper *ngIf="scopeTypes.includes(ScopeType.Organization)">
                    <input type="radio" clrRadio name="options" [value]="ScopeType.Organization" [(ngModel)]="defaultOption"
                        (ngModelChange)="emitSelection()" />
                    <label>Organization</label>
                </clr-radio-wrapper>
                <clr-radio-wrapper *ngIf="scopeTypes.includes(ScopeType.Projects)">
                    <input type="radio" clrRadio name="options" [value]="ScopeType.Projects" [(ngModel)]="defaultOption"
                        (ngModelChange)="emitSelection()"/>
                    <label>Projects</label>
                </clr-radio-wrapper>
                <clr-radio-wrapper *ngIf="scopeTypes.includes(ScopeType.CloudAccounts)">
                    <input type="radio" clrRadio name="options" [value]="ScopeType.CloudAccounts" [(ngModel)]="defaultOption"
                        (ngModelChange)="emitSelection()"/>
                    <label data-test="scope-selector-cloud-accounts">Cloud Accounts</label>
                </clr-radio-wrapper>
              </clr-radio-container>
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
        template: \`<input type="radio" />\`
        })
        export class HomeComponent {
      }
    `,
  ],
});
