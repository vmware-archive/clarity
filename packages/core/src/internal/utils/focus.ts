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
