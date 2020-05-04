/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { baseStyles, registerElementSafely } from '@clr/core/internal';
import { html, LitElement } from 'lit-element';
import { styles } from './alert-content.element.css.js';

/**
 * Web component alert content to be used inside alert.
 *
 * ```typescript
 * import '@clr/core/alert';
 * ```
 *
 * ```html
 * <cds-alert>
 *    <cds-alert-content>Lorem ipsum dolor sit amet</cds-alert-content>
 * </cds-alert>
 *
 * <cds-app-alert>
 *    <cds-alert-content>Lorem ipsum dolor sit amet</cds-alert-content>
 *    <cds-alert-actions>
 *       <cds-button>Fix</cds-button>
 *    </cds-alert-actions>
 * </cds-app-alert>
 * ```
 *
 * @beta
 * @element cds-alert-content
 */
export class CdsAlertContent extends LitElement {
  render() {
    return html` <slot></slot> `;
  }

  static get styles() {
    return [baseStyles, styles];
  }
}

registerElementSafely('cds-alert-content', CdsAlertContent);

declare global {
  interface HTMLElementTagNameMap {
    'cds-alert-content': CdsAlertContent;
  }
}
