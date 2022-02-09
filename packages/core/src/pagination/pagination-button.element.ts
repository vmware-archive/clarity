/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  baseStyles,
  CdsBaseButton,
  LogService,
  notProductionEnvironment,
  property,
  querySlot,
} from '@cds/core/internal';
import { html, PropertyValues } from 'lit';
import { query } from 'lit/decorators/query.js';
import styles from './pagination-button.element.scss';

/**
 * Web component pagination button to be used inside pagination.
 *
 * ```typescript
 * import '@cds/core/pagination/register.js';
 * ```
 *
 * ```html
 * <cds-pagination>
 *   <cds-pagination-button action="first" disabled></cds-pagination-button>
 *   <cds-pagination-button action="prev" disabled></cds-pagination-button>
 *   <span aria-label="current page">1 / 3</span>
 *   <cds-pagination-button action="next"></cds-pagination-button>
 *   <cds-pagination-button action="last"></cds-pagination-button>
 * </cds-pagination>
 * ```
 *
 * @beta
 * @element cds-pagination-button
 * @slot
 * @slot cds-icon
 * @cssprop --background
 * @cssprop --padding
 * @cssprop --border-color
 * @cssprop --border-width
 * @cssprop --border-radius
 * @cssprop --box-shadow
 * @cssprop --min-height
 * @cssprop --min-width
 */

export class CdsPaginationButton extends CdsBaseButton {
  /**
   * Sets the action from a predefined list of actions
   */
  @property({ type: String })
  action: 'first' | 'prev' | 'next' | 'last';

  connectedCallback() {
    super.connectedCallback();
    this.type = 'button';
  }

  @querySlot('cds-icon', { assign: 'cds-icon-slot' }) cdsIcon: HTMLElement;

  @query('cds-icon') private cdsIconDefault: HTMLElement;

  private get customContent() {
    return !this.action && !this.cdsIconDefault;
  }

  render() {
    return html`
      <div class="private-host" cds-layout="horizontal align:center ${this.customContent ? 'p-x:sm' : ''}">
        <slot name="cds-icon-slot">
          ${this.action === 'next' ? html`<cds-icon shape="angle" direction="right"></cds-icon>` : ''}
          ${this.action === 'last' ? html`<cds-icon shape="step-forward-2" direction="up"></cds-icon>` : ''}
          ${this.action === 'prev' ? html`<cds-icon shape="angle" direction="left"></cds-icon>` : ''}
          ${this.action === 'first' ? html`<cds-icon shape="step-forward-2" direction="down"></cds-icon>` : ''}
        </slot>
        <slot></slot>
      </div>
    `;
  }

  static get styles() {
    return [baseStyles, styles];
  }

  firstUpdated(props: PropertyValues<this>) {
    super.firstUpdated(props);
    this.validateAriaLabel();
  }

  private validateAriaLabel() {
    if (
      notProductionEnvironment() &&
      (this.cdsIcon || this.cdsIconDefault) &&
      !this.getAttribute('aria-label')?.length
    ) {
      LogService.warn('An aria-label is missing', this);
    }
  }
}
