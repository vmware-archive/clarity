/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

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
  return Object.keys(styles).reduce(
    (allStyles, prop) => `${allStyles}${styles[prop] ? `${prop}:${styles[prop]};` : ''}`,
    ''
  );
}

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/** Used for Storybook docs to define knob group for css properties */
export const cssGroup = 'CSS Custom Properties';

/** Used for Storybook docs to define knob group for JavaScript properties */
export const propertiesGroup = 'Default Properties';
