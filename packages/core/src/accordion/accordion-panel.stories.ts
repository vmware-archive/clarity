/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import '@cds/core/accordion/register.js';
import '@cds/core/progress-circle/register.js';
import { getElementStorybookArgTypes, spreadProps, getElementStorybookArgs } from '@cds/core/internal';
import { action } from '@storybook/addon-actions';
import { html } from 'lit-html';
import customElements from '../../dist/core/custom-elements.json';

export default {
  title: 'Stories/Accordion Panel',
  component: 'cds-accordion-panel',
  argTypes: getElementStorybookArgTypes('cds-accordion-panel', customElements),
  parameters: {
    options: { showPanel: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=1007%3A0',
    },
  },
};

export function AccordionPanelAPI(args: any) {
  return html`
    <cds-accordion>
      <cds-accordion-panel
        expanded
        ...="${spreadProps(getElementStorybookArgs(args))}"
        @expandedChange=${action('expandedChange')}
      >
        <cds-accordion-header>${args['cds-accordion-header']}</cds-accordion-header>
        <cds-accordion-content>${args['cds-accordion-content']}</cds-accordion-content>
      </cds-accordion-panel>
    </cds-accordion>
  `;
}

/** @website */
export function basicAccordion() {
  return html`
    <cds-accordion>
      <cds-accordion-panel expanded>
        <cds-accordion-header>Expanded accordion panel</cds-accordion-header>
        <cds-accordion-content>Expanded accordion content</cds-accordion-content>
      </cds-accordion-panel>
      <cds-accordion-panel disabled>
        <cds-accordion-header>Disabled accordion panel</cds-accordion-header>
        <cds-accordion-content>Disabled accordion content</cds-accordion-content>
      </cds-accordion-panel>
      <cds-accordion-panel>
        <cds-accordion-header>Collapsed accordion panel</cds-accordion-header>
        <cds-accordion-content>Collapsed accordion content</cds-accordion-content>
      </cds-accordion-panel>
    </cds-accordion>
  `;
}
