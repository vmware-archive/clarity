import { Injectable } from '@angular/core';
import { filter, getVMData, paginate, sortStrings, TestVM } from '@cds/core/demo';
import { Observable, of } from 'rxjs';
import { debounce, debounceTime, delay, map, tap } from 'rxjs/operators';

export enum StringSortType {
  NONE = 'none',
  ASC = 'ascending',
  DESC = 'descending',
}

@Injectable({
  providedIn: 'root',
})
export class VmService {
  private readonly data: TestVM[] = [];

  /**
   * feat: ??
   * I need a place to store and update some metadata about my async observable results
   */
  dataLength!: number;

  /**
   * feat: pagination (full async demo)
   * Putting the currentPage & page size allows me to use a refresh to call the async get
   * ad filter the results with the imported paginate function
   */
  currentPage = 0;
  pageCount!: number;
  pageSize = 10;

  /**
   * Sort types for the id and status column.
   */
  idSortType: StringSortType = StringSortType.NONE;
  statusSortType: StringSortType = StringSortType.NONE;

  // Consuming component sets this before they refresh the results
  filterString = '';

  // Consuming component adds and removes TestVM's from this as needed
  private _multiSelectedVMs: Set<string> = new Set<string>();

  public get multiSelectedVMs(): string[] {
    return Array.from(this._multiSelectedVMs);
  }

  public addMultiSelectVM(vm: string) {
    this._multiSelectedVMs.add(vm);
  }

  public removeMultiSelectVM(vm: string) {
    this._multiSelectedVMs.delete(vm);
  }

  // Consuming components set this when single select or single action needs to know which row model is acted on.
  private _singleSelectedVM: TestVM | null = null;

  public get singleSelectedVM(): TestVM | null {
    return this._singleSelectedVM;
  }

  public set singleSelectedVM(vm: TestVM | null) {
    this._singleSelectedVM = vm;
  }

  constructor() {
    this.data = getVMData();
  }

  public get fields() {
    return Object.keys(this.data[0]);
  }

  public get(): TestVM[] {
    return this.data;
  }

  public asyncGet(delayTime: number = 500): Observable<TestVM[]> {
    // DEV NOTE: I'm duplicating hte data so we can see that the sorting order matters and it works.
    // Flip the piped map sortStrings operators to see different behavior.
    // If apps implement multi sort this way they will have complete control over the multi-sort behavior via
    // implementation.
    const flippedStatusData: TestVM[] = this.data.map(vm => {
      const newStatus = vm.status === 'online' ? 'offline' : 'online';
      return { ...vm, status: newStatus, selected: !vm.selected };
    });

    return of([...this.data, ...flippedStatusData]).pipe(
      debounceTime(500),
      delay(delayTime),
      tap(data => (this.dataLength = data.length)),
      map(data => filter(data, 'id', this.filterString)),
      map(data => sortStrings(data, 'status', this.statusSortType)),
      map(data => sortStrings(data, 'id', this.idSortType)),
      map(data => paginate(data, this.pageSize)[this.currentPage] ?? [])
    );
  }

  clearVMSelections(): void {
    this._multiSelectedVMs.clear();
  }
}
