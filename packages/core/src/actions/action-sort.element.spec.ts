/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { html } from 'lit';
import '@cds/core/actions/register.js';
import { CdsActionSort } from '@cds/core/actions';
import { componentIsStable, createTestElement, onceEvent, removeTestElement } from '@cds/core/test';

describe('cds-action-sort', () => {
  let testElement: HTMLElement;
  let component: CdsActionSort;

  beforeEach(async () => {
    testElement = await createTestElement(html`<cds-action-sort></cds-action-sort>`);
    component = testElement.querySelector<CdsActionSort>('cds-action-sort');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should create the component', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
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
