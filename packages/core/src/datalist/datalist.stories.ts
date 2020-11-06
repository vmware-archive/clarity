/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/datalist/register.js';
import { html } from 'lit-html';
import { getElementStorybookArgs, spreadProps, getElementStorybookArgTypes } from '@cds/core/internal';
import customElements from '../../dist/core/custom-elements.json';

export default {
  title: 'Stories/Datalist',
  component: 'cds-datalist',
  argTypes: getElementStorybookArgTypes('cds-datalist', customElements),
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
    <cds-datalist ...="${spreadProps(getElementStorybookArgs(args))}">
      <label>datalist</label>
      <input placeholder="placeholder text" />
      <datalist>
        <option value="Item 1"></option>
        <option value="Item 2"></option>
        <option value="Item 3"></option>
      </datalist>
      <cds-control-message .status=${args.status}>message text</cds-control-message>
    </cds-datalist>
  `;
};

export const datalist = () => {
  return html`
    <cds-datalist control-width="shrink">
      <label>datalist</label>
      <input placeholder="placeholder text" />
      <datalist>
        <option value="Item 1"></option>
        <option value="Item 2"></option>
        <option value="Item 3"></option>
      </datalist>
    </cds-datalist>
  `;
};

export const vertical = () => {
  return html`
    <cds-form-group layout="vertical">
      <cds-datalist layuut="vertical">
        <label>label</label>
        <input placeholder="name" />
        <datalist>
          <option value="Item 1"></option>
          <option value="Item 2"></option>
          <option value="Item 3"></option>
        </datalist>
        <cds-control-message>message text</cds-control-message>
      </cds-datalist>

      <cds-datalist>
        <label>disabled</label>
        <input placeholder="name" disabled />
        <datalist>
          <option value="Item 1"></option>
          <option value="Item 2"></option>
          <option value="Item 3"></option>
        </datalist>
        <cds-control-message>disabled message</cds-control-message>
      </cds-datalist>

      <cds-datalist status="error">
        <label>error status</label>
        <input placeholder="name" />
        <datalist>
          <option value="Item 1"></option>
          <option value="Item 2"></option>
          <option value="Item 3"></option>
        </datalist>
        <cds-control-message status="error">error message</cds-control-message>
      </cds-datalist>

      <cds-datalist status="success">
        <label>success status</label>
        <input placeholder="name" />
        <datalist>
          <option value="Item 1"></option>
          <option value="Item 2"></option>
          <option value="Item 3"></option>
        </datalist>
        <cds-control-message status="success">success message</cds-control-message>
      </cds-datalist>
    </cds-form-group>
  `;
};

export const horizontal = () => {
  return html`
    <cds-form-group layout="horizontal">
      <cds-datalist layout="horizontal">
        <label>label</label>
        <input placeholder="name" />
        <datalist>
          <option value="Item 1"></option>
          <option value="Item 2"></option>
          <option value="Item 3"></option>
        </datalist>
        <cds-control-message>message text</cds-control-message>
      </cds-datalist>

      <cds-datalist layout="horizontal">
        <label>disabled</label>
        <input placeholder="name" disabled />
        <datalist>
          <option value="Item 1"></option>
          <option value="Item 2"></option>
          <option value="Item 3"></option>
        </datalist>
        <cds-control-message>disabled message</cds-control-message>
      </cds-datalist>

      <cds-datalist layout="horizontal" status="error">
        <label>error status</label>
        <input placeholder="name" />
        <datalist>
          <option value="Item 1"></option>
          <option value="Item 2"></option>
          <option value="Item 3"></option>
        </datalist>
        <cds-control-message status="error">error message</cds-control-message>
      </cds-datalist>

      <cds-datalist layout="horizontal" status="success">
        <label>success status</label>
        <input placeholder="name" />
        <datalist>
          <option value="Item 1"></option>
          <option value="Item 2"></option>
          <option value="Item 3"></option>
        </datalist>
        <cds-control-message status="success">success message</cds-control-message>
      </cds-datalist>
    </cds-form-group>
  `;
};

export const compact = () => {
  return html`
    <cds-form-group layout="compact">
      <cds-datalist layout="compact">
        <label>label</label>
        <input placeholder="name" />
        <datalist>
          <option value="Item 1"></option>
          <option value="Item 2"></option>
          <option value="Item 3"></option>
        </datalist>
        <cds-control-message>message text</cds-control-message>
      </cds-datalist>

      <cds-datalist layout="compact">
        <label>disabled</label>
        <input placeholder="name" disabled />
        <datalist>
          <option value="Item 1"></option>
          <option value="Item 2"></option>
          <option value="Item 3"></option>
        </datalist>
        <cds-control-message>disabled message</cds-control-message>
      </cds-datalist>

      <cds-datalist layout="compact" status="error">
        <label>error status</label>
        <input placeholder="name" />
        <datalist>
          <option value="Item 1"></option>
          <option value="Item 2"></option>
          <option value="Item 3"></option>
        </datalist>
        <cds-control-message status="error">error message</cds-control-message>
      </cds-datalist>

      <cds-datalist layout="compact" status="success">
        <label>success status</label>
        <input placeholder="name" />
        <datalist>
          <option value="Item 1"></option>
          <option value="Item 2"></option>
          <option value="Item 3"></option>
        </datalist>
        <cds-control-message status="success">success message</cds-control-message>
      </cds-datalist>
    </cds-form-group>
  `;
};

export const darkTheme = () => {
  return html`
    <cds-form-group layout="horizontal" cds-theme="dark">
      <cds-datalist layout="horizontal">
        <label>label</label>
        <input placeholder="name" />
        <datalist>
          <option value="Item 1"></option>
          <option value="Item 2"></option>
          <option value="Item 3"></option>
        </datalist>
        <cds-control-message>message text</cds-control-message>
      </cds-datalist>

      <cds-datalist layout="horizontal">
        <label>disabled</label>
        <input placeholder="name" disabled />
        <datalist>
          <option value="Item 1"></option>
          <option value="Item 2"></option>
          <option value="Item 3"></option>
        </datalist>
        <cds-control-message>disabled message</cds-control-message>
      </cds-datalist>

      <cds-datalist layout="horizontal" status="error">
        <label>error status</label>
        <input placeholder="name" />
        <datalist>
          <option value="Item 1"></option>
          <option value="Item 2"></option>
          <option value="Item 3"></option>
        </datalist>
        <cds-control-message status="error">error message</cds-control-message>
      </cds-datalist>

      <cds-datalist layout="horizontal" status="success">
        <label>success status</label>
        <input placeholder="name" />
        <datalist>
          <option value="Item 1"></option>
          <option value="Item 2"></option>
          <option value="Item 3"></option>
        </datalist>
        <cds-control-message status="success">success message</cds-control-message>
      </cds-datalist>
    </cds-form-group>
  `;
};
