/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/radio/register.js';
import { html } from 'lit-html';
import { getElementStorybookArgs, spreadProps, getElementStorybookArgTypes } from '@cds/core/internal';
import customElements from '../../dist/core/custom-elements.json';

export default {
  title: 'Stories/Radio',
  component: 'cds-radio',
  argTypes: getElementStorybookArgTypes('cds-radio', customElements),
  parameters: {
    options: { showPanel: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=0%3A885',
    },
  },
};

export const API = (args: any) => {
  return html`
    <cds-radio ...="${spreadProps(getElementStorybookArgs(args))}">
      <label>radio</label>
      <input type="radio" />
      <cds-control-message .status=${args.status}>message text</cds-control-message>
    </cds-radio>
  `;
};

export const radio = () => {
  return html`
    <cds-radio-group>
      <label>radio group</label>
      <cds-radio>
        <label>radio 1</label>
        <input type="radio" checked />
      </cds-radio>

      <cds-radio>
        <label>radio 2</label>
        <input type="radio" />
      </cds-radio>

      <cds-radio>
        <label>radio 3</label>
        <input type="radio" />
      </cds-radio>
    </cds-radio-group>
  `;
};

export const verticalGroup = () => {
  return html`
    <cds-form-group layout="vertical">
      <cds-radio-group layout="vertical">
        <label>label</label>

        <cds-radio>
          <label>radio 1</label>
          <input type="radio" value="1" checked />
        </cds-radio>

        <cds-radio>
          <label>radio 2</label>
          <input type="radio" value="2" />
        </cds-radio>

        <cds-radio>
          <label>radio 3</label>
          <input type="radio" value="3" />
        </cds-radio>

        <cds-control-message>message text</cds-control-message>
      </cds-radio-group>

      <!-- disable all controls within group or set disabled on input individually -->
      <cds-radio-group layout="vertical" disabled>
        <label>disabled</label>
        <cds-radio>
          <label>radio 1</label>
          <input type="radio" checked />
        </cds-radio>

        <cds-radio>
          <label>radio 2</label>
          <input type="radio" />
        </cds-radio>

        <cds-radio>
          <label>radio 3</label>
          <input type="radio" />
        </cds-radio>

        <cds-control-message>disabled message</cds-control-message>
      </cds-radio-group>

      <cds-radio-group layout="vertical" status="error">
        <label>error</label>

        <cds-radio>
          <label>radio 1</label>
          <input type="radio" checked />
        </cds-radio>

        <cds-radio>
          <label>radio 2</label>
          <input type="radio" />
        </cds-radio>

        <cds-radio>
          <label>radio 3</label>
          <input type="radio" />
        </cds-radio>

        <cds-control-message status="error">error message</cds-control-message>
      </cds-radio-group>

      <cds-radio-group layout="vertical" status="success">
        <label>success</label>

        <cds-radio>
          <label>radio 1</label>
          <input type="radio" checked />
        </cds-radio>

        <cds-radio>
          <label>radio 2</label>
          <input type="radio" />
        </cds-radio>

        <cds-radio>
          <label>radio 3</label>
          <input type="radio" />
        </cds-radio>

        <cds-control-message status="success">success message</cds-control-message>
      </cds-radio-group>
    </cds-form-group>
  `;
};

export const verticalInlineGroup = () => {
  return html`
    <cds-form-group layout="vertical-inline">
      <cds-radio-group layout="vertical-inline">
        <label>label</label>
        <cds-radio>
          <label>radio 1</label>
          <input type="radio" checked />
        </cds-radio>

        <cds-radio>
          <label>radio 2</label>
          <input type="radio" />
        </cds-radio>

        <cds-radio>
          <label>radio 3</label>
          <input type="radio" />
        </cds-radio>

        <cds-control-message>message text</cds-control-message>
      </cds-radio-group>

      <cds-radio-group layout="vertical-inline" disabled>
        <label>disabled</label>
        <cds-radio>
          <label>radio 1</label>
          <input type="radio" checked />
        </cds-radio>

        <cds-radio>
          <label>radio 2</label>
          <input type="radio" />
        </cds-radio>

        <cds-radio>
          <label>radio 3</label>
          <input type="radio" />
        </cds-radio>

        <cds-control-message>disabled message</cds-control-message>
      </cds-radio-group>

      <cds-radio-group layout="vertical" status="error">
        <label>error</label>
        <cds-radio>
          <label>radio 1</label>
          <input type="radio" checked />
        </cds-radio>

        <cds-radio>
          <label>radio 2</label>
          <input type="radio" />
        </cds-radio>

        <cds-radio>
          <label>radio 3</label>
          <input type="radio" />
        </cds-radio>

        <cds-control-message status="error">error message</cds-control-message>
      </cds-radio-group>

      <cds-radio-group layout="vertical" status="success">
        <label>success</label>
        <cds-radio>
          <label>radio 1</label>
          <input type="radio" checked />
        </cds-radio>

        <cds-radio>
          <label>radio 2</label>
          <input type="radio" />
        </cds-radio>

        <cds-radio>
          <label>radio 3</label>
          <input type="radio" />
        </cds-radio>

        <cds-control-message status="success">success message</cds-control-message>
      </cds-radio-group>
    </cds-form-group>
  `;
};

