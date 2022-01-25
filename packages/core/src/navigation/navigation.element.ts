/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement, PropertyValues } from 'lit';
import {
  Animatable,
  animate,
  baseStyles,
  event,
  EventEmitter,
  i18n,
  I18nService,
  state,
  isVisible,
  onKey,
  property,
  querySlot,
  querySlotAll,
  reverseAnimation,
  setAttributes,
  syncProps,
  syncPropsForAllItems,
} from '@cds/core/internal';
import styles from './navigation.element.scss';

import {
  FocusableElement,
  getNextFocusElement,
  getPreviousFocusElement,
  removeFocus,
  setFocus,
  visibleElement,
} from './utils/index.js';
import { CdsNavigationGroup } from './navigation-group.element.js';
import { CdsNavigationStart } from './navigation-start.element.js';
import { CdsNavigationItem } from './navigation-item.element.js';
import { CdsDivider } from '@cds/core/divider/index.js';
import { AnimationNavigationOpenName } from '../internal/motion/animations/cds-navigation-open.js';

export const CdsNavigationTagName = 'cds-navigation';

/**
 * ```typescript
 * import '@cds/core/navigation/register.js';
 * ```
 *
 * ```html
 *  <cds-navigation>
 *    <cds-navigation-item><a href="/home">Home</cds-navigation-item>
 *    <cds-navigation-item><a href="/account">Account</cds-navigation-item>
 *  </cds-navigation>
 * ```
 *
 * @beta
 * @element cds-navigation
 * @event expandedChange - notify when the user has clicked the navigation expand/collapse button
 * @cssprop --animation-duration
 * @cssprop --animation-easing
 * @cssprop --background
 * @cssprop --collapsed-width
 * @cssprop --expanded-width
 * @cssprop --font-size
 * @cssprop --font-weight
 * @cssprop --letter-spacing
 * @cssprop --line-height
 * @cssprop --nested-padding
 * @cssprop --padding
 * @slot
 * @slot - cds-navigation-substart - project content below the navigation toggle button
 * @slot - cds-navigation-end - project content below the scrollable section
 */
@animate({
  expanded: {
    true: AnimationNavigationOpenName,
    false: reverseAnimation(AnimationNavigationOpenName),
  },
})
export class CdsNavigation extends LitElement implements Animatable {
  expandedRoot = false;

  @property({ type: String })
  cdsMotion = 'on';

  @event()
  protected expandedChange: EventEmitter<boolean>;

  @event()
  cdsMotionChange: EventEmitter<string>;

  /**
   * This is used to sync down the information to this.navigationGroupItems
   *
   * @type { boolean }
   * @protected
   */
  @state({ type: Boolean })
  protected groupItem = true;

  /**
   *
   * Vertical navigation elements can be either wide or narrow. Expanded indicates it should be wide.
   * When navigation is wide cds-navigation-start button elements and cds-navigation-item a elements display
   * text. When it is narrow they do not (consumer should provide an icon that stays visible).

   * @type {boolean}
   */
  @property({ type: Boolean })
  expanded = false;

  @i18n() i18n = I18nService.keys.navigation;

  /**
   * The end slot that items can be projected into with slot="cds-navigation-end"
   */
  @querySlot('[slot="cds-navigation-end"]', { assign: 'cds-navigation-end' })
  protected navigationEnd: HTMLElement;

  /**
   * This slot query is used to identify and manage all focusable elements needed for arrow key navigation
   * TODO: How to add in forms selector attribute and other things that are not FocusableElements like I use here
   * tbd - I don;'t have an answer yet.
   */
  @querySlotAll('cds-navigation-group > cds-navigation-start, cds-navigation-item:not([disabled])')
  protected allNavigationElements: NodeListOf<FocusableElement>;

  /**
   * Get references to all of the start elements so they can be passed state when updates are made.
   */
  @querySlotAll('cds-navigation-start')
  protected navigationStartRefs: NodeListOf<CdsNavigationStart>;
  /** make navigation-body default and eliminate extra assigns **?
  /**
   * query for cds-divider  and project into navigation-body slot.
   */
  @querySlotAll(':scope > cds-divider')
  protected rootDividers: NodeListOf<CdsDivider>;

  /**
   * query for root level groups and project them into the navigation-body slot.
   */
  @querySlotAll(':scope > cds-navigation-group')
  protected rootNavigationGroups: NodeListOf<CdsNavigationGroup>;

