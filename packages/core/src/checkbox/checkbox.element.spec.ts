/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { render, html } from 'lit-html';
import { createTestElement, waitForComponent, removeTestElement, componentIsStable } from '@clr/core/test/utils';
import { CdsCheckbox } from '@clr/core/checkbox';
import '@clr/core/checkbox/register.js';

describe('cds-checkbox', () => {
  let component: CdsCheckbox;
  let element: HTMLElement;

  beforeEach(async () => {
    element = createTestElement();
    render(
      html` <cds-checkbox>
        <label>checkbox</label>
        <input type="checkbox" />
        <cds-control-message>message text</cds-control-message>
      </cds-checkbox>`,
      element
    );

    await waitForComponent('cds-checkbox');

    component = element.querySelector<CdsCheckbox>('cds-checkbox');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should create component', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
  });

  it('should update the indeterminate attr for host', async () => {
    await componentIsStable(component);
    expect(component.hasAttribute('indeterminate')).toBe(false);

    component.inputControl.setAttribute('indeterminate', '');
    await componentIsStable(component);
    expect(component.hasAttribute('indeterminate')).toBe(true);
  });

  it('should remove indeterminate state when checked', async () => {
    component.inputControl.setAttribute('indeterminate', '');
    await componentIsStable(component);
    expect(component.hasAttribute('checked')).toBe(false);
    expect(component.hasAttribute('indeterminate')).toBe(true);

    component.inputControl.click();
    await componentIsStable(component);
    expect(component.hasAttribute('checked')).toBe(true);
    expect(component.hasAttribute('indeterminate')).toBe(false);
  });
});
