import { ESLintUtils, TSESTree } from '@typescript-eslint/experimental-utils';
import { JSDOM } from 'jsdom';
import { SourceLocation } from '@typescript-eslint/eslint-plugin';
import { getDecoratorPropertyValue } from '../utils';
import { HTMLElement } from '../../types';

export const createESLintRule = ESLintUtils.RuleCreator(() => ``);

export type MessageIds = 'clrButtonFailure';

function calculateLocation(templateContent: TSESTree.TemplateElement, buttonLocation: any): SourceLocation {
  const start = {
    line: buttonLocation.startLine + templateContent.loc.start.line - 1,
    column: buttonLocation.startCol - 1,
  };
  const end = {
    line: buttonLocation.endLine + templateContent.loc.start.line - 1,
    column: buttonLocation.endCol - 1,
  };

  return { start, end };
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
        const classes = classNode?.attributeValue?.value?.split(' ');
        if (classes?.includes('btn') && classes.includes('btn-primary')) {
          context.report({
            node: node as any,
            messageId: 'clrButtonFailure',
          });
        }
      },
      'ClassDeclaration > Decorator'(node: TSESTree.Decorator): void {
        const template = getDecoratorPropertyValue(node, 'template');
        if (template?.type !== 'TemplateLiteral') {
          return;
        }

        const templateContentNode = template.quasis[0];
        const templateContent = templateContentNode?.value?.raw || '';
        if (!templateContent) {
          return;
        }

        const dom = new JSDOM(templateContent, {
          includeNodeLocations: true,
        });
        const clrButtons = dom.window.document.querySelectorAll('button.btn.btn-primary');

        for (const button of clrButtons) {
          const nodeLocation = dom.nodeLocation(button);
          const loc = calculateLocation(templateContentNode, nodeLocation);
          context.report({
            node: templateContentNode,
            messageId: 'clrButtonFailure',
            loc,
          });
        }
      },
    };
  },
});
