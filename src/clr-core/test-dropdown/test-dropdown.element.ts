/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonStringsService } from '@clr/core';
import { baseStyles, property, registerElementSafely } from '@clr/core/common';
import { html, LitElement } from 'lit-element';

import { styles } from './test-dropdown.element.css';

/**
 * Dropdown, example test component. Do not use in production.
 *
 * ```typescript
 * import '@clr/core/test-dropdown';
 * ```
 *
 * ```html
 * <cwc-test-dropdown title="click me!">
 *   Hello World
 * </cwc-test-dropdown>
 * ```
 *
 * @noInheritDoc
 * @beta 3.0
 * @element cwc-test-dropdown
 * @slot default - Content slot for dropdown content
 * @attr outline - Apply outline style.
 * @event openChange - notify open state change of dropdown
 * @cssprop --clr-test-border-color
 * @cssprop --clr-test-button-background-color
 * @cssprop --clr-test-button-text-color
 */
// @dynamic
export class CwcTestDropdown extends LitElement {
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
      this.openChange();
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
        ${
          this.open
            ? html`
            <div>
              ${CommonStringsService.keys.open}
              <slot></slot>
            </div>`
            : ''
        }
      </div>
    `;
  }

  /** Toggle the current open state of the dropdown */
  toggle() {
    this.open = !this.open;
  }

  private openChange() {
    this.dispatchEvent(new CustomEvent('openChange', { detail: this.open }));
  }
}

registerElementSafely('cwc-test-dropdown', CwcTestDropdown);

declare global {
  interface HTMLElementTagNameMap {
    'cwc-test-dropdown': CwcTestDropdown;
  }
}
