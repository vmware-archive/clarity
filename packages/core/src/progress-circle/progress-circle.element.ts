/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  baseStyles,
  hasStringPropertyChanged,
  listenForAttributeChange,
  property,
  setAttributes,
  StatusTypes,
  updateEquilateralSizeStyles,
  I18nService,
  i18n,
  isNilOrEmpty,
} from '@cds/core/internal';
import { html, LitElement, PropertyValues } from 'lit';
import isNil from 'ramda/es/isNil.js'; // TODO: REPLACE AFTER DROPDOWN MERGE TO PREVENT CIRCULAR DEPENDENCIES
import styles from './progress-circle.element.scss';
import {
  getAriaLabelOrDefault,
  getDefaultAriaLabel,
  getProgressCircleAriaAttributes,
  getProgressCircleRadius,
} from './progress-circle.utils.js';

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

  /**
   * The aria-label attribute is added here as a convenience. It is not set
   * to a default value.
   *
   * If this attribute/property remains unset, it will default to an i18n string.
   * This means that the aria-label can be customized using the aria-label
   * attribute or by overriding the i18n value for the progress circle.
   */
  @property({ type: String })
  get ariaLabel() {
    return getAriaLabelOrDefault(this._ariaLabel as string, this.value, this.i18n.loading, this.i18n.looping);
  }

  /**
   * Changes the svg glyph displayed in the icon component. Defaults to the 'unknown' icon if
   * the specified icon cannot be found in the icon registry.
   */
  set ariaLabel(newAriaLabel: string) {
    if (hasStringPropertyChanged(newAriaLabel, this._ariaLabel as string)) {
      const oldVal = this._ariaLabel;
      this._ariaLabel = newAriaLabel;
      this.requestUpdate('ariaLabel', oldVal);
    }
  }

  @i18n() i18n = I18nService.keys.progress;

  // note: this aria attr logic could be reused when we introduce progress bars
  // consider promoting this to a shared utility in internal in the future
  /** @private */
  setAriaAttributes(oldValueForAriaLabelCheck?: number) {
    const currentValue = this.value;
    const oldValIsNil = isNilOrEmpty(oldValueForAriaLabelCheck);
    let ariaLabel: string;

    if (oldValIsNil) {
      if (!isNilOrEmpty(currentValue) && this.ariaLabel === this.i18n.looping) {
        ariaLabel = getDefaultAriaLabel(currentValue, this.i18n.loading, this.i18n.looping);
      } else {
        ariaLabel = this.ariaLabel;
      }
    } else {
      ariaLabel = getAriaLabelOrDefault(
        this._ariaLabel as string,
        currentValue,
        this.i18n.loading,
        this.i18n.looping,
        oldValueForAriaLabelCheck
      );
    }

    const attrsToSet = getProgressCircleAriaAttributes(currentValue, ariaLabel);

    setAttributes(this, ...attrsToSet);
  }

  connectedCallback() {
    super.connectedCallback();
    this.setAriaAttributes();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.observers.forEach(o => o.disconnect());
  }

  protected observers: MutationObserver[] = [];

  firstUpdated(props: PropertyValues<any>) {
    super.firstUpdated(props);
    // FIXME: we need the mutation observer here because the i18n decorator property
    // is not firing an update as expected. maybe if we move it to a reactive
    // controller it will work with the lifecycle again?
    this.observers.push(
      listenForAttributeChange(this, 'cds-i18n', () => {
        const oldAriaLabel = this.ariaLabel;
        this.ariaLabel = '';
        this.requestUpdate('ariaLabel', oldAriaLabel);
      })
    );
  }

  // note: this update logic could be reused when we introduce progress bars
  // consider promoting this to a shared utility in internal in the future
  updated(props: PropertyValues<any>) {
    super.updated(props);
    if (props.has('value')) {
      this.setAriaAttributes(props.get('value'));
    } else if (props.has('ariaLabel')) {
      this.setAriaAttributes();
    } else if (props.has('ariaLabelTemplate')) {
      // if you update the template or i18n (edge case), you force reset of aria-label...
      this._ariaLabel = null;
      this.setAriaAttributes(this.value);
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
