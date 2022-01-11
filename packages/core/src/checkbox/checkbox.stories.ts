/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/checkbox/register.js';
import { html } from 'lit';
import { spreadProps, getElementStorybookArgs } from '@cds/core/internal';

export default {
  title: 'Stories/Checkbox',
  component: 'cds-checkbox',
  parameters: {
    options: { showPanel: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=0%3A871',
    },
  },
};

export function API(args: any) {
  return html`
    <cds-checkbox ...="${spreadProps(getElementStorybookArgs(args))}">
      <label>checked</label>
      <input type="checkbox" checked />
      <cds-control-message .status=${args.status}>message text</cds-control-message>
    </cds-checkbox>
  `;
}

/** @website */
export function checkbox() {
  return html`
    <cds-checkbox>
      <label>checkbox</label>
      <input type="checkbox" checked />
      <cds-control-message>message text</cds-control-message>
    </cds-checkbox>
  `;
}

/** @website */
export function status() {
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
}

/** @website */
export function verticalGroup() {
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
          <input type="checkbox" checked disabled />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 2</label>
          <input type="checkbox" disabled />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 3</label>
          <input type="checkbox" disabled />
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
}

/** @website */
export function verticalInlineGroup() {
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
          <input type="checkbox" checked disabled />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 2</label>
          <input type="checkbox" disabled />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 3</label>
          <input type="checkbox" disabled />
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
}

/** @website */
export function horizontalGroup() {
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
          <input type="checkbox" checked disabled />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 2</label>
          <input type="checkbox" disabled />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 3</label>
          <input type="checkbox" disabled />
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
}

/** @website */
export function horizontalInlineGroup() {
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
          <input type="checkbox" checked disabled />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 2</label>
          <input type="checkbox" disabled />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 3</label>
          <input type="checkbox" disabled />
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
}

/** @website */
export function compactGroup() {
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
          <input type="checkbox" checked disabled />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 2</label>
          <input type="checkbox" disabled />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 3</label>
          <input type="checkbox" disabled />
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
}

export function darkTheme() {
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
          <input type="checkbox" checked disabled />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 2</label>
          <input type="checkbox" disabled />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 3</label>
          <input type="checkbox" disabled />
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
}

export function inlineGroupControlMessages() {
  return html`
    <div cds-layout="vertical gap:lg">
      <cds-checkbox-group>
        <label>label</label>
        <cds-checkbox>
          <label>checkbox 1</label>
          <input type="checkbox" checked />
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 2</label>
          <input type="checkbox" />
          <cds-control-message><a cds-text="link" href="#">learn more</a></cds-control-message>
        </cds-checkbox>

        <cds-checkbox>
          <label>checkbox 3</label>
          <input type="checkbox" />
        </cds-checkbox>
      </cds-checkbox-group>
    </div>
  `;
}

