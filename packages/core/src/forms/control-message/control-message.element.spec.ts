/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@clr/core/forms/register.js';
import { CdsControlMessage } from '@clr/core/forms';
import { componentIsStable, createTestElement, removeTestElement, waitForComponent } from '@clr/core/test/utils';

describe('cds-control-message element', () => {
  let testElement: HTMLElement;
  let component: CdsControlMessage;
  const placeholderText = 'message';

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `<cds-control-message>${placeholderText}</cds-control-message>`;

    await waitForComponent('cds-control-message');
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
