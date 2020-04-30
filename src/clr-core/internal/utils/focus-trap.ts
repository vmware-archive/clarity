/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { FocusTrapTracker } from '../services/focus-trap-tracker.service.js';
import { addAttributeValue, isHTMLElement, removeAttributeValue } from './dom.js';

export interface FocusTrapElement extends HTMLElement {
  topReboundElement: HTMLElement;
  bottomReboundElement: HTMLElement;
}

export function focusElementIfInCurrentFocusTrapElement(
  focusedElement: HTMLElement,
  focusTrapElement: FocusTrapElement
) {
  if (
    FocusTrapTracker.getCurrent() === focusTrapElement &&
    elementIsOutsideFocusTrapElement(focusedElement, focusTrapElement)
  ) {
    focusTrapElement.focus();
  }
}

export function elementIsOutsideFocusTrapElement(focusedElement: HTMLElement, focusTrapElement: FocusTrapElement) {
  return (
    !focusTrapElement.contains(focusedElement) ||
    focusedElement === focusTrapElement.topReboundElement ||
    focusedElement === focusTrapElement.bottomReboundElement
  );
}

export function createFocusTrapReboundElement() {
  const offScreenSpan = document.createElement('span');
  offScreenSpan.setAttribute('tabindex', '0');
  offScreenSpan.classList.add('offscreen-focus-rebounder');
  return offScreenSpan;
}

export function addReboundElementsToFocusTrapElement(focusTrapElement: FocusTrapElement) {
  if (focusTrapElement) {
    focusTrapElement.topReboundElement = createFocusTrapReboundElement();
    focusTrapElement.bottomReboundElement = createFocusTrapReboundElement();

    if (focusTrapElement.parentElement) {
      focusTrapElement.parentElement.insertBefore(focusTrapElement.topReboundElement, focusTrapElement);
      if (focusTrapElement.nextSibling) {
        focusTrapElement.parentElement.insertBefore(
          focusTrapElement.bottomReboundElement,
          focusTrapElement.nextSibling
        );
      } else {
        focusTrapElement.parentElement.appendChild(focusTrapElement.bottomReboundElement);
      }
    }
  }
}

export function removeReboundElementsFromFocusTrapElement(focusTrapElement: FocusTrapElement) {
  if (focusTrapElement) {
    if (focusTrapElement.topReboundElement && focusTrapElement.parentElement) {
      focusTrapElement.parentElement.removeChild(focusTrapElement.topReboundElement);
    }
    if (focusTrapElement.bottomReboundElement && focusTrapElement.parentElement) {
      focusTrapElement.parentElement.removeChild(focusTrapElement.bottomReboundElement);
    }
    // These are here to to make sure that we completely delete all traces of the removed DOM objects.
    delete focusTrapElement.topReboundElement;
    delete focusTrapElement.bottomReboundElement;
  }
}
export class FocusTrap {
  focusTrapElement: FocusTrapElement;
  private previousFocus: HTMLElement;
  private onFocusInEvent: any;

  constructor(public hostElement: HTMLElement) {
    this.focusTrapElement = hostElement as FocusTrapElement;
  }

  enableFocusTrap() {
    if (FocusTrapTracker.getCurrent() === this.focusTrapElement) {
      throw new Error('Focus trap is already enabled for this instance.');
    }

    addReboundElementsToFocusTrapElement(this.focusTrapElement);
    this.focusTrapElement.setAttribute('tabindex', '0');
    if (document.activeElement && isHTMLElement(document.activeElement)) {
      this.previousFocus = document.activeElement as HTMLElement;
    }
    addAttributeValue(document.body, 'cds-layout', 'no-scrolling');
    FocusTrapTracker.setCurrent(this.focusTrapElement);
    this.focusTrapElement.focus();
    this.onFocusInEvent = this.onFocusIn.bind(this);
    document.addEventListener('focusin', this.onFocusInEvent);
  }

  removeFocusTrap() {
    document.removeEventListener('focusin', this.onFocusInEvent);
    removeAttributeValue(document.body, 'cds-layout', 'no-scrolling');
    removeReboundElementsFromFocusTrapElement(this.focusTrapElement);
    FocusTrapTracker.activatePreviousCurrent();
    if (this.previousFocus) {
      this.previousFocus.focus();
    }
  }

  private onFocusIn(event: FocusEvent) {
    focusElementIfInCurrentFocusTrapElement(event.target as HTMLElement, this.focusTrapElement);
  }
}
