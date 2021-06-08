/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { baseStyles, CdsBaseButton, getElementWidth, property, spanWrapper } from '@cds/core/internal';
import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { errorStandardIcon } from '@cds/core/icon/shapes/error-standard.js';
import { checkIcon } from '@cds/core/icon/shapes/check.js';
import { html } from 'lit';
import { query } from 'lit/decorators/query.js';
import baseButtonStyles from './base-button.element.scss';
import styles from './button.element.scss';

export const iconSpinner = (size: string) => {
  const spinnerSize = size === 'sm' ? '12' : '18';
  return html`<span class="button-status-icon" cds-layout="horizontal align:center"><cds-progress-circle class="button-spinner" size="${spinnerSize}" status="info"></cds-progress-circle></span></span>`;
};

export const iconCheck = html`<span class="button-status-icon" cds-layout="horizontal align:center"
  ><cds-icon shape="check" status="success" cds-layout="align:center"></cds-icon
></span>`;

export const iconError = html`<span class="button-status-icon" cds-layout="horizontal align:center"
  ><cds-icon shape="error-standard" cds-layout="align:center"></cds-icon
></span>`;

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

  @query('.private-host') privateHost: HTMLElement;

  /**
   * @type {default | loading | success | error}
   * Changes the button content based on the value passed.
   *
   * - `default`: shows the content of the button
   * - `loading`: disables the button and shows a spinner inside the button
   * - `success`: disables the button and shows a check mark inside the button; auto-triggers to change back to DEFAULT state after 1000 ms
   * - `error`: shows the content of the button (in the context of application, this state is usually entered from a LOADING state. the application should show appropriate error message)
   */
  @property({ type: String })
  loadingState: keyof typeof ClrLoadingState = ClrLoadingState.default;

  constructor() {
    super();
    ClarityIcons.addIcons(errorStandardIcon, checkIcon);
  }

  firstUpdated(props: Map<string, any>) {
    super.firstUpdated(props);

    // Find and wrap any text nodes into span elements
    spanWrapper(this.childNodes);

    if (this.loadingState !== ClrLoadingState.default) {
      this.updateLoadingState();
    }
  }

  update(props: Map<string, any>) {
    if (this.privateHost && props.has('loadingState')) {
      this.updateLoadingState();
    }
    super.update(props);
  }

  render() {
    const loadingState = this.loadingState;
    return html`<div class="private-host">
      <div cds-layout="horizontal gap:sm wrap:none align:center">
        ${loadingState === ClrLoadingState.success ? iconCheck : ''}
        ${loadingState === ClrLoadingState.error ? iconError : ''}
        ${loadingState === ClrLoadingState.loading ? iconSpinner(this.size) : ''}
        ${loadingState === ClrLoadingState.default
          ? html`<slot @slotchange=${() => spanWrapper(this.childNodes)}></slot>`
          : ''}
      </div>
    </div>`;
  }

  static styles = [baseStyles, baseButtonStyles, styles];

  private updateLoadingState() {
    switch (this.loadingState) {
      case ClrLoadingState.loading:
        this.disableButton();
        return;
      case ClrLoadingState.success:
        this.disableButton();
        return;
      case ClrLoadingState.error:
        this.disableButton();
        return;
      default:
        this.enableButton();
    }
  }

  private disableButton() {
    this.style.width = getElementWidth(this);
    this.disabled = true;
  }

  private enableButton() {
    this.loadingState = ClrLoadingState.default;
    this.style.removeProperty('width');
    this.disabled = false;
  }
}
