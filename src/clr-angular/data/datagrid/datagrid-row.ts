/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Injector,
  Input,
  Output,
  QueryList,
  Renderer2,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { combineLatest, Subscription } from 'rxjs';

import { Expand } from '../../utils/expand/providers/expand';
import { HostWrapper } from '../../utils/host-wrapping/host-wrapper';
import { LoadingListener } from '../../utils/loading/loading-listener';

import { ClrDatagridCell } from './datagrid-cell';
import { DatagridHideableColumnModel } from './datagrid-hideable-column.model';
import { DatagridDisplayMode } from './enums/display-mode.enum';
import { DisplayModeService } from './providers/display-mode.service';
import { ExpandableRowsCount } from './providers/global-expandable-rows';
import { HideableColumnService } from './providers/hideable-column.service';
import { RowActionService } from './providers/row-action-service';
import { Selection, SelectionType } from './providers/selection';
import { WrappedRow } from './wrapped-row';
import { ClrCommonStrings } from '../../utils/i18n/common-strings.interface';

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
  providers: [Expand, { provide: LoadingListener, useExisting: Expand }],
})
export class ClrDatagridRow<T = any> implements AfterContentInit, AfterViewInit {
  public id: string;
  public radioId: string;
  public checkboxId: string;

  /* reference to the enum so that template can access */
  public SELECTION_TYPE = SelectionType;

  /**
   * Model of the row, to use for selection
   */
  @Input('clrDgItem') item: T;

  public replaced;

  constructor(
    public selection: Selection<T>,
    public rowActionService: RowActionService,
    public globalExpandable: ExpandableRowsCount,
    public expand: Expand,
    public hideableColumnService: HideableColumnService,
    private displayMode: DisplayModeService,
    private vcr: ViewContainerRef,
    private renderer: Renderer2,
    private el: ElementRef,
    public commonStrings: ClrCommonStrings
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
    // Make sure things get started
    const columnsList = this.hideableColumnService.getColumns();
    this.updateCellsForColumns(columnsList);

    // Triggered when the Cells list changes per row-renderer
    this.dgCells.changes.subscribe(cellList => {
      const columnList = this.hideableColumnService.getColumns();
      if (cellList.length === columnList.length) {
        this.updateCellsForColumns(columnList);
      }
    });

    // Used to set things up the first time but only after all the columns are ready.
    this.subscriptions.push(
      this.hideableColumnService.columnListChange.subscribe(columnList => {
        // Prevents cell updates when cols and cells array are not aligned - only seems to run on init / first time.
        if (columnList.length === this.dgCells.length) {
          this.updateCellsForColumns(columnList);
        }
      })
    );
  }

  ngAfterViewInit() {
    this.subscriptions.push(
      this.displayMode.view.subscribe(viewChange => {
        // Listen for view changes and move cells around depending on the current displayType
        // remove cell views from display view
        for (let i = this._scrollableCells.length; i > 0; i--) {
          this._scrollableCells.detach();
        }
        // remove cell views from calculated view
        for (let i = this._calculatedCells.length; i > 0; i--) {
          this._calculatedCells.detach();
        }
        if (viewChange === DatagridDisplayMode.CALCULATE) {
          this.displayCells = false;
          this.dgCells.forEach(cell => {
            this._calculatedCells.insert(cell._view);
          });
        } else {
          this.displayCells = true;
          this.dgCells.forEach(cell => {
            this._scrollableCells.insert(cell._view);
          });
        }
      })
    );
  }

  /**********
   *
   * @description
   * 1. Maps the new columnListChange to the dgCells list by index
   * 2. Sets the hidden state on the cell
   * Take a Column list and use index to access the columns for hideable properties.
   *
   */
  public updateCellsForColumns(columnList: DatagridHideableColumnModel[]) {
    // Map cells to columns with Array.index
    this.dgCells.forEach((cell, index) => {
      const currentColumn = columnList[index]; // Accounts for null space.
      if (currentColumn) {
        cell.id = currentColumn.id;
      }
    });
  }

  private subscriptions: Subscription[] = [];

  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  public displayCells = false;

  @ViewChild('stickyCells', { read: ViewContainerRef })
  _stickyCells: ViewContainerRef;
  @ViewChild('scrollableCells', { read: ViewContainerRef })
  _scrollableCells: ViewContainerRef;
  @ViewChild('calculatedCells', { read: ViewContainerRef })
  _calculatedCells: ViewContainerRef;

  private wrappedInjector: Injector;

  ngOnInit() {
    this.wrappedInjector = new HostWrapper(WrappedRow, this.vcr);
  }

  public get _view() {
    return this.wrappedInjector.get(WrappedRow, this.vcr).rowView;
  }
}
