import { ESLintUtils, TSESTree } from '@typescript-eslint/experimental-utils';
import { HTMLElement } from '../../types/index';
import { lintDecoratorTemplate } from '../decorator-template-helper';

export const createESLintRule = ESLintUtils.RuleCreator(() => ``);
export type MessageIds = 'clrDatalistFailure';

const disallowedTag = `clr-datalist-container`;

export default createESLintRule({
  name: 'no-clr-datalist',
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow use of clr-datalist',
      category: 'Best Practices',
      recommended: 'warn',
    },
    fixable: 'code',
    messages: {
      clrDatalistFailure: 'Using clr-datalist is not allowed!',
    },
    schema: [{}],
  },
  defaultOptions: [{}],
  create(context) {
    return {
      [`HTMLElement[tagName="${disallowedTag}"]`](node: HTMLElement): void {
        context.report({
          node: node as any,
          messageId: 'clrDatalistFailure',
        });
      },
      'ClassDeclaration > Decorator'(node: TSESTree.Decorator): void {
        lintDecoratorTemplate(context, node, disallowedTag, 'clrDatalistFailure');
      },
    };
  },
});
