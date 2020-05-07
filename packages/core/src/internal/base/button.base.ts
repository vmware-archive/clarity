/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { removeAttributes } from '@clr/core/internal';
import { html, LitElement, query } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';

import { property } from '../decorators/property.js';
import { querySlot } from '../decorators/query-slot.js';
import { KeyCodes } from './../enums/key-codes.js';
import { stopEvent } from './../utils/events.js';

// TODO: replace with circular progress bar when complete
export const iconSpinnerCheck = html`<span class="button-status-icon"
  ><span class="spinner spinner-inline spinner-check"></span
></span>`;

export const iconSpinner = html`<span class="button-status-icon"><span class="spinner spinner-inline"></span></span>`;

export const iconSlot = html`<span class="button-icon"><slot name="button-icon"></slot></span>`;

export const badgeSlot = html`<span class="button-badge"><slot name="button-badge"></slot></span>`;

// @dynamic
export class CdsBaseButton extends LitElement {
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
  disabled = false;

  @querySlot('a') private anchor: HTMLAnchorElement;

  protected get hiddenButtonTemplate() {
    return this.readonly
      ? html``
      : html` <button
          aria-hidden="true"
          ?disabled="${this.disabled}"
          tabindex="-1"
          style="display: none"
          value="${ifDefined(this.value)}"
          name="${ifDefined(this.name)}"
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
    this.setupAnchorFocus();
    this.setupNativeButtonBehavior();
  }

  protected updated(props: Map<string, any>) {
    super.updated(props);
    // if readonly or disabled attribute was updated, button attributes might need updating
    if (props.has('readonly') || props.has('disabled')) {
      this.updateButtonAttributes();
    }
  }

  private setupAnchorFocus() {
    if (this.anchor) {
      this.anchor.addEventListener('focus', () => this.setAttribute('focused', ''));
      this.anchor.addEventListener('blur', () => this.removeAttribute('focused'));
    }
  }

  /**
   * We have to append a hidden button outside the web component in the light DOM
   * This allows us to trigger native submit events within a form element.
   */
  private setupNativeButtonBehavior() {
    this.appendHiddenButton();
    this.addEventListener('click', this.triggerNativeButtonBehavior);
    this.addEventListener('keydown', this.emulateKeyBoardEventBehavior);
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
    }

    if (this.readonly) {
      removeAttributes(this, 'role', 'tabIndex');
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
