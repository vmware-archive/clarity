/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { baseStyles, registerElementSafely } from '@clr/core/internal';
import { html, LitElement } from 'lit-element';

/**
 * Web component modal header to be used inside modal.
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
 * @beta
 * @element cds-modal-header
 */
export class CdsModalHeader extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('slot', 'modal-header');
  }

  render() {
    return html`<slot></slot>`;
  }

  static get styles() {
    return [baseStyles];
  }
}

registerElementSafely('cds-modal-header', CdsModalHeader);

declare global {
  interface HTMLElementTagNameMap {
    'cds-modal-header': CdsModalHeader;
  }
}
