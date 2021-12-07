/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import '@cds/core/button-inline/register.js';
import '@cds/core/icon/register.js';
import { CdsButtonInline } from '@cds/core/button-inline';
import { CdsIcon } from '@cds/core/icon/icon.element.js';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';

describe('Inline button element', () => {
  let testElement: HTMLElement;
  let component: CdsButtonInline;
  const placeholderText = 'ohai';

  beforeEach(async () => {
    testElement = await createTestElement(html`
      <form>
        <cds-button-inline>${placeholderText}</cds-button-inline>
      </form>
    `);
    component = testElement.querySelector<CdsButtonInline>('cds-button-inline');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should create the component', async () => {
    await componentIsStable(component);
    expect(component.innerText).toBe(placeholderText);
  });
});

describe('Inline button element with icon', () => {
  it('add the anchored-icon classname to icons', async () => {
    const testElement = await createTestElement(html`
      <form>
        <cds-button-inline><cds-icon shape="go-niners"></cds-icon>kthxbye</cds-button-inline>
      </form>
    `);

    const component = testElement.querySelector<CdsButtonInline>('cds-button-inline');
    const icon = component.querySelector<CdsIcon>('cds-icon');
    await componentIsStable(component);

    expect(icon.classList.contains('anchored-icon'));
    removeTestElement(testElement);
  });
});
