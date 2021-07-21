/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/actions/register.js';
import { baseStyles, customElement, state } from '@cds/core/internal';
import { css, html, LitElement } from 'lit';
import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { timesIcon } from '@cds/core/icon/shapes/times.js';
import { barsIcon } from '@cds/core/icon/shapes/bars.js';

ClarityIcons.addIcons(timesIcon, barsIcon);

export default {
  title: 'Stories/Actions',
  component: 'cds-action',
  parameters: {
    options: { showPanel: true },
  },
};

export function all() {
  return html`
    <div cds-layout="vertical gap:lg">
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Action</h2>
        ${action()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Action Resize</h2>
        ${actionResize()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Action Sort</h2>
        ${actionSort()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Action Handle</h2>
        ${actionHandle()}
      </div>
      <div cds-layout="vertical gap:lg">
        <h2 cds-text="section">Action Expand</h2>
        ${actionExpand()}
      </div>
    </div>
  `;
}

export function action() {
  return html`
    <div cds-layout="horizontal gap:lg">
      <cds-action aria-label="open options"></cds-action>
      <cds-action shape="bars" aria-label="open menu"></cds-action>
      <cds-action shape="filter" aria-label="filter column"></cds-action>
      <cds-action shape="close" aria-label="close message"></cds-action>
    </div>
  `;
}

export function actionResize() {
  return html` <div cds-layout="horizontal gap:xl m-b:lg">
    <cds-action-resize>
      <input type="range" aria-label="resize card divider" />
    </cds-action-resize>
    <cds-action-resize direction="horizontal">
      <input type="range" aria-label="resize card divider" />
    </cds-action-resize>
  </div>`;
}

export function actionResizePanel() {
  @customElement('demo-action-resize')
  class DemoActionResize extends LitElement {
    @state() width = 40;
    @state() height = 40;

    static styles = [
      baseStyles,
      css`
        section {
          display: grid;
          height: 100%;
          overflow: hidden;
          margin-bottom: 24px;
        }

        cds-card {
          --padding: 0;
          width: 200px;
          height: 200px;
        }

        [side='one'],
        [side='two'] {
          min-width: 20px;
          flex: 1;
          display: block;
        }

        [side='two'] {
          background: var(--cds-alias-object-container-background-tint);
        }
      `,
    ];

    render() {
      return html`
        <div cds-layout="horizontal gap:lg">
          <cds-card>
            <section style="grid-template-columns: ${this.width}px 2px 1fr">
              <div side="one"></div>
              <cds-action-resize>
                <input
                  type="range"
                  aria-label="resize card divider"
                  value=${this.width}
                  min="20"
                  max="180"
                  step="10"
                  @input=${(e: any) => (this.width = e.target.value)}
                />
              </cds-action-resize>
              <div side="two"></div>
            </section>
          </cds-card>
          <cds-card>
            <section style="grid-template-rows: ${this.height}px 2px 1fr">
              <div side="one"></div>
              <cds-action-resize direction="horizontal">
                <input
                  type="range"
                  aria-label="resize card divider"
                  value=${this.height}
                  min="20"
                  max="180"
                  step="10"
                  @input=${(e: any) => (this.height = e.target.value)}
                />
              </cds-action-resize>
              <div side="two"></div>
            </section>
          </cds-card>
        </div>
      `;
    }
  }
  return html`<demo-action-resize></demo-action-resize>`;
}

export function actionSort() {
  @customElement('demo-action-sort')
  class DemoActionSort extends LitElement {
    @state() private sort: 'none' | 'ascending' | 'descending' = 'none';

    render() {
      return html`
        <div cds-layout="horizontal gap:lg">
          <cds-action-sort
            .sort=${this.sort}
            @sortChange=${(e: any) => (this.sort = e.detail)}
            aria-label="sort"
          ></cds-action-sort>
          <cds-action-sort sort="ascending" aria-label="sort"></cds-action-sort>
          <cds-action-sort sort="descending" aria-label="sort"></cds-action-sort>
        </div>
      `;
    }

    protected createRenderRoot() {
      return this;
    }
  }
  return html`<demo-action-sort></demo-action-sort>`;
}

export function actionHandle() {
  return html`<cds-action-handle aria-label="move item"></cds-action-handle>`;
}

export function actionExpand() {
  @customElement('demo-action-expand')
  class DemoActionExpand extends LitElement {
    static styles = [baseStyles];
    @state() private expandOne = false;
    @state() private expandTwo = false;
    @state() private expandThree = false;

    render() {
      return html`
        <div cds-layout="horizontal gap:lg">
          <cds-action-expand
            action="vertical"
            .pressed=${this.expandOne}
            @click=${() => (this.expandOne = !this.expandOne)}
          ></cds-action-expand>
          <cds-action-expand
            action="horizontal"
            .pressed=${this.expandTwo}
            @click=${() => (this.expandTwo = !this.expandTwo)}
          ></cds-action-expand>
          <cds-action-expand
            action="detail"
            .pressed=${this.expandThree}
            @click=${() => (this.expandThree = !this.expandThree)}
          ></cds-action-expand>
        </div>
      `;
    }
  }
  return html`<demo-action-expand></demo-action-expand>`;
}
