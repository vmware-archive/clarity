/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CdsTag } from '@clr/core/tag';
import '@clr/core/tag';
import { componentIsStable, createTestElement, removeTestElement, waitForComponent } from '@clr/core/test/utils';

describe('tag element', () => {
  let testElement: HTMLElement;
  let component: CdsTag;
  const placeholderText: string = 'Tag Placeholder';

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `<cds-tag>${placeholderText}</cds-tag>`;

    await waitForComponent('cds-tag');
    component = testElement.querySelector<CdsTag>('cds-tag');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should create the component', async () => {
    await componentIsStable(component);
    expect(component.innerText).toBe(placeholderText);
  });
});
