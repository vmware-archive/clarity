/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import '@cds/core/internal-components/popup/register.js';
import { CdsInternalPointer } from './pointer.element.js';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';

describe('Pointer: ', () => {
  let testElement: HTMLElement;
  let component: CdsInternalPointer;
  const placeholderText = 'Placeholder';

  beforeEach(async () => {
    testElement = await createTestElement(html`<cds-internal-pointer>${placeholderText}</cds-internal-pointer>`);
    component = testElement.querySelector<CdsInternalPointer>('cds-internal-pointer');
    await componentIsStable(component);
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('slots content if the type attribute/property is not defined', () => {
    expect(component.shadowRoot.innerHTML.includes('<slot')).toBe(true);
  });

  it('does not slot content if the type attribute/property is defined', async () => {
    component.type = 'angle';
    await componentIsStable(component);
    expect(component.shadowRoot.innerHTML.includes('<slot')).toBe(false);
    expect(component.shadowRoot.innerHTML.includes('<svg')).toBe(true);
  });
});
