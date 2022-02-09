/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  Animatable,
  animate,
  AnimationTreeItemExpandName,
  baseStyles,
  createId,
  event,
  EventEmitter,
  i18n,
  I18nService,
  property,
  querySlot,
  querySlotAll,
  reverseAnimation,
} from '@cds/core/internal';
import { html, LitElement, PropertyValues } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import styles from './tree-item.element.scss';

/**
 * Tree view is a hierarchical component that gives users access to a hierarchical set of objects displayed in a the parent-child relationship.
 *
 * ```typescript
 * import '@cds/core/tree-view/register.js';
 * ```
 *
 * ```html
 *  <cds-tree>
 *    <cds-tree-item>1</cds-tree-item>
 *    <cds-tree-item>2</cds-tree-item>
 *    <cds-tree-item>3</cds-tree-item>
 *  </cds-tree>
 * ```
 *
 * @beta
 * @element cds-tree-item
 * @slot - Content slot for inside the tree item
 * @slot expand-collapse-icon
 * @event expandedChange - notify when the user has clicked the expand / collapse button
 * @event selectedChange - notify when the user has clicked the tree item
 * @cssprop --animation-duration
 * @cssprop --animation-easing
 * @cssprop --background
 * @cssprop --color
 * @cssprop --focus-width
 * @cssprop --font-size
 * @cssprop --font-weight
 */
@animate({
  expanded: {
    true: AnimationTreeItemExpandName,
    false: reverseAnimation(AnimationTreeItemExpandName),
  },
})
export class CdsTreeItem extends LitElement implements Animatable {
  @i18n() i18n = I18nService.keys.treeview;

  @property({ type: String })
  cdsMotion = 'on';

  @event()
  cdsMotionChange: EventEmitter<string>;

  @property({ type: Boolean, reflect: true, attribute: 'multi-select' })
  multiSelect = false;

  @property({ type: Boolean })
  disabled = false;

  @property({ type: Boolean, reflect: true })
  expanded = false;

  @property({ type: Boolean, reflect: true })
  expandable = false;

  @property({ type: Boolean, reflect: true })
  indeterminate = false;

  @property({ type: Boolean, reflect: true })
  loading = false;

  @property({ type: Boolean, reflect: true })
  selected = false;

  // The :scope selector allows us to query the cds-tree-item nodes that are direct children
  @querySlotAll(':scope > cds-tree-item') private treeItemChildren: NodeListOf<CdsTreeItem>;

  // The :scope selector allows us to query for anchor tag directly inside this element as oposed to all descendents
  /** @private */
  @querySlot(':scope > a') anchorLink: HTMLAnchorElement;

  /** @private */
  @event() expandedChange: EventEmitter<boolean>;

  /** @private */
  @event() selectedChange: EventEmitter<boolean>;

  connectedCallback() {
    super.connectedCallback();
    this.tabIndex = -1;
    this.role = 'treeitem';
    if (!this.id) {
      this.id = createId();
    }
  }

  updated(props: PropertyValues<this>) {
    super.updated(props);

    if (this.treeItemChildren.length > 0) {
      this.expandable = true;
    }

    if (this.expandable) {
      this.ariaExpanded = this.expanded ? 'true' : 'false';
    } else {
      this.ariaExpanded = null;
    }

    if (this.multiSelect) {
      this.ariaSelected = this.selected ? 'true' : 'false';
    } else {
      this.ariaSelected = null;
    }

    this.ariaDisabled = this.disabled ? 'true' : 'false';
  }

  toggleExpanded() {
    this.expandedChange.emit(!this.expanded);
  }

  toggleSelected() {
    this.selectedChange.emit(!this.selected);
    if (this.anchorLink) {
      this.anchorLink.click();
    }
  }

  private onSlotChange() {
    this.treeItemChildren.forEach(i => {
      if (!i.getAttribute('slot')) {
        i.setAttribute('slot', createId());
      }
    });
    this.requestUpdate();
  }

  render() {
    return html`
      <div class="private-host" cds-layout="p-l:md">
        <div cds-layout="horizontal align:vertical-center ${this.multiSelect ? 'gap:md' : 'gap:sm'}">
          <div class="lhs-container">
            ${this.treeItemLeftHandSideTemplate}
          </div>
          <div
            class="item-content"
            cds-layout="p:sm ${this.multiSelect ? 'p-x:md' : ''} align:stretch"
            @click="${() => this.toggleSelected()}"
          >
            <span cds-layout="horizontal align:vertical-center gap:md" cds-text="lhe">
              ${this.multiSelect
                ? html`
                    <cds-internal-visual-checkbox
                      part="checkbox"
                      .disabled="${this.disabled}"
                      .indeterminate="${this.indeterminate}"
                      .selected="${this.selected}"
                    ></cds-internal-visual-checkbox>
                  `
                : html``}
              <slot @slotchange=${this.onSlotChange}></slot>
            </span>
          </div>
        </div>
        <div class="item-children" role=${ifDefined(this.expanded ? 'group' : undefined)} ?hidden="${!this.expanded}">
          ${Array.from(this.treeItemChildren).map((i: any) => html`<slot name="${i.getAttribute('slot')}"></slot>`)}
        </div>
      </div>
    `;
  }

  /**
   * This container contains one of the following depending on the state of the tree item:
   *   - caret if the tree item is expandable
   *   - progress circle if the tree item is loading its children (via an async call, etc)
   *   - nothing if the tree item is an end node
   *
   * The container with a fixed width ensures the same alignment whether or not it contains
   * a child elemeent to render.
   */
  /** @private */
  get treeItemLeftHandSideTemplate() {
    if (this.loading) {
      return html` <cds-progress-circle size="xs" aria-label="${this.i18n.loading}"></cds-progress-circle> `;
    } else if (this.expandable) {
      return html`
        <div @click="${() => this.toggleExpanded()}">
          <cds-icon class="expand-collapse-icon" part="expand-collapse-icon" shape="angle"></cds-icon>
        </div>
      `;
    } else {
      return html``;
    }
  }

  static get styles() {
    return [baseStyles, styles];
  }
}
