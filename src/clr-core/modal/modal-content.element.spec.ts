/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CdsModalContent } from '@clr/core/modal';
import '@clr/core/modal';
import { componentIsStable, createTestElement, removeTestElement, waitForComponent } from '@clr/core/test/utils';

describe('modal-content element', () => {
  let testElement: HTMLElement;
  let component: CdsModalContent;
  const placeholderContent = 'Modal Placeholder';

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `<cds-modal-content>${placeholderContent}</cds-modal-content>`;

    await waitForComponent('cds-modal-content');
    component = testElement.querySelector<CdsModalContent>('cds-modal-content');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should create the component', async () => {
    await componentIsStable(component);
    expect(component.innerText).toBe(placeholderContent);
  });
});
