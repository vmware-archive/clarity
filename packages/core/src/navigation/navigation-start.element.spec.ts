/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { createTestElement, removeTestElement, componentIsStable } from '@cds/core/test';
import { CdsNavigation, CdsNavigationGroup, CdsNavigationStart } from './index.js';
import '@cds/core/navigation/register.js';

import { CdsIcon } from '@cds/core/icon/icon.element.js';

describe('cds-navigation-start', () => {
  let component: CdsNavigationStart;
  let element: HTMLElement;
  let icon: CdsIcon;

  beforeEach(async () => {
    element = await createTestElement(html`
      <cds-navigation-start>
        Start Element
      </cds-navigation-start>
    `);

    component = element.querySelector<CdsNavigationStart>('cds-navigation-start');
    icon = component.shadowRoot.querySelector('cds-icon');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should create navigation start component', async () => {
    expect(component).toBeTruthy();
  });

  // is group start: true
  it('has an id', async () => {
    await componentIsStable(component);
    expect(component.hasAttribute('id')).toBe(true);
  });

  it('has a focus element', async () => {
    await componentIsStable(component);
    expect(component.focusElement.tagName).toBe('BUTTON');
  });

  it('can be focused', async () => {
    await componentIsStable(component);
    expect(component.getAttribute('_has-focus')).toBeFalsy();
    component.hasFocus = true;
    await componentIsStable(component);
    expect(component.getAttribute('_has-focus')).toBe('');
  });

  it('wraps text inside a span element', async () => {
    await componentIsStable(component);
    const wrappedText = component.querySelector('[cds-navigation-sr-text]');
    expect(wrappedText.textContent.trim()).toEqual('Start Element');
  });

  it('manages screen reader text', async () => {
    await componentIsStable(component);
    const wrappedSpan = component.querySelector('span[cds-layout]');
    expect(wrappedSpan.getAttribute('cds-layout')).toBe('display:screen-reader-only');
    component.expandedRoot = true;
    await componentIsStable(component);
    expect(wrappedSpan.getAttribute('cds-layout')).toBeNull();
  });

  it('has the correct icon size for expanded attribute', async () => {
    await componentIsStable(component);
    expect(icon.getAttribute('size')).toBe('sm');
    component.expandedRoot = true;
    await componentIsStable(component);
    expect(icon.getAttribute('size')).toBe('sm');
  });

  describe('supports user overrides', () => {
    let element: HTMLElement;
    let icon: CdsIcon;

    beforeEach(async () => {
      element = await createTestElement(html`
        <cds-navigation-start>
          Start Element
          <cds-icon shape="cog" cds-navigation-start-icon></cds-icon>
        </cds-navigation-start>
      `);

      component = element.querySelector<CdsNavigationStart>('cds-navigation-start');
      icon = component.querySelector('cds-icon');
    });

    afterEach(() => {
      removeTestElement(element);
    });

    it('and projects icons with cds-navigation-start-icon attribute', async () => {
      expect(icon.getAttribute('shape')).toBe('cog');
    });
  });

  describe('at navigation group level', () => {
    let component: CdsNavigationGroup;
    let start: CdsNavigationStart;
    let icon: CdsIcon;
    let element: HTMLElement;

    beforeEach(async () => {
      element = await createTestElement(html`
        <cds-navigation-group>
          <cds-navigation-start>
            Start Element
          </cds-navigation-start>
        </cds-navigation-group>
      `);

      component = element.querySelector<CdsNavigationGroup>('cds-navigation-group');
      start = component.querySelector<CdsNavigationStart>('cds-navigation-start');
      icon = start.shadowRoot.querySelector<CdsIcon>('cds-icon');
    });

    afterEach(() => {
      removeTestElement(element);
    });

    it('is a groupStart', () => {
      expect(start.isGroupStart).toBeTruthy();
    });

    it('associates navigationGroupId', () => {
      const itemWrapper = component.shadowRoot.querySelector('div.group-items-wrapper');
      expect(start.navigationGroupId).toEqual(itemWrapper.getAttribute('aria-labelledby'));
      const groupButton = start.shadowRoot.querySelector('button');
      expect(start.navigationGroupId).toEqual(groupButton.getAttribute('id'));
    });

    it('provides a default icon with angle shape', async () => {
      const icon = start.shadowRoot.querySelector('cds-icon');
      expect(icon.getAttribute('shape')).toBe('angle');
    });

    it('should size icons to correct sizes for expanded state', async () => {
      await componentIsStable(component);
      expect(start.expandedRoot).toBeFalsy();
      expect(icon.getAttribute('size')).toBe('xs');
      start.expandedRoot = true;
      await componentIsStable(component);
      expect(icon.getAttribute('size')).toBe('sm');
    });

    it('uses the correct icon', async () => {
      await componentIsStable(component);
      expect(icon.getAttribute('shape')).toBe('angle');
    });
  });

  describe('at navigation root level', () => {
    let component: CdsNavigation;
    let start: CdsNavigationStart;
    let element: HTMLElement;

    beforeEach(async () => {
      element = await createTestElement(html`
        <cds-navigation>
          <cds-navigation-start>
            Start Element
          </cds-navigation-start>
        </cds-navigation>
      `);

      component = element.querySelector<CdsNavigation>('cds-navigation');
      start = component.querySelector<CdsNavigationStart>('cds-navigation-start');
    });

    afterEach(() => {
      removeTestElement(element);
    });

    it('not isGroupStart', async () => {
      await componentIsStable(component);
      expect(start.isGroupStart).toBeFalsy();
    });

    it('provides a default icon with angle-double shape', async () => {
      const icon = start.shadowRoot.querySelector('cds-icon');
      expect(icon.getAttribute('shape')).toBe('angle-double');
    });
  });
});
