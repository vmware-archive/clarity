/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, PropertyValues } from 'lit';
import { property } from '@cds/core/internal';
import { CdsButtonAction } from '@cds/core/button-action';
import styles from './button-expand.element.scss';

/**
 * Action Expand Button
 *
 * ```typescript
 * import '@cds/core/button-expand/register.js';
 * ```
 *
 * ```html
 * <cds-button-expand pressed></cds-button-expand>
 * ```
 * @beta
 * @element cds-button-expand
 * @slot - For projecting custom cds-icon
 */
export class CdsButtonExpand extends CdsButtonAction {
  @property({ type: String }) action: 'vertical' | 'horizontal' | 'detail' = 'vertical';

  static get styles() {
    return [super.styles, styles];
  }

  private get iconDirection() {
    if (this.action === 'vertical') {
      return this.pressed ? 'down' : 'right';
    } else if (this.action === 'horizontal') {
      return this.pressed ? 'left' : 'right';
    } else {
      return null;
    }
  }

  private get iconShape() {
    if (this.action === 'detail') {
      return this.pressed ? 'detail-collapse' : 'detail-expand';
    } else {
      return 'angle';
    }
  }

  render() {
    return html`
      <div class="private-host">
        <slot><cds-icon .shape=${this.iconShape} .direction=${this.iconDirection}></cds-icon></slot>
      </div>
    `;
  }

  constructor() {
    super();
    this.pressed = false;
  }

  firstUpdated(props: PropertyValues) {
    super.firstUpdated(props);

    if (!this.readonly) {
      this.ariaLabel = this.ariaLabel?.length ? this.ariaLabel : this.i18n.expand;
    }
  }
}
