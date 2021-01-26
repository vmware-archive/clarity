import { ESLintUtils, TSESTree } from '@typescript-eslint/experimental-utils';
import { HTMLElement } from '../../types/index';
import { primaryDisallowedClass, additionalDisallowedClasses, disallowedButtonsSelector } from './disallowed-classes';
import { lintDecoratorTemplate } from '../decorator-template-helper';

export const createESLintRule = ESLintUtils.RuleCreator(() => ``);
export type MessageIds = 'clrButtonFailure';

function hasDisallowedClasses(classes: Array<string>): boolean {
  return classes.includes(primaryDisallowedClass) && additionalDisallowedClasses.some(cls => classes.includes(cls));
}

export default createESLintRule({
  name: 'no-clr-button',
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow use of clr-button',
      category: 'Best Practices',
      recommended: 'warn',
    },
    fixable: 'code',
    messages: {
      clrButtonFailure: 'Using clr-button is not allowed!',
    },
    schema: [{}],
  },
  defaultOptions: [{}],
  create(context) {
    return {
      'HTMLElement[tagName="button"]'(node: HTMLElement): void {
        const classNode = node.attributes?.find(attribute => attribute.attributeName.value === 'class');
        const classes = classNode?.attributeValue?.value?.split(' ') || [];
        if (hasDisallowedClasses(classes)) {
          context.report({
            node: node as any,
            messageId: 'clrButtonFailure',
          });
        }
      },
      'ClassDeclaration > Decorator'(node: TSESTree.Decorator): void {
        lintDecoratorTemplate(context, node, disallowedButtonsSelector, 'clrButtonFailure');
      },
    };
  },
});
