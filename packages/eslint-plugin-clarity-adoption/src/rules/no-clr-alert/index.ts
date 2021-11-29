import { ESLintUtils, TSESTree } from '@typescript-eslint/experimental-utils';
import { HTMLElement } from '../../types/index';
import { lintDecoratorTemplate } from '../decorator-template-helper';

const disallowedAlertsSelector = ['.alert', 'clr-alert'];

export const createESLintRule = ESLintUtils.RuleCreator(() => ``);
export type MessageIds = 'clrAlertFailure';
export default createESLintRule({
  name: 'no-clr-alert',
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow use of clr-alert',
      recommended: 'warn',
    },
    fixable: 'code',
    messages: {
      clrAlertFailure: 'Using clr-alert is not allowed!',
    },
    schema: [{}],
  },
  defaultOptions: [{}],
  create(context) {
    return {
      'HTMLElement[tagName="clr-alert"]'(node: HTMLElement): void {
        context.report({
          node: node as any,
          messageId: 'clrAlertFailure',
        });
      },
      'HTMLElement[tagName="div"]'(node: HTMLElement): void {
        const classNode = node.attributes?.find(attribute => attribute.attributeName.value === 'class');
        const classes = classNode?.attributeValue?.value?.split(' ') || [];
        if (classes.includes('alert')) {
          context.report({
            node: node as any,
            messageId: 'clrAlertFailure',
          });
        }
      },
      'ClassDeclaration > Decorator'(node: TSESTree.Decorator): void {
        lintDecoratorTemplate(context, node, disallowedAlertsSelector, 'clrAlertFailure');
      },
    };
  },
});
