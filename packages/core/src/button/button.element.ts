/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { baseStyles, CdsBaseButton, getElementWidth, property } from '@cds/core/internal';
import { html } from 'lit';
import baseButtonStyles from './base-button.element.scss';
import styles from './button.element.scss';

export const enum ClrLoadingState {
  default = 'default',
  loading = 'loading',
  success = 'success',
  error = 'error',
}

/**
 * Buttons allow an application to communicate action and direct user intent.
 *
 * ```typescript
 * import '@cds/core/button/register.js';
 * ```
 *
 * ```html
 * <cds-button>submit</cds-button>
 * ```
 *
 * @element cds-button
 * @slot - Content slot for inside the button
 * @cssprop --background
 * @cssprop --border-color
 * @cssprop --border-radius
 * @cssprop --border-width
 * @cssprop --box-shadow-color
 * @cssprop --color
 * @cssprop --font-family
 * @cssprop --font-size
 * @cssprop --font-weight
 * @cssprop --height
 * @cssprop --letter-spacing
 * @cssprop --min-width
 * @cssprop --padding
 * @cssprop --text-decoration
 * @cssprop --text-transform
 */
export class CdsButton extends CdsBaseButton {
  /**
   * Define the type of action the button triggers
   *
   * - `solid`: buttons direct the user’s attention to the primary action the application is suggesting that the user take.
   * - `outline`: buttons indicate secondary actions that compliments a primary action or reduces visual noise when there are many actions on the page.
   * - `flat`: buttons are used as tertiary buttons. Can also be used inline because they are different from content in style and recognizable as buttons alongside content.
   */
  @property({ type: String })
  action: 'solid' | 'outline' | 'flat' | 'flat-inline' = 'solid';

  /**
   * Sets the color of the button to match the following string statuses
   */
  @property({ type: String })
  status: 'primary' | 'success' | 'warning' | 'danger' | 'neutral' | 'inverse' = 'primary';

  /**
   * Sets the overall height and width of the button based on the following string values:
   */
  @property({ type: String })
  size: 'sm' | 'md' = 'md';

  /** Sets if the button should be full width with display block */
  @property({ type: Boolean })
  block = false;

  /**
   * @type {default | loading | success | error}
   * Changes the button content based on the value passed.
   *
   * - `default`: shows the content of the button
   * - `loading`: disables the button and shows a spinner inside the button
   * - `success`: disables the button and shows a check mark inside the button; auto-triggers to change back to DEFAULT state after 1000 ms
   * - `error`: shows the content of the button (in the context of application, this state is usually entered from a LOADING state. the application should show appropriate error message)
   */
  @property({ type: String }) get loadingState() {
    return this._loadingState;
  }

  set loadingState(value: keyof typeof ClrLoadingState) {
    // track prior disabled state to set prior value after button is re-enabled from a loading state
    if (this._loadingState === ClrLoadingState.default) {
      this._disabled = this.disabled;
    }

    if (value === ClrLoadingState.default) {
      this.enableButton();
    } else {
      this.disableButton();
    }

    const oldValue = this._loadingState;
    this._loadingState = value;
    this.requestUpdate('loadingState', oldValue);
  }

  private _loadingState: keyof typeof ClrLoadingState = ClrLoadingState.default;
  private _disabled = false;

  render() {
    return html`<div class="private-host" cds-layout="horizontal gap:sm wrap:none align:center">
      ${this.loadingState === ClrLoadingState.success
        ? html`<cds-icon shape="check" status="success" size="18"></cds-icon>`
        : ''}
      ${this.loadingState === ClrLoadingState.error
        ? html`<cds-icon shape="error-standard" status="danger" size="18"></cds-icon>`
        : ''}
      ${this.loadingState === ClrLoadingState.loading
        ? html`<cds-progress-circle .size=${this.size === 'sm' ? '12' : '18'} status="info"></cds-progress-circle>`
        : ''}
      ${this.loadingState === ClrLoadingState.default ? html`<slot></slot>` : ''}
    </div>`;
  }

  static styles = [baseStyles, baseButtonStyles, styles];

  private async disableButton() {
    await this.updateComplete;
    this.style.width = getElementWidth(this);
    this.disabled = true;
  }

  private enableButton() {
    this.style.removeProperty('width');
    this.disabled = this._disabled;
  }
}
