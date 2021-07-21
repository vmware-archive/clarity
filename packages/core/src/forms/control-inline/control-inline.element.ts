/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, PropertyValues } from 'lit';
import { EventEmitter, property, event, getElementUpdates, state } from '@cds/core/internal';
import styles from './control-inline.element.scss';
import { CdsControl, ControlLabelLayout } from '../control/control.element.js';
import { getStatusIcon } from '../utils/utils.js';

/**
 * Internal Control Inline (boolean types)
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
 * @element cds-internal-control-inline
 * @slot - For projecting inline input and label
 */
export class CdsInternalControlInline extends CdsControl {
  /** Align the labels of controls within group left or right */
  @property({ type: String }) controlAlign: 'left' | 'right' = 'left';

  /** @private */
  @state() isControlGroup: boolean;

  /** @private */
  @state({ type: Boolean, reflect: true }) protected checked = false;

  /** @private */
  @state({ type: Boolean, reflect: true }) protected indeterminate = false;

  /** @private */
  @event() protected checkedChange: EventEmitter<boolean>;

  protected supportsPrefixSuffixActions = false;

  static get styles() {
    return [...super.styles, styles];
  }

  protected get internalLabelTemplate() {
    return this.labelLayout !== ControlLabelLayout.ariaLabel
      ? html`
          <cds-internal-control-label
            action="secondary"
            .disabled="${this.disabled}"
            cds-layout="align:vertical-center"
          >
            <slot name="label" @slotchange=${() => this.associateInputAndLabel()}></slot>
          </cds-internal-control-label>
        `
      : '';
  }

  render() {
    return html`
      <div
        class="private-host"
        cds-layout="${this.isControlGroup ? 'horizontal align:vertical-center' : 'vertical'} gap:xs"
      >
        <div
          cds-layout="horizontal gap:xs wrap:none align:vertical-center ${this.controlAlign === 'right'
            ? 'order:reverse'
            : ''}"
        >
          <div role="presentation" class="input" @click=${this.selectInput}></div>
          <div role="presentation" focusable @click=${this.selectInput}></div>
          ${this.internalLabelTemplate}
        </div>
        ${this.messages?.length
          ? html` <div cds-layout="horizontal wrap:none ${this.messages?.length ? 'gap:xs' : ''}">
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

  firstUpdated(props: PropertyValues<this>) {
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

  updated(props: PropertyValues<any>) {
    super.updated(props);

    if (props.has('indeterminate') && props.get('indeterminate') !== this.indeterminate && this.indeterminate) {
      this.checked = false;
    }

    if (props.has('checked') && props.get('checked') !== this.checked && this.checked) {
      this.indeterminate = false;
      this.checkedChange.emit(this.checked, { bubbles: !this.isControlGroup }); // if not a group then bubble to notify the other associated controls
    }
  }

  private selectInput(e: any) {
    this.inputControl.click();
    e.preventDefault(); // prevent any events from the input div, only the native input
  }
}
