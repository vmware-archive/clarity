/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/toggle/register.js';
import { html } from 'lit-html';
import { getElementStorybookArgs, spreadProps, getElementStorybookArgTypes } from '@cds/core/internal';
import customElements from '../../dist/core/custom-elements.json';

export default {
  title: 'Stories/Toggle',
  component: 'cds-toggle',
  argTypes: getElementStorybookArgTypes('cds-toggle', customElements),
  parameters: {
    options: { showPanel: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=0%3A843',
    },
  },
};

export const API = (args: any) => {
  return html`
    <cds-toggle ...="${spreadProps(getElementStorybookArgs(args))}">
      <label>toggle</label>
      <input type="checkbox" />
      <cds-control-message .status=${args.status}>message text</cds-control-message>
    </cds-toggle>
  `;
};

export const toggle = () => {
  return html`
    <cds-toggle>
      <label>toggle</label>
      <input type="checkbox" checked />
      <cds-control-message>message text</cds-control-message>
    </cds-toggle>
  `;
};

export const status = () => {
  return html`
    <div cds-layout="vertical gap:lg">
      <cds-toggle>
        <label>toggle</label>
        <input type="checkbox" checked />
        <cds-control-message>message text</cds-control-message>
      </cds-toggle>

      <cds-toggle>
        <label>disabled</label>
        <input type="checkbox" disabled />
        <cds-control-message>disabled text</cds-control-message>
      </cds-toggle>

      <cds-toggle>
        <label>checked disabled</label>
        <input type="checkbox" disabled checked />
        <cds-control-message>disabled text</cds-control-message>
      </cds-toggle>

      <cds-toggle status="error">
        <label>error</label>
        <input type="checkbox" />
        <cds-control-message status="error">error text</cds-control-message>
      </cds-toggle>

      <cds-toggle status="success">
        <label>success</label>
        <input type="checkbox" />
        <cds-control-message status="success">success text</cds-control-message>
      </cds-toggle>
    </div>
  `;
};

export const verticalGroup = () => {
  return html`
    <cds-form-group layout="vertical">
      <cds-toggle-group>
        <label>label</label>

        <cds-toggle>
          <label>toggle 1</label>
          <input type="checkbox" checked />
        </cds-toggle>

        <cds-toggle>
          <label>toggle 2</label>
          <input type="checkbox" />
        </cds-toggle>

        <cds-toggle>
          <label>toggle 3</label>
          <input type="checkbox" />
        </cds-toggle>

        <cds-control-message>message text</cds-control-message>
      </cds-toggle-group>

      <!-- disable all controls within group or set disabled on input individually -->
      <cds-toggle-group disabled>
        <label>disabled</label>

        <cds-toggle>
          <label>toggle 1</label>
          <input type="checkbox" checked />
        </cds-toggle>

        <cds-toggle>
          <label>toggle 2</label>
          <input type="checkbox" />
        </cds-toggle>

        <cds-toggle>
          <label>toggle 3</label>
          <input type="checkbox" />
        </cds-toggle>

        <cds-control-message>message text</cds-control-message>
      </cds-toggle-group>

      <cds-toggle-group status="error">
        <label>error</label>

        <cds-toggle>
          <label>toggle 1</label>
          <input type="checkbox" checked />
        </cds-toggle>

        <cds-toggle>
          <label>toggle 2</label>
          <input type="checkbox" />
        </cds-toggle>

        <cds-toggle>
          <label>toggle 3</label>
          <input type="checkbox" />
        </cds-toggle>

        <cds-control-message status="error">message text</cds-control-message>
      </cds-toggle-group>

      <cds-toggle-group status="success">
        <label>success</label>

        <cds-toggle>
          <label>toggle 1</label>
          <input type="checkbox" checked />
        </cds-toggle>

        <cds-toggle>
          <label>toggle 2</label>
          <input type="checkbox" />
        </cds-toggle>

        <cds-toggle>
          <label>toggle 3</label>
          <input type="checkbox" />
        </cds-toggle>

        <cds-control-message status="success">message text</cds-control-message>
      </cds-toggle-group>
    </cds-form-group>
  `;
};

