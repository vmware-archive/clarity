import rule from './index';
import { getHtmlRuleTester, getInvalidTestFactory, getTsRuleTester } from '../../test-helper.spec';

const tsRuleTester = getTsRuleTester();
const htmlRuleTester = getHtmlRuleTester();

const getInvalidListTest = getInvalidTestFactory('clrListFailure');

htmlRuleTester.run('no-clr-list', rule, {
  invalid: [
    getInvalidListTest({
      code: `<ul class="list"></ul>`,
      output: `<ul cds-list></ul>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidListTest({
      code: `<ul class="list-unstyled"></ul>`,
      output: `<ul cds-list="unstyled"></ul>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidListTest({
      code: `<ul class="list list-unstyled"></ul>`,
      output: `<ul cds-list="unstyled"></ul>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidListTest({
      code: `<ul class="list compact"></ul>`,
      output: `<ul class="compact" cds-list></ul>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidListTest({
      code: `<ul class="compact list-unstyled"></ul>`,
      output: `<ul class="compact" cds-list="unstyled"></ul>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidListTest({
      code: `<ol class="list"></ol>`,
      output: `<ol cds-list></ol>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidListTest({
      code: `<ol class="list-unstyled"></ol>`,
      output: `<ol cds-list="unstyled"></ol>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidListTest({
      code: `<ol class="list list-unstyled"></ol>`,
      output: `<ol cds-list="unstyled"></ol>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidListTest({
      code: `<ol class="list compact"></ol>`,
      output: `<ol class="compact" cds-list></ol>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidListTest({
      code: `<ol class="compact list-unstyled"></ol>`,
      output: `<ol class="compact" cds-list="unstyled"></ol>`,
      locations: [{ line: 1, column: 1 }],
    }),
  ],
  valid: [`<ul class="compact"></ul>`, `<div></div>`],
});

tsRuleTester.run('no-clr-list', rule, {
  invalid: [
    getInvalidListTest({
      code: `
      @Component({
        selector: 'app-custom-list',
        template: \`
          <ul class="list"></ul>
        \`
      })
      export class CustomListComponent {
      }
      `,
      locations: [{ line: 5, column: 11 }],
    }),
    getInvalidListTest({
      code: `
      @Component({
        selector: 'app-custom-list',
        template: \`
          <ul class="list-unstyled"></ul>
        \`
      })
      export class CustomListComponent {
      }
      `,
      locations: [{ line: 5, column: 11 }],
    }),
    getInvalidListTest({
      code: `
      @Component({
        selector: 'app-custom-list',
        template: \`
          <ul class="list compact"></ul>
        \`
      })
      export class CustomListComponent {
      }
      `,
      locations: [{ line: 5, column: 11 }],
    }),
    getInvalidListTest({
      code: `
      @Component({
        selector: 'app-custom-list',
        template: \`
          <ul class="list-unstyled compact"></ul>
        \`
      })
      export class CustomListComponent {
      }
      `,
      locations: [{ line: 5, column: 11 }],
    }),
    getInvalidListTest({
      code: `
      @Component({
        selector: 'app-custom-list',
        template: \`
          <ol class="list"></ol>
        \`
      })
      export class CustomListComponent {
      }
      `,
      locations: [{ line: 5, column: 11 }],
    }),
    getInvalidListTest({
      code: `
      @Component({
        selector: 'app-custom-list',
        template: \`
          <ol class="list-unstyled"></ol>
        \`
      })
      export class CustomListComponent {
      }
      `,
      locations: [{ line: 5, column: 11 }],
    }),
    getInvalidListTest({
      code: `
      @Component({
        selector: 'app-custom-list',
        template: \`
          <ol class="list compact"></ol>
        \`
      })
      export class CustomListComponent {
      }
      `,
      locations: [{ line: 5, column: 11 }],
    }),
    getInvalidListTest({
      code: `
      @Component({
        selector: 'app-custom-list',
        template: \`
          <ol class="list-unstyled compact"></ol>
        \`
      })
      export class CustomListComponent {
      }
      `,
      locations: [{ line: 5, column: 11 }],
    }),
  ],
  valid: [
    `
    @Component({
      selector: 'app-custom-list',
      template: \`
        <div></div>
      \`
      })
      export class CustomListComponent {
        // Should we catch that case?
        const myList = \`
          <ol class="list"></ol>
        \`;
      }
    `,
  ],
});
