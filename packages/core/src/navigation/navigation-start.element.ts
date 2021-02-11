/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement, PropertyValues } from 'lit';
import {
  baseStyles,
  createId,
  Directions,
  i18n,
  I18nService,
  property,
  querySlot,
  querySlotAll,
  spanWrapper,
  state,
} from '@cds/core/internal';
import styles from './navigation-start.element.scss';
import { getToggleIconDirection, manageScreenReaderElements, NAVIGATION_TEXT_WRAPPER } from './utils/index.js';
import { CdsIcon } from '@cds/core/icon/icon.element.js';
import { FocusableItem, NavigationFocusState } from './interfaces/navigation.interfaces.js';

export const CdsNavigationStartTagName = 'cds-navigation-start';

/**
 * Web component navigation.
 *
 * ```typescript
 * import '@cds/core/navigation/register.js';
 * ```
 *
 * ```html
 * <cds-navigation-start>Start text</cds-navigation-start>
 * ```
 * @beta
 * @element cds-navigation-start
 * @cssprop --color: inherit
 * @cssprop --line-height: inherit
 * @cssprop --font-size: inherit
 * @cssprop --font-weight: inherit
 * @slot
 * @slot cds-navigation-start-icon - customize the default start toggle icon
 */
export class CdsNavigationStart extends LitElement implements FocusableItem {
  @i18n() i18n = I18nService.keys.navigation;

  /**
   * @desc
   * Synced down from the root navigation element. Determines if the vertical navigation is wide or narrow.
   */
  @property({ type: Boolean })
  expandedRoot = false;

  /**
   * @desc
   * Is set to true by the root cds-navigation element when the instance is focused.
   */
  @state({ type: Boolean, reflect: true })
  hasFocus: NavigationFocusState = false;

  /**
   * @desc
   * The value is synced down from the root cds-navigation element.
   */
  @property({ type: Boolean, reflect: true })
  isGroupStart = false;

  @property({ type: String })
  navigationGroupId: string;

  /**
   * @desc info synced down from group element and used in css to set proper bg color if a group has an active item and is not expanded
   *
   * @private
   */
  @state({ type: Boolean, reflect: true })
  active = false;

  /**
   * @desc
   * Describes the groups expanded state
   *
   * @private
   */
  @state({ type: Boolean, reflect: true })
  expanded = false;

  /**
   * @desc
   * Start element must find the button in firstUpdated. When the arrow keys navigation to the the util fn setFocus
   * calls the native focus method.
   *
   * @private
   */
  focusElement: HTMLButtonElement;

  @querySlot('[cds-navigation-start-icon]', { assign: 'cds-icon-slot' })
  protected startIcon: CdsIcon;

  @querySlotAll('[cds-navigation-sr-text]')
  itemText: NodeListOf<HTMLSpanElement>;

  connectedCallback() {
    super.connectedCallback();
    if (!this.id) {
      this.id = createId();
    }
  }

  firstUpdated(props: PropertyValues) {
    super.firstUpdated(props);
    const button = this.shadowRoot?.querySelector('button');
    if (button) {
      this.focusElement = button;
    }
    this.handleStartButtonText();
  }

  private handleStartButtonText() {
    spanWrapper(this.childNodes);
    // get the projected text now wrapped in a span and add the sr attribute.
    this.querySelector('span')?.setAttribute(NAVIGATION_TEXT_WRAPPER, '');
  }

  render() {
    return html`
      <div class="private-host">
        <button
          aria-expanded="${this.expanded}"
          cds-layout="horizontal align:stretch align:vertical-center"
          class="private-host"
          id="${this.isGroupStart ? this.navigationGroupId : ''}"
          type="button"
        >
          <div cds-layout="horizontal align:vertical-center">
            <slot @slotchange=${this.handleStartButtonText}></slot>
            <span class="icon-slot" cds-layout="${this.expandedRoot ? 'align:right' : 'align:left'}">
              <slot name="cds-icon-slot">
                ${this.startIcon
                  ? ''
                  : html` <cds-icon
                      size="${!this.expandedRoot && this.isGroupStart ? 'xs' : 'sm'}"
                      shape="${this.isGroupStart ? 'angle' : 'angle-double'}"
                      direction="${this.toggleIconDirection}"
                    >
                    </cds-icon>`}
              </slot>
            </span>
          </div>
        </button>
      </div>
    `;
  }

  static get styles() {
    return [baseStyles, styles];
  }

  get toggleIconDirection(): Directions {
    return getToggleIconDirection(this);
  }

  updated(props: PropertyValues) {
    super.updated(props);
    manageScreenReaderElements(this, this.expandedRoot);
  }
}
