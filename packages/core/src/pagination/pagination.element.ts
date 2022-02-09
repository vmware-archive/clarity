/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { baseStyles, globalStyle, LogService, notProductionEnvironment, querySlot } from '@cds/core/internal';
import { css, html, LitElement, PropertyValues } from 'lit';
import { cache } from 'lit/directives/cache.js';
import { CdsInput } from '@cds/core/input';
import styles from './pagination.element.scss';

/**
 * Web component pagination.
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
 * @element cds-pagination
 * @slot
 * @slot cds-pagination-button
 * @cssprop --color
 * @cssprop --font-size
 */

export class CdsPagination extends LitElement {
  @globalStyle() protected globalStyles = css`
    [cds-pagination-number] > cds-control-message {
      --min-width: initial;
    }
  `;

  @querySlot('cds-input[cds-pagination-number]') private numberInput: CdsInput;

  render() {
    const userLayout = html`<slot></slot>`;
    const defaultLayout = html`<div cds-layout="horizontal gap:md align:center"><slot></slot></div>`;

    return html`${cache(this.hasAttribute('cds-layout') ? userLayout : defaultLayout)}`;
  }

  static get styles() {
    return [baseStyles, styles];
  }

  firstUpdated(props: PropertyValues<this>) {
    super.firstUpdated(props);
    this.setupNumberInput();
    this.validateAriaLabel();
  }

  private setupNumberInput() {
    if (this.numberInput) {
      this.numberInput.controlWidth = 'shrink';
      this.numberInput.layout = 'compact';
    }
  }

  private validateAriaLabel() {
    if (notProductionEnvironment() && !this.getAttribute('aria-label')?.length) {
      LogService.warn('An aria-label is missing', this);
    }
  }
}
