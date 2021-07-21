/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { FocusTrapTrackerService } from '../services/focus-trap-tracker.service.js';
import { anyPassOrAnyFail } from './conditional.js';
import { isHTMLElement, isFocusable, queryAllFocusable } from './dom.js';
import { arrayHead, arrayTail } from './array.js';
import { createId } from './identity.js';
export interface FocusTrapElement extends HTMLElement {
  topReboundElement: HTMLElement | undefined;
  bottomReboundElement: HTMLElement | undefined;
  focusTrapId: string;
}

/* c8 ignore next 17 */
/**
 * @deprecated since version 6.0
 */
export function reorderCloseButtonSlot(elements: Element[]): Element[] {
  const closeButtonIndex = elements.findIndex(el => el.tagName.toLowerCase() === 'cds-internal-close-button');

  if (closeButtonIndex > 0 && elements[closeButtonIndex].hasAttribute('slot')) {
    // Put in the close button in a slot moves it around in the tab focus flow;
    // this helps to place it at the top of the modal where it is expected to be
    return [
      elements[closeButtonIndex],
      ...elements.filter(el => el.tagName.toLowerCase() !== 'cds-internal-close-button'),
    ];
  } else {
    return [...elements];
  }
}

/* c8 ignore next 27 */
/**
 * @deprecated since version 6.0
 */
export function refocusIfOutsideFocusTrapElement(
  focusedElement: HTMLElement,
  focusTrapElement: FocusTrapElement,
  elementToRefocus?: HTMLElement
) {
  const focusTrapIsCurrent = FocusTrapTrackerService.getCurrent() === focusTrapElement;
  const elementToFocusIsOutsideFocusTrap = elementIsOutsideFocusTrapElement(focusedElement, focusTrapElement);

  if (focusTrapIsCurrent && elementToFocusIsOutsideFocusTrap) {
    const isReboundEl = whichReboundElement(focusedElement, focusTrapElement);
    const focusableChildren = queryAllFocusable(focusTrapElement);
    const orderedFocusableChildrenAsArray = reorderCloseButtonSlot(Array.from(focusableChildren));

    if (isReboundEl !== null) {
      if (isReboundEl === 'top') {
        elementToRefocus = arrayTail(orderedFocusableChildrenAsArray) as HTMLElement;
      } else if (isReboundEl === 'bottom') {
        elementToRefocus = arrayHead(orderedFocusableChildrenAsArray) as HTMLElement;
      }
    }

    (elementToRefocus || focusTrapElement).focus();
  } else {
    focusedElement.focus();
  }
}

/* c8 ignore next 9 */
/**
 * @deprecated since version 6.0
 */
export function whichReboundElement(el: HTMLElement, focusTrapElement: FocusTrapElement): 'top' | 'bottom' | null {
  if (el === focusTrapElement.topReboundElement) {
    return 'top';
  } else if (el === focusTrapElement.bottomReboundElement) {
    return 'bottom';
  } else {
    return null;
  }
}

/* c8 ignore next 13 */
/**
 * @deprecated since version 6.0
 */
export function elementIsOutsideFocusTrapElement(
  focusedElement: HTMLElement,
  focusTrapElement: FocusTrapElement
): boolean {
  return anyPassOrAnyFail(
    [
      () => {
        return whichReboundElement(focusedElement, focusTrapElement) !== null;
      },
    ], // true if true
    [
      () => focusTrapElement.contains(focusedElement),
      () => focusTrapElement.shadowRoot !== null && focusTrapElement.shadowRoot.contains(focusedElement),
    ], // false if true
    true // fallthrough
  );
}

/* c8 ignore next 6 */
/**
 * @deprecated since version 6.0
 */
export function createFocusTrapReboundElement() {
  const offScreenSpan = document.createElement('span');
  offScreenSpan.setAttribute('tabindex', '0');
  offScreenSpan.classList.add('offscreen-focus-rebounder');
  return offScreenSpan;
}

/**
 * @deprecated since version 6.0
 */
