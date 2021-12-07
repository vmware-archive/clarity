/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { property } from '@cds/core/internal';
import { CdsButtonAction } from '@cds/core/button-action';

export const CdsCloseButtonTagName = 'cds-internal-close-button';

/**
 * Standard close button for Clarity Components extends default cds-button-action
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
export class CdsInternalCloseButton extends CdsButtonAction {
  @property({ type: String }) shape = 'close';

  connectedCallback() {
    super.connectedCallback();
    this.ariaLabel = this.ariaLabel ? this.ariaLabel : this.i18n.close;
  }
}
