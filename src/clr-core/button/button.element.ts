/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { registerElementSafely } from '@clr/core/common';
import {
  CwcBaseButton,
  getElementWidthUnless,
  getTranslateForChromeRenderingBugUnless,
  toggleDisabledAttribute,
} from '@clr/core/common';
import { html, property } from 'lit-element';
import { styles } from './button.element.css';

export enum ClrLoadingState {
  DEFAULT,
  LOADING,
  SUCCESS,
  ERROR,
}

/**
 * Web component buttons.
 *
 * @noInheritDoc
 * @element cwc-button
 * @slot default - Content slot for inside the button
 * @attr {String} action - Define the type of action the button triggers <br/> (`default`, `outline`, `link`)
 * @attr {String} status - Sets the color of the button to match the status <br/> (`default`, `primary`, `inverse`, `success`, `warning`, `danger`)
 * @attr {String} size - Sets the overall height and width of the button based on value <br/> (`default`, `sm`)
 * @cssprop --clr-btn-vertical-margin
 * @cssprop --clr-btn-horizontal-margin
 * @cssprop --clr-btn-horizontal-padding
 * @cssprop --clr-btn-vertical-padding
 * @cssprop --clr-btn-padding
 * @cssprop --clr-btn-height
 * @cssprop --clr-btn-height-sm
 * @cssprop --clr-btn-font-weight
 * @cssprop --clr-btn-border-radius
 * @cssprop --clr-btn-border-width
 * @cssprop --clr-btn-outline-bg-color
 * @cssprop --clr-btn-default-color
 * @cssprop --clr-btn-default-border-color
 * @cssprop --clr-btn-default-bg-color
 * @cssprop --clr-btn-default-hover-bg-color
 * @cssprop --clr-btn-default-hover-color
 * @cssprop --clr-btn-default-box-shadow-color
 * @cssprop --clr-btn-default-disabled-color
 * @cssprop --clr-btn-default-disabled-bg-color
 * @cssprop --clr-btn-default-disabled-border-color
 * @cssprop --clr-btn-default-checked-bg-color
 * @cssprop --clr-btn-default-checked-color
 * @cssprop --clr-btn-default-outline-color
 * @cssprop --clr-btn-default-outline-border-color
 * @cssprop --clr-btn-default-outline-bg-color
 * @cssprop --clr-btn-default-outline-hover-bg-color
 * @cssprop --clr-btn-default-outline-hover-color
 * @cssprop --clr-btn-default-outline-box-shadow-color
 * @cssprop --clr-btn-default-outline-disabled-color
 * @cssprop --clr-btn-default-outline-disabled-bg-color
 * @cssprop --clr-btn-default-outline-disabled-border-color
 * @cssprop --clr-btn-default-outline-checked-color
 * @cssprop --clr-btn-default-outline-checked-bg-color
 * @cssprop --clr-btn-primary-color
 * @cssprop --clr-btn-primary-bg-color
 * @cssprop --clr-btn-primary-border-color
 * @cssprop --clr-btn-primary-hover-bg-color
 * @cssprop --clr-btn-primary-hover-color
 * @cssprop --clr-btn-primary-box-shadow-color
 * @cssprop --clr-btn-primary-disabled-color
 * @cssprop --clr-btn-primary-disabled-bg-color
 * @cssprop --clr-btn-primary-disabled-border-color
 * @cssprop --clr-btn-primary-checked-bg-color
 * @cssprop --clr-btn-primary-checked-color
 * @cssprop --clr-btn-success-color
 * @cssprop --clr-btn-success-bg-color
 * @cssprop --clr-btn-success-border-color
 * @cssprop --clr-btn-success-hover-bg-color
 * @cssprop --clr-btn-success-hover-color
 * @cssprop --clr-btn-success-box-shadow-color
 * @cssprop --clr-btn-success-disabled-color
 * @cssprop --clr-btn-success-disabled-bg-color
 * @cssprop --clr-btn-success-disabled-border-color
 * @cssprop --clr-btn-success-checked-bg-color
 * @cssprop --clr-btn-success-checked-color
 * @cssprop --clr-btn-success-outline-color
 * @cssprop --clr-btn-success-outline-bg-color
 * @cssprop --clr-btn-success-outline-border-color
 * @cssprop --clr-btn-success-outline-hover-bg-color
 * @cssprop --clr-btn-success-outline-hover-color
 * @cssprop --clr-btn-success-outline-box-shadow-color
 * @cssprop --clr-btn-success-outline-disabled-color
 * @cssprop --clr-btn-success-outline-disabled-bg-color
 * @cssprop --clr-btn-success-outline-disabled-border-color
 * @cssprop --clr-btn-success-outline-checked-bg-color
 * @cssprop --clr-btn-success-outline-checked-color
 * @cssprop --clr-btn-danger-color
 * @cssprop --clr-btn-danger-bg-color
 * @cssprop --clr-btn-danger-border-color
 * @cssprop --clr-btn-danger-hover-bg-color
 * @cssprop --clr-btn-danger-hover-color
 * @cssprop --clr-btn-danger-box-shadow-color
 * @cssprop --clr-btn-danger-disabled-color
 * @cssprop --clr-btn-danger-disabled-bg-color
 * @cssprop --clr-btn-danger-disabled-border-color
 * @cssprop --clr-btn-danger-checked-bg-color
 * @cssprop --clr-btn-danger-checked-color
 * @cssprop --clr-btn-danger-outline-color
 * @cssprop --clr-btn-danger-outline-bg-color
 * @cssprop --clr-btn-danger-outline-border-color
 * @cssprop --clr-btn-danger-outline-hover-bg-color
 * @cssprop --clr-btn-danger-outline-hover-color
 * @cssprop --clr-btn-danger-outline-box-shadow-color
 * @cssprop --clr-btn-danger-outline-disabled-color
 * @cssprop --clr-btn-danger-outline-disabled-bg-color
 * @cssprop --clr-btn-danger-outline-disabled-border-color
 * @cssprop --clr-btn-danger-outline-checked-bg-color
 * @cssprop --clr-btn-danger-outline-checked-color
 * @cssprop --clr-btn-link-color
 * @cssprop --clr-btn-link-bg-color
 * @cssprop --clr-btn-link-border-color
 * @cssprop --clr-btn-link-hover-bg-color
 * @cssprop --clr-btn-link-hover-color
 * @cssprop --clr-btn-link-disabled-color
 * @cssprop --clr-btn-link-disabled-bg-color
 * @cssprop --clr-btn-link-disabled-border-color
 * @cssprop --clr-btn-link-checked-bg-color
 * @cssprop --clr-btn-link-checked-color
 * @cssprop --clr-btn-inverse-color
 * @cssprop --clr-btn-inverse-border-color
 * @cssprop --clr-btn-inverse-bg-color
 * @cssprop --clr-btn-inverse-hover-bg-color
 * @cssprop --clr-btn-inverse-hover-color
 * @cssprop --clr-btn-inverse-box-shadow-color
 * @cssprop --clr-btn-inverse-disabled-color
 * @cssprop --clr-btn-inverse-disabled-bg-color
 * @cssprop --clr-btn-inverse-disabled-border-color
 * @cssprop --clr-btn-inverse-checked-bg-color
 * @cssprop --clr-btn-inverse-checked-color
 * @cssprop --clr-btn-icon-disabled-color
 * @cssprop --clr-btn-group-focus-outline
 */
