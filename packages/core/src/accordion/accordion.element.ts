/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { baseStyles } from '@cds/core/internal';
import { html, LitElement } from 'lit';
import styles from './accordion.element.scss';

/**
 * Web component accordion
 *
 * ```typescript
 * import '@cds/core/accordion/register.js';
 * ```
 *
 * ```html
 * <cds-accordion>
 *   <cds-accordion-section expanded>
 *     <cds-accordion-header>Item 1</cds-accordion-header>
 *     <cds-accordion-content>Content 1</cds-accordion-content>
 *   </cds-accordion-section>
 *   <cds-accordion-section>
 *     <cds-accordion-header>Item 2</cds-accordion-header>
 *     <cds-accordion-content>Content 2</cds-accordion-content>
 *   </cds-accordion-section>
 *   <cds-accordion-section disabled>
 *     <cds-accordion-header>Item 3</cds-accordion-header>
 *     <cds-accordion-content>Content 3</cds-accordion-content>
 *   </cds-accordion-section>
 * </cds-accordion>
 * ```
 *
 * @element cds-accordion
 * @slot - Content slot for inside the accordion
 * @cssprop --border-color
 * @cssprop --border-width
 * @cssprop --border-radius
 */
export class CdsAccordion extends LitElement {
  render() {
    return html` <slot></slot> `;
  }

  static get styles() {
    return [baseStyles, styles];
  }
}
