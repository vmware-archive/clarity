/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/checkbox/register.js';
import '@cds/core/datalist/register.js';
import '@cds/core/file/register.js';
import '@cds/core/forms/register.js';
import '@cds/core/input/register.js';
import '@cds/core/password/register.js';
import '@cds/core/radio/register.js';
import '@cds/core/range/register.js';
import '@cds/core/search/register.js';
import '@cds/core/select/register.js';
import '@cds/core/textarea/register.js';
import '@cds/core/time/register.js';
import '@cds/core/toggle/register.js';
import '@cds/core/button';
import { html } from 'lit-html';
import { useEffect } from '@storybook/client-api';

export default {
  title: 'Stories/Forms',
  component: 'cds-form-group',
  parameters: {
    options: { showPanel: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=20%3A1',
    },
  },
};

export const nativeHTML5ValidationSingle = () => {
  return html`
    <cds-input validate>
      <label>text input (required)</label>
      <input placeholder="place holder text" required />
      <cds-control-message error="valueMissing">required</cds-control-message>
    </cds-input>
  `;
};

export const nativeHTML5Validation = () => {
  return html`
    <form>
      <cds-form-group validate>
        <cds-input>
          <label>text input (required)</label>
          <input placeholder="placeholder text" required />
          <cds-control-message error="valueMissing">required</cds-control-message>
        </cds-input>

        <cds-input>
          <label>number input (min/max)</label>
          <input type="number" min="1" max="5" value="3" />
          <cds-control-message error="rangeOverflow">Maximum is 5</cds-control-message>
          <cds-control-message error="rangeUnderflow">Minimum is 1</cds-control-message>
        </cds-input>

        <cds-input>
          <label>U.S telephone (pattern)</label>
          <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="111-222-3333" />
          <cds-control-message error="patternMismatch">please enter US phone number (111-222-3333)</cds-control-message>
        </cds-input>

        <cds-input>
          <label>email input (required/type)</label>
          <input type="email" placeholder="example@example.com" required />
          <cds-control-message error="valueMissing">a email address is required to continue</cds-control-message>
          <cds-control-message error="typeMismatch">please enter a valid email address</cds-control-message>
        </cds-input>

        <cds-button>save</cds-button>
      </cds-form-group>
    </form>
  `;
};

export const novalidate = () => {
  return html`
    <form novalidate>
      <cds-form-group validate>
        <cds-input>
          <label>Disabled form validation</label>
          <input placeholder="placeholder text" required />
        </cds-input>
        <cds-button>save</cds-button>
      </cds-form-group>
    </form>
  `;
};

export const form = () => {
  return html`
    <form>
      <cds-form-group control-width="shrink">
        <cds-input>
          <label>text label</label>
          <input placeholder="place holder text" />
        </cds-input>

        <cds-select>
          <label>select label</label>
          <select>
            <option>Option One</option>
            <option>Option Two</option>
            <option>Option Three</option>
          </select>
          <cds-control-message>message text</cds-control-message>
        </cds-select>

        <cds-datalist>
          <label>datalist label</label>
          <input placeholder="place holder text" />
          <datalist>
            <option value="Item 1"></option>
            <option value="Item 2"></option>
            <option value="Item 3"></option>
          </datalist>
        </cds-datalist>

        <cds-password>
          <label>password label</label>
          <input type="password" placeholder="password" />
        </cds-password>

        <cds-search>
          <label>search label</label>
          <input type="search" placeholder="search" />
        </cds-search>

        <cds-time>
          <label>time label</label>
          <input type="time" min="09:00" max="18:00" value="11:00" />
        </cds-time>

        <cds-input-group>
          <label>input group label</label>
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
            <cds-control-action
              action="suffix"
              readonly
              aria-label="Icon indicating that the selected host status is stable"
              title="Icon indicating that the selected host status is stable"
            >
              <cds-icon
                shape="cloud"
                badge="success"
                role="img"
                aria-label="Icon of host cloud with green badge"
              ></cds-icon>
            </cds-control-action>
          </cds-input>
          <cds-control-message>Host ID: 123456</cds-control-message>
        </cds-input-group>

        <cds-range>
          <label>range label</label>
          <input type="range" min="0" max="100" value="75" step="5" />
          <cds-control-message>CPU Utilization</cds-control-message>
        </cds-range>

        <cds-checkbox-group>
          <label>checkbox group label</label>
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
        </cds-checkbox-group>

        <cds-radio-group name="region">
          <label>radio group label</label>
          <cds-radio>
            <label>North America</label>
            <input type="radio" value="north-america" checked />
          </cds-radio>
          <cds-radio>
            <label>South America</label>
            <input type="radio" value="south-america" />
          </cds-radio>
          <cds-radio>
            <label>Europe</label>
            <input type="radio" value="europe" />
          </cds-radio>
        </cds-radio-group>

        <cds-toggle-group>
          <label>toggle group</label>
          <cds-toggle>
            <label>toggle 1</label>
            <input type="checkbox" checked />
          </cds-toggle>
          <cds-toggle>
            <label>toggle 2</label>
            <input type="checkbox" />
          </cds-toggle>
        </cds-toggle-group>

        <cds-file>
          <label>file label</label>
          <input type="file" multiple />
        </cds-file>

        <cds-select>
          <label>select multiple</label>
          <select multiple>
            <option>Option One</option>
            <option>Option Two</option>
            <option>Option Three</option>
            <option>Option Four</option>
            <option>Option Five</option>
          </select>
        </cds-select>

        <cds-textarea>
          <label>textarea label</label>
          <textarea></textarea>
        </cds-textarea>

        <cds-button>save</cds-button>
      </cds-form-group>
    </form>
  `;
};

