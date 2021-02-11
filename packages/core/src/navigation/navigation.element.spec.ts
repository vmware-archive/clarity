/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';
import '@cds/core/navigation/register.js';
import { CdsNavigation } from '@cds/core/navigation';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test/utils';

describe('modal element', () => {
  let testElement: HTMLElement;
  let component: CdsNavigation;

  beforeEach(async () => {
    testElement = await createTestElement(html` <cds-navigation>Hello Navigation</cds-navigation> `);
    component = testElement.querySelector<CdsNavigation>('cds-navigation');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should create the component', async () => {
    await componentIsStable(component);
  });
});