export function complexCheckboxLabelLayouts() {
  return html`
    <div cds-layout="vertical gap:lg">
      <cds-checkbox-group layout="vertical-inline">
        <label>Vertical inline</label>
        <cds-checkbox selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM One</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="info"></cds-icon>
              <p cds-text="subsection center">Orchestrate & Automate</p>
            </div>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox>
        <cds-checkbox selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM Two</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="success"></cds-icon>
              <p cds-text="subsection center">Replication & Remediation</p>
            </div>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox>
        <cds-checkbox selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM Three</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="warning"></cds-icon>
              <p cds-text="subsection center">Scale & Secure</p>
            </div>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox>
        <cds-checkbox selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM Four</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="danger"></cds-icon>
              <p cds-text="subsection center">Storage & Salvage</p>
            </div>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox>
        <cds-control-message>Helper text2</cds-control-message>
      </cds-checkbox-group>
      <cds-checkbox-group layout="horizontal-inline">
        <label>Horizontal inline</label>
        <cds-checkbox selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM One</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="info"></cds-icon>
              <p cds-text="subsection center">Orchestrate & Automate</p>
            </div>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox>
        <cds-checkbox selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM Two</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="success"></cds-icon>
              <p cds-text="subsection center">Replication & Remediation</p>
            </div>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox>
        <cds-checkbox selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM Three</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="warning"></cds-icon>
              <p cds-text="subsection center">Scale & Secure</p>
            </div>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox>
        <cds-checkbox selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM Four</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="danger"></cds-icon>
              <p cds-text="subsection center">Storage & Salvage</p>
            </div>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox>
        <cds-control-message>Helper text</cds-control-message>
      </cds-checkbox-group>
      <cds-checkbox-group layout="compact">
        <label>Compact</label>
        <cds-checkbox selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM One</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="info"></cds-icon>
              <p cds-text="subsection center">Orchestrate & Automate</p>
            </div>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox>
        <cds-checkbox selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM Two</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="success"></cds-icon>
              <p cds-text="subsection center">Replication & Remediation</p>
            </div>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox>
        <cds-checkbox selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM Three</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="warning"></cds-icon>
              <p cds-text="subsection center">Scale & Secure</p>
            </div>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox>
        <cds-checkbox selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM Four</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="danger"></cds-icon>
              <p cds-text="subsection center">Storage & Salvage</p>
            </div>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox>
        <cds-control-message>Helper text</cds-control-message>
      </cds-checkbox-group>
      <section cds-layout="horizontal gap:lg wrap:none">
        <cds-checkbox-group layout="vertical">
          <label>Vertical</label>
          <cds-checkbox selection-panel>
            <label>
              <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
                <span cds-text="section">VM One</span>
                <!-- inert icon that does not provide any context to screen readers / is not interactive -->
                <cds-icon shape="vm" size="xl" badge="info"></cds-icon>
                <p cds-text="subsection center">Orchestrate & Automate</p>
              </div>
            </label>
            <input type="checkbox" value="1" />
          </cds-checkbox>
          <cds-checkbox selection-panel>
            <label>
              <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
                <span cds-text="section">VM Two</span>
                <!-- inert icon that does not provide any context to screen readers / is not interactive -->
                <cds-icon shape="vm" size="xl" badge="success"></cds-icon>
                <p cds-text="subsection center">Replication & Remediation</p>
              </div>
            </label>
            <input type="checkbox" value="1" />
          </cds-checkbox>
          <cds-checkbox selection-panel>
            <label>
              <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
                <span cds-text="section">VM Three</span>
                <!-- inert icon that does not provide any context to screen readers / is not interactive -->
                <cds-icon shape="vm" size="xl" badge="warning"></cds-icon>
                <p cds-text="subsection center">Scale & Secure</p>
              </div>
            </label>
            <input type="checkbox" value="1" />
          </cds-checkbox>
          <cds-checkbox selection-panel>
            <label>
              <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
                <span cds-text="section">VM Four</span>
                <!-- inert icon that does not provide any context to screen readers / is not interactive -->
                <cds-icon shape="vm" size="xl" badge="danger"></cds-icon>
                <p cds-text="subsection center">Storage & Salvage</p>
              </div>
            </label>
            <input type="checkbox" value="1" />
          </cds-checkbox>
          <cds-control-message>Helper text</cds-control-message>
        </cds-checkbox-group>
        <cds-checkbox-group layout="horizontal">
          <label>Horizontal</label>
          <cds-checkbox selection-panel>
            <label>
              <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
                <span cds-text="section">VM One</span>
                <!-- inert icon that does not provide any context to screen readers / is not interactive -->
                <cds-icon shape="vm" size="xl" badge="info"></cds-icon>
                <p cds-text="subsection center">Orchestrate & Automate</p>
              </div>
            </label>
            <input type="checkbox" value="1" />
          </cds-checkbox>
          <cds-checkbox selection-panel>
            <label>
              <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
                <span cds-text="section">VM Two</span>
                <!-- inert icon that does not provide any context to screen readers / is not interactive -->
                <cds-icon shape="vm" size="xl" badge="success"></cds-icon>
                <p cds-text="subsection center">Replication & Remediation</p>
              </div>
            </label>
            <input type="checkbox" value="1" />
          </cds-checkbox>
          <cds-checkbox selection-panel>
            <label>
              <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
                <span cds-text="section">VM Three</span>
                <!-- inert icon that does not provide any context to screen readers / is not interactive -->
                <cds-icon shape="vm" size="xl" badge="warning"></cds-icon>
                <p cds-text="subsection center">Scale & Secure</p>
              </div>
            </label>
            <input type="checkbox" value="1" />
          </cds-checkbox>
          <cds-checkbox selection-panel>
            <label>
              <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
                <span cds-text="section">VM Four</span>
                <!-- inert icon that does not provide any context to screen readers / is not interactive -->
                <cds-icon shape="vm" size="xl" badge="danger"></cds-icon>
                <p cds-text="subsection center">Storage & Salvage</p>
              </div>
            </label>
            <input type="checkbox" value="1" />
          </cds-checkbox>
          <cds-control-message>Helper text</cds-control-message>
        </cds-checkbox-group>
      </section>
    </div>
  `;
}

