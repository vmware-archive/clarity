/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { baseStyles } from '@cds/core/internal';
import { html, LitElement } from 'lit-element';
import { styles } from './accordion-header.element.css.js';

/**
 * Web component accordion to be used inside an accordion
 *
 * ```typescript
 * import '@cds/core/accordion/register.js';
 * ```
 *
 * ```html
 * <cds-accordion>
 *   <cds-accordion-panel expanded>
 *     <cds-accordion-header>Item 1</cds-accordion-header>
 *     <cds-accordion-content>Content 1</cds-accordion-content>
 *   </cds-accordion-panel>
 *   <cds-accordion-panel>
 *     <cds-accordion-header>Item 2</cds-accordion-header>
 *     <cds-accordion-content>Content 2</cds-accordion-content>
 *   </cds-accordion-panel>
 *   <cds-accordion-panel disabled>
 *     <cds-accordion-header>Item 3</cds-accordion-header>
 *     <cds-accordion-content>Content 3</cds-accordion-content>
 *   </cds-accordion-panel>
 * </cds-accordion>
 * ```
 *
 * @beta
 * @element cds-accordion-header
 * @cssprop --color
 * @cssprop --font-size
 * @cssprop --font-weight
 * @cssprop --background
 */
export class CdsAccordionHeader extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('slot', 'accordion-header');
  }

  render() {
    return html`<div class="private-host" cds-layout="horizontal gap:md align:vertical-center">
      <cds-icon class="accordion-angle" shape="angle" size="9" inner-offset="2"></cds-icon>
      <span cds-text="secondary"><slot></slot></span>
    </div>`;
  }

  static get styles() {
    return [baseStyles, styles];
  }
}
