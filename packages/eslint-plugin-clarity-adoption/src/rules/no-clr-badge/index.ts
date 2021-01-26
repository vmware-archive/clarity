import { ESLintUtils, TSESTree } from '@typescript-eslint/experimental-utils';
import { HTMLElement } from '../../types/index';
import { lintDecoratorTemplate } from '../decorator-template-helper';

export const createESLintRule = ESLintUtils.RuleCreator(() => ``);
export type MessageIds = 'clrBadgeFailure';

function hasDisallowedClass(classes: Array<string>): boolean {
  return classes.includes('badge');
}

const disallowedBadgeElementSelector = `span.badge`;

export default createESLintRule({
  name: 'no-clr-badge',
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow use of clr-badge',
      category: 'Best Practices',
      recommended: 'warn',
    },
    fixable: 'code',
    messages: {
      clrBadgeFailure: 'Using clr-badge is not allowed!',
    },
    schema: [{}],
  },
  defaultOptions: [{}],
  create(context) {
    return {
      'HTMLElement[tagName="span"]'(node: HTMLElement): void {
        const classNode = node.attributes?.find(attribute => attribute.attributeName.value === 'class');
        const classes = classNode?.attributeValue?.value?.split(' ') || [];
        if (hasDisallowedClass(classes)) {
          context.report({
            node: node as any,
            messageId: 'clrBadgeFailure',
          });
        }
      },
      'ClassDeclaration > Decorator'(node: TSESTree.Decorator): void {
        lintDecoratorTemplate(context, node, disallowedBadgeElementSelector, 'clrBadgeFailure');
      },
    };
  },
});