export function complexCheckboxLabelStatuses() {
  return html`
    <div cds-layout="vertical gap:lg">
      <cds-checkbox-group layout="vertical-inline" status="error">
        <label>Vertical inline</label>
        <cds-checkbox selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM One</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="info"></cds-icon>
              <p cds-text="subsection center">Orchestrate & Automate</p>
            </div>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox>
        <cds-checkbox selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM Two</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="success"></cds-icon>
              <p cds-text="subsection center">Replication & Remediation</p>
            </div>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox>
        <cds-checkbox selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM Three</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="warning"></cds-icon>
              <p cds-text="subsection center">Scale & Secure</p>
            </div>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox>
        <cds-checkbox selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM Four</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="danger"></cds-icon>
              <p cds-text="subsection center">Storage & Salvage</p>
            </div>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox>
        <cds-control-message status="error">Helper text2</cds-control-message>
      </cds-checkbox-group>

      <cds-checkbox-group layout="vertical-inline" status="success">
        <label>Vertical inline</label>
        <cds-checkbox selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM One</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="info"></cds-icon>
              <p cds-text="subsection center">Orchestrate & Automate</p>
            </div>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox>
        <cds-checkbox selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM Two</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="success"></cds-icon>
              <p cds-text="subsection center">Replication & Remediation</p>
            </div>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox>
        <cds-checkbox selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM Three</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="warning"></cds-icon>
              <p cds-text="subsection center">Scale & Secure</p>
            </div>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox>
        <cds-checkbox selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM Four</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="danger"></cds-icon>
              <p cds-text="subsection center">Storage & Salvage</p>
            </div>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox>
        <cds-control-message status="success">Helper text2</cds-control-message>
      </cds-checkbox-group>

      <cds-checkbox-group layout="vertical-inline">
        <label>Vertical inline</label>
        <cds-checkbox selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM One</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="info"></cds-icon>
              <p cds-text="subsection center">Orchestrate & Automate</p>
            </div>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox>
        <cds-checkbox selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM Two</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="success"></cds-icon>
              <p cds-text="subsection center">Replication & Remediation</p>
            </div>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox>
        <cds-checkbox selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM Three</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="warning"></cds-icon>
              <p cds-text="subsection center">Scale & Secure</p>
            </div>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox>
        <cds-checkbox selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM Four</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="danger"></cds-icon>
              <p cds-text="subsection center">Storage & Salvage</p>
            </div>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox>
        <cds-control-message>Helper text2</cds-control-message>
      </cds-checkbox-group>

      <cds-checkbox-group layout="vertical-inline" disabled>
        <label>Vertical inline</label>
        <cds-checkbox selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM One</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="info"></cds-icon>
              <p cds-text="subsection center">Orchestrate & Automate</p>
            </div>
          </label>
          <input type="checkbox" value="1" disabled />
        </cds-checkbox>
        <cds-checkbox selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM Two</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="success"></cds-icon>
              <p cds-text="subsection center">Replication & Remediation</p>
            </div>
          </label>
          <input type="checkbox" value="1" disabled />
        </cds-checkbox>
        <cds-checkbox selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM Three</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="warning"></cds-icon>
              <p cds-text="subsection center">Scale & Secure</p>
            </div>
          </label>
          <input type="checkbox" value="1" disabled />
        </cds-checkbox>
        <cds-checkbox selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM Four</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="danger"></cds-icon>
              <p cds-text="subsection center">Storage & Salvage</p>
            </div>
          </label>
          <input type="checkbox" value="1" disabled />
        </cds-checkbox>
        <cds-control-message>Helper text2</cds-control-message>
      </cds-checkbox-group>
    </div>
  `;
}

