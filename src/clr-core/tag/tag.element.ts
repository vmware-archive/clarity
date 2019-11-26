/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CwcBaseButton, registerElementSafely } from '@clr/core/common';
import { styles } from './tag.element.css';

/**
 * Web component tags.
 *
 * @noInheritDoc
 * @element cwc-tag
 * @slot default - Content slot for inside the tag
 * @attr {String} color - Sets the color of the tag (and badge if present) from a predefined list of choices <br/> (`gray`, `purple`, `blue`, `orange`, `light-blue`)
 * @attr {String} alias - Sets the color of the tag (and badge if present) from a predefined list of aliases <br/> (`1`, `2`, `3`, `4`, `5`)
 * @attr {String} status - Sets the color of the tag (and badge if present) from a predefined list of statuses <br/> (`info`, `success`, `warning`, `danger`)
 */
// @dynamic
export class CwcTag extends CwcBaseButton {
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
