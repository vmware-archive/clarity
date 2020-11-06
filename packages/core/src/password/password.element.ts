/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { internalProperty, html } from 'lit-element';
import { CommonStringsService } from '@cds/core/internal';
import { CdsControl } from '@cds/core/forms';
import { inputStyles } from '@cds/core/input';
import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { eyeIcon } from '@cds/core/icon/shapes/eye.js';
import { eyeHideIcon } from '@cds/core/icon/shapes/eye-hide.js';

/**
 * Password
 *
 * ```typescript
 * import '@cds/core/password/register.js';
 * ```
 *
 * ```html
 * <cds-password>
 *   <label>Password</label>
 *   <input type="password" />
 *   <cds-control-message>message text</cds-control-message>
 * </cds-password>
 * ```
 *
 * @element cds-password
 * @slot - For projecting password input and label
 * @cssprop --background
 * @cssprop --background-size
 * @cssprop --border
 * @cssprop --border-bottom
 * @cssprop --outline
 * @cssprop --padding
 * @cssprop --font-size
 * @cssprop --color
 * @cssprop --line-height
 * @cssprop --transition
 */
export class CdsPassword extends CdsControl {
  @internalProperty() private showPassword = false;

  constructor() {
    super();
    ClarityIcons.addIcons(eyeIcon, eyeHideIcon);
  }

  private get ariaLabel() {
    return this.showPassword ? CommonStringsService.keys.hide : CommonStringsService.keys.show;
  }

  protected get suffixDefaultTemplate() {
    return html`
      <cds-control-action @click=${() => this.togglePasswordVisibility()} aria-label="${this.ariaLabel}">
        <cds-icon shape="${this.showPassword ? 'eye-hide' : 'eye'}"></cds-icon>
      </cds-control-action>
    `;
  }

  static get styles() {
    return [...super.styles, inputStyles];
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    this.inputControl.type = this.showPassword ? 'text' : 'password';
  }
}
