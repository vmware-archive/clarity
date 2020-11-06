/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';
import '@cds/core/forms/register.js';

export default {
  title: 'Stories/Forms Control',
  component: 'cds-control',
  parameters: {
    options: { showPanel: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=20%3A1',
    },
  },
};

export const control = () => {
  return html`
    <div cds-layout="vertical gap:lg">
      <cds-control layout="vertical">
        <label>label</label>
        <input placeholder="some custom control" />
        <cds-control-message>message text</cds-control-message>
      </cds-control>

      <cds-control layout="vertical" status="error">
        <label>label</label>
        <input placeholder="some custom control" />
        <cds-control-message status="error">error message</cds-control-message>
      </cds-control>

      <cds-control layout="vertical" status="success">
        <label>label</label>
        <input placeholder="some custom control" />
        <cds-control-message status="success">success message</cds-control-message>
      </cds-control>
    </div>
  `;
};

export const controlHorizontal = () => {
  return html`
    <div cds-layout="vertical gap:lg">
      <cds-control layout="horizontal">
        <label>label</label>
        <input placeholder="some custom control" />
        <cds-control-message>message text</cds-control-message>
      </cds-control>

      <cds-control layout="horizontal" status="error">
        <label>label</label>
        <input placeholder="some custom control" />
        <cds-control-message status="error">error message</cds-control-message>
      </cds-control>

      <cds-control layout="horizontal" status="success">
        <label>label</label>
        <input placeholder="some custom control" />
        <cds-control-message status="success">success message</cds-control-message>
      </cds-control>
    </div>
  `;
};

export const controlCompact = () => {
  return html`
    <div cds-layout="vertical gap:lg">
      <cds-control layout="compact">
        <label>label</label>
        <input placeholder="some custom control" />
        <cds-control-message>message text</cds-control-message>
      </cds-control>

      <cds-control layout="compact" status="error">
        <label>label</label>
        <input placeholder="some custom control" />
        <cds-control-message status="error">error message</cds-control-message>
      </cds-control>

      <cds-control layout="compact" status="success">
        <label>label</label>
        <input placeholder="some custom control" />
        <cds-control-message status="success">success message</cds-control-message>
      </cds-control>
    </div>
  `;
};
