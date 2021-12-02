/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { EventEmitter, i18n, I18nService, property, event } from '@cds/core/internal';
import { CdsAction } from './action.element.js';
import styles from './action-sort.element.scss';

export type ActionSort = 'none' | 'ascending' | 'descending';

/**
 * Action Button
 *
 * ```typescript
 * import '@cds/core/actions/register.js';
 * ```
 *
 * ```html
 * <cds-action-sort></cds-action-sort>
 * ```
 * @internal
 * @element cds-action-sort
 */
export class CdsActionSort extends CdsAction {
  @property({ type: String, reflect: true }) sort: ActionSort = 'none';

  @i18n() i18n = I18nService.keys.actions;

  @event() sortChange: EventEmitter<ActionSort>;

  static get styles() {
    return [super.styles, styles];
  }

  render() {
    return html`
      <div class="private-host">
        <div cds-layout="vertical align:center">
          <cds-icon shape="angle" direction="up" inner-offset="2" size="12"></cds-icon>
          <cds-icon shape="angle" direction="down" inner-offset="2" size="12"></cds-icon>
        </div>
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', () => this.sortClick());

    if (this.ariaLabel) {
      this.ariaLabel = this.i18n.sort;
    }
  }

  private sortClick() {
    let sort = this.sort;
    switch (sort) {
      case 'ascending':
        sort = 'descending';
        break;
      case 'descending':
        sort = 'none';
        break;
      case 'none':
        sort = 'ascending';
    }

    this.sortChange.emit(sort, { bubbles: true });
  }
}
