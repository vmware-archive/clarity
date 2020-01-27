/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
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

/** Used for Storybook docs to define knob group for css properties */
export const cssGroup = 'CSS Custom Properties';

/** Used for Storybook docs to define knob group for JavaScript properties */
export const propertiesGroup = 'Default Properties';
