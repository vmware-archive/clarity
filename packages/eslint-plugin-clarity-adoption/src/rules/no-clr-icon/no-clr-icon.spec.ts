import rule from '.';
import { getHtmlRuleTester, getInvalidTestFactory } from '../../test-helper.spec';

const htmlRuleTester = getHtmlRuleTester();
const getInvalidIconTest = getInvalidTestFactory('clrIconFailure');

htmlRuleTester.run('no-clr-icon', rule, {
  invalid: [
    getInvalidIconTest({
      code: `<clr-icon></clr-icon>`,
      output: `<cds-icon></cds-icon>`,
      locations: [{ line: 1, column: 1 }],
    }),
    /**
     * Direction attribute
     */
    getInvalidIconTest({
      code: `<clr-icon dir="left"></clr-icon>`,
      output: `<cds-icon direction="left"></cds-icon>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidIconTest({
      code: `<clr-icon dir="right"></clr-icon>`,
      output: `<cds-icon direction="right"></cds-icon>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidIconTest({
      code: `<clr-icon dir="up"></clr-icon>`,
      output: `<cds-icon direction="up"></cds-icon>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidIconTest({
      code: `<clr-icon dir="down"></clr-icon>`,
      output: `<cds-icon direction="down"></cds-icon>`,
      locations: [{ line: 1, column: 1 }],
    }),
    /**
     * Direction attribute: already migrated tag (cds-icon)
     */
    getInvalidIconTest({
      code: `<cds-icon dir="left"></cds-icon>`,
      output: `<cds-icon direction="left"></cds-icon>`,
      locations: [{ line: 1, column: 11 }],
    }),
    getInvalidIconTest({
      code: `<cds-icon dir="right"></cds-icon>`,
      output: `<cds-icon direction="right"></cds-icon>`,
      locations: [{ line: 1, column: 11 }],
    }),
    getInvalidIconTest({
      code: `<cds-icon dir="up"></cds-icon>`,
      output: `<cds-icon direction="up"></cds-icon>`,
      locations: [{ line: 1, column: 11 }],
    }),
    getInvalidIconTest({
      code: `<cds-icon dir="down"></cds-icon>`,
      output: `<cds-icon direction="down"></cds-icon>`,
      locations: [{ line: 1, column: 11 }],
    }),
    /**
     * Status attribute
     */
    getInvalidIconTest({
      code: `<clr-icon class="is-green"></clr-icon>`,
      output: `<cds-icon status="success"></cds-icon>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidIconTest({
      code: `<clr-icon class="is-success"></clr-icon>`,
      output: `<cds-icon status="success"></cds-icon>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidIconTest({
      code: `<clr-icon class="is-danger"></clr-icon>`,
      output: `<cds-icon status="danger"></cds-icon>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidIconTest({
      code: `<clr-icon class="is-red"></clr-icon>`,
      output: `<cds-icon status="danger"></cds-icon>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidIconTest({
      code: `<clr-icon class="is-warning"></clr-icon>`,
      output: `<cds-icon status="warning"></cds-icon>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidIconTest({
      code: `<clr-icon class="is-info"></clr-icon>`,
      output: `<cds-icon status="info"></cds-icon>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidIconTest({
      code: `<clr-icon class="is-blue"></clr-icon>`,
      output: `<cds-icon status="info"></cds-icon>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidIconTest({
      code: `<clr-icon class="is-highlight"></clr-icon>`,
      output: `<cds-icon status="highlight"></cds-icon>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidIconTest({
      code: `<clr-icon class="is-white"></clr-icon>`,
      output: `<cds-icon inverse></cds-icon>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidIconTest({
      code: `<clr-icon class="is-inverse"></clr-icon>`,
      output: `<cds-icon inverse></cds-icon>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidIconTest({
      code: `<clr-icon class="is-solid"></clr-icon>`,
      output: `<cds-icon solid></cds-icon>`,
      locations: [{ line: 1, column: 1 }],
    }),
    /**
     * Status attribute: already migrated tag (cds-icon)
     */
    getInvalidIconTest({
      code: `<cds-icon class="is-inverse"></cds-icon>`,
      output: `<cds-icon inverse></cds-icon>`,
      locations: [{ line: 1, column: 18 }],
    }),
    getInvalidIconTest({
      code: `<cds-icon random-attribute class="is-success"></cds-icon>`,
      output: `<cds-icon random-attribute status="success"></cds-icon>`,
      locations: [{ line: 1, column: 35 }],
    }),
    getInvalidIconTest({
      code: `<cds-icon random-attribute class="is-success is-inverse is-solid"></cds-icon>`,
      output: `<cds-icon random-attribute status="success" inverse solid></cds-icon>`,
      locations: [{ line: 1, column: 35 }],
    }),
    getInvalidIconTest({
      code: `<cds-icon random-attribute class="is-success my-class is-inverse is-solid"></cds-icon>`,
      output: `<cds-icon random-attribute class="my-class" status="success" inverse solid></cds-icon>`,
      locations: [{ line: 1, column: 35 }],
    }),
    /**
     * Status attribute: More than one class
     */
    getInvalidIconTest({
      code: `<clr-icon class="is-inverse my-class"></clr-icon>`,
      output: `<cds-icon class="my-class" inverse></cds-icon>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidIconTest({
      code: `<clr-icon class="is-inverse is-solid is-success my-class"></clr-icon>`,
      output: `<cds-icon class="my-class" inverse solid status="success"></cds-icon>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidIconTest({
      code: `<clr-icon class="is-inverse is-solid is-success"></clr-icon>`,
      output: `<cds-icon inverse solid status="success"></cds-icon>`,
      locations: [{ line: 1, column: 1 }],
    }),
    /**
     * Badge attribute
     */
    getInvalidIconTest({
      code: `<clr-icon class="has-badge"></clr-icon>`,
      output: `<cds-icon badge></cds-icon>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidIconTest({
      code: `<clr-icon class="has-badge--success"></clr-icon>`,
      output: `<cds-icon badge="success"></cds-icon>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidIconTest({
      code: `<clr-icon class="has-badge--error"></clr-icon>`,
      output: `<cds-icon badge="error"></cds-icon>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidIconTest({
      code: `<clr-icon class="has-badge--info"></clr-icon>`,
      output: `<cds-icon badge="info"></cds-icon>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidIconTest({
      code: `<clr-icon class="has-alert"></clr-icon>`,
      output: `<cds-icon badge="triangle"></cds-icon>`,
      locations: [{ line: 1, column: 1 }],
    }),
    /**
     * Badge attribute: already migrated tag (cds-icon)
     */
    getInvalidIconTest({
      code: `<cds-icon class="has-badge"></cds-icon>`,
      output: `<cds-icon badge></cds-icon>`,
      locations: [{ line: 1, column: 18 }],
    }),
    getInvalidIconTest({
      code: `<cds-icon class="has-badge--success"></cds-icon>`,
      output: `<cds-icon badge="success"></cds-icon>`,
      locations: [{ line: 1, column: 18 }],
    }),
    getInvalidIconTest({
      code: `<cds-icon class="has-badge--info"></cds-icon>`,
      output: `<cds-icon badge="info"></cds-icon>`,
      locations: [{ line: 1, column: 18 }],
    }),
    getInvalidIconTest({
      code: `<cds-icon class="has-badge--error"></cds-icon>`,
      output: `<cds-icon badge="error"></cds-icon>`,
      locations: [{ line: 1, column: 18 }],
    }),
    getInvalidIconTest({
      code: `<cds-icon class="has-alert"></cds-icon>`,
      output: `<cds-icon badge="triangle"></cds-icon>`,
      locations: [{ line: 1, column: 18 }],
    }),
    /**
     * Shape attribute
     */
    getInvalidIconTest({
      code: `<clr-icon shape="caret up"></clr-icon>`,
      output: `<cds-icon shape="angle" direction="up"></cds-icon>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidIconTest({
      code: `<clr-icon shape="caret down"></clr-icon>`,
      output: `<cds-icon shape="angle" direction="down"></cds-icon>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidIconTest({
      code: `<clr-icon shape="caret left"></clr-icon>`,
      output: `<cds-icon shape="angle" direction="left"></cds-icon>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidIconTest({
      code: `<clr-icon shape="caret right"></clr-icon>`,
      output: `<cds-icon shape="angle" direction="right"></cds-icon>`,
      locations: [{ line: 1, column: 1 }],
    }),
    /**
     * Shape attribute: already migrated tag (cds-icon)
     */
    getInvalidIconTest({
      code: `<cds-icon shape="caret up"></cds-icon>`,
      output: `<cds-icon shape="angle" direction="up"></cds-icon>`,
      locations: [{ line: 1, column: 11 }],
    }),
    getInvalidIconTest({
      code: `<cds-icon shape="caret down"></cds-icon>`,
      output: `<cds-icon shape="angle" direction="down"></cds-icon>`,
      locations: [{ line: 1, column: 11 }],
    }),
    getInvalidIconTest({
      code: `<cds-icon shape="caret left"></cds-icon>`,
      output: `<cds-icon shape="angle" direction="left"></cds-icon>`,
      locations: [{ line: 1, column: 11 }],
    }),
    getInvalidIconTest({
      code: `<cds-icon shape="caret right"></cds-icon>`,
      output: `<cds-icon shape="angle" direction="right"></cds-icon>`,
      locations: [{ line: 1, column: 11 }],
    }),
    /**
     * All attributes
     */
    getInvalidIconTest({
      code: `<clr-icon dir="left" class="is-inverse my-class is-solid has-badge--info"></clr-icon>`,
      output: `<cds-icon direction="left" class="my-class" inverse solid badge="info"></cds-icon>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidIconTest({
      code: `<clr-icon shape="caret up" class="is-inverse my-class is-solid has-badge--info"></clr-icon>`,
      output: `<cds-icon shape="angle" direction="up" class="my-class" inverse solid badge="info"></cds-icon>`,
      locations: [{ line: 1, column: 1 }],
    }),
    /**
     * Multiple root elements
     */
    getInvalidIconTest({
      code: `
      <div></div>
      <clr-icon shape="caret up" class="is-inverse my-class is-solid has-badge--info"></clr-icon>
      `,
      output: `
      <div></div>
      <cds-icon shape="angle" direction="up" class="my-class" inverse solid badge="info"></cds-icon>
      `,
      locations: [{ line: 3, column: 7 }],
    }),
    /**
     * Persisting extra attributes
     */
    getInvalidIconTest({
      code: `<clr-icon *ngIf="true"></clr-icon>`,
      output: `<cds-icon *ngIf="true"></cds-icon>`,
      locations: [{ line: 1, column: 1 }],
    }),
    getInvalidIconTest({
      code: `<clr-icon dir="left" *ngIf="true"></clr-icon>`,
      output: `<cds-icon direction="left" *ngIf="true"></cds-icon>`,
      locations: [{ line: 1, column: 1 }],
    }),
    /**
     * Two components on the same line
     */
    getInvalidIconTest({
      code: `<clr-icon></clr-icon><clr-icon></clr-icon>`,
      output: `<cds-icon></cds-icon><cds-icon></cds-icon>`,
      locations: [
        { line: 1, column: 1 },
        { line: 1, column: 22 },
      ],
    }),
  ],
  valid: [],
});