export const verticalInlineGroup = () => {
  return html`
    <cds-form-group layout="vertical-inline">
      <cds-toggle-group layout="vertical-inline">
        <label>label</label>

        <cds-toggle>
          <label>toggle 1</label>
          <input type="checkbox" checked />
        </cds-toggle>

        <cds-toggle>
          <label>toggle 2</label>
          <input type="checkbox" />
        </cds-toggle>

        <cds-toggle>
          <label>toggle 3</label>
          <input type="checkbox" />
        </cds-toggle>

        <cds-control-message>message text</cds-control-message>
      </cds-toggle-group>

      <cds-toggle-group layout="vertical-inline" disabled>
        <label>disabled</label>

        <cds-toggle>
          <label>toggle 1</label>
          <input type="checkbox" checked />
        </cds-toggle>

        <cds-toggle>
          <label>toggle 2</label>
          <input type="checkbox" />
        </cds-toggle>

        <cds-toggle>
          <label>toggle 3</label>
          <input type="checkbox" />
        </cds-toggle>

        <cds-control-message>disabled message</cds-control-message>
      </cds-toggle-group>

      <cds-toggle-group layout="vertical-inline" status="error">
        <label>error</label>

        <cds-toggle>
          <label>toggle 1</label>
          <input type="checkbox" checked />
        </cds-toggle>

        <cds-toggle>
          <label>toggle 2</label>
          <input type="checkbox" />
        </cds-toggle>

        <cds-toggle>
          <label>toggle 3</label>
          <input type="checkbox" />
        </cds-toggle>

        <cds-control-message status="error">error message</cds-control-message>
      </cds-toggle-group>

      <cds-toggle-group layout="vertical-inline" status="success">
        <label>success</label>

        <cds-toggle>
          <label>toggle 1</label>
          <input type="checkbox" checked />
        </cds-toggle>

        <cds-toggle>
          <label>toggle 2</label>
          <input type="checkbox" />
        </cds-toggle>

        <cds-toggle>
          <label>toggle 3</label>
          <input type="checkbox" />
        </cds-toggle>

        <cds-control-message status="success">success message</cds-control-message>
      </cds-toggle-group>
    </cds-form-group>
  `;
};

export const horizontalGroup = () => {
  return html`
    <cds-form-group layout="horizontal">
      <cds-toggle-group layout="horizontal">
        <label>label</label>
        <cds-toggle>
          <label>toggle 1</label>
          <input type="checkbox" checked />
        </cds-toggle>

        <cds-toggle>
          <label>toggle 2</label>
          <input type="checkbox" />
        </cds-toggle>

        <cds-toggle>
          <label>toggle 3</label>
          <input type="checkbox" />
        </cds-toggle>

        <cds-control-message>message text</cds-control-message>
      </cds-toggle-group>

      <cds-toggle-group layout="horizontal" disabled>
        <label>disabled</label>
        <cds-toggle>
          <label>toggle 1</label>
          <input type="checkbox" checked />
        </cds-toggle>

        <cds-toggle>
          <label>toggle 2</label>
          <input type="checkbox" />
        </cds-toggle>

        <cds-toggle>
          <label>toggle 3</label>
          <input type="checkbox" />
        </cds-toggle>

        <cds-control-message>disabled message</cds-control-message>
      </cds-toggle-group>

      <cds-toggle-group layout="horizontal" status="error">
        <label>error</label>
        <cds-toggle>
          <label>toggle 1</label>
          <input type="checkbox" checked />
        </cds-toggle>

        <cds-toggle>
          <label>toggle 2</label>
          <input type="checkbox" />
        </cds-toggle>

        <cds-toggle>
          <label>toggle 3</label>
          <input type="checkbox" />
        </cds-toggle>

        <cds-control-message status="error">error message</cds-control-message>
      </cds-toggle-group>

      <cds-toggle-group layout="horizontal" status="success">
        <label>success</label>
        <cds-toggle>
          <label>toggle 1</label>
          <input type="checkbox" checked />
        </cds-toggle>

        <cds-toggle>
          <label>toggle 2</label>
          <input type="checkbox" />
        </cds-toggle>

        <cds-toggle>
          <label>toggle 3</label>
          <input type="checkbox" />
        </cds-toggle>

        <cds-control-message status="success">success message</cds-control-message>
      </cds-toggle-group>
    </cds-form-group>
  `;
};

