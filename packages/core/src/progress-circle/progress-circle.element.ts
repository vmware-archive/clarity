/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement, PropertyValues } from 'lit';
import {
  baseStyles,
  hasStringPropertyChanged,
  property,
  StatusTypes,
  updateEquilateralSizeStyles,
  I18nService,
  i18n,
  isNilOrEmpty,
} from '@cds/core/internal';
import { getProgressCircleRadius } from './progress-circle.utils.js';
import styles from './progress-circle.element.scss';

/**
 * Circular progress indicators provide a method to track how close long-running tasks are to
 * completion. Circular progress offer a compact way to track progress in a variety of situations.
 *
 * ```typescript
 * import '@cds/core/progress-circle/register.js';
 * ```
 *
 * ```html
 * <cds-progress-circle status="info" value="25"></cds-progress-circle>
 * ```
 *
 * @element cds-progress-circle
 * @cssprop --ring-color
 * @cssprop --ring-opacity
 * @cssprop --fill-color
 * @cssprop --fill-speed
 */
export class CdsProgressCircle extends LitElement {
  private _size: string;

  /**
   * Sets the color of the badge
   * @type {neutral | info | success | warning | danger}
   */
  @property({ type: String })
  status: StatusTypes = 'neutral';

  /**
   * Inverts color of circular progress bar if `true`.
   * Useful for displaying icons on a dark background.
   */
  @property({ type: Boolean })
  inverse = false;

  /**
   * Represents the percent completed from 0 to 100.
   *
   * If undefined, the progress-circle will be represented as an indeterminate
   * progress indicator – a.k.a a "spinner".
   */
  @property({ type: Number })
  value: number;

  /**
   * Represents the thickness of the stroke of the circular progress.
   *
   * If undefined, it defaults to 3.
   */
  @property({ type: Number })
  line = 3;

  private get radius() {
    // 36 is the default viewbox dimensions
    return getProgressCircleRadius(this.line);
  }

  private get circumference() {
    return 2 * Math.PI * this.radius;
  }

  /** @private */
  get progress() {
    const defaultProgress = 30;
    return this.value ?? defaultProgress;
  }

  // Manages the progress fill.
  private get progressOffset() {
    const progressMax = 100;
    return ((progressMax - this.progress) / progressMax) * this.circumference;
  }

  get size() {
    return this._size;
  }

  /**
   * Apply numerical width-height or a t-shirt-sized CSS classname
   * @type {string | sm | md | lg | xl | xxl}
   */
  @property({ type: String })
  set size(val: string) {
    if (hasStringPropertyChanged(val, this._size)) {
      const oldVal = this._size;
      this._size = val;
      updateEquilateralSizeStyles(this, val);
      this.requestUpdate('size', oldVal);
    }
  }

  private _ariaLabel: string | undefined | null;

  @i18n() i18n = I18nService.keys.progress;

  connectedCallback() {
    super.connectedCallback();
    this._ariaLabel = this.ariaLabel;
    this.updateAria();
  }

  protected updated(props: PropertyValues<this>) {
    super.updated(props);

    if (props.has('value') || props.has('i18n')) {
      this.updateAria();
    }
  }

  private updateAria() {
    if (this._ariaLabel === this.ariaLabel) {
      this._ariaLabel = isNilOrEmpty(this.value) ? this.i18n.looping : `${this.i18n.loading} ${this.value}%`;
      this.ariaLabel = this._ariaLabel;
    }

    if (isNilOrEmpty(this.value)) {
      // no value so return aria attrs of the looping progress circle
      this.role = 'img';
      this.ariaValueMin = null;
      this.ariaValueMax = null;
      this.ariaValueNow = null;
    } else {
      // if the progress has a value, then we return as if we expect it to be incrementing
      this.role = 'progressbar';
      this.ariaValueMin = 0;
      this.ariaValueMax = 100;
      this.ariaValueNow = this.value;
    }
  }

  render() {
    return html`
      <div class="private-host" aria-hidden="true">
        <div class="progress-wrapper">
          <svg
            version="1.1"
            viewBox="0 0 36 36"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            focusable="false"
          >
            <circle
              stroke-width="${this.line}"
              fill="none"
              cx="18"
              cy="18"
              r="${this.radius}"
              class="${this.progress > 99 ? 'arcstroke' : 'backstroke'}"
            />
            <path
              d="M 18 18 m 0,-${this.radius} a ${this.radius},${this.radius} 0 1 1 0,${2 * this.radius} a ${this
                .radius},${this.radius} 0 1 1 0,-${2 * this.radius}"
              class="fillstroke arcstroke"
              stroke-width="${this.line}"
              stroke-dasharray="${this.circumference}"
              stroke-dashoffset="${this.progressOffset}"
              fill="none"
            />
          </svg>
        </div>
      </div>
    `;
  }

  static get styles() {
    return [baseStyles, styles];
  }
}
