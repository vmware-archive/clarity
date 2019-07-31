/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { LitElement, html, css, property } from 'lit-element';

export const styles = css`
  :host {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
  }

  .dropdown div {
    border: 2px solid var(--clr-test-border-color, #ccc);
    padding: 0.5rem;
    color: inherit;
    font-size: 0.75rem;
  }

  .dropdown .btn {
    background-color: var(--clr-test-button-background-color, #ccc);
    color: var(--clr-test-button-text-color, #2d2d2d);
    border-radius: 0.25rem;
    padding: 0.5rem;
    font-family: inherit;
    font-size: 1rem;
    cursor: pointer;
    height: auto;
  }
`;

// @dynamic
export class ClrWcElement extends LitElement {
  @property({ type: Boolean })
  visible = false;
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
          this.visible
            ? html`
            <div>
              <slot></slot>
            </div>`
            : ''
        }
      </div>
    `;
  }

  toggle() {
    this.visible = !this.visible;
    this.dispatchEvent(new CustomEvent('visibleChange', { detail: this.visible }));
  }
}

customElements.define('clr-wc-element', ClrWcElement);