export const horizontalInlineGroup = () => {
  return html`
    <cds-form-group layout="horizontal-inline">
      <cds-toggle-group layout="horizontal-inline">
        <label>label</label>
        <cds-toggle>
          <label>toggle 1</label>
          <input type="checkbox" checked />
        </cds-toggle>

        <cds-toggle>
          <label>toggle 2</label>
          <input type="checkbox" />
        </cds-toggle>

        <cds-toggle>
          <label>toggle 3</label>
          <input type="checkbox" />
        </cds-toggle>

        <cds-control-message>message text</cds-control-message>
      </cds-toggle-group>

      <cds-toggle-group layout="horizontal-inline" disabled>
        <label>disabled</label>
        <cds-toggle>
          <label>toggle 1</label>
          <input type="checkbox" checked />
        </cds-toggle>

        <cds-toggle>
          <label>toggle 2</label>
          <input type="checkbox" />
        </cds-toggle>

        <cds-toggle>
          <label>toggle 3</label>
          <input type="checkbox" />
        </cds-toggle>

        <cds-control-message>disabled message</cds-control-message>
      </cds-toggle-group>

      <cds-toggle-group layout="horizontal-inline" status="error">
        <label>error</label>
        <cds-toggle>
          <label>toggle 1</label>
          <input type="checkbox" checked />
        </cds-toggle>

        <cds-toggle>
          <label>toggle 2</label>
          <input type="checkbox" />
        </cds-toggle>

        <cds-toggle>
          <label>toggle 3</label>
          <input type="checkbox" />
        </cds-toggle>

        <cds-control-message status="error">error message</cds-control-message>
      </cds-toggle-group>

      <cds-toggle-group layout="horizontal-inline" status="success">
        <label>success</label>
        <cds-toggle>
          <label>toggle 1</label>
          <input type="checkbox" checked />
        </cds-toggle>

        <cds-toggle>
          <label>toggle 2</label>
          <input type="checkbox" />
        </cds-toggle>

        <cds-toggle>
          <label>toggle 3</label>
          <input type="checkbox" />
        </cds-toggle>

        <cds-control-message status="success">success message</cds-control-message>
      </cds-toggle-group>
    </cds-form-group>
  `;
};

export const compactGroup = () => {
  return html`
    <cds-form-group layout="compact">
      <cds-toggle-group layout="compact">
        <label>label</label>
        <cds-toggle>
          <label>toggle 1</label>
          <input type="checkbox" checked />
        </cds-toggle>

        <cds-toggle>
          <label>toggle 2</label>
          <input type="checkbox" />
        </cds-toggle>

        <cds-toggle>
          <label>toggle 3</label>
          <input type="checkbox" />
        </cds-toggle>

        <cds-control-message>message text</cds-control-message>
      </cds-toggle-group>

      <cds-toggle-group layout="compact" disabled>
        <label>disabled</label>
        <cds-toggle>
          <label>toggle 1</label>
          <input type="checkbox" checked />
        </cds-toggle>

        <cds-toggle>
          <label>toggle 2</label>
          <input type="checkbox" />
        </cds-toggle>

        <cds-toggle>
          <label>toggle 3</label>
          <input type="checkbox" />
        </cds-toggle>

        <cds-control-message>disabled message</cds-control-message>
      </cds-toggle-group>

      <cds-toggle-group layout="compact" status="error">
        <label>error</label>
        <cds-toggle>
          <label>toggle 1</label>
          <input type="checkbox" checked />
        </cds-toggle>

        <cds-toggle>
          <label>toggle 2</label>
          <input type="checkbox" />
        </cds-toggle>

        <cds-toggle>
          <label>toggle 3</label>
          <input type="checkbox" />
        </cds-toggle>

        <cds-control-message status="error">error message</cds-control-message>
      </cds-toggle-group>

      <cds-toggle-group layout="compact" status="success">
        <label>success</label>
        <cds-toggle>
          <label>toggle 1</label>
          <input type="checkbox" checked />
        </cds-toggle>

        <cds-toggle>
          <label>toggle 2</label>
          <input type="checkbox" />
        </cds-toggle>

        <cds-toggle>
          <label>toggle 3</label>
          <input type="checkbox" />
        </cds-toggle>

        <cds-control-message status="success">success message</cds-control-message>
      </cds-toggle-group>
    </cds-form-group>
  `;
};

