/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@clr/core/test-dropdown';
import { CdsTestDropdown } from '@clr/core/test-dropdown';
import {
  componentIsStable,
  createTestElement,
  getComponentSlotContent,
  removeTestElement,
  waitForComponent,
} from '@clr/core/test/utils';

describe('dropdown test element', () => {
  let testElement: HTMLElement;
  let component: CdsTestDropdown;

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `
      <cds-test-dropdown title="custom title">
        <span>hello world</span>
      </cds-test-dropdown>
    `;

    await waitForComponent('cds-test-dropdown');
    component = testElement.querySelector<CdsTestDropdown>('cds-test-dropdown');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should render dynamic content in slot', async () => {
    await componentIsStable(component);
    const button = component.shadowRoot.querySelector('button');
    button.click();

    await componentIsStable(component);
    const slots = getComponentSlotContent(component);
    expect(slots.default).toBe('<span>hello world</span>');
  });

  it('should emit a custom event when opened or closed', async () => {
    let value: any;
    await componentIsStable(component);
    component.addEventListener<any>('openChange', (event: CustomEvent) => (value = event.detail));

    component.open = true;
    await componentIsStable(component);
    expect(value).toBe(true);
  });

  it('should render dynamic title property', async () => {
    await componentIsStable(component);
    const button = component.shadowRoot.querySelector('button');
    expect(button.innerText).toBe('custom title');

    component.title = 'test';
    await componentIsStable(component);
    expect(button.innerText).toBe('test');
  });
});
