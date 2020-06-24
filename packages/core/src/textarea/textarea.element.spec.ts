/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { render, html } from 'lit-html';
import { createTestElement, waitForComponent, removeTestElement, componentIsStable } from '@clr/core/test/utils';
import { CdsTextarea } from '@clr/core/textarea';
import '@clr/core/textarea/register.js';

describe('cds-textarea', () => {
  let component: CdsTextarea;
  let element: HTMLElement;

  beforeEach(async () => {
    element = createTestElement();
    render(
      html` <cds-textarea>
        <label>textarea</label>
        <textarea></textarea>
        <cds-control-message>message text</cds-control-message>
      </cds-textarea>`,
      element
    );

    await waitForComponent('cds-textarea');

    component = element.querySelector<CdsTextarea>('cds-textarea');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should create component', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
  });
});
