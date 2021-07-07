/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { baseStyles, createId, state } from '@cds/core/internal';
import { html, LitElement } from 'lit';
import styles from './accordion-content.element.scss';

/**
 * Web component accordion content to be used inside an accordion
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
 * @element cds-accordion-content
 * @cssprop --color
 * @cssprop --font-size
 * @cssprop --font-weight
 * @cssprop --background
 */
export class CdsAccordionContent extends LitElement {
  @state({ type: String, reflect: true, attribute: 'role' })
  protected role = 'region';

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('slot', 'accordion-content');

    if (!this.id) {
      this.id = createId();
    }
  }
  render() {
    return html`<div class="private-host"><slot></slot></div>`;
  }

  static get styles() {
    return [baseStyles, styles];
  }
}
