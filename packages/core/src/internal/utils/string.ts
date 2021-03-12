/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { isNilOrEmpty, isNumericString } from './identity.js';

export function transformToString(delimiter: string, fns: any[], ...args: any[]): string {
  return fns
    .map(fn => {
      return fn(...args);
    })
    .join(delimiter)
    .trim();
}

// have to go this route because ramda curry throws typescript for loops
export function transformToSpacedString(fns: any[], ...args: any[]): string {
  return transformToString(' ', fns, ...args);
}

export function transformToUnspacedString(fns: any[], ...args: any[]): string {
  return transformToString('', fns, ...args);
}

export function camelCaseToKebabCase(value: string) {
  return value.replace(/[A-Z]/g, l => `-${l.toLowerCase()}`);
}

export function kebabCaseToCamelCase(str: string) {
  return str
    .split('-')
    .map((item, index) => (index ? item.charAt(0).toUpperCase() + item.slice(1).toLowerCase() : item))
    .join('');
}

export function kebabCaseToPascalCase(string: string) {
  const camelCase = kebabCaseToCamelCase(string);
  return capitalizeFirstLetter(camelCase);
}

/**
 * Take a object map of css properties and if value concatenate string of all computed values
 * Useful for dynamic style tags in lit-html templates
 */
export function setStyles(styles: { [key: string]: string }) {
  return createPropStyleSelectors(Object.keys(styles), styles);
}

export function setPropStyles(styles: { [key: string]: string }) {
  return createPropStyleSelectors(
    Object.keys(styles).filter(prop => prop.startsWith('--')),
    styles
  );
}

function createPropStyleSelectors(props: string[], styles: { [key: string]: string }) {
  return props.reduce((allStyles, prop) => `${allStyles}${styles[prop] ? `${prop}:${styles[prop]};` : ''}`, '');
}

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/** Used for Storybook docs to define knob group for css properties */
export const cssGroup = 'CSS Custom Properties';

/** Used for Storybook docs to define knob group for JavaScript properties */
export const propertiesGroup = 'Default Properties';

export function getNumericValueFromCssSecondsStyleValue(styleValueInSeconds: string): number {
  const secondsStringChecker = /(\d+)?\.?(\d+)?s/g;
  if (!styleValueInSeconds || !styleValueInSeconds.match(secondsStringChecker)) {
    return 0; // validate expected input
  }
  const copyVal = styleValueInSeconds.substr(0, styleValueInSeconds.length - 1); // cut off trailing 's'

  return isNumericString(copyVal) ? Number(copyVal) : 0;
}

export function isPrefixedOrSuffixedBy(str: string, stringFix: string, prefixOrSuffix = 'prefix'): boolean {
  if (isNilOrEmpty(stringFix) || isNilOrEmpty(str)) {
    return false;
  }
  const myFixToTest = prefixOrSuffix === 'prefix' ? str.substr(0, stringFix.length) : str.substr(-1 * stringFix.length);
  return myFixToTest === stringFix;
}

export function isPrefixedBy(str: string, prefix: string): boolean {
  return isPrefixedOrSuffixedBy(str, prefix, 'prefix');
}

export function isSuffixedBy(str: string, suffix: string): boolean {
  return isPrefixedOrSuffixedBy(str, suffix, 'suffix');
}

export function removePrefixOrSuffix(str: string, stringFix: string, prefixOrSuffix = 'prefix'): string {
  if (isNilOrEmpty(str)) {
    return '';
  }

  if (isNilOrEmpty(stringFix) || !isPrefixedOrSuffixedBy(str, stringFix, prefixOrSuffix)) {
    return str;
  }

  switch (prefixOrSuffix) {
    case 'prefix':
      return str.substr(stringFix.length);
    case 'suffix':
      return str.substr(0, str.length - stringFix.length);
    default:
      return str;
  }
}

export function removePrefix(str: string, prefix: string): string {
  return removePrefixOrSuffix(str, prefix, 'prefix');
}

export function removeSuffix(str: string, suffix: string): string {
  return removePrefixOrSuffix(str, suffix, 'suffix');
}
