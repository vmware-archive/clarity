/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
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
import '@cds/core/button/register.js';
import '@cds/core/divider/register.js';
import { html } from 'lit';
import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { cloudIcon } from '@cds/core/icon/shapes/cloud.js';
import { plusIcon } from '@cds/core/icon/shapes/plus.js';
import { infoCircleIcon } from '@cds/core/icon/shapes/info-circle.js';

ClarityIcons.addIcons(cloudIcon, infoCircleIcon, plusIcon);

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

/** @website */
export function nativeHTML5ValidationSingle() {
  return html`
    <cds-input validate>
      <label>text input (required)</label>
      <input placeholder="place holder text" required />
      <cds-control-message error="valueMissing">required</cds-control-message>
    </cds-input>
  `;
}

/** @website */
export function nativeHTML5Validation() {
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
}

/** @website */
export function novalidate() {
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
}

/** @website */
export function form() {
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
            <cds-control-action action="suffix" readonly aria-label="host status stable">
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
}

/** @website */
export function vertical() {
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
            <cds-control-action action="suffix" readonly aria-label="host status stable">
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
}

/** @website */
export function verticalInline() {
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
            <cds-control-action action="suffix" readonly aria-label="host status stable">
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
}

/** @website */
export function horizontal() {
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
            <cds-control-action action="suffix" readonly aria-label="host status stable">
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
}

/** @website */
export function horizontalInline() {
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
            <cds-control-action action="suffix" readonly aria-label="host status stable">
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
}

/** @website */
export function compact() {
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
            <cds-control-action action="suffix" readonly aria-label="host status stable">
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
}

/** @website */
export function compactShrink() {
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
            <cds-control-action action="suffix" readonly aria-label="host status stable">
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
}

/** @website */
export function controlWidth() {
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
            <cds-control-action action="suffix" readonly aria-label="host status stable">
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
}

export function labelWidth() {
  return html`
    <form>
      <cds-form-group layout="horizontal" style="--label-width: 250px">
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
            <cds-control-action action="suffix" readonly aria-label="host status stable">
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
}

export function verticalRow() {
  return html`
    <form>
      <cds-form-group layout="vertical-inline" control-width="shrink">
        <div cds-layout="horizontal gap:lg align:vertical-center">
          <cds-button action="flat-inline" size="sm">
            Action
          </cds-button>

          <cds-divider orientation="vertical"></cds-divider>

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

          <cds-search>
            <label>search label</label>
            <input type="search" placeholder="search" />
          </cds-search>
        </div>
      </cds-form-group>
    </form>
  `;
}

export function horizontalRow() {
  return html`
    <style>
      .form-group-demo {
        --internal-label-min-width: initial !important;
      }
    </style>

    <form>
      <cds-form-group class="form-group-demo" control-width="shrink" layout="horizontal-inline">
        <div cds-layout="horizontal gap:lg align:vertical-center">
          <cds-button action="flat-inline" size="sm">
            Action
          </cds-button>

          <cds-divider orientation="vertical"></cds-divider>

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
        </div>
      </cds-form-group>
    </form>
  `;
}

/** @website */
export function internationalization() {
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
}

/** @website */
export function responsiveCheckboxGroup() {
  return html`
    <cds-demo resizable style="max-width: 600px">
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
}

/** @website */
export function disabledResponsiveCheckboxGroup() {
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
}

