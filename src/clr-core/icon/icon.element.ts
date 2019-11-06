/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  applyMixins,
  CssHelpers,
  hasPropertyChanged,
  isNilOrEmpty,
  registerElementSafely,
  UniqueId,
} from '@clr/core/common';
import { html, LitElement, property } from 'lit-element';
import { styles } from './icon.element.css';
import { ClarityIcons } from './icon.service';
import { updateIconSizeStyleOrClassnames } from './utils/icon.classnames';

function updateSvgAriaAttrs(svgEl: SVGSVGElement, ariaId: string) {
  svgEl.setAttribute('role', 'img');
  svgEl.setAttribute('aria-labelledby', ariaId);
}

class IconMixinClass extends LitElement {}

applyMixins(IconMixinClass, [UniqueId, CssHelpers]);

/**
 * Icon web component that renders svg shapes that can be customized with CSS classnames.
 *
 * @noInheritDoc
 * @element `cwc-icon`
 * @styleAttr `size` - Apply numerical width-height or a t-shirt-sized CSS classname
 * @styleAttr `dir` - Rotate icon 90° with the top of the icon pointing in the specified direction.
 * @styleAttr `flip` - Reverse the orientation of the icon vertically or horizontally.
 * @cssProp `--clr-icon-color-default`
 * @cssProp `--clr-icon-color-success`
 * @cssProp `--clr-icon-color-danger`
 * @cssProp `--clr-icon-color-warning`
 * @cssProp `--clr-icon-color-error`
 * @cssProp `--clr-icon-color-info`
 * @cssProp `--clr-icon-color-inverse`
 * @cssProp `--clr-icon-color-highlight`
 */
// @dynamic
export class CwcIcon extends IconMixinClass {
  private _shape: string;
  private _size: string;

  get shape() {
    return ClarityIcons.has(this._shape) ? this._shape : 'unknown';
  }

  /**
   * Changes the svg glyph displayed in the icon component. Defaults to the 'unknown' icon if
   * the specified icon cannot be found in the icon registry.
   */
  @property({ type: String, reflect: true })
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

  /** Converts between numerical values and t-shirt sizes */
  @property({ type: String, reflect: true })
  set size(val: string) {
    if (hasPropertyChanged(val, this._size)) {
      const oldVal = this._size;
      this._size = val;
      updateIconSizeStyleOrClassnames(this, val);
      this.requestUpdate('size', oldVal);
    }
  }

  /** If present, customizes the aria-label for the icon for accessibility. */
  @property({ type: String, reflect: true })
  title = '';

  /** If present, determines the id of the icon. Uses a generated unique id otherwise. */
  @property({ type: String, reflect: true })
  id = '';

  /**
   * Takes a directional value (up|down|left|right) that rotates the icon 90° with the
   * top of the icon pointing in the specified direction.
   */
  @property({ type: String, reflect: true })
  dir = '';

  /**
   * Takes an orientation value (horizontal|vertical) that reverses the orientation of the
   * icon vertically or horizontally.
   */
  @property({ type: String, reflect: true })
  flip = '';

  firstUpdated() {
    if (isNilOrEmpty(this.id)) {
      this.id = this._idPrefix + this._uniqueId;
    }
  }

  static get styles() {
    return styles;
  }

  private get ariaId() {
    return 'aria-' + this.id;
  }

  private get ariaLabel() {
    return this.title || this.shape + ' icon';
  }

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'none');
    this.updateSVGAttributes();
  }

  async updateSVGAttributes() {
    await this.updateComplete;
    const svgEl = this.shadowRoot.querySelector('svg');
    if (svgEl !== null) {
      updateSvgAriaAttrs(svgEl, this.ariaId);
    }
  }

  updated(changedProperties: any) {
    changedProperties.forEach((oldValue: any, propName: any) => {
      if (oldValue && propName === 'id') {
        this.updateSVGAttributes();
      }
    });
  }

  /** render() needs the .innerHTML because svg is converted to text otherwise */
  protected render() {
    return html`
    <div .innerHTML="${ClarityIcons.get(this.shape)}"></div>
    <span id="${this.ariaId}" class="sr-only">${this.ariaLabel}</span>`;
  }
}
export interface CwcIcon extends IconMixinClass, UniqueId, CssHelpers {}
registerElementSafely('cwc-icon', CwcIcon);

// TODO: NOTE DEPRECATIONS IN CLR-ICONS!
