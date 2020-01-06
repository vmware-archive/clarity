/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement, query } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';

import { property } from '../decorators/property';
import { querySlot } from '../decorators/query-slot';
import { KeyCodes } from './../enums/key-codes';
import { stopEvent } from './../utils/events';

// @dynamic
export class CwcBaseButton extends LitElement {
  private _disabled: boolean = false;
  protected _previouslyDisabled: boolean = false;

  @property({ type: Boolean })
  readonly = false;
  @property({ type: String })
  role = 'button';
  @property({ type: String })
  type: 'button' | 'submit';
  @property({ type: String })
  name = '';
  @property({ type: String })
  value = '';
  @property({ type: Boolean })
  set disabled(value: boolean) {
    // the _previouslyDisabled is used in button.element.ts for loading buttons
    // to keep track of the state it had before being 'disabled' by the component when it's loading
    this._previouslyDisabled = this._disabled;
    this._disabled = !!value;
    if (this._disabled !== this._previouslyDisabled) {
      this.requestUpdate('disabled', this._previouslyDisabled);
    }
  }

  @querySlot('a') private anchor: HTMLAnchorElement;

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

  @query('button') private templateButton: HTMLButtonElement;
  private hiddenButton: HTMLButtonElement;

  protected render() {
    return html`
      <slot></slot>
      ${this.hiddenButtonTemplate}
    `;
  }

  protected firstUpdated(props: Map<string, any>) {
    super.firstUpdated(props);
    this.updateButtonAttributes();
    this.setupNativeButtonBehavior();
  }

  protected updated(props: Map<string, any>) {
    super.updated(props);
    // if readonly or disabled attribute was updated, button attributes might need updating
    if (props.has('readonly') || props.has('disabled')) {
      this.updateButtonAttributes();
    }
  }

  /**
   * We have to append a hidden button outside the web component in the light DOM
   * This allows us to trigger native submit events within a form element.
   */
  private setupNativeButtonBehavior() {
    this.appendHiddenButton();
    this.addEventListener('click', e => this.triggerNativeButtonBehavior(e));
    this.addEventListener('keydown', e => this.emulateKeyBoardEventBehavior(e));
  }

  private triggerNativeButtonBehavior(event: Event) {
    if (!this.readonly) {
      if (this.disabled) {
        stopEvent(event);
      } else if (event.target === this && !event.defaultPrevented) {
        this.hiddenButton.dispatchEvent(new MouseEvent('click', { relatedTarget: this, composed: true }));
      }
    }
  }

  private appendHiddenButton() {
    if (!this.hiddenButton && this.templateButton) {
      this.hiddenButton = this.appendChild(this.templateButton);
    }
  }

  private emulateKeyBoardEventBehavior(e: KeyboardEvent) {
    if (!this.anchor && (e.key === KeyCodes.Enter || e.code === KeyCodes.Space)) {
      this.click();
      stopEvent(e);
    }
  }

  private updateButtonAttributes() {
    const oldRole = this.role;
    const oldTabIndex = this.tabIndex;

    if (this.anchor) {
      this.readonly = true;
      this.setAttribute('is-anchor', '');
    }

    if (this.readonly) {
      this.removeAttribute('role');
      this.removeAttribute('tabIndex');
      this.appendHiddenButton();
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
