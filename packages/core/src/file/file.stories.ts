/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/file/register.js';
import { html } from 'lit-html';
import { getElementStorybookArgs, spreadProps, getElementStorybookArgTypes } from '@cds/core/internal';
import customElements from '../../dist/core/custom-elements.json';

export default {
  title: 'Stories/File',
  component: 'cds-file',
  argTypes: getElementStorybookArgTypes('cds-file', customElements),
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
    <cds-file ...="${spreadProps(getElementStorybookArgs(args))}">
      <label>select files</label>
      <input type="file" multiple />
      <cds-control-message .status=${args.status}>message text</cds-control-message>
    </cds-file>
  `;
};

export const file = () => {
  return html`
    <cds-file>
      <label>select files</label>
      <input type="file" multiple />
    </cds-file>
  `;
};

export const vertical = () => {
  return html`
    <cds-form-group layout="vertical">
      <cds-file layout="vertical">
        <label>label</label>
        <input type="file" multiple />
        <cds-control-message>message text</cds-control-message>
      </cds-file>

      <cds-file layout="vertical">
        <label>disabled</label>
        <input type="file" disabled />
        <cds-control-message>disabled message</cds-control-message>
      </cds-file>

      <cds-file layout="vertical" status="error">
        <label>error</label>
        <input type="file" multiple />
        <cds-control-message status="error">error message</cds-control-message>
      </cds-file>

      <cds-file layout="vertical" status="success">
        <label>success</label>
        <input type="file" multiple />
        <cds-control-message status="success">success message</cds-control-message>
      </cds-file>
    </cds-form-group>
  `;
};

export const horizontal = () => {
  return html`
    <cds-form-group layout="horizontal">
      <cds-file layout="horizontal">
        <label>label</label>
        <input type="file" multiple />
        <cds-control-message>message text</cds-control-message>
      </cds-file>

      <cds-file layout="horizontal">
        <label>disabled</label>
        <input type="file" disabled />
        <cds-control-message>disabled message</cds-control-message>
      </cds-file>

      <cds-file layout="horizontal" status="success">
        <label>success</label>
        <input type="file" multiple />
        <cds-control-message status="success">success message</cds-control-message>
      </cds-file>

      <cds-file layout="horizontal" status="error">
        <label>error</label>
        <input type="file" multiple />
        <cds-control-message status="error">error message</cds-control-message>
      </cds-file>
    </cds-form-group>
  `;
};

export const compact = () => {
  return html`
    <cds-form-group layout="compact">
      <cds-file layout="compact">
        <label>label</label>
        <input type="file" multiple />
        <cds-control-message>message text</cds-control-message>
      </cds-file>

      <cds-file layout="compact">
        <label>disabled</label>
        <input type="file" disabled />
        <cds-control-message>disabled message</cds-control-message>
      </cds-file>

      <cds-file layout="compact" status="success">
        <label>success</label>
        <input type="file" multiple />
        <cds-control-message status="success">success message</cds-control-message>
      </cds-file>

      <cds-file layout="compact" status="error">
        <label>error</label>
        <input type="file" multiple />
        <cds-control-message status="error">error message</cds-control-message>
      </cds-file>
    </cds-form-group>
  `;
};

export const darkTheme = () => {
  return html`
    <cds-form-group layout="horizontal" cds-theme="dark">
      <cds-file layout="horizontal">
        <label>label</label>
        <input type="file" multiple />
        <cds-control-message>message text</cds-control-message>
      </cds-file>

      <cds-file layout="horizontal">
        <label>disabled</label>
        <input type="file" disabled />
        <cds-control-message>disabled message</cds-control-message>
      </cds-file>

      <cds-file layout="horizontal" status="success">
        <label>success</label>
        <input type="file" multiple />
        <cds-control-message status="success">success message</cds-control-message>
      </cds-file>

      <cds-file layout="horizontal" status="error">
        <label>error</label>
        <input type="file" multiple />
        <cds-control-message status="error">error message</cds-control-message>
      </cds-file>
    </cds-form-group>
  `;
};
