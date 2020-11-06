/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';
import '@cds/core/internal-components/close-button/register.js';
import { CdsInternalCloseButton } from '@cds/core/internal-components/close-button';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test/utils';

describe('internal close button element', () => {
  let testElement: HTMLElement;
  let component: CdsInternalCloseButton;
  const placeholderText = 'ohai';

  beforeEach(async () => {
    testElement = await createTestElement(html`
      <form>
        <cds-internal-close-button>${placeholderText}</cds-internal-close-button>
      </form>
    `);
    component = testElement.querySelector<CdsInternalCloseButton>('cds-internal-close-button');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should create the component but not project content into the slot', async () => {
    await componentIsStable(component);
    expect(component.innerText).not.toBe(placeholderText);
  });
});
