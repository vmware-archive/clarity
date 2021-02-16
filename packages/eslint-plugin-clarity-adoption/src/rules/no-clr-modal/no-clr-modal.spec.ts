import rule from './index';
import { getHtmlRuleTester, getInvalidTestFactory, getTsRuleTester } from '../../test-helper.spec';

const tsRuleTester = getTsRuleTester();
const htmlRuleTester = getHtmlRuleTester();

const getInvalidModalTest = getInvalidTestFactory('clrModalFailure');

htmlRuleTester.run('no-clr-modal', rule, {
  invalid: [
    getInvalidModalTest({
      code: `<div class="modal"></div>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidModalTest({
      code: `
        <div class="modal">
          <div class="modal-dialog modal-sm" role="dialog" aria-hidden="true">
            <div class="modal-content">
              ...
            </div>
          </div>
        </div>
      `,
      locations: [{ line: 2, column: 9 }],
    }),
    getInvalidModalTest({
      code: `<clr-modal></clr-modal>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidModalTest({
      code: `
        <clr-modal [(clrModalOpen)]="openModal">
          <h3 class="modal-title">I have a nice title</h3>
          <div class="modal-body">
            <p>But not much to say...</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline" (click)="openModal = false">Cancel</button>
            <button type="button" class="btn btn-primary" (click)="openModal = false">Ok</button>
          </div>
        </clr-modal>
      `,
      locations: [{ line: 2, column: 9 }],
    }),
    getInvalidModalTest({
      code: `
        <div></div>
        <clr-modal></clr-modal>
      `,
      locations: [{ line: 3, column: 9 }],
    }),
    getInvalidModalTest({
      code: `
        <div>
          <clr-modal></clr-modal>
        </div>
      `,
      locations: [{ line: 3, column: 11 }],
    }),
    getInvalidModalTest({
      code: `
        <div>
          <clr-modal></clr-modal>
        </div>
        <clr-modal></clr-modal>
      `,
      locations: [
        { line: 3, column: 11 },
        { line: 5, column: 9 },
      ],
    }),
  ],
  valid: [],
});

tsRuleTester.run('no-clr-modal', rule, {
  invalid: [
    getInvalidModalTest({
      code: `
      @Component({
        template: \`
          <clr-modal [(clrModalOpen)]="openModal">
            <h3 class="modal-title">I have a nice title</h3>
            <div class="modal-body">
              <p>But not much to say...</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline" (click)="openModal = false">Cancel</button>
              <button type="button" class="btn btn-primary" (click)="openModal = false">Ok</button>
            </div>
          </clr-modal>
        \`
      })
      export class CustomModalComponent {}
      `,
      locations: [{ line: 4, column: 11 }],
    }),
    getInvalidModalTest({
      code: `
      @Component({
        template: \`
          <div class="modal static"></div>
        \`
      })
      export class CustomModalComponent {}
      `,
      locations: [{ line: 4, column: 11 }],
    }),
    getInvalidModalTest({
      code: `
      @Component({
        template: \`
          <div></div>
          <clr-modal></clr-modal>
        \`
      })
      export class CustomModalComponent {}
      `,
      locations: [{ line: 5, column: 11 }],
    }),
    getInvalidModalTest({
      code: `
      @Component({
        template: \`
          <clr-modal></clr-modal>
          <div></div>
          <div class="modal"></div>
        \`
      })
      export class CustomModalComponent {}
      `,
      locations: [
        { line: 4, column: 11 },
        { line: 6, column: 11 },
      ],
    }),
  ],
  valid: [
    `
    @Component({
      selector: 'app-custom-modal',
      template: \`
        <div></div>
      \`
      })
      export class CustomModalComponent {
        // Should we catch that case?
        const myModal = \`
          <clr-modal></clr-modal>
        \`;
      }
    `,
  ],
});
