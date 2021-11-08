/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { baseStyles, state } from '@cds/core/internal';
import { html, LitElement } from 'lit';

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
  // renderRoot needs delegatesFocus so that focus can cross the shadowDOM
  // inside modal-content with a tabindex of -1. we need the tabindex so a
  // modal's content can scroll if it needs to.
  /** @private */
  static get shadowRootOptions(): any {
    // any is used until TS 4.4.x adopted through other @cds/* libraries. Can be removed in 6.0
    return { ...super.shadowRootOptions, delegatesFocus: true };
  }

  @state({ type: Number, attribute: 'tabindex', reflect: true }) protected tabIndexAttr = 0; // don't override native prop as it stops native focus behavior

  render() {
    return this.hasAttribute('cds-layout')
      ? html`<slot></slot>`
      : html`<div cds-layout="vertical gap:lg p-y:xs"><slot></slot></div>`;
  }

  static get styles() {
    return [baseStyles];
  }
}
