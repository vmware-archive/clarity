/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  assignSlotNames,
  baseStyles,
  CdsBaseButton,
  property,
  StatusTypes,
  syncDefinedProps,
} from '@cds/core/internal';
import { html } from 'lit-element';
import { styles } from './tag.element.css.js';

/**
 * Tags show concise metadata in a compact format.
 * Tags are visually styled to differentiate them from buttons.
 *
 * ```typescript
 * import '@cds/core/tag/register.js';
 * ```
 *
 * ```html
 * <cds-tag status="info">Info</cds-tag>
 * ```
 *
 * @beta
 * @element cds-tag
 * @slot - Content slot for inside the tag
 * @cssprop --background
 * @cssprop --border-color
 * @cssprop --border-radius
 * @cssprop --border-width
 * @cssprop --color
 * @cssprop --font-size
 * @cssprop --padding
 * @cssprop --size
 */
export class CdsTag extends CdsBaseButton {
  /** Sets the color of the tag (and badge if present) from the following predefined list of statuses:
   *  'info', 'success', 'warning', 'danger'
   */
  @property({ type: String })
  status: StatusTypes;

  /** Sets the color of the tag (and badge if present) from a predefined list of choices */
  @property({ type: String })
  color: 'gray' | 'purple' | 'blue' | 'orange' | 'light-blue';

  static get styles() {
    return [baseStyles, styles];
  }

  /** If present, shows a close icon to one side of the tag.
   *  Note that applications must wire up the action to remove the tag on click and also
   *  that you cannot have a clickable AND closable tag. The closable attribute-property
   *  shows the close icon. What happens when the tag is clicked is for application developers
   *  to decide.
   *  If closable is present, the tag will be considered "clickable".
   */
  @property({ type: Boolean })
  closable = false;

  connectedCallback() {
    super.connectedCallback();
    assignSlotNames([this.icon, 'tag-icon'], [this.badge, 'tag-badge']);
  }

  updated(props: Map<string, string | boolean | null | undefined>) {
    super.updated(props);

    if (props.has('closable') && props.get('closable') === true) {
      this.readonly = false;
    }

    if (!this.readonly && !this.getAttribute('aria-label')) {
      console.warn('Clickable and closable tags need aria-labels.');
    }

    syncDefinedProps(props, this, [this.badge]);
  }

  render() {
    return html`
      <div class="private-host" cds-layout="horizontal align:vertical-center">
        <slot name="tag-icon"></slot>
        <span class="tag-content" cds-text="lhe"><slot></slot></span>
        <slot name="tag-badge"></slot>
        ${this.closable ? html`<cds-icon shape="times"></cds-icon>` : html``}
      </div>
    `;
  }
}
