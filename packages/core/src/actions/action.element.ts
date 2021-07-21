/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, PropertyValues } from 'lit';
import { property, baseStyles, CdsBaseButton, LogService, state, assignSlotNames } from '@cds/core/internal';
import styles from './action.element.scss';

/**
 * Action Button
 *
 * ```typescript
 * import '@cds/core/actions/register.js';
 * ```
 *
 * ```html
 * <cds-action></cds-action>
 * ```
 * @internal
 * @element cds-action
 * @slot - For projecting text content or cds-icon
 * @cssprop --icon-width
 * @cssprop --icon-height
 * @cssprop --width
 * @cssprop --height
 * @cssprop --cursor
 * @cssprop --color
 * @cssprop --font-size
 * @cssprop --background
 * @cssprop --padding
 * @cssprop --outline
 * @cssprop --outline-offset
 */
export class CdsAction extends CdsBaseButton {
  @property({ type: String }) shape = 'ellipsis-vertical';

  @property({ type: Boolean }) readonly = false;

  @property({ type: Boolean }) pressed: boolean;

  @state({ type: Boolean, reflect: true, attribute: 'cds-action' }) protected cdsAction = true;

  /** Set the action type placement within the supporting input control */
  @property({ type: String, reflect: true }) action: 'label' | 'prefix' | 'suffix' | string;

  get #isControlAction() {
    return this.action === 'label' || this.action === 'prefix' || this.action === 'suffix';
  }

  static styles = [baseStyles, styles];

  render() {
    return html`
      <div class="private-host">
        <slot><cds-icon .shape=${this.shape} ?solid=${this.ariaPressed === 'true'} inner-offset=${1}></cds-icon></slot>
      </div>
    `;
  }

  updated(props: PropertyValues) {
    super.updated(props);

    if (!this.ariaLabel && !this.readonly) {
      LogService.warn('A aria-label is required for interactive cds-action type', this);
    }

    if (props.has('readonly')) {
      this.readonly && !this.hasAttribute('aria-label') ? (this.ariaHidden = 'true') : (this.ariaHidden = null);
    }

    if (props.has('action') && this.#isControlAction) {
      assignSlotNames([this, this.action ?? false]);
    }
  }
}
