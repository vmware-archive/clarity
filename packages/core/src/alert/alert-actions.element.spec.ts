/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';
import '@cds/core/alert/register.js';
import '@cds/core/button/register.js';
import { CdsAlertActions } from '@cds/core/alert';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test/utils';

describe('alert-actions element', () => {
  describe(' - the basics: ', () => {
    let testElement: HTMLElement;
    let component: CdsAlertActions;
    const placeholderText = 'Alert Text Placeholder';

    beforeEach(async () => {
      testElement = await createTestElement(html`<cds-alert-actions>${placeholderText}</cds-alert-actions>`);
      component = testElement.querySelector<CdsAlertActions>('cds-alert-actions');
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('should create the component', async () => {
      await componentIsStable(component);
      expect(component.innerText).toBe(placeholderText);
    });
  });

  describe(' - setup: ', () => {
    let testElement: HTMLElement;
    let component: CdsAlertActions;

    beforeEach(async () => {
      testElement = await createTestElement(html`
        <cds-alert-actions>
          <cds-button>ohai</cds-button>
          <cds-button>kthxbye</cds-button>
        </cds-alert-actions>
      `);

      component = testElement.querySelector<CdsAlertActions>('cds-alert-actions');
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('should have a slot attribute of value `actions`', async () => {
      await componentIsStable(component);
      expect(component.hasAttribute('slot')).toBe(true);
      expect(component.getAttribute('slot')).toEqual('actions');
    });

    it('should setup buttons as expected', async () => {
      await componentIsStable(component);
      const buttons = component.querySelectorAll('cds-button');
      buttons.forEach(b => {
        expect(b.size).toBe('md');
        expect(b.status).toBe('primary');
      });
    });

    it('should update buttons if a default (group) type', async () => {
      await componentIsStable(component);
      component.type = 'default';
      await componentIsStable(component);
      const buttons = component.querySelectorAll('cds-button');
      buttons.forEach(b => {
        expect(b.size).toBe('md');
        expect(b.status).toBe('primary');
      });
    });

    it('should update buttons if a banner type', async () => {
      await componentIsStable(component);
      component.type = 'banner';
      await componentIsStable(component);
      const buttons = component.querySelectorAll('cds-button');
      buttons.forEach(b => {
        expect(b.size).toBe('sm');
        expect(b.status).toBe('inverse');
      });
    });
  });
});
