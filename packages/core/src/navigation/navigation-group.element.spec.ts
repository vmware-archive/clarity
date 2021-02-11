/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { createTestElement, componentIsStable, removeTestElement } from '@cds/core/test';
import { CdsNavigationGroup, CdsNavigationStart } from '@cds/core/navigation';
import '@cds/core/navigation/register.js';
import Spy = jasmine.Spy;

describe('cds-navigation-group', () => {
  let component: CdsNavigationGroup;
  let element: HTMLElement;
  let click: MouseEvent;

  beforeEach(async () => {
    element = await createTestElement(html`
      <cds-navigation-group>
        <cds-navigation-start id="start">Group nav start</cds-navigation-start>
        <cds-navigation-item>group nav item</cds-navigation-item>
      </cds-navigation-group>
    `);
    component = element.querySelector<CdsNavigationGroup>('cds-navigation-group');
    click = new MouseEvent('click');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should create a navigation group component', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
  });

  it('expands and collapses', async () => {
    await componentIsStable(component);
    const items = component.shadowRoot.querySelector('.navigation-group-items');
    expect(items.getAttribute('aria-expanded')).toBe('false');
    component.expanded = true;
    await componentIsStable(component);
    expect(items.getAttribute('aria-expanded')).toBe('true');
  });

  it('emits the expandedChange event', async () => {
    await componentIsStable(component);
    let count = 0;
    const expandedSpy: Spy = jasmine.createSpy('expandedChange').and.callFake(() => {
      count++;
    });
    component.addEventListener('expandedChange', expandedSpy);
    const startEle = component.querySelector<CdsNavigationStart>('cds-navigation-start');
    startEle.dispatchEvent(click);
    await componentIsStable(component);
    expect(count).toBe(1);
  });

  it('has accessible navigationGroupId', async () => {
    await componentIsStable(component);
    expect(component.navigationGroupId).toBeTruthy();
    const itemWrapper = component.shadowRoot.querySelector('.group-items-wrapper');
    expect(itemWrapper.getAttribute('aria-labelledby')).toBe(component.navigationGroupId);
  });

  it('can be active', async () => {
    await componentIsStable(component);
    component.setAttribute('active', '');
    await componentIsStable(component);
    expect(component.active).toBe(true);
  });

  it('syncs expandedState down to children items', async () => {
    await componentIsStable(component);
    const startEle = component.querySelector<CdsNavigationStart>('cds-navigation-start');
    expect(startEle.navigationGroupId).toBe(component.navigationGroupId);
    expect(startEle.isGroupStart).toBe(true);
    expect(startEle.expanded).toBe(component.expanded);
    component.setAttribute('expanded', '');
    await componentIsStable(component);
    expect(startEle.expanded).toBe(component.expanded);
  });
});
