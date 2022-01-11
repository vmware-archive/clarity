/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/radio/register.js';
import { html } from 'lit';
import { getElementStorybookArgs, spreadProps } from '@cds/core/internal';

export default {
  title: 'Stories/Radio',
  component: 'cds-radio',
  parameters: {
    options: { showPanel: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=0%3A885',
    },
  },
};

export function API(args: any) {
  return html`
    <cds-radio ...="${spreadProps(getElementStorybookArgs(args))}">
      <label>radio</label>
      <input type="radio" />
      <cds-control-message .status=${args.status}>message text</cds-control-message>
    </cds-radio>
  `;
}

/** @website */
export function radio() {
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
}

/** @website */
export function verticalGroup() {
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
          <input type="radio" checked disabled />
        </cds-radio>

        <cds-radio>
          <label>radio 2</label>
          <input type="radio" disabled />
        </cds-radio>

        <cds-radio>
          <label>radio 3</label>
          <input type="radio" disabled />
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
}

/** @website */
export function verticalInlineGroup() {
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
          <input type="radio" checked disabled />
        </cds-radio>

        <cds-radio>
          <label>radio 2</label>
          <input type="radio" disabled />
        </cds-radio>

        <cds-radio>
          <label>radio 3</label>
          <input type="radio" disabled />
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
}

/** @website */
export function horizontalGroup() {
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
        <label>disabled</label>
        <cds-radio>
          <label>radio 1</label>
          <input type="radio" checked disabled />
        </cds-radio>

        <cds-radio>
          <label>radio 2</label>
          <input type="radio" disabled />
        </cds-radio>

        <cds-radio>
          <label>radio 3</label>
          <input type="radio" disabled />
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
}

/** @website */
export function horizontalInlineGroup() {
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
          <input type="radio" checked disabled />
        </cds-radio>

        <cds-radio>
          <label>radio 2</label>
          <input type="radio" disabled />
        </cds-radio>

        <cds-radio>
          <label>radio 3</label>
          <input type="radio" disabled />
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
}

/** @website */
export function compactGroup() {
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
          <input type="radio" checked disabled />
        </cds-radio>

        <cds-radio>
          <label>radio 2</label>
          <input type="radio" disabled />
        </cds-radio>

        <cds-radio>
          <label>radio 3</label>
          <input type="radio" disabled />
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
}

export function darkTheme() {
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
          <input type="radio" checked disabled />
        </cds-radio>

        <cds-radio>
          <label>radio 2</label>
          <input type="radio" disabled />
        </cds-radio>

        <cds-radio>
          <label>radio 3</label>
          <input type="radio" disabled />
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
}

export function inlineGroupControlMessages() {
  function updateOther(e: any) {
    document.querySelector<HTMLInputElement>('.other-input').disabled = e.target.value !== '3';
  }

  return html`
    <div cds-layout="vertical gap:lg">
      <cds-radio-group layout="vertical">
        <label>Available Options</label>

        <cds-radio>
          <label>Option 1</label>
          <input type="radio" value="1" checked @change=${updateOther} />
        </cds-radio>

        <cds-radio>
          <label>Option 2</label>
          <input type="radio" value="2" @change=${updateOther} />
        </cds-radio>

        <cds-radio layout="horizontal">
          <label>Other:</label>
          <input type="radio" value="3" @change=${updateOther} />
          <cds-control-message>
            <cds-input control-width="shrink">
              <input placeholder="options" aria-label="Other Details" disabled required class="other-input" />
            </cds-input>
          </cds-control-message>
        </cds-radio>
      </cds-radio-group>

      <cds-radio-group layout="vertical">
        <label>Available Options</label>

        <cds-radio>
          <label>Option 1</label>
          <input type="radio" value="1" checked />
        </cds-radio>

        <cds-radio>
          <label>Option 2</label>
          <input type="radio" value="2" />
        </cds-radio>

        <cds-radio layout="horizontal">
          <label>Option 3</label>
          <input type="radio" value="3" />
          <cds-control-message><a cds-text="link" href="#">learn more</a></cds-control-message>
        </cds-radio>
      </cds-radio-group>
    </div>
  `;
}

