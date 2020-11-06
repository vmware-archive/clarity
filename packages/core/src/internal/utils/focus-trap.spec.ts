/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-element';
import { createTestElement, removeTestElement } from '@cds/core/test/utils';
import { registerElementSafely } from '@cds/core/internal';
import {
  addReboundElementsToFocusTrapElement,
  castHtmlElementToFocusTrapElement,
  createFocusTrapReboundElement,
  elementIsOutsideFocusTrapElement,
  FocusTrap,
  FocusTrapElement,
  refocusIfOutsideFocusTrapElement,
  removeReboundElementsFromFocusTrapElement,
} from './focus-trap.js';
import { CdsBaseFocusTrap } from '../base/focus-trap.base.js';
import {
  CDS_FOCUS_TRAP_DOCUMENT_ATTR,
  CDS_FOCUS_TRAP_ID_ATTR,
  FocusTrapTracker,
} from '../services/focus-trap-tracker.service.js';

declare global {
  interface HTMLElementTagNameMap {
    'test-focus-trap': CdsBaseFocusTrap;
  }
}

class TestFocusTrap extends CdsBaseFocusTrap {}
registerElementSafely('test-focus-trap', TestFocusTrap);

describe('Focus Trap Utilities: ', () => {
  let focusedElement: HTMLElement;
  let noFocusElement: HTMLElement;
  let testElement: HTMLElement;
  let focusTrapElement: FocusTrapElement;

  beforeEach(async () => {
    testElement = await createTestElement(
      html`<button class="outside-focus">nope</button
        ><test-focus-trap><button class="inside-focus">test focus</button></test-focus-trap>`
    );
    focusTrapElement = testElement.querySelector('test-focus-trap');
    focusedElement = testElement.querySelector('.inside-focus');
    noFocusElement = testElement.querySelector('.outside-focus');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  describe('Functional Helper: ', () => {
    afterEach(() => {
      removeReboundElementsFromFocusTrapElement(focusTrapElement);
    });

    describe('addReboundElementsToFocusTrapElement()', () => {
      it('adds rebound elements correctly when there are no siblings', () => {
        addReboundElementsToFocusTrapElement(focusTrapElement);
        const reboundElements = testElement.querySelectorAll('.offscreen-focus-rebounder');
        expect(reboundElements.length).toBe(2);
        expect(reboundElements[0].nextSibling).toEqual(focusTrapElement);
        expect(focusTrapElement.nextSibling).toEqual(reboundElements[1]);
      });

      it('does not double-add rebound elements if called twice by accident', () => {
        addReboundElementsToFocusTrapElement(focusTrapElement);
        addReboundElementsToFocusTrapElement(focusTrapElement);
        const reboundElements = testElement.querySelectorAll('.offscreen-focus-rebounder');
        expect(reboundElements.length).toBe(2);
      });

      it('adds rebound elements correctly when there are siblings ', () => {
        // this creates a sibling element to focusTrapElement
        const siblingEl = document.createElement('div');
        focusTrapElement.parentElement.appendChild(siblingEl);

        addReboundElementsToFocusTrapElement(focusTrapElement);

        const reboundElements = document.querySelectorAll('.offscreen-focus-rebounder');
        expect(reboundElements.length).toBe(2);

        expect(reboundElements[0].nextSibling).toEqual(focusTrapElement);
        expect(focusTrapElement.nextSibling).toEqual(reboundElements[1]);
      });
    });

    describe('removeReboundElementsFromFocusTrapElement()', () => {
      it('removes rebound elements correctly', () => {
        addReboundElementsToFocusTrapElement(focusTrapElement);
        removeReboundElementsFromFocusTrapElement(focusTrapElement);
        expect(document.querySelectorAll('.offscreen-focus-rebounder').length).toBe(0);
      });

      it('does not blow up if no rebound elements', () => {
        removeReboundElementsFromFocusTrapElement(focusTrapElement);
        expect(removeReboundElementsFromFocusTrapElement).not.toThrow();
        expect(document.querySelectorAll('.offscreen-focus-rebounder').length).toBe(0);
      });
    });

    describe('createFocusTrapReboundElement()', () => {
      let testElement: HTMLElement;

      beforeEach(() => {
        testElement = createFocusTrapReboundElement();
      });

      afterEach(() => {
        removeTestElement(testElement);
      });

      it('creates a focusable offscreen element', () => {
        expect(testElement.getAttribute('tabindex')).toBe('0');
        expect(testElement.classList).toContain('offscreen-focus-rebounder');
      });
    });

    describe('refocusIfOutsideFocusTrapElement()', () => {
      it('calls focus() if in current focus trap element', async () => {
        spyOn(focusedElement, 'focus');
        FocusTrapTracker.setCurrent(focusTrapElement.focusTrapId);
        refocusIfOutsideFocusTrapElement(focusedElement, focusTrapElement);
        expect(focusedElement.focus).toHaveBeenCalled();
      });

      it('redirects focus() if focused element not in current focus trap element', async () => {
        spyOn(noFocusElement, 'focus');
        refocusIfOutsideFocusTrapElement(noFocusElement, focusTrapElement);
        expect(noFocusElement.focus).not.toHaveBeenCalled();
      });

      it('redirects focus() if it tries to focus a rebounder', async () => {
        const topReboundElement = focusTrapElement.topReboundElement;
        const bottomReboundElement = focusTrapElement.bottomReboundElement;
        spyOn(topReboundElement, 'focus');
        spyOn(bottomReboundElement, 'focus');
        refocusIfOutsideFocusTrapElement(topReboundElement, focusTrapElement);
        expect(topReboundElement.focus).not.toHaveBeenCalled();
        refocusIfOutsideFocusTrapElement(bottomReboundElement, focusTrapElement);
        expect(bottomReboundElement.focus).not.toHaveBeenCalled();
      });
    });

    describe('elementIsOutsideFocusTrapElement()', () => {
      let focusedElement: HTMLElement;
      let focusTrapElement: FocusTrapElement;

      beforeEach(async () => {
        focusTrapElement = (await createTestElement()) as FocusTrapElement;
      });

      afterEach(() => {
        removeTestElement(focusTrapElement);
        if (focusedElement) {
          focusedElement.remove();
        }
      });

      it('returns true if element is outside focus trap element', async () => {
        focusedElement = await createTestElement();
        expect(elementIsOutsideFocusTrapElement(focusedElement, focusTrapElement)).toBeTruthy();
      });

      it('returns true if focused element is top rebound element', async () => {
        const focusedElement = await createTestElement();
        focusTrapElement.topReboundElement = focusedElement;
        expect(elementIsOutsideFocusTrapElement(focusedElement, focusTrapElement)).toBeTruthy();
      });

      it('returns true if focused element is bottom rebound element', async () => {
        const focusedElement = await createTestElement();
        focusTrapElement.bottomReboundElement = focusedElement;
        expect(elementIsOutsideFocusTrapElement(focusedElement, focusTrapElement)).toBeTruthy();
      });

      it('returns false if element is inside focus trap element', () => {
        const focusedElement = document.createElement('div') as HTMLElement;
        focusTrapElement.appendChild(focusedElement);
        expect(elementIsOutsideFocusTrapElement(focusedElement, focusTrapElement)).toBeFalsy();
      });
    });
  });
});

describe('FocusTrap Class: ', () => {
  describe('enableFocusTrap()', () => {
    let focusTrap: FocusTrap;
    let testElement: HTMLElement;

    beforeEach(async () => {
      testElement = await createTestElement();
      focusTrap = new FocusTrap(castHtmlElementToFocusTrapElement(testElement));
      focusTrap.enableFocusTrap();
    });

    afterEach(() => {
      focusTrap.removeFocusTrap();
      removeTestElement(testElement);
    });

    it('set focus trap id and reflect to attribute', () => {
      expect(focusTrap.focusTrapElement.focusTrapId).toBeTruthy('needs to set focus trap id on plain html elements');
      expect(testElement.hasAttribute(CDS_FOCUS_TRAP_ID_ATTR)).toBe(
        true,
        'needs to set focus trap attr on plain html elements'
      );
      expect(testElement.getAttribute(CDS_FOCUS_TRAP_ID_ATTR)).toBe(
        focusTrap.focusTrapElement.focusTrapId,
        'needs to reflect focus trap id values on plain html elements'
      );
    });

    it('should add rebound elements', () => {
      expect(document.querySelectorAll('.offscreen-focus-rebounder').length).toBe(2);
    });

    it('should have a tab index of 0 to be able to focus', () => {
      expect(testElement.getAttribute('tabindex')).toBe('0');
    });

    it('should add to focus trap attr on body to prevent scrolling', () => {
      expect(document.body.getAttribute(CDS_FOCUS_TRAP_DOCUMENT_ATTR)).toContain(
        focusTrap.focusTrapElement.focusTrapId
      );
    });

    it('should set itself to current on FocusTrapTracker service', () => {
      expect(FocusTrapTracker.getCurrent()).toEqual(testElement);
    });

    it('should be focused', () => {
      expect(document.activeElement).toEqual(testElement);
    });

    it('should throw an error if enabledFocusTrap is called again', () => {
      const secondCall = () => focusTrap.enableFocusTrap();
      expect(secondCall).toThrow();
    });
  });

  describe('removeFocusTrap()', () => {
    let previousFocusedElement: HTMLElement;
    let focusTrap: FocusTrap;
    let testElement: HTMLElement;

    beforeEach(async () => {
      testElement = await createTestElement();
      focusTrap = new FocusTrap(castHtmlElementToFocusTrapElement(testElement));
      previousFocusedElement = await createTestElement();
      previousFocusedElement.setAttribute('tabindex', '0');
      previousFocusedElement.focus();
      focusTrap.enableFocusTrap();
      focusTrap.removeFocusTrap();
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('should remove rebound elements', () => {
      expect(document.querySelectorAll('.offscreen-focus-rebounder').length).toBe(0);
    });

    it('should remove layout attribute to prevent scrolling on body', () => {
      expect(document.body.getAttribute('cds-layout')).toBeNull();
    });

    it('should be set itself to current on FocusTrapTracker', () => {
      expect(FocusTrapTracker.getCurrent()).not.toEqual(testElement);
    });

    it('should restore previous focus', () => {
      expect(document.activeElement).toEqual(previousFocusedElement);
    });
  });
});

describe('Nested FocusTraps: ', () => {
  let outerFocusTrap: CdsBaseFocusTrap;
  let innerFocusTrap: CdsBaseFocusTrap;
  let testElement: HTMLElement;
  let outerFocusButton: HTMLElement;
  let innerFocusButton: HTMLElement;
  let noFocusButton: HTMLElement;

  beforeEach(async () => {
    testElement = await createTestElement(html`<button class="outside-focus">nope</button>
      <test-focus-trap class="outer-focus-trap">
        <button class="inside-outer-focus">test focus</button>
        <test-focus-trap class="inner-focus-trap">
          <button class="inside-inner-focus">test focus</button>
        </test-focus-trap>
      </test-focus-trap>`);
    outerFocusTrap = testElement.querySelector('.outer-focus-trap');
    innerFocusTrap = testElement.querySelector('.inner-focus-trap');
    outerFocusButton = testElement.querySelector('.inside-outer-focus');
    innerFocusButton = testElement.querySelector('.inside-inner-focus');
    noFocusButton = testElement.querySelector('.outside-focus');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('set multiple focus trap ids', () => {
    expect(
      document.body.getAttribute(CDS_FOCUS_TRAP_DOCUMENT_ATTR).split(' ').indexOf(outerFocusTrap.focusTrapId) === 0
    ).toBe(true, 'sets focus trap ids as expected (1)');
    expect(
      document.body.getAttribute(CDS_FOCUS_TRAP_DOCUMENT_ATTR).split(' ').indexOf(innerFocusTrap.focusTrapId) === 1
    ).toBe(true, 'sets focus trap ids as expected (2)');
  });

  it('keeps focus inside the inner trap', () => {
    noFocusButton.focus();
    let focused = document.activeElement;
    expect(focused).not.toBe(noFocusButton, 'should not focus elements outside of active focus trap (1)');
    expect(focused).toBe(
      innerFocusTrap,
      'should apply focus to focus trap if trying to focus elements outside of active focus trap (1)'
    );
    outerFocusButton.focus();
    focused = document.activeElement;
    expect(focused).not.toBe(outerFocusButton, 'should not focus elements outside of active focus trap (2)');
    expect(focused).toBe(
      innerFocusTrap,
      'should apply focus to focus trap if trying to focus elements outside of active focus trap (2)'
    );
    innerFocusButton.focus();
    focused = document.activeElement;
    expect(focused).toBe(innerFocusButton, 'should allow focus on elements inside of active focus trap (1)');
  });

  it('cancelling inner trap falls back to outer trap', () => {
    innerFocusTrap.focusTrap.removeFocusTrap();
    expect(
      document.body.getAttribute(CDS_FOCUS_TRAP_DOCUMENT_ATTR).split(' ').indexOf(innerFocusTrap.focusTrapId) === -1
    ).toBe(true, 'should remove focus trap from focus trap ids');

    noFocusButton.focus();
    let focused = document.activeElement;
    expect(focused).not.toBe(noFocusButton, 'should not focus elements outside of active focus trap (3)');
    expect(focused).toBe(
      outerFocusTrap,
      'should apply focus to focus trap if trying to focus elements outside of active focus trap (3)'
    );

    outerFocusButton.focus();
    focused = document.activeElement;
    expect(focused).toBe(outerFocusButton, 'should allow focus on elements inside of active focus trap (1)');
  });
});
