/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement, PropertyValues } from 'lit';

import {
  animate,
  AnimationNavigationGroupOpenName,
  baseStyles,
  event,
  EventEmitter,
  i18n,
  I18nService,
  id,
  property,
  querySlot,
  querySlotAll,
  reverseAnimation,
  state,
  syncProps,
  syncPropsForAllItems,
} from '@cds/core/internal';
import styles from './navigation-group.element.scss';
import { CdsNavigationItem } from './navigation-item.element';
import { CdsNavigationStart } from './navigation-start.element';

export const CdsNavigationGroupTagName = 'cds-navigation-group';

/**
 *
 * ```typescript
 * import '@cds/core/navigation/register.js';
 * ```
 *
 * ```html
 * <cds-navigation-group>
 *   <cds-navigation-start></cds-navigation-start>
 *    <cds-navigation-item><a href="/home">Home</cds-navigation-item>
 *    <cds-navigation-item><a href="/account">Account</cds-navigation-item>
 * </cds-navigation-group>
 * ```
 *
 * @beta
 * @element cds-navigation-group
 * @event expandedChange - notify when the user has clicked the navigation expand/collapse button
 * @cssprop --animation-duration
 * @cssprop --animation-easing
 * @cssprop --background
 * @slot
 */
@animate({
  expanded: {
    true: AnimationNavigationGroupOpenName,
    false: reverseAnimation(AnimationNavigationGroupOpenName),
  },
})
export class CdsNavigationGroup extends LitElement {
  @property({ type: String })
  cdsMotion = 'on';

  // Keep this from polluting the wca output and causing @cds/angular issues when the directives are generated.
  /** @private **/
  @event()
  expandedChange: EventEmitter<boolean>;

  @event()
  cdsMotionChange: EventEmitter<string>;

  /**
   * @desc
   * Associate the (projected) cds-navigation-button with group-items-wrapper (aria-labelledby)
   *
   * @private
   */
  @id() navigationGroupId: string;

  @i18n() i18n = I18nService.keys.navigation;

  /**
   * @description
   * Getter method for a reference to the selector cds-navigation-group > cds-navigation-start
   * This lets each group flag its cds-navigation-start element and sync that info down. This is
   * needed because cds-navigation-start elements can be used at the root level and inside
   * cds-navigation-group elements.
   *
   * @private
   */
  @state()
  private get isGroupStart(): boolean {
    return !!this.groupStart;
  }

  @property({ type: Boolean, reflect: true })
  expanded = false;

  @property({ type: Boolean })
  active: boolean;

  /**
   * @desc
   * The value of this property is passed down to start and item children. It is used to query for visible items when
   * managing focus with key events in the root cds-navigation element.
   *
   * Note: eslint-disable  @typescript-eslint/no-unused-vars isn't ignoring the line
   // eslint error happens because the value is set but never read.

   * @private
   */

  @state()
  expandedGroup = false;

  /**
   * @desc
   *
   * Used to coordinate css things and the keyboard navigation focus changes.
   */
  hasFocus = false;

  @querySlot(':scope > cds-navigation-start', { assign: 'group-start' })
  protected groupStart: CdsNavigationStart;

  @querySlotAll(':scope > cds-navigation-item')
  protected groupItems: NodeListOf<CdsNavigationItem>;

  @querySlotAll(':scope > cds-navigation-group')
  protected nestedGroups: NodeListOf<CdsNavigationItem>;

  render() {
    return html`
      <div class="private-host" cds-layout="vertical wrap:none align:horizontal-stretch">
        <slot name="group-start"></slot>
        <div
          class="group-items-wrapper"
          aria-hidden="${!this.expandedGroup}"
          aria-labelledby="${this.navigationGroupId}"
        >
          <div class="group-items-container" aria-expanded="${this.expanded}">
            <div class="navigation-group-items" cds-layout="vertical wrap:none align:horizontal-stretch" role="list">
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  static get styles() {
    return [baseStyles, styles];
  }

  private toggle() {
    this.expandedChange.emit(!this.expanded);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.groupStart.removeEventListener('click', this.toggle.bind(this));
  }

  protected firstUpdated(props: PropertyValues<this>) {
    super.firstUpdated(props);
    if (this.groupStart) {
      this.groupStart.addEventListener('click', this.toggle.bind(this));
    }
  }

  updated(props: PropertyValues<this>) {
    super.updated(props);
    if (props.has('expanded')) {
      this.expandedGroup = this.expanded;
    }

    if (this.groupStart) {
      syncProps(this.groupStart, this, {
        active: true,
        expanded: true,
        isGroupStart: this.isGroupStart,
        navigationGroupId: true,
      });
    }

    syncPropsForAllItems(Array.from(this.groupItems), this, {
      expandedGroup: true,
    });
  }
}
