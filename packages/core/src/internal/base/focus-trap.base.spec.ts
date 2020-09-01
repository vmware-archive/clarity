/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { createTestElement, removeTestElement, waitForComponent, componentIsStable } from '@clr/core/test/utils';
import { registerElementSafely } from '../utils/register.js';
import { CdsBaseFocusTrap } from './focus-trap.base.js';

// register the element just for testing purposes
registerElementSafely('cds-base-focus-trap', CdsBaseFocusTrap);

declare global {
  interface HTMLElementTagNameMap {
    'cds-base-focus-trap': CdsBaseFocusTrap;
  }
}

describe('modal element', () => {
  describe('basic', () => {
    let testElement: HTMLElement;
    let component: CdsBaseFocusTrap;
    const placeholderText = 'Button Placeholder';

    beforeEach(async () => {
      testElement = createTestElement();
      testElement.innerHTML = `
              <cds-base-focus-trap>
                  <cds-button>
                      <span>${placeholderText}</span>
                  </cds-button>
              </cds-base-focus-trap>
          `;

      await waitForComponent('cds-base-focus-trap');
      component = testElement.querySelector<CdsBaseFocusTrap>('cds-base-focus-trap');
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('should create the component', async () => {
      await componentIsStable(component);
      expect(component.innerText).toBe(placeholderText.toUpperCase());
    });

    it('should enable focus trap', async () => {
      await componentIsStable(component);
      expect((component as any).focusTrap).toBeDefined();
    });

    it('should remove the focus trap if hidden attr is set', async () => {
      await componentIsStable(component);
      expect(document.querySelector('.offscreen-focus-rebounder')).toBeTruthy();

      component.setAttribute('hidden', '');
      await componentIsStable(component);
      expect(document.querySelector('.offscreen-focus-rebounder')).toBeFalsy();
    });
  });

  describe('initialized hidden modal', () => {
    let testElement: HTMLElement;
    let component: CdsBaseFocusTrap;

    beforeEach(async () => {
      testElement = createTestElement();
      testElement.innerHTML = `<cds-base-focus-trap hidden></cds-base-focus-trap>`;
      await waitForComponent('cds-base-focus-trap');
      component = testElement.querySelector<CdsBaseFocusTrap>('cds-base-focus-trap');
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('should remove the focus trap if initialized with hidden attr', async () => {
      await componentIsStable(component);
      expect(document.querySelector('.offscreen-focus-rebounder')).toBe(null);
    });
  });

  describe('demo mode', () => {
    let testElement: HTMLElement;
    let component: CdsBaseFocusTrap;
    const placeholderText = 'Button Placeholder';

    beforeEach(async () => {
      testElement = createTestElement();
      testElement.innerHTML = `
        <cds-base-focus-trap __demo-mode>
            <cds-button>
                <span>${placeholderText}</span>
            </cds-button>
        </cds-base-focus-trap>
      `;

      await waitForComponent('cds-base-focus-trap');
      component = testElement.querySelector<CdsBaseFocusTrap>('cds-base-focus-trap');
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('should not create focus trap if demo mode', async () => {
      await componentIsStable(component);
      expect(document.querySelector('.offscreen-focus-rebounder')).toBe(null);
    });
  });
});
