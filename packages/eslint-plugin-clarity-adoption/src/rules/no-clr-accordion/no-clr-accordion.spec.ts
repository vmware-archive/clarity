import rule from './index';
import { getHtmlRuleTester, getInvalidTestFactory, getTsRuleTester } from '../../test-helper.spec';

const tsRuleTester = getTsRuleTester();
const htmlRuleTester = getHtmlRuleTester();

const getInvalidAccordionTest = getInvalidTestFactory('clrAccordionFailure');

htmlRuleTester.run('no-clr-accordion', rule, {
  invalid: [
    getInvalidAccordionTest({
      code: `<clr-accordion></clr-accordion>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidAccordionTest({
      code: `
        <clr-accordion>
          <clr-accordion-panel>
            <clr-accordion-content *clrIfExpanded>Content 1</clr-accordion-content>
          </clr-accordion-panel>
        </clr-accordion>
      `,
      locations: [{ line: 2, column: 9 }],
    }),
    getInvalidAccordionTest({
      code: `
        <clr-accordion>
          <clr-accordion-panel [(clrAccordionPanelOpen)]="stepOpen">
            <clr-accordion-description
              >The full license information can be found in LICENSE in the root directory.</clr-accordion-description
            >
          </clr-accordion-panel>
        </clr-accordion>
      `,
      locations: [{ line: 2, column: 9 }],
    }),
    getInvalidAccordionTest({
      code: `
        <div></div>
        <clr-accordion>
          <clr-accordion-panel>
            <clr-accordion-content *clrIfExpanded>Content 1</clr-accordion-content>
          </clr-accordion-panel>
        </clr-accordion>
      `,
      locations: [{ line: 3, column: 9 }],
    }),
    getInvalidAccordionTest({
      code: `
        <div>
          <clr-accordion>
            <clr-accordion-panel>
              <clr-accordion-content *clrIfExpanded>Content 1</clr-accordion-content>
            </clr-accordion-panel>
          </clr-accordion>
        </div>
      `,
      locations: [{ line: 3, column: 11 }],
    }),
    getInvalidAccordionTest({
      code: `
        <div>
          <clr-accordion>
            <clr-accordion-panel>
              <clr-accordion-content *clrIfExpanded>Content 1</clr-accordion-content>
            </clr-accordion-panel>
          </clr-accordion>
        </div>
        <clr-accordion></clr-accordion>
      `,
      locations: [
        { line: 3, column: 11 },
        { line: 9, column: 9 },
      ],
    }),
  ],
  valid: [],
});

tsRuleTester.run('no-clr-accordion', rule, {
  invalid: [
    getInvalidAccordionTest({
      code: `
      @Component({
        template: \`
          <clr-accordion>
            <clr-accordion-panel>
              <clr-accordion-content *clrIfExpanded>Content 1</clr-accordion-content>
            </clr-accordion-panel>
          </clr-accordion>
        \`
      })
      export class CustomAccordionComponent {}
      `,
      locations: [{ line: 4, column: 11 }],
    }),

    getInvalidAccordionTest({
      code: `
      @Component({
        template: \`<clr-accordion><clr-accordion-panel>\`
      })
      export class CustomAccordionComponent {}
      `,
      locations: [{ line: 3, column: 1 }],
    }),

    getInvalidAccordionTest({
      code: `
      @Component({
        template: \`
          <div></div>
          <clr-accordion>
            <clr-accordion-panel>
              <clr-accordion-content *clrIfExpanded>Content 1</clr-accordion-content>
            </clr-accordion-panel>
          </clr-accordion>
        \`
      })
      export class CustomAccordionComponent {}
      `,
      locations: [{ line: 5, column: 11 }],
    }),

    getInvalidAccordionTest({
      code: `
      @Component({
        template: \`
          <clr-accordion></clr-accordion>
          <div></div>
          <clr-accordion>
            <clr-accordion-panel>
              <clr-accordion-content *clrIfExpanded>Content 1</clr-accordion-content>
            </clr-accordion-panel>
          </clr-accordion>
        \`
      })
      export class CustomAccordionComponent {}
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
      selector: 'app-custom-accordion',
      template: \`
        <div></div>
      \`
      })
      export class CustomAccordionComponent {
        // Should we catch that case?
        const myAccordion = \`
          <clr-accordion></clr-accordion>
        \`;
      }
    `,
  ],
});
