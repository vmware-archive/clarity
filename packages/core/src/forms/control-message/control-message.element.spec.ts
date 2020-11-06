/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';
import '@cds/core/forms/register.js';
import { CdsControlMessage } from '@cds/core/forms';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test/utils';

describe('cds-control-message element', () => {
  let testElement: HTMLElement;
  let component: CdsControlMessage;
  const placeholderText = 'message';

  beforeEach(async () => {
    testElement = await createTestElement(html`<cds-control-message>${placeholderText}</cds-control-message>`);
    component = testElement.querySelector<CdsControlMessage>('cds-control-message');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should create the component', async () => {
    await componentIsStable(component);
    expect(component.innerText).toBe(placeholderText);
  });

  it('should auto set the host slot', () => {
    expect(component.getAttribute('slot')).toBe('message');
  });
});
