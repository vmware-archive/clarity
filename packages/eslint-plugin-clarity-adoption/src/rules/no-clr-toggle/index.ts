import { ESLintUtils, TSESTree } from '@typescript-eslint/experimental-utils';
import { parseDecoratorTemplate, reportNestedDisallowedElements } from '../decorator-template-helper';
import { HTMLElement } from '../../types/index';

const disallowedDirective = 'clrToggle';
const wrapperTagName = 'clr-toggle-wrapper';
const containerTagName = 'clr-toggle-container';

export const createESLintRule = ESLintUtils.RuleCreator(() => ``);
const ruleFailureMessage = 'clrToggleFailure';
export type MessageIds = 'clrToggleFailure';
export default createESLintRule({
  name: 'no-clr-toggle',
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow use of clrToggle',
      category: 'Best Practices',
      recommended: 'warn',
    },
    fixable: 'code',
    messages: {
      [ruleFailureMessage]: 'Using clr-toggle is not allowed!',
    },
    schema: [{}],
  },
  defaultOptions: [{}],
  create(context) {
    return {
      // report all <clr-toggle-container> elements
      [`HTMLElement[tagName="${containerTagName}"]`](node: HTMLElement): void {
        context.report({
          node: node as any,
          messageId: ruleFailureMessage,
        });
      },
      // report <clr-toggle-wrapper> elements that AREN'T nested in <clr-toggle-container> elements
      [`:not(HTMLElement[tagName="${containerTagName}"]) > HTMLElement[tagName="${wrapperTagName}"]`](
        node: HTMLElement
      ): void {
        context.report({
          node: node as any,
          messageId: ruleFailureMessage,
        });
      },
      // report <input clrToggle> elements that AREN'T nested in <clr-toggle-wrapper> elements
      [`:not(HTMLElement[tagName="${wrapperTagName}"]) > HTMLElement[tagName="input"]`](node: HTMLElement): void {
        const disallowedDirectiveNode = node.attributes?.find(
          attribute => attribute.attributeName.value === disallowedDirective
        );

        if (disallowedDirectiveNode) {
          context.report({
            node: node as any,
            messageId: ruleFailureMessage,
          });
        }
      },
      'ClassDeclaration > Decorator'(node: TSESTree.Decorator): void {
        const parsedTemplate = parseDecoratorTemplate(node);
        if (!parsedTemplate) {
          return;
        }

        const { dom, templateContentNode } = parsedTemplate;

        // report all <clr-toggle-container> elements
        reportNestedDisallowedElements(containerTagName, context, dom, templateContentNode, ruleFailureMessage);

        // report <clr-toggle-wrapper> elements that AREN'T nested in <clr-toggle-container> elements
        reportNestedDisallowedElements(
          `:not(${containerTagName}) > ${wrapperTagName}`,
          context,
          dom,
          templateContentNode,
          ruleFailureMessage
        );

        // report <input clrToggle> elements that AREN'T nested in <clr-toggle-wrapper> elements
        reportNestedDisallowedElements(
          `:not(${wrapperTagName}) > input[${disallowedDirective}]`,
          context,
          dom,
          templateContentNode,
          ruleFailureMessage
        );
      },
    };
  },
});
