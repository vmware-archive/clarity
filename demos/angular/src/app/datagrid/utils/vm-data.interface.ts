/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

// Component interface
// properties by feature

// hide-show-column
import { FormControl, FormGroup } from '@angular/forms';
import { TestVM } from '@cds/core/demo';
import { BehaviorSubject, Observable } from 'rxjs';
import { StringSortType } from '../vm.service';

export interface SyncGridService<T> {
  readonly data: T[];
  readonly fields: string[];
  get(): T[];
}
export interface AsyncGridService<T> {
  readonly data: BehaviorSubject<T[]>;
  data$: Observable<T[]>;
  refresh(): void;
}
export interface DetailGridComponent<T> {
  currentVM: T | null;
  detailAnchor: EventTarget | null;
  toggleDetail(event: Event, item: T): void;
}
export interface FilteredGridComponent<T> {
  filterAnchor: EventTarget | null;
  filterColumn: string;
  filterString: string;
  hiddenFilter: boolean;
}
export interface FilteredGridService<T> {
  filteredData?(column: string, search: string): T[];
}
export interface HideShowColumnGridComponent {
  columnAnchor: EventTarget | null;
  hideShowForm: FormGroup;
  allColumnsVisible: boolean;
  isColumnVisible(columnName: string): boolean;
  setAnchor(target: Event): void;
  showAllColumns(): void;
}
export interface MultiSelectGridComponent<T> {
  multiSelectForm: FormGroup;
  selectedCount: number; // implement as a getter that handles filtering the form controls.
  selectedItems: T[]; // implemented as a getter that handles filtering/mapping form controls to data.
}
export interface PaginationGridService<T> {
  currentPage: number;
  pageCount: number;
  pageSize: number;
  paginateData(): T[];
}
export interface PinnedColumnGrid {}
export interface SingleActionGridComponent<T> {
  actionRow: TestVM | null;
  singleActionAnchor: EventTarget | null;
  displayRowActions(event: Event, row: T): void;
}
export interface SingleSelectGridComponent<T> {
  selectedRow: T;
  rowSelectChange(event: Event): void;
}
export interface SortedGridService<T> {
  sortType: StringSortType;
  sortedData(): T[];
}

export interface CdsGridComponent {
  batchActionAnchor: EventTarget | null;
  hideShowAnchor: EventTarget | null;
  filterIdAnchor: EventTarget | null;
  rowActionAnchor: EventTarget | null;
  selectedRows: Set<TestVM>;
  selectedRow: TestVM;
  gridForm: GridForm;
}

export interface GridForm {
  allRows: FormControl; // true when all rows are selected
  columns: FormGroup; // Form group for generated hide/show column controls
  page: FormControl; // The current page on a paginated grid
  pageSize: FormControl; // The paginated grids page size (# of rows / page)
  rows: FormGroup; // Form group for generated row controls (single or multiselect)
  filterString: FormControl; // the search string for a specific column or columns (depends on implementation)
}

// Service interface

export interface GridService {
  data: TestVM[]; // source of truth for current data in the client
  dataLength: number; // may or may not keep this, POC used it in the component template

  // pagination
  currentPage: number;
  pageCount: number;
  pageSize: number;

  // filtering
  filterString: string;

  // single and multi-selection
  selectedRows: Set<TestVM>;
  selectedRow: TestVM;

  // sorting
  idSortType: StringSortType;
  statusSortType: StringSortType;

  // Can I just this.state.next(this) ??
  // Then subscribe and map all of the things onto the consuming component?
  state: BehaviorSubject<GridService>;

  getState(): Observable<GridService>;
  get(): TestVM[];
  asyncGet(delayTime: number): Observable<TestVM>;
}
