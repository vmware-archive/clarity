/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/modal/register.js';
import { getElementStorybookArgTypes, spreadProps, getElementStorybookArgs } from '@cds/core/internal';
import { html } from 'lit-html';
import customElements from '../../dist/core/custom-elements.json';

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

export const API = (args: any) => {
  return html`
    <cds-demo popover>
      <cds-modal __demo-mode ...="${spreadProps(getElementStorybookArgs(args))}">
        <cds-modal-header>
          <h3 cds-text="title">${args['cds-modal-header']}</h3>
        </cds-modal-header>
        <cds-modal-content>
          <p cds-text="body">${args['cds-modal-content']}</p>
        </cds-modal-content>
        <cds-modal-actions>
          ${args['cds-modal-actions']}
        </cds-modal-actions>
      </cds-modal>
    </cds-demo>
  `;
};

export const defaultSize = () => {
  return html`
    <cds-demo popover>
      <cds-modal __demo-mode>
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
};

export const small = () => {
  return html`
    <cds-demo popover>
      <cds-modal size="sm" __demo-mode>
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
};

export const large = () => {
  return html`
    <cds-demo popover>
      <cds-modal size="lg" __demo-mode>
        <cds-modal-header>
          <h3 cds-text="title">My Modal</h3>
        </cds-modal-header>
        <cds-modal-content>
          <p cds-text="body">Lorem Ipsum</p>
        </cds-modal-content>
        <cds-modal-actions>
          <cds-button action="outline">Cancel</cds-button>
          <cds-button>Ok</cds-button>
        </cds-modal-actions>
      </cds-modal>
    </cds-demo>
  `;
};

export const extraLarge = () => {
  return html`
    <cds-demo popover>
      <cds-modal size="xl" __demo-mode>
        <cds-modal-header>
          <h3 cds-text="title">My Modal</h3>
        </cds-modal-header>
        <cds-modal-content>
          <p cds-text="body">Lorem Ipsum</p>
        </cds-modal-content>
        <cds-modal-actions>
          <cds-button action="outline">Cancel</cds-button>
          <cds-button>Ok</cds-button>
        </cds-modal-actions>
      </cds-modal>
    </cds-demo>
  `;
};

export const focusTrap = () => {
  return html`
    <cds-modal>
      <cds-modal-header>
        <h3 cds-text="title">My Modal</h3>
      </cds-modal-header>
      <cds-modal-content>
        <p cds-text="body">Lorem Ipsum</p>
      </cds-modal-content>
      <cds-modal-actions>
        <cds-button action="outline">Cancel</cds-button>
        <cds-button>Ok</cds-button>
      </cds-modal-actions>
    </cds-modal>
  `;
};

export const darkTheme = () => {
  return html`
    <cds-demo popover cds-theme="dark">
      <cds-modal __demo-mode>
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
};

export const customStyles = () => {
  return html`
    <style>
      .modal-branding {
        --backdrop-color: #004b6b;
        --background-color: #e3f5fc;
        --border-color: #00567a;
        --close-icon-color: #00567a;
        --close-icon-color-hover: #004b6b;
        --content-box-shadow-color: rgba(0, 54, 77, 0.3);
      }
    </style>
    <cds-demo popover>
      <cds-modal class="modal-branding" __demo-mode>
        <cds-modal-header>
          <h3 cds-text="title">My Modal</h3>
        </cds-modal-header>
        <cds-modal-content cds-layout="grid cols:6 p-y:sm">
          <p cds-text="body">Lorem Ipsum</p>
          <p cds-text="body">Lorem Ipsum</p>
        </cds-modal-content>
        <cds-modal-actions cds-layout="horizontal gap:md">
          <cds-button action="outline">prev</cds-button>
          <cds-button cds-layout="align:right">next</cds-button>
        </cds-modal-actions>
      </cds-modal>
    </cds-demo>
  `;
};
