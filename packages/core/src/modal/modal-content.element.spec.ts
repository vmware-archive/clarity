/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';
import '@cds/core/modal/register.js';
import { CdsModalContent } from '@cds/core/modal';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test/utils';

describe('modal-content element', () => {
  let testElement: HTMLElement;
  let testElementWithLayout: HTMLElement;
  let component: CdsModalContent;
  let componentWithLayout: CdsModalContent;
  const placeholderContent = 'Modal Placeholder';
  const defaultLayout = ['vertical', 'gap:lg', 'p-y:xs'];

  beforeEach(async () => {
    testElement = await createTestElement(html`<cds-modal-content>${placeholderContent}</cds-modal-content>`);
    testElementWithLayout = await createTestElement(
      html`<cds-modal-content cds-layout="elliptical">${placeholderContent}</cds-modal-content>`
    );
    component = testElement.querySelector<CdsModalContent>('cds-modal-content');
    componentWithLayout = testElementWithLayout.querySelector<CdsModalContent>('cds-modal-content');
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
    expect(componentWithLayout.getAttribute('cds-layout').indexOf('elliptical') > -1).toBe(
      true,
      `carries through overridden layout`
    );
  });
});
