/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement } from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined';

import { property, internalProperty } from '../decorators/property.js';
import { querySlot } from '../decorators/query-slot.js';
import { onAnyKey } from '../utils/keycodes.js';
import { stopEvent } from './../utils/events.js';
import { supportsFlexGap } from '@cds/core/internal';

// @dynamic
export class CdsBaseButton extends LitElement {
  @property({ type: Boolean }) readonly = false;

  @property({ type: String }) type: 'button' | 'submit';

  @property({ type: String }) name: string;

  @property({ type: String }) value: string;

  @property({ type: Boolean }) disabled = false;

  @internalProperty({ type: String, attribute: 'aria-disabled', reflect: true }) protected ariaDisabled:
    | 'true'
    | 'false'
    | null = 'false';

  @internalProperty({ type: Number, attribute: 'tabindex', reflect: true }) protected tabIndexAttr: number | null; // don't override native prop as it stops native focus behavior

  @internalProperty({ type: Boolean, reflect: true }) protected focused = false;

  @internalProperty({ type: Boolean, reflect: true }) protected active = false;

  @internalProperty({ type: String, reflect: true }) protected role: string | null = 'button';

  @internalProperty({ type: Boolean, reflect: true }) protected hasFlexGapSupport: boolean = supportsFlexGap();

  @internalProperty({ type: Boolean, reflect: true }) protected isAnchor = false;

  @querySlot('cds-icon') protected icon: HTMLElement;

  @querySlot('cds-badge') protected badge: HTMLElement;

  protected render() {
    return html` <slot></slot> `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.tabIndex = 0; // initialize immediately so button can be focused synchronously
  }

  protected firstUpdated(props: Map<string, any>) {
    super.firstUpdated(props);
    this.setupNativeButtonBehavior();
  }

  protected updated(props: Map<string, any>) {
    super.updated(props);
    this.updateButtonAttributes();
  }

  /** This mimics the mouse-click visual behavior for keyboard only users and screen readers.
   * Browsers do not apply the CSS psuedo-selector :active in those instances. So we need this
   * for our :active styles to show.
   *
   * Make sure to update a component's CSS to account for the presence of the [active] attribute
   * in all instance where :active is defined.
   *
   * @private
   */
  private showClick() {
    this.active = true;
    const clickTimer = setTimeout(() => {
      this.active = false;
      clearTimeout(clickTimer);
    }, 300);
  }

  /**
   * We have to append a hidden button outside the web component in the light DOM
   * This allows us to trigger native submit events within a form element.
   */
  private setupNativeButtonBehavior() {
    this.addEventListener('click', this.triggerNativeButtonBehavior);
    this.addEventListener('keydown', this.emulateKeyBoardEventBehavior);
  }

  private triggerNativeButtonBehavior(event: Event) {
    if (!this.readonly) {
      if (this.disabled) {
        stopEvent(event);
      } else if (!event.defaultPrevented) {
        const buttonTemplate = html`<button
          class="cds-hidden-button"
          aria-hidden="true"
          ?disabled="${this.disabled}"
          tabindex="-1"
          style="display: none !important"
          value="${ifDefined(this.value)}"
          name="${ifDefined(this.name)}"
          type="${ifDefined(this.type)}"
        ></button>`;

        this.showClick();
        this.appendChild(buttonTemplate.getTemplateElement().content.cloneNode(true) as HTMLElement);
        const button = this.querySelector('.cds-hidden-button') as HTMLButtonElement;
        button.dispatchEvent(new MouseEvent('click', { relatedTarget: this, composed: true }));
        button.remove();
      }
    }
  }

  private emulateKeyBoardEventBehavior(evt: KeyboardEvent) {
    onAnyKey(['enter', 'space'], evt, () => {
      this.click();
      stopEvent(evt);
    });
  }

  private updateButtonAttributes() {
    this.isAnchor = this.parentElement?.tagName === 'A';

    if (this.isAnchor && this.parentElement) {
      this.parentElement.style.lineHeight = '0';
      this.parentElement.style.textDecoration = 'none'; // fixes issue when style is applied to text node
    }

    this.readonly = this.readonly || this.isAnchor;
    this.role = this.readonly ? null : 'button';

    if (this.readonly) {
      this.tabIndexAttr = null;
      this.ariaDisabled = null;
    } else {
      this.tabIndexAttr = this.disabled ? -1 : 0;
      this.ariaDisabled = this.disabled ? 'true' : 'false';
    }
  }
}
