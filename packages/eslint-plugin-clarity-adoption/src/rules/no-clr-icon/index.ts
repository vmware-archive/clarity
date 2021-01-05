import { ESLintUtils } from '@typescript-eslint/experimental-utils';
import { HTMLElement, HTMLAttributeName, HTMLAttribute } from '../../types';
import { RuleFixer, RuleFix } from '@typescript-eslint/experimental-utils/dist/ts-eslint';

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

const deprecatedClassNames = Object.keys(deprecatedClassToAttributeMap);
const isDeprecatedClass = (value: string): boolean => deprecatedClassNames.some(oldStatus => oldStatus === value);

function getSingleDeprecatedClassFix(oldStatus: string, classAttribute: HTMLAttribute, fixer: RuleFixer): RuleFix {
  const statusAttribute = ` ${deprecatedClassToAttributeMap[oldStatus]}`;
  const newAttributeFixer = fixer.insertTextAfter(classAttribute as any, statusAttribute);

  return newAttributeFixer;
}

function getDeprecatedClassFixes(
  fixer: RuleFixer,
  classAttribute: HTMLAttribute | undefined
): Array<RuleFix> | undefined {
  if (!classAttribute) {
    return;
  }

  const fixers: Array<RuleFix> = [];
  const value = classAttribute.attributeValue.value;
  const classes = value.split(' ');
  const deprecatedClasses = classes.filter(isDeprecatedClass);
  if (!deprecatedClasses.length) {
    return;
  }

  const otherClasses = classes.filter(cls => !isDeprecatedClass(cls)).join(' ');
  const newAttributesFixers = deprecatedClasses.map(status =>
    getSingleDeprecatedClassFix(status, classAttribute, fixer)
  );
  let classRemoveFixer: RuleFix;
  // If there are any other classes,
  // remove only the deprecated class value from the "class" attribute
  if (otherClasses.length) {
    classRemoveFixer = fixer.replaceText(classAttribute.attributeValue as any, otherClasses);
  } else {
    // If there are no other classes, remove the whole "class" attribute from the node
    classRemoveFixer = fixer.removeRange([classAttribute.range[0] - 1, classAttribute.range[1]]);
  }

  fixers.push(classRemoveFixer, ...newAttributesFixers);

  return fixers;
}

function getAttributeNameFixes(
  fixer: RuleFixer,
  attributes: Array<HTMLAttribute>,
  oldName: string,
  newName: string
): Array<RuleFix> | undefined {
  const attributeToFix = attributes.find(attribute => attribute.attributeName.value === oldName);
  if (!attributeToFix) {
    return;
  }

  const start = attributeToFix?.range[0];
  const end = start + oldName.length;

  return [fixer.replaceTextRange([start, end], newName)];
}

function isDeprecatedShape(value: string): boolean {
  const isValidDirection = (val: string): boolean =>
    ['up', 'down', 'left', 'right'].some(direction => direction === val);

  const shapes = value.split(' ');

  return shapes && shapes.length === 2 && shapes[0] === 'caret' && isValidDirection(shapes[1]);
}

function getShapeFixes(fixer: RuleFixer, attributes: Array<HTMLAttribute>): Array<RuleFix> | undefined {
  const shapeAttribute = attributes.find(attribute => attribute.attributeName.value === 'shape');
  if (!shapeAttribute) {
    return;
  }

  const attributeValue = shapeAttribute.attributeValue.value || '';

  if (isDeprecatedShape(attributeValue)) {
    const shapeFix = fixer.replaceText(shapeAttribute.attributeValue as any, 'angle');

    const direction = attributeValue.split(' ')[1];
    const insertedDirectionFix = fixer.insertTextAfter(shapeAttribute as any, ` direction="${direction}"`);

    return [shapeFix, insertedDirectionFix];
  }
}

export default createESLintRule({
  name: 'no-clr-icons',
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow use of clr-icons',
      category: 'Best Practices',
      recommended: 'warn',
    },
    fixable: 'code',
    messages: {
      clrIconFailure: 'Using clr-icons is not allowed!',
    },
    schema: [{}],
  },
  defaultOptions: [{}],
  create(context) {
    return {
      // Detects and fixes elements with name "clr-icon" and their attributes
      'HTMLElement[tagName="clr-icon"]': (node: HTMLElement): void => {
        const { value, range } = node;
        const nodeStart = range[0];
        const openingTag = '<clr-icon';
        const openingTagStart = value.indexOf(openingTag) + nodeStart;
        const openingTagEnd = openingTagStart + openingTag.length;

        const closingTag = '</clr-icon>';
        const closingTagStart = value.indexOf(closingTag) + nodeStart;
        const closingTagEnd = closingTagStart + closingTag.length;

        context.report({
          node: node as any,
          messageId: 'clrIconFailure',
          fix: fixer => {
            const openingTagFixer = fixer.replaceTextRange([openingTagStart, openingTagEnd], '<cds-icon');
            const closingTagFixer = fixer.replaceTextRange([closingTagStart, closingTagEnd], '</cds-icon>');

            const attributes = node.attributes || [];
            const directionAttributeFixes = getAttributeNameFixes(fixer, attributes, 'dir', 'direction') || [];
            const shapeFixes = getShapeFixes(fixer, attributes) || [];

            const classAttribute = attributes.find(a => a.attributeName.value === 'class');
            const deprecatedClassFixes = getDeprecatedClassFixes(fixer, classAttribute) || [];

            return [
              openingTagFixer,
              closingTagFixer,
              ...directionAttributeFixes,
              ...shapeFixes,
              ...deprecatedClassFixes,
            ];
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
        const hasDeprecatedClass = value.split(' ').some(isDeprecatedClass);
        if (!hasDeprecatedClass) {
          return;
        }

        context.report({
          node: classValueNode as any,
          messageId: 'clrIconFailure',
          fix: fixer => getDeprecatedClassFixes(fixer, classAttributeNode) || [],
        });
      },
      // Case: the tag name is migrated ("cds-icon") but the shape attribute is not
      'HTMLElement[tagName="cds-icon"] HTMLAttributeName[value="shape"]': (node: HTMLAttributeName): void => {
        const shapeAttribute = node.parent;
        const shapeValue = shapeAttribute.attributeValue.value;

        if (isDeprecatedShape(shapeValue)) {
          context.report({
            node: node as any,
            messageId: 'clrIconFailure',
            fix: fixer => getShapeFixes(fixer, [shapeAttribute]) || [],
          });
        }
      },
    };
  },
});
