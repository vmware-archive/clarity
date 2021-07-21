/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { html } from 'lit';
import { CdsButtonExpand } from '@cds/core/button-expand';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';
import '@cds/core/button-expand/register.js';

describe('cds-button-expand', () => {
  let testElement: HTMLElement;
  let component: CdsButtonExpand;

  beforeEach(async () => {
    testElement = await createTestElement(html`<cds-button-expand aria-label="expand row"></cds-button-expand>`);
    component = testElement.querySelector<CdsButtonExpand>('cds-button-expand');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should create the component', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
  });

  it('should set default angle icon', async () => {
    await componentIsStable(component);
    expect(component.shadowRoot.querySelector('cds-icon').shape).toBe('angle');
  });

  it('should allow a custom icon projected', async () => {
    const element = await createTestElement(
      html`<cds-button-expand aria-label="custom icon"><cds-icon id="custom-icon"></cds-icon></cds-button-expand>`
    );
    const component = element.querySelector<CdsButtonExpand>('cds-button-expand');
    await componentIsStable(component);
    expect(element.querySelector('cds-icon').id).toBe('custom-icon');
  });

  it('should set leave provided label', async () => {
    await componentIsStable(component);
    expect(component.ariaLabel).toBe('expand row');
  });

  it('should set the proper direction for expanding on the horizontal axis', async () => {
    component.action = 'horizontal';
    await componentIsStable(component);
    expect(component.shadowRoot.querySelector('cds-icon').direction).toBe('right');

    component.expanded = true;
    await componentIsStable(component);
    expect(component.shadowRoot.querySelector('cds-icon').direction).toBe('left');
  });

  it('should set the proper direction for expanding on the vertical axis', async () => {
    component.action = 'vertical';
    await componentIsStable(component);
    expect(component.shadowRoot.querySelector('cds-icon').direction).toBe('right');

    component.expanded = true;
    await componentIsStable(component);
    expect(component.shadowRoot.querySelector('cds-icon').direction).toBe('down');
  });
});
