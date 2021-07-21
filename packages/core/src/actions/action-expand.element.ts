/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { i18n, I18nService, property } from '@cds/core/internal';
import { CdsAction } from './action.element.js';
import styles from './action-expand.element.scss';

/**
 * Action Expand Button
 *
 * ```typescript
 * import '@cds/core/actions/register.js';
 * ```
 *
 * ```html
 * <cds-action-expand pressed></cds-action-expand>
 * ```
 * @internal
 * @element cds-action-expand
 * @slot - For projecting text content or cds-icon
 */
export class CdsActionExpand extends CdsAction {
  @property({ type: String }) action: 'vertical' | 'horizontal' | 'detail' = 'vertical';

  @i18n() i18n = I18nService.keys.actions;

  static get styles() {
    return [super.styles, styles];
  }

  get #iconDirection() {
    if (this.action === 'vertical') {
      return this.pressed ? 'down' : 'right';
    } else if (this.action === 'horizontal') {
      return this.pressed ? 'left' : 'right';
    } else {
      return null;
    }
  }

  get #iconShape() {
    if (this.action === 'detail') {
      return this.pressed ? 'detail-collapse' : 'detail-expand';
    } else {
      return 'angle';
    }
  }

  render() {
    return html`
      <div class="private-host">
        <cds-icon .shape=${this.#iconShape} .direction=${this.#iconDirection}></cds-icon>
      </div>
    `;
  }

  constructor() {
    super();
    this.pressed = false;
    this.ariaLabel = this.ariaLabel?.length ? this.ariaLabel : this.i18n.expand;
  }
}