export const toggleAlign = () => {
  return html`
    <div cds-layout="vertical gap:lg">
      <cds-toggle>
        <label>left</label>
        <input type="checkbox" checked />
      </cds-toggle>

      <cds-toggle control-align="right">
        <label>right</label>
        <input type="checkbox" checked />
      </cds-toggle>

      <cds-toggle-group>
        <label>Group Left</label>
        <cds-toggle>
          <label>toggle 1</label>
          <input type="checkbox" checked />
        </cds-toggle>

        <cds-toggle>
          <label>toggle 2</label>
          <input type="checkbox" />
        </cds-toggle>
      </cds-toggle-group>

      <cds-toggle-group control-align="right">
        <label>Group Right</label>
        <cds-toggle>
          <label>toggle 1</label>
          <input type="checkbox" checked />
        </cds-toggle>

        <cds-toggle>
          <label>toggle 2</label>
          <input type="checkbox" />
        </cds-toggle>
      </cds-toggle-group>
    </div>
  `;
};

export const darkTheme = () => {
  return html`
    <cds-form-group layout="horizontal-inline" cds-theme="dark">
      <cds-toggle-group layout="horizontal-inline">
        <label>label</label>
        <cds-toggle>
          <label>toggle 1</label>
          <input type="checkbox" checked />
        </cds-toggle>

        <cds-toggle>
          <label>toggle 2</label>
          <input type="checkbox" />
        </cds-toggle>

        <cds-toggle>
          <label>toggle 3</label>
          <input type="checkbox" />
        </cds-toggle>

        <cds-control-message>message text</cds-control-message>
      </cds-toggle-group>

      <cds-toggle-group layout="horizontal-inline" disabled>
        <label>disabled</label>
        <cds-toggle>
          <label>toggle 1</label>
          <input type="checkbox" checked />
        </cds-toggle>

        <cds-toggle>
          <label>toggle 2</label>
          <input type="checkbox" />
        </cds-toggle>

        <cds-toggle>
          <label>toggle 3</label>
          <input type="checkbox" />
        </cds-toggle>

        <cds-control-message>disabled message</cds-control-message>
      </cds-toggle-group>

      <cds-toggle-group layout="horizontal-inline" status="error">
        <label>error</label>
        <cds-toggle>
          <label>toggle 1</label>
          <input type="checkbox" checked />
        </cds-toggle>

        <cds-toggle>
          <label>toggle 2</label>
          <input type="checkbox" />
        </cds-toggle>

        <cds-toggle>
          <label>toggle 3</label>
          <input type="checkbox" />
        </cds-toggle>

        <cds-control-message status="error">error message</cds-control-message>
      </cds-toggle-group>

      <cds-toggle-group layout="horizontal-inline" status="success">
        <label>success</label>
        <cds-toggle>
          <label>toggle 1</label>
          <input type="checkbox" checked />
        </cds-toggle>

        <cds-toggle>
          <label>toggle 2</label>
          <input type="checkbox" />
        </cds-toggle>

        <cds-toggle>
          <label>toggle 3</label>
          <input type="checkbox" />
        </cds-toggle>

        <cds-control-message status="success">success message</cds-control-message>
      </cds-toggle-group>
    </cds-form-group>
  `;
};
