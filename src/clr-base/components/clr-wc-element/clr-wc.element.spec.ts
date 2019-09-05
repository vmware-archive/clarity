/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import '@clr/base/components/clr-wc-element';
import { ClrWcElement } from '@clr/base/components/clr-wc-element';
import {
  createTestElement,
  waitForComponent,
  removeTestElement,
  componentIsStable,
  getComponentSlotContent,
} from '@clr/base/test/utils';

describe('dropdown test element', () => {
  let testElement: HTMLElement;
  let component: ClrWcElement;

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `
      <clr-wc-element title="custom title">
        <span>hello world</span>
      </clr-wc-element>
    `;

    await waitForComponent('clr-wc-element');
    component = testElement.querySelector<ClrWcElement>('clr-wc-element');
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
