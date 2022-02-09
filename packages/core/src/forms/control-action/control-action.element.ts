/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { PropertyValues } from 'lit';
import { assignSlotNames, property } from '@cds/core/internal';
import { CdsButtonAction } from '@cds/core/button-action';

/**
 * Control Action Button
 *
 * ```typescript
 * import '@cds/core/forms/register.js';
 * ```
 *
 * ```html
 * <cds-control-action>
 *
 * </cds-control-action>
 * ```
 *
 * @element cds-control-action
 * @slot - For projecting text content or cds-icon
 */
export class CdsControlAction extends CdsButtonAction {
  @property({ type: String, reflect: true }) action: 'label' | 'prefix' | 'suffix';

  updated(props: PropertyValues<this>) {
    super.updated(props);
    assignSlotNames([this, this.action ?? false]);
  }
}
