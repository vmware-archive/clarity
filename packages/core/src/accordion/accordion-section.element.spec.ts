/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { html } from 'lit';
import '@cds/core/accordion/register.js';
import { CdsAccordionSection } from '@cds/core/accordion';
import { componentIsStable, createTestElement, getComponentSlotContent, removeTestElement } from '@cds/core/test';

describe('accordion-section element', () => {
  let testElement: HTMLElement;
  let component: CdsAccordionSection;
  const placeholderHeader = 'Accordion Header Placeholder';
  const placeholderContent = 'Accordion Content Placeholder';

  beforeEach(async () => {
    testElement = await createTestElement(html`
      <cds-accordion-section>
        <cds-accordion-header>${placeholderHeader}</cds-accordion-header>
        <cds-accordion-content>${placeholderContent}</cds-accordion-content>
      </cds-accordion-section>
    `);
    component = testElement.querySelector<CdsAccordionSection>('cds-accordion-section');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should create the component', async () => {
    await componentIsStable(component);
    const slots = getComponentSlotContent(component);
    console.log(slots);
    expect(slots['accordion-header'].startsWith('<cds-accordion-header slot="accordion-header"')).toBe(true);
    expect(slots['accordion-header'].includes(placeholderHeader)).toBe(true);

    expect(slots['accordion-content'].startsWith('<cds-accordion-content slot="accordion-content"')).toBe(true);
    expect(slots['accordion-content'].includes(placeholderContent)).toBe(true);
  });

  it('should emit an expandedChange event when header is clicked', async done => {
    let value: any;
    await componentIsStable(component);
    component.addEventListener<any>('expandedChange', (e: CustomEvent) => {
      value = e.detail;
      expect(value).toBe(true);
      done();
    });

    const button = component.shadowRoot.querySelector<HTMLButtonElement>('.accordion-header-button');
    expect(button).toBeDefined();
    button.click();
  });

  it('should associate the aria-labelledby and aria-controls values correctly', async () => {
    await componentIsStable(component);
    const accordionHeader = component.querySelector<CdsAccordionHeader>('cds-accordion-header');
    const accordionContent = component.querySelector<CdsAccordionHeader>('cds-accordion-content');
    expect(accordionHeader.id).toBeDefined();
    expect(accordionContent.id).toBeDefined();

    expect(accordionHeader.getAttribute('aria-controls')).toBe(accordionContent.id);
    expect(accordionContent.getAttribute('aria-labelledby')).toBe(accordionHeader.id);
  });

  it('should set the aria-expanded attribute on accordion header when expanded updates', async () => {
    await componentIsStable(component);
    const accordionHeader = component.querySelector<CdsAccordionHeader>('cds-accordion-header');
    expect(accordionHeader.getAttribute('aria-expanded')).toBe('false');
    component.expanded = true;
    await componentIsStable(component);
    expect(accordionHeader.getAttribute('aria-expanded')).toBe('true');
  });

  it('should set the aria-disabled attribute onaccordion header when disabled updates', async () => {
    await componentIsStable(component);
    const accordionHeader = component.querySelector<CdsAccordionHeader>('cds-accordion-header');
    expect(accordionHeader.getAttribute('aria-disabled')).toBe('false');
    component.disabled = true;
    await componentIsStable(component);
    expect(accordionHeader.getAttribute('aria-disabled')).toBe('true');
  });

  it('should set the disabled state to the accordion when disabled', async () => {
    await componentIsStable(component);
    const accordionHeaderWrapper = component.shadowRoot.querySelector('.accordion-header-button');
    expect(accordionHeaderWrapper.getAttribute('disabled')).toBe(null);
    component.disabled = true;
    await componentIsStable(component);
    expect(accordionHeaderWrapper.getAttribute('disabled')).toBe('');
  });
});
