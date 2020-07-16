/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { LitElement } from 'lit-element';

/**
 * Returns a promise when all components have completed rendering one cycle.
 */
export function childrenUpdateComplete(elements: LitElement[] | NodeListOf<LitElement>) {
  return Promise.all(Array.from(elements).map(e => e.updateComplete));
}

/**
 * Set all properties that are in common with a parent group and child components.
 * This is helpful when providing convenience group/wrapper components that set the state
 * of child slotted elements (cds-form-group, cds-control-group). Typically call
 * during the `firstUpdated` or `updated` lifecycle.
 */
export function syncDefinedProps(
  props: Map<string, any>,
  source: { [prop: string]: any },
  targets: { [prop: string]: any }[]
) {
  props.forEach((_value, key) => targets.filter(t => t && t[key] !== undefined).forEach(t => (t[key] = source[key])));
}

/**
 * Set all common properties between two instances with given conditions. This is
 * helpful for setting child component properties from the parent given certain
 * conditions.
 */
export function syncProps(
  target: { [prop: string]: any },
  source: { [prop: string]: any },
  conditions: { [prop: string]: boolean }
) {
  Object.keys(conditions)
    .filter(c => conditions[c])
    .forEach(c => (target[c] = source[c]));
}
