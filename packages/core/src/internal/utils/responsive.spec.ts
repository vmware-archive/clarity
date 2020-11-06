/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';
import { createTestElement, removeTestElement, componentIsStable } from '@cds/core/test/utils';
import { CdsControl } from '@cds/core/forms/index.js';

describe('responsive utilities', () => {
  let element: HTMLElement;
  let component: CdsControl;

  beforeEach(async () => {
    element = await createTestElement(html`
      <cds-control layout="horizontal">
        <label>test</label>
        <input type="text" />
        <cds-control-message>message text</cds-control-message>
      </cds-control>
    `);

    component = element.querySelector<CdsControl>('cds-control');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should get optimal component layout', async () => {
    await componentIsStable(component);
    expect(component.layout).toBe('horizontal');

    component.style.width = '100px';

    // hacky workaround as we cant trigger resize observers manually in headless browsers
    (component as any).observers.filter((o: any) => o.__testTrigger).forEach((o: any) => o.__testTrigger());

    await componentIsStable(component);
    expect(component.layout).toBe('vertical');
  });
});
