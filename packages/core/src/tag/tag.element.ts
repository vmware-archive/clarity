/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { assignSlotNames, baseStyles, CdsBaseButton, id, property, StatusTypes, syncProps } from '@cds/core/internal';
import { html, PropertyValues } from 'lit';
import styles from './tag.element.scss';

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
  /**
   * Sets the color of the tag (and badge if present) from the following predefined list of statuses:
   * @type {neutral | info | success | warning | danger}
   */
  @property({ type: String })
  status: StatusTypes = 'neutral';

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

  @id() private groupLabelId: string;

  connectedCallback() {
    super.connectedCallback();
    assignSlotNames([this.icon, 'tag-icon'], [this.badge, 'tag-badge']);
  }

  updated(props: PropertyValues<this>) {
    super.updated(props);

    if (props.has('closable') && props.get('closable') === true) {
      this.readonly = false;
    }

    if (this.badge) {
      syncProps(this.badge, this, { status: props.has('status'), color: props.has('color') });
    }
  }

  render() {
    return html`
      <div
        class="private-host"
        role="group"
        aria-labelledby="${this.groupLabelId}"
        cds-layout="horizontal align:center"
      >
        <slot name="tag-icon"></slot>
        <span id="${this.groupLabelId}" class="tag-content" cds-text="lhe"><slot></slot></span>
        <slot name="tag-badge"></slot>
        ${this.closable ? html`<cds-icon shape="times"></cds-icon>` : html``}
      </div>
    `;
  }
}
