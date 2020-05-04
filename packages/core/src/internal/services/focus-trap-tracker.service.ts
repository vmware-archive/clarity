/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

/**
 * FocusTrapTracker is a static class that keeps track of the active element with focus trap,
 * in case there are multiple in a given page.
 */
export class FocusTrapTracker {
  private static focusTrapElements: Element[] = [];

  static setCurrent(el: Element) {
    this.focusTrapElements.unshift(el);
  }

  static activatePreviousCurrent() {
    this.focusTrapElements.shift();
  }

  static getCurrent() {
    return this.focusTrapElements[0];
  }
}
