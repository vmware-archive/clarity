import { ESLintUtils, TSESTree } from '@typescript-eslint/experimental-utils';
import { parse } from 'node-html-parser';
import { getDecoratorPropertyValue } from '../utils';
import { HTMLElement } from 'eslint-html-parser';

export const createESLintRule = ESLintUtils.RuleCreator(() => ``);

export type MessageIds = 'clrButtonFailure';

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
      'HTMLElement[tagName="button"]'(node: HTMLElement) {
        const classNode = node.attributes?.find(attribute => attribute.attributeName.value === 'class');
        const classes = classNode?.attributeValue?.value?.split(' ');
        if (classes?.includes('btn') && classes.includes('btn-primary')) {
          context.report({
            node: <any>node,
            messageId: 'clrButtonFailure',
          });
        }
      },
      'ClassDeclaration > Decorator'(node: TSESTree.Decorator) {
        const template = getDecoratorPropertyValue(node, 'template');
        if (template?.type !== 'TemplateLiteral') {
          return;
        }

        const templateContentNode = template.quasis[0];
        const templateContent = templateContentNode?.value?.raw || '';
        if (!templateContent) {
          return;
        }

        const root = parse(templateContent);
        const clrButton = root.querySelector('button.btn.btn-primary');
        if (clrButton) {
          context.report({
            node: templateContentNode,
            messageId: 'clrButtonFailure',
          });
        }
      },
    };
  },
});
