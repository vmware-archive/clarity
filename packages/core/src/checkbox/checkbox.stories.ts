/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/checkbox/register.js';
import { html } from 'lit-html';
import { spreadProps, getElementStorybookArgs, getElementStorybookArgTypes } from '@cds/core/internal';
import customElements from '../../dist/core/custom-elements.json';

export default {
  title: 'Stories/Checkbox',
  component: 'cds-checkbox',
  argTypes: getElementStorybookArgTypes('cds-checkbox', customElements),
  parameters: {
    options: { showPanel: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=0%3A871',
    },
  },
};

export const API = (args: any) => {
  return html`
    <cds-checkbox ...="${spreadProps(getElementStorybookArgs(args))}">
      <label>checked</label>
      <input type="checkbox" checked />
      <cds-control-message .status=${args.status}>message message</cds-control-message>
    </cds-checkbox>
  `;
};

export const checkbox = () => {
  return html`
    <cds-checkbox>
      <label>checkbox</label>
      <input type="checkbox" checked />
      <cds-control-message>message message</cds-control-message>
    </cds-checkbox>
  `;
};

export const status = () => {
  return html`
    <cds-form-group>
      <cds-checkbox>
        <label>checked</label>
        <input type="checkbox" checked />
        <cds-control-message>message text</cds-control-message>
      </cds-checkbox>

      <cds-checkbox>
        <label>un-checked</label>
        <input type="checkbox" />
        <cds-control-message>message text</cds-control-message>
      </cds-checkbox>

      <cds-checkbox status="error">
        <label>error</label>
        <input type="checkbox" />
        <cds-control-message status="error">error message</cds-control-message>
      </cds-checkbox>

      <cds-checkbox status="success">
        <label>success</label>
        <input type="checkbox" />
        <cds-control-message status="success">success message</cds-control-message>
      </cds-checkbox>

      <cds-checkbox>
        <label>indeterminate</label>
        <input type="checkbox" indeterminate />
        <cds-control-message>indeterminate message</cds-control-message>
      </cds-checkbox>

      <cds-checkbox>
        <label>disabled</label>
        <input type="checkbox" disabled />
        <cds-control-message>disabled message</cds-control-message>
      </cds-checkbox>

      <cds-checkbox>
        <label>checked disabled</label>
        <input type="checkbox" disabled checked />
        <cds-control-message>disabled message</cds-control-message>
      </cds-checkbox>
    </cds-form-group>
  `;
};

export const verticalGroup = () => {
  return html`
    <cds-form-group layout="vertical">
      <cds-checkbox-group layout="vertical">
        <label>label</label>

        <cds-checkbox>
          <label>checkbox 1</label>
          <input type="checkbox" checked />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 2</label>
          <input type="checkbox" />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 3</label>
          <input type="checkbox" />
        </cds-checkbox>

        <cds-control-message>message text</cds-control-message>
      </cds-checkbox-group>

      <cds-checkbox-group layout="vertical" disabled>
        <label>disabled</label>

        <cds-checkbox>
          <label>checkbox 1</label>
          <input type="checkbox" checked />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 2</label>
          <input type="checkbox" />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 3</label>
          <input type="checkbox" />
        </cds-checkbox>

        <cds-control-message>disabled message</cds-control-message>
      </cds-checkbox-group>

      <cds-checkbox-group layout="vertical" status="error">
        <label>error</label>

        <cds-checkbox>
          <label>checkbox 1</label>
          <input type="checkbox" checked />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 2</label>
          <input type="checkbox" />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 3</label>
          <input type="checkbox" />
        </cds-checkbox>

        <cds-control-message status="error">error message</cds-control-message>
      </cds-checkbox-group>

      <cds-checkbox-group layout="vertical" status="success">
        <label>success</label>

        <cds-checkbox>
          <label>checkbox 1</label>
          <input type="checkbox" checked />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 2</label>
          <input type="checkbox" />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 3</label>
          <input type="checkbox" />
        </cds-checkbox>

        <cds-control-message status="success">success message</cds-control-message>
      </cds-checkbox-group>
    </cds-form-group>
  `;
};

