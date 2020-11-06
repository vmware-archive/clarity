/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/textarea/register.js';
import { html } from 'lit-html';
import { getElementStorybookArgs, spreadProps, getElementStorybookArgTypes } from '@cds/core/internal';
import customElements from '../../dist/core/custom-elements.json';

export default {
  title: 'Stories/Textarea',
  component: 'cds-textarea',
  argTypes: getElementStorybookArgTypes('cds-textarea', customElements),
  parameters: {
    options: { showPanel: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=0%3A861',
    },
  },
};

export const API = (args: any) => {
  return html`
    <cds-textarea ...="${spreadProps(getElementStorybookArgs(args))}">
      <label>textarea</label>
      <textarea></textarea>
      <cds-control-message .status=${args.status}>message text</cds-control-message>
    </cds-textarea>
  `;
};

export const textarea = () => {
  return html`
    <cds-textarea control-width="shrink">
      <label>textarea</label>
      <textarea></textarea>
      <cds-control-message>message text</cds-control-message>
    </cds-textarea>
  `;
};

export const vertical = () => {
  return html`
    <cds-form-group layout="vertical">
      <cds-textarea layout="vertical">
        <label>label</label>
        <textarea></textarea>
        <cds-control-message>message text</cds-control-message>
      </cds-textarea>

      <cds-textarea layout="vertical">
        <label>disabled</label>
        <textarea disabled></textarea>
        <cds-control-message>disabled message</cds-control-message>
      </cds-textarea>

      <cds-textarea layout="vertical" status="error">
        <label>error status</label>
        <textarea></textarea>
        <cds-control-message status="error">error message</cds-control-message>
      </cds-textarea>

      <cds-textarea layout="vertical" status="success">
        <label>success status</label>
        <textarea></textarea>
        <cds-control-message status="success">success message</cds-control-message>
      </cds-textarea>
    </cds-form-group>
  `;
};

export const horizontal = () => {
  return html`
    <cds-form-group layout="horizontal">
      <cds-textarea layout="horizontal">
        <label>label</label>
        <textarea></textarea>
        <cds-control-message>message text</cds-control-message>
      </cds-textarea>

      <cds-textarea layout="horizontal">
        <label>disabled</label>
        <textarea disabled></textarea>
        <cds-control-message>disabled message</cds-control-message>
      </cds-textarea>

      <cds-textarea layout="horizontal" status="error">
        <label>error status</label>
        <textarea></textarea>
        <cds-control-message status="error">error message</cds-control-message>
      </cds-textarea>

      <cds-textarea layout="horizontal" status="success">
        <label>success status</label>
        <textarea></textarea>
        <cds-control-message status="success">success message</cds-control-message>
      </cds-textarea>
    </cds-form-group>
  `;
};

export const compact = () => {
  return html`
    <cds-form-group layout="compact">
      <cds-textarea layout="compact">
        <label style="max-width: 180px">label</label>
        <textarea></textarea>
        <cds-control-message>message text</cds-control-message>
      </cds-textarea>

      <cds-textarea layout="compact">
        <label>disabled</label>
        <textarea disabled></textarea>
        <cds-control-message>disabled message</cds-control-message>
      </cds-textarea>

      <cds-textarea layout="compact" status="error">
        <label>error status</label>
        <textarea></textarea>
        <cds-control-message status="error">error message</cds-control-message>
      </cds-textarea>

      <cds-textarea layout="compact" status="success">
        <label>success status</label>
        <textarea></textarea>
        <cds-control-message status="success">success message</cds-control-message>
      </cds-textarea>
    </cds-form-group>
  `;
};

export const darkTheme = () => {
  return html`
    <cds-form-group layout="horizontal" cds-theme="dark">
      <cds-textarea layout="horizontal">
        <label>label</label>
        <textarea></textarea>
        <cds-control-message>message text</cds-control-message>
      </cds-textarea>

      <cds-textarea layout="horizontal">
        <label>disabled</label>
        <textarea disabled></textarea>
        <cds-control-message>disabled message</cds-control-message>
      </cds-textarea>

      <cds-textarea layout="horizontal" status="error">
        <label>error status</label>
        <textarea></textarea>
        <cds-control-message status="error">error message</cds-control-message>
      </cds-textarea>

      <cds-textarea layout="horizontal" status="success">
        <label>success status</label>
        <textarea></textarea>
        <cds-control-message status="success">success message</cds-control-message>
      </cds-textarea>
    </cds-form-group>
  `;
};