// @dynamic
export class CwcButton extends CwcBaseButton {
  private _loadingState: ClrLoadingState = ClrLoadingState.DEFAULT;

  /**
   * Changes the button content based on the value passed. The value must be of type `ClrLoadingState` and here are possible states:
   *
   * - `ClrLoadingState.DEFAULT` : shows the content of the button
   *
   * - `ClrLoadingState.LOADING` : disables the button and shows a spinner inside the button
   *
   * - `ClrLoadingState.SUCCESS` : disables the button and shows a check mark inside the button; auto-triggers to change back to DEFAULT state after 1000 ms
   *
   * - `ClrLoadingState.ERROR` : shows the content of the button (in the context of application, this state is usually entered from a LOADING state. the application should show appropriate error message)
   *
   * Defaults to `ClrLoadingState.DEFAULT`.
   */
  @property({ type: Number, reflect: true, attribute: 'loading-state' })
  set loadingState(state: ClrLoadingState) {
    const oldState = this._loadingState;
    this.updateButtonState(state);
    this.requestUpdate('loadingState', oldState);
  }

  connectedCallback() {
    super.connectedCallback();
    this.tabIndex = 0;
  }

  get loadingState() {
    return this._loadingState;
  }

  render() {
    switch (this.loadingState) {
      case ClrLoadingState.LOADING:
        return html`
            <span class="spinner spinner-inline"></span>
            ${this.hiddenButtonTemplate}
        `;
      case ClrLoadingState.SUCCESS:
        return html`
            <span class="spinner spinner-inline spinner-check"></span>
            ${this.hiddenButtonTemplate}
          `;
      default:
        return html`
            <slot></slot>
            ${this.hiddenButtonTemplate}
          `;
    }
  }

  static get styles() {
    return styles;
  }

  private updateButtonState(state: ClrLoadingState) {
    if (state === this.loadingState) {
      return;
    }

    this._loadingState = state;

    if (state === ClrLoadingState.ERROR) {
      // in case of error, go back to default case; app should display relevant error message
      this.loadingState = ClrLoadingState.DEFAULT;
    } else {
      // this is when button state is one of: DEFAULT | LOADING | SUCCESS
      const stateIsDefault = state === ClrLoadingState.DEFAULT;

      // if state is DEFAULT, remove any width or transform attributes that may have been added.
      // else (state is LOADING | SUCCESS), set explicit width and transform attribute before entering this state
      this.style.width = getElementWidthUnless(this, stateIsDefault);
      this.style.transform = getTranslateForChromeRenderingBugUnless(stateIsDefault);

      // the button is disabled during LOADING | SUCCESS state
      // it is NOT disabled if state is DEFAULT and it was not previously disabled
      toggleDisabledAttribute(this, stateIsDefault && !this._previouslyDisabled);

      if (state === ClrLoadingState.SUCCESS) {
        // after displaying success state for a second, go back to default case
        setTimeout(() => {
          this.loadingState = ClrLoadingState.DEFAULT;
        }, 1000);
      }
    }
  }
}

registerElementSafely('cwc-button', CwcButton);

declare global {
  interface HTMLElementTagNameMap {
    'cwc-button': CwcButton;
  }
}
