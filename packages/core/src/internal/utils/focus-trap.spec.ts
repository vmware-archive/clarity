/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { createTestElement, removeTestElement } from '@clr/core/test/utils';
import {
  addReboundElementsToFocusTrapElement,
  createFocusTrapReboundElement,
  elementIsOutsideFocusTrapElement,
  FocusTrap,
  FocusTrapElement,
  focusElementIfInCurrentFocusTrapElement,
  removeReboundElementsFromFocusTrapElement,
} from './focus-trap.js';
import { FocusTrapTracker } from '../services/focus-trap-tracker.service.js';

describe('Focus Trap Utilities: ', () => {
  describe('Functional Helper: ', () => {
    describe('addReboundElementsToFocusTrapElement()', () => {
      let focusTrapElement: FocusTrapElement;

      beforeEach(() => {
        focusTrapElement = createTestElement() as FocusTrapElement;
      });

      afterEach(() => {
        removeTestElement(focusTrapElement);
      });

      it('adds rebound elements correctly when there are no siblings', () => {
        addReboundElementsToFocusTrapElement(focusTrapElement);

        const reboundElements = document.querySelectorAll('.offscreen-focus-rebounder');
        expect(reboundElements.length).toBe(2);

        expect(reboundElements[0].nextSibling).toEqual(focusTrapElement);
        expect(focusTrapElement.nextSibling).toEqual(reboundElements[1]);

        removeReboundElementsFromFocusTrapElement(focusTrapElement);
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

        removeReboundElementsFromFocusTrapElement(focusTrapElement);
      });
    });

    describe('removeReboundElementsFromFocusTrapElement()', () => {
      let focusTrapElement: FocusTrapElement;

      beforeEach(() => {
        focusTrapElement = createTestElement() as FocusTrapElement;
      });

      afterEach(() => {
        removeTestElement(focusTrapElement);
      });

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

    describe('focusElementIfInCurrentFocusTrapElement()', () => {
      let focusedElement: HTMLElement;
      let focusTrapElement: FocusTrapElement;

      beforeEach(() => {
        focusTrapElement = createTestElement() as FocusTrapElement;
      });

      afterEach(() => {
        removeTestElement(focusTrapElement);
        removeTestElement(focusedElement);
      });

      it('calls focus() if in current focus trap element', () => {
        spyOn(focusTrapElement, 'focus');

        focusedElement = createTestElement();
        FocusTrapTracker.setCurrent(focusTrapElement);

        focusElementIfInCurrentFocusTrapElement(focusedElement, focusTrapElement);
        expect(focusTrapElement.focus).toHaveBeenCalled();
      });

      it('does not call focus() if not in current focus trap element', () => {
        spyOn(focusTrapElement, 'focus');

        focusedElement = createTestElement();

        focusElementIfInCurrentFocusTrapElement(focusedElement, focusTrapElement);
        expect(focusTrapElement.focus).not.toHaveBeenCalled();
      });
    });

    describe('elementIsOutsideFocusTrapElement()', () => {
      let focusedElement: HTMLElement;
      let focusTrapElement: FocusTrapElement;

      beforeEach(() => {
        focusTrapElement = createTestElement() as FocusTrapElement;
      });

      afterEach(() => {
        removeTestElement(focusTrapElement);
        if (focusedElement) {
          focusedElement.remove();
        }
      });

      it('returns true if element is outside focus trap element', () => {
        focusedElement = createTestElement();
        expect(elementIsOutsideFocusTrapElement(focusedElement, focusTrapElement)).toBeTruthy();
      });

      it('returns true if focused element is top rebound element', () => {
        const focusedElement = createTestElement();
        focusTrapElement.topReboundElement = focusedElement;
        expect(elementIsOutsideFocusTrapElement(focusedElement, focusTrapElement)).toBeTruthy();
      });

      it('returns true if focused element is bottom rebound element', () => {
        const focusedElement = createTestElement();
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

  describe('FocusTrap Class: ', () => {
    let focusTrap: FocusTrap;
    let testElement: HTMLElement;

    describe('enableFocusTrap()', () => {
      beforeEach(() => {
        testElement = createTestElement();
        focusTrap = new FocusTrap(testElement);
        focusTrap.enableFocusTrap();
      });

      afterEach(() => {
        focusTrap.removeFocusTrap();
        removeTestElement(testElement);
      });

      it('should add rebound elements', () => {
        expect(document.querySelectorAll('.offscreen-focus-rebounder').length).toBe(2);
      });

      it('should have a tab index of 0 to be able to focus', () => {
        expect(testElement.getAttribute('tabindex')).toBe('0');
      });

      it('should add layout attribute to prevent scrolling on body', () => {
        expect(document.body.getAttribute('cds-layout')).toContain('no-scrolling');
      });

      it('should be set itself to current on FocusTrapTracker', () => {
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

      beforeEach(() => {
        testElement = createTestElement();
        previousFocusedElement = createTestElement();
        previousFocusedElement.setAttribute('tabindex', '0');
        previousFocusedElement.focus();
        focusTrap = new FocusTrap(testElement);
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
});
