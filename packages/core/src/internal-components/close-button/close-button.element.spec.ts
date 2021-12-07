/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { CdsInternalCloseButton } from './close-button.element.js';
import '@cds/core/internal-components/close-button/register.js';
import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';

describe('internal close button element', () => {
  let testElement: HTMLElement;
  let component: CdsInternalCloseButton;

  beforeEach(async () => {
    testElement = await createTestElement(html`
      <form>
        <cds-internal-close-button></cds-internal-close-button>
      </form>
    `);

    // We have to use HTMLElement as the type here because typescript doesn't like that we are making the ariaDisabled property protected
    component = testElement.querySelector<CdsInternalCloseButton>('cds-internal-close-button');
    await componentIsStable(component);
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should default to iconShape of "close"', () => {
    const myIcon = component.shadowRoot.querySelector<HTMLElement>('cds-icon');
    expect(component.shape).toBe('close', 'default set');
    expect(myIcon.getAttribute('shape')).toBe('close', 'shape set');
  });

  it('should load the times icon into the icons registry', () => {
    expect(ClarityIcons.registry.times).toBeDefined();
  });
});
