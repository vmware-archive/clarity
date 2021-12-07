/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { html } from 'lit';
import { CdsButtonAction } from '@cds/core/button-action';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';
import { LogService } from '@cds/core/internal';
import '@cds/core/button-action/register.js';

describe('cds-button-action', () => {
  let testElement: HTMLElement;
  let component: CdsButtonAction;

  beforeEach(async () => {
    testElement = await createTestElement(html`<cds-button-action></cds-button-action>`);
    component = testElement.querySelector<CdsButtonAction>('cds-button-action');
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

  it('should set the cds-button-action attribute type on host', async () => {
    await componentIsStable(component);
    expect(component.hasAttribute('cds-button-action')).toBe(true);
  });
});
