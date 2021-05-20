/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { html } from 'lit';
import '@cds/core/accordion/register.js';
import { CdsAccordionPanel } from '@cds/core/accordion';
import { componentIsStable, createTestElement, getComponentSlotContent, removeTestElement } from '@cds/core/test';

describe('accordion-panel element', () => {
  let testElement: HTMLElement;
  let component: CdsAccordionPanel;
  const placeholderHeader = 'Accordion Header Placeholder';
  const placeholderContent = 'Accordion Content Placeholder';

  beforeEach(async () => {
    testElement = await createTestElement(html`
      <cds-accordion-panel>
        <cds-accordion-header>${placeholderHeader}</cds-accordion-header>
        <cds-accordion-content>${placeholderContent}</cds-accordion-content>
      </cds-accordion-panel>
    `);
    component = testElement.querySelector<CdsAccordionPanel>('cds-accordion-panel');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should create the component', async () => {
    await componentIsStable(component);
    const slots = getComponentSlotContent(component);
    expect(slots['accordion-header'].includes('<cds-accordion-header slot="accordion-header">')).toBe(true);
    expect(slots['accordion-header'].includes(placeholderHeader)).toBe(true);

    expect(slots['accordion-content'].includes('<cds-accordion-content slot="accordion-content">')).toBe(true);
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

  it('should set the expanded aria state accordion header when expanded', async () => {
    await componentIsStable(component);
    const accordionHeaderWrapper = component.shadowRoot.querySelector('.accordion-header-button');
    expect(accordionHeaderWrapper.getAttribute('aria-expanded')).toBe('false');
    component.expanded = true;
    await componentIsStable(component);
    expect(accordionHeaderWrapper.getAttribute('aria-expanded')).toBe('true');
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
