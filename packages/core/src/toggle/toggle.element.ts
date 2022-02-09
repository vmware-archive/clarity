/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { PropertyValues } from 'lit';
import { property } from '@cds/core/internal';
import { CdsInternalControlInline } from '@cds/core/forms';
import styles from './toggle.element.scss';

/**
 * Toggle
 *
 * ```typescript
 * import '@cds/core/toggle/register.js';
 * ```
 *
 * ```html
 * <cds-toggle>
 *   <label>Toggle</label>
 *   <input type="checkbox" />
 * </cds-toggle>
 * ```
 *
 * @element cds-toggle
 * @slot - For projecting checkbox
 * @cssprop --background
 * @cssprop --border
 * @cssprop --border-radius
 * @cssprop --height
 * @cssprop --width
 * @cssprop --anchor-background
 * @cssprop --anchor-border-radius
 * @cssprop --anchor-width
 * @cssprop --anchor-height
 * @cssprop --toggle-speed
 */
export class CdsToggle extends CdsInternalControlInline {
  @property({ type: String })
  cdsMotion = 'on';

  async updated(props: PropertyValues<this>) {
    super.updated(props);

    // this section fixes an issue with toggles animating when the page loads
    // note that setting cdsMotion to 'off' will turn off all animation
    // https://github.com/vmware/clarity/issues/5880
    if (props.has('cdsMotion') && this.cdsMotion === 'on') {
      await this.updateComplete;
      this.cdsMotion = 'ready';
    }
  }

  static get styles() {
    return [...super.styles, styles];
  }
}
