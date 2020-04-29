/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CdsCloseButton } from '@clr/core/internal-components';
import '@clr/core/internal-components';
import { componentIsStable, createTestElement, removeTestElement, waitForComponent } from '@clr/core/test/utils';

describe('internal close button element', () => {
  let testElement: HTMLElement;
  let component: CdsCloseButton;
  const placeholderText = 'ohai';

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `
      <form>
        <cds-internal-close-button>${placeholderText}</cds-internal-close-button>
      </form>
    `;

    await waitForComponent('cds-internal-close-button');
    component = testElement.querySelector<CdsCloseButton>('cds-internal-close-button');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should create the component but not project content into the slot', async () => {
    await componentIsStable(component);
    expect(component.innerText).not.toBe(placeholderText);
  });
});