export const horizontalGroup = () => {
  return html`
    <cds-form-group layout="horizontal">
      <cds-radio-group layout="horizontal">
        <label>label</label>
        <cds-radio>
          <label>radio 1</label>
          <input type="radio" checked />
        </cds-radio>

        <cds-radio>
          <label>radio 2</label>
          <input type="radio" />
        </cds-radio>

        <cds-radio>
          <label>radio 3</label>
          <input type="radio" />
        </cds-radio>

        <cds-control-message>message text</cds-control-message>
      </cds-radio-group>

      <cds-radio-group layout="horizontal" disabled>
        <label>Horizontal Disabled</label>
        <cds-radio>
          <label>radio 1</label>
          <input type="radio" checked />
        </cds-radio>

        <cds-radio>
          <label>radio 2</label>
          <input type="radio" />
        </cds-radio>

        <cds-radio>
          <label>radio 3</label>
          <input type="radio" />
        </cds-radio>

        <cds-control-message>disabled message</cds-control-message>
      </cds-radio-group>

      <cds-radio-group layout="horizontal" status="error">
        <label>error</label>
        <cds-radio>
          <label>radio 1</label>
          <input type="radio" checked />
        </cds-radio>

        <cds-radio>
          <label>radio 2</label>
          <input type="radio" />
        </cds-radio>

        <cds-radio>
          <label>radio 3</label>
          <input type="radio" />
        </cds-radio>

        <cds-control-message status="error">error message</cds-control-message>
      </cds-radio-group>

      <cds-radio-group layout="horizontal" status="success">
        <label>success</label>
        <cds-radio>
          <label>radio 1</label>
          <input type="radio" checked />
        </cds-radio>

        <cds-radio>
          <label>radio 2</label>
          <input type="radio" />
        </cds-radio>

        <cds-radio>
          <label>radio 3</label>
          <input type="radio" />
        </cds-radio>

        <cds-control-message status="success">success message</cds-control-message>
      </cds-radio-group>
    </cds-form-group>
  `;
};

export const horizontalInlineGroup = () => {
  return html`
    <cds-form-group layout="horizontal-inline">
      <cds-radio-group layout="horizontal-inline">
        <label>label</label>
        <cds-radio>
          <label>radio 1</label>
          <input type="radio" checked />
        </cds-radio>

        <cds-radio>
          <label>radio 2</label>
          <input type="radio" />
        </cds-radio>

        <cds-radio>
          <label>radio 3</label>
          <input type="radio" />
        </cds-radio>

        <cds-control-message>message text</cds-control-message>
      </cds-radio-group>

      <cds-radio-group layout="horizontal-inline" disabled>
        <label>disabled</label>
        <cds-radio>
          <label>radio 1</label>
          <input type="radio" checked />
        </cds-radio>

        <cds-radio>
          <label>radio 2</label>
          <input type="radio" />
        </cds-radio>

        <cds-radio>
          <label>radio 3</label>
          <input type="radio" />
        </cds-radio>

        <cds-control-message>disabled message</cds-control-message>
      </cds-radio-group>

      <cds-radio-group layout="horizontal-inline" status="error">
        <label>error</label>
        <cds-radio>
          <label>radio 1</label>
          <input type="radio" checked />
        </cds-radio>

        <cds-radio>
          <label>radio 2</label>
          <input type="radio" />
        </cds-radio>

        <cds-radio>
          <label>radio 3</label>
          <input type="radio" />
        </cds-radio>

        <cds-control-message status="error">error message</cds-control-message>
      </cds-radio-group>

      <cds-radio-group layout="horizontal-inline" status="success">
        <label>success</label>
        <cds-radio>
          <label>radio 1</label>
          <input type="radio" checked />
        </cds-radio>

        <cds-radio>
          <label>radio 2</label>
          <input type="radio" />
        </cds-radio>

        <cds-radio>
          <label>radio 3</label>
          <input type="radio" />
        </cds-radio>

        <cds-control-message status="success">success message</cds-control-message>
      </cds-radio-group>
    </cds-form-group>
  `;
};

