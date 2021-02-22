import { ESLintUtils } from '@typescript-eslint/experimental-utils';
import { RuleFixer, RuleFix } from '@typescript-eslint/experimental-utils/dist/ts-eslint';
import { HTMLElement, HTMLAttributeName, HTMLAttribute } from '../../types';
import {
  isDeprecatedClassFactory,
  getAttributeNameFixes,
  getDeprecatedClassFixes,
  getTagFixes,
} from '../html-fixer-helpers';

export const createESLintRule = ESLintUtils.RuleCreator(() => ``);

const deprecatedClassToAttributeMap = {
  'is-success': 'status="success"',
  'is-green': 'status="success"',

  'is-danger': 'status="danger"',
  'is-red': 'status="danger"',

  'is-warning': 'status="warning"',

  'is-info': 'status="info"',
  'is-blue': 'status="info"',

  'is-highlight': 'status="highlight"',

  'is-inverse': 'inverse',
  'is-white': 'inverse',

  'is-solid': 'solid',

  'has-badge': 'badge',
  'has-badge--success': 'badge="success"',
  'has-badge--info': 'badge="info"',
  'has-badge--error': 'badge="error"',
  'has-alert': 'badge="triangle"',
};

function isDeprecatedShape(value: string): boolean {
  const isValidDirection = (val: string): boolean =>
    ['up', 'down', 'left', 'right'].some(direction => direction === val);

  const shapes = value.split(' ');

  return shapes && shapes.length === 2 && shapes[0] === 'caret' && isValidDirection(shapes[1]);
}

function getShapeFixes(fixer: RuleFixer, attributes: Array<HTMLAttribute>): Array<RuleFix> {
  const shapeAttribute = attributes.find(attribute => attribute.attributeName.value === 'shape');
  if (!shapeAttribute) {
    return [];
  }

  const attributeValue = shapeAttribute.attributeValue.value || '';

  if (!isDeprecatedShape(attributeValue)) {
    return [];
  }

  const shapeFix = fixer.replaceText(shapeAttribute.attributeValue as any, 'angle');

  const direction = attributeValue.split(' ')[1];
  const insertedDirectionFix = fixer.insertTextAfter(shapeAttribute as any, ` direction="${direction}"`);

  return [shapeFix, insertedDirectionFix];
}

export default createESLintRule({
  name: 'no-clr-icon',
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow use of clr-icon',
      category: 'Best Practices',
      recommended: 'warn',
    },
    fixable: 'code',
    messages: {
      clrIconFailure: 'Using clr-icon is not allowed!',
    },
    schema: [{}],
  },
  defaultOptions: [{}],
  create(context) {
    return {
      // Detects and fixes elements with name "clr-icon" and their attributes
      'HTMLElement[tagName="clr-icon"]': (node: HTMLElement): void => {
        context.report({
          node: node as any,
          messageId: 'clrIconFailure',
          fix: fixer => {
            const tagFixes = getTagFixes(fixer, node, 'clr-icon', 'cds-icon');

            const attributes = node.attributes || [];
            const directionAttributeFixes = getAttributeNameFixes(fixer, attributes, 'dir', 'direction');
            const shapeFixes = getShapeFixes(fixer, attributes);

            const classAttribute = attributes.find(a => a.attributeName.value === 'class');
            const deprecatedClassFixes = getDeprecatedClassFixes(fixer, classAttribute, deprecatedClassToAttributeMap);

            return [...tagFixes, ...directionAttributeFixes, ...shapeFixes, ...deprecatedClassFixes];
          },
        });
      },
      // Case: the tag name is migrated ("cds-icon") but the dir attribute is not
      'HTMLElement[tagName="cds-icon"] HTMLAttributeName[value="dir"]': (node: HTMLAttributeName): void => {
        context.report({
          node: node as any,
          messageId: 'clrIconFailure',
          fix: fixer => fixer.replaceText(node as any, 'direction'),
        });
      },
      // Case: the tag name is migrated ("cds-icon") but the deprecated classes are not
      'HTMLElement[tagName="cds-icon"] HTMLAttributeName[value="class"]': (node: HTMLAttributeName): void => {
        const classAttributeNode = node.parent;
        const classValueNode = classAttributeNode.attributeValue;
        const { value = '' } = classValueNode;
        const isDeprecatedClass = isDeprecatedClassFactory(deprecatedClassToAttributeMap);
        const hasDeprecatedClass = value.split(' ').some(isDeprecatedClass);

        if (hasDeprecatedClass) {
          context.report({
            node: classValueNode as any,
            messageId: 'clrIconFailure',
            fix: fixer => getDeprecatedClassFixes(fixer, classAttributeNode, deprecatedClassToAttributeMap),
          });
        }
      },
      // Case: the tag name is migrated ("cds-icon") but the shape attribute is not
      'HTMLElement[tagName="cds-icon"] HTMLAttributeName[value="shape"]': (node: HTMLAttributeName): void => {
        const shapeAttribute = node.parent;
        const shapeValue = shapeAttribute.attributeValue.value;

        if (isDeprecatedShape(shapeValue)) {
          context.report({
            node: node as any,
            messageId: 'clrIconFailure',
            fix: fixer => getShapeFixes(fixer, [shapeAttribute]),
          });
        }
      },
    };
  },
});
