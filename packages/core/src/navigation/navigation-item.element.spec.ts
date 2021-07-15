/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { createTestElement, removeTestElement, componentIsStable } from '@cds/core/test';
import { CdsNavigationGroup, CdsNavigationItem } from '@cds/core/navigation';
import '@cds/core/navigation/register.js';

describe('cds-navigation-item', () => {
  let component: CdsNavigationItem;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(
      html`<cds-navigation-item><a id="anchor">Navigation item</a></cds-navigation-item>`
    );
    component = element.querySelector<CdsNavigationItem>('cds-navigation-item');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should create a navigation item component', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
  });

  it('wraps text inside a span element', async () => {
    await componentIsStable(component);
    const wrappedText = component.querySelector('[cds-navigation-sr-text]');

    expect(wrappedText.textContent.trim()).toEqual('Navigation item');
  });

  it('manages screen reader text', async () => {
    await componentIsStable(component);
    const wrappedSpan = component.querySelector('[cds-navigation-sr-text]');
    expect(wrappedSpan.getAttribute('cds-layout')).toBe('display:screen-reader-only');
    component.expanded = true;
    await componentIsStable(component);
    expect(wrappedSpan.getAttribute('cds-layout')).toBeFalsy();
  });

  it('has a id attribute', async () => {
    await componentIsStable(component);
    expect(component.getAttribute('id')).toBeTruthy();
  });

  it('sets the correct focusElement', async () => {
    const anchor: HTMLAnchorElement = component.querySelector('#anchor');
    expect(component.focusElement).toBe(anchor);
  });

  it('can be focused', async () => {
    await componentIsStable(component);
    expect(component.getAttribute('_has-focus')).toBeFalsy();
    component.hasFocus = true;
    await componentIsStable(component);
    expect(component.getAttribute('_has-focus')).toBe('');
  });

  it('can be disabled', async () => {
    await componentIsStable(component);
    expect(component.getAttribute('disabled')).toBeNull();
    component.disabled = true;
    await componentIsStable(component);
    expect(component.getAttribute('disabled')).toBe('');
  });

  describe('when inside a cds-navigation-group', () => {
    let group: CdsNavigationGroup;
    let item: CdsNavigationItem;
    let element: HTMLElement;

    beforeEach(async () => {
      element = await createTestElement(html`
        <cds-navigation-group>
          <cds-navigation-start></cds-navigation-start>
          <cds-navigation-item>Navigation item</cds-navigation-item>
        </cds-navigation-group>
      `);
      group = element.querySelector<CdsNavigationGroup>('cds-navigation-group');
      item = element.querySelector<CdsNavigationItem>('cds-navigation-item');
    });

    afterEach(() => {
      removeTestElement(element);
    });

    it('reflects the expandedGroup property', async () => {
      await componentIsStable(group);
      expect(item.getAttribute('_expanded-group')).toBeNull();
      group.setAttribute('expanded', '');
      await componentIsStable(group);
      expect(item.getAttribute('_expanded-group')).toBe('');
    });
  });
});
