import { ESLintUtils, TSESTree } from '@typescript-eslint/experimental-utils';
import { HTMLElement } from '../../types';
import { lintDecoratorTemplate } from '../decorator-template-helper';

export const createESLintRule = ESLintUtils.RuleCreator(() => ``);
export type MessageIds = 'clrCardFailure';

const disallowedCardElementSelector = `.card`;

function hasDisallowedClass(classes: Array<string>): boolean {
  return classes.includes('card');
}

export default createESLintRule({
  name: 'no-clr-card',
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow use of clr-card',
      category: 'Best Practices',
      recommended: 'warn',
    },
    fixable: 'code',
    messages: {
      clrCardFailure: 'Using clr-card is not allowed!',
    },
    schema: [{}],
  },
  defaultOptions: [{}],
  create(context) {
    return {
      HTMLElement(node: HTMLElement): void {
        const classNode = node.attributes?.find(attribute => attribute.attributeName.value === 'class');
        const classes = classNode?.attributeValue?.value?.split(' ') || [];
        if (hasDisallowedClass(classes)) {
          context.report({
            node: node as any,
            messageId: 'clrCardFailure',
          });
        }
      },
      'ClassDeclaration > Decorator'(node: TSESTree.Decorator): void {
        lintDecoratorTemplate(context, node, disallowedCardElementSelector, 'clrCardFailure');
      },
    };
  },
});
