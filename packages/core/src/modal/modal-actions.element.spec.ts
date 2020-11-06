/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';
import '@cds/core/modal/register.js';
import { CdsModalActions } from '@cds/core/modal';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test/utils';

describe('modal-actions element', () => {
  let testElement: HTMLElement;
  let component: CdsModalActions;
  const placeholderContent = 'Modal Placeholder';

  beforeEach(async () => {
    testElement = await createTestElement(html`<cds-modal-actions>${placeholderContent}</cds-modal-actions>`);
    component = testElement.querySelector<CdsModalActions>('cds-modal-actions');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should create the component', async () => {
    await componentIsStable(component);
    expect(component.innerText).toBe(placeholderContent);
  });

  it('should have a slot attribute of value `modal-actions`', async () => {
    await componentIsStable(component);
    expect(component.hasAttribute('slot')).toBe(true);
    expect(component.getAttribute('slot')).toEqual('modal-actions');
  });
});
