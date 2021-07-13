/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Directions, setOrRemoveAttribute } from '@cds/core/internal';
import { CdsNavigationItem, CdsNavigationStart } from '../index.js';

export const NAVIGATION_TEXT_WRAPPER = 'cds-navigation-sr-text';
export const DEFAULT_NAVIGATION_LAYOUT = 'vertical';

export type FocusableElement = CdsNavigationItem | CdsNavigationStart;

export function getNextFocusElement(current: FocusableElement, elements: FocusableElement[]): FocusableElement {
  const idx = elements.indexOf(current);
  return elements[idx + 1] ? elements[idx + 1] : elements[0];
}

export function getPreviousFocusElement(current: FocusableElement, elements: FocusableElement[]): FocusableElement {
  const idx = elements.indexOf(current);
  return elements[idx - 1] ? elements[idx - 1] : elements[elements.length - 1];
}

export function getToggleIconDirection(element: CdsNavigationStart): Directions {
  if (element.isGroupStart) {
    return element.expanded ? 'down' : 'right';
  } else {
    return element.expandedRoot ? 'left' : 'right';
  }
}

export function manageScreenReaderElements(element: HTMLElement, expandedRoot: boolean): void {
  const span = element.querySelector('span');
  if (span) {
    setOrRemoveAttribute(span, ['cds-layout', 'display:screen-reader-only'], () => {
      return !expandedRoot;
    });
  }
}

export function removeFocus(element: FocusableElement) {
  element.hasFocus = false;
}

export function setFocus(element: FocusableElement) {
  element.hasFocus = true;
  element.focusElement?.scrollIntoView(); // Bring elements that are hidden by overflow into viewport
}

export function visibleElement(element: FocusableElement): boolean {
  const elementType = element?.tagName;
  const grandparent = element?.parentElement?.parentElement;

  switch (elementType) {
    case 'CDS-NAVIGATION-ITEM':
      return element.hasAttribute('_expanded-group');

    case 'CDS-NAVIGATION-START':
      return !(grandparent?.tagName === 'CDS-NAVIGATION-GROUP' && !grandparent?.hasAttribute('expanded'));

    default:
      return false;
  }
}
