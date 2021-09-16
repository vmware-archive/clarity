/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { spreadProps, getElementStorybookArgs } from '@cds/core/internal';
import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { vmIcon } from '@cds/core/icon/shapes/vm.js';
import '@cds/core/selection-panels/radio/register.js';

ClarityIcons.addIcons(vmIcon);

export default {
  title: 'Stories/Radio Panel',
  component: 'cds-radio-panel',
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
    <cds-radio-group layout="vertical-inline">
      <label>API</label>
      <cds-radio-panel ...="${spreadProps(getElementStorybookArgs(args))}">
        <label cds-layout="vertical align:center gap:md">
          <span>Panel content</span>
        </label>
        <input type="radio" />
        <cds-control-message .status=${args.status}>message text</cds-control-message>
      </cds-radio-panel>
    </cds-radio-group>
  `;
}

export function basic() {
  return html`
    <cds-radio-group layout="vertical-inline">
      <label>Basic</label>
      <cds-radio-panel>
        <label cds-layout="vertical gap:md align:center">
          <span cds-text="section">VM One</span>
          <span cds-text="subsection center">Orchestrate & Automate</span>
        </label>
        <input type="radio" value="1" />
      </cds-radio-panel>
      <cds-radio-panel>
        <label cds-layout="vertical gap:md align:center">
          <span cds-text="section">VM Two</span>
          <span cds-text="subsection center">Replication & Remediation</span>
        </label>
        <input type="radio" value="1" />
      </cds-radio-panel>
      <cds-radio-panel>
        <label cds-layout="vertical gap:md align:center">
          <span cds-text="section">VM Three</span>
          <span cds-text="subsection center">Scale & Secure</span>
        </label>
        <input type="radio" value="1" />
      </cds-radio-panel>
      <cds-radio-panel>
        <label cds-layout="vertical gap:md align:center">
          <span cds-text="section">VM Four</span>
          <span cds-text="subsection center">Storage & Salvage</span>
        </label>
        <input type="radio" value="1" />
      </cds-radio-panel>
      <cds-control-message>Helper text2</cds-control-message>
    </cds-radio-group>
  `;
}

export function vertical() {
  return html`
    <cds-radio-group layout="vertical-inline">
      <label>Vertical inline</label>
      <cds-radio-panel>
        <label cds-layout="vertical gap:md align:center">
          <span cds-text="section">VM One</span>
          <span cds-text="subsection center">Orchestrate & Automate</span>
        </label>
        <input type="radio" value="1" />
      </cds-radio-panel>
      <cds-radio-panel>
        <label cds-layout="vertical gap:md align:center">
          <span cds-text="section">VM Two</span>
          <span cds-text="subsection center">Replication & Remediation</span>
        </label>
        <input type="radio" value="1" />
      </cds-radio-panel>
      <cds-radio-panel>
        <label cds-layout="vertical gap:md align:center">
          <span cds-text="section">VM Three</span>
          <span cds-text="subsection center">Scale & Secure</span>
        </label>
        <input type="radio" value="1" />
      </cds-radio-panel>
      <cds-radio-panel>
        <label cds-layout="vertical gap:md align:center">
          <span cds-text="section">VM Four</span>
          <span cds-text="subsection center">Storage & Salvage</span>
        </label>
        <input type="radio" value="1" />
      </cds-radio-panel>
      <cds-control-message>Helper text2</cds-control-message>
    </cds-radio-group>
    <cds-radio-group cds-layout="m-t:md" layout="vertical">
      <label>Vertical</label>
      <cds-radio-panel>
        <label cds-layout="vertical gap:md align:center">
          <span cds-text="section">VM One</span>
          <span cds-text="subsection center">Orchestrate & Automate</span>
        </label>
        <input type="radio" value="1" />
      </cds-radio-panel>
      <cds-radio-panel>
        <label cds-layout="vertical gap:md align:center">
          <span cds-text="section">VM Two</span>
          <span cds-text="subsection center">Replication & Remediation</span>
        </label>
        <input type="radio" value="1" />
      </cds-radio-panel>
      <cds-radio-panel>
        <label cds-layout="vertical gap:md align:center">
          <span cds-text="section">VM Three</span>
          <span cds-text="subsection center">Scale & Secure</span>
        </label>
        <input type="radio" value="1" />
      </cds-radio-panel>
      <cds-radio-panel>
        <label cds-layout="vertical gap:md align:center">
          <span cds-text="section">VM Four</span>
          <span cds-text="subsection center">Storage & Salvage</span>
        </label>
        <input type="radio" value="1" />
      </cds-radio-panel>
      <cds-control-message>Helper text</cds-control-message>
    </cds-radio-group>
  `;
}

export function horizontal() {
  return html`
    <cds-radio-group layout="horizontal-inline">
      <label>Horizontal inline</label>
      <cds-radio-panel>
        <label cds-layout="vertical gap:md align:center">
          <span cds-text="section">VM One</span>
          <span cds-text="subsection center">Orchestrate & Automate</span>
        </label>
        <input type="radio" value="1" />
      </cds-radio-panel>
      <cds-radio-panel>
        <label cds-layout="vertical gap:md align:center">
          <span cds-text="section">VM Two</span>
          <span cds-text="subsection center">Replication & Remediation</span>
        </label>
        <input type="radio" value="1" />
      </cds-radio-panel>
      <cds-radio-panel>
        <label cds-layout="vertical gap:md align:center">
          <span cds-text="section">VM Three</span>
          <span cds-text="subsection center">Scale & Secure</span>
        </label>
        <input type="radio" value="1" />
      </cds-radio-panel>
      <cds-radio-panel>
        <label cds-layout="vertical gap:md align:center">
          <span cds-text="section">VM Four</span>
          <span cds-text="subsection center">Storage & Salvage</span>
        </label>
        <input type="radio" value="1" />
      </cds-radio-panel>
      <cds-control-message>Helper text</cds-control-message>
    </cds-radio-group>
    <cds-radio-group cds-layout="m-t:md" layout="horizontal">
      <label>Horizontal</label>
      <cds-radio-panel>
        <label cds-layout="vertical gap:md align:center">
          <span cds-text="section">VM One</span>
          <span cds-text="subsection center">Orchestrate & Automate</span>
        </label>
        <input type="radio" value="1" />
      </cds-radio-panel>
      <cds-radio-panel>
        <label cds-layout="vertical gap:md align:center">
          <span cds-text="section">VM Two</span>
          <span cds-text="subsection center">Replication & Remediation</span>
        </label>
        <input type="radio" value="1" />
      </cds-radio-panel>
      <cds-radio-panel>
        <label cds-layout="vertical gap:md align:center">
          <span cds-text="section">VM Three</span>
          <span cds-text="subsection center">Scale & Secure</span>
        </label>
        <input type="radio" value="1" />
      </cds-radio-panel>
      <cds-radio-panel>
        <label cds-layout="vertical gap:md align:center">
          <span cds-text="section">VM Four</span>
          <span cds-text="subsection center">Storage & Salvage</span>
        </label>
        <input type="radio" value="1" />
      </cds-radio-panel>
      <cds-control-message>Helper text</cds-control-message>
    </cds-radio-group>
  `;
}

export function compact() {
  return html`
    <cds-radio-group layout="compact">
      <label>Compact</label>
      <cds-radio-panel>
        <label cds-layout="vertical gap:md align:center">
          <span cds-text="section">VM One</span>
          <span cds-text="subsection center">Orchestrate & Automate</span>
        </label>
        <input type="radio" value="1" />
      </cds-radio-panel>
      <cds-radio-panel>
        <label cds-layout="vertical gap:md align:center">
          <span cds-text="section">VM Two</span>
          <span cds-text="subsection center">Replication & Remediation</span>
        </label>
        <input type="radio" value="1" />
      </cds-radio-panel>
      <cds-radio-panel>
        <label cds-layout="vertical gap:md align:center">
          <span cds-text="section">VM Three</span>
          <span cds-text="subsection center">Scale & Secure</span>
        </label>
        <input type="radio" value="1" />
      </cds-radio-panel>
      <cds-radio-panel>
        <label cds-layout="vertical gap:md align:center">
          <span cds-text="section">VM Four</span>
          <span cds-text="subsection center">Storage & Salvage</span>
        </label>
        <input type="radio" value="1" />
      </cds-radio-panel>
      <cds-control-message>Helper text</cds-control-message>
    </cds-radio-group>
  `;
}

export function status() {
  return html`
    <div cds-layout="vertical gap:lg">
      <cds-radio-group layout="vertical-inline" status="error">
        <label>Error</label>
        <cds-radio-panel>
          <label cds-layout="vertical gap:md align:center">
            <span cds-text="section">VM One</span>
            <span cds-text="subsection center">Orchestrate & Automate</span>
          </label>
          <input type="radio" value="1" />
        </cds-radio-panel>
        <cds-radio-panel>
          <label cds-layout="vertical gap:md align:center">
            <span cds-text="section">VM Two</span>
            <span cds-text="subsection center">Replication & Remediation</span>
          </label>
          <input type="radio" value="1" />
        </cds-radio-panel>
        <cds-radio-panel>
          <label cds-layout="vertical gap:md align:center">
            <span cds-text="section">VM Three</span>
            <span cds-text="subsection center">Scale & Secure</span>
          </label>
          <input type="radio" value="1" />
        </cds-radio-panel>
        <cds-radio-panel>
          <label cds-layout="vertical gap:md align:center">
            <span cds-text="section">VM Four</span>
            <span cds-text="subsection center">Storage & Salvage</span>
          </label>
          <input type="radio" value="1" />
        </cds-radio-panel>
        <cds-control-message status="error">Helper text2</cds-control-message>
      </cds-radio-group>

      <cds-radio-group layout="vertical-inline" status="success">
        <label>Success</label>
        <cds-radio-panel>
          <label cds-layout="vertical gap:md align:center">
            <span cds-text="section">VM One</span>
            <span cds-text="subsection center">Orchestrate & Automate</span>
          </label>
          <input type="radio" value="1" />
        </cds-radio-panel>
        <cds-radio-panel>
          <label cds-layout="vertical gap:md align:center">
            <span cds-text="section">VM Two</span>
            <span cds-text="subsection center">Replication & Remediation</span>
          </label>
          <input type="radio" value="1" />
        </cds-radio-panel>
        <cds-radio-panel>
          <label cds-layout="vertical gap:md align:center">
            <span cds-text="section">VM Three</span>
            <span cds-text="subsection center">Scale & Secure</span>
          </label>
          <input type="radio" value="1" />
        </cds-radio-panel>
        <cds-radio-panel>
          <label cds-layout="vertical gap:md align:center">
            <span cds-text="section">VM Four</span>
            <span cds-text="subsection center">Storage & Salvage</span>
          </label>
          <input type="radio" value="1" />
        </cds-radio-panel>
        <cds-control-message status="success">Helper text2</cds-control-message>
      </cds-radio-group>

      <cds-radio-group layout="vertical-inline">
        <label>Default</label>
        <cds-radio-panel>
          <label cds-layout="vertical gap:md align:center">
            <span cds-text="section">VM One</span>
            <span cds-text="subsection center">Orchestrate & Automate</span>
          </label>
          <input type="radio" value="1" />
        </cds-radio-panel>
        <cds-radio-panel>
          <label cds-layout="vertical gap:md align:center">
            <span cds-text="section">VM Two</span>
            <span cds-text="subsection center">Replication & Remediation</span>
          </label>
          <input type="radio" value="1" />
        </cds-radio-panel>
        <cds-radio-panel>
          <label cds-layout="vertical gap:md align:center">
            <span cds-text="section">VM Three</span>
            <span cds-text="subsection center">Scale & Secure</span>
          </label>
          <input type="radio" value="1" />
        </cds-radio-panel>
        <cds-radio-panel>
          <label cds-layout="vertical gap:md align:center">
            <span cds-text="section">VM Four</span>
            <span cds-text="subsection center">Storage & Salvage</span>
          </label>
          <input type="radio" value="1" />
        </cds-radio-panel>
        <cds-control-message>Helper text2</cds-control-message>
      </cds-radio-group>

      <cds-radio-group layout="vertical-inline" disabled>
        <label>Disabled</label>
        <cds-radio-panel>
          <label cds-layout="vertical gap:md align:center">
            <span cds-text="section">VM One</span>
            <span cds-text="subsection center">Orchestrate & Automate</span>
          </label>
          <input type="radio" value="1" disabled />
        </cds-radio-panel>
        <cds-radio-panel>
          <label cds-layout="vertical gap:md align:center">
            <span cds-text="section">VM Two</span>
            <span cds-text="subsection center">Replication & Remediation</span>
          </label>
          <input type="radio" value="1" disabled />
        </cds-radio-panel>
        <cds-radio-panel>
          <label cds-layout="vertical gap:md align:center">
            <span cds-text="section">VM Three</span>
            <span cds-text="subsection center">Scale & Secure</span>
          </label>
          <input type="radio" value="1" disabled />
        </cds-radio-panel>
        <cds-radio-panel>
          <label cds-layout="vertical gap:md align:center">
            <span cds-text="section">VM Four</span>
            <span cds-text="subsection center">Storage & Salvage</span>
          </label>
          <input type="radio" value="1" disabled />
        </cds-radio-panel>
        <cds-control-message>Helper text2</cds-control-message>
      </cds-radio-group>
    </div>
  `;
}

export function sizes() {
  return html`
    <section cds-layout="vertical gap:md">
      <cds-radio-group layout="vertical-inline">
        <label>Default</label>
        <cds-radio-panel>
          <label cds-layout="vertical gap:md align:center">
            <span cds-text="section">VM One</span>
            <span cds-text="subsection center">Orchestrate & Automate</span>
          </label>
          <input type="radio" value="1" />
        </cds-radio-panel>
        <cds-radio-panel>
          <label cds-layout="vertical gap:md align:center">
            <span cds-text="section">VM Two</span>
            <span cds-text="subsection center">Replication & Remediation</span>
          </label>
          <input type="radio" value="1" />
        </cds-radio-panel>
        <cds-radio-panel>
          <label cds-layout="vertical gap:md align:center">
            <span cds-text="section">VM Three</span>
            <span cds-text="subsection center">Scale & Secure</span>
          </label>
          <input type="radio" value="1" />
        </cds-radio-panel>
        <cds-radio-panel>
          <label cds-layout="vertical gap:md align:center">
            <span cds-text="section">VM Four</span>
            <span cds-text="subsection center">Storage & Salvage</span>
          </label>
          <input type="radio" value="1" />
        </cds-radio-panel>
        <cds-control-message>Helper text2</cds-control-message>
      </cds-radio-group>
      <cds-radio-group layout="vertical-inline">
        <label>Small (sm)</label>
        <cds-radio-panel size="sm">
          <label cds-layout="vertical gap:sm align:center">
            <span cds-text="section">VM One</span>
            <span cds-text="subsection center">Orchestrate & Automate</span>
          </label>
          <input type="radio" value="1" />
        </cds-radio-panel>
        <cds-radio-panel size="sm">
          <label cds-layout="vertical gap:sm align:center">
            <span cds-text="section">VM Two</span>
            <span cds-text="subsection center">Replication & Remediation</span>
          </label>
          <input type="radio" value="1" />
        </cds-radio-panel>
        <cds-radio-panel size="sm">
          <label cds-layout="vertical gap:sm align:center">
            <span cds-text="section">VM Three</span>
            <span cds-text="subsection center">Scale & Secure</span>
          </label>
          <input type="radio" value="1" />
        </cds-radio-panel>
        <cds-radio-panel size="sm">
          <label cds-layout="vertical gap:sm align:center">
            <span cds-text="section">VM Four</span>
            <span cds-text="subsection center">Storage & Salvage</span>
          </label>
          <input type="radio" value="1" />
        </cds-radio-panel>
        <cds-control-message>Helper text2</cds-control-message>
      </cds-radio-group>
      <cds-radio-group layout="vertical-inline">
        <label>Medium (md)</label>
        <cds-radio-panel size="md">
          <label cds-layout="vertical gap:sm align:center">
            <span cds-text="section">VM One</span>
            <span cds-text="subsection center">Orchestrate & Automate</span>
          </label>
          <input type="radio" value="1" />
        </cds-radio-panel>
        <cds-radio-panel size="md">
          <label cds-layout="vertical gap:sm align:center">
            <span cds-text="section">VM Two</span>
            <span cds-text="subsection center">Replication & Remediation</span>
          </label>
          <input type="radio" value="1" />
        </cds-radio-panel>
        <cds-radio-panel size="md">
          <label cds-layout="vertical gap:sm align:center">
            <span cds-text="section">VM Three</span>
            <span cds-text="subsection center">Scale & Secure</span>
          </label>
          <input type="radio" value="1" />
        </cds-radio-panel>
        <cds-radio-panel size="md">
          <label cds-layout="vertical gap:sm align:center">
            <span cds-text="section">VM Four</span>
            <span cds-text="subsection center">Storage & Salvage</span>
          </label>
          <input type="radio" value="1" />
        </cds-radio-panel>
        <cds-control-message>Helper text2</cds-control-message>
      </cds-radio-group>
      <cds-radio-group layout="vertical-inline">
        <label>Large (lg)</label>
        <cds-radio-panel size="lg">
          <label cds-layout="vertical gap:lg align:center">
            <span cds-text="heading">VM One</span>
            <span cds-text="section center">Orchestrate & Automate</span>
          </label>
          <input type="radio" value="1" />
        </cds-radio-panel>
        <cds-radio-panel size="lg">
          <label cds-layout="vertical gap:lg align:center">
            <span cds-text="heading">VM Two</span>
            <span cds-text="section center">Replication & Remediation</span>
          </label>
          <input type="radio" value="1" />
        </cds-radio-panel>
        <cds-control-message>Helper text2</cds-control-message>
      </cds-radio-group>
      <cds-radio-group layout="vertical-inline">
        <label>Extra-large (xl)</label>
        <cds-radio-panel size="xl">
          <label cds-layout="vertical gap:lg align:center">
            <span cds-text="heading">VM One</span>
            <span cds-text="section center">Orchestrate & Automate</span>
          </label>
          <input type="radio" value="1" />
        </cds-radio-panel>
        <cds-radio-panel size="xl">
          <label cds-layout="vertical gap:lg align:center">
            <span cds-text="heading">VM Two</span>
            <span cds-text="section center">Replication & Remediation</span>
          </label>
          <input type="radio" value="1" />
        </cds-radio-panel>
        <cds-control-message>Helper text2</cds-control-message>
      </cds-radio-group>
    </section>
  `;
}

export function darkTheme() {
  return html`
    <div cds-theme="dark">
      <cds-radio-group layout="vertical-inline">
        <label>Vertical inline</label>
        <cds-radio-panel>
          <label cds-layout="vertical gap:md align:center">
            <span cds-text="section">VM One</span>
            <span cds-text="subsection center">Orchestrate & Automate</span>
          </label>
          <input type="radio" value="1" />
        </cds-radio-panel>
        <cds-radio-panel>
          <label cds-layout="vertical gap:md align:center">
            <span cds-text="section">VM Two</span>
            <span cds-text="subsection center">Replication & Remediation</span>
          </label>
          <input type="radio" value="1" />
        </cds-radio-panel>
        <cds-radio-panel>
          <label cds-layout="vertical gap:md align:center">
            <span cds-text="section">VM Three</span>
            <span cds-text="subsection center">Scale & Secure</span>
          </label>
          <input type="radio" value="1" />
        </cds-radio-panel>
        <cds-radio-panel>
          <label cds-layout="vertical gap:md align:center">
            <span cds-text="section">VM Four</span>
            <span cds-text="subsection center">Storage & Salvage</span>
          </label>
          <input type="radio" value="1" />
        </cds-radio-panel>
        <cds-control-message>Helper text2</cds-control-message>
      </cds-radio-group>
    </div>
  `;
}
