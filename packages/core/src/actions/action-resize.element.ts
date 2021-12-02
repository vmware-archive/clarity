/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement, PropertyValues } from 'lit';
import { i18n, I18nService, state, property, querySlot } from '@cds/core/internal';
// import { CdsAction } from './action.element.js';
import styles from './action-resize.element.scss';

/**
 * Action Button
 *
 * ```typescript
 * import '@cds/core/actions/register.js';
 * ```
 *
 * ```html
 * <cds-action-resize>
 *  <input type="range" step="10" aria-label="resize" />
 * </cds-action-resize>
 * ```
 * @internal
 * @element cds-action-resize
 * @slot - For projecting range input
 */
export class CdsActionResize extends LitElement {
  @i18n() i18n = I18nService.keys.actions;

  @property({ type: String }) direction: 'vertical' | 'horizontal' = 'vertical';

  @state({ type: Boolean, reflect: true }) protected readonly = true;

  @state({ type: Boolean, reflect: true }) protected focused = false;

  @querySlot('input') private range: HTMLInputElement;

  static styles = [styles];

  // todo: cory badge support
  render() {
    return html`
      <div class="private-host">
        <slot @slotchange=${() => (this.readonly = !this.range)}></slot>
      </div>
    `;
  }

  firstUpdated(props: PropertyValues) {
    super.firstUpdated(props);

    if (this.range) {
      this.readonly = false;
      this.listenForMouseResize();
      this.range.ariaLabel ? this.range.ariaLabel : this.i18n.resize;
      this.range.addEventListener('focus', () => (this.focused = true));
      this.range.addEventListener('blur', () => (this.focused = false));
    }
  }

  private listenForMouseResize() {
    let pos: any;
    this.addEventListener(
      'mousedown',
      (e: any) => {
        this.focused = true;
        pos = this.direction === 'vertical' ? e.x : e.y;
        document.addEventListener('mousemove', resize, false);
      },
      false
    );

    document.addEventListener(
      'mouseup',
      () => {
        document.removeEventListener('mousemove', resize, false);
        this.focused = false;
      },
      false
    );

    const host = this; // eslint-disable-line @typescript-eslint/no-this-alias
    function resize(e: any) {
      requestAnimationFrame(() => {
        if (host.direction === 'vertical') {
          const dx = pos - e.x;
          pos = e.x;
          host.emit(-dx);
        } else {
          const dy = pos - e.y;
          pos = e.y;
          host.emit(-dy);
        }
      });
    }
  }

  private emit(size: number) {
    if (this.range) {
      this.range.value = (parseInt(this.range.value) + size) as any;
      requestAnimationFrame(() => this.range.dispatchEvent(new Event('input')));
    }
  }
}
