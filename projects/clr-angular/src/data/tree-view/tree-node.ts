/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { animate, style, transition, trigger, state } from '@angular/animations';
import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Inject,
  Injector,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  PLATFORM_ID,
  QueryList,
  SkipSelf,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { KeyCodes } from './../../utils/enums/key-codes.enum';
import { IfExpandService } from '../../utils/conditional/if-expanded.service';
import { keyValidator, preventArrowKeyScroll } from '../../utils/focus/key-focus/util';
import { ClrCommonStringsService } from '../../utils/i18n/common-strings.service';
import { UNIQUE_ID, UNIQUE_ID_PROVIDER } from '../../utils/id-generator/id-generator.service';
import { LoadingListener } from '../../utils/loading/loading-listener';
import { DeclarativeTreeNodeModel } from './models/declarative-tree-node.model';
import { ClrSelectedState } from './models/selected-state.enum';
import { TreeNodeModel } from './models/tree-node.model';
import { TreeFeaturesService, TREE_FEATURES_PROVIDER } from './tree-features.service';
import { TreeFocusManagerService } from './tree-focus-manager.service';
import { ClrTreeNodeLink } from './tree-node-link';

const LVIEW_CONTEXT_INDEX = 8;

@Component({
  selector: 'clr-tree-node',
  templateUrl: './tree-node.html',
  providers: [
    UNIQUE_ID_PROVIDER,
    TREE_FEATURES_PROVIDER,
    IfExpandService,
    { provide: LoadingListener, useExisting: IfExpandService },
  ],
  animations: [
    trigger('toggleChildrenAnim', [
      transition('collapsed => expanded', [style({ height: 0 }), animate(200, style({ height: '*' }))]),
      transition('expanded => collapsed', [style({ height: '*' }), animate(200, style({ height: 0 }))]),
      state('expanded', style({ height: '*', 'overflow-y': 'visible' })),
      state('collapsed', style({ height: 0 })),
    ]),
  ],
  host: {
    '[attr.role]': '"treeitem"',
    '[class.clr-tree-node]': 'true',
  },
})
export class ClrTreeNode<T> implements OnInit, OnDestroy {
  STATES = ClrSelectedState;
  private skipEmitChange = false;

  constructor(
    @Inject(UNIQUE_ID) public nodeId: string,
    @Inject(PLATFORM_ID) private platformId: any,
    @Optional()
    @SkipSelf()
    parent: ClrTreeNode<T>,
    public featuresService: TreeFeaturesService<T>,
    public expandService: IfExpandService,
    public commonStrings: ClrCommonStringsService,
    private focusManager: TreeFocusManagerService<T>,
    injector: Injector
  ) {
    if (this.featuresService.recursion) {
      // I'm completely stuck, we have to hack into private properties until either
      // https://github.com/angular/angular/issues/14935 or https://github.com/angular/angular/issues/15998
      // are fixed
      // This is for non-ivy implementations
      if ((injector as any).view) {
        this._model = (injector as any).view.context.clrModel;
      } else {
        // Ivy puts this on a specific index of a _lView property
        this._model = (injector as any)._lView[LVIEW_CONTEXT_INDEX].clrModel;
      }
    } else {
      // Force cast for now, not sure how to tie the correct type here to featuresService.recursion
      this._model = new DeclarativeTreeNodeModel(parent ? (parent._model as DeclarativeTreeNodeModel<T>) : null);
    }
    this._model.nodeId = this.nodeId;
  }

  _model: TreeNodeModel<T>;

  isExpandable() {
    if (typeof this.expandable !== 'undefined') {
      return this.expandable;
    }
    return !!this.expandService.expandable || (this._model.children && this._model.children.length > 0);
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
    // We propagate only if the tree is in smart mode, and skip emitting the output when we set the input
    // See https://github.com/vmware/clarity/issues/3073
    this.skipEmitChange = true;
    this._model.setSelected(value, this.featuresService.eager, this.featuresService.eager);
    this.skipEmitChange = false;
  }

  @Output('clrSelectedChange') selectedChange = new EventEmitter<ClrSelectedState>(false);

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
  get expanded(): boolean {
    return this.expandService.expanded;
  }
  set expanded(value: boolean) {
    this.expandService.expanded = value;
  }

  @Output('clrExpandedChange') expandedChange = new EventEmitter<boolean>();

