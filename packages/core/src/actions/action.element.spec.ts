/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { html } from 'lit';
import '@cds/core/actions/register.js';
import { CdsAction } from '@cds/core/actions';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';
import { LogService } from '@cds/core/internal';

describe('cds-action', () => {
  let testElement: HTMLElement;
  let component: CdsAction;

  beforeEach(async () => {
    testElement = await createTestElement(html`<cds-action></cds-action>`);
    component = testElement.querySelector<CdsAction>('cds-action');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should create the component', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
  });

  it('should provide a default action icon', async () => {
    await componentIsStable(component);
    expect(component.shadowRoot.querySelector('cds-icon').shape).toBe('ellipsis-vertical');
  });

  it('should warn when a aria-label is missing and interactive', async () => {
    spyOn(LogService, 'warn');

    component.readonly = true;
    await componentIsStable(component);
    component.readonly = false;
    await componentIsStable(component);
    expect(LogService.warn).toHaveBeenCalled();
  });

  it('should set the cds-action attribute type on host', async () => {
    await componentIsStable(component);
    expect(component.hasAttribute('cds-action')).toBe(true);
  });
});