export const verticalInlineGroup = () => {
  return html`
    <cds-form-group layout="vertical-inline">
      <cds-checkbox-group layout="vertical-inline">
        <label>label</label>

        <cds-checkbox>
          <label>checkbox 1</label>
          <input type="checkbox" checked />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 2</label>
          <input type="checkbox" />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 3</label>
          <input type="checkbox" />
        </cds-checkbox>

        <cds-control-message>message text</cds-control-message>
      </cds-checkbox-group>

      <cds-checkbox-group layout="vertical-inline" disabled>
        <label>disabled</label>

        <cds-checkbox>
          <label>checkbox 1</label>
          <input type="checkbox" checked />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 2</label>
          <input type="checkbox" />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 3</label>
          <input type="checkbox" />
        </cds-checkbox>

        <cds-control-message>disabled message</cds-control-message>
      </cds-checkbox-group>

      <cds-checkbox-group layout="vertical-inline" status="error">
        <label>error</label>

        <cds-checkbox>
          <label>checkbox 1</label>
          <input type="checkbox" checked />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 2</label>
          <input type="checkbox" />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 3</label>
          <input type="checkbox" />
        </cds-checkbox>

        <cds-control-message status="error">error message</cds-control-message>
      </cds-checkbox-group>

      <cds-checkbox-group layout="vertical-inline" status="success">
        <label>success</label>

        <cds-checkbox>
          <label>checkbox 1</label>
          <input type="checkbox" checked />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 2</label>
          <input type="checkbox" />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 3</label>
          <input type="checkbox" />
        </cds-checkbox>

        <cds-control-message status="success">success message</cds-control-message>
      </cds-checkbox-group>
    </cds-form-group>
  `;
};

export const horizontalGroup = () => {
  return html`
    <cds-form-group layout="horizontal">
      <cds-checkbox-group layout="horizontal">
        <label>label</label>
        <cds-checkbox>
          <label>checkbox 1</label>
          <input type="checkbox" checked />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 2</label>
          <input type="checkbox" />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 3</label>
          <input type="checkbox" />
        </cds-checkbox>

        <cds-control-message>message text</cds-control-message>
      </cds-checkbox-group>

      <cds-checkbox-group layout="horizontal" disabled>
        <label>disabled</label>
        <cds-checkbox>
          <label>checkbox 1</label>
          <input type="checkbox" checked />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 2</label>
          <input type="checkbox" />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 3</label>
          <input type="checkbox" />
        </cds-checkbox>

        <cds-control-message>disabled message</cds-control-message>
      </cds-checkbox-group>

      <cds-checkbox-group layout="horizontal" status="error">
        <label>error</label>
        <cds-checkbox>
          <label>checkbox 1</label>
          <input type="checkbox" checked />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 2</label>
          <input type="checkbox" />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 3</label>
          <input type="checkbox" />
        </cds-checkbox>

        <cds-control-message status="error">error message</cds-control-message>
      </cds-checkbox-group>

      <cds-checkbox-group layout="horizontal" status="success">
        <label>success</label>
        <cds-checkbox>
          <label>checkbox 1</label>
          <input type="checkbox" checked />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 2</label>
          <input type="checkbox" />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 3</label>
          <input type="checkbox" />
        </cds-checkbox>

        <cds-control-message status="success">success message</cds-control-message>
      </cds-checkbox-group>
    </cds-form-group>
  `;
};

