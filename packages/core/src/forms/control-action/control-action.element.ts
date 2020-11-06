/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, property } from 'lit-element';
import { CdsIcon } from '@cds/core/icon/icon.element.js';
import {
  assignSlotNames,
  baseStyles,
  CdsBaseButton,
  hasAttributeAndIsNotEmpty,
  querySlot,
  setOrRemoveAttribute,
} from '@cds/core/internal';
import { styles } from './control-action.element.css.js';
import { LogService } from '@cds/core/internal';

/**
 * Control Action
 *
 * ```typescript
 * import '@cds/core/forms/register.js';
 * ```
 *
 * ```html
 * <cds-control-action>
 *
 * </cds-control-action>
 * ```
 * @internal
 * @element cds-control-action
 * @slot - For projecting text content or cds-icon
 */
export class CdsControlAction extends CdsBaseButton {
  /** Set the action type placement within the supporting input control */
  @property({ type: String }) action: 'label' | 'prefix' | 'suffix';

  @property({ type: Boolean }) readonly = false;

  @property({ type: String }) ariaLabel = '';

  @querySlot('cds-icon') protected icon: CdsIcon;

  static get styles() {
    return [baseStyles, styles];
  }

  render() {
    return html`
      <div class="private-host">
        <slot></slot>
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.syncAria();
  }

  private syncAria() {
    const iAmReadonly = this.readonly;
    const iHaveAriaLabel = hasAttributeAndIsNotEmpty(this, 'aria-label');
    setOrRemoveAttribute(this, ['aria-hidden', 'true'], () => {
      return iAmReadonly && !iHaveAriaLabel;
    });
  }

  updated(props: Map<string, any>) {
    super.updated(props);
    if (props.has('action')) {
      this.setSlotLocation();
    }

    if (props.has('readonly') || props.has('ariaLabel')) {
      this.validateAriaLabel();
      this.syncAria();
    }
  }

  setSlotLocation() {
    assignSlotNames([this, this.action ?? false]);
  }

  private validateAriaLabel() {
    if (!this.readonly && !this.getAttribute('aria-label')?.length) {
      LogService.warn('A aria-label is required for interactive cds-control-actions', this);
    }
  }
}
