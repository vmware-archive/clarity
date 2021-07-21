/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/button-expand/register.js';
import { baseStyles, customElement, state } from '@cds/core/internal';
import { html, LitElement } from 'lit';
import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { timesIcon } from '@cds/core/icon/shapes/times.js';
import { barsIcon } from '@cds/core/icon/shapes/bars.js';
import { filterIcon } from '@cds/core/icon/shapes/filter.js';

ClarityIcons.addIcons(filterIcon, timesIcon, barsIcon);

export default {
  title: 'Stories/Button Expand',
  component: 'cds-button-expand',
  parameters: {
    options: { showPanel: true },
  },
};

export function basic() {
  @customElement('demo-button-expand')
  class DemoButtonExpand extends LitElement {
    static styles = [baseStyles];
    @state() private expandOne = false;
    @state() private expandTwo = false;
    @state() private expandThree = false;

    render() {
      return html`
        <div cds-layout="horizontal gap:lg">
          <cds-button-expand
            action="vertical"
            .expanded=${this.expandOne}
            @click=${() => (this.expandOne = !this.expandOne)}
          ></cds-button-expand>
          <cds-button-expand
            action="horizontal"
            .expanded=${this.expandTwo}
            @click=${() => (this.expandTwo = !this.expandTwo)}
          ></cds-button-expand>
          <cds-button-expand
            action="detail"
            .expanded=${this.expandThree}
            @click=${() => (this.expandThree = !this.expandThree)}
          ></cds-button-expand>
        </div>
      `;
    }
  }
  return html`<demo-button-expand></demo-button-expand>`;
}
