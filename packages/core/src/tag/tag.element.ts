/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ClarityIcons } from '@clr/core/icon/icon.service.js';
import { timesIcon } from '@clr/core/icon/shapes/times.js';
import { assignSlotNames, baseStyles, CdsBaseButton, property, StatusTypes } from '@clr/core/internal';
import { html } from 'lit-element';
import { styles } from './tag.element.css.js';

/**
 * Tags show concise metadata in a compact format.
 * Tags are visually styled to differentiate them from buttons.
 *
 * ```typescript
 * import '@clr/core/tag/register.js';
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
  }

  render() {
    return html`
      <div class="private-host" cds-layout="horizontal">
        ${this.icon
          ? html`<span class="tag-icon"><slot name="tag-icon"></slot></span>`
          : html`<span class="tag-icon empty"></span>`}
        <span class="tag-content"><slot></slot></span>
        ${this.badge
          ? html`<span class="tag-badge"><slot name="tag-badge"></slot></span>`
          : html`<span class="tag-badge empty"></span>`}
        ${this.closable ? html`<span class="tag-close-icon"><cds-icon shape="times"></cds-icon></span>` : html``}
      </div>
    `;
  }

  constructor() {
    super();
    ClarityIcons.addIcons(timesIcon);
  }
}
