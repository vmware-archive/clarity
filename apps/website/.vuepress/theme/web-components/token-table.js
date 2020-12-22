/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { LitElement, css } from 'lit-element';

// TODO: configure vuepress (config.js) with something like awesome-typescript-loader so we can import directly from
// ../../../../../packages/core/src/styles/tokens/tokens.stories.ts as something like CdsTokenTableUtils
import { getTokenTable } from '../util/token.utils';

class TokenTable extends LitElement {
  static get styles() {
    return css`
      :host .token-table {
        width: 100%;
        background: var(--cds-alias-object-app-background) !important;
        padding: 36px 24px;
      }

      :host .token-table tr {
        border-bottom: 1px solid #ccc;
        line-height: 0;
        min-height: 45px;
        width: 100%;
      }

      :host .token-table td {
        padding: 0;
      }
    `;
  }

  static get properties() {
    return { tokenKey: { type: String } };
  }

  constructor() {
    super();
  }

  render() {
    return getTokenTable(this.tokenKey);
  }
}

customElements.define('token-table', TokenTable);