export const vertical = () => {
  return html`
    <form>
      <cds-form-group layout="vertical">
        <cds-input>
          <label>text label</label>
          <input placeholder="place holder text" />
        </cds-input>

        <cds-select>
          <label>select label</label>
          <select>
            <option>Option One</option>
            <option>Option Two</option>
            <option>Option Three</option>
          </select>
          <cds-control-message>message text</cds-control-message>
        </cds-select>

        <cds-datalist>
          <label>datalist label</label>
          <input placeholder="place holder text" />
          <datalist>
            <option value="Item 1"></option>
            <option value="Item 2"></option>
            <option value="Item 3"></option>
          </datalist>
        </cds-datalist>

        <cds-password>
          <label>password label</label>
          <input type="password" placeholder="password" />
        </cds-password>

        <cds-search>
          <label>search label</label>
          <input type="search" placeholder="search" />
        </cds-search>

        <cds-time>
          <label>time label</label>
          <input type="time" min="09:00" max="18:00" value="11:00" />
        </cds-time>

        <cds-input-group>
          <label>input group label</label>
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

        <cds-range>
          <label>range label</label>
          <input type="range" min="0" max="100" value="75" step="5" />
          <cds-control-message>CPU Utilization</cds-control-message>
        </cds-range>

        <cds-checkbox-group>
          <label>checkbox group label</label>
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
        </cds-checkbox-group>

        <cds-radio-group name="region">
          <label>radio group label</label>
          <cds-radio>
            <label>North America</label>
            <input type="radio" value="north-america" checked />
          </cds-radio>
          <cds-radio>
            <label>South America</label>
            <input type="radio" value="south-america" />
          </cds-radio>
          <cds-radio>
            <label>Europe</label>
            <input type="radio" value="europe" />
          </cds-radio>
        </cds-radio-group>

        <cds-toggle-group>
          <label>toggle group</label>
          <cds-toggle>
            <label>toggle 1</label>
            <input type="checkbox" checked />
          </cds-toggle>
          <cds-toggle>
            <label>toggle 2</label>
            <input type="checkbox" />
          </cds-toggle>
        </cds-toggle-group>

        <cds-file>
          <label>file label</label>
          <input type="file" multiple />
        </cds-file>

        <cds-select>
          <label>select multiple</label>
          <select multiple>
            <option>Option One</option>
            <option>Option Two</option>
            <option>Option Three</option>
            <option>Option Four</option>
            <option>Option Five</option>
          </select>
        </cds-select>

        <cds-textarea>
          <label>textarea label</label>
          <textarea></textarea>
        </cds-textarea>

        <cds-button>save</cds-button>
      </cds-form-group>
    </form>
  `;
};

export const verticalInline = () => {
  return html`
    <form>
      <cds-form-group layout="vertical-inline">
        <cds-input>
          <label>text label</label>
          <input placeholder="place holder text" />
        </cds-input>

        <cds-select>
          <label>select label</label>
          <select>
            <option>Option One</option>
            <option>Option Two</option>
            <option>Option Three</option>
          </select>
          <cds-control-message>message text</cds-control-message>
        </cds-select>

        <cds-datalist>
          <label>datalist label</label>
          <input placeholder="place holder text" />
          <datalist>
            <option value="Item 1"></option>
            <option value="Item 2"></option>
            <option value="Item 3"></option>
          </datalist>
        </cds-datalist>

        <cds-password>
          <label>password label</label>
          <input type="password" placeholder="password" />
        </cds-password>

        <cds-search>
          <label>search label</label>
          <input type="search" placeholder="search" />
        </cds-search>

        <cds-time>
          <label>time label</label>
          <input type="time" min="09:00" max="18:00" value="11:00" />
        </cds-time>

        <cds-input-group>
          <label>input group label</label>
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

        <cds-range>
          <label>range label</label>
          <input type="range" min="0" max="100" value="75" step="5" />
          <cds-control-message>CPU Utilization</cds-control-message>
        </cds-range>

        <cds-checkbox-group>
          <label>checkbox group label</label>
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
        </cds-checkbox-group>

        <cds-radio-group name="region">
          <label>radio group label</label>
          <cds-radio>
            <label>North America</label>
            <input type="radio" value="north-america" checked />
          </cds-radio>
          <cds-radio>
            <label>South America</label>
            <input type="radio" value="south-america" />
          </cds-radio>
          <cds-radio>
            <label>Europe</label>
            <input type="radio" value="europe" />
          </cds-radio>
        </cds-radio-group>

        <cds-toggle-group>
          <label>toggle group</label>
          <cds-toggle>
            <label>toggle 1</label>
            <input type="checkbox" checked />
          </cds-toggle>
          <cds-toggle>
            <label>toggle 2</label>
            <input type="checkbox" />
          </cds-toggle>
        </cds-toggle-group>

        <cds-file>
          <label>file label</label>
          <input type="file" multiple />
        </cds-file>

        <cds-select>
          <label>select multiple</label>
          <select multiple>
            <option>Option One</option>
            <option>Option Two</option>
            <option>Option Three</option>
            <option>Option Four</option>
            <option>Option Five</option>
          </select>
        </cds-select>

        <cds-textarea>
          <label>textarea label</label>
          <textarea></textarea>
        </cds-textarea>

        <cds-button>save</cds-button>
      </cds-form-group>
    </form>
  `;
};

