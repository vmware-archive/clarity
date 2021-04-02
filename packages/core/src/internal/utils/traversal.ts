/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { getShadowRootOrElse, makeFocusable, queryChildFromLightOrShadowDom, tabFlowSelectors } from './dom.js';

export function getFocusableItems(hostEl: HTMLElement) {
  // This checks light+shadow dom; jic end users are making composite/wrapper components
  const firstFocusEl = queryChildFromLightOrShadowDom(hostEl, '[cds-first-focus]');
  const allFocusable = getFlattenedFocusableItems(getShadowRootOrElse(hostEl));

  if (firstFocusEl === null) {
    return allFocusable;
  } else {
    const filteredFocusable = allFocusable.filter(i => i !== firstFocusEl);
    return [makeFocusable(firstFocusEl), ...filteredFocusable];
  }
}

export function getFlattenedFocusableItems(element: Node, depth = 10) {
  const focusableSelector = tabFlowSelectors.join(',');
  return getFlattenedDOMTree(element, depth).filter((e: HTMLElement) => e.matches(focusableSelector)) as HTMLElement[];
}

export function getFlattenedDOMTree(node: any, depth = 10): any {
  return Array.from(getChildren(node))
    .reduce((prev: any[], next: any) => {
      return [...prev, [next, [...Array.from(getChildren(next)).map((i: any) => [i, getFlattenedDOMTree(i, depth)])]]];
    }, [])
    .flat(depth);
}

export function getChildren(node: any) {
  if (node.documentElement) {
    return node.documentElement.children;
  } else if (node.shadowRoot) {
    return node.shadowRoot.children;
  } else if (node.assignedElements) {
    const slotted = node.assignedElements(); // slotted elements
    return slotted.length ? slotted : node.children; // else fallback
  } else {
    return node.children;
  }
}
