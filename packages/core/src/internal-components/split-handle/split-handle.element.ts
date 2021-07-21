/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement, PropertyValues } from 'lit';
import { i18n, I18nService, state, property, querySlot, touch } from '@cds/core/internal';
import styles from './split-handle.element.scss';

/**
 * Button Split
 *
 * ```typescript
 * import '@cds/core/internal-components/split-handle/register.js';
 * ```
 *
 * ```html
 * <cds-internal-split-handle>
 *  <input type="range" step="10" aria-label="resize" />
 * </cds-internal-split-handle>
 * ```
 * @beta
 * @element cds-internal-split-handle
 * @slot - For projecting range input
 */
@touch<CdsInternalSplitHandle>()
export class CdsInternalSplitHandle extends LitElement {
  @i18n() i18n = I18nService.keys.actions;

  @property({ type: String }) direction: 'vertical' | 'horizontal' = 'vertical';

  @state({ type: Boolean, reflect: true }) protected readonly = false;

  @state({ type: Boolean, reflect: true }) protected focused = false;

  @state() private step = '1';

  @querySlot('input') private range: HTMLInputElement;

  static styles = [styles];

  render() {
    return html`
      <div class="private-host">
        <slot></slot>
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.readonly = !this.range;
  }

  firstUpdated(props: PropertyValues) {
    super.firstUpdated(props);

    if (this.range) {
      this.range.ariaLabel = this.range.ariaLabel ? this.range.ariaLabel : this.i18n.resize;
      this.range.addEventListener('focus', () => (this.focused = true));
      this.range.addEventListener('blur', () => (this.focused = false));
      this.addEventListener('cdsTouchStart', () => this.toughStart());
      this.addEventListener('cdsTouchEnd', () => this.touchEnd());
      this.addEventListener('cdsTouchMove', (e: any) => this.touchMove(e));
    }
  }

  private toughStart() {
    this.focused = true;
    this.step = this.range.step;
    this.range.step = '1';
  }

  private touchEnd() {
    this.focused = false;
    this.range.step = this.step;
  }

  private touchMove(e: any) {
    const offset = this.direction === 'vertical' ? e.detail.offsetX : e.detail.offsetY;
    this.range.valueAsNumber = this.range.valueAsNumber + offset;
    requestAnimationFrame(() => this.range.dispatchEvent(new Event('input')));
  }
}
