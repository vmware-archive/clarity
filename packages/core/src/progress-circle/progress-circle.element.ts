/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  baseStyles,
  hasStringPropertyChanged,
  property,
  setAttributes,
  StatusTypes,
  updateEquilateralSizeStyles,
  HTMLAttributeTuple,
} from '@cds/core/internal';
import { html, LitElement } from 'lit-element';
import isNil from 'ramda/es/isNil';
import { styles } from './progress-circle.element.css.js';

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
 * @beta
 * @element cds-progress-circle
 * @cssprop --ring-color
 * @cssprop --ring-opacity
 * @cssprop --fill-color
 */
export class CdsProgressCircle extends LitElement {
  private _size: string;

  /**
   * @type {default | info | success | warning | danger | unknown}
   * Sets the color of the badge
   */
  @property({ type: String })
  status: StatusTypes | 'unknown' = 'default';

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
    // 36 is the default viewbox dimensions; half of 36 is 18
    // we need to keep this so that circular-progress remains aligned with our icons
    // we shouldn't change it unless we change the default viewbox of the icons!
    const halfOfViewbox = 18;

    // line offset takes the width/thickness of the progress circle into account
    const lineOffset = Math.ceil(this.line / 2);

    return halfOfViewbox - lineOffset;
  }

  private get circumference() {
    return 2 * Math.PI * this.radius;
  }

  /** @private */
  get progress() {
    const defaultProgress = 30;
    return isNil(this.value) ? defaultProgress : this.value;
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
   * @type {string | sm | md | lg | xl | xxl}
   * Apply numerical width-height or a t-shirt-sized CSS classname
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

  private setAriaAttributes() {
    const currentValue = this.value;
    const ariaAttrsIfValue: HTMLAttributeTuple[] = [
      ['role', 'progressbar'],
      ['aria-valuemin', '0'],
      ['aria-valuemax', '100'],
      ['aria-valuenow', currentValue + ''],
    ];
    const ariaAttrsNoValue: HTMLAttributeTuple[] = [
      ['role', 'img'],
      ['aria-valuemin', false],
      ['aria-valuemax', false],
      ['aria-valuenow', false],
    ];
    const attrsToSet = isNil(currentValue) ? ariaAttrsNoValue : ariaAttrsIfValue;

    setAttributes(this, ...attrsToSet);
  }

  connectedCallback() {
    super.connectedCallback();
    this.setAriaAttributes();
  }

  updated(props: Map<string, any>) {
    super.updated(props);
    if (props.has('value')) {
      this.setAriaAttributes();
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
