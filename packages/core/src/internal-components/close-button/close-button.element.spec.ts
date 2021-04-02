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
  const placeholderText = 'ohai';

  beforeEach(async () => {
    testElement = await createTestElement(html`
      <form>
        <cds-internal-close-button>${placeholderText}</cds-internal-close-button>
      </form>
    `);

    // We have to use HTMLElement as the type here because typescript doesn't like that we are making the ariaDisabled property protected
    component = testElement.querySelector<CdsInternalCloseButton>('cds-internal-close-button');
    await componentIsStable(component);
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should create the component but not project content into the slot', () => {
    expect(component.innerText).not.toBe(placeholderText);
  });

  it('should default to icon size of 18', () => {
    const myIcon = component.shadowRoot.querySelector<HTMLElement>('cds-icon');
    expect(component.iconSize).toBe('18', 'default set');
    expect(myIcon.getAttribute('size')).toBe('18', 'size set');
  });

  it('should allow me to change icon size', async () => {
    const myIcon = component.shadowRoot.querySelector<HTMLElement>('cds-icon');
    component.iconSize = '49';
    await componentIsStable(component);
    expect(myIcon.getAttribute('size')).toBe('49', 'size set');
  });

  it('should default to iconShape of "times"', () => {
    const myIcon = component.shadowRoot.querySelector<HTMLElement>('cds-icon');
    expect(component.iconShape).toBe('times', 'default set');
    expect(myIcon.getAttribute('shape')).toBe('times', 'shape set');
  });

  it('should allow me to change icon shape', async () => {
    const myIcon = component.shadowRoot.querySelector<HTMLElement>('cds-icon');
    component.iconShape = 'jabberwocky';
    await componentIsStable(component);
    expect(myIcon.getAttribute('shape')).toBe('jabberwocky', 'shape set');
  });

  it('should load the times icon into the icons registry', () => {
    expect(ClarityIcons.registry.times).toBeDefined();
  });
});