export const horizontal = () => {
  return html`
    <form>
      <cds-form-group layout="horizontal">
        <cds-input>
          <label>text label</label>
          <input placeholder="place holder text" />
        </cds-input>

        <cds-select>
          <label>select label</label>
          <select>
            <option>Option One</option>
            <option>Option Two</option>
            <option>Option Three</option>
          </select>
          <cds-control-message>message text</cds-control-message>
        </cds-select>

        <cds-datalist>
          <label>datalist label</label>
          <input placeholder="place holder text" />
          <datalist>
            <option value="Item 1"></option>
            <option value="Item 2"></option>
            <option value="Item 3"></option>
          </datalist>
        </cds-datalist>

        <cds-password>
          <label>password label</label>
          <input type="password" placeholder="password" />
        </cds-password>

        <cds-search>
          <label>search label</label>
          <input type="search" placeholder="search" />
        </cds-search>

        <cds-time>
          <label>time label</label>
          <input type="time" min="09:00" max="18:00" value="11:00" />
        </cds-time>

        <cds-input-group>
          <label>input group label</label>
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

        <cds-range>
          <label>range label</label>
          <input type="range" min="0" max="100" value="75" step="5" />
          <cds-control-message>CPU Utilization</cds-control-message>
        </cds-range>

        <cds-checkbox-group>
          <label>checkbox group label</label>
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
        </cds-checkbox-group>

        <cds-radio-group name="region">
          <label>radio group label</label>
          <cds-radio>
            <label>North America</label>
            <input type="radio" value="north-america" checked />
          </cds-radio>
          <cds-radio>
            <label>South America</label>
            <input type="radio" value="south-america" />
          </cds-radio>
          <cds-radio>
            <label>Europe</label>
            <input type="radio" value="europe" />
          </cds-radio>
        </cds-radio-group>

        <cds-toggle-group>
          <label>toggle group</label>
          <cds-toggle>
            <label>toggle 1</label>
            <input type="checkbox" checked />
          </cds-toggle>
          <cds-toggle>
            <label>toggle 2</label>
            <input type="checkbox" />
          </cds-toggle>
        </cds-toggle-group>

        <cds-file>
          <label>file label</label>
          <input type="file" multiple />
        </cds-file>

        <cds-select>
          <label>select multiple</label>
          <select multiple>
            <option>Option One</option>
            <option>Option Two</option>
            <option>Option Three</option>
            <option>Option Four</option>
            <option>Option Five</option>
          </select>
        </cds-select>

        <cds-textarea>
          <label>textarea label</label>
          <textarea></textarea>
        </cds-textarea>

        <cds-button>save</cds-button>
      </cds-form-group>
    </form>
  `;
};

export const horizontalInline = () => {
  return html`
    <form>
      <cds-form-group layout="horizontal-inline">
        <cds-input>
          <label>text label</label>
          <input placeholder="place holder text" />
        </cds-input>

        <cds-select>
          <label>select label</label>
          <select>
            <option>Option One</option>
            <option>Option Two</option>
            <option>Option Three</option>
          </select>
          <cds-control-message>message text</cds-control-message>
        </cds-select>

        <cds-datalist>
          <label>datalist label</label>
          <input placeholder="place holder text" />
          <datalist>
            <option value="Item 1"></option>
            <option value="Item 2"></option>
            <option value="Item 3"></option>
          </datalist>
        </cds-datalist>

        <cds-password>
          <label>password label</label>
          <input type="password" placeholder="password" />
        </cds-password>

        <cds-search>
          <label>search label</label>
          <input type="search" placeholder="search" />
        </cds-search>

        <cds-time>
          <label>time label</label>
          <input type="time" min="09:00" max="18:00" value="11:00" />
        </cds-time>

        <cds-input-group>
          <label>input group label</label>
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

        <cds-range>
          <label>range label</label>
          <input type="range" min="0" max="100" value="75" step="5" />
          <cds-control-message>CPU Utilization</cds-control-message>
        </cds-range>

        <cds-checkbox-group>
          <label>checkbox group label</label>
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
        </cds-checkbox-group>

        <cds-radio-group name="region">
          <label>radio group label</label>
          <cds-radio>
            <label>North America</label>
            <input type="radio" value="north-america" checked />
          </cds-radio>
          <cds-radio>
            <label>South America</label>
            <input type="radio" value="south-america" />
          </cds-radio>
          <cds-radio>
            <label>Europe</label>
            <input type="radio" value="europe" />
          </cds-radio>
        </cds-radio-group>

        <cds-toggle-group>
          <label>toggle group</label>
          <cds-toggle>
            <label>toggle 1</label>
            <input type="checkbox" checked />
          </cds-toggle>
          <cds-toggle>
            <label>toggle 2</label>
            <input type="checkbox" />
          </cds-toggle>
        </cds-toggle-group>

        <cds-file>
          <label>file label</label>
          <input type="file" multiple />
        </cds-file>

        <cds-select>
          <label>select multiple</label>
          <select multiple>
            <option>Option One</option>
            <option>Option Two</option>
            <option>Option Three</option>
            <option>Option Four</option>
            <option>Option Five</option>
          </select>
        </cds-select>

        <cds-textarea>
          <label>textarea label</label>
          <textarea></textarea>
        </cds-textarea>

        <cds-button>save</cds-button>
      </cds-form-group>
    </form>
  `;
};

