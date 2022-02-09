/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement, PropertyValues } from 'lit';
import {
  baseStyles,
  createId,
  i18n,
  I18nService,
  state,
  property,
  querySlot,
  querySlotAll,
  spanWrapper,
} from '@cds/core/internal';
import styles from './navigation-item.element.scss';
import { manageScreenReaderElements, NAVIGATION_TEXT_WRAPPER } from './utils/utils.js';
import { CdsIcon } from '@cds/core/icon/icon.element.js';
import { FocusableItem, NavigationFocusState } from './interfaces/navigation.interfaces.js';

export const CdsNavigationItemTagName = 'cds-navigation-item';

/**
 * ```typescript
 * import '@cds/core/navigation/register.js';
 * ```
 *
 * ```html
 *  <cds-navigation-item><a href="/home">Home</cds-navigation-item>
 * ```
 *
 * @beta
 * @element cds-navigation-item
 * @cssprop --color
 * @cssprop --font-size
 * @cssprop --font-weight
 * @cssprop --letter-spacing
 * @cssprop --padding
 * @slot
 */
export class CdsNavigationItem extends LitElement implements FocusableItem {
  @i18n() i18n = I18nService.keys.navigation;

  @property({ type: Boolean, reflect: true })
  active = false;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  @state({ type: Boolean })
  expanded = false;

  @state({ type: Boolean, reflect: true })
  protected expandedGroup = true;

  @state({ type: Boolean, reflect: true })
  groupItem: boolean;

  @state({ type: Boolean, reflect: true })
  hasFocus: NavigationFocusState = false;

  @querySlot('a')
  focusElement: HTMLElement;

  @querySlot('cds-icon', { assign: 'cds-icon-slot' })
  protected itemIcon: CdsIcon;

  @querySlotAll('[cds-navigation-sr-text]')
  itemText: NodeListOf<HTMLSpanElement>;

  connectedCallback() {
    super.connectedCallback();
    this.role = 'listitem';
    if (!this.id) {
      this.id = createId();
    }
  }

  firstUpdated(props: PropertyValues<this>) {
    super.firstUpdated(props);
    this.handleItemAnchorText();
    manageScreenReaderElements(this, this.expanded);
  }

  private handleItemAnchorText() {
    const anchorElement = this.querySelector('a');
    if (anchorElement) {
      spanWrapper(anchorElement.childNodes);
      anchorElement?.querySelector('span')?.setAttribute(NAVIGATION_TEXT_WRAPPER, '');
    }
  }

  render() {
    return html`
      <div
        class="private-host ${this.groupItem ? 'group-item' : ''}"
        cds-layout="horizontal align:horizontal-stretch wrap:none gap:sm"
      >
        <slot @slotchange=${this.handleItemAnchorText}></slot>
      </div>
    `;
  }

  static get styles() {
    return [baseStyles, styles];
  }

  protected updated(props: PropertyValues<this>) {
    super.updated(props);
    manageScreenReaderElements(this, this.expanded);
  }
}
