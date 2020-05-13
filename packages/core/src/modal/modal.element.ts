/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  applyMixins,
  baseStyles,
  CommonStringsService,
  CssHelpers,
  ESC,
  event,
  EventEmitter,
  property,
  registerElementSafely,
  UniqueId,
} from '@clr/core/internal';
import { html } from 'lit-element';
import { CdsBaseFocusTrap } from '../internal/base/focus-trap.base.js';
import { styles } from './modal.element.css.js';

class ModalMixinClass extends CdsBaseFocusTrap {}

applyMixins(ModalMixinClass, [UniqueId, CssHelpers]);

/**
 * Web component modal.
 *
 * ```typescript
 * import '@clr/core/modal';
 * ```
 *
 * ```html
 * <cds-modal>
 *   <cds-modal-header>
 *      <h3 cds-text="title">My Modal</h3>
 *   </cds-modal-header>
 *   <cds-modal-content>
 *     <p>Lorem Ipsum</p>
 *   </cds-modal-content>
 *   <cds-modal-actions>
 *       <cds-button>Ok</cds-button>
 *   </cds-modal-actions>
 * </cds-modal>
 * ```
 *
 * @element cds-modal
 */
export class CdsModal extends ModalMixinClass {
  static get styles() {
    return [baseStyles, styles];
  }
  @event() private closeChange: EventEmitter<boolean>;

  /** If false, the modal will not render the close button.  */
  @property({ type: Boolean })
  closable = true;

  /** Sets the overall height and width of the modal and icon based on value */
  @property({ type: String })
  size: 'default' | 'sm' | 'lg' | 'xl';

  private idForAriaLabel = `${this._idPrefix}${this._uniqueId}`;

  render() {
    return html`
      <div class="private-host" cds-layout="horizontal p:md p@md:xl align:center">
        <div class="modal-dialog" role="dialog" aria-modal="true" aria-labelledby="${this.idForAriaLabel}">
          <div cds-layout="display:screen-reader-only">${CommonStringsService.keys.modalContentStart}</div>
          <div class="modal-content" cds-layout="p:lg">
            <div cds-layout="horizontal gap:md p-b:md p-b@md:lg">
              <div cds-layout="align-stretch" id="${this.idForAriaLabel}">
                <slot name="modal-header"></slot>
              </div>
              <div cds-layout="align:right">
                <slot name="modal-header-actions"></slot>
              </div>
              ${this.closable
                ? html`
                    <button
                      @click="${() => this.closeModal()}"
                      aria-label="${CommonStringsService.keys.modalCloseButtonAriaLabel}"
                      class="close"
                      action="outline"
                      icon
                    >
                      <cds-icon shape="close"></cds-icon>
                    </button>
                  `
                : html``}
            </div>
            <div class="modal-body">
              <slot></slot>
            </div>
            <div cds-layout="p-t:md p-t@md:lg">
              <slot name="modal-actions" cds-layout="align-stretch"></slot>
            </div>
          </div>
          <div cds-layout="display:screen-reader-only">${CommonStringsService.keys.modalContentEnd}</div>
        </div>
        <div class="modal-backdrop" aria-hidden="true"></div>
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('keydown', this.fireEventOnEscape);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('keydown', this.fireEventOnEscape);
  }

  closeModal() {
    this.closeChange.emit(true);
  }

  private fireEventOnEscape = (e: KeyboardEvent) => {
    if (e.keyCode === ESC || e.key === 'Esc') {
      this.closeModal();
    }
  };
}

export interface CdsModal extends ModalMixinClass, UniqueId, CssHelpers {}

registerElementSafely('cds-modal', CdsModal);

declare global {
  interface HTMLElementTagNameMap {
    'cds-modal': CdsModal;
  }
}
