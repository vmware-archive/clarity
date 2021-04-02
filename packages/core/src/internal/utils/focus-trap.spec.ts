/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement } from 'lit';
import { createTestElement, removeTestElement } from '@cds/core/test';
import { createId, customElement, property, sleep, state } from '@cds/core/internal';
import {
  addReboundElementsToFocusTrapElement,
  castHtmlElementToFocusTrapElement,
  createFocusTrapReboundElement,
  elementIsOutsideFocusTrapElement,
  FocusTrap,
  refocusIfOutsideFocusTrapElement,
  removeReboundElementsFromFocusTrapElement,
} from './focus-trap.js';
import { CDS_FOCUS_TRAP_DOCUMENT_ATTR, FocusTrapTrackerService } from '../services/focus-trap-tracker.service.js';

@customElement('test-deprecated-focus-trap')
class DeprecatedFocusTrap extends LitElement {
  focusTrap: FocusTrap;

  topReboundElement: HTMLElement;
  bottomReboundElement: HTMLElement;

  /**
   * Its recommended to remove or add a focus trap element from the DOM
   * some SSR systems can have technical constraints where the item can
   * only be removed via CSS/hidden.
   */
  @property({ type: Boolean }) hidden = false;

  @state({ type: Boolean, reflect: true })
  protected demoMode = false;

  @property({ type: String }) focusTrapId: string;

  constructor() {
    super();
    this.focusTrapId = createId();
    // if we see issues instantiating here, we should consider moving to
    // firstUpdated()
    this.focusTrap = new FocusTrap(this);
  }

  connectedCallback() {
    super.connectedCallback();
    this.toggleFocusTrap();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.focusTrap.removeFocusTrap();
  }

  attributeChangedCallback(name: string, old: string, value: string) {
    super.attributeChangedCallback(name, old, value);

    if (name === 'hidden' && old !== value) {
      this.toggleFocusTrap();
    }
  }

  protected render() {
    return html`<slot></slot>`;
  }

  private toggleFocusTrap() {
    if (!this.demoMode && !this.hasAttribute('hidden')) {
      this.focusTrap.enableFocusTrap();
    } else {
      this.focusTrap.removeFocusTrap();
    }
  }
}

@customElement('test-focus-trap')
class TestFocusTrap extends DeprecatedFocusTrap {
  render() {
    return html`<button class="shadow-button">my shadow button</button><slot></slot>`;
  }
}

describe('Focus Trap Utilities: ', () => {
  let focusedElement: HTMLElement;
  let noFocusElement: HTMLElement;
  let testElement: HTMLElement;
  let focusTrapElement: TestFocusTrap;

  beforeEach(async () => {
    testElement = await createTestElement(
      html`<button class="outside-focus">nope</button
        ><test-focus-trap><button class="inside-focus">test focus</button></test-focus-trap>`
    );
    focusTrapElement = testElement.querySelector<TestFocusTrap>('test-focus-trap');
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
        FocusTrapTrackerService.setCurrent(focusTrapElement);
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
      let focusTrapElement: TestFocusTrap;

      beforeEach(async () => {
        focusTrapElement = (await createTestElement()) as TestFocusTrap;
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

      it('returns false if element is inside focus trap element shadow dom', async () => {
        const specialTestElement = await createTestElement(
          html`<test-focus-trap><button class="inside-focus">test focus</button></test-focus-trap>`
        );
        const fte = testElement.querySelector<TestFocusTrap>('test-focus-trap');
        const elToFocus = fte.shadowRoot.querySelector('.shadow-button');
        expect(elementIsOutsideFocusTrapElement(elToFocus as HTMLElement, fte)).toBeFalsy();
        removeTestElement(specialTestElement);
      });
    });
  });
});

describe('FocusTrap Class: ', () => {
  describe('enableFocusTrap()', () => {
    let focusTrap: FocusTrap;
    let testElement: HTMLElement;

    function setUpFocusTrap(element: HTMLElement): FocusTrap {
      const ft = new FocusTrap(castHtmlElementToFocusTrapElement(element));
      ft.enableFocusTrap();
      return ft;
    }

    beforeEach(async () => {
      testElement = await createTestElement();
    });

    afterEach(() => {
      focusTrap.removeFocusTrap();
      removeTestElement(testElement);
    });

    it('set focus trap id', () => {
      focusTrap = setUpFocusTrap(testElement);
      expect(focusTrap.focusTrapElement.focusTrapId).toBeTruthy('needs to set focus trap id on plain html elements');
    });

    it('should add rebound elements', () => {
      focusTrap = setUpFocusTrap(testElement);
      expect(document.querySelectorAll('.offscreen-focus-rebounder').length).toBe(2);
    });

    it('should have a tabindex of -1 to be able to programatically focus', () => {
      focusTrap = setUpFocusTrap(testElement);
      expect(testElement.getAttribute('tabindex')).toBe('-1');
    });

    it('should not override tabindex if focus trap element already has a tabindex set', () => {
      testElement.setAttribute('tabindex', '1');
      focusTrap = setUpFocusTrap(testElement);
      expect(testElement.getAttribute('tabindex')).toBe('1');
      expect(testElement.getAttribute('tabindex')).not.toBe('-1');
    });

    it('should add to focus trap attr on root element (html) to prevent scrolling', () => {
      focusTrap = setUpFocusTrap(testElement);
      expect(document.documentElement.getAttribute(CDS_FOCUS_TRAP_DOCUMENT_ATTR)).toBe('');
    });

    it('should set itself to current on FocusTrapTracker service', () => {
      focusTrap = setUpFocusTrap(testElement);
      expect(FocusTrapTrackerService.getCurrent()).toEqual(testElement as any);
    });

    it('should be focused', async () => {
      focusTrap = setUpFocusTrap(testElement);
      // focus is not immediately set due to safari issue
      await sleep(23);
      expect(document.activeElement).toEqual(testElement, 'focus is set asynchronously after creation');
    });

    it('should be set to active', () => {
      focusTrap = setUpFocusTrap(testElement);
      expect(focusTrap.active).toBe(true);
    });

    it('should throw an error if enabledFocusTrap is called again', () => {
      focusTrap = setUpFocusTrap(testElement);
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
      focusTrap = new FocusTrap(testElement as any);
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

    it('should not be set as current on FocusTrapTracker', () => {
      expect(FocusTrapTrackerService.getCurrent()).not.toEqual(testElement as any);
    });

    it('should not be set to active', () => {
      expect(focusTrap.active).toBe(false);
    });

    it('should restore previous focus', () => {
      expect(document.activeElement).toEqual(previousFocusedElement);
    });
  });
});

describe('Nested FocusTraps: ', () => {
  let outerFocusTrap: TestFocusTrap;
  let innerFocusTrap: TestFocusTrap;
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
      FocusTrapTrackerService.getTrapElements()
        .map(e => e.focusTrapId)
        .indexOf(outerFocusTrap.focusTrapId) === 0
    ).toBe(true, 'sets focus trap ids as expected (1)');
    expect(
      FocusTrapTrackerService.getTrapElements()
        .map(e => e.focusTrapId)
        .indexOf(innerFocusTrap.focusTrapId) === 1
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
    expect(FocusTrapTrackerService.getTrapElements().findIndex(e => e.focusTrapId === innerFocusTrap.focusTrapId)).toBe(
      -1,
      'should remove focus trap from focus trap ids'
    );

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
