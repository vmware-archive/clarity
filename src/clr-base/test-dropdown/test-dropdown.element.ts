/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { registerElementSafely } from '@clr/base/common';
import { html, LitElement, property } from 'lit-element';

import { styles } from './test-dropdown.element.css';

/**
 * Dropdown, example test component. Do not use in production.
 *
 * @noInheritDoc
 * @element `cwc-test-dropdown`
 * @slot `default` - Content slot for dropdown content
 * @styleAttr `outline` - Apply outline style.
 * @cssProp `--clr-test-border-color`
 * @cssProp `--clr-test-button-background-color`
 * @cssProp  `--clr-test-button-text-color`
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
    return styles;
  }

  render() {
    return html`
      <div class="dropdown">
        <button @click="${() => this.toggle()}" class="btn">${this.title}</button>
        ${
          this.open
            ? html`
            <div>
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
