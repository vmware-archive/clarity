/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CdsBadge } from '@clr/core/badge';
import '@clr/core/badge';
import { componentIsStable, createTestElement, removeTestElement, waitForComponent } from '@clr/core/test/utils';

describe('badge element', () => {
  let testElement: HTMLElement;
  let component: CdsBadge;
  const placeholderText = 'Badge Placeholder';

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `<cds-badge>${placeholderText}</cds-badge>`;

    await waitForComponent('cds-badge');
    component = testElement.querySelector<CdsBadge>('cds-badge');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should create the component', async () => {
    await componentIsStable(component);
    expect(component.innerText).toBe(placeholderText);
  });
});
