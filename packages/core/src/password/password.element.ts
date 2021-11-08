/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { state } from '@cds/core/internal';
import { i18n, I18nService } from '@cds/core/internal';
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
  @state() private showPassword = false;

  @i18n() i18n = I18nService.keys.password;

  constructor() {
    super();
    ClarityIcons.addIcons(eyeIcon, eyeHideIcon);
  }

  protected get suffixDefaultTemplate() {
    return html`
      <cds-control-action
        @click=${() => this.togglePasswordVisibility()}
        .ariaLabel=${this.showPassword ? this.i18n.hideButtonAriaLabel : this.i18n.showButtonAriaLabel}
      >
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
    this.inputControl.focus();
  }
}