export function complexRadioLabelLayouts() {
  return html`
    <div cds-layout="vertical gap:lg">
      <cds-radio-group layout="vertical-inline">
        <label>Vertical inline</label>
        <cds-radio selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM One</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="info"></cds-icon>
              <p cds-text="subsection center">Orchestrate & Automate</p>
            </div>
          </label>
          <input type="radio" value="1" />
        </cds-radio>
        <cds-radio selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM Two</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="success"></cds-icon>
              <p cds-text="subsection center">Replication & Remediation</p>
            </div>
          </label>
          <input type="radio" value="1" />
        </cds-radio>
        <cds-radio selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM Three</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="warning"></cds-icon>
              <p cds-text="subsection center">Scale & Secure</p>
            </div>
          </label>
          <input type="radio" value="1" />
        </cds-radio>
        <cds-radio selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM Four</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="danger"></cds-icon>
              <p cds-text="subsection center">Storage & Salvage</p>
            </div>
          </label>
          <input type="radio" value="1" />
        </cds-radio>
        <cds-control-message>Helper text2</cds-control-message>
      </cds-radio-group>
      <cds-radio-group layout="horizontal-inline">
        <label>Horizontal inline</label>
        <cds-radio selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM One</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="info"></cds-icon>
              <p cds-text="subsection center">Orchestrate & Automate</p>
            </div>
          </label>
          <input type="radio" value="1" />
        </cds-radio>
        <cds-radio selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM Two</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="success"></cds-icon>
              <p cds-text="subsection center">Replication & Remediation</p>
            </div>
          </label>
          <input type="radio" value="1" />
        </cds-radio>
        <cds-radio selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM Three</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="warning"></cds-icon>
              <p cds-text="subsection center">Scale & Secure</p>
            </div>
          </label>
          <input type="radio" value="1" />
        </cds-radio>
        <cds-radio selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM Four</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="danger"></cds-icon>
              <p cds-text="subsection center">Storage & Salvage</p>
            </div>
          </label>
          <input type="radio" value="1" />
        </cds-radio>
        <cds-control-message>Helper text</cds-control-message>
      </cds-radio-group>
      <cds-radio-group layout="compact">
        <label>Compact</label>
        <cds-radio selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM One</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="info"></cds-icon>
              <p cds-text="subsection center">Orchestrate & Automate</p>
            </div>
          </label>
          <input type="radio" value="1" />
        </cds-radio>
        <cds-radio selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM Two</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="success"></cds-icon>
              <p cds-text="subsection center">Replication & Remediation</p>
            </div>
          </label>
          <input type="radio" value="1" />
        </cds-radio>
        <cds-radio selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM Three</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="warning"></cds-icon>
              <p cds-text="subsection center">Scale & Secure</p>
            </div>
          </label>
          <input type="radio" value="1" />
        </cds-radio>
        <cds-radio selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM Four</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="danger"></cds-icon>
              <p cds-text="subsection center">Storage & Salvage</p>
            </div>
          </label>
          <input type="radio" value="1" />
        </cds-radio>
        <cds-control-message>Helper text</cds-control-message>
      </cds-radio-group>
      <section cds-layout="horizontal gap:lg wrap:none">
        <cds-radio-group layout="vertical">
          <label>Vertical</label>
          <cds-radio selection-panel>
            <label>
              <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
                <span cds-text="section">VM One</span>
                <!-- inert icon that does not provide any context to screen readers / is not interactive -->
                <cds-icon shape="vm" size="xl" badge="info"></cds-icon>
                <p cds-text="subsection center">Orchestrate & Automate</p>
              </div>
            </label>
            <input type="radio" value="1" />
          </cds-radio>
          <cds-radio selection-panel>
            <label>
              <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
                <span cds-text="section">VM Two</span>
                <!-- inert icon that does not provide any context to screen readers / is not interactive -->
                <cds-icon shape="vm" size="xl" badge="success"></cds-icon>
                <p cds-text="subsection center">Replication & Remediation</p>
              </div>
            </label>
            <input type="radio" value="1" />
          </cds-radio>
          <cds-radio selection-panel>
            <label>
              <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
                <span cds-text="section">VM Three</span>
                <!-- inert icon that does not provide any context to screen readers / is not interactive -->
                <cds-icon shape="vm" size="xl" badge="warning"></cds-icon>
                <p cds-text="subsection center">Scale & Secure</p>
              </div>
            </label>
            <input type="radio" value="1" />
          </cds-radio>
          <cds-radio selection-panel>
            <label>
              <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
                <span cds-text="section">VM Four</span>
                <!-- inert icon that does not provide any context to screen readers / is not interactive -->
                <cds-icon shape="vm" size="xl" badge="danger"></cds-icon>
                <p cds-text="subsection center">Storage & Salvage</p>
              </div>
            </label>
            <input type="radio" value="1" />
          </cds-radio>
          <cds-control-message>Helper text</cds-control-message>
        </cds-radio-group>
        <cds-radio-group layout="horizontal">
          <label>Horizontal</label>
          <cds-radio selection-panel>
            <label>
              <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
                <span cds-text="section">VM One</span>
                <!-- inert icon that does not provide any context to screen readers / is not interactive -->
                <cds-icon shape="vm" size="xl" badge="info"></cds-icon>
                <p cds-text="subsection center">Orchestrate & Automate</p>
              </div>
            </label>
            <input type="radio" value="1" />
          </cds-radio>
          <cds-radio selection-panel>
            <label>
              <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
                <span cds-text="section">VM Two</span>
                <!-- inert icon that does not provide any context to screen readers / is not interactive -->
                <cds-icon shape="vm" size="xl" badge="success"></cds-icon>
                <p cds-text="subsection center">Replication & Remediation</p>
              </div>
            </label>
            <input type="radio" value="1" />
          </cds-radio>
          <cds-radio selection-panel>
            <label>
              <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
                <span cds-text="section">VM Three</span>
                <!-- inert icon that does not provide any context to screen readers / is not interactive -->
                <cds-icon shape="vm" size="xl" badge="warning"></cds-icon>
                <p cds-text="subsection center">Scale & Secure</p>
              </div>
            </label>
            <input type="radio" value="1" />
          </cds-radio>
          <cds-radio selection-panel>
            <label>
              <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
                <span cds-text="section">VM Four</span>
                <!-- inert icon that does not provide any context to screen readers / is not interactive -->
                <cds-icon shape="vm" size="xl" badge="danger"></cds-icon>
                <p cds-text="subsection center">Storage & Salvage</p>
              </div>
            </label>
            <input type="radio" value="1" />
          </cds-radio>
          <cds-control-message>Helper text</cds-control-message>
        </cds-radio-group>
      </section>
    </div>
  `;
}

