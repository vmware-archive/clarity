/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { baseStyles, internalProperty } from '@cds/core/internal';
import { html, LitElement } from 'lit-element';

/**
 * Web component modal content to be used inside modal.
 *
 * ```typescript
 * import '@cds/core/modal/register.js';
 * ```
 *
 * ```html
 * <cds-modal size='lg'>
 *   <cds-modal-header>
 *      <h3 cds-text="title">My Modal</h3>
 *   </cds-modal-header>
 *   <cds-modal-content>
 *      <p>Lorem Ipsum</p>
 *   </cds-modal-content>
 *   <cds-modal-actions>
 *       <cds-button>Ok</cds-button>
 *   </cds-modal-actions>
 * </cds-modal>
 * ```
 *
 * @element cds-modal-content
 */
export class CdsModalContent extends LitElement {
  @internalProperty({ type: Number, attribute: 'tabindex', reflect: true }) protected tabIndexAttr = -1; // don't override native prop as it stops native focus behavior

  render() {
    return this.hasAttribute('cds-layout')
      ? html`<slot></slot>`
      : html`<div cds-layout="vertical gap:lg p-y:xs"><slot></slot></div>`;
  }

  static get styles() {
    return [baseStyles];
  }
}
