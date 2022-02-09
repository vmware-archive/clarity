/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement, PropertyValues } from 'lit';
import { AlertGroupTypes } from '@cds/core/alert';
import { CdsButton } from '@cds/core/button';
import { assignSlotNames, baseStyles, querySlotAll, state } from '@cds/core/internal';
import styles from './alert-actions.element.scss';

/**
 * Web component alert actions to be used inside default and banner alerts.
 *
 * ```typescript
 * import '@cds/core/alert/register.js';
 * ```
 *
 * ```html
 * <cds-alert>
 *   Lorem ipsum dolor sit amet
 *   <cds-alert-actions>
 *     <cds-button>Fix</cds-button>
 *   </cds-alert-actions>
 * </cds-alert>
 * ```
 *
 * @element cds-alert-actions
 * @slot
 * @cssprop --action-text-color
 * @cssprop --action-hover-text-color
 * @cssprop --action-font-size
 */
export class CdsAlertActions extends LitElement {
  /**
   * @type {default | banner | light}
   * @private
   */
  @state({ type: String, reflect: true })
  type: AlertGroupTypes = 'light';

  @querySlotAll('cds-button')
  private buttons: NodeListOf<CdsButton>;

  render() {
    return html`<div class="private-host" cds-layout="horizontal wrap:none gap:xs align:vertical-center">
      <slot></slot>
    </div>`;
  }

  connectedCallback() {
    super.connectedCallback();
    assignSlotNames([this, 'actions']);
  }

  updated(props: PropertyValues<this>) {
    super.updated(props);
    this.buttons.forEach(b => {
      b.status = this.type === 'banner' ? 'inverse' : 'primary';
      b.size = this.type === 'banner' ? 'sm' : 'md';
      b.style.setProperty('--color', 'inherit');
    });
  }

  static get styles() {
    return [baseStyles, styles];
  }
}
