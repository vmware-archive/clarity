/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { animate, state, style, transition, trigger } from '@angular/animations';
import {
  Component,
  EventEmitter,
  HostBinding,
  Inject,
  Input,
  OnDestroy,
  Optional,
  Output,
  SkipSelf,
} from '@angular/core';

import { Expand } from '../../utils/expand/providers/expand';
import { UNIQUE_ID, UNIQUE_ID_PROVIDER } from '../../utils/id-generator/id-generator.service';
import { LoadingListener } from '../../utils/loading/loading-listener';

import { AbstractTreeSelection } from './abstract-tree-selection';
import { clrTreeSelectionProviderFactory } from './providers/tree-selection.provider';
import { TreeSelectionService } from './providers/tree-selection.service';
import { ClrCommonStrings } from '../../utils/i18n/common-strings.interface';

@Component({
  selector: 'clr-tree-node',
  templateUrl: './tree-node.html',
  providers: [
    Expand,
    { provide: LoadingListener, useExisting: Expand },
    {
      provide: TreeSelectionService,
      useFactory: clrTreeSelectionProviderFactory,
      deps: [[new Optional(), new SkipSelf(), TreeSelectionService]],
    },
    UNIQUE_ID_PROVIDER,
  ],
  animations: [
    trigger('childNodesState', [
      state('expanded', style({ height: '*', 'overflow-y': 'hidden' })),
      state('collapsed', style({ height: 0, 'overflow-y': 'hidden' })),
      transition('expanded <=> collapsed', animate('0.2s ease-in-out')),
    ]),
  ],
  host: { '[class.clr-tree-node]': 'true' },
})
export class ClrTreeNode extends AbstractTreeSelection implements OnDestroy {
  constructor(
    public nodeExpand: Expand,
    @Optional()
    @SkipSelf()
    public parent: ClrTreeNode,
    public treeSelectionService: TreeSelectionService,
    @Inject(UNIQUE_ID) public nodeId: string,
    public commonStrings: ClrCommonStrings
  ) {
    super(parent);
    if (this.parent) {
      this.parent.register(this);
    }
  }

  private _children: ClrTreeNode[] = [];

  get children(): ClrTreeNode[] {
    return this._children;
  }

  /* Registration */

  checkIfChildNodeRegistered(node: ClrTreeNode): boolean {
    return this.children.indexOf(node) > -1;
  }

  // TODO: This should ideally be in AbstractTreeSelection
  // Tried doing this but ran into some issues and also ran out of time.
  // Will get this done later.
  register(node: ClrTreeNode): void {
    if (!this.checkIfChildNodeRegistered(node)) {
      this.children.push(node);
      if (this.selectable) {
        if (this.selected) {
          node.parentChanged(this.selected);
        }
      }
    }
  }

  // TODO: This should ideally be in AbstractTreeSelection
  // Tried doing this but ran into some issues and also ran out of time.
  // Will get this done later.
  unregister(node: ClrTreeNode): void {
    const index = this.children.indexOf(node);
    if (index > -1) {
      this.children.splice(index, 1);
    }
  }

  /* Selection */

  activateSelection(): void {
    if (this.treeSelectionService && !this.treeSelectionService.selectable) {
      this.treeSelectionService.selectable = true;
    }
  }

  @Input('clrSelected')
  public set nodeSelected(value: boolean) {
    // required for recursive trees to discard unset inputs.
    this.activateSelection();
    if (value === undefined || value === null) {
      return;
    }
    if (this.selected !== value) {
      this.selected = value;
    }
  }

  @Output('clrSelectedChange') nodeSelectedChange: EventEmitter<boolean> = new EventEmitter<boolean>(true);

  selectedChanged(): void {
    this.nodeSelectedChange.emit(this.selected);
  }

  get selectable(): boolean {
    if (this.treeSelectionService) {
      return this.treeSelectionService.selectable;
    }
    return false;
  }

  @Input('clrIndeterminate')
  set nodeIndeterminate(value: boolean) {
    this.indeterminate = value;
    this.activateSelection();
  }

  @Output('clrIndeterminateChange') nodeIndeterminateChanged: EventEmitter<boolean> = new EventEmitter<boolean>(true);

  indeterminateChanged(): void {
    this.nodeIndeterminateChanged.emit(this.indeterminate);
  }

  /* Expansion */

  toggleExpand(): void {
    this.nodeExpand.expanded = !this.nodeExpand.expanded;
  }

  public get caretDirection(): string {
    return this.nodeExpand.expanded ? 'down' : 'right';
  }

  public get caretTitle(): string {
    return this.nodeExpand.expanded ? this.commonStrings.collapse : this.commonStrings.expand;
  }

  get expanded(): boolean {
    return this.nodeExpand.expanded;
  }

  set expanded(value: boolean) {
    value = !!value;
    if (this.nodeExpand.expanded !== value) {
      this.nodeExpand.expanded = value;
    }
  }

  get state(): string {
    return this.expanded && !this.nodeExpand.loading ? 'expanded' : 'collapsed';
  }

  @HostBinding('attr.role')
  get treeNodeRole(): string {
    return this.parent ? 'treeitem' : 'tree';
  }

  @HostBinding('attr.aria-multiselectable')
  get rootAriaMultiSelectable(): boolean {
    if (this.parent || !this.selectable) {
      return null;
    } else {
      return true;
    }
  }

  @HostBinding('attr.aria-selected')
  get ariaSelected(): boolean {
    return this.selectable ? this.selected : null;
  }

  get ariaTreeNodeChildrenRole(): string {
    return this.children.length > 0 ? 'group' : null;
  }

  /* Lifecycle */
  ngOnDestroy() {
    if (this.parent) {
      this.parent.unregister(this);
    }
  }
}
