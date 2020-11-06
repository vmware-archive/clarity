/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import '@cds/core/accordion/register.js';
import { CdsAccordionPanel } from '@cds/core/accordion';
import { getElementStorybookArgTypes, spreadProps, getElementStorybookArgs } from '@cds/core/internal';
import { html } from 'lit-html';
import customElements from '../../dist/core/custom-elements.json';

export default {
  title: 'Stories/Accordion',
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

export const AccordionAPI = (args: any) => {
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
        <cds-accordion-header>Expanded accordion panel</cds-accordion-header>
        <cds-accordion-content>
          <p cds-text="body">Expanded accordion content</p>
        </cds-accordion-content>
      </cds-accordion-panel>
      <cds-accordion-panel disabled>
        <cds-accordion-header>Disabled accordion panel</cds-accordion-header>
        <cds-accordion-content>
          <p cds-text="body">Disabled accordion content</p>
        </cds-accordion-content>
      </cds-accordion-panel>
      <cds-accordion-panel>
        <cds-accordion-header>Collapsed accordion panel</cds-accordion-header>
        <cds-accordion-content>
          <p cds-text="body">Collapsed accordion content</p>
        </cds-accordion-content>
      </cds-accordion-panel>
    </cds-accordion>
  `;
};

export const asyncAccordion = () => {
  function onExpandedChange() {
    const asyncPanel = document.getElementById('async-panel') as CdsAccordionPanel;
    const asyncPanelContent = asyncPanel.querySelector('cds-accordion-content');

    asyncPanelContent.innerHTML = `<div cds-layout="horizontal align:center"><cds-progress-circle size="md"></cds-progress-circle></div>`;
    asyncPanel.expanded = !asyncPanel.expanded;

    if (asyncPanel.expanded) {
      setTimeout(
        () => (asyncPanelContent.innerHTML = `<p cds-text="body">Asynchronously loaded panel content</p>`),
        3000
      );
    }
  }

  return html`
    <cds-accordion>
      <cds-accordion-panel expanded>
        <cds-accordion-header>Expanded accordion panel</cds-accordion-header>
        <cds-accordion-content>
          <p cds-text="body">Expanded accordion panel content</p>
        </cds-accordion-content>
      </cds-accordion-panel>
      <cds-accordion-panel id="async-panel" @expandedChange="${onExpandedChange}">
        <cds-accordion-header>Async accordion panel</cds-accordion-header>
        <cds-accordion-content></cds-accordion-content>
      </cds-accordion-panel>
      <cds-accordion-panel disabled>
        <cds-accordion-header>Disabled accordion panel</cds-accordion-header>
        <cds-accordion-content>
          <p cds-text="body">Disabled accordion content</p>
        </cds-accordion-content>
      </cds-accordion-panel>
    </cds-accordion>
  `;
};

export const darkTheme = () => {
  return html`
    <div cds-theme="dark">
      <cds-accordion>
        <cds-accordion-panel expanded>
          <cds-accordion-header>Expanded accordion panel</cds-accordion-header>
          <cds-accordion-content>
            <p cds-text="body">Expanded accordion content</p>
          </cds-accordion-content>
        </cds-accordion-panel>
        <cds-accordion-panel>
          <cds-accordion-header>Collapsed accordion panel</cds-accordion-header>
          <cds-accordion-content>
            <p cds-text="body">Collapsed accordion content</p>
          </cds-accordion-content>
        </cds-accordion-panel>
        <cds-accordion-panel disabled>
          <cds-accordion-header>Disabled accordion panel</cds-accordion-header>
          <cds-accordion-content>
            <p cds-text="body">Disabled accordion content</p>
          </cds-accordion-content>
        </cds-accordion-panel>
      </cds-accordion>
    </div>
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
