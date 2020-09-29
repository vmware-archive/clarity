/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import '@clr/core/accordion/register.js';
import '@clr/core/progress-circle/register.js';
import { getElementStorybookArgTypes, spreadProps, getElementStorybookArgs } from '@clr/core/internal';
import { action } from '@storybook/addon-actions';
import { html } from 'lit-html';
import customElements from '../../dist/core/custom-elements.json';
import { CdsAccordionPanel } from './accordion-panel.element';

export default {
  title: 'Components (Preview)/Accordion Panel/Stories',
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

export const API = (args: any) => {
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
};

export const basicAccordion = () => {
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
};

export const asyncAccordion = () => {
  function onExpandedChange() {
    const asyncPanel = document.getElementById('async-panel') as CdsAccordionPanel;
    const asyncPanelContent = asyncPanel.querySelector('cds-accordion-content');

    asyncPanel.expanded = !asyncPanel.expanded;
    asyncPanelContent.innerHTML = `<cds-progress-circle></cds-progress-circle>`;

    if (asyncPanel.expanded) {
      setTimeout(() => (asyncPanelContent.innerHTML = `Asynchronously loaded panel content`), 3000);
    }
  }

  return html`
    <cds-accordion>
      <cds-accordion-panel expanded>
        <cds-accordion-header>Expanded accordion panel</cds-accordion-header>
        <cds-accordion-content>Expanded accordion panel content</cds-accordion-content>
      </cds-accordion-panel>
      <cds-accordion-panel id="async-panel" @expandedChange="${onExpandedChange}">
        <cds-accordion-header>Async accordion panel</cds-accordion-header>
        <cds-accordion-content></cds-accordion-content>
      </cds-accordion-panel>
    </cds-accordion>
  `;
};

export const customStyles = () => {
  return html`
    <style>
      .app-custom {
        --border-color: midnightblue;
        --header-color: aliceblue;
        --header-font-weight: bold;
        --header-background: LightSkyBlue;
        --header-open-background: CornflowerBlue;
        --icon-color: midnightblue;
      }
    </style>
    <cds-accordion>
      <cds-accordion-panel class="app-custom" expanded>
        <cds-accordion-header>Item 1</cds-accordion-header>
        <cds-accordion-content>Content 1</cds-accordion-content>
      </cds-accordion-panel>
      <cds-accordion-panel class="app-custom">
        <cds-accordion-header>Item 2</cds-accordion-header>
        <cds-accordion-content>Content 2</cds-accordion-content>
      </cds-accordion-panel>
      <cds-accordion-panel class="app-custom">
        <cds-accordion-header>Item 3</cds-accordion-header>
        <cds-accordion-content>Content 3</cds-accordion-content>
      </cds-accordion-panel>
    </cds-accordion>
  `;
};
