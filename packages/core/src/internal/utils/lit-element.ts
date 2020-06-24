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
export function syncDefinedProps(props: Map<string, any>, parent: any, children: any[]) {
  props.forEach((_value, key) => children.filter(c => c[key] !== undefined).forEach(c => (c[key] = parent[key])));
}