export const compact = () => {
  return html`
    <form>
      <cds-form-group layout="compact">
        <cds-input>
          <label>text label</label>
          <input placeholder="place holder text" />
        </cds-input>

        <cds-select>
          <label>select label</label>
          <select>
            <option>Option One</option>
            <option>Option Two</option>
            <option>Option Three</option>
          </select>
          <cds-control-message>message text</cds-control-message>
        </cds-select>

        <cds-datalist>
          <label>datalist label</label>
          <input placeholder="place holder text" />
          <datalist>
            <option value="Item 1"></option>
            <option value="Item 2"></option>
            <option value="Item 3"></option>
          </datalist>
          <cds-control-message>message text</cds-control-message>
        </cds-datalist>

        <cds-password>
          <label>password label</label>
          <input type="password" placeholder="password" />
        </cds-password>

        <cds-search>
          <label>search label</label>
          <input type="search" placeholder="search" />
        </cds-search>

        <cds-time>
          <label>time label</label>
          <input type="time" min="09:00" max="18:00" value="11:00" />
        </cds-time>

        <cds-input-group>
          <label>input group label</label>
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

        <cds-range>
          <label>range label</label>
          <input type="range" min="0" max="100" value="75" step="5" />
          <cds-control-message>CPU Utilization</cds-control-message>
        </cds-range>

        <cds-checkbox-group>
          <label>checkbox group label</label>
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
        </cds-checkbox-group>

        <cds-radio-group name="region">
          <label>radio group label</label>
          <cds-radio>
            <label>North America</label>
            <input type="radio" value="north-america" checked />
          </cds-radio>
          <cds-radio>
            <label>South America</label>
            <input type="radio" value="south-america" />
          </cds-radio>
          <cds-radio>
            <label>Europe</label>
            <input type="radio" value="europe" />
          </cds-radio>
          <cds-control-message>control message</cds-control-message>
        </cds-radio-group>

        <cds-toggle-group>
          <label>toggle group</label>
          <cds-toggle>
            <label>toggle 1</label>
            <input type="checkbox" checked />
          </cds-toggle>
          <cds-toggle>
            <label>toggle 2</label>
            <input type="checkbox" />
          </cds-toggle>
        </cds-toggle-group>

        <cds-file>
          <label>file label</label>
          <input type="file" multiple />
        </cds-file>

        <cds-select>
          <label>select multiple</label>
          <select multiple>
            <option>Option One</option>
            <option>Option Two</option>
            <option>Option Three</option>
            <option>Option Four</option>
            <option>Option Five</option>
          </select>
        </cds-select>

        <cds-textarea>
          <label>textarea label</label>
          <textarea></textarea>
        </cds-textarea>

        <cds-button>save</cds-button>
      </cds-form-group>
    </form>
  `;
};

export const compactShrink = () => {
  return html`
    <form>
      <cds-form-group layout="compact" control-width="shrink">
        <cds-input>
          <label>text label</label>
          <input placeholder="place holder text" />
        </cds-input>

        <cds-select>
          <label>select label</label>
          <select>
            <option>Option One</option>
            <option>Option Two</option>
            <option>Option Three</option>
          </select>
          <cds-control-message>message text</cds-control-message>
        </cds-select>

        <cds-datalist>
          <label>datalist label</label>
          <input placeholder="place holder text" />
          <datalist>
            <option value="Item 1"></option>
            <option value="Item 2"></option>
            <option value="Item 3"></option>
          </datalist>
          <cds-control-message>message text</cds-control-message>
        </cds-datalist>

        <cds-password>
          <label>password label</label>
          <input type="password" placeholder="password" />
        </cds-password>

        <cds-search>
          <label>search label</label>
          <input type="search" placeholder="search" />
        </cds-search>

        <cds-time>
          <label>time label</label>
          <input type="time" min="09:00" max="18:00" value="11:00" />
        </cds-time>

        <cds-input-group>
          <label>input group label</label>
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

        <cds-range>
          <label>range label</label>
          <input type="range" min="0" max="100" value="75" step="5" />
          <cds-control-message>CPU Utilization</cds-control-message>
        </cds-range>

        <cds-checkbox-group>
          <label>checkbox group label</label>
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
        </cds-checkbox-group>

        <cds-radio-group name="region">
          <label>radio group label</label>
          <cds-radio>
            <label>North America</label>
            <input type="radio" value="north-america" checked />
          </cds-radio>
          <cds-radio>
            <label>South America</label>
            <input type="radio" value="south-america" />
          </cds-radio>
          <cds-radio>
            <label>Europe</label>
            <input type="radio" value="europe" />
          </cds-radio>
          <cds-control-message>control message</cds-control-message>
        </cds-radio-group>

        <cds-toggle-group>
          <label>toggle group</label>
          <cds-toggle>
            <label>toggle 1</label>
            <input type="checkbox" checked />
          </cds-toggle>
          <cds-toggle>
            <label>toggle 2</label>
            <input type="checkbox" />
          </cds-toggle>
        </cds-toggle-group>

        <cds-file>
          <label>file label</label>
          <input type="file" multiple />
        </cds-file>

        <cds-select>
          <label>select multiple</label>
          <select multiple>
            <option>Option One</option>
            <option>Option Two</option>
            <option>Option Three</option>
            <option>Option Four</option>
            <option>Option Five</option>
          </select>
        </cds-select>

        <cds-textarea>
          <label>textarea label</label>
          <textarea></textarea>
        </cds-textarea>

        <cds-button>save</cds-button>
      </cds-form-group>
    </form>
  `;
};

