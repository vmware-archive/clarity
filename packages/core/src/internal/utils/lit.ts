/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { LitElement, PropertyValues, render, RenderOptions } from 'lit';

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
  props: PropertyValues<any>,
  source: { [prop: string]: any },
  targets: { [prop: string]: any }[]
) {
  props.forEach((_value, key: any) =>
    targets.filter(t => t && t[key] !== undefined).forEach(t => (t[key] = source[key]))
  );
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

export function syncPropsForAllItems(
  targets: { [prop: string]: any }[],
  source: { [prop: string]: any },
  conditions: { [prop: string]: boolean }
) {
  targets.forEach(target => syncProps(target, source, conditions));
}

/** given an element and prop map, determine if property was updated during the updated lifecycle */
export function propUpdated(element: any, props: PropertyValues, prop: string) {
  return props.has(prop) && element[prop] !== props.get(prop);
}

export function renderBefore(value: unknown, container: HTMLElement | DocumentFragment, options?: RenderOptions) {
  const el = document.createElement('div');
  container.prepend(el);
  render(value, container, { renderBefore: el, ...options });
  const rendered = el.previousSibling;
  el.remove();
  return rendered;
}

export function renderAfter(value: unknown, container: HTMLElement | DocumentFragment, options?: RenderOptions) {
  const el = document.createElement('div');
  container.appendChild(el);
  render(value, container, { renderBefore: el, ...options });
  const rendered = el.previousSibling;
  el.remove();
  return rendered;
}
