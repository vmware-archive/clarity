/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { LitElement } from 'lit-element';
import { CDS_FOCUS_TRAP_ID_ATTR, FocusTrapTracker } from '../services/focus-trap-tracker.service.js';
import { isHTMLElement, isFocusable } from './dom.js';
import { createId } from './identity.js';

export interface FocusTrapElement extends HTMLElement {
  topReboundElement: HTMLElement | undefined;
  bottomReboundElement: HTMLElement | undefined;
  focusTrapId: string;
}

export function refocusIfOutsideFocusTrapElement(
  focusedElement: HTMLElement,
  focusTrapElement: FocusTrapElement,
  elementToRefocus?: HTMLElement
) {
  const focusTrapIsCurrent = FocusTrapTracker.getCurrent() === focusTrapElement;
  const elementToFocusIsOutsideFocusTrap = elementIsOutsideFocusTrapElement(focusedElement, focusTrapElement);

  if (focusTrapIsCurrent && elementToFocusIsOutsideFocusTrap) {
    elementToRefocus = elementToRefocus || focusTrapElement;
    elementToRefocus.focus();
  } else {
    focusedElement.focus();
  }
}

export function elementIsOutsideFocusTrapElement(
  focusedElement: HTMLElement,
  focusTrapElement: FocusTrapElement
): boolean {
  if (
    focusedElement === focusTrapElement.topReboundElement ||
    focusedElement === focusTrapElement.bottomReboundElement
  ) {
    return true;
  }

  const elementIsInFocusTrapLightDom = focusTrapElement.contains(focusedElement);

  if (elementIsInFocusTrapLightDom) {
    return false;
  }

  if (focusTrapElement.shadowRoot !== null && focusTrapElement.shadowRoot.contains(focusedElement)) {
    return false;
  }

  return true;
}

export function createFocusTrapReboundElement() {
  const offScreenSpan = document.createElement('span');
  offScreenSpan.setAttribute('tabindex', '0');
  offScreenSpan.classList.add('offscreen-focus-rebounder');
  return offScreenSpan;
}

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
export function castHtmlElementToFocusTrapElement(el: HTMLElement): FocusTrapElement {
  return el as FocusTrapElement;
}

export class FocusTrap {
  focusTrapElement: FocusTrapElement;
  private previousFocus: HTMLElement;
  private onFocusInEvent: any;

  firstFocusElement: HTMLElement | FocusTrapElement;

  active = false;

  constructor(hostElement: FocusTrapElement) {
    hostElement = castHtmlElementToFocusTrapElement(hostElement);

    if (!hostElement.focusTrapId) {
      hostElement.focusTrapId = createId();
    }

    // @deprecation
    // reflect attr for non-Lit Element traps
    // IMPORTANT! Using something other than a LitElement will break in React.
    // The preference should be to use the CdsBaseFocusTrap component
    // If that is not possible, avoid passing HTMLElement through here
    if (!(hostElement instanceof LitElement) && !hostElement.hasAttribute(CDS_FOCUS_TRAP_ID_ATTR)) {
      hostElement.setAttribute(CDS_FOCUS_TRAP_ID_ATTR, hostElement.focusTrapId);
    }

    this.focusTrapElement = hostElement;
  }

  enableFocusTrap() {
    const fte = this.focusTrapElement;
    const firstFocusElement = fte.querySelector('[cds-first-focus]');
    const contentWrapper = fte.shadowRoot ? fte.shadowRoot.querySelector('.private-host[tabindex]') : null;
    const activeEl = document.activeElement;

    if (FocusTrapTracker.getCurrent() === fte) {
      throw new Error('Focus trap is already enabled for this instance.');
    }

    this.firstFocusElement =
      (firstFocusElement as HTMLElement) || (contentWrapper as HTMLElement) || this.focusTrapElement;

    addReboundElementsToFocusTrapElement(fte);

    if (!isFocusable(fte)) {
      fte.setAttribute('tabindex', '-1');
    }

    if (activeEl && isHTMLElement(activeEl)) {
      this.previousFocus = activeEl as HTMLElement;
    }

    FocusTrapTracker.setCurrent(fte.focusTrapId);

    // setTimeout here is required for Safari which may try to set focus on
    // element before it is visible...
    const focusTimer = setTimeout(() => {
      this.firstFocusElement.focus();
      clearTimeout(focusTimer);
    }, 10);

    this.onFocusInEvent = this.onFocusIn.bind(this);
    document.addEventListener('focusin', this.onFocusInEvent);
    this.active = true;
  }

  removeFocusTrap() {
    document.removeEventListener('focusin', this.onFocusInEvent);
    removeReboundElementsFromFocusTrapElement(this.focusTrapElement);
    FocusTrapTracker.activatePreviousCurrent();
    this.active = false;
    if (this.previousFocus) {
      this.previousFocus.focus();
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
