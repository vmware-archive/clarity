/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CdsAlertContent } from '@clr/core/alert';
import '@clr/core/alert';
import { componentIsStable, createTestElement, removeTestElement, waitForComponent } from '@clr/core/test/utils';

describe('alert-content element', () => {
  let testElement: HTMLElement;
  let component: CdsAlertContent;
  const placeholderContent = 'Alert Content Placeholder';

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `<cds-alert-content>${placeholderContent}</cds-alert-content>`;

    await waitForComponent('cds-alert-content');
    component = testElement.querySelector<CdsAlertContent>('cds-alert-content');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should create the component', async () => {
    await componentIsStable(component);
    expect(component.innerText).toBe(placeholderContent);
  });
});
