/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  baseStyles,
  Directions,
  hasStringPropertyChanged,
  hasStringPropertyChangedAndNotNil,
  Orientations,
  property,
  state,
  StatusTypes,
  isString,
  pxToRem,
  EventSubscription,
  GlobalStateService,
} from '@cds/core/internal';
import { html, LitElement, svg } from 'lit';
import { query } from 'lit/decorators/query.js';
import styles from './icon.element.scss';
import { ClarityIcons } from './icon.service.js';
import { updateIconSizeStyle } from './utils/icon.classnames.js';
import { getIconBadgeSVG, getIconSVG } from './utils/icon.svg-helpers.js';

/**
 * Icon component that renders svg shapes that can be customized.
 * To load an icon, import the icon with the icon service.
 *
 * ```typescript
 * import '@cds/core/icon/register.js';
 * import { ClarityIcons, userIcon } from '@cds/core/icon';
 *
 * ClarityIcons.addIcons(userIcon);
 * ```
 *
 * ```html
 * <cds-icon shape="user"></cds-icon>
 * ```
 *
 * @element cds-icon
 * @cssprop --color
 * @cssprop --badge-color
 */
export class CdsIcon extends LitElement {
  static styles = [baseStyles, styles];

  private _shape = 'unknown';
  private _size: string;

  @property({ type: String })
  get shape() {
    return this._shape;
  }

  /**
   * Changes the svg glyph displayed in the icon component. Defaults to the 'unknown' icon if
   * the specified icon cannot be found in the icon registry.
   */
  set shape(val: string) {
    if (hasStringPropertyChangedAndNotNil(val, this._shape)) {
      const oldVal = this._shape;
      this._shape = val;
      this.requestUpdate('shape', oldVal);
    }
  }

  get size() {
    return this._size;
  }

  /**
   * Apply numerical width-height or a t-shirt-sized CSS classname
   * @type {string | xs | sm | md | lg | xl | xxl}
   */
  @property({ type: String })
  set size(val: string) {
    if (hasStringPropertyChanged(val, this._size)) {
      const oldVal = this._size;
      this._size = val;
      updateIconSizeStyle(this, val);
      this.requestUpdate('size', oldVal);
    }
  }

  /**
   * Takes a directional value that rotates the icon 90° with the
   * top of the icon pointing in the specified direction.
   * @type {up | down | left | right}
   */
  @property({ type: String })
  direction: Directions;

  /**
   * Takes an orientation value that reverses the orientation of the icon vertically or horizontally'
   * @type {horizontal | vertical}
   */
  @property({ type: String })
  flip: Orientations;

  /**
   * Displays most icons in their "filled" version if set to `true`.
   */
  @property({ type: Boolean })
  solid = false;

  /**
   * Changes color of icon fills and outlines
   * @type {info | success | warning | danger}
   */
  @property({ type: String })
  status: StatusTypes;

  /**
   * Inverts color of icon fills and outlines if `true`.
   * Useful for displaying icons on a dark background.
   */
  @property({ type: Boolean })
  inverse = false;

  /**
   * Sets the color of the icon decoration that appears in the top-right corner
   * of the glyph. The icon decoration is derived from the following predefined types.
   *
   * The color of the badge can change according to the following
   * list of statuses:
   * 'info'  -> blue dot
   * 'success' -> green dot
   * 'warning' -> yellow dot
   * 'danger' -> red dot
   * 'inherit' -> dot inherits color of full icon glyph
   * 'warning-triangle' -> yellow triangle
   * 'inherit-triangle' -> triangle inherits color of full icon glyph
   * unrecognized value, empty string, or true -> red dot
   *
   * By default, the badge displays a 'danger' dot (a red-colored dot).
   *
   * Setting the badge to 'false' or removing the attribute will remove the default icon badge.
   * @type {info | success | warning | danger | inherit | warning-triangle | inherit-triangle}
   */
  @property({ type: String })
  badge: StatusTypes | 'inherit' | 'warning-triangle' | 'inherit-triangle' | true | false;

  /**
   * @private
   * given a pixel value offset any surrounding whitespace within the svg
   */
  @state({ type: Number })
  innerOffset: number; // Performance optimization: default to undefined so attr is not initially rendered

  @query('svg') private svg: SVGElement;

  private subscription: EventSubscription;

  updated(props: Map<string, any>) {
    if (props.has('innerOffset') && this.innerOffset > 0) {
      const val = pxToRem(-1 * this.innerOffset);
      const dimension = `calc(100% + ${pxToRem(this.innerOffset * 2)})`;
      this.svg.style.width = dimension;
      this.svg.style.height = dimension;
      this.svg.style.margin = `${val} 0 0 ${val}`;
    }
  }

  firstUpdated(props: Map<string, any>) {
    super.firstUpdated(props);

    let prior = 'unknown';
    this.subscription = GlobalStateService.stateUpdates.subscribe(update => {
      if (update.key === 'iconRegistry' && ClarityIcons.registry[this.shape] && prior !== this.shape) {
        prior = this.shape;
        this.requestUpdate('shape');
      }
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.subscription?.unsubscribe();
  }

  protected render() {
    return isString(ClarityIcons.registry[this.shape])
      ? html`<span .innerHTML="${ClarityIcons.registry[this.shape] as string}"></span>`
      : svg`<svg .innerHTML="${
          getIconSVG(this) + getIconBadgeSVG(this)
        }" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"></svg>`;
  }
}
