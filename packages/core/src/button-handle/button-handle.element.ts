/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { onKey } from '@cds/core/internal';
import { CdsButtonAction } from '@cds/core/button-action';
import styles from './button-handle.element.scss';

/**
 * Action Handle Button
 *
 * ```typescript
 * import '@cds/core/button-handle/register.js';
 * ```
 *
 * ```html
 * <cds-button-handle></cds-button-handle>
 * ```
 * @beta
 * @element cds-button-handle
 * @slot - For projecting text content or cds-icon
 */
export class CdsButtonHandle extends CdsButtonAction {
  static get styles() {
    return [super.styles, styles];
  }

  connectedCallback() {
    super.connectedCallback();
    this.pressed = false;
    this.setAttribute('cds-draggable', 'handle');

    if (!this.shape) {
      this.shape = 'drag-handle';
    }

    this.addEventListener('keydown', (event: KeyboardEvent) => {
      onKey('space', event, () => (this.pressed = !this.pressed));
    });
  }
}
