/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CdsAction } from './action.element.js';
import styles from './action-handle.element.scss';

/**
 * Action Handle Button
 *
 * ```typescript
 * import '@cds/core/actions/register.js';
 * ```
 *
 * ```html
 * <cds-action-handle></cds-action-handle>
 * ```
 * @internal
 * @element cds-action-handle
 * @slot - For projecting text content or cds-icon
 */
export class CdsActionHandle extends CdsAction {
  static get styles() {
    return [super.styles, styles];
  }

  connectedCallback() {
    super.connectedCallback();
    this.pressed = false;
    this.shape = 'drag-handle';
    this.setAttribute('cds-draggable', 'handle');

    this.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        this.ariaPressed = this.ariaPressed === 'true' ? 'false' : 'true';
      }
    });
  }
}
