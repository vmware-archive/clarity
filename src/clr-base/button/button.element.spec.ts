/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CwcButton } from '@clr/base/button';
import '@clr/base/button';
import { componentIsStable, createTestElement, removeTestElement, waitForComponent } from '@clr/base/test/utils';

describe('button element', () => {
  let testElement: HTMLElement;
  let component: CwcButton;

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `<cwc-button></cwc-button>`;

    await waitForComponent('cwc-button');
    component = testElement.querySelector<CwcButton>('cwc-button');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should render button', async () => {
    await componentIsStable(component);
    expect(component.shadowRoot.innerHTML.includes('Button Placeholder')).toBe(true);
  });
});
