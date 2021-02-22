import { ESLintUtils, TSESTree } from '@typescript-eslint/experimental-utils';
import { HTMLElement } from '../../types';
import { lintDecoratorTemplate } from '../decorator-template-helper';
import { getDeprecatedClassFixes, getTagFixes } from '../html-fixer-helpers';

export const createESLintRule = ESLintUtils.RuleCreator(() => ``);
export type MessageIds = 'clrBadgeFailure';

const disallowedBadgeElementSelector = `span.badge`;

const deprecatedClassToAttributeMap = {
  badge: '', // remove extraneous badge classes

  'badge-purple': 'color="purple"',
  'badge-blue': 'color="blue"',
  'badge-orange': 'color="orange"',
  'badge-light-blue': 'color="light-blue"',

  'badge-1': 'color="gray"',
  'badge-2': 'color="purple"',
  'badge-3': 'color="blue"',
  'badge-4': 'color="orange"',
  'badge-5': 'color="light-blue"',

  'badge-info': 'status="info"',
  'badge-success': 'status="success"',
  'badge-warning': 'status="warning"',
  'badge-danger': 'status="danger"',
};

function hasDisallowedClass(classes: Array<string>): boolean {
  return classes.includes('badge');
}

export default createESLintRule({
  name: 'no-clr-badge',
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow use of clr-badge',
      category: 'Best Practices',
      recommended: 'warn',
    },
    fixable: 'code',
    messages: {
      clrBadgeFailure: 'Using clr-badge is not allowed!',
    },
    schema: [{}],
  },
  defaultOptions: [{}],
  create(context) {
    return {
      'HTMLElement[tagName="span"]'(node: HTMLElement): void {
        const classNode = node.attributes?.find(attribute => attribute.attributeName.value === 'class');
        const classes = classNode?.attributeValue?.value?.split(' ') || [];
        if (hasDisallowedClass(classes)) {
          context.report({
            node: node as any,
            messageId: 'clrBadgeFailure',
            fix: fixer => {
              const tagFixes = getTagFixes(fixer, node, 'span', 'cds-badge');
              const attributeFixes = getDeprecatedClassFixes(fixer, classNode, deprecatedClassToAttributeMap);

              return [...tagFixes, ...attributeFixes];
            },
          });
        }
      },
      'ClassDeclaration > Decorator'(node: TSESTree.Decorator): void {
        lintDecoratorTemplate(context, node, disallowedBadgeElementSelector, 'clrBadgeFailure');
      },
    };
  },
});