export const controlWidth = () => {
  return html`
    <form>
      <cds-form-group control-width="shrink">
        <cds-input>
          <label>text label</label>
          <input placeholder="place holder text" />
        </cds-input>

        <cds-select>
          <label>select label</label>
          <select>
            <option>Option One</option>
            <option>Option Two</option>
            <option>Option Three</option>
          </select>
          <cds-control-message>message text</cds-control-message>
        </cds-select>

        <cds-datalist>
          <label>datalist label</label>
          <input placeholder="place holder text" />
          <datalist>
            <option value="Item 1"></option>
            <option value="Item 2"></option>
            <option value="Item 3"></option>
          </datalist>
        </cds-datalist>

        <cds-password>
          <label>password label</label>
          <input type="password" placeholder="password" />
        </cds-password>

        <cds-search>
          <label>search label</label>
          <input type="search" placeholder="search" />
        </cds-search>

        <cds-time>
          <label>time label</label>
          <input type="time" min="09:00" max="18:00" value="11:00" />
        </cds-time>

        <cds-input-group>
          <label>input group label</label>
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

        <cds-range>
          <label>range label</label>
          <input type="range" min="0" max="100" value="75" step="5" />
          <cds-control-message>CPU Utilization</cds-control-message>
        </cds-range>

        <cds-checkbox-group>
          <label>checkbox group label</label>
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
        </cds-checkbox-group>

        <cds-radio-group name="region">
          <label>radio group label</label>
          <cds-radio>
            <label>North America</label>
            <input type="radio" value="north-america" checked />
          </cds-radio>
          <cds-radio>
            <label>South America</label>
            <input type="radio" value="south-america" />
          </cds-radio>
          <cds-radio>
            <label>Europe</label>
            <input type="radio" value="europe" />
          </cds-radio>
        </cds-radio-group>

        <cds-toggle-group>
          <label>toggle group</label>
          <cds-toggle>
            <label>toggle 1</label>
            <input type="checkbox" checked />
          </cds-toggle>
          <cds-toggle>
            <label>toggle 2</label>
            <input type="checkbox" />
          </cds-toggle>
        </cds-toggle-group>

        <cds-file>
          <label>file label</label>
          <input type="file" multiple />
        </cds-file>

        <cds-select>
          <label>select multiple</label>
          <select multiple>
            <option>Option One</option>
            <option>Option Two</option>
            <option>Option Three</option>
            <option>Option Four</option>
            <option>Option Five</option>
          </select>
        </cds-select>

        <cds-textarea>
          <label>textarea label</label>
          <textarea></textarea>
        </cds-textarea>

        <cds-button>save</cds-button>
      </cds-form-group>
    </form>
  `;
};

export const internationalization = () => {
  return html`
    <form>
      <cds-form-group dir="rtl" layout="horizontal-inline" control-width="shrink">
        <cds-input>
          <label>نص</label>
          <input placeholder="نص" />
        </cds-input>

        <cds-select>
          <label>تحديد</label>
          <select>
            <option>واحد</option>
            <option>اثنان</option>
            <option>ثلاثة</option>
          </select>
          <cds-control-message>رسالة</cds-control-message>
        </cds-select>

        <cds-datalist>
          <label>قائمة البيانات</label>
          <input placeholder="نص العنصر النائب" />
          <datalist>
            <option value="واحد"></option>
            <option value="اثنان"></option>
            <option value="ثلاثة"></option>
          </datalist>
        </cds-datalist>

        <cds-password>
          <label>كلمه السر</label>
          <input type="password" placeholder="password" />
        </cds-password>

        <cds-search>
          <label>بحث</label>
          <input type="search" placeholder="بحث" />
        </cds-search>

        <cds-time>
          <label>زمن</label>
          <input type="time" min="09:00" max="18:00" value="11:00" />
        </cds-time>

        <cds-input-group>
          <label>مجموعة</label>
          <cds-input>
            <label>ميناء</label>
            <input placeholder="localhost:8000" type="url" />
          </cds-input>
          <cds-select>
            <label>بروتوكول</label>
            <select dir="ltr">
              <option>http://</option>
              <option>https://</option>
            </select>
          </cds-select>
          <cds-control-message>ميناء: 123456</cds-control-message>
        </cds-input-group>

        <cds-range>
          <label>نطاق</label>
          <input type="range" min="0" max="100" value="75" step="5" />
          <cds-control-message>رسالة</cds-control-message>
        </cds-range>

        <cds-checkbox-group>
          <label>خانة الاختيار</label>
          <cds-checkbox>
            <label>خانة الاختيار</label>
            <input type="checkbox" checked />
          </cds-checkbox>

          <cds-checkbox>
            <label>خانة الاختيار</label>
            <input type="checkbox" />
          </cds-checkbox>

          <cds-checkbox>
            <label>خانة الاختيار</label>
            <input type="checkbox" />
          </cds-checkbox>
        </cds-checkbox-group>

        <cds-radio-group name="region">
          <label>مجموعة راديو</label>
          <cds-radio>
            <label>شمال امريكا</label>
            <input type="radio" value="north-america" checked />
          </cds-radio>
          <cds-radio>
            <label>امريكا الجنوبية</label>
            <input type="radio" value="south-america" />
          </cds-radio>
          <cds-radio>
            <label>أوروبا</label>
            <input type="radio" value="europe" />
          </cds-radio>
        </cds-radio-group>

        <cds-toggle-group>
          <label>التبديل</label>
          <cds-toggle>
            <label>التبديل</label>
            <input type="checkbox" checked />
          </cds-toggle>
          <cds-toggle>
            <label>التبديل</label>
            <input type="checkbox" />
          </cds-toggle>
        </cds-toggle-group>

        <cds-file>
          <label>ملف</label>
          <input type="file" multiple />
        </cds-file>

        <cds-select>
          <label>حدد متعددة</label>
          <select multiple>
            <option>اختيار</option>
            <option>اختيار</option>
            <option>اختيار</option>
            <option>اختيار</option>
            <option>اختيار</option>
          </select>
        </cds-select>

        <cds-textarea>
          <label>منطقة النص</label>
          <textarea></textarea>
        </cds-textarea>

        <cds-button>حفظ</cds-button>
      </cds-form-group>
    </form>
  `;
};

