/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Injector,
  Input,
  OnDestroy,
  Output,
  QueryList,
  Renderer2,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { combineLatest, Subscription } from 'rxjs';
import { ClrExpandableAnimation } from '../../utils/animations/expandable-animation/expandable-animation';
import { IfExpandService } from '../../utils/conditional/if-expanded.service';
import { HostWrapper } from '../../utils/host-wrapping/host-wrapper';
import { ClrCommonStringsService } from '../../utils/i18n/common-strings.service';
import { LoadingListener } from '../../utils/loading/loading-listener';
import { ClrDatagridCell } from './datagrid-cell';
import { DatagridIfExpandService } from './datagrid-if-expanded.service';
import { DatagridDisplayMode } from './enums/display-mode.enum';
import { SelectionType } from './enums/selection-type';
import { ViewAccessor } from './interfaces/view-accessor.interface';
import { ColumnReorderService } from './providers/column-reorder.service';
import { DetailService } from './providers/detail.service';
import { DisplayModeService } from './providers/display-mode.service';
import { ExpandableRowsCount } from './providers/global-expandable-rows';
import { RowActionService } from './providers/row-action-service';
import { Selection } from './providers/selection';
import { ViewManagerUtils } from './utils/view-manager-utils';
import { WrappedRow } from './wrapped-row';

let nbRow: number = 0;

@Component({
  selector: 'clr-dg-row',
  templateUrl: './datagrid-row.html',
  host: {
    '[class.datagrid-row]': 'true',
    '[class.datagrid-selected]': 'selected',
    '[attr.aria-owns]': 'id',
    role: 'rowgroup',
  },
  providers: [
    DatagridIfExpandService,
    { provide: IfExpandService, useExisting: DatagridIfExpandService },
    { provide: LoadingListener, useExisting: DatagridIfExpandService },
  ],
})
export class ClrDatagridRow<T = any> implements AfterViewInit, OnDestroy, ViewAccessor {
  public id: string;
  public radioId: string;
  public checkboxId: string;

  /* reference to the enum so that template can access */
  public SELECTION_TYPE = SelectionType;

  @ViewChild(ClrExpandableAnimation, { static: false })
  expandAnimation: ClrExpandableAnimation;

  /**
   * Model of the row, to use for selection
   */
  @Input('clrDgItem') item: T;

  public replaced;

  public expandAnimationTrigger: boolean = false;

  constructor(
    public selection: Selection<T>,
    public rowActionService: RowActionService,
    public globalExpandable: ExpandableRowsCount,
    public expand: DatagridIfExpandService,
    public detailService: DetailService,
    private displayMode: DisplayModeService,
    private vcr: ViewContainerRef,
    private renderer: Renderer2,
    private el: ElementRef,
    public commonStrings: ClrCommonStringsService,
    private columnReorderService: ColumnReorderService
  ) {
    nbRow++;
    this.id = 'clr-dg-row' + nbRow;
    this.radioId = 'clr-dg-row-rd' + nbRow;
    this.checkboxId = 'clr-dg-row-cb' + nbRow;

    this.subscriptions.push(
      combineLatest(this.expand.replace, this.expand.expandChange).subscribe(
        ([expandReplaceValue, expandChangeValue]) => {
          if (expandReplaceValue && expandChangeValue) {
            // replaced and expanding
            this.replaced = true;
            this.renderer.addClass(this.el.nativeElement, 'datagrid-row-replaced');
          } else {
            this.replaced = false;
            // Handles these cases: not replaced and collapsing & replaced and
            // collapsing and not replaced and expanding.
            this.renderer.removeClass(this.el.nativeElement, 'datagrid-row-replaced');
          }
        }
      )
    );
  }

  private _selected = false;
  /**
   * Indicates if the row is selected
   */
  public get selected() {
    if (this.selection.selectionType === SelectionType.None) {
      return this._selected;
    } else {
      return this.selection.isSelected(this.item);
    }
  }

  @Input('clrDgSelected')
  public set selected(value: boolean) {
    if (this.selection.selectionType === SelectionType.None) {
      this._selected = value;
    } else {
      this.selection.setSelected(this.item, value);
    }
  }

  // By default every item is selectable
  @Input('clrDgSelectable')
  public set clrDgSelectable(value: boolean) {
    this.selection.lockItem(this.item, value === false);
  }

  public get clrDgSelectable() {
    return !this.selection.isLocked(this.item);
  }

  @Output('clrDgSelectedChange') selectedChanged = new EventEmitter<boolean>(false);

  public toggle(selected = !this.selected) {
    if (selected !== this.selected) {
      this.selected = selected;
      this.selectedChanged.emit(selected);
    }
  }

