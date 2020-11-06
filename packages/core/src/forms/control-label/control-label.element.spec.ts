/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';
import { CdsInternalControlLabel } from '@cds/core/forms';
import '@cds/core/forms/register.js';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test/utils';

describe('cds-internal-control-label element', () => {
  let testElement: HTMLElement;
  let component: CdsInternalControlLabel;
  const placeholderText = 'Label';

  beforeEach(async () => {
    testElement = await createTestElement(
      html`<cds-internal-control-label>${placeholderText}</cds-internal-control-label>`
    );
    component = testElement.querySelector<CdsInternalControlLabel>('cds-internal-control-label');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should create the component', async () => {
    await componentIsStable(component);
    expect(component.innerText).toBe(placeholderText);
  });
});