export const responsiveCheckboxGroup = () => {
  return html`
    <cds-demo resizable style="max-width: 565px">
      <cds-checkbox-group layout="compact">
        <label>checkbox label</label>
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
    </cds-demo>
  `;
};

export const disabledResponsiveCheckboxGroup = () => {
  return html`
    <cds-demo resizable style="max-width: 565px">
      <cds-checkbox-group layout="compact" responsive="false">
        <label>checkbox label</label>
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
    </cds-demo>
  `;
};

export const responsive = () => {
  return html`
    <cds-demo resizable style="max-width: 520px; min-width: 300px">
      <cds-form-group layout="horizontal-inline">
        <cds-input>
          <label>text label</label>
          <input placeholder="place holder text" />
          <cds-control-message>message text</cds-control-message>
        </cds-input>

        <cds-select>
          <label>select label</label>
          <select>
            <option>Option One</option>
            <option>Option Two</option>
            <option>Option Three</option>
          </select>
          <cds-control-message>message text</cds-control-message>
        </cds-select>

        <cds-password>
          <label>password label</label>
          <input type="password" placeholder="password" />
        </cds-password>

        <cds-search>
          <label>search label</label>
          <input type="search" placeholder="search" />
        </cds-search>

        <cds-range>
          <label>range label</label>
          <input type="range" min="0" max="100" value="75" step="5" />
          <cds-control-message>CPU Utilization</cds-control-message>
        </cds-range>

        <cds-radio-group name="region">
          <label>radio group label</label>
          <cds-radio>
            <label>North America</label>
            <input type="radio" value="north-america" checked />
          </cds-radio>
          <cds-radio>
            <label>South America</label>
            <input type="radio" value="south-america" />
          </cds-radio>
          <cds-radio>
            <label>Europe</label>
            <input type="radio" value="europe" />
          </cds-radio>
        </cds-radio-group>

        <cds-textarea>
          <label>textarea label</label>
          <textarea></textarea>
        </cds-textarea>

        <cds-button>save</cds-button>
      </cds-form-group>
    </cds-demo>
  `;
};

