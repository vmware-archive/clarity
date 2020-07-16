/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  applyMixins,
  baseStyles,
  CdsBaseFocusTrap,
  CommonStringsService,
  CssHelpers,
  event,
  EventEmitter,
  onKey,
  property,
  UniqueId,
} from '@clr/core/internal';
import { ClarityIcons, timesIcon } from '@clr/core/icon';
import { html } from 'lit-element';
import { styles } from './modal.element.css.js';

ClarityIcons.addIcons(timesIcon);

class ModalMixinClass extends CdsBaseFocusTrap {}

applyMixins(ModalMixinClass, [UniqueId, CssHelpers]);

/**
 * Web component modal.
 *
 * ```typescript
 * import '@clr/core/modal/register.js';
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
 * @slot
 * @slot cds-modal-content
 * @slot cds-modal-header
 * @slot cds-modal-footer
 * @event closeChange - notify when the user has clicked the close button
 * @cssprop --backdrop-opacity
 * @cssprop --backdrop-background
 * @cssprop --box-shadow-color
 * @cssprop --border-radius
 * @cssprop --border
 * @cssprop --background
 * @cssprop --close-icon-color
 * @cssprop --close-icon-color-hover
 * @cssprop --content-box-shadow-color
 * @cssprop --width
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
                    <cds-internal-close-button
                      cds-layout="align:top"
                      @click="${() => this.closeModal()}"
                      aria-label="${CommonStringsService.keys.modalCloseButtonAriaLabel}"
                      .iconSize="${'24'}"
                    ></cds-internal-close-button>
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
    onKey('escape', e, () => {
      this.closeModal();
    });
  };
}

export interface CdsModal extends ModalMixinClass, UniqueId, CssHelpers {}