/** @website */
export function responsive() {
  return html`
    <cds-demo resizable style="max-width: 540px; min-width: 260px">
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
}

/** @website */
export function longText() {
  return html`
    <style>
      .form-label-demo {
        --width: 100%;
        overflow: hidden;
        padding: 4px;
        resize: horizontal;
        margin-bottom: 24px;
        min-width: 220px;
      }
    </style>
    <cds-card class="form-label-demo">
      <div cds-layout="vertical gap:xl">
        <h2 cds-text="section">Long Text Status</h2>

        <cds-input layout="compact">
          <label>compact text input</label>
          <input type="text" />
          <cds-control-message status="error">message text</cds-control-message>
        </cds-input>

        <cds-input layout="horizontal">
          <label>horizontal text input</label>
          <input type="text" />
          <cds-control-message status="error"
            >message text is very very long so it breaks the layout for us if it's very very long long
            long</cds-control-message
          >
        </cds-input>

        <cds-input layout="horizontal">
          <label
            >horizontal text input message text is very very long so it breaks the layout for us if it's very very long
            long
          </label>
          <input type="text" />
          <cds-control-message status="error"
            >message text is very very long so it breaks the layout for us if it's very very long long
            long</cds-control-message
          >
        </cds-input>

        <cds-input layout="compact">
          <label
            >compact text input message text is very very long so it breaks the layout for us if it's very very long
            long
          </label>
          <input type="text" />
          <cds-control-message status="error"
            >message text is very very long so it breaks the layout for us if it's very very long long
            long</cds-control-message
          >
        </cds-input>
      </div>
    </cds-card>
    <cds-card class="form-label-demo">
      <div cds-layout="vertical gap:xl">
        <h2 cds-text="section">Long Text</h2>

        <cds-input layout="vertical">
          <label
            >Vertical Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam</label
          >
          <input placeholder="place holder text" />
          <cds-control-message
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam</cds-control-message
          >
        </cds-input>

        <cds-input layout="horizontal">
          <label
            >Horizontal Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam</label
          >
          <input placeholder="place holder text" />
          <cds-control-message
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam</cds-control-message
          >
        </cds-input>

        <cds-input layout="horizontal">
          <label>Horizontal Lorem ipsum</label>
          <input placeholder="place holder text" />
          <cds-control-message>Lorem ipsum</cds-control-message>
        </cds-input>

        <cds-input layout="compact">
          <label
            >Compact Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam</label
          >
          <input placeholder="place holder text" />
          <cds-control-message
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam</cds-control-message
          >
        </cds-input>

        <cds-input layout="compact">
          <label>Compact</label>
          <input placeholder="place holder text" />
          <cds-control-message>Lorem ipsum</cds-control-message>
        </cds-input>

        <cds-radio-group layout="compact">
          <label>compact radio group</label>
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

          <cds-control-message>control message</cds-control-message>
        </cds-radio-group>

        <cds-radio-group layout="vertical">
          <label
            >Compact Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam</label
          >
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

          <cds-control-message
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam</cds-control-message
          >
        </cds-radio-group>
      </div>
    </cds-card>

    <cds-card class="form-label-demo">
      <div cds-layout="vertical gap:xl">
        <h2 cds-text="section">Form Group</h2>

        <cds-form-group layout="compact">
          <cds-input>
            <label>Lorem ipsum dolor sit amet</label>
            <input placeholder="place holder text" />
            <cds-control-message>Lorem ipsum dolor sit amet</cds-control-message>
          </cds-input>

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

          <cds-input>
            <label
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</label
            >
            <input placeholder="place holder text" />
            <cds-control-message
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam</cds-control-message
            >
          </cds-input>
        </cds-form-group>
      </div>
    </cds-card>

    <cds-card class="form-label-demo">
      <div cds-layout="vertical gap:xl">
        <h2 cds-text="section">Form Group - Control Width Shrink</h2>

        <cds-form-group layout="compact" control-width="shrink">
          <cds-input>
            <label>Lorem ipsum dolor sit amet</label>
            <input placeholder="place holder text" />
            <cds-control-message>Lorem ipsum dolor sit amet</cds-control-message>
          </cds-input>

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

          <cds-input>
            <label
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</label
            >
            <input placeholder="place holder text" />
            <cds-control-message
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam</cds-control-message
            >
          </cds-input>
        </cds-form-group>
      </div>
    </cds-card>

    <cds-card class="form-label-demo">
      <div cds-layout="vertical gap:xl">
        <h2 cds-text="section">Short Text</h2>

        <cds-input layout="vertical">
          <label>Lorem ipsum dolor sit amet</label>
          <input placeholder="place holder text" />
          <cds-control-message>Lorem ipsum dolor sit amet</cds-control-message>
        </cds-input>

        <cds-input layout="horizontal">
          <label>Lorem ipsum dolor sit amet</label>
          <input placeholder="place holder text" />
          <cds-control-message>Lorem ipsum dolor sit amet</cds-control-message>
        </cds-input>

        <cds-input layout="compact">
          <label>Lorem ipsum dolor sit amet</label>
          <input placeholder="place holder text" />
          <cds-control-message>Lorem ipsum dolor sit amet</cds-control-message>
        </cds-input>
      </div>
    </cds-card>
  `;
}

// https://getbootstrap.com/docs/4.5/examples/checkout/
/** @website */
export function checkoutForm() {
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
            <cds-control-action shape="plus" action="suffix" aria-label="add promo code"></cds-control-action>
          </cds-input>
        </div>
      </cds-form-group>
      <cds-button>continue to checkout</cds-button>
    </div>
  `;
}

export function responsiveCheckoutForm() {
  return html` <style>
      #complex-form-demo {
        width: 100%;
        max-width: 820px;
        min-width: 440px;
        height: 1000px;
      }
    </style>
    <iframe
      src="./iframe.html?id=stories-forms--checkout-form&amp;viewMode=story"
      frameborder="0"
      resizable="true"
      id="complex-form-demo"
      title="responsive form demo"
    ></iframe>`;
}

export function submitOnEnter() {
  let count = 0;
  let typeVal = 'submit';

  const onSubmit = {
    handleEvent(e: any) {
      e.preventDefault();
      count++;
      document.querySelector('div#submit-count').innerHTML = `Submit count: ${count}`;
      return false;
    },
  };

  const changeType = {
    handleEvent() {
      typeVal = typeVal === 'submit' ? 'button' : 'submit';
      const button = document.querySelector('cds-button[name=test-button]');
      button.setAttribute('type', typeVal);
      document.querySelector('div#button-type').innerHTML = `type="${typeVal}"`;
    },
  };

  return html`
    <div cds-layout="vertical gap:md">
      <form @submit="${onSubmit}">
        <cds-form-group layout="horizontal-inline">
          <cds-input>
            <label>Form input 1</label>
            <input placeholder="Press Enter to submit" />
          </cds-input>
          <cds-input>
            <label>Form input 2</label>
            <input placeholder="Press Enter to submit" />
          </cds-input>
          <cds-button type="${typeVal}" name="test-button" value="test-value">Submit</cds-button>
        </cds-form-group>
      </form>
      <div id="submit-count">Submit count: ${count}</div>
      <div><cds-button @click="${changeType}">Change type</cds-button></div>
      <div id="button-type">type="${typeVal}"</div>
    </div>
  `;
}

/** @website */
export function darkTheme() {
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
            <cds-control-action action="suffix" readonly aria-label="host status stable">
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
}
