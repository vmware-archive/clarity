/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  QueryList,
  Renderer2,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs';

import { ClrDatagridColumn } from './datagrid-column';
import { ClrDatagridItems } from './datagrid-items';
import { ClrDatagridPlaceholder } from './datagrid-placeholder';
import { ClrDatagridRow } from './datagrid-row';
import { DatagridDisplayMode } from './enums/display-mode.enum';
import { ClrDatagridStateInterface } from './interfaces/state.interface';
import { ColumnToggleButtonsService } from './providers/column-toggle-buttons.service';
import { DisplayModeService } from './providers/display-mode.service';
import { FiltersProvider } from './providers/filters';
import { ExpandableRowsCount } from './providers/global-expandable-rows';
import { HideableColumnService } from './providers/hideable-column.service';
import { Items } from './providers/items';
import { Page } from './providers/page';
import { RowActionService } from './providers/row-action-service';
import { Selection, SelectionType } from './providers/selection';
import { Sort } from './providers/sort';
import { StateDebouncer } from './providers/state-debouncer.provider';
import { StateProvider } from './providers/state.provider';
import { TableSizeService } from './providers/table-size.service';
import { DatagridRenderOrganizer } from './render/render-organizer';
import { ClrCommonStrings } from '../../utils/i18n/common-strings.interface';

@Component({
  selector: 'clr-datagrid',
  templateUrl: './datagrid.html',
  providers: [
    Selection,
    Sort,
    FiltersProvider,
    Page,
    Items,
    DatagridRenderOrganizer,
    RowActionService,
    ExpandableRowsCount,
    HideableColumnService,
    StateDebouncer,
    StateProvider,
    ColumnToggleButtonsService,
    TableSizeService,
    DisplayModeService,
  ],
  host: { '[class.datagrid-host]': 'true' },
})
export class ClrDatagrid<T = any> implements AfterContentInit, AfterViewInit, OnDestroy {
  constructor(
    private columnService: HideableColumnService,
    private organizer: DatagridRenderOrganizer,
    public items: Items<T>,
    public expandableRows: ExpandableRowsCount,
    public selection: Selection<T>,
    public rowActionService: RowActionService,
    private stateProvider: StateProvider<T>,
    private displayMode: DisplayModeService,
    private renderer: Renderer2,
    private el: ElementRef,
    public commonStrings: ClrCommonStrings
  ) {}

  /* reference to the enum so that template can access */
  public SELECTION_TYPE = SelectionType;

  /**
   * Freezes the datagrid while data is loading
   */
  public get loading(): boolean {
    return this.items.loading;
  }

  @Input('clrDgLoading')
  public set loading(value: boolean) {
    this.items.loading = value;
  }

  /**
   * Output emitted whenever the data needs to be refreshed, based on user action or external ones
   */
  @Output('clrDgRefresh') public refresh = new EventEmitter<ClrDatagridStateInterface<T>>(false);

  /**
   * Public method to re-trigger the computation of displayed items manually
   */
  public dataChanged() {
    this.items.refresh();
  }

  /**
   * We grab the smart iterator from projected content
   */
  @ContentChild(ClrDatagridItems) public iterator: ClrDatagridItems<T>;

  /**
   * Array of all selected items
   */
  @Input('clrDgSelected')
  set selected(value: T[]) {
    if (value) {
      this.selection.selectionType = SelectionType.Multi;
    } else {
      this.selection.selectionType = SelectionType.None;
    }
    this.selection.updateCurrent(value, false);
  }

  @Output('clrDgSelectedChange') selectedChanged = new EventEmitter<T[]>(false);

  /**
   * Selected item in single-select mode
   */
  @Input('clrDgSingleSelected')
  set singleSelected(value: T) {
    this.selection.selectionType = SelectionType.Single;
    // the clrDgSingleSelected is updated in one of two cases:
    // 1. an explicit value is passed
    // 2. is being set to null or undefined, where previously it had a value
    if (value) {
      this.selection.currentSingle = value;
    } else if (this.selection.currentSingle) {
      this.selection.currentSingle = null;
    }
  }

  @Output('clrDgSingleSelectedChange') singleSelectedChanged = new EventEmitter<T>(false);

  /**
   * Selection/Deselection on row click mode
   */
  @Input('clrDgRowSelection')
  set rowSelectionMode(value: boolean) {
    this.selection.rowSelectionMode = value;
  }

  /**
   * Indicates if all currently displayed items are selected
   */
  public get allSelected() {
    return this.selection.isAllSelected();
  }

  /**
   * Selects/deselects all currently displayed items
   * @param value
   */
  public set allSelected(value: boolean) {
    /*
         * This is a setter but we ignore the value.
         * It's strange, but it lets us have an indeterminate state where only
         * some of the items are selected.
         */
    this.selection.toggleAll();
  }