export const compactGroup = () => {
  return html`
    <cds-form-group layout="compact">
      <cds-radio-group layout="compact">
        <label>label</label>
        <cds-radio>
          <label>radio 1</label>
          <input type="radio" checked />
        </cds-radio>

        <cds-radio>
          <label>radio 2</label>
          <input type="radio" />
        </cds-radio>

        <cds-radio>
          <label>radio 3</label>
          <input type="radio" />
        </cds-radio>

        <cds-control-message>message text</cds-control-message>
      </cds-radio-group>

      <cds-radio-group layout="compact" disabled>
        <label>disabled</label>
        <cds-radio>
          <label>radio 1</label>
          <input type="radio" checked />
        </cds-radio>

        <cds-radio>
          <label>radio 2</label>
          <input type="radio" />
        </cds-radio>

        <cds-radio>
          <label>radio 3</label>
          <input type="radio" />
        </cds-radio>

        <cds-control-message>disabled message</cds-control-message>
      </cds-radio-group>

      <cds-radio-group layout="compact" status="error">
        <label>error</label>
        <cds-radio>
          <label>radio 1</label>
          <input type="radio" checked />
        </cds-radio>

        <cds-radio>
          <label>radio 2</label>
          <input type="radio" />
        </cds-radio>

        <cds-radio>
          <label>radio 3</label>
          <input type="radio" />
        </cds-radio>

        <cds-control-message status="error">error message</cds-control-message>
      </cds-radio-group>

      <cds-radio-group layout="compact" status="success">
        <label>success</label>
        <cds-radio>
          <label>radio 1</label>
          <input type="radio" checked />
        </cds-radio>

        <cds-radio>
          <label>radio 2</label>
          <input type="radio" />
        </cds-radio>

        <cds-radio>
          <label>radio 3</label>
          <input type="radio" />
        </cds-radio>

        <cds-control-message status="success">success message</cds-control-message>
      </cds-radio-group>
    </cds-form-group>
  `;
};

export const darkTheme = () => {
  return html`
    <cds-form-group layout="horizontal-inline" cds-theme="dark">
      <cds-radio-group layout="horizontal-inline">
        <label>label</label>
        <cds-radio>
          <label>radio 1</label>
          <input type="radio" checked />
        </cds-radio>

        <cds-radio>
          <label>radio 2</label>
          <input type="radio" />
        </cds-radio>

        <cds-radio>
          <label>radio 3</label>
          <input type="radio" />
        </cds-radio>

        <cds-control-message>message text</cds-control-message>
      </cds-radio-group>

      <cds-radio-group layout="horizontal-inline" disabled>
        <label>disabled</label>
        <cds-radio>
          <label>radio 1</label>
          <input type="radio" checked />
        </cds-radio>

        <cds-radio>
          <label>radio 2</label>
          <input type="radio" />
        </cds-radio>

        <cds-radio>
          <label>radio 3</label>
          <input type="radio" />
        </cds-radio>

        <cds-control-message>disabled message</cds-control-message>
      </cds-radio-group>

      <cds-radio-group layout="horizontal-inline" status="error">
        <label>error</label>
        <cds-radio>
          <label>radio 1</label>
          <input type="radio" checked />
        </cds-radio>

        <cds-radio>
          <label>radio 2</label>
          <input type="radio" />
        </cds-radio>

        <cds-radio>
          <label>radio 3</label>
          <input type="radio" />
        </cds-radio>

        <cds-control-message status="error">error message</cds-control-message>
      </cds-radio-group>

      <cds-radio-group layout="horizontal-inline" status="success">
        <label>success</label>
        <cds-radio>
          <label>radio 1</label>
          <input type="radio" checked />
        </cds-radio>

        <cds-radio>
          <label>radio 2</label>
          <input type="radio" />
        </cds-radio>

        <cds-radio>
          <label>radio 3</label>
          <input type="radio" />
        </cds-radio>

        <cds-control-message status="success">success message</cds-control-message>
      </cds-radio-group>
    </cds-form-group>
  `;
};
