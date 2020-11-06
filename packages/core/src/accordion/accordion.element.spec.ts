/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { html } from 'lit-html';
import '@cds/core/accordion/register.js';
import { CdsAccordion } from '@cds/core/accordion';
import { componentIsStable, createTestElement, getComponentSlotContent, removeTestElement } from '@cds/core/test/utils';

describe('accordion element', () => {
  let testElement: HTMLElement;
  let component: CdsAccordion;
  const placeholderContent = 'Accordion Panel Placeholder';

  beforeEach(async () => {
    testElement = await createTestElement(html`
      <cds-accordion>
        <cds-accordion-panel>${placeholderContent}</cds-accordion-panel>
      </cds-accordion>
    `);
    component = testElement.querySelector<CdsAccordion>('cds-accordion');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should create the component', async () => {
    await componentIsStable(component);
    const slots = getComponentSlotContent(component);
    expect(slots.default).toBe(`<cds-accordion-panel><!---->${placeholderContent}<!----></cds-accordion-panel>`);
  });
});
