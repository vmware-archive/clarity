/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import '@clr/base/components/icon';
import { ClrIcon } from '@clr/base/components/icon';
import { createTestElement, waitForComponent, removeTestElement, componentIsStable } from '@clr/base/test/utils';

describe('icon element', () => {
  let testElement: HTMLElement;
  let component: ClrIcon;

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `<clr-wc-icon></clr-wc-icon>`;

    await waitForComponent('clr-wc-icon');
    component = testElement.querySelector<ClrIcon>('clr-wc-icon');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should render icon', async () => {
    await componentIsStable(component);
    expect(component.shadowRoot.innerHTML.includes('Icon Placeholder')).toBe(true);
  });
});
