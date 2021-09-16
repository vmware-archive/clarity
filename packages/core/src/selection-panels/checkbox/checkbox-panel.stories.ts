/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { spreadProps, getElementStorybookArgs } from '@cds/core/internal';
import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { vmIcon } from '@cds/core/icon/shapes/vm.js';
import '@cds/core/selection-panels/checkbox/register.js';

ClarityIcons.addIcons(vmIcon);

export default {
  title: 'Stories/Checkbox Panel',
  component: 'cds-checkbox-panel',
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
    <cds-checkbox-group layout="vertical-inline">
      <label>API</label>
      <cds-checkbox-panel ...="${spreadProps(getElementStorybookArgs(args))}">
        <label cds-layout="vertical align:center gap:md">
          <span>Panel content</span>
        </label>
        <input type="checkbox" />
        <cds-control-message .status=${args.status}>message text</cds-control-message>
      </cds-checkbox-panel>
    </cds-checkbox-group>
  `;
}

export function basic() {
  return html`
    <cds-checkbox-group layout="vertical-inline">
      <label>Basic</label>
      <cds-checkbox-panel>
        <label cds-layout="vertical gap:md align:center">
          <span cds-text="section">VM One</span>
          <span cds-text="subsection center">Orchestrate & Automate</span>
        </label>
        <input type="checkbox" value="1" />
      </cds-checkbox-panel>
      <cds-checkbox-panel>
        <label cds-layout="vertical gap:md align:center">
          <span cds-text="section">VM Two</span>
          <span cds-text="subsection center">Replication & Remediation</span>
        </label>
        <input type="checkbox" value="1" />
      </cds-checkbox-panel>
      <cds-checkbox-panel>
        <label cds-layout="vertical gap:md align:center">
          <span cds-text="section">VM Three</span>
          <span cds-text="subsection center">Scale & Secure</span>
        </label>
        <input type="checkbox" value="1" />
      </cds-checkbox-panel>
      <cds-checkbox-panel>
        <label cds-layout="vertical gap:md align:center">
          <span cds-text="section">VM Four</span>
          <span cds-text="subsection center">Storage & Salvage</span>
        </label>
        <input type="checkbox" value="1" />
      </cds-checkbox-panel>
      <cds-control-message>Helper text2</cds-control-message>
    </cds-checkbox-group>
  `;
}

export function vertical() {
  return html`
    <cds-checkbox-group layout="vertical-inline">
      <label>Vertical inline</label>
      <cds-checkbox-panel>
        <label cds-layout="vertical gap:md align:center">
          <span cds-text="section">VM One</span>
          <span cds-text="subsection center">Orchestrate & Automate</span>
        </label>
        <input type="checkbox" value="1" />
      </cds-checkbox-panel>
      <cds-checkbox-panel>
        <label cds-layout="vertical gap:md align:center">
          <span cds-text="section">VM Two</span>
          <span cds-text="subsection center">Replication & Remediation</span>
        </label>
        <input type="checkbox" value="1" />
      </cds-checkbox-panel>
      <cds-checkbox-panel>
        <label cds-layout="vertical gap:md align:center">
          <span cds-text="section">VM Three</span>
          <span cds-text="subsection center">Scale & Secure</span>
        </label>
        <input type="checkbox" value="1" />
      </cds-checkbox-panel>
      <cds-checkbox-panel>
        <label cds-layout="vertical gap:md align:center">
          <span cds-text="section">VM Four</span>
          <span cds-text="subsection center">Storage & Salvage</span>
        </label>
        <input type="checkbox" value="1" />
      </cds-checkbox-panel>
      <cds-control-message>Helper text2</cds-control-message>
    </cds-checkbox-group>
    <cds-checkbox-group cds-layout="m-t:md" layout="vertical">
      <label>Vertical</label>
      <cds-checkbox-panel>
        <label cds-layout="vertical gap:md align:center">
          <span cds-text="section">VM One</span>
          <span cds-text="subsection center">Orchestrate & Automate</span>
        </label>
        <input type="checkbox" value="1" />
      </cds-checkbox-panel>
      <cds-checkbox-panel>
        <label cds-layout="vertical gap:md align:center">
          <span cds-text="section">VM Two</span>
          <span cds-text="subsection center">Replication & Remediation</span>
        </label>
        <input type="checkbox" value="1" />
      </cds-checkbox-panel>
      <cds-checkbox-panel>
        <label cds-layout="vertical gap:md align:center">
          <span cds-text="section">VM Three</span>
          <span cds-text="subsection center">Scale & Secure</span>
        </label>
        <input type="checkbox" value="1" />
      </cds-checkbox-panel>
      <cds-checkbox-panel>
        <label cds-layout="vertical gap:md align:center">
          <span cds-text="section">VM Four</span>
          <span cds-text="subsection center">Storage & Salvage</span>
        </label>
        <input type="checkbox" value="1" />
      </cds-checkbox-panel>
      <cds-control-message>Helper text</cds-control-message>
    </cds-checkbox-group>
  `;
}

export function horizontal() {
  return html`
    <cds-checkbox-group layout="horizontal-inline">
      <label>Horizontal inline</label>
      <cds-checkbox-panel>
        <label cds-layout="vertical gap:md align:center">
          <span cds-text="section">VM One</span>
          <span cds-text="subsection center">Orchestrate & Automate</span>
        </label>
        <input type="checkbox" value="1" />
      </cds-checkbox-panel>
      <cds-checkbox-panel>
        <label cds-layout="vertical gap:md align:center">
          <span cds-text="section">VM Two</span>
          <span cds-text="subsection center">Replication & Remediation</span>
        </label>
        <input type="checkbox" value="1" />
      </cds-checkbox-panel>
      <cds-checkbox-panel>
        <label cds-layout="vertical gap:md align:center">
          <span cds-text="section">VM Three</span>
          <span cds-text="subsection center">Scale & Secure</span>
        </label>
        <input type="checkbox" value="1" />
      </cds-checkbox-panel>
      <cds-checkbox-panel>
        <label cds-layout="vertical gap:md align:center">
          <span cds-text="section">VM Four</span>
          <span cds-text="subsection center">Storage & Salvage</span>
        </label>
        <input type="checkbox" value="1" />
      </cds-checkbox-panel>
      <cds-control-message>Helper text</cds-control-message>
    </cds-checkbox-group>
    <cds-checkbox-group cds-layout="m-t:md" layout="horizontal">
      <label>Horizontal</label>
      <cds-checkbox-panel>
        <label cds-layout="vertical gap:md align:center">
          <span cds-text="section">VM One</span>
          <span cds-text="subsection center">Orchestrate & Automate</span>
        </label>
        <input type="checkbox" value="1" />
      </cds-checkbox-panel>
      <cds-checkbox-panel>
        <label cds-layout="vertical gap:md align:center">
          <span cds-text="section">VM Two</span>
          <span cds-text="subsection center">Replication & Remediation</span>
        </label>
        <input type="checkbox" value="1" />
      </cds-checkbox-panel>
      <cds-checkbox-panel>
        <label cds-layout="vertical gap:md align:center">
          <span cds-text="section">VM Three</span>
          <span cds-text="subsection center">Scale & Secure</span>
        </label>
        <input type="checkbox" value="1" />
      </cds-checkbox-panel>
      <cds-checkbox-panel>
        <label cds-layout="vertical gap:md align:center">
          <span cds-text="section">VM Four</span>
          <span cds-text="subsection center">Storage & Salvage</span>
        </label>
        <input type="checkbox" value="1" />
      </cds-checkbox-panel>
      <cds-control-message>Helper text</cds-control-message>
    </cds-checkbox-group>
  `;
}

export function compact() {
  return html`
    <cds-checkbox-group layout="compact">
      <label>Compact</label>
      <cds-checkbox-panel>
        <label cds-layout="vertical gap:md align:center">
          <span cds-text="section">VM One</span>
          <span cds-text="subsection center">Orchestrate & Automate</span>
        </label>
        <input type="checkbox" value="1" />
      </cds-checkbox-panel>
      <cds-checkbox-panel>
        <label cds-layout="vertical gap:md align:center">
          <span cds-text="section">VM Two</span>
          <span cds-text="subsection center">Replication & Remediation</span>
        </label>
        <input type="checkbox" value="1" />
      </cds-checkbox-panel>
      <cds-checkbox-panel>
        <label cds-layout="vertical gap:md align:center">
          <span cds-text="section">VM Three</span>
          <span cds-text="subsection center">Scale & Secure</span>
        </label>
        <input type="checkbox" value="1" />
      </cds-checkbox-panel>
      <cds-checkbox-panel>
        <label cds-layout="vertical gap:md align:center">
          <span cds-text="section">VM Four</span>
          <span cds-text="subsection center">Storage & Salvage</span>
        </label>
        <input type="checkbox" value="1" />
      </cds-checkbox-panel>
      <cds-control-message>Helper text</cds-control-message>
    </cds-checkbox-group>
  `;
}

export function status() {
  return html`
    <div cds-layout="vertical gap:lg">
      <cds-checkbox-group layout="vertical-inline" status="error">
        <label>Error</label>
        <cds-checkbox-panel>
          <label cds-layout="vertical gap:md align:center">
            <span cds-text="section">VM One</span>
            <span cds-text="subsection center">Orchestrate & Automate</span>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox-panel>
        <cds-checkbox-panel>
          <label cds-layout="vertical gap:md align:center">
            <span cds-text="section">VM Two</span>
            <span cds-text="subsection center">Replication & Remediation</span>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox-panel>
        <cds-checkbox-panel>
          <label cds-layout="vertical gap:md align:center">
            <span cds-text="section">VM Three</span>
            <span cds-text="subsection center">Scale & Secure</span>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox-panel>
        <cds-checkbox-panel>
          <label cds-layout="vertical gap:md align:center">
            <span cds-text="section">VM Four</span>
            <span cds-text="subsection center">Storage & Salvage</span>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox-panel>
        <cds-control-message status="error">Helper text2</cds-control-message>
      </cds-checkbox-group>

      <cds-checkbox-group layout="vertical-inline" status="success">
        <label>Success</label>
        <cds-checkbox-panel>
          <label cds-layout="vertical gap:md align:center">
            <span cds-text="section">VM One</span>
            <span cds-text="subsection center">Orchestrate & Automate</span>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox-panel>
        <cds-checkbox-panel>
          <label cds-layout="vertical gap:md align:center">
            <span cds-text="section">VM Two</span>
            <span cds-text="subsection center">Replication & Remediation</span>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox-panel>
        <cds-checkbox-panel>
          <label cds-layout="vertical gap:md align:center">
            <span cds-text="section">VM Three</span>
            <span cds-text="subsection center">Scale & Secure</span>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox-panel>
        <cds-checkbox-panel>
          <label cds-layout="vertical gap:md align:center">
            <span cds-text="section">VM Four</span>
            <span cds-text="subsection center">Storage & Salvage</span>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox-panel>
        <cds-control-message status="success">Helper text2</cds-control-message>
      </cds-checkbox-group>

      <cds-checkbox-group layout="vertical-inline">
        <label>Default</label>
        <cds-checkbox-panel>
          <label cds-layout="vertical gap:md align:center">
            <span cds-text="section">VM One</span>
            <span cds-text="subsection center">Orchestrate & Automate</span>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox-panel>
        <cds-checkbox-panel>
          <label cds-layout="vertical gap:md align:center">
            <span cds-text="section">VM Two</span>
            <span cds-text="subsection center">Replication & Remediation</span>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox-panel>
        <cds-checkbox-panel>
          <label cds-layout="vertical gap:md align:center">
            <span cds-text="section">VM Three</span>
            <span cds-text="subsection center">Scale & Secure</span>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox-panel>
        <cds-checkbox-panel>
          <label cds-layout="vertical gap:md align:center">
            <span cds-text="section">VM Four</span>
            <span cds-text="subsection center">Storage & Salvage</span>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox-panel>
        <cds-control-message>Helper text2</cds-control-message>
      </cds-checkbox-group>

      <cds-checkbox-group layout="vertical-inline" disabled>
        <label>Disabled</label>
        <cds-checkbox-panel>
          <label cds-layout="vertical gap:md align:center">
            <span cds-text="section">VM One</span>
            <span cds-text="subsection center">Orchestrate & Automate</span>
          </label>
          <input type="checkbox" value="1" disabled />
        </cds-checkbox-panel>
        <cds-checkbox-panel>
          <label cds-layout="vertical gap:md align:center">
            <span cds-text="section">VM Two</span>
            <span cds-text="subsection center">Replication & Remediation</span>
          </label>
          <input type="checkbox" value="1" disabled />
        </cds-checkbox-panel>
        <cds-checkbox-panel>
          <label cds-layout="vertical gap:md align:center">
            <span cds-text="section">VM Three</span>
            <span cds-text="subsection center">Scale & Secure</span>
          </label>
          <input type="checkbox" value="1" disabled />
        </cds-checkbox-panel>
        <cds-checkbox-panel>
          <label cds-layout="vertical gap:md align:center">
            <span cds-text="section">VM Four</span>
            <span cds-text="subsection center">Storage & Salvage</span>
          </label>
          <input type="checkbox" value="1" disabled />
        </cds-checkbox-panel>
        <cds-control-message>Helper text2</cds-control-message>
      </cds-checkbox-group>
    </div>
  `;
}

export function sizes() {
  return html`
    <section cds-layout="vertical gap:md">
      <cds-checkbox-group layout="vertical-inline">
        <label>Default</label>
        <cds-checkbox-panel>
          <label cds-layout="vertical gap:md align:center">
            <span cds-text="section">VM One</span>
            <span cds-text="subsection center">Orchestrate & Automate</span>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox-panel>
        <cds-checkbox-panel>
          <label cds-layout="vertical gap:md align:center">
            <span cds-text="section">VM Two</span>
            <span cds-text="subsection center">Replication & Remediation</span>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox-panel>
        <cds-checkbox-panel>
          <label cds-layout="vertical gap:md align:center">
            <span cds-text="section">VM Three</span>
            <span cds-text="subsection center">Scale & Secure</span>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox-panel>
        <cds-checkbox-panel>
          <label cds-layout="vertical gap:md align:center">
            <span cds-text="section">VM Four</span>
            <span cds-text="subsection center">Storage & Salvage</span>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox-panel>
        <cds-control-message>Helper text2</cds-control-message>
      </cds-checkbox-group>
      <cds-checkbox-group layout="vertical-inline">
        <label>Small (sm)</label>
        <cds-checkbox-panel size="sm">
          <label cds-layout="vertical gap:sm align:center">
            <span cds-text="section">VM One</span>
            <span cds-text="subsection center">Orchestrate & Automate</span>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox-panel>
        <cds-checkbox-panel size="sm">
          <label cds-layout="vertical gap:sm align:center">
            <span cds-text="section">VM Two</span>
            <span cds-text="subsection center">Replication & Remediation</span>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox-panel>
        <cds-checkbox-panel size="sm">
          <label cds-layout="vertical gap:sm align:center">
            <span cds-text="section">VM Three</span>
            <span cds-text="subsection center">Scale & Secure</span>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox-panel>
        <cds-checkbox-panel size="sm">
          <label cds-layout="vertical gap:sm align:center">
            <span cds-text="section">VM Four</span>
            <span cds-text="subsection center">Storage & Salvage</span>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox-panel>
        <cds-control-message>Helper text2</cds-control-message>
      </cds-checkbox-group>
      <cds-checkbox-group layout="vertical-inline">
        <label>Medium (md)</label>
        <cds-checkbox-panel size="md">
          <label cds-layout="vertical gap:lg align:center">
            <span cds-text="section">VM One</span>
            <span cds-text="subsection center">Orchestrate & Automate</span>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox-panel>
        <cds-checkbox-panel size="md">
          <label cds-layout="vertical gap:lg align:center">
            <span cds-text="section">VM Two</span>
            <span cds-text="subsection center">Replication & Remediation</span>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox-panel>
        <cds-checkbox-panel size="md">
          <label cds-layout="vertical gap:lg align:center">
            <span cds-text="section">VM Three</span>
            <span cds-text="subsection center">Scale & Secure</span>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox-panel>
        <cds-checkbox-panel size="md">
          <label cds-layout="vertical gap:lg align:center">
            <span cds-text="section">VM Four</span>
            <span cds-text="subsection center">Storage & Salvage</span>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox-panel>
        <cds-control-message>Helper text2</cds-control-message>
      </cds-checkbox-group>
      <cds-checkbox-group layout="vertical-inline">
        <label>Large (lg)</label>
        <cds-checkbox-panel size="lg">
          <label cds-layout="vertical gap:xxl align:center">
            <span cds-text="heading">VM One</span>
            <span cds-text="section center">Orchestrate & Automate</span>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox-panel>
        <cds-checkbox-panel size="lg">
          <label cds-layout="vertical gap:xxl align:center">
            <span cds-text="heading">VM Two</span>
            <span cds-text="section center">Replication & Remediation</span>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox-panel>
        <cds-control-message>Helper text2</cds-control-message>
      </cds-checkbox-group>
      <cds-checkbox-group layout="vertical-inline">
        <label>Extra-large (xl)</label>
        <cds-checkbox-panel size="xl">
          <label cds-layout="vertical gap:xxl align:center">
            <span cds-text="heading">VM One</span>
            <span cds-text="section center">Orchestrate & Automate</span>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox-panel>
        <cds-checkbox-panel size="xl">
          <label cds-layout="vertical gap:xxl align:center">
            <span cds-text="heading">VM Two</span>
            <span cds-text="section center">Replication & Remediation</span>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox-panel>
        <cds-control-message>Helper text2</cds-control-message>
      </cds-checkbox-group>
    </section>
  `;
}

export function darkTheme() {
  return html`
    <div cds-theme="dark">
      <cds-checkbox-group layout="vertical-inline">
        <label>Vertical inline</label>
        <cds-checkbox-panel>
          <label cds-layout="vertical gap:md align:center">
            <span cds-text="section">VM One</span>
            <span cds-text="subsection center">Orchestrate & Automate</span>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox-panel>
        <cds-checkbox-panel>
          <label cds-layout="vertical gap:md align:center">
            <span cds-text="section">VM Two</span>
            <span cds-text="subsection center">Replication & Remediation</span>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox-panel>
        <cds-checkbox-panel>
          <label cds-layout="vertical gap:md align:center">
            <span cds-text="section">VM Three</span>
            <span cds-text="subsection center">Scale & Secure</span>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox-panel>
        <cds-checkbox-panel>
          <label cds-layout="vertical gap:md align:center">
            <span cds-text="section">VM Four</span>
            <span cds-text="subsection center">Storage & Salvage</span>
          </label>
          <input type="checkbox" value="1" />
        </cds-checkbox-panel>
        <cds-control-message>Helper text2</cds-control-message>
      </cds-checkbox-group>
    </div>
  `;
}
