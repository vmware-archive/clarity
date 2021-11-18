/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { createTestElement, removeTestElement, componentIsStable } from '@cds/core/test';
import { registerElementSafely } from '../utils/registration.js';
import { CdsBaseFocusTrap } from './focus-trap.base.js';
import '@cds/core/button/register.js';

// register the element just for testing purposes
registerElementSafely('cds-base-focus-trap', CdsBaseFocusTrap);

declare global {
  interface HTMLElementTagNameMap {
    'cds-base-focus-trap': CdsBaseFocusTrap;
  }
}

describe('focus trap element', () => {
  describe('basic', () => {
    let testElement: HTMLElement;
    let component: CdsBaseFocusTrap;
    const placeholderText = 'Button Placeholder';

    beforeEach(async () => {
      testElement = await createTestElement(html`
        <cds-base-focus-trap>
          <cds-button>
            <span>${placeholderText}</span>
          </cds-button>
        </cds-base-focus-trap>
      `);

      component = testElement.querySelector<CdsBaseFocusTrap>('cds-base-focus-trap');
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('should create the component', async () => {
      await componentIsStable(component);
      expect(component.innerText).toBe(placeholderText.toUpperCase());
      expect(component.closableController).toBeDefined('should have closable controller');
      expect(component.firstFocusController).toBeDefined('should have a first focus controller');
    });

    it('should enable focus trap', async () => {
      await componentIsStable(component);
      expect((component as any).hasAttribute('cds-focus-trap')).toBe(true, 'has focus trap');
      expect((component as any).shadowRoot.querySelectorAll('[cds-focus-boundary]').length).toBe(
        2,
        'has boundary bumpers'
      );
    });
  });
});
