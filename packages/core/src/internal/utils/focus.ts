/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { stopEvent } from './events.js';

export function focusable(element: Element) {
  return element.matches(
    [
      'a[href]',
      'area[href]',
      'input:not([disabled])',
      'button:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      'iframe',
      'object',
      'embed',
      '*[tabindex]', // -1 tabindex is a focusable element and needed for keyboard navigation
      '*[contenteditable=true]',
      '[role=button]:not([disabled])',
    ].join(',')
  );
}

// todo cory: test
/**
 * Lists simple focus primitives, any interactive element that does not require advanced keyboard interactions like arrow/navigation
 */
export function simpleFocusable(element: Element) {
  return element.matches(
    [
      'a[href]',
      'button:not([disabled])',
      'input[type=checkbox]',
      'input[type=radio]',
      'object',
      'embed',
      '*[tabindex]', // -1 tabindex is a focusable element and needed for keyboard navigation
      '[role=button]:not([disabled])',
    ].join(',')
  );
}

export function getActiveElement(root: Document | ShadowRoot = document): Element | null {
  if (root.activeElement && root.activeElement.shadowRoot) {
    return getActiveElement(root.activeElement.shadowRoot) ?? root.activeElement;
  } else {
    return root.activeElement;
  }
}

export function focusElement(element: HTMLElement) {
  if (element && !focusable(element)) {
    element.setAttribute('tabindex', '-1');
    element.focus();
    element.addEventListener('blur', () => element.removeAttribute('tabindex'), { once: true });
  } else {
    element?.focus();
  }
}

export function onFocusOut(element: HTMLElement, fn: () => void) {
  element.addEventListener('focusout', (event: any) => {
    if (!element.contains(event.relatedTarget) && document.hasFocus()) {
      fn();
    }
  });
}

export function onEscape(element: HTMLElement, fn: () => void) {
  element.addEventListener('keyup', (e: KeyboardEvent) => {
    if (e.code === 'Escape') {
      stopEvent(e);
      fn();
    }
  });
}

export function ignoreFocus(hostEl: HTMLElement) {
  return (
    (hostEl as any).cdsIgnoreFocus === true ||
    hostEl.hasAttribute('cds-ignore-focus') ||
    hostEl.hasAttribute('_demo-mode') // deprecated internal
  );
}

// todo cory: test
export function setActiveKeyListItem(items: NodeListOf<HTMLElement> | HTMLElement[], item: HTMLElement) {
  items.forEach(i => (i.tabIndex = -1));
  item.tabIndex = 0;
}

// todo cory: test
export function initializeKeyListItems(items: NodeListOf<HTMLElement> | HTMLElement[]) {
  items.forEach(i => (i.tabIndex = -1));
  items[0].tabIndex = 0;
}
