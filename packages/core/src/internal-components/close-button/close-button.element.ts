/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { property, I18nService, i18n } from '@cds/core/internal';
import { CdsAction } from '@cds/core/actions';

export const CdsCloseButtonTagName = 'cds-internal-close-button';

/**
 * Standard close button for Clarity Components extends default cds-action button
 *
 * ```typescript
 * import '@cds/core/internal-components/close-button/register.js';
 * ```
 *
 * ```html
 * <cds-internal-close-button></cds-internal-close-button>
 * ```
 *
 * @element cds-internal-close-button
 */
export class CdsInternalCloseButton extends CdsAction {
  @property({ type: String }) shape = 'close';

  @i18n() i18n = I18nService.keys.actions;

  connectedCallback() {
    super.connectedCallback();
    this.ariaLabel = this.ariaLabel ? this.ariaLabel : this.i18n.close;
  }
}
