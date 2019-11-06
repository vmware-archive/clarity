/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@clr/core/test-dropdown';
import { CwcTestDropdown } from '@clr/core/test-dropdown';
import {
  componentIsStable,
  createTestElement,
  getComponentSlotContent,
  removeTestElement,
  waitForComponent,
} from '@clr/core/test/utils';

describe('dropdown test element', () => {
  let testElement: HTMLElement;
  let component: CwcTestDropdown;

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `
      <cwc-test-dropdown title="custom title">
        <span>hello world</span>
      </cwc-test-dropdown>
    `;

    await waitForComponent('cwc-test-dropdown');
    component = testElement.querySelector<CwcTestDropdown>('cwc-test-dropdown');
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
    let event: any;
    await componentIsStable(component);
    component.addEventListener('openChange', (e: any) => (event = e));

    component.open = true;
    await componentIsStable(component);

    expect(event.detail).toBe(true);
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