  private subscriptions: Subscription[] = [];

  contentContainerTabindex = -1;
  @ViewChild('contentContainer', { read: ElementRef, static: true })
  private contentContainer: ElementRef;

  ngOnInit() {
    this._model.expanded = this.expanded;
    this.subscriptions.push(
      this._model.selected.pipe(filter(() => !this.skipEmitChange)).subscribe(value => {
        this.selectedChange.emit(value);
      })
    );
    this.subscriptions.push(
      this.expandService.expandChange.subscribe(value => {
        this.expandedChange.emit(value);
        this._model.expanded = value;
      })
    );
    this.subscriptions.push(
      this.focusManager.focusRequest.subscribe(nodeId => {
        if (this.nodeId === nodeId) {
          this.focusTreeNode();
        }
      }),
      this.focusManager.focusChange.subscribe(nodeId => {
        this.checkTabIndex(nodeId);
      })
    );
  }

  ngOnDestroy() {
    this._model.destroy();
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  // @ContentChild would have been more succinct
  // but it doesn't offer a way to query only an immediate child
  @ContentChildren(ClrTreeNodeLink, { descendants: false })
  private treeNodeLinkList: QueryList<ClrTreeNodeLink>;

  get treeNodeLink() {
    return this.treeNodeLinkList && this.treeNodeLinkList.first;
  }

  private setTabIndex(value: number) {
    this.contentContainerTabindex = value;
    this.contentContainer.nativeElement.setAttribute('tabindex', value);
  }

  private checkTabIndex(nodeId: string): void {
    if (isPlatformBrowser(this.platformId) && this.nodeId !== nodeId && this.contentContainerTabindex !== -1) {
      this.setTabIndex(-1);
    }
  }

  focusTreeNode(): void {
    if (isPlatformBrowser(this.platformId) && document.activeElement !== this.contentContainer.nativeElement) {
      this.setTabIndex(0);
      this.contentContainer.nativeElement.focus();
    }
  }

  broadcastFocusOnContainer() {
    this.focusManager.broadcastFocusedNode(this.nodeId);
  }

  onKeyDown(event: KeyboardEvent) {
    // Two reasons to prevent default behavior:
    // 1. to prevent scrolling on arrow keys
    // 2. Assistive Technology focus differs from Keyboard focus behavior.
    //    By default, pressing arrow key makes AT focus go into the nested content of the item.
    preventArrowKeyScroll(event);

    // https://www.w3.org/TR/wai-aria-practices-1.1/#keyboard-interaction-22
    switch (keyValidator(event.key)) {
      case KeyCodes.ArrowUp:
        this.focusManager.focusNodeAbove(this._model);
        break;
      case KeyCodes.ArrowDown:
        this.focusManager.focusNodeBelow(this._model);
        break;
      case KeyCodes.ArrowRight:
        this.expandOrFocusFirstChild();
        break;
      case KeyCodes.ArrowLeft:
        this.collapseOrFocusParent();
        break;
      case KeyCodes.Home:
        this.focusManager.focusFirstVisibleNode();
        break;
      case KeyCodes.End:
        this.focusManager.focusLastVisibleNode();
        break;
      case KeyCodes.Enter:
        this.triggerDefaultAction();
        break;
      case KeyCodes.Space:
        // to prevent scrolling on space key in this specific case
        event.preventDefault();
        this.triggerDefaultAction();
        break;
      default:
        break;
    }
  }

  private expandOrFocusFirstChild() {
    if (this.expanded) {
      // if the node is already expanded and has children, focus its very first child
      if (this._model.children.length > 0) {
        this.focusManager.focusNodeBelow(this._model);
      }
    } else {
      // we must check if the node is expandable, in order to set .expanded to true from false
      // because we shouldn't set .expanded to true if it's not expandable node
      if (this.isExpandable()) {
        this.expandService.expanded = true;
      }
    }
  }

  private collapseOrFocusParent() {
    if (this.expanded) {
      this.expandService.expanded = false;
    } else {
      this.focusManager.focusParent(this._model);
    }
  }

  private triggerDefaultAction() {
    if (this.treeNodeLink) {
      this.treeNodeLink.activate();
    } else {
      if (this.featuresService.selectable) {
        this._model.toggleSelection(this.featuresService.eager);
      }
    }
  }
}
