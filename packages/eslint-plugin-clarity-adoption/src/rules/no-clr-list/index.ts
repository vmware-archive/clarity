import { ESLintUtils, TSESTree } from '@typescript-eslint/experimental-utils';
import { HTMLElement } from '../../types/index';
import { lintDecoratorTemplate } from '../decorator-template-helper';

export const createESLintRule = ESLintUtils.RuleCreator(() => ``);
export type MessageIds = 'clrListFailure';

const disallowedClasses = ['list', 'list-unstyled'];

function hasDisallowedClass(classes: Array<string>): boolean {
  return disallowedClasses.some(cls => classes.includes(cls));
}
const disallowedListElementSelector = disallowedClasses.map(cls => `.${cls}`).join(',');

export default createESLintRule({
  name: 'no-clr-list',
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow use of clr-list',
      category: 'Best Practices',
      recommended: 'warn',
    },
    fixable: 'code',
    messages: {
      clrListFailure: 'Using clr-list is not allowed!',
    },
    schema: [{}],
  },
  defaultOptions: [{}],
  create(context) {
    return {
      'HTMLElement[tagName="ul"]'(node: HTMLElement): void {
        const classNode = node.attributes?.find(attribute => attribute.attributeName.value === 'class');
        const classes = classNode?.attributeValue?.value?.split(' ') || [];
        if (hasDisallowedClass(classes)) {
          context.report({
            node: node as any,
            messageId: 'clrListFailure',
          });
        }
      },
      'HTMLElement[tagName="ol"]'(node: HTMLElement): void {
        const classNode = node.attributes?.find(attribute => attribute.attributeName.value === 'class');
        const classes = classNode?.attributeValue?.value?.split(' ') || [];
        if (hasDisallowedClass(classes)) {
          context.report({
            node: node as any,
            messageId: 'clrListFailure',
          });
        }
      },

      'ClassDeclaration > Decorator'(node: TSESTree.Decorator): void {
        lintDecoratorTemplate(context, node, disallowedListElementSelector, 'clrListFailure');
      },
    };
  },
});
