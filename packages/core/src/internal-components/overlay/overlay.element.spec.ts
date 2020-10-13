/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { html } from 'lit-html';
import '@cds/core/internal-components/overlay/register.js';
import { CdsInternalOverlay, isNestedOverlay } from '@cds/core/internal-components/overlay';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test/utils';

describe('Overlay helper functions: ', () => {
  describe('isNestedOverlay() - ', () => {
    it('return true if overlay id is present and it is not the first id', () => {
      expect(isNestedOverlay('ohai_3', 'ohai_', ['ohai_1', 'ohai_2', 'ohai_3'])).toBe(true, 'last one checks');
      expect(isNestedOverlay('ohai_2', 'ohai_', ['ohai_1', 'ohai_2', 'ohai_3'])).toBe(true, 'middle one checks');
    });

    it('should ignore non-prefixed ids', () => {
      expect(isNestedOverlay('ohai_2', 'ohai_', ['abcd', 'ohai_1', 'efgh', 'ijkl', 'ohai_2'])).toBe(true);
    });

    it('should return false if id is not present', () => {
      expect(isNestedOverlay('ohai_2', 'ohai_', ['abcd', 'ohai_1', 'efgh', 'ijkl'])).toBe(false);
    });

    it('should return false if id is first in the list', () => {
      expect(isNestedOverlay('ohai_1', 'ohai_', ['ohai_1', 'efgh', 'ijkl', 'ohai_2', 'ohai_3'])).toBe(false);
    });

    it('should return false if list has no overlays', () => {
      expect(isNestedOverlay('ohai_1', 'ohai_', ['abcd', 'efgh', 'ijkl'])).toBe(false);
    });

    it('should return false if list is empty', () => {
      expect(isNestedOverlay('ohai_1', 'ohai_', [])).toBe(false);
    });
  });
});

describe('Overlay element: ', () => {
  let testElement: HTMLElement;
  let component: CdsInternalOverlay;
  const placeholderText = 'Placeholder';

  beforeEach(async () => {
    testElement = await createTestElement(html`<cds-internal-overlay>${placeholderText}</cds-internal-overlay>`);
    component = testElement.querySelector<CdsInternalOverlay>('cds-internal-overlay');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  describe('the basics - ', () => {
    it('should create the component', async () => {
      await componentIsStable(component);
      expect(component.innerText).toBe(placeholderText);
    });

    it('should have its focusTrapId prefixed', async () => {
      await componentIsStable(component);
      expect(component.focusTrapId.indexOf('_overlay-') > -1).toBe(true);
    });

    it('inner panel should default to aria-modal true', async () => {
      await componentIsStable(component);
      const innerPanel = component.shadowRoot.querySelector('.private-host');
      expect(innerPanel).toBeTruthy('inner panel should exist');
      expect(innerPanel.getAttribute('aria-modal')).toBe('true');
    });
  });

  describe('the backdrop - ', () => {
    it('should have a backdrop and backdrop should have aria-hidden true', async () => {
      await componentIsStable(component);
      const backdrop = component.shadowRoot.querySelector('.overlay-backdrop');
      expect(backdrop).not.toBeNull('backdrop exists!');
      expect(backdrop.getAttribute('aria-hidden')).toBe('true', 'backdrop has aria-hidden set');
    });
  });
});

describe('Overlay behaviors: ', () => {
  let testElement: HTMLElement;
  let component: CdsInternalOverlay;
  const placeholderText = 'Placeholder';

  beforeEach(async () => {
    testElement = await createTestElement(html`<cds-internal-overlay>${placeholderText}</cds-internal-overlay>`);
    component = testElement.querySelector<CdsInternalOverlay>('cds-internal-overlay');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  describe('closeOverlay() - ', () => {
    it('should default to a value of "custom"', async done => {
      await componentIsStable(component);

      component.addEventListener<any>('closeChange', (e: CustomEvent) => {
        expect(e.detail).toBe('custom');
        done();
      });

      await componentIsStable(component);
      component.closeOverlay();
    });
  });

  describe('escape key - ', () => {
    it('should alert if escape key pressed', async done => {
      let value: any;
      await componentIsStable(component);

      component.addEventListener<any>('closeChange', (e: CustomEvent) => {
        value = e.detail;
        expect(value).toBe('escape-keypress');
        done();
      });

      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));

      await componentIsStable(component);
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Esc' }));
    });
  });

  describe('backdrop click - ', () => {
    it('should alert if the backdrop was clicked', async done => {
      let value: any;
      await componentIsStable(component);
      const backdrop = component.shadowRoot.querySelector('.overlay-backdrop');

      component.addEventListener<any>('closeChange', (e: CustomEvent) => {
        value = e.detail;
        expect(value).toBe('backdrop-click');
        done();
      });

      backdrop.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));

      await componentIsStable(component);

      backdrop.dispatchEvent(new TouchEvent('touchend', { bubbles: true, cancelable: true }));
    });
  });
});

