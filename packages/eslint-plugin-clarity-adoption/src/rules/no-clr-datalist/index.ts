import { ESLintUtils, TSESTree } from '@typescript-eslint/experimental-utils';
import { HTMLElement } from '../../types/index';
import { lintDecoratorTemplate } from '../decorator-template-helper';
import { getDeprecatedClassFixes, getTagFixes } from '../html-fixer-helpers';

export const createESLintRule = ESLintUtils.RuleCreator(() => ``);
export type MessageIds = 'clrDatalistFailure';

const disallowedTag = `clr-datalist-container`;

export default createESLintRule({
  name: 'no-clr-datalist',
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow use of clr-datalist',
      recommended: 'warn',
    },
    fixable: 'code',
    messages: {
      clrDatalistFailure: 'Using clr-datalist is not allowed!',
    },
    schema: [{}],
  },
  defaultOptions: [{}],
  create(context) {
    return {
      [`HTMLElement[tagName="${disallowedTag}"]`](node: HTMLElement): void {
        const classNode = node.attributes?.find(attribute => attribute.attributeName.value === 'class');

        context.report({
          node: node as any,
          messageId: 'clrDatalistFailure',
          fix: fixer => {
            const tagFixes = getTagFixes(fixer, node, 'clr-datalist-container', 'cds-datalist', [
              `control-width="shrink"`,
            ]);
            const attributeFixes = getDeprecatedClassFixes(fixer, classNode, [] as any);

            return [...tagFixes, ...attributeFixes];
          },
        });
      },
      'ClassDeclaration > Decorator'(node: TSESTree.Decorator): void {
        lintDecoratorTemplate(context, node, disallowedTag, 'clrDatalistFailure');
      },
    };
  },
});
