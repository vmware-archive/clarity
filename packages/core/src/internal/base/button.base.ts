/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement, query } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';

import { property, internalProperty } from '../decorators/property.js';
import { querySlot } from '../decorators/query-slot.js';
import { onAnyKey } from '../utils/keycodes.js';
import { stopEvent } from './../utils/events.js';

// TODO: replace with circular progress bar when complete
export const iconSpinnerCheck = html`<span class="button-status-icon" cds-layout="horizontal align:center"
  ><span class="spinner spinner-inline spinner-check" cds-layout="align:center"></span
></span>`;

export const iconSpinner = html`<span class="button-status-icon" cds-layout="horizontal align:center"
  ><span class="spinner spinner-inline" cds-layout="align:center"></span
></span>`;

export const iconSlot = html`<span class="button-icon"><slot name="button-icon"></slot></span>`;

export const badgeSlot = html`<span class="button-badge"><slot name="button-badge"></slot></span>`;

// @dynamic
export class CdsBaseButton extends LitElement {
  @property({ type: Boolean }) readonly = false;

  @property({ type: String }) type: 'button' | 'submit';

  @property({ type: String }) name: string;

  @property({ type: String }) value: string;

  @property({ type: Boolean }) disabled = false;

  @internalProperty({ type: Number, attribute: 'tabindex', reflect: true }) protected tabIndexAttr: number | null; // don't override native prop as it stops native focus behavior

  @internalProperty({ type: Boolean, reflect: true }) protected focused = false;

  @internalProperty({ type: Boolean, reflect: true }) protected isAnchor = false;

  @internalProperty({ type: String, reflect: true }) protected role: string | null = 'button';

  @querySlot('cds-icon') protected icon: HTMLElement;

  @querySlot('a') protected anchor: HTMLAnchorElement;

  @querySlot('cds-badge') protected badge: HTMLElement;

  protected get hiddenButtonTemplate() {
    return this.readonly
      ? html``
      : html`<button
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

  connectedCallback() {
    super.connectedCallback();
    this.tabIndex = 0; // initialize immediately so button can be focused synchronously
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
      this.anchor.addEventListener('focusin', () => (this.focused = true));
      this.anchor.addEventListener('focusout', () => (this.focused = false));
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

  private emulateKeyBoardEventBehavior(evt: KeyboardEvent) {
    if (this.anchor) {
      return;
    }

    onAnyKey(['enter', 'space'], evt, () => {
      this.click();
      stopEvent(evt);
    });
  }

  private updateButtonAttributes() {
    this.isAnchor = !!this.anchor;
    this.readonly = this.readonly || this.isAnchor;
    this.role = this.readonly ? null : 'button';

    if (this.readonly) {
      this.tabIndexAttr = null;
    } else {
      this.tabIndexAttr = this.disabled ? -1 : 0;
    }
  }
}
