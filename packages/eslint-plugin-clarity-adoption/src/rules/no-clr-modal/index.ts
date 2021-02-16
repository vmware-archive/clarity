import { ESLintUtils, TSESTree } from '@typescript-eslint/experimental-utils';
import { HTMLElement } from '../../types/index';
import { lintDecoratorTemplate } from '../decorator-template-helper';

export const createESLintRule = ESLintUtils.RuleCreator(() => ``);
export type MessageIds = 'clrModalFailure';

const disallowedTag = `clr-modal`;
const disallowedClass = 'modal';
const disallowedSelector = `${disallowedTag},div.${disallowedClass}`;

export default createESLintRule({
  name: 'no-clr-modal',
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow use of clr-modal',
      category: 'Best Practices',
      recommended: 'warn',
    },
    fixable: 'code',
    messages: {
      clrModalFailure: 'Using clr-modal is not allowed!',
    },
    schema: [{}],
  },
  defaultOptions: [{}],
  create(context) {
    return {
      [`HTMLElement[tagName="${disallowedTag}"]`](node: HTMLElement): void {
        context.report({
          node: node as any,
          messageId: 'clrModalFailure',
        });
      },
      [`HTMLElement[tagName="div"]`](node: HTMLElement): void {
        const classNode = node.attributes?.find(attribute => attribute.attributeName.value === 'class');
        const classes = classNode?.attributeValue?.value?.split(' ') || [];
        if (classes.includes(disallowedClass)) {
          context.report({
            node: node as any,
            messageId: 'clrModalFailure',
          });
        }
      },
      'ClassDeclaration > Decorator'(node: TSESTree.Decorator): void {
        lintDecoratorTemplate(context, node, disallowedSelector, 'clrModalFailure');
      },
    };
  },
});
