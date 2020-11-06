/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement } from 'lit-element';
import { baseStyles, event, property, EventEmitter } from '@cds/core/internal';
import { styles } from './accordion-panel.element.css.js';

/**
 * Web component accordion panel to be used inside an accordion
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
 * @element cds-accordion-panel
 * @slot
 * @slot cds-accordion-header
 * @slot cds-accordion-content
 * @event expandedChange - notify when the user has clicked the panel header
 * @cssprop --border-color
 * @cssprop --border-width
 * @cssprop --color
 * @cssprop --font-size
 * @cssprop --font-weight
 */
export class CdsAccordionPanel extends LitElement {
  @property({ type: Boolean }) disabled = false;

  @property({ type: Boolean }) expanded = false;

  @event() protected expandedChange: EventEmitter<boolean>;

  private toggle() {
    this.expandedChange.emit(!this.expanded);
  }

  render() {
    return html`<div class="private-host" role="group">
      <button
        class="accordion-header-button"
        cds-layout="horizontal align:vertical-center gap:md"
        type="button"
        @click="${() => this.toggle()}"
        ?disabled="${this.disabled}"
        aria-disabled="${this.disabled}"
        aria-expanded="${this.expanded}"
      >
        <slot name="accordion-header"></slot>
      </button>
      <div role="region" aria-hidden="${!this.expanded}" class="accordion-content">
        <slot name="accordion-content"></slot>
      </div>
    </div>`;
  }

  static get styles() {
    return [baseStyles, styles];
  }
}
