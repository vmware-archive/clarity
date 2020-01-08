/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { baseStyles, CwcBaseButton, property, registerElementSafely, StatusTypes } from '@clr/core/common';
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
 * @cssprop --clr-tag-border-color
 * @cssprop --clr-tag-font-size
 * @cssprop --clr-tag-font-weight
 * @cssprop --clr-tag-letter-spacing
 * @cssprop --clr-tag-border-radius
 * @cssprop --clr-tag-bg-color
 * @cssprop --clr-tag-bg-hover-color
 */
// @dynamic
export class CwcTag extends CwcBaseButton {
  /** Sets the color of the tag (and badge if present) from the following predefined list of statuses:
   *  'info', 'success', 'warning', 'danger'
   */
  @property({ type: String })
  status: StatusTypes;

  /** Sets the color of the tag (and badge if present) from a predefined list of choices */
  @property({ type: String })
  color: '1' | '2' | '3' | '4' | '5';

  static get styles() {
    return [baseStyles, styles];
  }
}

registerElementSafely('cwc-tag', CwcTag);

declare global {
  interface HTMLElementTagNameMap {
    'cwc-tag': CwcTag;
  }
}
