/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { PropertyValues } from 'lit';
import { CdsIcon } from '@cds/core/icon/icon.element.js';
import { property } from '@cds/core/internal';
import { state } from 'lit/decorators/state.js';
import { query } from 'lit/decorators/query.js';
import { CdsButtonAction } from '@cds/core/button-action';
import { getPaginationIconConfig } from './utils.js';

/**
 * Web component pagination button to be used inside pagination.
 *
 * ```typescript
 * import '@cds/core/pagination/register.js';
 * ```
 *
 * ```html
 * <cds-pagination>
 *   <cds-pagination-button action="first" disabled></cds-pagination-button>
 *   <cds-pagination-button action="prev" disabled></cds-pagination-button>
 *   <span aria-label="current page">1 / 3</span>
 *   <cds-pagination-button action="next"></cds-pagination-button>
 *   <cds-pagination-button action="last"></cds-pagination-button>
 * </cds-pagination>
 * ```
 *
 * @beta
 * @element cds-pagination-button
 * @slot
 * @slot cds-icon
 * @cssprop --background
 * @cssprop --padding
 * @cssprop --border-color
 * @cssprop --border-width
 * @cssprop --border-radius
 * @cssprop --box-shadow
 * @cssprop --min-height
 * @cssprop --min-width
 * @property disabled
 */

export class CdsPaginationButton extends CdsButtonAction {
  /**
   * Sets the action from a predefined list of actions
   */
  @property({ type: String }) action: 'first' | 'prev' | 'next' | 'last';

  @state() private direction: 'up' | 'right' | 'down' | 'left';

  @query('cds-icon') private cdsIcon: CdsIcon;

  updated(props: PropertyValues<this>) {
    super.updated(props);

    const { shape, direction } = getPaginationIconConfig(this.action);
    this.shape = shape;
    this.direction = direction;

    if (this.cdsIcon) {
      this.cdsIcon.direction = this.direction;
    }
  }
}
