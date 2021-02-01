import { ESLintUtils, TSESTree } from '@typescript-eslint/experimental-utils';
import { HTMLElement } from '../../types/index';
import { lintDecoratorTemplate } from '../decorator-template-helper';

export const createESLintRule = ESLintUtils.RuleCreator(() => ``);
export type MessageIds = 'clrAccordionFailure';

const disallowedAccordionElementSelector = `clr-accordion`;

export default createESLintRule({
  name: 'no-clr-accordion',
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow use of clr-accordion',
      category: 'Best Practices',
      recommended: 'warn',
    },
    fixable: 'code',
    messages: {
      clrAccordionFailure: 'Using clr-accordion is not allowed!',
    },
    schema: [{}],
  },
  defaultOptions: [{}],
  create(context) {
    return {
      'HTMLElement[tagName="clr-accordion"]'(node: HTMLElement): void {
        context.report({
          node: node as any,
          messageId: 'clrAccordionFailure',
        });
      },
      'ClassDeclaration > Decorator'(node: TSESTree.Decorator): void {
        lintDecoratorTemplate(context, node, disallowedAccordionElementSelector, 'clrAccordionFailure');
      },
    };
  },
});
