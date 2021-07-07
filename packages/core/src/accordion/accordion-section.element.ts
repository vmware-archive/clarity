/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement } from 'lit';
import {
  AnimationAccordionPanelOpenName,
  reverseAnimation,
  Animatable,
  animate,
  baseStyles,
  event,
  EventEmitter,
  property,
  querySlot,
} from '@cds/core/internal';
import styles from './accordion-section.element.scss';

/**
 * Web component accordion section to be used inside an accordion
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
 * @element cds-accordion-section
 * @slot
 * @slot cds-accordion-header
 * @slot cds-accordion-content
 * @event expandedChange - notify when the user has clicked the section header
 * @cssprop --animation-duration
 * @cssprop --animation-easing
 */
@animate({
  expanded: {
    true: AnimationAccordionPanelOpenName,
    false: reverseAnimation(AnimationAccordionPanelOpenName),
  },
})
export class CdsAccordionSection extends LitElement implements Animatable {
  @property({ type: String })
  cdsMotion = 'on';

  @event()
  cdsMotionChange: EventEmitter<string>;

  @property({ type: Boolean }) disabled = false;

  @property({ type: Boolean }) expanded = false;

  @querySlot('cds-accordion-header') private header: HTMLElement;

  @querySlot('cds-accordion-content') private content: HTMLElement;

  @event() protected expandedChange: EventEmitter<boolean>;

  private toggle() {
    this.expandedChange.emit(!this.expanded);
  }

  updated(props: Map<string, any>) {
    super.updated(props);

    if (this.content && this.header) {
      this.content.setAttribute('aria-labelledby', this.header.id);
      this.header.setAttribute('aria-controls', this.content.id);
    }

    if (this.header) {
      this.header.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
      this.header.setAttribute('aria-expanded', this.expanded ? 'true' : 'false');
    }
  }

  render() {
    return html`<div class="private-host" role="group">
      <button
        class="accordion-header-button"
        cds-layout="horizontal align:vertical-center gap:md"
        type="button"
        @click="${() => this.toggle()}"
        ?disabled="${this.disabled}"
      >
        <slot name="accordion-header"></slot>
      </button>
      <div aria-hidden="${!this.expanded}" class="accordion-content">
        <slot name="accordion-content"></slot>
      </div>
    </div>`;
  }

  static get styles() {
    return [baseStyles, styles];
  }
}
