/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement, property } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';

// @dynamic
export class CwcBaseButton extends LitElement {
  private _disabled: boolean = false;
  protected _previouslyDisabled: boolean = false;

  @property({ type: Boolean, reflect: true })
  readonly = false;
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
    // the _previouslyDisabled is used in button.element.ts for loading buttons
    // to keep track of the state it had before being 'disabled' by the component when it's loading
    this._previouslyDisabled = this._disabled;
    this._disabled = !!value;
    if (this._disabled !== this._previouslyDisabled) {
      this.requestUpdate('disabled', this._previouslyDisabled);
    }
  }

  get disabled() {
    return this._disabled;
  }

  protected get hiddenButtonTemplate() {
    return this.readonly
      ? html``
      : html`
      <button
          aria-hidden="true"
          ?disabled="${this.disabled}"
          tabindex="-1"
          style="display: none"
          value="${ifDefined(this.value)}"
          name="${ifDefined(name)}"
          type="${ifDefined(this.type)}"
        ></button>`;
  }

  protected render() {
    return html`
        <slot></slot>
        ${this.hiddenButtonTemplate}
    `;
  }

  protected firstUpdated(props: Map<string, any>) {
    super.firstUpdated(props);
    this.updateButtonAttributes();
  }

  protected updated(props: Map<string, any>) {
    super.updated(props);
    // if readonly or disabled attribute was updated, button attributes might need updating
    if (props.has('readonly') || props.has('disabled')) {
      this.updateButtonAttributes();
    }
  }

  private updateButtonAttributes() {
    const oldRole = this.role;
    const oldTabIndex = this.tabIndex;

    if (this.readonly) {
      this.removeAttribute('role');
      this.removeAttribute('tabIndex');
    } else {
      this.role = 'button';
      this.tabIndex = this.disabled ? -1 : 0;
    }

    if (this.role !== oldRole) {
      this.requestUpdate('role', oldRole);
    }

    if (this.tabIndex !== oldTabIndex) {
      this.requestUpdate('tabIndex', oldTabIndex);
    }
  }
}
