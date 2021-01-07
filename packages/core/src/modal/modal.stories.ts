/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/modal/register.js';
import { getElementStorybookArgTypes, spreadProps, getElementStorybookArgs } from '@cds/core/internal';
import { html } from 'lit-html';
import customElements from '../../dist/core/custom-elements.json';
import { CdsModal } from '@cds/core/modal';

export default {
  title: 'Stories/Modal',
  component: 'cds-modal',
  argTypes: getElementStorybookArgTypes('cds-modal', customElements),
  parameters: {
    options: { showPanel: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=0%3A548',
    },
  },
};

export function API(args: any) {
  let initted = false;
  const modalId = 'api-modal';

  function showApiModal() {
    const myModal = document.getElementById(modalId) as CdsModal;
    myModal.removeAttribute('hidden');

    if (!initted) {
      myModal.addEventListener('closeChange', () => {
        myModal.setAttribute('hidden', 'true');
      });
      initted = true;
    }
  }

  return html`
    <cds-demo popover>
      <cds-button status="primary" type="button" @click=${showApiModal}>Show Modal</cds-button>
      <cds-modal ...="${spreadProps(getElementStorybookArgs(args))}" id="${modalId}">
        <cds-modal-header>
          <h3 cds-text="title">${args['cds-modal-header']}</h3>
        </cds-modal-header>
        <cds-modal-content>
          <p cds-text="body">${args['cds-modal-content']}</p>
        </cds-modal-content>
        <cds-modal-actions> ${args['cds-modal-actions']} </cds-modal-actions>
      </cds-modal>
    </cds-demo>
  `;
}

/** @website */
export function small() {
  return html`
    <cds-demo popover>
      <cds-modal _demo-mode size="sm">
        <cds-modal-header>
          <h3 cds-text="title">Small Modal</h3>
        </cds-modal-header>
        <cds-modal-content>
          <p cds-text="body">Place holder text for the small modal example.</p>
        </cds-modal-content>
        <cds-modal-actions>
          <cds-button action="outline">Cancel</cds-button>
          <cds-button>Ok</cds-button>
        </cds-modal-actions>
      </cds-modal>
    </cds-demo>
  `;
}

/** @website */
export function defaultSize() {
  return html`
    <cds-demo popover>
      <cds-modal _demo-mode>
        <cds-modal-header>
          <h3 cds-text="title">Modal Example</h3>
        </cds-modal-header>
        <cds-modal-content>
          <p cds-text="body">Place holder text for the default sized modal example.</p>
        </cds-modal-content>
        <cds-modal-actions>
          <cds-button action="outline">Cancel</cds-button>
          <cds-button>Ok</cds-button>
        </cds-modal-actions>
      </cds-modal>
    </cds-demo>
  `;
}

/** @website */
export function large() {
  return html`
    <cds-demo popover>
      <cds-modal _demo-mode size="lg">
        <cds-modal-header>
          <h3 cds-text="title">Large Modal Example</h3>
        </cds-modal-header>
        <cds-modal-content>
          <p cds-text="body">Place holder text for the large modal example.</p>
        </cds-modal-content>
        <cds-modal-actions>
          <cds-button action="outline">Cancel</cds-button>
          <cds-button>Ok</cds-button>
        </cds-modal-actions>
      </cds-modal>
    </cds-demo>
  `;
}

/** @website */
export function extraLarge() {
  return html`
    <cds-demo popover>
      <cds-modal _demo-mode size="xl">
        <cds-modal-header>
          <h3 cds-text="title">Extra Large Modal Example</h3>
        </cds-modal-header>
        <cds-modal-content>
          <p cds-text="body">Place holder text for the extra large modal example.</p>
        </cds-modal-content>
        <cds-modal-actions>
          <cds-button action="outline">Cancel</cds-button>
          <cds-button>Ok</cds-button>
        </cds-modal-actions>
      </cds-modal>
    </cds-demo>
  `;
}

/** @website */
export function darkTheme() {
  return html`
    <cds-demo popover cds-theme="dark">
      <cds-modal _demo-mode>
        <cds-modal-header>
          <h3 cds-text="title">My Modal</h3>
        </cds-modal-header>
        <cds-modal-content>
          <p cds-text="body">Lorem Ipsum</p>
          <p cds-text="body">Lorem Ipsum</p>
        </cds-modal-content>
        <cds-modal-actions>
          <cds-button action="outline">Cancel</cds-button>
          <cds-button>Ok</cds-button>
        </cds-modal-actions>
      </cds-modal>
    </cds-demo>
  `;
}

