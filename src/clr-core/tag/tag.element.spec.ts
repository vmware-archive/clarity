/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CwcTag } from '@clr/core/tag';
import '@clr/core/tag';
import { componentIsStable, createTestElement, removeTestElement, waitForComponent } from '@clr/core/test/utils';

describe('tag element', () => {
  let testElement: HTMLElement;
  let component: CwcTag;
  const placeholderText: string = 'Tag Placeholder';

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `<cwc-tag>${placeholderText}</cwc-tag>`;

    await waitForComponent('cwc-tag');
    component = testElement.querySelector<CwcTag>('cwc-tag');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should create the component', async () => {
    await componentIsStable(component);
    expect(component.innerText).toBe(placeholderText);
  });
});
