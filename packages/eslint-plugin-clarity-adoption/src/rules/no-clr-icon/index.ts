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
  'is-error': 'status="danger"',

  'is-warning': 'status="warning"',

  'is-info': 'status="info"',
  'is-blue': 'status="info"',
  'is-highlight': 'status="info"',

  'is-inverse': 'inverse',
  'is-white': 'inverse',

  'is-solid': 'solid',

  'has-badge': 'badge',
  'has-badge--success': 'badge="success"',
  'has-badge--info': 'badge="info"',
  'has-badge--error': 'badge="error"',
  'has-alert': 'badge="triangle"',
};

const deprecatedShapesMap = {
  caret: 'angle',
  collapse: 'angle-double',
  arrow: 'arrow',
};

function isValidDirection(direction: string): boolean {
  return ['up', 'down', 'left', 'right'].includes(direction);
}

function isDeprecatedShape(value: string): boolean {
  const shapes = value.split(' ');

  return shapes?.length === 2 && deprecatedShapesMap[shapes[0]] && isValidDirection(shapes[1]);
}

function getShapeFixes(fixer: RuleFixer, attributes: Array<HTMLAttribute>): Array<RuleFix> {
  const shapeAttribute = attributes.find(attribute => attribute.attributeName.value === 'shape');
  if (!shapeAttribute) {
    return [];
  }

  const attributeValue = shapeAttribute.attributeValue.value || '';
  const shapes = attributeValue.split(' ');

  if (shapes?.length !== 2) {
    return [];
  }

  const [value, direction] = shapes;
  const newShape = deprecatedShapesMap[value];

  if (!newShape || !isValidDirection(direction)) {
    return [];
  }

  const shapeFix = fixer.replaceText(shapeAttribute.attributeValue as any, newShape);
  const insertedDirectionFix = fixer.insertTextAfter(shapeAttribute as any, ` direction="${direction}"`);

  return [shapeFix, insertedDirectionFix];
}

export default createESLintRule({
  name: 'no-clr-icon',
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow use of clr-icon',
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
