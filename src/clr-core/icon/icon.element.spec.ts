/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import '@clr/core/icon';
import { CwcIcon } from '@clr/core/icon';
import { componentIsStable, createTestElement, removeTestElement, waitForComponent } from '@clr/core/test/utils';

describe('icon element', () => {
  let testElement: HTMLElement;
  let component: CwcIcon;

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `<cwc-icon></cwc-icon>`;

    await waitForComponent('cwc-icon');
    component = testElement.querySelector<CwcIcon>('cwc-icon');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should render icon', async () => {
    await componentIsStable(component);
    expect(component.shadowRoot.innerHTML.includes('Icon Placeholder')).toBe(true);
  });
});