  /**
   * query for root level items and project them into the navigation-body slot.
   */
  @querySlotAll(':scope > cds-navigation-item')
  protected rootNavigationItems: NodeListOf<CdsNavigationItem>;

  /**
   * query for the root level start items and project them into the navigation-start slot.
   */
  @querySlot(':scope > cds-navigation-start', { assign: 'navigation-start' })
  protected rootNavigationStart: CdsNavigationStart;

  /**
   * query for items inside a cds-navigation-group, used to pass state down
   */
  @querySlotAll(':scope > cds-navigation-group > cds-navigation-item')
  protected navigationGroupItems: NodeListOf<CdsNavigationGroup>;

  /**
   * query for all cds-navigation elements, used to pass state down
   */
  @querySlotAll('cds-navigation-item')
  protected navigationItemRefs: NodeListOf<CdsNavigationItem>;

  /**
   * query for all groups (including any nested groups), used ot pass state down
   */
  @querySlotAll('cds-navigation-group')
  protected navigationGroupRefs: NodeListOf<CdsNavigationGroup>;

  private toggle() {
    this.expandedChange.emit(!this.expanded);
  }

  private get currentActiveItem() {
    return this.visibleChildren.find(c => c.id === this.ariaActiveDescendant);
  }

  protected get endTemplate() {
    return this.navigationEnd
      ? html`
          <div class="navigation-end" cds-layout="vertical align:horizontal-stretch">
            <slot name="cds-navigation-end"></slot>
          </div>
        `
      : '';
  }

  protected get startTemplate() {
    let returnHTML;

    this.rootNavigationStart
      ? (returnHTML = html`
          <div class="navigation-start" cds-layout="vertical align:horizontal-stretch">
            <slot @slotchange="${() => this.addStartEventListener()}" name="navigation-start"></slot>
            <cds-divider class="start-divider"></cds-divider>
          </div>
        `)
      : (returnHTML = '');

    return returnHTML;
  }

  protected get visibleChildren(): FocusableElement[] {
    return Array.from(this.allNavigationElements).filter(n => isVisible(n));
  }

  addStartEventListener() {
    // This is controlled by the slotchange event on the navigation-start slot
    // Make sure we reattach the click handler for toggle if consumer changes the start element (e.g *ngIf)
    if (this.rootNavigationStart) {
      this.rootNavigationStart.addEventListener('click', this.toggle.bind(this));
    }
  }

  firstUpdated(props: PropertyValues) {
    super.firstUpdated(props);
    // set all visible navigation elements to tabindex = -1
    this.allNavigationElements.forEach(item => {
      setAttributes(item, ['tabindex', '-1']);
    });

    const itemWrapper = this.shadowRoot?.querySelector('#item-container');
    itemWrapper?.addEventListener('focus', this.initItemKeys.bind(this));
    itemWrapper?.addEventListener('keydown', this.handleItemKeys.bind(this));
    itemWrapper?.addEventListener('blur', this.blurItemKeys.bind(this));
  }

  private blurItemKeys() {
    if (this.currentActiveItem) {
      removeFocus(this.currentActiveItem);
    }
  }

  private focusRootStart() {
    if (this.rootNavigationStart) {
      setFocus(this.rootNavigationStart);
    }
  }

  private blurRootStart() {
    if (this.rootNavigationStart) {
      removeFocus(this.rootNavigationStart);
    }
  }

  private initItemKeys() {
    if (!this.currentActiveItem) {
      setFocus(this.focusableElements[0]);
      this.ariaActiveDescendant = this.focusableElements[0].id;
    } else {
      const focusElement = this.currentActiveItem ? this.currentActiveItem : this.allNavigationElements[0];
      setFocus(focusElement);
      this.ariaActiveDescendant = focusElement.id;
    }
  }

  private get focusableElements() {
    return Array.from(this.allNavigationElements).filter(visibleElement);
  }

