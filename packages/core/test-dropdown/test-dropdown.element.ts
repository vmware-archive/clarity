/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  baseStyles,
  CommonStringsService,
  event,
  EventEmitter,
  property,
  registerElementSafely,
} from '@clr/core/internal';
import { html, LitElement } from 'lit-element';

import { styles } from './test-dropdown.element.css.js';

/**
 * Dropdown, example test component. Do not use in production.
 *
 * ```typescript
 * import '@clr/core/test-dropdown';
 * ```
 *
 * ```html
 * <cds-test-dropdown title="click me!">
 *   Hello World
 * </cds-test-dropdown>
 * ```
 *
 * @beta
 * @slot default - Content slot for dropdown content
 * @event {boolean} openChange - notify open state change of dropdown
 * @cssprop --border-color
 * @cssprop --background-color
 * @cssprop --text-color
 */
export class CdsTestDropdown extends LitElement {
  @event() private openChange: EventEmitter<boolean>;

  private _open = false;

  get open() {
    return this._open;
  }

  /** Set open to open or close the dropdown */
  @property({ type: Boolean })
  set open(value) {
    if (value !== this._open) {
      const old = this._open;
      this._open = value;
      this.requestUpdate('open', old);
      this.openChange.emit(this.open);
    }
  }

  /** Set the dropdown button text */
  @property({ type: String })
  title = 'dropdown';

  static get styles() {
    return [baseStyles, styles];
  }

  render() {
    return html`
      <div class="dropdown">
        <button @click="${() => this.toggle()}" class="btn">${this.title}</button>
        ${this.open
          ? html` <div>
              ${CommonStringsService.keys.open}
              <slot></slot>
            </div>`
          : ''}
      </div>
    `;
  }

  /** Toggle the current open state of the dropdown */
  toggle() {
    this.open = !this.open;
  }
}

registerElementSafely('cds-test-dropdown', CdsTestDropdown);

declare global {
  interface HTMLElementTagNameMap {
    'cds-test-dropdown': CdsTestDropdown;
  }
}
