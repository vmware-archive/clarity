/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { baseStyles, property, registerElementSafely } from '@clr/core/common';
import { CwcBaseButton, getElementWidth } from '@clr/core/common';
import { html, query } from 'lit-element';
import { styles } from './button.element.css';

export enum ClrLoadingState {
  DEFAULT = 'default',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

// TODO: replace with circular progress bar when complete
const iconSpinnerCheck = html`<span class="spinner spinner-inline spinner-check"></span>`;
const iconSpinner = html`<span class="spinner spinner-inline"></span>`;

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
 * @cssprop --border-color
 * @cssprop --color
 * @cssprop --background
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

  @query('.private-host') privateHost: HTMLElement;

  /**
   * Changes the button content based on the value passed.
   *
   * - `default`: shows the content of the button
   * - `loading`: disables the button and shows a spinner inside the button
   * - `success`: disables the button and shows a check mark inside the button; auto-triggers to change back to DEFAULT state after 1000 ms
   * - `error`: shows the content of the button (in the context of application, this state is usually entered from a LOADING state. the application should show appropriate error message)
   */
  @property({ type: String })
  loadingState = ClrLoadingState.DEFAULT;

  firstUpdated(props: Map<string, any>) {
    super.firstUpdated(props);

    if (this.loadingState !== ClrLoadingState.DEFAULT) {
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
    return html`
    <div class="private-host">
      ${this.loadingState === ClrLoadingState.LOADING ? iconSpinner : ''}
      ${this.loadingState === ClrLoadingState.SUCCESS ? iconSpinnerCheck : ''}
      ${this.loadingState === ClrLoadingState.DEFAULT ? html`<slot></slot>` : ''}
      ${this.hiddenButtonTemplate}
    </div>
    `;
  }

  static get styles() {
    return [baseStyles, styles];
  }

  private updateLoadingState() {
    if (this.loadingState === ClrLoadingState.LOADING) {
      this.disableButton();
    } else if (this.loadingState === ClrLoadingState.SUCCESS) {
      this.disableButton();
      setTimeout(() => this.enableButton(), 1000);
    } else {
      this.enableButton();
    }
  }

  private disableButton() {
    this.privateHost.style.width = getElementWidth(this.privateHost);
    this.disabled = true;
  }

  private enableButton() {
    this.loadingState = ClrLoadingState.DEFAULT;
    this.privateHost.style.removeProperty('width');
    this.disabled = false;
  }
}

registerElementSafely('cwc-button', CwcButton);

declare global {
  interface HTMLElementTagNameMap {
    'cwc-button': CwcButton;
  }
}
