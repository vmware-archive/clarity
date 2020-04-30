/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  badgeSlot,
  baseStyles,
  CdsBaseButton,
  getElementWidth,
  iconSpinner,
  iconSpinnerCheck,
  iconSlot,
  property,
  querySlot,
  registerElementSafely,
  setAttributes,
} from '@clr/core/internal';
import '@clr/core/icon';
import { ClarityIcons, errorStandardIcon } from '@clr/core/icon-shapes';
import { html, query } from 'lit-element';
import { styles as baseButtonStyles } from './base-button.element.css.js';
import { styles } from './button.element.css.js';

ClarityIcons.addIcons(errorStandardIcon);

// TODO: when we migrate away from the base64 icons in other states, we will need to either move the consts
// into this file or move the base button here. pulling cds-icons into core/internal creates a circular dependency
const iconSpinnerError = html`<span class="button-status-icon"><cds-icon shape="error-standard"></cds-icon></span>`;

export enum ClrLoadingState {
  DEFAULT = 'default',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

function buttonSlots(icon: boolean, badge: boolean) {
  // nested span tags allow for line-height erasers on the innermost span and flex-based centering on the outermost span
  const textSlot = html`<span class="button-content"
    ><span><slot></slot></span
  ></span>`;
  const slotWithIcon = html`${iconSlot}${textSlot}`;
  const slotWithBadge = html`${textSlot}${badgeSlot}`;
  const slotWithContentAndBadge = html`${iconSlot}${textSlot}${badgeSlot}`;

  switch (true) {
    case icon === true && badge === true:
      return html`${slotWithContentAndBadge}`;
    case icon === true:
      return html`${slotWithIcon}`;
    case badge === true:
      return html`${slotWithBadge}`;
    default:
      return html`${textSlot}`;
  }
}

/**
 * Buttons allow an application to communicate action and direct user intent.
 *
 * ```typescript
 * import '@clr/core/button';
 * ```
 *
 * ```html
 * <cds-button>submit</cds-button>
 * ```
 *
 * @beta
 * @element cds-button
 * @slot default - Content slot for inside the button
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
 * @cssprop --padding
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
  size: 'sm' | 'md';

  /** Sets if the button should be full width with display block */
  @property({ type: Boolean })
  block: boolean;

  @query('.private-host') privateHost: HTMLElement;

  @querySlot('cds-icon') private icon: HTMLElement;

  @querySlot('cds-badge') private badge: HTMLElement;

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

  connectedCallback() {
    super.connectedCallback();
    setAttributes(this.icon, ['slot', 'button-icon']);
    setAttributes(this.badge, ['slot', 'button-badge']);
  }

  update(props: Map<string, any>) {
    if (this.privateHost && props.has('loadingState')) {
      this.updateLoadingState();
    }
    super.update(props);
  }

  render() {
    const loadingState = this.loadingState;
    const hasIcon = !!this.icon;
    const hasBadge = !!this.badge;

    return html`<div class="private-host" cds-layout="horizontal">
      ${loadingState === ClrLoadingState.SUCCESS ? html`${iconSpinnerCheck}` : ''}${loadingState ===
      ClrLoadingState.ERROR
        ? html`${iconSpinnerError}`
        : ''}${loadingState === ClrLoadingState.LOADING ? html`${iconSpinner}` : ''}${loadingState ===
      ClrLoadingState.DEFAULT
        ? html`${buttonSlots(hasIcon, hasBadge)}`
        : ''}${this.hiddenButtonTemplate}
    </div>`;
  }

  static get styles() {
    return [baseStyles, baseButtonStyles, styles];
  }

  private updateLoadingState() {
    switch (this.loadingState) {
      case ClrLoadingState.LOADING:
        this.disableButton();
        return;
      case ClrLoadingState.SUCCESS:
        this.disableButton();
        return;
      case ClrLoadingState.ERROR:
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
    this.loadingState = ClrLoadingState.DEFAULT;
    this.style.removeProperty('width');
    this.disabled = false;
  }
}

registerElementSafely('cds-button', CdsButton);

declare global {
  interface HTMLElementTagNameMap {
    'cds-button': CdsButton;
  }
}
