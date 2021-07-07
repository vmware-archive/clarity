/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { html } from 'lit';
import '@cds/core/accordion/register.js';
import { CdsAccordion } from '@cds/core/accordion';
import { componentIsStable, createTestElement, getComponentSlotContent, removeTestElement } from '@cds/core/test';

describe('accordion element', () => {
  let testElement: HTMLElement;
  let component: CdsAccordion;
  const placeholderContent = 'Accordion Panel Placeholder';

  beforeEach(async () => {
    testElement = await createTestElement(html`
      <cds-accordion>
        <cds-accordion-section cds-motion="off">${placeholderContent}</cds-accordion-section>
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
    expect(slots.default).toContain('<cds-accordion-section ');
    expect(slots.default).toContain('</cds-accordion-section>');
  });
});
