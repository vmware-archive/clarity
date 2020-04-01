/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CdsAlertActions } from '@clr/core/alert';
import '@clr/core/alert';
import { componentIsStable, createTestElement, removeTestElement, waitForComponent } from '@clr/core/test/utils';

describe('alert-actions element', () => {
  let testElement: HTMLElement;
  let component: CdsAlertActions;
  const placeholderText = 'Alert Text Placeholder';

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `<cds-alert-actions>${placeholderText}</cds-alert-actions>`;

    await waitForComponent('cds-alert-actions');
    component = testElement.querySelector<CdsAlertActions>('cds-alert-actions');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should create the component', async () => {
    await componentIsStable(component);
    expect(component.innerText).toBe(placeholderText);
  });

  it('should have a slot attribute of value `actions`', async () => {
    await componentIsStable(component);
    expect(component.hasAttribute('slot')).toBe(true);
    expect(component.getAttribute('slot')).toEqual('actions');
  });
});
