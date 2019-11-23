/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CwcBadge } from '@clr/core/badge';
import '@clr/core/badge';
import { componentIsStable, createTestElement, removeTestElement, waitForComponent } from '@clr/core/test/utils';

describe('badge element', () => {
  let testElement: HTMLElement;
  let component: CwcBadge;
  const placeholderText: string = 'Badge Placeholder';

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `<cwc-badge>${placeholderText}</cwc-badge>`;

    await waitForComponent('cwc-badge');
    component = testElement.querySelector<CwcBadge>('cwc-badge');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should create the component', async () => {
    await componentIsStable(component);
    expect(component.innerText).toBe(placeholderText);
  });
});