export function complexRadioLabelStatuses() {
  return html`
    <div cds-layout="vertical gap:lg">
      <cds-radio-group layout="vertical-inline" status="error">
        <label>Vertical inline</label>
        <cds-radio selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM One</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="info"></cds-icon>
              <p cds-text="subsection center">Orchestrate & Automate</p>
            </div>
          </label>
          <input type="radio" value="1" />
        </cds-radio>
        <cds-radio selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM Two</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="success"></cds-icon>
              <p cds-text="subsection center">Replication & Remediation</p>
            </div>
          </label>
          <input type="radio" value="1" />
        </cds-radio>
        <cds-radio selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM Three</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="warning"></cds-icon>
              <p cds-text="subsection center">Scale & Secure</p>
            </div>
          </label>
          <input type="radio" value="1" />
        </cds-radio>
        <cds-radio selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM Four</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="danger"></cds-icon>
              <p cds-text="subsection center">Storage & Salvage</p>
            </div>
          </label>
          <input type="radio" value="1" />
        </cds-radio>
        <cds-control-message status="error">Helper text2</cds-control-message>
      </cds-radio-group>

      <cds-radio-group layout="vertical-inline" status="success">
        <label>Vertical inline</label>
        <cds-radio selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM One</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="info"></cds-icon>
              <p cds-text="subsection center">Orchestrate & Automate</p>
            </div>
          </label>
          <input type="radio" value="1" />
        </cds-radio>
        <cds-radio selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM Two</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="success"></cds-icon>
              <p cds-text="subsection center">Replication & Remediation</p>
            </div>
          </label>
          <input type="radio" value="1" />
        </cds-radio>
        <cds-radio selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM Three</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="warning"></cds-icon>
              <p cds-text="subsection center">Scale & Secure</p>
            </div>
          </label>
          <input type="radio" value="1" />
        </cds-radio>
        <cds-radio selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM Four</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="danger"></cds-icon>
              <p cds-text="subsection center">Storage & Salvage</p>
            </div>
          </label>
          <input type="radio" value="1" />
        </cds-radio>
        <cds-control-message status="success">Helper text2</cds-control-message>
      </cds-radio-group>

      <cds-radio-group layout="vertical-inline">
        <label>Vertical inline</label>
        <cds-radio selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM One</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="info"></cds-icon>
              <p cds-text="subsection center">Orchestrate & Automate</p>
            </div>
          </label>
          <input type="radio" value="1" />
        </cds-radio>
        <cds-radio selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM Two</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="success"></cds-icon>
              <p cds-text="subsection center">Replication & Remediation</p>
            </div>
          </label>
          <input type="radio" value="1" />
        </cds-radio>
        <cds-radio selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM Three</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="warning"></cds-icon>
              <p cds-text="subsection center">Scale & Secure</p>
            </div>
          </label>
          <input type="radio" value="1" />
        </cds-radio>
        <cds-radio selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM Four</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="danger"></cds-icon>
              <p cds-text="subsection center">Storage & Salvage</p>
            </div>
          </label>
          <input type="radio" value="1" />
        </cds-radio>
        <cds-control-message>Helper text2</cds-control-message>
      </cds-radio-group>

      <cds-radio-group layout="vertical-inline" disabled>
        <label>Vertical inline</label>
        <cds-radio selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM One</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="info"></cds-icon>
              <p cds-text="subsection center">Orchestrate & Automate</p>
            </div>
          </label>
          <input type="radio" value="1" disabled />
        </cds-radio>
        <cds-radio selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM Two</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="success"></cds-icon>
              <p cds-text="subsection center">Replication & Remediation</p>
            </div>
          </label>
          <input type="radio" value="1" disabled />
        </cds-radio>
        <cds-radio selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM Three</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="warning"></cds-icon>
              <p cds-text="subsection center">Scale & Secure</p>
            </div>
          </label>
          <input type="radio" value="1" disabled />
        </cds-radio>
        <cds-radio selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM Four</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="danger"></cds-icon>
              <p cds-text="subsection center">Storage & Salvage</p>
            </div>
          </label>
          <input type="radio" value="1" disabled />
        </cds-radio>
        <cds-control-message>Helper text2</cds-control-message>
      </cds-radio-group>
    </div>
  `;
}

