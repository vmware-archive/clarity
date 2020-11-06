/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/search/register.js';
import { html } from 'lit-html';
import { getElementStorybookArgs, spreadProps, getElementStorybookArgTypes } from '@cds/core/internal';
import customElements from '../../dist/core/custom-elements.json';

export default {
  title: 'Stories/Search',
  component: 'cds-search',
  argTypes: getElementStorybookArgTypes('cds-search', customElements),
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
    <cds-search ...="${spreadProps(getElementStorybookArgs(args))}">
      <label>search</label>
      <input type="search" />
      <cds-control-message .status=${args.status}>message text</cds-control-message>
    </cds-search>
  `;
};

export const search = () => {
  return html`
    <cds-search control-width="shrink">
      <label>search</label>
      <input type="search" />
    </cds-search>
  `;
};

export const vertical = () => {
  return html`
    <cds-form-group layout="vertical">
      <cds-search>
        <label>label</label>
        <input type="search" />
        <cds-control-message>message text</cds-control-message>
      </cds-search>

      <cds-search>
        <label>disabled</label>
        <input type="search" disabled />
        <cds-control-message>disabled message</cds-control-message>
      </cds-search>

      <cds-search status="error">
        <label>error</label>
        <input type="search" />
        <cds-control-message status="error">error message</cds-control-message>
      </cds-search>

      <cds-search status="success">
        <label>success</label>
        <input type="search" />
        <cds-control-message status="success">success message</cds-control-message>
      </cds-search>
    </cds-form-group>
  `;
};

export const horizontal = () => {
  return html`
    <cds-form-group layout="horizontal">
      <cds-search layout="horizontal">
        <label>label</label>
        <input type="search" />
        <cds-control-message>message text</cds-control-message>
      </cds-search>

      <cds-search layout="horizontal">
        <label>disabled</label>
        <input type="search" disabled />
        <cds-control-message>disabled message</cds-control-message>
      </cds-search>

      <cds-search layout="horizontal" status="error">
        <label>error</label>
        <input type="search" />
        <cds-control-message status="error">error message</cds-control-message>
      </cds-search>

      <cds-search layout="horizontal" status="success">
        <label>success</label>
        <input type="search" />
        <cds-control-message status="success">success message</cds-control-message>
      </cds-search>
    </cds-form-group>
  `;
};

export const compact = () => {
  return html`
    <cds-form-group layout="compact">
      <cds-search layout="compact">
        <label>label</label>
        <input type="search" />
        <cds-control-message>message text</cds-control-message>
      </cds-search>

      <cds-search layout="compact">
        <label>disabled</label>
        <input type="search" disabled />
        <cds-control-message>disabled message</cds-control-message>
      </cds-search>

      <cds-search layout="compact" status="error">
        <label>error</label>
        <input type="search" />
        <cds-control-message status="error">error message</cds-control-message>
      </cds-search>

      <cds-search layout="compact" status="success">
        <label>success</label>
        <input type="search" />
        <cds-control-message status="success">success message</cds-control-message>
      </cds-search>
    </cds-form-group>
  `;
};

export const datalist = () => {
  return html`
    <cds-search>
      <label>search</label>
      <input type="search" />
      <datalist>
        <option value="Item 1"></option>
        <option value="Item 2"></option>
        <option value="Item 3"></option>
      </datalist>
    </cds-search>
  `;
};

export const darkTheme = () => {
  return html`
    <cds-form-group layout="horizontal" cds-theme="dark">
      <cds-search layout="horizontal">
        <label>label</label>
        <input type="search" />
        <cds-control-message>message text</cds-control-message>
      </cds-search>

      <cds-search layout="horizontal">
        <label>disabled</label>
        <input type="search" disabled />
        <cds-control-message>disabled message</cds-control-message>
      </cds-search>

      <cds-search layout="horizontal" status="error">
        <label>error</label>
        <input type="search" />
        <cds-control-message status="error">error message</cds-control-message>
      </cds-search>

      <cds-search layout="horizontal" status="success">
        <label>success</label>
        <input type="search" />
        <cds-control-message status="success">success message</cds-control-message>
      </cds-search>
    </cds-form-group>
  `;
};
