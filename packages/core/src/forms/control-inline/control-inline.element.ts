/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-element';
import { EventEmitter, property, event, getElementUpdates, internalProperty } from '@cds/core/internal';
import { styles } from './control-inline.element.css.js';
import { CdsControl } from '../control/control.element.js';
import { getStatusIcon } from '../utils/index.js';

/**
 * Internal Control Inline
 *
 * ```typescript
 * import '@cds/core/forms/register.js';
 * ```
 *
 * ```html
 * <cds-internal-control-inline>
 *   <label>inline</label>
 *   <input type="radio" />
 * </ds-internal-control-inline>
 * ```
 *
 * @slot - For projecting inline input and label
 */
export class CdsInternalControlInline extends CdsControl {
  /** Align the labels of controls within group left or right */
  @property({ type: String }) controlAlign: 'left' | 'right' = 'left';

  /** @private */
  @internalProperty() isControlGroup: boolean;

  /** @private */
  @internalProperty({ type: Boolean, reflect: true }) protected checked = false;

  /** @private */
  @internalProperty({ type: Boolean, reflect: true }) protected indeterminate = false;

  /** @private */
  @event() protected checkedChange: EventEmitter<boolean>;

  protected supportsPrefixSuffixActions = false;

  static get styles() {
    return [...super.styles, styles];
  }

  render() {
    return html`
      <div class="private-host" cds-layout="vertical gap:sm">
        <div cds-layout="horizontal gap:sm wrap:none ${this.controlAlign === 'right' ? 'order:reverse' : ''}">
          <div class="input" @click=${() => this.inputControl.click()}></div>
          <cds-internal-control-label
            action="secondary"
            .disabled="${this.disabled}"
            cds-layout="align:vertical-center"
          >
            <slot name="label"></slot>
          </cds-internal-control-label>
        </div>
        ${!this.isControlGroup
          ? html` <div cds-layout="horizontal wrap:none ${this.messages?.length ? 'gap:sm' : ''}">
              ${getStatusIcon(this.status)}
              <div cds-layout="align:vertical-center" class="messages">
                <slot name="message"></slot>
              </div>
            </div>`
          : ''}
      </div>
      <div cds-layout="display:screen-reader-only">
        <slot name="input"></slot>
      </div>
    `;
  }

  firstUpdated(props: Map<string, any>) {
    super.firstUpdated(props);
    this.inputControl.addEventListener('change', () => (this.checked = this.inputControl.checked));
    this.observers.push(
      getElementUpdates(this.inputControl, 'checked', (value: any) => (this.checked = value === '' ? true : value)),
      getElementUpdates(
        this.inputControl,
        'indeterminate',
        (value: any) => (this.indeterminate = value === '' ? true : value)
      )
    );
  }

  updated(props: Map<string, any>) {
    super.updated(props);

    if (props.has('indeterminate') && props.get('indeterminate') !== this.indeterminate && this.indeterminate) {
      this.checked = false;
    }

    if (props.has('checked') && props.get('checked') !== this.checked && this.checked) {
      this.indeterminate = false;
      this.checkedChange.emit(this.checked);
    }
  }
}