  private handleItemKeys(event: KeyboardEvent) {
    onKey('arrow-down', event, () => {
      if (this.currentActiveItem) {
        removeFocus(this.currentActiveItem);
        const next = getNextFocusElement(this.currentActiveItem, this.focusableElements);
        this.ariaActiveDescendant = next.id;
        setFocus(next);
        event.preventDefault();
      }
    });

    onKey('arrow-up', event, () => {
      if (this.currentActiveItem) {
        removeFocus(this.currentActiveItem);
        const previous = getPreviousFocusElement(this.currentActiveItem, this.focusableElements);
        this.ariaActiveDescendant = previous.id;
        setFocus(previous);
        event.preventDefault();
      }
    });

    onKey('arrow-right', event, () => {
      const groupParent = this.currentActiveItem?.closest('cds-navigation-group');

      if (groupParent && !groupParent.expanded) {
        groupParent.expandedChange.emit(!groupParent.expanded);
        return;
      }
    });

    onKey('arrow-left', event, () => {
      const groupParent = this.currentActiveItem?.closest('cds-navigation-group');

      if (this.currentActiveItem?.tagName === 'CDS-NAVIGATION-ITEM' && !!groupParent) {
        const groupStartElement = groupParent?.querySelector('cds-navigation-start');
        removeFocus(this.currentActiveItem as FocusableElement);
        this.ariaActiveDescendant = groupStartElement?.id ?? null;
        setFocus(groupStartElement as FocusableElement);
        return;
      }

      if (groupParent && groupParent.expanded) {
        groupParent.expandedChange.emit(!groupParent.expanded);
        return;
      }
    });

    onKey('home', event, () => {
      if (this.currentActiveItem) {
        removeFocus(this.currentActiveItem);
        const home = this.focusableElements[0];
        this.ariaActiveDescendant = home.id;
        setFocus(home);
      }
    });

    onKey('end', event, () => {
      if (this.currentActiveItem) {
        removeFocus(this.currentActiveItem);
        const end = this.focusableElements[this.focusableElements.length - 1];
        this.ariaActiveDescendant = end.id;
        setFocus(end);
      }
    });

    onKey('enter', event, () => {
      // focusElement is either an Anchor or a button and we want to click it here
      if (this.currentActiveItem?.focusElement) {
        this.currentActiveItem?.focusElement.click();
      }
    });

    onKey('space', event, () => {
      // focusElement is either an Anchor or a button and we want to click it here
      if (this.currentActiveItem?.focusElement) {
        this.currentActiveItem?.focusElement.click();
      }
    });
  }

  private handleRootStartKeys(event: KeyboardEvent) {
    onKey('arrow-right', event, () => {
      if (!this.expanded) {
        this.toggle();
        return;
      }
    });

    onKey('arrow-left', event, () => {
      if (this.expanded) {
        this.toggle();
        return;
      }
    });
  }

  connectedCallback() {
    super.connectedCallback();
    this.role = 'list';
    this.rootNavigationStart?.addEventListener('focus', this.focusRootStart.bind(this));
    this.rootNavigationStart?.addEventListener('blur', this.blurRootStart.bind(this));
    this.rootNavigationStart?.addEventListener('keydown', this.handleRootStartKeys.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.rootNavigationStart) {
      this.rootNavigationStart.removeEventListener('click', this.toggle.bind(this));
    }
  }

  render() {
    return html`<div class="private-host" aria-label="${this.i18n.navigationLabel}" cds-layout="vertical wrap:none">
      ${this.startTemplate}
      <slot name="cds-navigation-substart"></slot>
      <nav class="navigation-body-wrapper">
        <div .ariaActiveDescendant=${this.ariaActiveDescendant} tabindex="0" id="item-container">
          <div class="navigation-body" cds-layout="vertical wrap:none align:horizontal-stretch">
            <slot></slot>
          </div>
        </div>
      </nav>
      ${this.endTemplate}
    </div>`;
  }

  updated(props: PropertyValues<this>) {
    super.updated(props);

    if (props.has('expanded')) {
      this.expandedRoot = this.expanded;
    }

    this.updateChildrenProps();
  }

  updateChildrenProps() {
    if (this.navigationGroupItems) {
      syncPropsForAllItems(Array.from(this.navigationGroupItems), this, { groupItem: true });
    }

    if (this.navigationItemRefs) {
      syncPropsForAllItems(Array.from(this.navigationItemRefs), this, {
        expanded: true,
      });
    }

    if (this.navigationStartRefs) {
      syncPropsForAllItems(Array.from(this.navigationStartRefs), this, {
        expandedRoot: true,
      });
    }

    if (this.rootNavigationStart) {
      syncProps(this.rootNavigationStart, this, {
        expanded: this.expanded,
      });
    }

    if (this.rootNavigationItems.length > 0) {
      syncPropsForAllItems(Array.from(this.rootNavigationItems), this, {
        expanded: this.expanded,
      });
    }

    if (this.navigationGroupRefs.length > 0) {
      syncPropsForAllItems(Array.from(this.navigationGroupRefs), this, {
        layout: true,
      });
    }
  }

  static get styles() {
    return [baseStyles, styles];
  }
}