describe('Nested overlays: ', () => {
  let testElement: HTMLElement;
  let firstOverlay: CdsInternalOverlay;
  let secondOverlay: CdsInternalOverlay;
  let thirdOverlay: CdsInternalOverlay;
  const placeholderText = 'Placeholder';

  beforeEach(async () => {
    testElement = await createTestElement(
      html`<cds-internal-overlay id="rootOverlay"
        >${placeholderText}<cds-internal-overlay id="secondOverlay">Ohai</cds-internal-overlay
        ><cds-internal-overlay id="thirdOverlay">Kthxbye</cds-internal-overlay></cds-internal-overlay
      >`
    );
    firstOverlay = testElement.querySelector<CdsInternalOverlay>('#rootOverlay');
    secondOverlay = testElement.querySelector<CdsInternalOverlay>('#secondOverlay');
    thirdOverlay = testElement.querySelector<CdsInternalOverlay>('#thirdOverlay');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  describe('backdrops - ', () => {
    it('non-root overlays should have "layered" classnames on backdrops', async () => {
      await componentIsStable(thirdOverlay);
      const rootBackdrop = firstOverlay.shadowRoot.querySelector('.overlay-backdrop');
      const secondBackdrop = secondOverlay.shadowRoot.querySelector('.overlay-backdrop');
      const thirdBackdrop = thirdOverlay.shadowRoot.querySelector('.overlay-backdrop');
      expect(rootBackdrop.classList.contains('layered')).toBe(false, 'root does NOT have layered classname');
      expect(secondBackdrop.classList.contains('layered')).toBe(true, 'has layered classname (1)');
      expect(thirdBackdrop.classList.contains('layered')).toBe(true, 'has layered classname (2)');
    });

    it('clicks should only apply to topmost overlay', async done => {
      await componentIsStable(thirdOverlay);
      const secondBackdrop = secondOverlay.shadowRoot.querySelector('.overlay-backdrop');
      const thirdBackdrop = thirdOverlay.shadowRoot.querySelector('.overlay-backdrop');

      function backdropClicked(e: CustomEvent) {
        expect(e.detail).toBe('backdrop-click', 'backdrop click trigger identified');
        expect(e.target).toBe(thirdOverlay, 'only the expected overlay is here');
        done();
      }

      thirdOverlay.addEventListener<any>('closeChange', backdropClicked);
      secondOverlay.addEventListener<any>('closeChange', backdropClicked);
      firstOverlay.addEventListener<any>('closeChange', backdropClicked);

      secondBackdrop.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));

      await componentIsStable(secondOverlay);

      thirdBackdrop.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
    });
  });

  describe('overlayIsActive - ', () => {
    it('identifies top-most overlay', async () => {
      await componentIsStable(thirdOverlay);
      expect(firstOverlay.overlayIsActive).toBe(false, 'root is NOT the top-most overlay');
      expect(secondOverlay.overlayIsActive).toBe(false, 'second is NOT the top-most overlay');
      expect(thirdOverlay.overlayIsActive).toBe(true, 'third is the top-most overlay');
    });
  });

  describe('escape key - ', () => {
    it('should only apply to topmost overlay', async done => {
      function escKeyPressed(e: CustomEvent) {
        expect(e.detail).toBe('escape-keypress', 'escape key trigger identified');
        expect(e.target).toBe(thirdOverlay, 'only the expected overlay is here');
        done();
      }

      firstOverlay.addEventListener<any>('closeChange', escKeyPressed);
      secondOverlay.addEventListener<any>('closeChange', escKeyPressed);
      thirdOverlay.addEventListener<any>('closeChange', escKeyPressed);

      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    });
  });

  describe('dismissing - ', () => {
    it('escape key should walk down the layers', async () => {
      function escKeyPressed(e: CustomEvent) {
        (e.target as HTMLElement).setAttribute('hidden', 'true');
      }

      await componentIsStable(thirdOverlay);

      firstOverlay.addEventListener<any>('closeChange', escKeyPressed);
      secondOverlay.addEventListener<any>('closeChange', escKeyPressed);
      thirdOverlay.addEventListener<any>('closeChange', escKeyPressed);

      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));

      await componentIsStable(firstOverlay);
      expect(firstOverlay.getAttribute('hidden')).toBeNull('only top-most overlay is removed (A1)');
      expect(secondOverlay.getAttribute('hidden')).toBeNull('only top-most overlay is removed (A2)');
      expect(thirdOverlay.getAttribute('hidden')).toBe('true', 'only top-most overlay is removed (A3)');
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));

      await componentIsStable(firstOverlay);
      expect(firstOverlay.getAttribute('hidden')).toBeNull('only top-most overlay is removed (B1)');
      expect(secondOverlay.getAttribute('hidden')).toBe('true', 'only top-most overlay is removed (B2)');
      expect(thirdOverlay.getAttribute('hidden')).toBe('true', 'only top-most overlay is removed (B3)');
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));

      await componentIsStable(firstOverlay);
      expect(firstOverlay.getAttribute('hidden')).toBe('true', 'only top-most overlay is removed (C1)');
      expect(secondOverlay.getAttribute('hidden')).toBe('true', 'only top-most overlay is removed (C2)');
      expect(thirdOverlay.getAttribute('hidden')).toBe('true', 'only top-most overlay is removed (C3)');
    });

    it('backdrop click should walk down the layers', async () => {
      await componentIsStable(firstOverlay);
      const rootBackdrop = firstOverlay.shadowRoot.querySelector('.overlay-backdrop');
      const secondBackdrop = secondOverlay.shadowRoot.querySelector('.overlay-backdrop');
      const thirdBackdrop = thirdOverlay.shadowRoot.querySelector('.overlay-backdrop');

      function backdropClick(e: CustomEvent) {
        (e.target as HTMLElement).setAttribute('hidden', 'true');
      }

      firstOverlay.addEventListener<any>('closeChange', backdropClick);
      secondOverlay.addEventListener<any>('closeChange', backdropClick);
      thirdOverlay.addEventListener<any>('closeChange', backdropClick);

      rootBackdrop.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
      await componentIsStable(firstOverlay);
      secondBackdrop.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
      await componentIsStable(secondOverlay);
      thirdBackdrop.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
      await componentIsStable(thirdOverlay);

      expect(firstOverlay.getAttribute('hidden')).toBeNull('only top-most overlay is removed (A1)');
      expect(secondOverlay.getAttribute('hidden')).toBeNull('only top-most overlay is removed (A2)');
      expect(thirdOverlay.getAttribute('hidden')).toBe('true', 'only top-most overlay is removed (A3)');

      rootBackdrop.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
      await componentIsStable(firstOverlay);
      secondBackdrop.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
      await componentIsStable(secondOverlay);
      thirdBackdrop.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
      await componentIsStable(thirdOverlay);

      expect(firstOverlay.getAttribute('hidden')).toBeNull('only top-most overlay is removed (B1)');
      expect(secondOverlay.getAttribute('hidden')).toBe('true', 'only top-most overlay is removed (B2)');
      expect(thirdOverlay.getAttribute('hidden')).toBe('true', 'only top-most overlay is removed (B3)');

      rootBackdrop.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
      await componentIsStable(firstOverlay);
      secondBackdrop.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
      await componentIsStable(secondOverlay);
      thirdBackdrop.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
      await componentIsStable(thirdOverlay);

      expect(firstOverlay.getAttribute('hidden')).toBe('true', 'only top-most overlay is removed (C1)');
      expect(secondOverlay.getAttribute('hidden')).toBe('true', 'only top-most overlay is removed (C2)');
      expect(thirdOverlay.getAttribute('hidden')).toBe('true', 'only top-most overlay is removed (C3)');
    });
  });
});
