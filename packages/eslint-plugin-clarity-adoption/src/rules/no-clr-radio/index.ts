import { ESLintUtils, TSESTree } from '@typescript-eslint/experimental-utils';
import { parseDecoratorTemplate, reportNestedDisallowedElements } from '../decorator-template-helper';
import { HTMLElement } from '../../types/index';

const disallowedDirective = 'clrRadio';
const wrapperTagName = 'clr-radio-wrapper';
const containerTagName = 'clr-radio-container';

export const createESLintRule = ESLintUtils.RuleCreator(() => ``);
const ruleFailureMessage = 'clrRadioFailure';
export type MessageIds = 'clrRadioFailure';
export default createESLintRule({
  name: 'no-clr-radio',
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow use of clrRadio',
      category: 'Best Practices',
      recommended: 'warn',
    },
    fixable: 'code',
    messages: {
      [ruleFailureMessage]: 'Using clr-radio is not allowed!',
    },
    schema: [{}],
  },
  defaultOptions: [{}],
  create(context) {
    return {
      // report all <clr-radio-container> elements
      [`HTMLElement[tagName="${containerTagName}"]`](node: HTMLElement): void {
        context.report({
          node: node as any,
          messageId: ruleFailureMessage,
        });
      },
      // report <clr-radio-wrapper> elements that AREN'T nested in <clr-radio-container> elements
      [`:not(HTMLElement[tagName="${containerTagName}"]) > HTMLElement[tagName="${wrapperTagName}"]`](
        node: HTMLElement
      ): void {
        context.report({
          node: node as any,
          messageId: ruleFailureMessage,
        });
      },
      // report <input clrRadio> elements that AREN'T nested in <clr-radio-wrapper> elements
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

        // report all <clr-radio-container> elements
        reportNestedDisallowedElements(containerTagName, context, dom, templateContentNode, ruleFailureMessage);

        // report <clr-radio-wrapper> elements that AREN'T nested in <clr-radio-container> elements
        reportNestedDisallowedElements(
          `:not(${containerTagName}) > ${wrapperTagName}`,
          context,
          dom,
          templateContentNode,
          ruleFailureMessage
        );

        // report <input clrRadio> elements that AREN'T nested in <clr-radio-wrapper> elements
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
