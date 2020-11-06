/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';
import '@cds/core/input/register.js';

export default {
  title: 'Stories/Input Groups',
  component: 'cds-input-group',
  parameters: {
    options: { showPanel: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=20%3A1',
    },
  },
};

export const group = () => {
  return html`
    <div cds-layout="vertical gap:lg">
      <cds-input-group layout="vertical">
        <label>Host URL</label>
        <cds-select cds-layout="align:shrink">
          <label>Protocol</label>
          <select>
            <option>http://</option>
            <option>https://</option>
          </select>
        </cds-select>
        <cds-input>
          <label>Host Port</label>
          <input placeholder="localhost:8000" type="url" />
          <cds-control-action action="suffix" readonly aria-label="host status stable" title="host status stable">
            <cds-icon shape="cloud" badge="success"></cds-icon>
          </cds-control-action>
        </cds-input>
        <cds-control-message>Host ID: 123456</cds-control-message>
      </cds-input-group>

      <cds-input-group layout="vertical">
        <label>Billing Limit</label>
        <cds-input>
          <label>Billing Limit</label>
          <input placeholder="100.00" type="number" value="1987.56" />
          <cds-control-action action="prefix" readonly>$</cds-control-action>
        </cds-input>
        <cds-select cds-layout="align:shrink">
          <label>Currency</label>
          <select>
            <option>USD</option>
            <option>EUR</option>
          </select>
        </cds-select>
        <cds-control-message>Maximum host budget for billing period</cds-control-message>
      </cds-input-group>

      <cds-input-group layout="vertical" control-width="shrink">
        <label>Schedule Deployment</label>
        <cds-date>
          <label>Date for deployment</label>
          <input type="date" value="2018-07-22" />
        </cds-date>
        <cds-time>
          <label>Time for deployment</label>
          <input type="time" value="13:00" />
          <datalist>
            <option value="11:00"></option>
            <option value="12:00"></option>
            <option value="13:00"></option>
          </datalist>
        </cds-time>
        <cds-select>
          <label>Time Zone</label>
          <select>
            <option>PST</option>
            <option>MST</option>
            <option>CST</option>
            <option>EST</option>
          </select>
        </cds-select>
        <cds-control-message>The host deployment will trigger shortly after</cds-control-message>
      </cds-input-group>
    </div>
  `;
};

export const prefixSuffix = () => {
  return html`
    <cds-form-group layout="vertical">
      <cds-input>
        <label>suffix</label>
        <input aria-label="url input with .com suffix" />
        <cds-control-action action="suffix" readonly>.com</cds-control-action>
      </cds-input>

      <cds-input>
        <label>prefix</label>
        <input aria-label="url input with https:// prefix" />
        <cds-control-action action="prefix" readonly>https://</cds-control-action>
      </cds-input>

      <cds-input>
        <label>prefix + suffix</label>
        <input aria-label="url input with https:// prefix and .com suffix" />
        <cds-control-action action="prefix" readonly>https://</cds-control-action>
        <cds-control-action action="suffix" readonly>.com</cds-control-action>
      </cds-input>
    </cds-form-group>
  `;
};

export const iconsButtons = () => {
  return html`
    <cds-form-group layout="vertical">
      <cds-input>
        <label>icon</label>
        <input placeholder="example" />
        <cds-control-action action="prefix" aria-label="select user">
          <cds-icon shape="user"></cds-icon>
        </cds-control-action>
      </cds-input>

      <cds-input>
        <label>icon button</label>
        <input placeholder="example" />
        <cds-control-action action="suffix" aria-label="clear example input" onclick="alert('!')">
          <cds-icon shape="times"></cds-icon>
        </cds-control-action>
      </cds-input>

      <cds-input>
        <label>icon button label</label>
        <cds-control-action action="label" aria-label="get more details" onclick="alert('!')">
          <cds-icon shape="info-circle"></cds-icon>
        </cds-control-action>
        <input placeholder="example" />
      </cds-input>

      <cds-input>
        <label>icon button message</label>
        <input placeholder="example" />
        <cds-control-message>
          message text
          <cds-control-action aria-label="get more details" onclick="alert('!')">
            <cds-icon shape="info-circle"></cds-icon>
          </cds-control-action>
        </cds-control-message>
      </cds-input>

      <cds-password>
        <label>additional actions to existing input types</label>
        <input type="password" value="123456" />
        <cds-control-action action="suffix" aria-label="clear password input" onclick="alert('!')">
          <cds-icon shape="times"></cds-icon>
        </cds-control-action>
      </cds-password>
    </cds-form-group>
  `;
};

export const status = () => {
  return html`
    <cds-form-group layout="vertical">
      <cds-input-group>
        <label>Host URL</label>
        <cds-select cds-layout="align:shrink">
          <label>Protocol</label>
          <select>
            <option>http://</option>
            <option>https://</option>
          </select>
        </cds-select>
        <cds-input>
          <label>Host Port</label>
          <input placeholder="localhost:8000" type="url" />
        </cds-input>
        <cds-control-message>Host ID: 123456</cds-control-message>
      </cds-input-group>

      <cds-input-group status="error">
        <label>Host URL</label>
        <cds-select cds-layout="align:shrink">
          <label>Protocol</label>
          <select>
            <option>http://</option>
            <option>https://</option>
          </select>
        </cds-select>
        <cds-input>
          <label>Host Port</label>
          <input placeholder="localhost:8000" type="url" />
        </cds-input>
        <cds-control-message status="error">Host ID: 123456</cds-control-message>
      </cds-input-group>

      <cds-input-group status="success">
        <label>Host URL</label>
        <cds-select cds-layout="align:shrink">
          <label>Protocol</label>
          <select>
            <option>http://</option>
            <option>https://</option>
          </select>
        </cds-select>
        <cds-input>
          <label>Host Port</label>
          <input placeholder="localhost:8000" type="url" />
        </cds-input>
        <cds-control-message status="success">Host ID: 123456</cds-control-message>
      </cds-input-group>
    </cds-form-group>
  `;
};
