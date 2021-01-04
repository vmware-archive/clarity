import { ESLintUtils, TSESTree } from '@typescript-eslint/experimental-utils';
import { JSDOM } from 'jsdom';
import { calculateLocation, getDecoratorTemplate, DomElementLocation } from '../utils';
import { HTMLElement } from '../../types/index';

const disallowedAlertsSelector = ['.alert', 'clr-alert'];

export const createESLintRule = ESLintUtils.RuleCreator(() => ``);
export type MessageIds = 'clrAlertFailure';
export default createESLintRule({
  name: 'no-clr-alert',
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow use of clr-alert',
      category: 'Best Practices',
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
        const templateResult = getDecoratorTemplate(node);
        if (!templateResult) {
          return;
        }

        const { templateContentNode, templateContent } = templateResult;

        const dom = new JSDOM(templateContent, {
          includeNodeLocations: true,
        });
        const clrAlerts = dom.window.document.querySelectorAll(disallowedAlertsSelector as any);

        clrAlerts.forEach(alert => {
          const nodeLocation = dom.nodeLocation(alert) as DomElementLocation;
          const loc = calculateLocation(templateContentNode, nodeLocation);
          context.report({
            node: templateContentNode,
            messageId: 'clrAlertFailure',
            loc,
          });
        });
      },
    };
  },
});
