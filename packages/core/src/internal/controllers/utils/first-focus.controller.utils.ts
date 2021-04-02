/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { getShadowRootOrElse, makeFocusable } from '../../utils/dom.js';

export function getItemToFocus(hostEl: HTMLElement, focusableItems: HTMLElement[]) {
  if (focusableItems && focusableItems.length > 0) {
    const firstFocus = focusableItems.find((e: HTMLElement) => e.hasAttribute('cds-first-focus'));
    if (firstFocus) {
      return firstFocus;
    } else {
      const tabFlowEls = focusableItems.filter((e: HTMLElement) => {
        const elTabIndex = e.getAttribute('tabindex');
        return (elTabIndex === null || elTabIndex !== '-1') && !e.hasAttribute('cds-focus-boundary');
      });
      return tabFlowEls.length > 0 ? tabFlowEls[0] : getHostElementToFocus(hostEl);
    }
  } else {
    return getHostElementToFocus(hostEl);
  }
}

export function getHostElementToFocus(hostEl: HTMLElement) {
  return makeFocusable(getShadowRootOrElse(hostEl).querySelector('.private-host') || hostEl);
}

export function ignoreFocusTrap(hostEl: HTMLElement) {
  return (
    (hostEl as any).ignoreFocusTrap === true ||
    hostEl.hasAttribute('_demo-mode') ||
    hostEl.hasAttribute('cds-ignore-focus-trap')
  );
}