export function addReboundElementsToFocusTrapElement(focusTrapElement: FocusTrapElement) {
  if (focusTrapElement && !focusTrapElement.topReboundElement && !focusTrapElement.bottomReboundElement) {
    focusTrapElement.topReboundElement = createFocusTrapReboundElement();
    focusTrapElement.bottomReboundElement = createFocusTrapReboundElement();

    const parent = focusTrapElement.parentElement;
    const sibling = focusTrapElement.nextSibling;

    if (parent) {
      parent.insertBefore(focusTrapElement.topReboundElement, focusTrapElement);
      if (sibling) {
        parent.insertBefore(focusTrapElement.bottomReboundElement, sibling);
      } else {
        parent.appendChild(focusTrapElement.bottomReboundElement);
      }
    }
  }
}

/**
 * @deprecated since version 6.0
 */
export function removeReboundElementsFromFocusTrapElement(focusTrapElement: FocusTrapElement) {
  if (focusTrapElement) {
    const parent = focusTrapElement.parentElement;

    if (parent) {
      const topRebound = focusTrapElement.topReboundElement;
      const bottomRebound = focusTrapElement.bottomReboundElement;
      if (topRebound) {
        parent.removeChild(topRebound);
      }
      if (bottomRebound) {
        parent.removeChild(bottomRebound);
      }
    }
    // These are here to to make sure that we completely delete all traces of the removed DOM objects.
    delete focusTrapElement.topReboundElement;
    delete focusTrapElement.bottomReboundElement;
  }
}

// this helper exists to enable the focus trap class to handle vanilla html elements
// it's primary concern is to keep TS happy.
// end users should prefer using the CdsBaseFocusTrap component to this method.
// but it exists...
/**
 * @deprecated since version 6.0
 */
export function castHtmlElementToFocusTrapElement(el: HTMLElement): FocusTrapElement {
  return el as FocusTrapElement;
}

/**
 * @deprecated since version 6.0
 */
export class FocusTrap {
  focusTrapElement: FocusTrapElement;
  previousFocus: HTMLElement;
  private onFocusInEvent: any;

  firstFocusElement: HTMLElement | FocusTrapElement;

  active = false;

  constructor(hostElement: FocusTrapElement) {
    hostElement = castHtmlElementToFocusTrapElement(hostElement);

    if (!hostElement.focusTrapId) {
      hostElement.focusTrapId = createId();
    }

    this.focusTrapElement = hostElement;
  }

  enableFocusTrap() {
    const fte = this.focusTrapElement;
    const firstFocusElement = fte.querySelector('[cds-first-focus]');
    const contentWrapper = fte.shadowRoot ? fte.shadowRoot.querySelector('.private-host[tabindex]') : null;
    const activeEl = (this.focusTrapElement.getRootNode() as any).activeElement;

    if (FocusTrapTrackerService.getCurrent() === fte) {
      throw new Error('Focus trap is already enabled for this instance.');
    }

    // Note that first-focus only shows a focus ring when an overlay is first opened
    // if the overlay is opened via keyboard navigation. This is a browser behavior, not a bug.
    this.firstFocusElement =
      (firstFocusElement as HTMLElement) || (contentWrapper as HTMLElement) || this.focusTrapElement;

    addReboundElementsToFocusTrapElement(fte);

    if (!isFocusable(this.firstFocusElement)) {
      this.firstFocusElement.setAttribute('tabindex', '-1');
    }

    if (activeEl && isHTMLElement(activeEl)) {
      this.previousFocus = activeEl as HTMLElement;
    }

    FocusTrapTrackerService.setCurrent(fte);

    // setTimeout here is required for Safari which may try to set focus on
    // element before it is visible...
    const focusTimer = setTimeout(() => {
      this.firstFocusElement.focus();
      clearTimeout(focusTimer);
    }, 1);

    this.onFocusInEvent = this.onFocusIn.bind(this);
    document.addEventListener('focusin', this.onFocusInEvent);
    this.active = true;
  }

  removeFocusTrap() {
    document.removeEventListener('focusin', this.onFocusInEvent);
    removeReboundElementsFromFocusTrapElement(this.focusTrapElement);
    FocusTrapTrackerService.activatePreviousCurrent();
    this.active = false;
    if (this.previousFocus) {
      // timeout here helps screen readers behave more consistently when focus traps are closed
      const focusTimer = setTimeout(() => {
        this.previousFocus.focus();
        clearTimeout(focusTimer);
      }, 1);
    }
  }

  private onFocusIn(event: FocusEvent) {
    refocusIfOutsideFocusTrapElement(
      event.composedPath()[0] as HTMLElement,
      this.focusTrapElement,
      this.firstFocusElement
    );
  }
}
