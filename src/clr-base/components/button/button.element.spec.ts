/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import '@clr/base/components/button';
import { ClrButton } from '@clr/base/components/button';
import { createTestElement, waitForComponent, removeTestElement, componentIsStable } from '@clr/base/test/utils';

describe('button element', () => {
  let testElement: HTMLElement;
  let component: ClrButton;

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `<clr-wc-button></clr-wc-button>`;

    await waitForComponent('clr-wc-button');
    component = testElement.querySelector<ClrButton>('clr-wc-button');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should render button', async () => {
    await componentIsStable(component);
    expect(component.shadowRoot.innerHTML.includes('Button Placeholder')).toBe(true);
  });
});
