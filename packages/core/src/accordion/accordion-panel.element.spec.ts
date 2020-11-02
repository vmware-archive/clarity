/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { html } from 'lit-html';
import '@clr/core/accordion/register.js';
import { CdsAccordionPanel } from '@clr/core/accordion';
import { componentIsStable, createTestElement, getComponentSlotContent, removeTestElement } from '@clr/core/test/utils';

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
    expect(slots['accordion-header']).toBe(
      `<cds-accordion-header slot="accordion-header"><!---->${placeholderHeader}<!----></cds-accordion-header>`
    );
    expect(slots['accordion-content']).toBe(
      `<cds-accordion-content slot="accordion-content"><!---->${placeholderContent}<!----></cds-accordion-content>`
    );
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

  it('should add the open class to the accordion header wrapper when expanded', async () => {
    await componentIsStable(component);
    const accordionHeaderWrapper = component.shadowRoot.querySelector('.accordion-header');
    expect(accordionHeaderWrapper.classList.contains('open')).toBe(false);
    component.expanded = true;
    await componentIsStable(component);
    expect(accordionHeaderWrapper.classList.contains('open')).toBe(true);
  });

  it('should add the disabled class to the accordion header wrapper when disabled', async () => {
    await componentIsStable(component);
    const accordionHeaderWrapper = component.shadowRoot.querySelector('.accordion-header');
    expect(accordionHeaderWrapper.classList.contains('disabled')).toBe(false);
    component.disabled = true;
    await componentIsStable(component);
    expect(accordionHeaderWrapper.classList.contains('disabled')).toBe(true);
  });
});
