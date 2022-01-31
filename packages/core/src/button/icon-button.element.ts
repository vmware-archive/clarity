/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CdsButton } from './button.element.js';

/**
 * Icon buttons give applications a compact alternative to communicate action and direct user intent.
 *
 * ```typescript
 * import '@cds/core/button/register.js';
 * ```
 *
 * ```html
 * <cds-icon-button><cds-icon shape="download"></cds-icon></cds-icon-button>
 * ```
 *
 * @element cds-icon-button
 * @slot - Content slot for inside the button
 * @cssprop --background
 * @cssprop --border-color
 * @cssprop --border-radius
 * @cssprop --border-width
 * @cssprop --box-shadow-color
 * @cssprop --color
 * @cssprop --font-size
 * @cssprop --height
 * @cssprop --padding
 */
export class CdsIconButton extends CdsButton {
  constructor() {
    super();
    this.size = 'icon';
  }
}
