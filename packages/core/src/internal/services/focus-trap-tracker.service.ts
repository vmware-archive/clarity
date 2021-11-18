/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { arrayTail } from '../utils/array.js';
import { setAttributes } from '../utils/dom.js';
import { GlobalStateService } from './global.service.js';

export const CDS_FOCUS_TRAP_DOCUMENT_ATTR = 'cds-focus-trap';

/**
 * FocusTrapTrackerService is a static class that keeps track of the active element with focus trap,
 * in case there are multiple in a given page.
 */
export class FocusTrapTrackerService {
  static getTrapElements(): { focusTrapId: string }[] {
    return [...GlobalStateService.state.focusTrapItems];
  }

  static setTrapElements(elements: { focusTrapId: string }[]): void {
    const htmlEl = document.querySelector('html');
    if (htmlEl !== null) {
      setAttributes(htmlEl as HTMLElement, [CDS_FOCUS_TRAP_DOCUMENT_ATTR, elements.length ? '' : false]);
    }
    GlobalStateService.state.focusTrapItems = [...elements];
  }

  static removeTrapElement(element: { focusTrapId: string }): void {
    const currentTrapEls = this.getTrapElements();

    if (currentTrapEls.length < 1) {
      return;
    }

    this.setTrapElements([...this.getTrapElements().filter(e => e.focusTrapId !== element.focusTrapId)]);
  }

  static setCurrent(element: { focusTrapId: string }): void {
    if (!element?.focusTrapId) {
      return;
    }

    this.setTrapElements([...this.getTrapElements().filter(e => e.focusTrapId !== element.focusTrapId), element]);
  }

  static activatePreviousCurrent(): void {
    this.setTrapElements([...this.getTrapElements()].slice(0, -1));
  }

  static getCurrent(): { focusTrapId: string } | null {
    return arrayTail(this.getTrapElements()) || null;
  }
}
