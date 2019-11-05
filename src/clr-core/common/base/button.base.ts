/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement, property } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';

export const hiddenButtonTemplate = (
  disabled: boolean,
  value: string,
  name: string,
  type: 'button' | 'submit' | 'reset' | 'menu'
) => html`
  <button
    aria-hidden="true"
    ?disabled="${disabled}"
    tabindex="-1"
    style="display: none"
    value="${ifDefined(value)}"
    name="${ifDefined(name)}"
    type="${ifDefined(type)}"
  ></button>
`;

// @dynamic
export class CwcBaseButton extends LitElement {
  private _disabled: boolean = false;
  protected _previouslyDisabled: boolean = false;

  @property({ type: String, reflect: true })
  role = 'button';
  @property({ type: String, reflect: true })
  type: 'button' | 'submit';
  @property({ type: String, reflect: true })
  name = '';
  @property({ type: String, reflect: true })
  value = '';
  @property({ type: Boolean, reflect: true })
  set disabled(value: boolean) {
    this._previouslyDisabled = this._disabled;
    this._disabled = !!value;
    const old = this.disabled;
    this.tabIndex = this.disabled ? -1 : 0;
    this.requestUpdate('disabled', this._previouslyDisabled);
    if (this.disabled !== old) {
      this.requestUpdate('tabIndex', old);
    }
  }

  get disabled() {
    return this._disabled;
  }

  connectedCallback() {
    super.connectedCallback();
    this.tabIndex = 0;
  }

  protected render() {
    return html`
      <slot></slot>
      ${hiddenButtonTemplate(this.disabled, this.value, this.name, this.type)}
    `;
  }

  protected firstUpdated(props: Map<string, any>) {
    super.firstUpdated(props);

    if (this.disabled) {
      this.tabIndex = this.disabled ? -1 : 0;
    }
  }

  protected updated(props: Map<string, any>) {
    super.updated(props);
    if (props.get('disabled')) {
      this.tabIndex = this.disabled ? -1 : 0;
    }
  }
}
