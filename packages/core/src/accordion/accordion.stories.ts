/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import '@clr/core/accordion/register.js';
import { getElementStorybookArgTypes, spreadProps, getElementStorybookArgs } from '@clr/core/internal';
import { html } from 'lit-html';
import customElements from '../../dist/core/custom-elements.json';

export default {
  title: 'Components (Preview)/Accordion/Stories',
  component: 'cds-accordion',
  argTypes: getElementStorybookArgTypes('cds-accordion', customElements),
  parameters: {
    options: { showPanel: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=1007%3A0',
    },
  },
};

export const API = (args: any) => {
  return html`
    <cds-accordion ...="${spreadProps(getElementStorybookArgs(args))}">
      <cds-accordion-panel expanded>
        <cds-accordion-header>accordion header</cds-accordion-header>
        <cds-accordion-content>accordion content</cds-accordion-content>
      </cds-accordion-panel>
    </cds-accordion>
  `;
};

export const basicAccordion = () => {
  return html`
    <cds-accordion>
      <cds-accordion-panel expanded>
        <cds-accordion-header>accordion header</cds-accordion-header>
        <cds-accordion-content>accordion content</cds-accordion-content>
      </cds-accordion-panel>
    </cds-accordion>
  `;
};

export const customStyles = () => {
  return html`
    <style>
      cds-accordion.app-custom {
        --border-color: midnightblue;
        --border-width: 2px;
        --border-radius: 3px;
      }
    </style>
    <cds-accordion class="app-custom">
      <cds-accordion-panel expanded>
        <cds-accordion-header>accordion header</cds-accordion-header>
        <cds-accordion-content>accordion content</cds-accordion-content>
      </cds-accordion-panel>
    </cds-accordion>
  `;
};
