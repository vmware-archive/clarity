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
  hasPropertyChanged,
  Orientations,
  property,
  registerElementSafely,
  UniqueId,
} from '@clr/core/common';
import { html, LitElement, query } from 'lit-element';
import { unsafeHTML } from 'lit-html/directives/unsafe-html';
import { styles } from './icon.element.css';
import { ClarityIcons } from './icon.service';
import { updateIconSizeStyleOrClassnames } from './utils/icon.classnames';
import { hasIcon } from './utils/icon.service-helpers';

class IconMixinClass extends LitElement {}

applyMixins(IconMixinClass, [UniqueId, CssHelpers]);

/**
 * Icon web component that renders svg shapes that can be customized with CSS classnames.
 * To load a icon import the need icon with the icon service.
 *
 * ```typescript
 * import '@clr/core/icon';
 * import { ClarityIcons, userIcon } from '@clr/core/icon-shapes';
 *
 * ClarityIcons.addIcons(userIcon);
 * ```
 *
 * ```html
 * <cwc-icon shape="user"></cwc-icon>
 * ```
 *
 * @noInheritDoc
 * @beta 3.0
 * @element cwc-icon
 * @cssprop --clr-icon-color-default
 * @cssprop --clr-icon-color-success
 * @cssprop --clr-icon-color-danger
 * @cssprop --clr-icon-color-warning
 * @cssprop --clr-icon-color-info
 * @cssprop --clr-icon-color-highlight
 * @cssprop --clr-icon-color-inverse
 * @cssprop --clr-icon-color-inverse-success
 * @cssprop --clr-icon-color-inverse-danger
 * @cssprop --clr-icon-color-inverse-warning
 * @cssprop --clr-icon-color-inverse-info
 * @cssprop --clr-icon-color-inverse-highlight
 */
// @dynamic
export class CwcIcon extends IconMixinClass {
  static get styles() {
    return [baseStyles, styles];
  }

  private _shape: string;
  private _size: string;

  get shape() {
    return hasIcon(this._shape, ClarityIcons.registry) ? this._shape : 'unknown';
  }

  /**
   * Changes the svg glyph displayed in the icon component. Defaults to the 'unknown' icon if
   * the specified icon cannot be found in the icon registry.
   */
  @property({ type: String })
  set shape(val: string) {
    if (hasPropertyChanged(val, this._shape)) {
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
    if (hasPropertyChanged(val, this._size)) {
      const oldVal = this._size;
      this._size = val;
      updateIconSizeStyleOrClassnames(this, val);
      this.requestUpdate('size', oldVal);
    }
  }

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

  @query('svg') private svg: SVGElement;

  private ariaLabel = `aria-${this._idPrefix}${this._uniqueId}`;

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
      ${this.title ? html`<span id="${this.ariaLabel}" class="sr-only">${this.title}</span>` : ''}
    `;
  }

  private updateSVGAriaLabel() {
    if (this.title) {
      this.svg.removeAttribute('aria-label'); // remove empty label that makes icon decorative by default
      this.svg.setAttribute('aria-labelledby', this.ariaLabel); // use labelledby for better SR support
    } else {
      this.svg.removeAttribute('aria-labelledby');
    }
  }
}
export interface CwcIcon extends IconMixinClass, UniqueId, CssHelpers {}
registerElementSafely('cwc-icon', CwcIcon);

// TODO: NOTE DEPRECATIONS IN CLR-ICONS!

declare global {
  interface HTMLElementTagNameMap {
    'cwc-icon': CwcIcon;
  }
}
