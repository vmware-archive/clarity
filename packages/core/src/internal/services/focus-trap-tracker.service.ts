/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { hasAttributeAndIsNotEmpty, setAttributes } from '../utils/dom.js';
import { arrayTail } from '../utils/array.js';

/**
 * FocusTrapTracker is a static class that keeps track of the active element with focus trap,
 * in case there are multiple in a given page.
 */

export const CDS_FOCUS_TRAP_ID_ATTR = 'focus-trap-id';
export const CDS_FOCUS_TRAP_DOCUMENT_ATTR = 'cds-focus-trap-ids';

export class FocusTrapTracker {
  static getDocroot(): HTMLElement {
    return document.documentElement as HTMLElement;
  }

  static getTrapIds(): string[] {
    const docroot = this.getDocroot();

    if (hasAttributeAndIsNotEmpty(docroot, CDS_FOCUS_TRAP_DOCUMENT_ATTR)) {
      // the function in the conditional handles all nil references. zero chance of null making it through here.
      const myAttribute = docroot.getAttribute(CDS_FOCUS_TRAP_DOCUMENT_ATTR) || '';
      // TS forcing us to write an unreachable codepath. this is where monads would be useful.
      return myAttribute === '' ? [] : myAttribute.split(' ');
    } else {
      return [];
    }
  }

  static setTrapIds(trapIds: string[]): void {
    const myTrapIds = trapIds.length > 0 ? trapIds.join(' ') : false;
    setAttributes(this.getDocroot(), [CDS_FOCUS_TRAP_DOCUMENT_ATTR, myTrapIds]);
  }

  static setCurrent(myTrapId: string): void {
    if (myTrapId === '') {
      return;
    }

    const trapIds = this.getTrapIds();

    // this is a just-in-case situation. we should never encounter it.
    // but in the event that we do, this guard will ensure no id is in the
    // focus trap list more than once.
    if (arrayTail(trapIds) === myTrapId) {
      return;
    }

    const existingIndex = trapIds.indexOf(myTrapId);
    if (existingIndex > -1) {
      trapIds.splice(existingIndex, 1);
    }

    trapIds.push(myTrapId);
    this.setTrapIds(trapIds);
  }

  static activatePreviousCurrent(): void {
    const trapIds = this.getTrapIds();
    trapIds.pop();
    this.setTrapIds(trapIds);
  }

  static getCurrentTrapId(): string {
    return arrayTail(this.getTrapIds()) || '';
  }

  static getCurrent(): HTMLElement | null {
    const docroot = this.getDocroot();
    const currentId = this.getCurrentTrapId();

    if (currentId !== '') {
      return docroot.querySelector(`[${CDS_FOCUS_TRAP_ID_ATTR}="${currentId}"]`);
    } else {
      return null;
    }
  }
}
