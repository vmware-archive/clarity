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
  Injector,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  SkipSelf,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { Expand } from '../../utils/expand/providers/expand';
import { ClrCommonStrings } from '../../utils/i18n/common-strings.interface';
import { UNIQUE_ID, UNIQUE_ID_PROVIDER } from '../../utils/id-generator/id-generator.service';
import { LoadingListener } from '../../utils/loading/loading-listener';
import { DeclarativeTreeNodeModel } from './models/declarative-tree-node.model';
import { ClrSelectedState } from './models/selected-state.enum';
import { TreeNodeModel } from './models/tree-node.model';
import { TREE_FEATURES_PROVIDER, TreeFeaturesService } from './tree-features.service';

@Component({
  selector: 'clr-tree-node',
  templateUrl: './tree-node.html',
  providers: [UNIQUE_ID_PROVIDER, TREE_FEATURES_PROVIDER, Expand, { provide: LoadingListener, useExisting: Expand }],
  animations: [
    trigger('childNodesState', [
      state('expanded', style({ height: '*', 'overflow-y': 'hidden' })),
      state('collapsed', style({ height: 0, 'overflow-y': 'hidden' })),
      transition('expanded <=> collapsed', animate('0.2s ease-in-out')),
    ]),
  ],
  host: { '[class.clr-tree-node]': 'true' },
})
export class ClrTreeNode<T> implements OnInit, OnDestroy {
  STATES = ClrSelectedState;

  constructor(
    @Inject(UNIQUE_ID) public nodeId: string,
    @Optional()
    @SkipSelf()
    parent: ClrTreeNode<T>,
    public featuresService: TreeFeaturesService<T>,
    public expandService: Expand,
    public commonStrings: ClrCommonStrings,
    injector: Injector
  ) {
    if (this.featuresService.recursion) {
      // I'm completely stuck, we have to hack into private properties until either
      // https://github.com/angular/angular/issues/14935 or https://github.com/angular/angular/issues/15998
      // are fixed
      this._model = (<any>injector).view.context.clrModel;
    } else {
      // Force cast for now, not sure how to tie the correct type here to featuresService.recursion
      this._model = new DeclarativeTreeNodeModel(parent ? <DeclarativeTreeNodeModel<T>>parent._model : null);
    }
  }

  _model: TreeNodeModel<T>;

  isExpandable() {
    if (typeof this.expandable !== 'undefined') {
      return this.expandable;
    }
    return !!this.expandService.expandable || this._model.children.length > 0;
  }

  @Input('clrSelected')
  get selected(): ClrSelectedState | boolean {
    return this._model.selected.value;
  }
  set selected(value: ClrSelectedState | boolean) {
    this.featuresService.selectable = true;
    // Gracefully handle falsy states like null or undefined because it's just easier than answering questions.
    // This shouldn't happen with strict typing on the app's side, but it's not up to us.
    if (value === null || typeof value === 'undefined') {
      value = ClrSelectedState.UNSELECTED;
    }
    // We match booleans to the corresponding ClrSelectedState
    if (typeof value === 'boolean') {
      value = value ? ClrSelectedState.SELECTED : ClrSelectedState.UNSELECTED;
    }
    // We propagate only if the tree is in smart mode
    this._model.setSelected(value, this.featuresService.eager, this.featuresService.eager);
  }

  // We need an async EventEmitter or we will trigger chocolate errors like it's 2016.
  @Output('clrSelectedChange') selectedChange = new EventEmitter<ClrSelectedState>(true);

  @HostBinding('attr.role')
  get treeNodeRole(): string {
    return this._model.parent ? 'treeitem' : 'tree';
  }

  @HostBinding('attr.aria-multiselectable')
  get rootAriaMultiSelectable(): boolean {
    if (this._model.parent || !this.featuresService.selectable) {
      return null;
    } else {
      return true;
    }
  }

  @HostBinding('attr.aria-selected')
  get ariaSelected(): boolean {
    return this.featuresService.selectable ? this._model.selected.value === ClrSelectedState.SELECTED : null;
  }

  // Allows the consumer to override our logic deciding if a node is expandable.
  // Useful for recursive trees that don't want to pre-load one level ahead just to know which nodes are expandable.
  @Input('clrExpandable') expandable: boolean | undefined;

  // I'm caving on this, for tree nodes I think we can tolerate having a two-way binding on the component
  // rather than enforce the clrIfExpanded structural directive for dynamic cases. Mostly because for the smart
  // case, you can't use a structural directive, it would need to go on an ng-container.
  @Input('clrExpanded')
  get expanded() {
    return this.expandService.expanded;
  }
  set expanded(value: boolean) {
    this.expandService.expanded = value;
  }

  @Output('clrExpandedChange') expandedChange = new EventEmitter<boolean>();

  private subscriptions: Subscription[] = [];

  ngOnInit() {
    this.subscriptions.push(this._model.selected.subscribe(value => this.selectedChange.emit(value)));
    this.subscriptions.push(this.expandService.expandChange.subscribe(value => this.expandedChange.emit(value)));
  }

  ngOnDestroy() {
    this._model.destroy();
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
