import { LineAndColumnData } from '@typescript-eslint/types/dist/ts-estree';
import rule from '../src/rules/no-clr-icon';
import { RuleTester } from './test-helper';

const htmlRuleTester = new RuleTester({
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2015,
  },
  parser: '../src/html-parser',
});

interface InvalidTest {
  code: string;
  errors: Array<{
    messageId: string;
    line?: number;
    column?: number;
  }>;
  output?: string;
}

const iconFailureMessageId = 'clrIconFailure';

function getInvalidTest(
  code: string,
  locations?: Array<LineAndColumnData>,
  messageIds?: Array<string>,
  output?: string
): InvalidTest {
  if (!messageIds) {
    messageIds = [iconFailureMessageId];
  }

  const invalidTest: InvalidTest = {
    code,
    errors: [],
  };

  messageIds.forEach(messageId => {
    invalidTest.errors.push({ messageId });
  });

  locations?.forEach((location, index) => {
    invalidTest.errors[index].line = location.line;
    invalidTest.errors[index].column = location.column;
  });

  if (output) {
    invalidTest.output = output;
  }

  return invalidTest;
}

htmlRuleTester.run('no-clr-alert', rule, {
  invalid: [
    getInvalidTest(`<clr-icon></clr-icon>`, [], undefined, `<cds-icon></cds-icon>`),
    /**
     * Direction attribute
     */
    getInvalidTest(
      `<clr-icon dir="left"></clr-icon>`,
      [{ line: 1, column: 1 }],
      [iconFailureMessageId],
      `<cds-icon direction="left"></cds-icon>`
    ),
    getInvalidTest(
      `<clr-icon dir="right"></clr-icon>`,
      [{ line: 1, column: 1 }],
      [iconFailureMessageId],
      `<cds-icon direction="right"></cds-icon>`
    ),
    getInvalidTest(
      `<clr-icon dir="up"></clr-icon>`,
      [{ line: 1, column: 1 }],
      [iconFailureMessageId],
      `<cds-icon direction="up"></cds-icon>`
    ),
    getInvalidTest(
      `<clr-icon dir="down"></clr-icon>`,
      [{ line: 1, column: 1 }],
      [iconFailureMessageId],
      `<cds-icon direction="down"></cds-icon>`
    ),

    /**
     * Direction attribute: already migrated tag (cds-icon)
     */
    getInvalidTest(
      `<cds-icon dir="left"></cds-icon>`,
      [{ line: 1, column: 11 }],
      [iconFailureMessageId],
      `<cds-icon direction="left"></cds-icon>`
    ),
    getInvalidTest(
      `<cds-icon dir="right"></cds-icon>`,
      [{ line: 1, column: 11 }],
      [iconFailureMessageId],
      `<cds-icon direction="right"></cds-icon>`
    ),
    getInvalidTest(
      `<cds-icon dir="up"></cds-icon>`,
      [{ line: 1, column: 11 }],
      [iconFailureMessageId],
      `<cds-icon direction="up"></cds-icon>`
    ),
    getInvalidTest(
      `<cds-icon dir="down"></cds-icon>`,
      [{ line: 1, column: 11 }],
      [iconFailureMessageId],
      `<cds-icon direction="down"></cds-icon>`
    ),
    /**
     * Status attribute
     */
    getInvalidTest(
      `<clr-icon class="is-green"></clr-icon>`,
      [{ line: 1, column: 1 }],
      [iconFailureMessageId],
      `<cds-icon status="success"></cds-icon>`
    ),
    getInvalidTest(
      `<clr-icon class="is-success"></clr-icon>`,
      [{ line: 1, column: 1 }],
      [iconFailureMessageId],
      `<cds-icon status="success"></cds-icon>`
    ),
    getInvalidTest(
      `<clr-icon class="is-danger"></clr-icon>`,
      [{ line: 1, column: 1 }],
      [iconFailureMessageId],
      `<cds-icon status="danger"></cds-icon>`
    ),
    getInvalidTest(
      `<clr-icon class="is-red"></clr-icon>`,
      [{ line: 1, column: 1 }],
      [iconFailureMessageId],
      `<cds-icon status="danger"></cds-icon>`
    ),
    getInvalidTest(
      `<clr-icon class="is-warning"></clr-icon>`,
      [{ line: 1, column: 1 }],
      [iconFailureMessageId],
      `<cds-icon status="warning"></cds-icon>`
    ),
    getInvalidTest(
      `<clr-icon class="is-info"></clr-icon>`,
      [{ line: 1, column: 1 }],
      [iconFailureMessageId],
      `<cds-icon status="info"></cds-icon>`
    ),
    getInvalidTest(
      `<clr-icon class="is-blue"></clr-icon>`,
      [{ line: 1, column: 1 }],
      [iconFailureMessageId],
      `<cds-icon status="info"></cds-icon>`
    ),
    getInvalidTest(
      `<clr-icon class="is-highlight"></clr-icon>`,
      [{ line: 1, column: 1 }],
      [iconFailureMessageId],
      `<cds-icon status="highlight"></cds-icon>`
    ),
    getInvalidTest(
      `<clr-icon class="is-white"></clr-icon>`,
      [{ line: 1, column: 1 }],
      [iconFailureMessageId],
      `<cds-icon inverse></cds-icon>`
    ),
    getInvalidTest(
      `<clr-icon class="is-inverse"></clr-icon>`,
      [{ line: 1, column: 1 }],
      [iconFailureMessageId],
      `<cds-icon inverse></cds-icon>`
    ),
    getInvalidTest(
      `<clr-icon class="is-solid"></clr-icon>`,
      [{ line: 1, column: 1 }],
      [iconFailureMessageId],
      `<cds-icon solid></cds-icon>`
    ),
    /**
     * Status attribute: already migrated tag (cds-icon)
     */
    getInvalidTest(
      `<cds-icon class="is-inverse"></cds-icon>`,
      [{ line: 1, column: 18 }],
      [iconFailureMessageId],
      `<cds-icon inverse></cds-icon>`
    ),
    getInvalidTest(
      `<cds-icon random-attribute class="is-success"></cds-icon>`,
      [{ line: 1, column: 35 }],
      [iconFailureMessageId],
      `<cds-icon random-attribute status="success"></cds-icon>`
    ),
    getInvalidTest(
      `<cds-icon random-attribute class="is-success is-inverse is-solid"></cds-icon>`,
      [{ line: 1, column: 35 }],
      [iconFailureMessageId],
      `<cds-icon random-attribute status="success" inverse solid></cds-icon>`
    ),
    getInvalidTest(
      `<cds-icon random-attribute class="is-success my-class is-inverse is-solid"></cds-icon>`,
      [{ line: 1, column: 35 }],
      [iconFailureMessageId],
      `<cds-icon random-attribute class="my-class" status="success" inverse solid></cds-icon>`
    ),
    /**
     * Status attribute: More than one class
     */
    getInvalidTest(
      `<clr-icon class="is-inverse my-class"></clr-icon>`,
      [{ line: 1, column: 1 }],
      [iconFailureMessageId],
      `<cds-icon class="my-class" inverse></cds-icon>`
    ),
    getInvalidTest(
      `<clr-icon class="is-inverse is-solid is-success my-class"></clr-icon>`,
      [{ line: 1, column: 1 }],
      [iconFailureMessageId],
      `<cds-icon class="my-class" inverse solid status="success"></cds-icon>`
    ),
    getInvalidTest(
      `<clr-icon class="is-inverse is-solid is-success"></clr-icon>`,
      [{ line: 1, column: 1 }],
      [iconFailureMessageId],
      `<cds-icon inverse solid status="success"></cds-icon>`
    ),
    /**
     * Badge attribute
     */
    getInvalidTest(
      `<clr-icon class="has-badge"></clr-icon>`,
      [{ line: 1, column: 1 }],
      [iconFailureMessageId],
      `<cds-icon badge></cds-icon>`
    ),
    getInvalidTest(
      `<clr-icon class="has-badge--success"></clr-icon>`,
      [{ line: 1, column: 1 }],
      [iconFailureMessageId],
      `<cds-icon badge="success"></cds-icon>`
    ),
    getInvalidTest(
      `<clr-icon class="has-badge--error"></clr-icon>`,
      [{ line: 1, column: 1 }],
      [iconFailureMessageId],
      `<cds-icon badge="error"></cds-icon>`
    ),
    getInvalidTest(
      `<clr-icon class="has-badge--info"></clr-icon>`,
      [{ line: 1, column: 1 }],
      [iconFailureMessageId],
      `<cds-icon badge="info"></cds-icon>`
    ),
    getInvalidTest(
      `<clr-icon class="has-alert"></clr-icon>`,
      [{ line: 1, column: 1 }],
      [iconFailureMessageId],
      `<cds-icon badge="triangle"></cds-icon>`
    ),
    /**
     * Badge attribute: already migrated tag (cds-icon)
     */
    getInvalidTest(
      `<cds-icon class="has-badge"></cds-icon>`,
      [{ line: 1, column: 18 }],
      [iconFailureMessageId],
      `<cds-icon badge></cds-icon>`
    ),
    getInvalidTest(
      `<cds-icon class="has-badge--success"></cds-icon>`,
      [{ line: 1, column: 18 }],
      [iconFailureMessageId],
      `<cds-icon badge="success"></cds-icon>`
    ),
    getInvalidTest(
      `<cds-icon class="has-badge--info"></cds-icon>`,
      [{ line: 1, column: 18 }],
      [iconFailureMessageId],
      `<cds-icon badge="info"></cds-icon>`
    ),
    getInvalidTest(
      `<cds-icon class="has-badge--error"></cds-icon>`,
      [{ line: 1, column: 18 }],
      [iconFailureMessageId],
      `<cds-icon badge="error"></cds-icon>`
    ),
    getInvalidTest(
      `<cds-icon class="has-alert"></cds-icon>`,
      [{ line: 1, column: 18 }],
      [iconFailureMessageId],
      `<cds-icon badge="triangle"></cds-icon>`
    ),
    /**
     * Shape attribute
     */
    getInvalidTest(
      `<clr-icon shape="caret up"></clr-icon>`,
      [{ line: 1, column: 1 }],
      [iconFailureMessageId],
      `<cds-icon shape="angle" direction="up"></cds-icon>`
    ),

    getInvalidTest(
      `<clr-icon shape="caret down"></clr-icon>`,
      [{ line: 1, column: 1 }],
      [iconFailureMessageId],
      `<cds-icon shape="angle" direction="down"></cds-icon>`
    ),

    getInvalidTest(
      `<clr-icon shape="caret left"></clr-icon>`,
      [{ line: 1, column: 1 }],
      [iconFailureMessageId],
      `<cds-icon shape="angle" direction="left"></cds-icon>`
    ),
    getInvalidTest(
      `<clr-icon shape="caret right"></clr-icon>`,
      [{ line: 1, column: 1 }],
      [iconFailureMessageId],
      `<cds-icon shape="angle" direction="right"></cds-icon>`
    ),
    /**
     * Shape attribute: already migrated tag (cds-icon)
     */
    getInvalidTest(
      `<cds-icon shape="caret up"></cds-icon>`,
      [{ line: 1, column: 11 }],
      [iconFailureMessageId],
      `<cds-icon shape="angle" direction="up"></cds-icon>`
    ),
    getInvalidTest(
      `<cds-icon shape="caret down"></cds-icon>`,
      [{ line: 1, column: 11 }],
      [iconFailureMessageId],
      `<cds-icon shape="angle" direction="down"></cds-icon>`
    ),
    getInvalidTest(
      `<cds-icon shape="caret left"></cds-icon>`,
      [{ line: 1, column: 11 }],
      [iconFailureMessageId],
      `<cds-icon shape="angle" direction="left"></cds-icon>`
    ),
    getInvalidTest(
      `<cds-icon shape="caret right"></cds-icon>`,
      [{ line: 1, column: 11 }],
      [iconFailureMessageId],
      `<cds-icon shape="angle" direction="right"></cds-icon>`
    ),
    /**
     * All attributes
     */
    getInvalidTest(
      `<clr-icon dir="left" class="is-inverse my-class is-solid has-badge--info"></clr-icon>`,
      [{ line: 1, column: 1 }],
      [iconFailureMessageId],
      `<cds-icon direction="left" class="my-class" inverse solid badge="info"></cds-icon>`
    ),
    getInvalidTest(
      `<clr-icon shape="caret up" class="is-inverse my-class is-solid has-badge--info"></clr-icon>`,
      [{ line: 1, column: 1 }],
      [iconFailureMessageId],
      `<cds-icon shape="angle" direction="up" class="my-class" inverse solid badge="info"></cds-icon>`
    ),
  ],
  valid: [],
});
