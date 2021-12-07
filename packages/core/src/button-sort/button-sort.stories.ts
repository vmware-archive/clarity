/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/button-sort/register.js';
import { customElement, state } from '@cds/core/internal';
import { html, LitElement } from 'lit';

export default {
  title: 'Stories/Button Sort',
  component: 'cds-button-sort',
  parameters: {
    options: { showPanel: true },
  },
};

export function basic() {
  @customElement('demo-button-sort')
  class DemoButtonSort extends LitElement {
    @state() private sort: 'none' | 'ascending' | 'descending' = 'none';

    render() {
      return html`
        <div cds-layout="horizontal gap:lg">
          <cds-button-sort
            .sort=${this.sort}
            @sortChange=${(e: any) => (this.sort = e.detail)}
            aria-label="sort"
          ></cds-button-sort>
          <cds-button-sort sort="ascending" aria-label="sort"></cds-button-sort>
          <cds-button-sort sort="descending" aria-label="sort"></cds-button-sort>
        </div>
      `;
    }

    protected createRenderRoot() {
      return this;
    }
  }
  return html`<demo-button-sort></demo-button-sort>`;
}
