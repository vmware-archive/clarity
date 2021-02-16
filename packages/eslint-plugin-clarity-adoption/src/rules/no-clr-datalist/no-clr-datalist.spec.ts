import rule from './index';
import { getHtmlRuleTester, getInvalidTestFactory, getTsRuleTester } from '../../test-helper.spec';

const tsRuleTester = getTsRuleTester();
const htmlRuleTester = getHtmlRuleTester();

const getInvalidDatalistTest = getInvalidTestFactory('clrDatalistFailure');

htmlRuleTester.run('no-clr-datalist', rule, {
  invalid: [
    getInvalidDatalistTest({
      code: `<clr-datalist-container>
        <input clrDatalistInput [(ngModel)]="vertical" placeholder="No label" name="Option" />
        <datalist>
          <option *ngFor="let item of items" [value]="item"></option>
        </datalist>
      </clr-datalist-container>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidDatalistTest({
      code: `
        <div></div>
        <clr-datalist-container>
          <input clrDatalistInput [(ngModel)]="vertical" placeholder="No label" name="Option" />
          <datalist>
            <option *ngFor="let item of items" [value]="item"></option>
          </datalist>
        </clr-datalist-container>
      `,
      locations: [{ line: 3, column: 9 }],
    }),
    getInvalidDatalistTest({
      code: `
        <div>
          <clr-datalist-container>
            <input clrDatalistInput [(ngModel)]="vertical" placeholder="No label" name="Option" />
            <datalist>
              <option *ngFor="let item of items" [value]="item"></option>
            </datalist>
          </clr-datalist-container>
        </div>
      `,
      locations: [{ line: 3, column: 11 }],
    }),
    getInvalidDatalistTest({
      code: `
        <div>
          <clr-datalist-container>
            <input clrDatalistInput [(ngModel)]="vertical" placeholder="No label" name="Option" />
            <datalist>
              <option *ngFor="let item of items" [value]="item"></option>
            </datalist>
          </clr-datalist-container>
        </div>
        <clr-datalist-container></clr-datalist-container>
      `,
      locations: [
        { line: 3, column: 11 },
        { line: 10, column: 9 },
      ],
    }),
  ],
  valid: [`<datalist></datalist>`, `<input clrDatalistInput>`],
});

tsRuleTester.run('no-clr-datalist', rule, {
  invalid: [
    getInvalidDatalistTest({
      code: `
      @Component({
        template: \`
          <clr-datalist-container>
            <input clrDatalistInput [(ngModel)]="vertical" placeholder="No label" name="Option" />
            <datalist>
              <option *ngFor="let item of items" [value]="item"></option>
            </datalist>
          </clr-datalist-container>
        \`
      })
      export class CustomDatalistComponent {}
      `,
      locations: [{ line: 4, column: 11 }],
    }),
  ],
  valid: [
    `
    @Component({
      selector: 'app-custom-datalist',
      template: \`
        <datalist></datalist>
      \`
      })
      export class CustomDatalistComponent {
        // Should we catch that case?
        const myDatalist = \`
          <clr-datalist></clr-datalist>
        \`;
      }
    `,
  ],
});
