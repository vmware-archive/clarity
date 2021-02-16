import { ESLintUtils, TSESTree } from '@typescript-eslint/experimental-utils';
import { parseDecoratorTemplate, reportNestedDisallowedElements } from '../decorator-template-helper';
import { HTMLElement } from '../../types/index';

const disallowedClass = 'clr-input';
const disallowedDirective = 'clrInput';
const containerTagName = 'clr-input-container';

export const createESLintRule = ESLintUtils.RuleCreator(() => ``);
const ruleFailureMessage = 'clrInputFailure';
export type MessageIds = 'clrInputFailure';
export default createESLintRule({
  name: 'no-clr-input',
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow use of clrInput',
      category: 'Best Practices',
      recommended: 'warn',
    },
    fixable: 'code',
    messages: {
      [ruleFailureMessage]: 'Using clr-input is not allowed!',
    },
    schema: [{}],
  },
  defaultOptions: [{}],
  create(context) {
    return {
      // report all <clr-input-container> elements
      [`HTMLElement[tagName="${containerTagName}"]`](node: HTMLElement): void {
        context.report({
          node: node as any,
          messageId: ruleFailureMessage,
        });
      },

      // report <input clrInput> elements that AREN'T nested in <clr-input-container> elements
      [`:not(HTMLElement[tagName="${containerTagName}"]) > HTMLElement[tagName="input"]`](node: HTMLElement): void {
        const classNode = node.attributes?.find(attribute => attribute.attributeName.value === 'class');
        const classes = classNode?.attributeValue?.value?.split(' ') || [];

        const disallowedDirectiveNode = node.attributes?.find(
          attribute => attribute.attributeName.value === disallowedDirective
        );

        if (classes.includes(disallowedClass) || disallowedDirectiveNode) {
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

        // report all <clr-input-container> elements
        reportNestedDisallowedElements(containerTagName, context, dom, templateContentNode, ruleFailureMessage);

        // report <input clrInput> and <input class="clr-input"> elements that AREN'T nested in <clr-input-container> elements
        reportNestedDisallowedElements(
          `:not(${containerTagName}) > input[${disallowedDirective}],input.${disallowedClass}`,
          context,
          dom,
          templateContentNode,
          ruleFailureMessage
        );
      },
    };
  },
});