export function complexRadioLabelSizes() {
  return html`
    <section cds-layout="vertical gap:md">
      <cds-radio-group layout="vertical-inline">
        <label>Vertical inline</label>
        <cds-radio selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:sm align:center">
              <span cds-text="section">VM One</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="info"></cds-icon>
              <p cds-text="subsection center">Orchestrate & Automate</p>
            </div>
          </label>
          <input type="radio" value="1" />
        </cds-radio>
        <cds-radio selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:sm align:center">
              <span cds-text="section">VM Two</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="success"></cds-icon>
              <p cds-text="subsection center">Replication & Remediation</p>
            </div>
          </label>
          <input type="radio" value="1" />
        </cds-radio>
        <cds-radio selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:sm align:center">
              <span cds-text="section">VM Three</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="warning"></cds-icon>
              <p cds-text="subsection center">Scale & Secure</p>
            </div>
          </label>
          <input type="radio" value="1" />
        </cds-radio>
        <cds-radio selection-panel>
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:sm align:center">
              <span cds-text="section">VM Four</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="danger"></cds-icon>
              <p cds-text="subsection center">Storage & Salvage</p>
            </div>
          </label>
          <input type="radio" value="1" />
        </cds-radio>
        <cds-control-message>Helper text2</cds-control-message>
      </cds-radio-group>
      <cds-radio-group layout="vertical-inline">
        <label>Vertical inline</label>
        <cds-radio selection-panel size="sm">
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:sm align:center">
              <span cds-text="section">VM One</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="info"></cds-icon>
              <p cds-text="subsection center">Orchestrate & Automate</p>
            </div>
          </label>
          <input type="radio" value="1" />
        </cds-radio>
        <cds-radio selection-panel size="sm">
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:sm align:center">
              <span cds-text="section">VM Two</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="success"></cds-icon>
              <p cds-text="subsection center">Replication & Remediation</p>
            </div>
          </label>
          <input type="radio" value="1" />
        </cds-radio>
        <cds-radio selection-panel size="sm">
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:sm align:center">
              <span cds-text="section">VM Three</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="warning"></cds-icon>
              <p cds-text="subsection center">Scale & Secure</p>
            </div>
          </label>
          <input type="radio" value="1" />
        </cds-radio>
        <cds-radio selection-panel size="sm">
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:sm align:center">
              <span cds-text="section">VM Four</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="danger"></cds-icon>
              <p cds-text="subsection center">Storage & Salvage</p>
            </div>
          </label>
          <input type="radio" value="1" />
        </cds-radio>
        <cds-control-message>Helper text2</cds-control-message>
      </cds-radio-group>
      <cds-radio-group layout="vertical-inline">
        <label>Vertical inline</label>
        <cds-radio selection-panel size="md">
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM One</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="info"></cds-icon>
              <p cds-text="subsection center">Orchestrate & Automate</p>
            </div>
          </label>
          <input type="radio" value="1" />
        </cds-radio>
        <cds-radio selection-panel size="md">
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM Two</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="success"></cds-icon>
              <p cds-text="subsection center">Replication & Remediation</p>
            </div>
          </label>
          <input type="radio" value="1" />
        </cds-radio>
        <cds-radio selection-panel size="md">
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM Three</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="warning"></cds-icon>
              <p cds-text="subsection center">Scale & Secure</p>
            </div>
          </label>
          <input type="radio" value="1" />
        </cds-radio>
        <cds-radio selection-panel size="md">
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:md align:center">
              <span cds-text="section">VM Four</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="danger"></cds-icon>
              <p cds-text="subsection center">Storage & Salvage</p>
            </div>
          </label>
          <input type="radio" value="1" />
        </cds-radio>
        <cds-control-message>Helper text2</cds-control-message>
      </cds-radio-group>
      <cds-radio-group layout="vertical-inline">
        <label>Vertical inline</label>
        <cds-radio selection-panel size="lg">
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:lg align:center">
              <span cds-text="heading">VM One</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="info"></cds-icon>
              <p cds-text="section center">Orchestrate & Automate</p>
            </div>
          </label>
          <input type="radio" value="1" />
        </cds-radio>
        <cds-radio selection-panel size="lg">
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:lg align:center">
              <span cds-text="heading">VM Two</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xl" badge="success"></cds-icon>
              <p cds-text="section center">Replication & Remediation</p>
            </div>
          </label>
          <input type="radio" value="1" />
        </cds-radio>
        <cds-control-message>Helper text2</cds-control-message>
      </cds-radio-group>
      <cds-radio-group layout="vertical-inline">
        <label>Vertical inline</label>
        <cds-radio selection-panel size="xl">
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:xxl align:center">
              <span cds-text="heading">VM One</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xxl" badge="info"></cds-icon>
              <p cds-text="section center">Orchestrate & Automate</p>
            </div>
          </label>
          <input type="radio" value="1" />
        </cds-radio>
        <cds-radio selection-panel size="xl">
          <label>
            <div style="width: 100%; height: 100%" cds-layout="vertical gap:xxl align:center">
              <span cds-text="heading">VM Two</span>
              <!-- inert icon that does not provide any context to screen readers / is not interactive -->
              <cds-icon shape="vm" size="xxl" badge="success"></cds-icon>
              <p cds-text="section center">Replication & Remediation</p>
            </div>
          </label>
          <input type="radio" value="1" />
        </cds-radio>
        <cds-control-message>Helper text2</cds-control-message>
      </cds-radio-group>
    </section>
  `;
}
