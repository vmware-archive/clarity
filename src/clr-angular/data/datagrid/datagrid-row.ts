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

import { IfExpandService } from '../../utils/conditional/if-expanded.service';
import { HostWrapper } from '../../utils/host-wrapping/host-wrapper';
import { LoadingListener } from '../../utils/loading/loading-listener';

import { ClrDatagridCell } from './datagrid-cell';
import { DatagridDisplayMode } from './enums/display-mode.enum';
import { DisplayModeService } from './providers/display-mode.service';
import { ExpandableRowsCount } from './providers/global-expandable-rows';
import { RowActionService } from './providers/row-action-service';
import { Selection } from './providers/selection';
import { WrappedRow } from './wrapped-row';
import { ClrCommonStrings } from '../../utils/i18n/common-strings.interface';
import { SelectionType } from './enums/selection-type';
import { DatagridIfExpandService } from './datagrid-if-expanded.service';
import { ClrExpandableAnimation } from '../../utils/animations/expandable-animation/expandable-animation';
import { ColumnReorderService } from './providers/column-reorder.service';
import { ViewAccessor, ViewManagerService } from './providers/view-manager.service';

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
    private displayMode: DisplayModeService,
    private vcr: ViewContainerRef,
    private renderer: Renderer2,
    private el: ElementRef,
    public commonStrings: ClrCommonStrings,
    private columnReorderService: ColumnReorderService,
    private viewManager: ViewManagerService
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

  /*****
   * property dgCells
   *
   * @description
   * A Query List of the ClrDatagrid cells in this row.
   *
   */
  @ContentChildren(ClrDatagridCell) dgCells: QueryList<ClrDatagridCell>;

  ngAfterContentInit() {
    this.dgCells.changes.subscribe(() => {
      this.dgCells.forEach((cell, index) => {
        if (this._scrollableCells.indexOf(cell._view) === -1) {
          this._scrollableCells.insert(cell._view, this.columnReorderService.orderAt(index));
        }
      });
    });
  }

  ngAfterViewInit() {
    this.subscriptions.push(
      this.displayMode.view.subscribe(viewChange => {
        // Listen for view changes and move cells around depending on the current displayType
        // detach cell views from display view
        this.viewManager.detachAllViews(this._scrollableCells);
        // detach cell views from calculated view
        this.viewManager.detachAllViews(this._calculatedCells);
        if (viewChange === DatagridDisplayMode.CALCULATE) {
          this.displayCells = false;
          this.viewManager.insertAllViews(this._calculatedCells, this.assignRawOrders(), true);
        } else {
          this.displayCells = true;
          this.viewManager.insertAllViews(this._scrollableCells, this.assignRawOrders(), true);
        }
      }),
      this.expand.animate.subscribe(() => {
        this.expandAnimationTrigger = !this.expandAnimationTrigger;
      }),
      // A subscription that listens for view reordering
      this.columnReorderService.reorderRequested.subscribe(reorderRequest => {
        const sourceView = this._scrollableCells.get(reorderRequest.sourceIndex);
        this._scrollableCells.move(sourceView, reorderRequest.targetIndex);
      })
    );
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

  private assignRawOrders(): ClrDatagridCell[] {
    return this.dgCells.map((cell, index) => {
      if (this.columnReorderService.orderAt(index) > -1) {
        cell.order = this.columnReorderService.orderAt(index);
      } else {
        cell.order = index;
      }
      return cell;
    });
  }
}
