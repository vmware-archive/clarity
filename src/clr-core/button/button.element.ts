/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { baseStyles, property, registerElementSafely } from '@clr/core/common';
import {
  CwcBaseButton,
  getElementWidthUnless,
  getTranslateForChromeRenderingBugUnless,
  toggleDisabledAttribute,
} from '@clr/core/common';
import { html } from 'lit-element';
import { styles } from './button.element.css';

export enum ClrLoadingState {
  DEFAULT = 'default',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

/**
 * Buttons allow an application to communicate action and direct user intent.
 *
 * ```typescript
 * import '@clr/core/button';
 * ```
 *
 * ```html
 * <cwc-button>submit</cwc-button>
 * ```
 *
 * @element cwc-button
 * @slot default - Content slot for inside the button
 * @cssprop --box-shadow-color
 * @cssprop --border-radius
 * @cssprop --border-width
 * @cssprop --font-size
 * @cssprop --font-weight
 * @cssprop --border-color
 * @cssprop --color
 * @cssprop --background
 * @cssprop --line-height
 * @cssprop --letter-spacing
 */
// @dynamic
export class CwcButton extends CwcBaseButton {
  /**
   * Define the type of action the button triggers
   *
   * - `solid`: buttons direct the user’s attention to the primary action the application is suggesting that the user take.
   * - `outline`: buttons indicate secondary actions that compliments a primary action or reduces visual noise when there are many actions on the page.
   * - `flat`: buttons are used as tertiary buttons. Can also be used inline because they are different from content in style and recognizable as buttons alongside content.
   */
  @property({ type: String })
  action: 'solid' | 'outline' | 'flat';

  /**
   * Sets the color of the button to match the following string statuses
   */
  @property({ type: String })
  status: 'primary' | 'success' | 'danger' | 'inverse';

  /**
   * Sets the overall height and width of the button based on the following string values:
   */
  @property({ type: String })
  size: 'sm' | 'md' | 'icon';

  /** Sets if the button should be full width with display block */
  @property({ type: Boolean })
  block: boolean;

  private _loadingState: ClrLoadingState = ClrLoadingState.DEFAULT;

  /**
   * Changes the button content based on the value passed.
   *
   * - `default`: shows the content of the button
   * - `loading`: disables the button and shows a spinner inside the button
   * - `success`: disables the button and shows a check mark inside the button; auto-triggers to change back to DEFAULT state after 1000 ms
   * - `error`: shows the content of the button (in the context of application, this state is usually entered from a LOADING state. the application should show appropriate error message)
   */
  @property({ type: String })
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
    return [baseStyles, styles];
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