  public get expanded() {
    return this.expand.expanded;
  }

  @Input('clrDgExpanded')
  public set expanded(value: boolean) {
    this.expand.expanded = value;
  }

  @Output('clrDgExpandedChange') expandedChange = new EventEmitter<boolean>(false);

  public toggleExpand() {
    if (this.expand.expandable) {
      this.expandAnimation.updateStartHeight();
      this.expanded = !this.expanded;
      this.expandedChange.emit(this.expanded);
    }
  }

  @ViewChild('detailButton', { static: false })
  detailButton;

  private _detailOpenLabel = '';
  @Input()
  set clrDgDetailOpenLabel(label: string) {
    this._detailOpenLabel = label;
  }
  get clrDgDetailOpenLabel(): string {
    return this._detailOpenLabel ? this._detailOpenLabel : this.commonStrings.keys.open;
  }
  private _detailCloseLabel = '';
  @Input()
  set clrDgDetailCloseLabel(label: string) {
    this._detailCloseLabel = label;
  }
  get clrDgDetailCloseLabel(): string {
    return this._detailCloseLabel ? this._detailCloseLabel : this.commonStrings.keys.open;
  }

  /*****
   * property dgCells
   *
   * @description
   * A Query List of the ClrDatagrid cells in this row.
   *
   */
  @ContentChildren(ClrDatagridCell) cells: QueryList<ClrDatagridCell>;

  ngAfterViewInit() {
    this.subscriptions.push(
      this.triggerAnimationOnExpandAnimate(),
      this.resetViewsOnDisplayModeChange(),
      this.insertNewCellView(),
      this.reorderOnRequest()
    );
  }

  private triggerAnimationOnExpandAnimate(): Subscription {
    return this.expand.animate.subscribe(() => {
      this.expandAnimationTrigger = !this.expandAnimationTrigger;
    });
  }

  private subscriptions: Subscription[] = [];

  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
    if (this.wrappedInjector && this._view) {
      this._view.destroy();
    }
  }

  public displayCells = false;

  @ViewChild('stickyCells', { static: false, read: ViewContainerRef })
  _stickyCells: ViewContainerRef;
  @ViewChild('scrollableCells', { static: false, read: ViewContainerRef })
  _scrollableCells: ViewContainerRef;
  @ViewChild('calculatedCells', { static: false, read: ViewContainerRef })
  _calculatedCells: ViewContainerRef;

  private wrappedInjector: Injector;

  ngOnInit() {
    this.wrappedInjector = new HostWrapper(WrappedRow, this.vcr);
  }

  public get _view() {
    return this.wrappedInjector.get(WrappedRow, this.vcr).rowView;
  }

  private resetViewsOnDisplayModeChange(): Subscription {
    return this.displayMode.view.subscribe(viewChange => {
      const viewContainers = [this._scrollableCells, this._calculatedCells];
      viewContainers.forEach(viewContainer => ViewManagerUtils.detachAllViews(viewContainer));
      if (viewChange === DatagridDisplayMode.CALCULATE) {
        this.displayCells = false;
        ViewManagerUtils.insertAllViews(this._calculatedCells, this.assignRawOrders(), true);
      } else {
        this.displayCells = true;
        ViewManagerUtils.insertAllViews(this._scrollableCells, this.assignRawOrders(), true);
        this.updateCellOrder();
      }
    });
  }

  private insertNewCellView(): Subscription {
    // This method is to handle a case when cells change without headers changing.
    // For example, one cell could be replaced by another in place.
    return this.cells.changes.subscribe(() => {
      this.cells.forEach((cell, index) => {
        if (this._scrollableCells.indexOf(cell._view) === -1) {
          this._scrollableCells.insert(cell._view, this.columnReorderService.orderAt(index));
        }
      });
      this.updateCellOrder();
    });
  }

  private reorderOnRequest(): Subscription {
    return this.columnReorderService.ordersChange.subscribe((byReordering: boolean) => {
      // we have to make sure there are views inserted in the view container
      // before calling reorderViews method from viewManager service
      if (byReordering && this._scrollableCells.length > 0) {
        ViewManagerUtils.reorderViews(this._scrollableCells, this.assignRawOrders());
        this.updateCellOrder();
      }
    });
  }

  private updateCellOrder(): void {
    this.cells.forEach(cell => (cell.order = this._scrollableCells.indexOf(cell._view)));
  }

  private assignRawOrders(): ClrDatagridCell[] {
    return this.cells.map((cell, index) => {
      if (this.columnReorderService.orderAt(index) > -1) {
        cell.order = this.columnReorderService.orderAt(index);
      } else {
        cell.order = index;
      }
      return cell;
    });
  }
}