export const longText = () => {
  return html`
    <style>
      .long-text-demo label {
        max-width: 200px;
      }
    </style>
    <div cds-layout="vertical gap:lg" class="long-text-demo">
      <h2 cds-text="heading">Vertical</h2>
      <cds-form-group layout="vertical">
        <cds-input>
          <label
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam</label
          >
          <input placeholder="place holder text" />
          <cds-control-message
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam</cds-control-message
          >
        </cds-input>

        <cds-radio-group name="region">
          <label>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam
          </label>
          <cds-radio>
            <label>North America</label>
            <input type="radio" value="north-america" checked />
          </cds-radio>
          <cds-radio>
            <label>South America</label>
            <input type="radio" value="south-america" />
          </cds-radio>
          <cds-radio>
            <label>Europe</label>
            <input type="radio" value="europe" />
          </cds-radio>
          <cds-control-message
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam</cds-control-message
          >
        </cds-radio-group>
      </cds-form-group>

      <h2 cds-text="heading">Horizontal</h2>
      <cds-form-group layout="horizontal">
        <cds-input>
          <label
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam</label
          >
          <input placeholder="place holder text" />
          <cds-control-message
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam</cds-control-message
          >
        </cds-input>

        <cds-radio-group name="region">
          <label>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam
          </label>
          <cds-radio>
            <label>North America</label>
            <input type="radio" value="north-america" checked />
          </cds-radio>
          <cds-radio>
            <label>South America</label>
            <input type="radio" value="south-america" />
          </cds-radio>
          <cds-radio>
            <label>Europe</label>
            <input type="radio" value="europe" />
          </cds-radio>
          <cds-control-message
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam</cds-control-message
          >
        </cds-radio-group>
      </cds-form-group>

      <h2 cds-text="heading">Compact</h2>
      <cds-form-group layout="compact">
        <cds-input status="error">
          <label
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam</label
          >
          <input placeholder="place holder text" />
          <cds-control-message status="error"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam</cds-control-message
          >
        </cds-input>

        <cds-radio-group name="region">
          <label>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam
          </label>
          <cds-radio>
            <label>North America</label>
            <input type="radio" value="north-america" checked />
          </cds-radio>
          <cds-radio>
            <label>South America</label>
            <input type="radio" value="south-america" />
          </cds-radio>
          <cds-radio>
            <label>Europe</label>
            <input type="radio" value="europe" />
          </cds-radio>
          <cds-control-message
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam</cds-control-message
          >
        </cds-radio-group>
      </cds-form-group>

      <h2 cds-text="heading">Vertical</h2>
      <cds-form-group layout="vertical">
        <cds-input>
          <label>Lorem ipsum</label>
          <input placeholder="place holder text" />
          <cds-control-message>Lorem ipsum</cds-control-message>
        </cds-input>

        <cds-radio-group name="region">
          <label>Lorem ipsum</label>
          <cds-radio>
            <label>North America</label>
            <input type="radio" value="north-america" checked />
          </cds-radio>
          <cds-radio>
            <label>South America</label>
            <input type="radio" value="south-america" />
          </cds-radio>
          <cds-radio>
            <label>Europe</label>
            <input type="radio" value="europe" />
          </cds-radio>
          <cds-control-message>Lorem ipsum</cds-control-message>
        </cds-radio-group>
      </cds-form-group>

      <h2 cds-text="heading">Horizontal</h2>
      <cds-form-group layout="horizontal">
        <cds-input>
          <label>Lorem ipsum</label>
          <input placeholder="place holder text" />
          <cds-control-message>Lorem ipsum</cds-control-message>
        </cds-input>

        <cds-radio-group name="region">
          <label>Lorem ipsum</label>
          <cds-radio>
            <label>North America</label>
            <input type="radio" value="north-america" checked />
          </cds-radio>
          <cds-radio>
            <label>South America</label>
            <input type="radio" value="south-america" />
          </cds-radio>
          <cds-radio>
            <label>Europe</label>
            <input type="radio" value="europe" />
          </cds-radio>
          <cds-control-message>Lorem ipsum</cds-control-message>
        </cds-radio-group>
      </cds-form-group>

      <h2 cds-text="heading">Compact</h2>
      <cds-form-group layout="compact">
        <cds-input>
          <label>Lorem ipsum</label>
          <input placeholder="place holder text" />
          <cds-control-message>Lorem ipsum</cds-control-message>
        </cds-input>

        <cds-radio-group name="region">
          <label>Lorem ipsum</label>
          <cds-radio>
            <label>North America</label>
            <input type="radio" value="north-america" checked />
          </cds-radio>
          <cds-radio>
            <label>South America</label>
            <input type="radio" value="south-america" />
          </cds-radio>
          <cds-radio>
            <label>Europe</label>
            <input type="radio" value="europe" />
          </cds-radio>
          <cds-control-message>Lorem ipsum</cds-control-message>
        </cds-radio-group>
      </cds-form-group>
    </div>
  `;
};

export const multiColumn = () => {
  return html`
    <form>
      <cds-form-group layout="vertical">
        <div cds-layout="grid gap:lg cols@sm:6">
          <cds-input>
            <label>First Name</label>
            <input type="text" />
          </cds-input>

          <cds-input>
            <label>Last Name</label>
            <input type="text" />
          </cds-input>

          <cds-input cds-layout="col:12">
            <label>Email</label>
            <input type="email" />
          </cds-input>

          <cds-textarea cds-layout="col:12">
            <label>profile description</label>
            <textarea></textarea>
          </cds-textarea>
        </div>
        <cds-button>Update Profile</cds-button>
      </cds-form-group>
    </form>
  `;
};

// https://getbootstrap.com/docs/4.5/examples/checkout/
export const checkoutForm = () => {
  return html`
    <div cds-layout="vertical gap:xl container:sm" role="region" aria-labelledby="checkout-form-title">
      <p id="checkout-form-title" cds-text="title">Example Payment Form</p>

      <cds-form-group layout="vertical" cds-layout="vertical" role="group" aria-labelledby="billing-group-title">
        <p id="billing-group-title" cds-text="section">Billing Information</p>
        <div cds-layout="grid cols@xs:6 gap:lg p-t:sm">
          <cds-input>
            <label>first name</label>
            <input type="text" />
          </cds-input>

          <cds-input>
            <label>last name</label>
            <input type="text" />
          </cds-input>
        </div>

        <cds-input>
          <label>email</label>
          <input type="email" placeholder="you@example.com" />
        </cds-input>

        <div cds-layout="grid cols@xs:6 gap:lg p-t:sm">
          <cds-input>
            <label>address</label>
            <input type="text" placeholder="1234 Main St." />
          </cds-input>

          <cds-input>
            <label>address 2</label>
            <input type="text" placeholder="Apartment or Suite" />
            <cds-control-message>(optional)</cds-control-message>
          </cds-input>
        </div>

        <div cds-layout="grid gap:lg p-t:sm">
          <cds-select cds-layout="col@xs:6 col@sm:5">
            <label>Country</label>
            <select>
              <option>choose...</option>
              <option>United States</option>
            </select>
          </cds-select>

          <cds-select cds-layout="col@xs:6 col@sm:4">
            <label>State</label>
            <select>
              <option>choose...</option>
              <option>California</option>
            </select>
          </cds-select>

          <cds-input cds-layout="col@sm:3">
            <label>Postal Code</label>
            <input type="text" placeholder="" />
          </cds-input>
        </div>
      </cds-form-group>

      <cds-form-group layout="vertical" cds-layout="vertical m-t:md" role="group" aria-labelledby="payment-group-title">
        <p id="payment-group-title" cds-text="section">Payment</p>
        <cds-radio-group cds-layout="p-t:sm">
          <label>payment type</label>
          <cds-radio>
            <label>credit card</label>
            <input type="radio" value="1" checked />
          </cds-radio>
          <cds-radio>
            <label>debt card</label>
            <input type="radio" value="2" />
          </cds-radio>
          <cds-radio>
            <label>paypal</label>
            <input type="radio" value="3" />
          </cds-radio>
        </cds-radio-group>

        <cds-checkbox-group cds-layout="p-t:md">
          <label>Shipping Details</label>
          <cds-checkbox>
            <label>Shipping address is the same as my billing address</label>
            <input type="checkbox" />
          </cds-checkbox>
          <cds-checkbox>
            <label>Save this information for next time</label>
            <input type="checkbox" />
          </cds-checkbox>
        </cds-checkbox-group>

        <div cds-layout="grid cols@xs:6 gap:lg p-t:md">
          <cds-input>
            <label>name on card</label>
            <input type="text" />
            <cds-control-message>full name as displayed on card</cds-control-message>
          </cds-input>

          <cds-input>
            <label>credit card number</label>
            <input type="number" />
          </cds-input>
        </div>
        <div cds-layout="grid gap:lg p-t:md">
          <cds-input cds-layout="cols@xs:6 col@sm:4">
            <label>expiration</label>
            <input type="text" />
          </cds-input>

          <cds-input cds-layout="cols@xs:6 col@sm:3">
            <label>CVV</label>
            <input type="number" />
          </cds-input>

          <cds-input cds-layout="col@sm:5">
            <label>promo code</label>
            <input type="text" />
            <cds-control-action action="suffix" aria-label="add promo code">
              <cds-icon shape="add"></cds-icon>
            </cds-control-action>
          </cds-input>
        </div>
      </cds-form-group>
      <cds-button cds-layout="m-t:lg">continue to checkout</cds-button>
    </div>
  `;
};

