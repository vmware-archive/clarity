/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
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

export function API(args: any) {
  return html`
    <cds-accordion ...="${spreadProps(getElementStorybookArgs(args))}">
      <cds-accordion-panel expanded>
        <cds-accordion-header>accordion header</cds-accordion-header>
        <cds-accordion-content>accordion content</cds-accordion-content>
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
}

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

export const interactive = () => {
  const onExpandedChange = {
    // handleEvent method is required.
    handleEvent(e: any) {
      const myPanel = e.target as any;
      if (!myPanel.disabled) {
        if (e.target.id === 'async' && e.detail === true) {
          const asyncPanel = e.target.querySelector('cds-accordion-content');
          asyncPanel.innerHTML = `<div cds-layout="horizontal align:center"><cds-progress-circle size="md"></cds-progress-circle></div>`;
          const timerId = setTimeout(() => {
            asyncPanel.innerHTML = `<p cds-text="body">Paroxysm of global death quasar citizens of distant epochs dispassionate extraterrestrial observer laws of physics colonies. How far away stirred by starlight bits of moving fluff as a patch of light descended from astronomers across the centuries. Invent the universe finite but unbounded the ash of stellar alchemy made in the interiors of collapsing stars not a sunrise but a galaxyrise hearts of the stars. Citizens of distant epochs a still more glorious dawn awaits the carbon in our apple pies hearts of the stars a very small stage in a vast cosmic arena the carbon in our apple pies and billions upon billions upon billions upon billions upon billions upon billions upon billions.</p>`;
            clearTimeout(timerId);
          }, 3000);
        }
        myPanel.expanded = e.detail;
      }
    },
    // event listener objects can also define zero or more of the event
    // listener options: capture, passive, and once.
    capture: true,
  };

  return html`
    <cds-accordion>
      <cds-accordion-panel cds-motion="off" expanded @expandedChange="${onExpandedChange}">
        <cds-accordion-header>Static panel #1</cds-accordion-header>
        <cds-accordion-content>
          <p cds-text="body">Expanded accordion panel content</p>
        </cds-accordion-content>
      </cds-accordion-panel>
      <cds-accordion-panel cds-motion="off" @expandedChange="${onExpandedChange}">
        <cds-accordion-header>Static panel #2</cds-accordion-header>
        <cds-accordion-content>
          <p cds-text="body" cds-layout="m-b:md">
            Rogue rich in heavy atoms Vangelis preserve and cherish that pale blue dot venture intelligent beings.
            Encyclopaedia galactica encyclopaedia galactica the carbon in our apple pies not a sunrise but a galaxyrise
            vanquish the impossible encyclopaedia galactica.
          </p>
          <p cds-text="body">
            Encyclopaedia galactica across the centuries with pretty stories for which there's little good evidence
            extraordinary claims require extraordinary evidence dream of the mind's eye bits of moving fluff?
            Extraordinary claims require extraordinary evidence the sky calls to us made in the interiors of collapsing
            stars citizens of distant epochs Sea of Tranquility concept of the number one and billions upon billions
            upon billions upon billions upon billions upon billions upon billions.
          </p>
        </cds-accordion-content>
      </cds-accordion-panel>
      <cds-accordion-panel cds-motion="off" disabled @expandedChange="${onExpandedChange}">
        <cds-accordion-header>Disabled accordion panel</cds-accordion-header>
        <cds-accordion-content>
          <p cds-text="body">Disabled accordion content</p>
        </cds-accordion-content>
      </cds-accordion-panel>
      <cds-accordion-panel cds-motion="off" @expandedChange="${onExpandedChange}">
        <cds-accordion-header>Static panel #3</cds-accordion-header>
        <cds-accordion-content>
          <p cds-text="body">
            Finite but unbounded stirred by starlight vanquish the impossible the ash of stellar alchemy two ghostly
            white figures in coveralls and helmets are softly dancing muse.
          </p>
        </cds-accordion-content>
      </cds-accordion-panel>
    </cds-accordion>

    <p>&nbsp;</p>

    <cds-accordion>
      <cds-accordion-panel cds-motion="on" expanded @expandedChange="${onExpandedChange}">
        <cds-accordion-header>Accordion panel #1</cds-accordion-header>
        <cds-accordion-content>
          <p cds-text="body">Expanded accordion panel content</p>
        </cds-accordion-content>
      </cds-accordion-panel>
      <cds-accordion-panel cds-motion="on" @expandedChange="${onExpandedChange}">
        <cds-accordion-header>Accordion panel #2</cds-accordion-header>
        <cds-accordion-content>
          <p cds-text="body" cds-layout="m-b:md">
            Rogue rich in heavy atoms Vangelis preserve and cherish that pale blue dot venture intelligent beings.
            Encyclopaedia galactica encyclopaedia galactica the carbon in our apple pies not a sunrise but a galaxyrise
            vanquish the impossible encyclopaedia galactica.
          </p>
          <p cds-text="body">
            Encyclopaedia galactica across the centuries with pretty stories for which there's little good evidence
            extraordinary claims require extraordinary evidence dream of the mind's eye bits of moving fluff?
            Extraordinary claims require extraordinary evidence the sky calls to us made in the interiors of collapsing
            stars citizens of distant epochs Sea of Tranquility concept of the number one and billions upon billions
            upon billions upon billions upon billions upon billions upon billions.
          </p>
        </cds-accordion-content>
      </cds-accordion-panel>
      <cds-accordion-panel id="async" @expandedChange="${onExpandedChange}">
        <cds-accordion-header>Async accordion panel</cds-accordion-header>
        <cds-accordion-content></cds-accordion-content>
      </cds-accordion-panel>
      <cds-accordion-panel cds-motion="on" disabled @expandedChange="${onExpandedChange}">
        <cds-accordion-header>Disabled accordion panel</cds-accordion-header>
        <cds-accordion-content>
          <p cds-text="body">Disabled accordion content</p>
        </cds-accordion-content>
      </cds-accordion-panel>
      <cds-accordion-panel cds-motion="on" @expandedChange="${onExpandedChange}">
        <cds-accordion-header>Accordion panel #3</cds-accordion-header>
        <cds-accordion-content>
          <p cds-text="body">
            Finite but unbounded stirred by starlight vanquish the impossible the ash of stellar alchemy two ghostly
            white figures in coveralls and helmets are softly dancing muse.
          </p>
        </cds-accordion-content>
      </cds-accordion-panel>
    </cds-accordion>
  `;
};

/** @website */
export function darkTheme() {
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
}

/** @website */
export function customStyles() {
  return html`
    <style>
      .app-custom {
        --border-color: midnightblue;
        --border-radius: 0;
        --border-width: 2px;

        --cds-alias-object-interaction-background-selected: lightskyblue;
        --cds-alias-object-interaction-background-hover: lightskyblue;
        --cds-alias-object-interaction-background-active: cornflowerblue;
      }
    </style>
    <cds-accordion class="app-custom">
      <cds-accordion-panel expanded>
        <cds-accordion-header>Item 1</cds-accordion-header>
        <cds-accordion-content>Content 1</cds-accordion-content>
      </cds-accordion-panel>
      <cds-accordion-panel>
        <cds-accordion-header>Item 2</cds-accordion-header>
        <cds-accordion-content>Content 2</cds-accordion-content>
      </cds-accordion-panel>
      <cds-accordion-panel>
        <cds-accordion-header>Item 3</cds-accordion-header>
        <cds-accordion-content>Content 3</cds-accordion-content>
      </cds-accordion-panel>
    </cds-accordion>
  `;
}

export function stackview() {
  return html`
    <style>
      #stackview-demo cds-divider {
        margin: 0 calc(var(--cds-global-space-11) * -1);
        width: calc(100% + calc(var(--cds-global-space-11) * 2));
      }
    </style>
    <cds-accordion id="stackview-demo">
      <cds-accordion-panel>
        <cds-accordion-header>
          <div cds-layout="grid cols:6">
            <p cds-text="secondary">Panel One</p>
            <p cds-text="secondary">Content One</p>
          </div>
        </cds-accordion-header>
        <cds-accordion-content></cds-accordion-content>
      </cds-accordion-panel>
      <cds-accordion-panel expanded>
        <cds-accordion-header>
          <div cds-layout="grid cols:6">
            <p cds-text="secondary">Panel Two</p>
            <p cds-text="secondary">Content Two</p>
          </div>
        </cds-accordion-header>
        <cds-accordion-content>
          <div cds-layout="vertical gap:md">
            <div cds-layout="grid cols:6 gap:lg">
              <p cds-text="secondary">Panel Two</p>
              <p cds-text="secondary">Content Two</p>
            </div>
            <cds-divider></cds-divider>
            <div cds-layout="grid cols:6 gap:lg">
              <p cds-text="secondary">Panel Two</p>
              <p cds-text="secondary">Content Two</p>
            </div>
            <cds-divider></cds-divider>
            <div cds-layout="grid cols:6 gap:lg">
              <p cds-text="secondary">Panel Two</p>
              <p cds-text="secondary">Content Two</p>
            </div>
          </div>
        </cds-accordion-content>
      </cds-accordion-panel>
      <cds-accordion-panel>
        <cds-accordion-header>
          <div cds-layout="grid cols:6">
            <p cds-text="secondary">Panel Three</p>
            <p cds-text="secondary">Content Three</p>
          </div>
        </cds-accordion-header>
        <cds-accordion-content></cds-accordion-content>
      </cds-accordion-panel>
    </cds-accordion>
  `;
}
