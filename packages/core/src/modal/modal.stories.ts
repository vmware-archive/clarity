/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { cssGroup, propertiesGroup, setStyles } from '@clr/core/internal';
import '@clr/core/modal';
import { action } from '@storybook/addon-actions';
import { boolean, color as colorKnob, select, text } from '@storybook/addon-knobs';
import { html } from 'lit-html';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';

export default {
  title: 'Components/Modal/Stories',
  component: 'cds-modal',
  parameters: {
    options: { showPanel: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=0%3A548',
    },
  },
};

function htmlDecode(input: string) {
  const e = document.createElement('div');
  e.innerHTML = input;
  return e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue;
}

export const API = () => {
  const modalHeaderSlot = text('cds-modal-header', '<h3 cds-text="title">My Modal</h3>', propertiesGroup);
  const modalContentSlot = text(
    'cds-modal-content',
    '<div cds-layout="vertical gap:lg p-y:sm"><p cds-text="body">This is a modal.</p></div>',
    propertiesGroup
  );
  const modalFooterSlot = text(
    'cds-modal-footer',
    '<div cds-layout="horizontal align:right"><cds-button>Ok</cds-button></div>',
    propertiesGroup
  );

  const closable = boolean('closable', true, propertiesGroup);
  const size = select('size', { '(default)': 'default', sm: 'sm', lg: 'lg', xl: 'xl' }, undefined, propertiesGroup);

  const backdropOpacity = text('--backdrop-opacity', undefined, cssGroup);
  const backdropColor = colorKnob('--backdrop-color', undefined, cssGroup);
  const backgroundColor = colorKnob('--background-color', undefined, cssGroup);
  const boxShadowColor = colorKnob('--box-shadow-color', undefined, cssGroup);
  const borderRadius = text('--border-radius', undefined, cssGroup);
  const borderColor = colorKnob('--border-color', undefined, cssGroup);
  const closeIconColor = colorKnob('--close-icon-color', undefined, cssGroup);
  const closeIconColorHover = colorKnob('--close-icon-color-hover', undefined, cssGroup);
  const contentBoxShadowColor = colorKnob('--content-box-shadow-color', undefined, cssGroup);
  const width = text('--width', undefined, cssGroup);

  return html`
    <style>
      cds-modal {
        ${setStyles({
        '--backdrop-opacity': backdropOpacity,
        '--backdrop-color': backdropColor,
        '--background-color': backgroundColor,
        '--box-shadow-color': boxShadowColor,
        '--border-radius': borderRadius,
        '--border-color': borderColor,
        '--close-icon-color': closeIconColor,
        '--close-icon-color-hover': closeIconColorHover,
        '--content-box-shadow-color': contentBoxShadowColor,
        '--width': width,
      })}
      .sbdocs-preview > div[class^="css-"], .sbdocs-preview > div[class^="css-"] > div[class^="css-"]:first-child {
        height: 500px;
      }
    </style>
    <cds-modal __demo-mode .closable=${closable} .size=${size} @closeChange=${action('closeChange')}>
      <cds-modal-header>${unsafeHTML(htmlDecode(modalHeaderSlot))}</cds-modal-header>
      <cds-modal-content>
        ${unsafeHTML(htmlDecode(modalContentSlot))}
      </cds-modal-content>
      <cds-modal-actions>
        ${unsafeHTML(htmlDecode(modalFooterSlot))}
      </cds-modal-actions>
    </cds-modal>
  `;
};

export const defaultSize = () => {
  return html`
    <style>
      .sbdocs-preview > div[class^='css-'],
      .sbdocs-preview > div[class^='css-'] > div[class^='css-']:first-child {
        height: 500px;
      }
    </style>
    <cds-modal __demo-mode>
      <cds-modal-header>
        <h3 cds-text="title">My Modal</h3>
      </cds-modal-header>
      <cds-modal-content>
        <div cds-layout="vertical gap:lg p-y:sm">
          <p cds-text="body">Lorem Ipsum</p>
        </div>
      </cds-modal-content>
      <cds-modal-actions>
        <div cds-layout="horizontal gap:md align:right">
          <cds-button action="outline">Cancel</cds-button>
          <cds-button>Ok</cds-button>
        </div>
      </cds-modal-actions>
    </cds-modal>
  `;
};

export const small = () => {
  return html`
    <style>
      .sbdocs-preview > div[class^='css-'],
      .sbdocs-preview > div[class^='css-'] > div[class^='css-']:first-child {
        height: 500px;
      }
    </style>
    <cds-modal size="sm" __demo-mode>
      <cds-modal-header>
        <h3 cds-text="title">My Modal</h3>
      </cds-modal-header>
      <cds-modal-content>
        <div cds-layout="vertical gap:lg p-y:sm">
          <p cds-text="body">Lorem Ipsum</p>
        </div>
      </cds-modal-content>
      <cds-modal-actions>
        <div cds-layout="horizontal gap:md align:right">
          <cds-button action="outline">Cancel</cds-button>
          <cds-button>Ok</cds-button>
        </div>
      </cds-modal-actions>
    </cds-modal>
  `;
};

export const large = () => {
  return html`
    <style>
      .sbdocs-preview > div[class^='css-'],
      .sbdocs-preview > div[class^='css-'] > div[class^='css-']:first-child {
        height: 500px;
      }
    </style>
    <cds-modal size="lg" __demo-mode>
      <cds-modal-header>
        <h3 cds-text="title">My Modal</h3>
      </cds-modal-header>
      <cds-modal-content>
        <div cds-layout="vertical gap:lg p-y:sm">
          <p cds-text="body">Lorem Ipsum</p>
        </div>
      </cds-modal-content>
      <cds-modal-actions>
        <div cds-layout="horizontal gap:md align:right">
          <cds-button action="outline">Cancel</cds-button>
          <cds-button>Ok</cds-button>
        </div>
      </cds-modal-actions>
    </cds-modal>
  `;
};

export const extraLarge = () => {
  return html`
    <style>
      .sbdocs-preview > div[class^='css-'],
      .sbdocs-preview > div[class^='css-'] > div[class^='css-']:first-child {
        height: 500px;
      }
    </style>
    <cds-modal size="xl" __demo-mode>
      <cds-modal-header>
        <h3 cds-text="title">My Modal</h3>
      </cds-modal-header>
      <cds-modal-content>
        <div cds-layout="vertical gap:lg p-y:sm">
          <p cds-text="body">Lorem Ipsum</p>
        </div>
      </cds-modal-content>
      <cds-modal-actions>
        <div cds-layout="horizontal gap:md align:right">
          <cds-button action="outline">Cancel</cds-button>
          <cds-button>Ok</cds-button>
        </div>
      </cds-modal-actions>
    </cds-modal>
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
      .sbdocs-preview > div[class^='css-'],
      .sbdocs-preview > div[class^='css-'] > div[class^='css-']:first-child {
        height: 500px;
      }
    </style>
    <cds-modal class="modal-branding" __demo-mode>
      <cds-modal-header>
        <h3 cds-text="title">My Modal</h3>
      </cds-modal-header>
      <cds-modal-content>
        <div cds-layout="vertical gap:lg p-y:sm">
          <p cds-text="body">Lorem Ipsum</p>
        </div>
      </cds-modal-content>
      <cds-modal-actions>
        <div cds-layout="horizontal gap:md align:right">
          <cds-button action="outline">Cancel</cds-button>
          <cds-button>Ok</cds-button>
        </div>
      </cds-modal-actions>
    </cds-modal>
  `;
};
