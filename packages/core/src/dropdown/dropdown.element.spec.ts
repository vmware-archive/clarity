/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { CdsDropdown } from '@cds/core/dropdown/dropdown.element.js';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';
import '@cds/core/dropdown/register.js';

describe('dropdown element', () => {
  describe('render: ', () => {
    let testElement: HTMLElement;
    let component: CdsDropdown;

    beforeEach(async () => {
      testElement = await createTestElement(html`<cds-dropdown><p>Ohai</p></cds-dropdown>`);
      component = testElement.querySelector<CdsDropdown>('cds-dropdown');
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('should create the component', async () => {
      await componentIsStable(component);
      expect(component).not.toBe(null);
    });
  });
});
