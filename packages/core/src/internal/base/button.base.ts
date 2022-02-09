/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement, render, PropertyValues } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import { property, state } from '../decorators/property.js';
import { querySlot } from '../decorators/query-slot.js';
import { onAnyKey } from '../utils/keycodes.js';
import { stopEvent } from './../utils/events.js';

// @dynamic
export class CdsBaseButton extends LitElement {
  @property({ type: Boolean }) readonly = false;

  @property({ type: String }) type: 'button' | 'submit';

  @property({ type: String }) name: string;

  @property({ type: String }) value: string;

  @property({ type: Boolean }) disabled = false;

  @state({ type: Number, attribute: 'tabindex', reflect: true }) protected tabIndexAttr: number | null; // don't override native prop as it stops native focus behavior

  @state({ type: Boolean, reflect: true }) protected focused = false;

  @state({ type: Boolean, reflect: true }) protected active = false;

  @state({ type: Boolean, reflect: true }) protected isAnchor = false;

  @querySlot('cds-icon') protected icon: HTMLElement;

  @querySlot('cds-badge') protected badge: HTMLElement;

  private marker: HTMLElement;

  // When submitting forms with Enter key, the default submit button receives a click event from the form.
  // We need to be able to differentiate between the real/explicit clicks and those form produced clicks.
  // Otherwise we will submit the form twice.
  private explicitClick = false;

  private markerSignificantProperties = ['type', 'name', 'value', 'disabled'];

  protected render() {
    return html` <slot></slot> `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.tabIndex = 0; // initialize immediately so button can be focused synchronously
    this.role = 'button';
  }

  protected updated(props: PropertyValues<this>) {
    if (this.hasMarkerSignificantProperty(props)) {
      if (this.markerAttached) {
        this.marker.remove();
      }
      this.createMarker();
    }

    super.updated(props);
    this.updateButtonAttributes();
    this.addDefaultSubmitBehavior();

    if (props.has('readonly')) {
      this.setupNativeButtonBehavior();
    }
  }

  /** This mimics the mouse-click visual behavior for keyboard only users and screen readers.
   * Browsers do not apply the CSS psuedo-selector :active in those instances. So we need this
   * for our :active styles to show.
   *
   * Make sure to update a component's CSS to account for the presence of the [_active] attribute
   * in all instance where :active is defined.
   *
   * @private
   */
  private emulateActiveMouseDown() {
    if (!this.disabled && !this.readonly) {
      this.active = true;
    }
  }

  private emulateActiveMouseUp() {
    this.active = false;
    this.explicitClick = true; // mouse down/up are only associated with real clicks
  }

  private setupNativeButtonBehavior() {
    if (this.readonly) {
      this.removeEventListener('keyup', this.emulateActiveMouseUp);
      this.removeEventListener('keydown', this.emulateActiveMouseDown);
      this.removeEventListener('mouseup', this.emulateActiveMouseUp);
      this.removeEventListener('mousedown', this.emulateActiveMouseDown);
      this.removeEventListener('click', this.triggerNativeButtonBehavior);
      this.removeEventListener('keyup', this.emulateKeyBoardEventBehavior);
    } else {
      this.addEventListener('keyup', this.emulateActiveMouseUp);
      this.addEventListener('keydown', this.emulateActiveMouseDown);
      this.addEventListener('mouseup', this.emulateActiveMouseUp);
      this.addEventListener('mousedown', this.emulateActiveMouseDown);
      this.addEventListener('click', this.triggerNativeButtonBehavior);
      this.addEventListener('keyup', this.emulateKeyBoardEventBehavior);
    }
  }

  /**
   * We have to append a hidden button outside the web component in the light DOM
   * This allows us to trigger native submit events within a form element.
   */
  private triggerNativeButtonBehavior(event: Event) {
    if (!this.readonly) {
      if (this.disabled) {
        stopEvent(event);
      } else if (!event.defaultPrevented && this.marker && this.explicitClick) {
        if (!this.markerAttached) {
          this.appendChild(this.marker);
        }
        this.querySelector('button[aria-hidden]')?.dispatchEvent(
          new MouseEvent('click', { relatedTarget: this, composed: true })
        );
        if (this.type !== 'submit') {
          this.marker.remove();
        }
      }
    }
    // get ready for the next real click check
    this.explicitClick = false;
  }

  private createMarker() {
    const buttonTemplate = html`<button
      aria-hidden="true"
      role="presentation"
      ?disabled="${this.disabled}"
      tabindex="-1"
      style="display: none !important"
      value="${ifDefined(this.value)}"
      name="${ifDefined(this.name)}"
      type="${ifDefined(this.type)}"
    ></button>`;

    const marker = document.createElement('div');
    // avoid an empty space inside button
    marker.style.display = 'none';
    render(buttonTemplate, marker);
    this.marker = marker;
  }

  private get markerAttached(): boolean {
    return !!(this.marker && this.marker.parentElement);
  }

  // A marker significant property is one that should be dynamically bound to a property of the native button
  private hasMarkerSignificantProperty(props: PropertyValues<any>): boolean {
    for (const prop of this.markerSignificantProperties) {
      if (props.has(prop)) {
        return true;
      }
    }
    return false;
  }

  private emulateKeyBoardEventBehavior(evt: KeyboardEvent) {
    onAnyKey(['enter', 'space'], evt, () => {
      if (!this.readonly) {
        this.click();
        stopEvent(evt);
      }
    });
  }

  private updateButtonAttributes() {
    this.isAnchor = this.parentElement?.tagName === 'A';

    if (this.isAnchor && this.parentElement) {
      this.parentElement.style.lineHeight = '0';
      this.parentElement.style.textDecoration = 'none'; // fixes issue when style is applied to text node
    }

    this.readonly = this.readonly || this.isAnchor;

    if (this.readonly) {
      this.role = null;
      this.tabIndexAttr = null;
      this.ariaDisabled = null;
    } else {
      this.role = 'button';
      this.tabIndexAttr = this.disabled ? -1 : 0;
      this.ariaDisabled = this.disabled ? 'true' : 'false';
    }
  }

  // Forms handle default submit buttons without type="submit" automatically.
  // Because of the dynamic createion of the native element, we prefer to set the attribute explicitly.
  private addDefaultSubmitBehavior() {
    if (!this.type && this.closest('form')) {
      this.type = 'submit';
    }
    if (this.type === 'submit' && !this.markerAttached) {
      this.appendChild(this.marker);
    }
  }
}
