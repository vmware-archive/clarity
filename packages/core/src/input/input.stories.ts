/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/input/register.js';
import { html } from 'lit-html';
import { getElementStorybookArgs, spreadProps, getElementStorybookArgTypes } from '@cds/core/internal';
import customElements from '../../dist/core/custom-elements.json';

export default {
  title: 'Stories/Input',
  component: 'cds-input',
  argTypes: getElementStorybookArgTypes('cds-input', customElements),
  parameters: {
    options: { showPanel: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=0%3A853',
    },
  },
};

export const API = (args: any) => {
  return html`
    <cds-input ...="${spreadProps(getElementStorybookArgs(args))}">
      <label>input</label>
      <input placeholder="placeholder text" />
      <cds-control-message .status=${args.status}>message text</cds-control-message>
    </cds-input>
  `;
};

export const input = () => {
  return html`
    <cds-input control-width="shrink">
      <label>input</label>
      <input placeholder="placeholder text" required />
    </cds-input>
  `;
};

export const vertical = () => {
  return html`
    <cds-form-group layout="vertical">
      <cds-input layout="vertical">
        <label>label</label>
        <input placeholder="name" />
        <cds-control-message>message text</cds-control-message>
      </cds-input>

      <cds-input layout="vertical">
        <label>disabled</label>
        <input placeholder="name" disabled />
        <cds-control-message>disabled message</cds-control-message>
      </cds-input>

      <cds-input layout="vertical">
        <label>error</label>
        <input placeholder="name" />
        <cds-control-message status="error">error message</cds-control-message>
      </cds-input>

      <cds-input layout="vertical">
        <label>success</label>
        <input placeholder="name" />
        <cds-control-message status="success">success message</cds-control-message>
      </cds-input>
    </cds-form-group>
  `;
};

export const horizontal = () => {
  return html`
    <cds-form-group layout="horizontal">
      <cds-input layout="horizontal">
        <label>label</label>
        <input placeholder="name" />
        <cds-control-message>message text</cds-control-message>
      </cds-input>

      <cds-input layout="horizontal">
        <label>disabled</label>
        <input placeholder="name" disabled />
        <cds-control-message>disabled message</cds-control-message>
      </cds-input>

      <cds-input layout="horizontal" status="error">
        <label>error</label>
        <input placeholder="name" />
        <cds-control-message status="error">error message</cds-control-message>
      </cds-input>

      <cds-input layout="horizontal" status="success">
        <label>success</label>
        <input placeholder="name" />
        <cds-control-message status="success">success message</cds-control-message>
      </cds-input>
    </cds-form-group>
  `;
};

export const compact = () => {
  return html`
    <cds-form-group layout="compact">
      <cds-input layout="compact">
        <label>label</label>
        <input placeholder="name" />
        <cds-control-message>message text</cds-control-message>
      </cds-input>

      <cds-input layout="compact">
        <label>disabled</label>
        <input placeholder="name" disabled />
        <cds-control-message>disabled message</cds-control-message>
      </cds-input>

      <cds-input layout="compact" status="error">
        <label>error</label>
        <input placeholder="name" />
        <cds-control-message status="error">error message</cds-control-message>
      </cds-input>

      <cds-input layout="compact" status="success">
        <label>success</label>
        <input placeholder="name" />
        <cds-control-message status="success">success message</cds-control-message>
      </cds-input>
    </cds-form-group>
  `;
};

export const inputWidth = () => {
  return html`
    <div cds-layout="vertical gap:lg">
      <cds-input layout="vertical" control-width="shrink">
        <label>vertical shrink width</label>
        <input placeholder="name" />
      </cds-input>

      <cds-input layout="horizontal" control-width="shrink">
        <label>horizontal shrink width</label>
        <input placeholder="name" />
      </cds-input>

      <cds-input layout="vertical" style="max-width: 300px">
        <label>vertical custom width</label>
        <input placeholder="name" />
      </cds-input>

      <cds-input layout="horizontal" style="max-width: 350px">
        <label>horizontal custom width</label>
        <input placeholder="name" />
      </cds-input>
    </div>
  `;
};

export const supportedTextTypes = () => {
  return html`
    <div cds-layout="vertical gap:lg">
      <cds-input>
        <label>Text</label>
        <input type="text" placeholder="name" />
      </cds-input>

      <cds-input>
        <label>Email</label>
        <input type="email" placeholder="test@test.com" />
      </cds-input>

      <cds-input>
        <label>Number</label>
        <input type="number" placeholder="age" />
      </cds-input>

      <cds-input>
        <label>Date</label>
        <input type="date" placeholder="date" />
      </cds-input>

      <cds-input>
        <label>Color</label>
        <input type="color" placeholder="color" value="#179BD3" />
      </cds-input>
    </div>
  `;
};

export const darkTheme = () => {
  return html`
    <cds-form-group layout="horizontal" cds-theme="dark">
      <cds-input layout="horizontal">
        <label>label</label>
        <input placeholder="name" />
        <cds-control-message>message text</cds-control-message>
      </cds-input>

      <cds-input layout="horizontal">
        <label>disabled</label>
        <input placeholder="name" disabled />
        <cds-control-message>disabled message</cds-control-message>
      </cds-input>

      <cds-input layout="horizontal" status="error">
        <label>error</label>
        <input placeholder="name" />
        <cds-control-message status="error">error message</cds-control-message>
      </cds-input>

      <cds-input layout="horizontal" status="success">
        <label>success</label>
        <input placeholder="name" />
        <cds-control-message status="success">success message</cds-control-message>
      </cds-input>
    </cds-form-group>
  `;
};

export const box = () => {
  return html`
    <style>
      [box] cds-input {
        --background: var(--cds-alias-object-container-background);
        --border-radius: var(--cds-alias-object-border-radius-100);
        --border: var(--cds-alias-object-border-width-100) solid var(--cds-alias-object-border-color);
        --border-bottom: 0;
        --padding: var(--cds-global-space-2) var(--cds-global-space-4) 0 var(--cds-global-space-4);
      }

      [box] cds-input input:focus {
        --border: var(--cds-alias-object-border-width-100) solid var(--cds-alias-status-info);
      }
    </style>
    <cds-form-group layout="vertical" box>
      <cds-input box>
        <label>box style</label>
        <input placeholder="name" />
        <cds-control-message>message text</cds-control-message>
      </cds-input>

      <cds-textarea box>
        <label>textarea</label>
        <textarea></textarea>
        <cds-control-message>message text</cds-control-message>
      </cds-textarea>
    </cds-form-group>
  `;
};
