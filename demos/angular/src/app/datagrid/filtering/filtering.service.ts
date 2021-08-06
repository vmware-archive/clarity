import { Injectable } from '@angular/core';
import { FilteredGridComponent, SyncDataService } from '../utils/vm-data.interface';
import { filter, getVMData, TestVM } from '@cds/core/demo';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilteringService implements SyncDataService<TestVM>, FilteredGridComponent<TestVM> {
  // ImplementSyncDataService
  data!: TestVM[];
  fields!: string[];

  // Implement FilteredGridComponent
  filterAnchor: HTMLElement | null = null;
  filterColumn = 'id'; // default to id, multiple column filters could work here with template adjustments.
  filterString = '';
  hiddenFilter = true;

  filteredSubject: BehaviorSubject<TestVM[]> = new BehaviorSubject<TestVM[]>(this.data);

  filteredData(): Observable<TestVM[]> {
    return this.filteredSubject.asObservable();
  }

  constructor() {
    this.data = getVMData();
    this.fields = Object.keys(this.data[0]);
    this.filteredSubject.next(this.data);
  }

  // ImplementSyncDataService
  public get(): TestVM[] {
    return this.data;
  }

  // Implement FilteredGridComponent
  toggleFilter(event: Event, column: string) {
    this.filterColumn = column;
    this.filterAnchor = event.target as HTMLElement;
    this.hiddenFilter = !this.hiddenFilter;
  }

  // Implement FilteredGridComponent
  triggerFilter(event: Event) {
    const input: HTMLInputElement = event.target as HTMLInputElement;
    this.filterString = input.value ? input.value : '';
    this.filteredSubject.next(filter(this.data, this.filterColumn, this.filterString));
  }
}
