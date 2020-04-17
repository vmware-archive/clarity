/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  applyMixins,
  baseStyles,
  CssHelpers,
  Directions,
  hasStringPropertyChanged,
  hasStringPropertyChangedAndNotNil,
  Orientations,
  property,
  StatusTypes,
  UniqueId,
} from '@clr/core/internal';
import { html, LitElement, query } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { styles } from './icon.element.css.js';
import { ClarityIcons } from './icon.service.js';
import { updateIconSizeStyleOrClassnames } from './utils/icon.classnames.js';
import { hasIcon } from './utils/icon.service-helpers.js';

class IconMixinClass extends LitElement {}

applyMixins(IconMixinClass, [UniqueId, CssHelpers]);

/**
 * Icon component that renders svg shapes that can be customized.
 * To load an icon, import the icon with the icon service.
 *
 * ```typescript
 * import '@clr/core/icon';
 * import { ClarityIcons, userIcon } from '@clr/core/icon-shapes';
 *
 * ClarityIcons.addIcons(userIcon);
 * ```
 *
 * ```html
 * <cds-icon shape="user"></cds-icon>
 * ```
 *
 * @beta
 * @element cds-icon
 * @cssprop --color
 * @cssprop --badge-color
 */
export class CdsIcon extends IconMixinClass {
  static get styles() {
    return [baseStyles, styles];
  }

  private _shape: string;
  private _size: string;

  @property({ type: String })
  get shape() {
    return hasIcon(this._shape, ClarityIcons.registry) ? this._shape : 'unknown';
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

  /** Apply numerical width-height or a t-shirt-sized CSS classname */
  @property({ type: String })
  set size(val: string) {
    if (hasStringPropertyChanged(val, this._size)) {
      const oldVal = this._size;
      this._size = val;
      updateIconSizeStyleOrClassnames(this, val);
      this.requestUpdate('size', oldVal);
    }
  }

  // TODO: MAKE title A REQUIRED(warn) PROPERTY WHEN THAT IS READY

  /** If present, customizes the aria-label for the icon for accessibility. */
  @property({ type: String })
  title: string;

  /**
   * @deprecated
   * Takes a directional value (up|down|left|right) that rotates the icon 90° with the
   * top of the icon pointing in the specified direction.
   *
   * Deprecated in 3.0. Use `direction` instead. `dir` will be removed in 4.0!
   */
  @property({ type: String })
  dir: Directions;

  /**
   * Takes a directional value (up|down|left|right) that rotates the icon 90° with the
   * top of the icon pointing in the specified direction.
   */
  @property({ type: String })
  direction: Directions;

  /**
   * Takes an orientation value (horizontal|vertical) that reverses the orientation of the
   * icon vertically or horizontally using the strings: 'horizontal' or 'vertical'
   */
  @property({ type: String })
  flip: Orientations;

  /**
   * Displays most icons in their "filled" version if set to `true`.
   */
  @property({ type: Boolean })
  solid = false;

  /**
   * Changes color of icon fills and outlines to a color determined by the following
   * list of statuses: 'info', 'success', 'warning', 'danger', 'highlight'
   */
  @property({ type: String })
  status: StatusTypes | 'highlight' | '' = '';

  /**
   * Inverts color of icon fills and outlines if `true`.
   * Useful for displaying icons on a dark background.
   */
  @property({ type: Boolean })
  inverse = false;

  /**
   * Attribute: `badge`
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
   * Setting the badge to 'null' removes the attribute from the DOM.
   */
  @property({ type: String })
  badge: StatusTypes | 'inherit' | 'warning-triangle' | 'inherit-triangle' | true | null;

  @query('svg') private svg: SVGElement;

  private idForAriaLabel = 'aria-' + this._idPrefix + this._uniqueId;

  firstUpdated() {
    this.updateSVGAriaLabel();
  }

  updated(props: Map<string, any>) {
    if (props.has('title')) {
      this.updateSVGAriaLabel();
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'none');
  }

  protected render() {
    return html`
      ${unsafeHTML(ClarityIcons.registry[this.shape])}
      ${this.title ? html`<span id="${this.idForAriaLabel}" class="clr-sr-only">${this.title}</span>` : ''}
    `;
  }

  private updateSVGAriaLabel() {
    if (this.title) {
      this.svg.removeAttribute('aria-label'); // remove empty label that makes icon decorative by default
      this.svg.setAttribute('aria-labelledby', this.idForAriaLabel); // use labelledby for better SR support
    } else {
      this.svg.removeAttribute('aria-labelledby');
    }
  }
}
export interface CdsIcon extends IconMixinClass, UniqueId, CssHelpers {}
