import { RuleFixer, RuleFix } from '@typescript-eslint/experimental-utils/dist/ts-eslint';
import { HTMLAttribute, HTMLElement } from '../types';

export function insertTextAfterNode(node: HTMLAttribute | HTMLElement, text: string, fixer: RuleFixer): RuleFix {
  return fixer.insertTextAfter(node as any, ` ${text}`);
}

export function removeAttribute(attributeToRemove: HTMLAttribute, fixer: RuleFixer): RuleFix {
  const attributeText = attributeToRemove.value;
  const parentText = attributeToRemove.parent.value;
  const startIndex = parentText.indexOf(attributeText);
  const endIndex = startIndex + attributeText.length;

  const symbolBefore = parentText[startIndex - 1] || '';
  const symbolAfter = parentText[endIndex + 1] || '';
  let [removeRangeStart, removeRangeEnd] = attributeToRemove.range;
  if (symbolBefore === ' ') {
    removeRangeStart -= 1;
  } else if (symbolAfter === ' ') {
    removeRangeEnd += 1;
  }

  return fixer.removeRange([removeRangeStart, removeRangeEnd]);
}

function getSingleDeprecatedClassFix(
  oldStatus: string,
  classAttribute: HTMLAttribute,
  deprecatedClassToAttributeMap: any,
  fixer: RuleFixer
): RuleFix | undefined {
  const newValue = deprecatedClassToAttributeMap[oldStatus];
  if (!newValue) {
    return;
  }

  return insertTextAfterNode(classAttribute, newValue, fixer);
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

export function encloseNode(
  node: HTMLElement,
  openingEnclosingTag: string,
  closingEnclosingTag: string,
  fixer: RuleFixer
): Array<RuleFix> {
  const {
    range: [start, end],
  } = node;

  return [
    fixer.insertTextBeforeRange([start, end], openingEnclosingTag),
    fixer.insertTextAfterRange([start, end + 1], closingEnclosingTag),
  ];
}
