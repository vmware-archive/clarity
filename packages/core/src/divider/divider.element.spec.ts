/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';
import { CdsDivider } from '@cds/core/divider';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test/utils';
import '@cds/core/divider/register.js';

describe('divider element', () => {
  describe('render: ', () => {
    let testElement: HTMLElement;
    let component: CdsDivider;

    beforeEach(async () => {
      testElement = await createTestElement(html`<cds-divider></cds-divider>`);
      component = testElement.querySelector<CdsDivider>('cds-divider');
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('should create the component', async () => {
      await componentIsStable(component);
      expect(component).not.toBe(null);
    });
  });

  describe('defaults: ', () => {
    let testElement: HTMLElement;
    let component: CdsDivider;
    let innerComponent: HTMLElement;
    const containerWidth = 250;

    beforeEach(async () => {
      testElement = await createTestElement(html`
        <div id="container" style="height: 60px; width: ${containerWidth}px">
          <cds-divider></cds-divider>
        </div>
      `);
      component = testElement.querySelector<CdsDivider>('cds-divider');
      innerComponent = component.shadowRoot.querySelector('.private-host');
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('should set the divider width to the width of the container by default', async () => {
      await componentIsStable(component);
      expect(innerComponent.clientWidth).toBe(
        containerWidth,
        'dividers should take up the full width of their container by default'
      );
    });

    it('should set the divider height to 1px by default', async () => {
      await componentIsStable(component);
      expect(innerComponent.clientHeight).toBe(1, 'dividers should be 1px by default');
    });

    it('should set aria role to "separator" by default', async () => {
      await componentIsStable(component);
      expect(innerComponent.getAttribute('role')).toBe('separator');
    });

    it('should set aria-orientation to "horizontal" by default', async () => {
      await componentIsStable(component);
      expect(innerComponent.getAttribute('aria-orientation')).toBe('horizontal');
    });
  });

  describe('vertical divider: ', () => {
    let testElement: HTMLElement;
    let component: CdsDivider;
    let innerComponent: HTMLElement;
    const containerHeight = 250;
    const containerWidth = 50;

    beforeEach(async () => {
      testElement = await createTestElement(html`
        <div
          id="container"
          style="display: flex; flex-direction: row; height: ${containerHeight}px; width: ${containerWidth}px"
        >
          <cds-divider orientation="vertical"></cds-divider>
        </div>
      `);
      component = testElement.querySelector<CdsDivider>('cds-divider');
      innerComponent = component.shadowRoot.querySelector('.private-host');
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('should set the divider height to the height of the container', async () => {
      await componentIsStable(component);
      expect(innerComponent.clientHeight).toBe(
        containerHeight,
        'vertical dividers should take up the full height of their container'
      );
    });

    it('should set the vertical divider width to 1px', async () => {
      await componentIsStable(component);
      expect(innerComponent.clientWidth).toBe(1);
    });

    it('should set aria-orientation to "vertical"', async () => {
      await componentIsStable(component);
      expect(innerComponent.getAttribute('aria-orientation')).toBe('vertical');
    });
  });
});
