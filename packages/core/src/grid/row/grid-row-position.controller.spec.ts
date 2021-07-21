/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement } from 'lit';
import { createTestElement, removeTestElement, componentIsStable } from '@cds/core/test';
import { customElement, property } from '@cds/core/internal';
import { GridRowPositionController } from './grid-row-position.controller.js';

@customElement('grid-row-position-test-element')
class GridRowPositionTestElement extends LitElement {
  @property({ type: String }) position: '' | 'fixed' | 'sticky';

  protected gridRowPositionController = new GridRowPositionController(this);
}

describe('grid-row-position.controller', () => {
  let component: GridRowPositionTestElement;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(html`<grid-row-position-test-element></grid-row-position-test-element>`);
    component = element.querySelector<GridRowPositionTestElement>('grid-row-position-test-element');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should default to no offset', async () => {
    await componentIsStable(component);
    expect(element.style.getPropertyValue('--scroll-padding-top')).toBe('');
  });

  it('should set a offset scroll height if fixed position', async () => {
    component.position = 'fixed';
    await componentIsStable(component);
    expect(element.style.getPropertyValue('--scroll-padding-top')).toBe('calc(var(--row-height) * 2)');
  });

  it('should set a offset scroll height if sticky position', async () => {
    component.position = 'sticky';
    await componentIsStable(component);
    expect(element.style.getPropertyValue('--scroll-padding-top')).toBe('calc(var(--row-height) * 2)');
  });
});