  /**
   * Custom placeholder detection
   */
  @ContentChild(ClrDatagridPlaceholder) public placeholder: ClrDatagridPlaceholder<T>;

  /**
   * Hideable Column data source / detection.
   */
  @ContentChildren(ClrDatagridColumn) public columns: QueryList<ClrDatagridColumn<T>>;

  /**
   * When the datagrid is user-managed without the smart iterator, we get the items displayed
   * by querying the projected content. This is needed to keep track of the models currently
   * displayed, typically for selection.
   */

  @ContentChildren(ClrDatagridRow) rows: QueryList<ClrDatagridRow<T>>;
  @ViewChild('scrollableColumns', { read: ViewContainerRef })
  scrollableColumns: ViewContainerRef;

  ngAfterContentInit() {
    if (!this.items.smart) {
      this.items.all = this.rows.map((row: ClrDatagridRow<T>) => row.item);
    }

    this._subscriptions.push(
      this.rows.changes.subscribe(() => {
        if (!this.items.smart) {
          this.items.all = this.rows.map((row: ClrDatagridRow<T>) => row.item);
        }
        this.rows.forEach(row => {
          this._displayedRows.insert(row._view);
        });
      })
    );

    this._subscriptions.push(
      this.columns.changes.subscribe((columns: ClrDatagridColumn<T>[]) => {
        this.columnService.updateColumnList(this.columns.map(col => col.hideable));
      })
    );

    // Get ColumnService ready for HideableColumns.
    this.columnService.updateColumnList(this.columns.map(col => col.hideable));
  }

  /**
   * Our setup happens in the view of some of our components, so we wait for it to be done before starting
   */
  ngAfterViewInit() {
    // TODO: determine if we can get rid of provider wiring in view init so that subscriptions can be done earlier
    this.refresh.emit(this.stateProvider.state);
    this._subscriptions.push(this.stateProvider.change.subscribe(state => this.refresh.emit(state)));
    this._subscriptions.push(
      this.selection.change.subscribe(s => {
        if (this.selection.selectionType === SelectionType.Single) {
          this.singleSelectedChanged.emit(<T>s);
        } else if (this.selection.selectionType === SelectionType.Multi) {
          this.selectedChanged.emit(<T[]>s);
        }
      })
    );
    // A subscription that listens for displayMode changes on the datagrid
    this.displayMode.view.subscribe(viewChange => {
      // Remove any projected columns from the projectedDisplayColumns container
      for (let i = this._projectedDisplayColumns.length; i > 0; i--) {
        this._projectedDisplayColumns.detach();
      }
      // Remove any projected columns from the projectedCalculationColumns container
      for (let i = this._projectedCalculationColumns.length; i > 0; i--) {
        this._projectedCalculationColumns.detach();
      }
      // Remove any projected rows from the calculationRows container
      for (let i = this._calculationRows.length; i > 0; i--) {
        this._calculationRows.detach();
      }
      // Remove any projected rows from the displayedRows container
      for (let i = this._displayedRows.length; i > 0; i--) {
        this._displayedRows.detach();
      }
      if (viewChange === DatagridDisplayMode.DISPLAY) {
        // Set state, style for the datagrid to DISPLAY and insert row & columns into containers
        this.renderer.removeClass(this.el.nativeElement, 'datagrid-calculate-mode');
        this.columns.forEach(column => {
          this._projectedDisplayColumns.insert(column._view);
        });
        this.rows.forEach(row => {
          this._displayedRows.insert(row._view);
        });
      } else {
        // Set state, style for the datagrid to CALCULATE and insert row & columns into containers
        this.renderer.addClass(this.el.nativeElement, 'datagrid-calculate-mode');
        this.columns.forEach(column => {
          this._projectedCalculationColumns.insert(column._view);
        });
        this.rows.forEach(row => {
          this._calculationRows.insert(row._view);
        });
      }
    });
  }

  /**
   * Subscriptions to all the services and queries changes
   */
  private _subscriptions: Subscription[] = [];

  ngOnDestroy() {
    this._subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
  }

  resize(): void {
    this.organizer.resize();
  }

  @ViewChild('projectedDisplayColumns', { read: ViewContainerRef })
  _projectedDisplayColumns: ViewContainerRef;
  @ViewChild('projectedCalculationColumns', { read: ViewContainerRef })
  _projectedCalculationColumns: ViewContainerRef;
  @ViewChild('displayedRows', { read: ViewContainerRef })
  _displayedRows: ViewContainerRef;
  @ViewChild('calculationRows', { read: ViewContainerRef })
  _calculationRows: ViewContainerRef;
}
