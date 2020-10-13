/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';
import '@cds/core/modal/register.js';
import { CdsModalActions } from '@cds/core/modal';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test/utils';

describe('modal-actions element', () => {
  let testElement: HTMLElement;
  let testElementWithLayout: HTMLElement;
  let component: CdsModalActions;
  let componentWithLayout: CdsModalActions;
  const placeholderContent = 'Modal Placeholder';
  const defaultLayout = ['horizontal', 'gap:sm', 'align:right'];

  beforeEach(async () => {
    testElement = await createTestElement(html`<cds-modal-actions>${placeholderContent}</cds-modal-actions>`);
    testElementWithLayout = await createTestElement(
      html`<cds-modal-actions cds-layout="orthogonal">${placeholderContent}</cds-modal-actions>`
    );
    component = testElement.querySelector<CdsModalActions>('cds-modal-actions');
    componentWithLayout = testElementWithLayout.querySelector<CdsModalActions>('cds-modal-actions');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should create the component', async () => {
    await componentIsStable(component);
    expect(component.innerText).toBe(placeholderContent);
    await componentIsStable(componentWithLayout);
    expect(componentWithLayout.innerText).toBe(placeholderContent);
  });

  it('should have a slot attribute of value `modal-actions`', async () => {
    await componentIsStable(component);
    expect(component.hasAttribute('slot')).toBe(true);
    expect(component.getAttribute('slot')).toEqual('modal-actions');
  });

  it('should default to cds-layout defaults', async () => {
    await componentIsStable(component);
    const wrapperDiv = component.shadowRoot.querySelector('div');
    defaultLayout.forEach(layout => {
      expect(wrapperDiv.getAttribute('cds-layout').indexOf(layout) > -1).toBe(
        true,
        `has ${layout} value in cds-layout`
      );
    });
  });

  it('should override layout defaults', async () => {
    await componentIsStable(componentWithLayout);
    expect(componentWithLayout.shadowRoot.querySelector('div')).toBeNull('default wrapper div is not rendered');
    expect(componentWithLayout.getAttribute('cds-layout').indexOf('orthogonal') > -1).toBe(
      true,
      `carries through overridden layout`
    );
  });
});