/** @website */
export function customStyles() {
  return html`
    <style>
      .modal-branding {
        --backdrop-background: orange;
        --background: #444454;
        --border-color: #000000;
        --close-icon-color: #eeeeee;
        --close-icon-color-hover: #ffffff;
        --content-box-shadow-color: rgba(0, 54, 77, 0.3);

        --cds-global-typography-color-400: #d9d9d9;
        --cds-global-typography-color-300: #ffffff;
        --cds-alias-object-interaction-color: #d9d9d9;
        --cds-alias-object-interaction-color-hover: #ffffff;
      }
    </style>

    <cds-demo popover>
      <cds-modal _demo-mode class="modal-branding" size="lg">
        <cds-modal-header>
          <h3 cds-text="title">Customizing Modal Styles</h3>
        </cds-modal-header>
        <cds-modal-content>
          <p cds-text="body">This example shows how modal visual styles can be changed and customized.</p>
        </cds-modal-content>
        <cds-modal-actions cds-layout="horizontal gap:md">
          <cds-button status="inverse" action="outline">Click to Close</cds-button>
          <cds-button status="inverse" cds-layout="align:right">Click to Confirm</cds-button>
        </cds-modal-actions>
      </cds-modal>
    </cds-demo>
  `;
}

export function focus() {
  let initted = false;
  const modalId = 'modal-focus';

  function showFocusModal() {
    const myOverlay = document.getElementById(modalId) as CdsModal;
    myOverlay.removeAttribute('hidden');

    if (!initted) {
      myOverlay.addEventListener('closeChange', () => {
        myOverlay.setAttribute('hidden', 'true');
      });
      initted = true;
    }
  }

  function hideFocusModal() {
    const myOverlay = document.getElementById(modalId) as CdsModal;
    myOverlay.closeOverlay();
  }

  return html`
    <cds-button status="primary" type="button" @click=${showFocusModal}>Show Focus Demo</cds-button>
    <cds-modal hidden id="${modalId}">
      <cds-modal-header>
        <h3 cds-text="title" cds-first-focus tabindex="-1">Managing Focus in a Modal</h3>
      </cds-modal-header>
      <cds-modal-content>
        <p cds-text="body">This example shows how focus can be managed inside a modal.</p>
      </cds-modal-content>
      <cds-modal-actions>
        <cds-button @click=${hideFocusModal}>Ok</cds-button>
      </cds-modal-actions>
    </cds-modal>
  `;
}

export function scrollContent() {
  let initted = false;
  const modalId = 'modal-default';

  function showDefaultModal() {
    const myOverlay = document.getElementById(modalId) as CdsModal;
    myOverlay.removeAttribute('hidden');

    if (!initted) {
      myOverlay.addEventListener('closeChange', () => {
        myOverlay.setAttribute('hidden', 'true');
      });
      initted = true;
    }
  }

  function hideDefaultModal() {
    const myOverlay = document.getElementById(modalId) as CdsModal;
    myOverlay.closeOverlay();
  }

  return html`
    <cds-button status="primary" type="button" @click=${showDefaultModal}>Show Modal</cds-button>
    <cds-modal hidden id="${modalId}">
      <cds-modal-header>
        <h3 cds-text="title">Default-Sized Modal</h3>
      </cds-modal-header>
      <cds-modal-content>
        <p>Demo to show how to scroll through a modal content area with a lot of content.</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p cds-text="body">
          A still more glorious dawn awaits globular star cluster science preserve and cherish that pale blue dot
          citizens of distant epochs take root and flourish. White dwarf the carbon in our apple pies tingling of the
          spine corpus callosum vanquish the impossible corpus callosum? With pretty stories for which there's little
          good evidence invent the universe Orion's sword invent the universe are creatures of the cosmos something
          incredible is waiting to be known.
        </p>
        <p cds-text="body">
          Vangelis colonies consciousness globular star cluster cosmic fugue courage of our questions. Astonishment
          hydrogen atoms courage of our questions bits of moving fluff two ghostly white figures in coveralls and
          helmets are softly dancing extraplanetary. With pretty stories for which there's little good evidence concept
          of the number one something incredible is waiting to be known something incredible is waiting to be known
          something incredible is waiting to be known rich in heavy atoms.
        </p>
        <form><label for="formfield">Ohai</label><input type="text" id="formfield" /></form>
        <p cds-text="body">
          Extraordinary claims require extraordinary evidence corpus callosum galaxies inconspicuous motes of rock and
          gas are creatures of the cosmos star stuff harvesting star light? Bits of moving fluff finite but unbounded
          finite but unbounded kindling the energy hidden in matter shores of the cosmic ocean finite but unbounded?
          Dispassionate extraterrestrial observer the carbon in our apple pies white dwarf shores of the cosmic ocean
          two ghostly white figures in coveralls and helmets are softly dancing a mote of dust suspended in a sunbeam.
        </p>
        <p>...</p>
        <p>...</p>
        <p>...</p>
        <p cds-text="body">
          Quasar shores of the cosmic ocean stirred by starlight Rig Veda vanquish the impossible realm of the galaxies.
          Concept of the number one star stuff harvesting star light extraplanetary star stuff harvesting star light the
          sky calls to us two ghostly white figures in coveralls and helmets are softly dancing? The only home we've
          ever known concept of the number one rich in heavy atoms across the centuries concept of the number one
          Orion's sword and billions upon billions upon billions upon billions upon billions upon billions upon
          billions.
        </p>
      </cds-modal-content>
      <cds-modal-actions>
        <cds-button @click=${hideDefaultModal} action="outline">Cancel</cds-button>
        <cds-button @click=${hideDefaultModal}>Ok</cds-button>
      </cds-modal-actions>
    </cds-modal>
  `;
}
