/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { html } from 'lit';
import { CdsButtonSort } from '@cds/core/button-sort';
import { componentIsStable, createTestElement, onceEvent, removeTestElement } from '@cds/core/test';
import '@cds/core/button-sort/register.js';

describe('cds-button-sort', () => {
  let testElement: HTMLElement;
  let component: CdsButtonSort;

  beforeEach(async () => {
    testElement = await createTestElement(html`<cds-button-sort></cds-button-sort>`);
    component = testElement.querySelector<CdsButtonSort>('cds-button-sort');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should create the component', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
  });

  it('should provide a default aria label if none provided', async () => {
    await componentIsStable(component);
    expect(component.ariaLabel).toBe('Sort');
  });

  it('should use custom aria label if provided', async () => {
    component.ariaLabel = 'custom sort';
    await componentIsStable(component);
    expect(component.ariaLabel).toBe('custom sort');
  });

  it('should emit descending after accesnding', async () => {
    component.sort = 'ascending';
    const eventPromise = onceEvent(component, 'sortChange');

    component.click();
    await componentIsStable(component);

    const event = await eventPromise;
    expect(event.detail).toBe('descending');
  });

  it('should emit none after descending', async () => {
    component.sort = 'descending';
    const eventPromise = onceEvent(component, 'sortChange');

    component.click();
    await componentIsStable(component);

    const event = await eventPromise;
    expect(event.detail).toBe('none');
  });

  it('should emit ascending after none', async () => {
    component.sort = 'none';
    const eventPromise = onceEvent(component, 'sortChange');

    component.click();
    await componentIsStable(component);

    const event = await eventPromise;
    expect(event.detail).toBe('ascending');
  });
});
