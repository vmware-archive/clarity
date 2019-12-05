/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CwcBaseButton, registerElementSafely } from '@clr/core/common';
import { property } from 'lit-element';
import { styles } from './tag.element.css';

/**
 * Web component tags.
 *
 * ```typescript
 * import '@clr/core/tag';
 * ```
 *
 * ```html
 * <cwc-tag status="info">Info</cwc-tag>
 * ```
 *
 * @noInheritDoc
 * @beta 3.0
 * @element cwc-tag
 * @slot default - Content slot for inside the tag
 * @cssprop --clr-tag-font-color-light
 * @cssprop --clr-tag-font-color-dark
 * @cssprop --clr-tag-default-border-color
 * @cssprop --clr-tag-font-size
 * @cssprop --clr-tag-font-weight
 * @cssprop --clr-tag-letter-spacing
 * @cssprop --clr-tag-border-radius
 * @cssprop --clr-tag-bg-hover-color
 * @cssprop --clr-tag-gray-bg-color
 * @cssprop --clr-tag-gray-color
 * @cssprop --clr-tag-purple-bg-color
 * @cssprop --clr-tag-purple-color
 * @cssprop --clr-tag-blue-bg-color
 * @cssprop --clr-tag-blue-color
 * @cssprop --clr-tag-orange-bg-color
 * @cssprop --clr-tag-orange-color
 * @cssprop --clr-tag-light-blue-bg-color
 * @cssprop --clr-tag-light-blue-color
 * @cssprop --clr-tag-info-bg-color
 * @cssprop --clr-tag-info-font-color
 * @cssprop --clr-tag-info-border-color
 * @cssprop --clr-tag-success-bg-color
 * @cssprop --clr-tag-success-font-color
 * @cssprop --clr-tag-success-border-color
 * @cssprop --clr-tag-warning-bg-color
 * @cssprop --clr-tag-warning-font-color
 * @cssprop --clr-tag-warning-border-color
 * @cssprop --clr-tag-danger-bg-color
 * @cssprop --clr-tag-danger-font-color
 * @cssprop --clr-tag-danger-border-color
 */
// @dynamic
export class CwcTag extends CwcBaseButton {
  /** Sets the color of the tag (and badge if present) from a predefined list of statuses */
  @property({ type: String, reflect: true })
  status: 'info' | 'success' | 'warning' | 'danger';

  /** Sets the color of the tag (and badge if present) from a predefined list of choices */
  @property({ type: String, reflect: true })
  color: '1' | '2' | '3' | '4' | '5';

  static get styles() {
    return styles;
  }
}

registerElementSafely('cwc-tag', CwcTag);

declare global {
  interface HTMLElementTagNameMap {
    'cwc-tag': CwcTag;
  }
}
