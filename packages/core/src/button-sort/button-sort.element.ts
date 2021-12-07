/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { EventEmitter, property, event } from '@cds/core/internal';
import { CdsButtonAction } from '@cds/core/button-action';
import { sortOrder } from './utils.js';
import styles from './button-sort.element.scss';

export type ButtonSort = 'none' | 'ascending' | 'descending';

/**
 * Action Button
 *
 * ```typescript
 * import '@cds/core/button-sort/register.js';
 * ```
 *
 * ```html
 * <cds-button-sort></cds-button-sort>
 * ```
 * @beta
 * @element cds-button-sort
 */
export class CdsButtonSort extends CdsButtonAction {
  @property({ type: String, reflect: true }) sort: ButtonSort = 'none';

  @event() sortChange: EventEmitter<ButtonSort>;

  static get styles() {
    return [super.styles, styles];
  }

  render() {
    return html`
      <div class="private-host">
        <div cds-layout="vertical align:center">
          <slot>
            <cds-icon shape="angle" direction="up" inner-offset="2" size="12"></cds-icon>
            <cds-icon shape="angle" direction="down" inner-offset="2" size="12"></cds-icon>
          </slot>
        </div>
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', () => this.sortChange.emit(sortOrder(this.sort), { bubbles: true }));

    if (!this.ariaLabel) {
      this.ariaLabel = this.i18n.sort;
    }
  }
}