export function complexCheckboxLabelSizes() {
  return html`
    <section cds-layout="vertical gap:md">
      <cds-checkbox-group layout="vertical-inline">
        <label>Vertical inline</label>
        <cds-checkbox selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:sm align:center">
              <span cds-text="section">VM One</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="info"></cds-icon>
              <p cds-text="subsection center">Orchestrate & Automate</p>
            </div>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox>
        <cds-checkbox selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:sm align:center">
              <span cds-text="section">VM Two</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="success"></cds-icon>
              <p cds-text="subsection center">Replication & Remediation</p>
            </div>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox>
        <cds-checkbox selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:sm align:center">
              <span cds-text="section">VM Three</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="warning"></cds-icon>
              <p cds-text="subsection center">Scale & Secure</p>
            </div>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox>
        <cds-checkbox selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:sm align:center">
              <span cds-text="section">VM Four</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="danger"></cds-icon>
              <p cds-text="subsection center">Storage & Salvage</p>
            </div>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox>
        <cds-control-message>Helper text2</cds-control-message>
      </cds-checkbox-group>
      <cds-checkbox-group layout="vertical-inline">
        <label>Vertical inline</label>
        <cds-checkbox selection-panel size="sm">
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:sm align:center">
              <span cds-text="section">VM One</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="info"></cds-icon>
              <p cds-text="subsection center">Orchestrate & Automate</p>
            </div>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox>
        <cds-checkbox selection-panel size="sm">
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:sm align:center">
              <span cds-text="section">VM Two</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="success"></cds-icon>
              <p cds-text="subsection center">Replication & Remediation</p>
            </div>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox>
        <cds-checkbox selection-panel size="sm">
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:sm align:center">
              <span cds-text="section">VM Three</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="warning"></cds-icon>
              <p cds-text="subsection center">Scale & Secure</p>
            </div>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox>
        <cds-checkbox selection-panel size="sm">
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:sm align:center">
              <span cds-text="section">VM Four</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="danger"></cds-icon>
              <p cds-text="subsection center">Storage & Salvage</p>
            </div>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox>
        <cds-control-message>Helper text2</cds-control-message>
      </cds-checkbox-group>
      <cds-checkbox-group layout="vertical-inline">
        <label>Vertical inline</label>
        <cds-checkbox selection-panel size="md">
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM One</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="info"></cds-icon>
              <p cds-text="subsection center">Orchestrate & Automate</p>
            </div>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox>
        <cds-checkbox selection-panel size="md">
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM Two</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="success"></cds-icon>
              <p cds-text="subsection center">Replication & Remediation</p>
            </div>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox>
        <cds-checkbox selection-panel size="md">
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM Three</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="warning"></cds-icon>
              <p cds-text="subsection center">Scale & Secure</p>
            </div>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox>
        <cds-checkbox selection-panel size="md">
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM Four</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="danger"></cds-icon>
              <p cds-text="subsection center">Storage & Salvage</p>
            </div>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox>
        <cds-control-message>Helper text2</cds-control-message>
      </cds-checkbox-group>
      <cds-checkbox-group layout="vertical-inline">
        <label>Vertical inline</label>
        <cds-checkbox selection-panel size="lg">
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:lg align:center">
              <span cds-text="heading">VM One</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="info"></cds-icon>
              <p cds-text="section center">Orchestrate & Automate</p>
            </div>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox>
        <cds-checkbox selection-panel size="lg">
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:lg align:center">
              <span cds-text="heading">VM Two</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="success"></cds-icon>
              <p cds-text="section center">Replication & Remediation</p>
            </div>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox>
        <cds-control-message>Helper text2</cds-control-message>
      </cds-checkbox-group>
      <cds-checkbox-group layout="vertical-inline">
        <label>Vertical inline</label>
        <cds-checkbox selection-panel size="xl">
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:xxl align:center">
              <span cds-text="heading">VM One</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xxl" badge="info"></cds-icon>
              <p cds-text="section center">Orchestrate & Automate</p>
            </div>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox>
        <cds-checkbox selection-panel size="xl">
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:xxl align:center">
              <span cds-text="heading">VM Two</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xxl" badge="success"></cds-icon>
              <p cds-text="section center">Replication & Remediation</p>
            </div>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox>
        <cds-control-message>Helper text2</cds-control-message>
      </cds-checkbox-group>
    </section>
  `;
}
