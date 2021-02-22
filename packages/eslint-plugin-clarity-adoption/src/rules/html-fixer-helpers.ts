import { RuleFixer, RuleFix } from '@typescript-eslint/experimental-utils/dist/ts-eslint';
import { HTMLAttribute, HTMLElement } from '../types';

function getSingleDeprecatedClassFix(
  oldStatus: string,
  classAttribute: HTMLAttribute,
  deprecatedClassToAttributeMap: any,
  fixer: RuleFixer
): RuleFix | undefined {
  const statusAttribute = deprecatedClassToAttributeMap[oldStatus];
  if (!statusAttribute) {
    return;
  }

  const newAttributeFixer = fixer.insertTextAfter(classAttribute as any, ` ${statusAttribute}`);

  return newAttributeFixer;
}

export function isDeprecatedClassFactory(deprecatedClassToAttributeMap): (value: string) => boolean {
  const deprecatedClassNames = Object.keys(deprecatedClassToAttributeMap);

  return (value: string): boolean => deprecatedClassNames.some(oldStatus => oldStatus === value);
}

export function getDeprecatedClassFixes(
  fixer: RuleFixer,
  classAttribute: HTMLAttribute | undefined,
  deprecatedClassToAttributeMap: { [key: string]: string }
): Array<RuleFix> {
  if (!classAttribute) {
    return [];
  }

  const isDeprecatedClass = isDeprecatedClassFactory(deprecatedClassToAttributeMap);
  const fixers: Array<RuleFix> = [];
  const value = classAttribute.attributeValue.value;
  const classes = value.split(' ');
  const deprecatedClasses = classes.filter(isDeprecatedClass);
  if (!deprecatedClasses.length) {
    return [];
  }

  const otherClasses = classes.filter(cls => !isDeprecatedClass(cls)).join(' ');
  const newAttributesFixers = deprecatedClasses
    .map(status => getSingleDeprecatedClassFix(status, classAttribute, deprecatedClassToAttributeMap, fixer))
    .filter(fix => !!fix) as Array<RuleFix>; // remove undefined values
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

export function getAttributeNameFixes(
  fixer: RuleFixer,
  attributes: Array<HTMLAttribute>,
  oldName: string,
  newName: string
): Array<RuleFix> {
  const attributeToFix = attributes.find(attribute => attribute.attributeName.value === oldName);
  if (!attributeToFix) {
    return [];
  }

  const start = attributeToFix?.range[0];
  const end = start + oldName.length;

  return [fixer.replaceTextRange([start, end], newName)];
}

export function getTagFixes(fixer: RuleFixer, node: HTMLElement, oldTag: string, newTag: string): Array<RuleFix> {
  const openingTag = `<${oldTag}`;
  const closingTag = `</${oldTag}>`;

  const { value, range } = node;
  const openingTagStart = range[0];
  const openingTagEnd = openingTagStart + openingTag.length;

  const closingTagStart = value.lastIndexOf(closingTag) + openingTagStart;

  const closingTagEnd = closingTagStart + closingTag.length - 1;

  return [
    fixer.replaceTextRange([openingTagStart, openingTagEnd], `<${newTag}`),
    fixer.replaceTextRange([closingTagStart, closingTagEnd], `</${newTag}`),
  ];
}
