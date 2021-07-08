/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  AriaBooleanAttributeValues,
  arrayHead,
  arrayTail,
  baseStyles,
  state,
  isVisible,
  nextInArray,
  onAnyKey,
  onKey,
  previousInArray,
  property,
  querySlot,
  querySlotAll,
  syncProps,
} from '@cds/core/internal';
import { html, LitElement, PropertyValues } from 'lit';
import { CdsTreeItem } from './tree-item.element.js';
import styles from './tree.element.scss';

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
 * @element cds-tree
 * @slot - Content slot for inside the tree
 */
export class CdsTree extends LitElement {
  @state({ type: String, reflect: true, attribute: 'role' })
  protected role = 'tree';

  @property({ type: Boolean, attribute: 'multi-select' })
  multiSelect = false;

  @state({ type: String, reflect: true, attribute: 'aria-activedescendant' })
  ariaActiveDescendant: string;

  @state({ type: String, reflect: true, attribute: 'aria-multiselectable' })
  protected ariaMultiSelectable: AriaBooleanAttributeValues = 'false';

  @querySlot('cds-tree-item') private firstChildItem: CdsTreeItem;

  @querySlotAll('cds-tree-item') private childrenItems: NodeListOf<CdsTreeItem>;

  connectedCallback() {
    super.connectedCallback();
    this.tabIndex = 0;
    this.addEventListener('focus', this.initAriaActiveDescendant);
    this.addEventListener('click', this.clickHandler);
    this.addEventListener('keydown', this.keyboardNavigationHandler);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }

  updated(props: PropertyValues<this>) {
    super.updated(props);
    this.ariaMultiSelectable = this.multiSelect ? 'true' : 'false';
    this.childrenItems.forEach(c => syncProps(c, this, { multiSelect: this.multiSelect }));
  }

  private clickHandler(e: any) {
    if (e.target instanceof CdsTreeItem) {
      const match = this.visibleChildren.find(c => c === e.target);
      if (match) {
        this.setAriaActiveDescendant(match);
      }
    }
  }

  private get currentActiveItem() {
    return this.visibleChildren.find(c => c.id === this.ariaActiveDescendant);
  }

  /**
   * The reason why we wait till onfocus to initialize aria-activedescendant is to
   * account for lazy loaded children.
   * */

  private initAriaActiveDescendant() {
    if (!this.currentActiveItem) {
      // If none of the nodes are selected before the tree receives focus, focus is set on the first node.
      // If one or more nodes are selected before the tree receives focus, focus is set on the first selected node.
      const focusableChild = this.visibleChildren.find(c => c.selected) || this.firstChildItem;

      if (focusableChild) {
        this.setAriaActiveDescendant(focusableChild);
      }
    }
  }

  private setAriaActiveDescendant(activeItem: CdsTreeItem) {
    if (activeItem) {
      this.ariaActiveDescendant = activeItem.id;
      activeItem.focus();
    }
  }

  /** @private */
  get visibleChildren() {
    return Array.from(this.childrenItems).filter(n => isVisible(n));
  }

  private keyboardNavigationHandler = (e: KeyboardEvent) => {
    const current = this.currentActiveItem;
    if (current && current instanceof CdsTreeItem) {
      onAnyKey(['arrow-left', 'arrow-right', 'arrow-up', 'arrow-down', 'home', 'end', 'enter', 'space'], e, () => {
        // prevent element container scroll
        // MDN references this is really the only way to prevent native browser interactions
        // https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets
        e.preventDefault();
      });

      onKey('arrow-left', e, () => {
        if (current.expandable && current.expanded) {
          current.expandedChange.emit(false);
        } else {
          const parentNode = current.parentElement;
          if (parentNode && parentNode instanceof CdsTreeItem) {
            this.setAriaActiveDescendant(parentNode);
          }
        }
      });

      onKey('arrow-right', e, () => {
        if (current.expandable) {
          if (current.expanded) {
            this.setAriaActiveDescendant(nextInArray(current, this.visibleChildren));
          } else {
            current.expandedChange.emit(true);
          }
        }
      });

      onKey('arrow-down', e, () => {
        if (current) {
          this.setAriaActiveDescendant(nextInArray(current, this.visibleChildren));
        }
      });

      onKey('arrow-up', e, () => {
        if (current) {
          this.setAriaActiveDescendant(previousInArray(current, this.visibleChildren));
        }
      });

      onKey('home', e, () => {
        if (current) {
          this.setAriaActiveDescendant(arrayHead(this.visibleChildren));
        }
      });

      onKey('end', e, () => {
        if (current) {
          this.setAriaActiveDescendant(arrayTail(this.visibleChildren));
        }
      });

      onKey('enter', e, () => {
        // activate onclick if link: https://www.w3.org/TR/wai-aria-practices/examples/treeview/treeview-2/treeview-2a.html
        // this means a treeview item should not be expandable AND contain an anchor tag at the same time
        if (current.anchorLink) {
          current.anchorLink.click();
        }

        if (current.expandable) {
          current.expandedChange.emit(!current.expanded);
        }
      });

      onKey('space', e, () => {
        // activate onclick if link: https://www.w3.org/TR/wai-aria-practices/examples/treeview/treeview-2/treeview-2a.html
        // this means a treeview item should not be expandable AND contain an anchor tag at the same time
        if (current.anchorLink) {
          current.anchorLink.click();
        }

        if (current && !current.disabled) {
          current.selectedChange.emit(!current.selected);
        }
      });
    }
  };

  render() {
    return html`<slot></slot>`;
  }

  static get styles() {
    return [baseStyles, styles];
  }
}