export const responsiveCheckoutForm = () => {
  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>('#complex-form-demo');
    iframe.onload = () => {
      const resizeObserver = new ResizeObserver(
        () => (iframe.style.height = `${iframe.contentWindow?.document.body.scrollHeight}px`)
      );
      resizeObserver.observe(iframe);
    };
  });

  return html` <style>
      #complex-form-demo {
        width: 100%;
        max-width: 820px;
        min-width: 440px;
        height: 1260px;
      }
    </style>
    <iframe
      src="./iframe.html?id=stories-forms--checkout-form&viewMode=story"
      scrolling="no"
      frameborder="0"
      resizable="true"
      id="complex-form-demo"
      resizable
    ></iframe>`;
};

export const darkTheme = () => {
  return html`
    <form cds-theme="dark">
      <cds-form-group layout="horizontal-inline">
        <cds-input>
          <label>text label</label>
          <input placeholder="placeholder text" />
          <cds-control-message status="error">error message</cds-control-message>
        </cds-input>

        <cds-select>
          <label>select label</label>
          <select>
            <option>Option One</option>
            <option>Option Two</option>
            <option>Option Three</option>
          </select>
          <cds-control-message status="success">success text</cds-control-message>
        </cds-select>

        <cds-datalist>
          <label>datalist label</label>
          <input placeholder="placeholder text" />
          <datalist>
            <option value="Item 1"></option>
            <option value="Item 2"></option>
            <option value="Item 3"></option>
          </datalist>
        </cds-datalist>

        <cds-password>
          <label>password label</label>
          <input type="password" placeholder="password" />
        </cds-password>

        <cds-search>
          <label>search label</label>
          <input type="search" placeholder="search" />
        </cds-search>

        <cds-time>
          <label>time label</label>
          <input type="time" min="09:00" max="18:00" value="11:00" />
        </cds-time>

        <cds-input-group>
          <label>input group label</label>
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

        <cds-range>
          <label>range label</label>
          <input type="range" min="0" max="100" value="75" step="5" />
          <cds-control-message>CPU Utilization</cds-control-message>
        </cds-range>

        <cds-checkbox-group>
          <label>checkbox group label</label>
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
        </cds-checkbox-group>

        <cds-radio-group name="region">
          <label>radio group label</label>
          <cds-radio>
            <label>North America</label>
            <input type="radio" value="north-america" checked />
          </cds-radio>
          <cds-radio>
            <label>South America</label>
            <input type="radio" value="south-america" />
          </cds-radio>
          <cds-radio>
            <label>Europe</label>
            <input type="radio" value="europe" />
          </cds-radio>
        </cds-radio-group>

        <cds-toggle-group>
          <label>toggle group</label>
          <cds-toggle>
            <label>toggle 1</label>
            <input type="checkbox" checked />
          </cds-toggle>
          <cds-toggle>
            <label>toggle 2</label>
            <input type="checkbox" />
          </cds-toggle>
        </cds-toggle-group>

        <cds-file>
          <label>file label</label>
          <input type="file" multiple />
        </cds-file>

        <cds-select>
          <label>select multiple</label>
          <select multiple>
            <option>Option One</option>
            <option>Option Two</option>
            <option>Option Three</option>
            <option>Option Four</option>
            <option>Option Five</option>
          </select>
        </cds-select>

        <cds-textarea>
          <label>textarea label</label>
          <textarea placeholder="placeholder..."></textarea>
        </cds-textarea>

        <cds-button>save</cds-button>
      </cds-form-group>
    </form>
  `;
};