export const horizontalInlineGroup = () => {
  return html`
    <cds-form-group layout="horizontal-inline">
      <cds-checkbox-group layout="horizontal-inline">
        <label>label</label>
        <cds-checkbox>
          <label>checkbox 1</label>
          <input type="checkbox" checked />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 2</label>
          <input type="checkbox" />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 3</label>
          <input type="checkbox" />
        </cds-checkbox>

        <cds-control-message>message text</cds-control-message>
      </cds-checkbox-group>

      <cds-checkbox-group layout="horizontal-inline" disabled>
        <label>disabled</label>
        <cds-checkbox>
          <label>checkbox 1</label>
          <input type="checkbox" checked />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 2</label>
          <input type="checkbox" />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 3</label>
          <input type="checkbox" />
        </cds-checkbox>

        <cds-control-message>disabled message</cds-control-message>
      </cds-checkbox-group>

      <cds-checkbox-group layout="horizontal-inline" status="error">
        <label>error</label>
        <cds-checkbox>
          <label>checkbox 1</label>
          <input type="checkbox" checked />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 2</label>
          <input type="checkbox" />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 3</label>
          <input type="checkbox" />
        </cds-checkbox>

        <cds-control-message status="error">error message</cds-control-message>
      </cds-checkbox-group>

      <cds-checkbox-group layout="horizontal-inline" status="success">
        <label>success</label>
        <cds-checkbox>
          <label>checkbox 1</label>
          <input type="checkbox" checked />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 2</label>
          <input type="checkbox" />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 3</label>
          <input type="checkbox" />
        </cds-checkbox>

        <cds-control-message status="success">success message</cds-control-message>
      </cds-checkbox-group>
    </cds-form-group>
  `;
};

export const compactGroup = () => {
  return html`
    <cds-form-group layout="compact">
      <cds-checkbox-group layout="compact">
        <label>label</label>
        <cds-checkbox>
          <label>checkbox 1</label>
          <input type="checkbox" checked />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 2</label>
          <input type="checkbox" />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 3</label>
          <input type="checkbox" />
        </cds-checkbox>

        <cds-control-message>message test</cds-control-message>
      </cds-checkbox-group>

      <cds-checkbox-group layout="compact" disabled>
        <label>disabled</label>
        <cds-checkbox>
          <label>checkbox 1</label>
          <input type="checkbox" checked />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 2</label>
          <input type="checkbox" />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 3</label>
          <input type="checkbox" />
        </cds-checkbox>

        <cds-control-message>disabled message</cds-control-message>
      </cds-checkbox-group>

      <cds-checkbox-group layout="compact" status="error">
        <label>error</label>
        <cds-checkbox>
          <label>checkbox 1</label>
          <input type="checkbox" checked />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 2</label>
          <input type="checkbox" />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 3</label>
          <input type="checkbox" />
        </cds-checkbox>

        <cds-control-message status="error">error message</cds-control-message>
      </cds-checkbox-group>

      <cds-checkbox-group layout="compact" status="success">
        <label>success</label>
        <cds-checkbox>
          <label>checkbox 1</label>
          <input type="checkbox" checked />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 2</label>
          <input type="checkbox" />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 3</label>
          <input type="checkbox" />
        </cds-checkbox>

        <cds-control-message status="success">success message</cds-control-message>
      </cds-checkbox-group>
    </cds-form-group>
  `;
};

export const darkTheme = () => {
  return html`
    <cds-form-group layout="horizontal-inline" cds-theme="dark">
      <cds-checkbox-group>
        <label>label</label>

        <cds-checkbox>
          <label>checkbox 1</label>
          <input type="checkbox" checked />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 2</label>
          <input type="checkbox" />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 3</label>
          <input type="checkbox" />
        </cds-checkbox>

        <cds-control-message>message text</cds-control-message>
      </cds-checkbox-group>

      <cds-checkbox-group disabled>
        <label>disabled</label>

        <cds-checkbox>
          <label>checkbox 1</label>
          <input type="checkbox" checked />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 2</label>
          <input type="checkbox" />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 3</label>
          <input type="checkbox" />
        </cds-checkbox>

        <cds-control-message>disabled message</cds-control-message>
      </cds-checkbox-group>

      <cds-checkbox-group status="error">
        <label>error</label>

        <cds-checkbox>
          <label>checkbox 1</label>
          <input type="checkbox" checked />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 2</label>
          <input type="checkbox" />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 3</label>
          <input type="checkbox" />
        </cds-checkbox>

        <cds-control-message status="error">error message</cds-control-message>
      </cds-checkbox-group>

      <cds-checkbox-group status="success">
        <label>success</label>

        <cds-checkbox>
          <label>checkbox 1</label>
          <input type="checkbox" checked />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 2</label>
          <input type="checkbox" />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 3</label>
          <input type="checkbox" />
        </cds-checkbox>

        <cds-control-message status="success">success message</cds-control-message>
      </cds-checkbox-group>
    </cds-form-group>
  `;
};
