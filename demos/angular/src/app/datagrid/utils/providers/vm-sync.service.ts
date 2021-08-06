import { Injectable } from '@angular/core';
import { filter, getVMData, paginate, sortStrings, TestVM } from '@cds/core/demo';
import { PaginationGridService, SortedGridService, SyncGridService } from '../vm-data.interface';
import { StringSortType } from '../../vm.service';

@Injectable({
  providedIn: 'root',
})
export class VmSyncService
  implements SyncGridService<TestVM>, PaginationGridService<TestVM>, SortedGridService<TestVM> {
  readonly data: TestVM[];
  readonly fields: string[];

  private _sortColumn: string = 'id';

  public get sortColumn(): string {
    return this._sortColumn;
  }
  public set sortColumn(column: string) {
    this._sortColumn = column;
  }

  private _sortType: StringSortType = StringSortType.NONE;

  get sortType(): StringSortType {
    return this._sortType;
  }

  set sortType(type: StringSortType) {
    this._sortType = type;
  }

  private _currentPage = 0;
  public get currentPage() {
    return this._currentPage;
  }
  public set currentPage(page) {
    this._currentPage = page;
  }

  pageCount!: number;

  private _pageSize = 10;
  public get pageSize(): number {
    return this._pageSize;
  }
  public set pageSize(size: number) {
    this._pageSize = size;
    this.pageCount = Math.ceil(this.data.length / this.pageSize);
  }

  constructor() {
    this.data = getVMData();
    this.pageCount = Math.ceil(this.data.length / this.pageSize);
    this.fields = Object.keys(this.data[0]);
  }

  public get(): TestVM[] {
    return this.data;
  }

  /**
   * An optional filter function from the interface.
   * The specify the column and search string to return filtered results from the service.
   */
  public filteredData(column: string, search: string): TestVM[] {
    return filter([...this.data], column, search);
  }

  public paginateData(): TestVM[] {
    console.log('paginateData', paginate(this.data, this.pageSize)[this.currentPage], this);
    return paginate(this.data, this.pageSize)[this.currentPage] ?? [];
  }

  public sortedData(): TestVM[] {
    return sortStrings([...this.data], this.sortColumn, this.sortType);
  }
}
