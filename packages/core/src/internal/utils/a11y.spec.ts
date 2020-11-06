/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { describeElementByElements } from './a11y.js';
import { createTestElement } from '@cds/core/test/utils';

describe('a11y utilities', () => {
  it('describeElementByElements', async () => {
    const element = await createTestElement();
    const descriptions: HTMLElement[] = [await createTestElement(), await createTestElement()];
    describeElementByElements(element, descriptions);

    expect(element.getAttribute('aria-describedby').trim()).toBe(`${descriptions[0].id} ${descriptions[1].id}`);
  });
});
