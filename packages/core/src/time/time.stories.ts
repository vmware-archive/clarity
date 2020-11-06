/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/time/register.js';
import { html } from 'lit-html';
import { getElementStorybookArgs, spreadProps, getElementStorybookArgTypes } from '@cds/core/internal';
import customElements from '../../dist/core/custom-elements.json';

export default {
  title: 'Stories/Time',
  component: 'cds-time',
  argTypes: getElementStorybookArgTypes('cds-time', customElements),
  parameters: {
    options: { showPanel: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=20%3A1',
    },
  },
};

export const API = (args: any) => {
  return html`
    <cds-time ...="${spreadProps(getElementStorybookArgs(args))}">
      <label>time</label>
      <input type="time" min="09:00" max="18:00" value="11:00" />
      <cds-control-message .status=${args.status}>message text</cds-control-message>
    </cds-time>
  `;
};

export const time = () => {
  return html`
    <cds-time control-width="shrink">
      <label>time</label>
      <input type="time" min="09:00" max="18:00" value="11:00" />
      <cds-control-message>message text</cds-control-message>
    </cds-time>
  `;
};

export const vertical = () => {
  return html`
    <cds-form-group layout="vertical">
      <cds-time layout="vertical">
        <label>label</label>
        <input type="time" />
        <cds-control-message>message text</cds-control-message>
      </cds-time>

      <cds-time layout="vertical">
        <label>disabled</label>
        <input type="time" disabled />
        <cds-control-message>disabled message</cds-control-message>
      </cds-time>

      <cds-time layout="vertical" status="error">
        <label>error</label>
        <input type="time" />
        <cds-control-message status="error">error message</cds-control-message>
      </cds-time>

      <cds-time layout="vertical" status="success">
        <label>success</label>
        <input type="time" />
        <cds-control-message status="success">success message</cds-control-message>
      </cds-time>
    </cds-form-group>
  `;
};

export const horizontal = () => {
  return html`
    <cds-form-group layout="horizontal">
      <cds-time layout="horizontal">
        <label>label</label>
        <input type="time" />
        <cds-control-message>message text</cds-control-message>
      </cds-time>

      <cds-time layout="horizontal">
        <label>disabled</label>
        <input type="time" disabled />
        <cds-control-message>disabled message</cds-control-message>
      </cds-time>

      <cds-time layout="horizontal" status="error">
        <label>error</label>
        <input type="time" />
        <cds-control-message status="error">error message</cds-control-message>
      </cds-time>

      <cds-time layout="horizontal" status="success">
        <label>success</label>
        <input type="time" />
        <cds-control-message status="success">success message</cds-control-message>
      </cds-time>
    </cds-form-group>
  `;
};

export const compact = () => {
  return html`
    <cds-form-group layout="compact">
      <cds-time layout="compact">
        <label>label</label>
        <input type="time" />
        <cds-control-message>message text</cds-control-message>
      </cds-time>

      <cds-time layout="compact">
        <label>disabled</label>
        <input type="time" disabled />
        <cds-control-message>disabled message</cds-control-message>
      </cds-time>

      <cds-time layout="compact" status="error">
        <label>error</label>
        <input type="time" />
        <cds-control-message status="error">error message</cds-control-message>
      </cds-time>

      <cds-time layout="compact" status="success">
        <label>success</label>
        <input type="time" />
        <cds-control-message status="success">success message</cds-control-message>
      </cds-time>
    </cds-form-group>
  `;
};

export const timeDatalist = () => {
  return html`
    <cds-time>
      <label>time with datalist</label>
      <input type="time" value="11:00" />
      <datalist>
        <option value="11:00"></option>
        <option value="12:00"></option>
        <option value="13:00"></option>
      </datalist>
      <cds-control-message>message text</cds-control-message>
    </cds-time>
  `;
};

export const darkTheme = () => {
  return html`
    <cds-form-group layout="horizontal" cds-theme="dark">
      <cds-time layout="horizontal">
        <label>label</label>
        <input type="time" />
        <cds-control-message>message text</cds-control-message>
      </cds-time>

      <cds-time layout="horizontal">
        <label>disabled</label>
        <input type="time" disabled />
        <cds-control-message>disabled message</cds-control-message>
      </cds-time>

      <cds-time layout="horizontal" status="error">
        <label>error</label>
        <input type="time" />
        <cds-control-message status="error">error message</cds-control-message>
      </cds-time>

      <cds-time layout="horizontal" status="success">
        <label>success</label>
        <input type="time" />
        <cds-control-message status="success">success message</cds-control-message>
      </cds-time>
    </cds-form-group>
  `;
};
