/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';
import '@cds/core/modal/register.js';
import { CdsModalContent } from '@cds/core/modal';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test/utils';

describe('modal-content element', () => {
  let testElement: HTMLElement;
  let component: CdsModalContent;
  const placeholderContent = 'Modal Placeholder';

  beforeEach(async () => {
    testElement = await createTestElement(html`<cds-modal-content>${placeholderContent}</cds-modal-content>`);
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
