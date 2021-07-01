/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { describeElementByElements, hasAriaLabelTypeAttr } from './a11y.js';
import { createTestElement } from '@cds/core/test';

describe('a11y utilities', () => {
  it('describeElementByElements', async () => {
    const element = await createTestElement();
    const descriptions: HTMLElement[] = [await createTestElement(), await createTestElement()];
    describeElementByElements(element, descriptions);

    expect(element.getAttribute('aria-describedby').trim()).toBe(`${descriptions[0].id} ${descriptions[1].id}`);
  });

  it('hasAriaLabelTypeAttr', async () => {
    const element = await createTestElement();
    expect(hasAriaLabelTypeAttr(element)).toBe(false);

    element.setAttribute('aria-label', 'hello');
    expect(hasAriaLabelTypeAttr(element)).toBe(true);

    element.removeAttribute('aria-label');
    expect(hasAriaLabelTypeAttr(element)).toBe(false);

    element.setAttribute('aria-labelledby', 'hello');
    expect(hasAriaLabelTypeAttr(element)).toBe(true);
  });
});
