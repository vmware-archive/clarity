/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { LitElement } from 'lit-element';
import { CDS_FOCUS_TRAP_ID_ATTR, FocusTrapTracker } from '../services/focus-trap-tracker.service.js';
import { isHTMLElement } from './dom.js';
import { createId } from './identity.js';

export interface FocusTrapElement extends HTMLElement {
  topReboundElement: HTMLElement | undefined;
  bottomReboundElement: HTMLElement | undefined;
  focusTrapId: string;
}

export function refocusIfOutsideFocusTrapElement(focusedElement: HTMLElement, focusTrapElement: FocusTrapElement) {
  if (
    FocusTrapTracker.getCurrent() === focusTrapElement &&
    elementIsOutsideFocusTrapElement(focusedElement, focusTrapElement)
  ) {
    focusTrapElement.focus();
  } else {
    focusedElement.focus();
  }
}

export function elementIsOutsideFocusTrapElement(focusedElement: HTMLElement, focusTrapElement: FocusTrapElement) {
  const elementToFocusIsNotInsideFocusTrap = !focusTrapElement.contains(focusedElement);
  const notTopRebounder = focusedElement === focusTrapElement.topReboundElement;
  const notBottomRebounder = focusedElement === focusTrapElement.bottomReboundElement;
  const elementToFocusIsRebounder = notTopRebounder && notBottomRebounder;

  return elementToFocusIsNotInsideFocusTrap || elementToFocusIsRebounder;
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
    const activeEl = document.activeElement;
    if (FocusTrapTracker.getCurrent() === fte) {
      throw new Error('Focus trap is already enabled for this instance.');
    }

    addReboundElementsToFocusTrapElement(fte);
    fte.setAttribute('tabindex', '0');
    if (activeEl && isHTMLElement(activeEl)) {
      this.previousFocus = activeEl as HTMLElement;
    }
    FocusTrapTracker.setCurrent(fte.focusTrapId);
    fte.focus();
    this.onFocusInEvent = this.onFocusIn.bind(this);
    document.addEventListener('focusin', this.onFocusInEvent);
  }

  removeFocusTrap() {
    document.removeEventListener('focusin', this.onFocusInEvent);
    removeReboundElementsFromFocusTrapElement(this.focusTrapElement);
    FocusTrapTracker.activatePreviousCurrent();
    if (this.previousFocus) {
      this.previousFocus.focus();
    }
  }

  private onFocusIn(event: FocusEvent) {
    refocusIfOutsideFocusTrapElement(event.target as HTMLElement, this.focusTrapElement);
  }
}
