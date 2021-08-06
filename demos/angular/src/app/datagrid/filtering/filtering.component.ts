import { Component, OnInit } from '@angular/core';
import { filter, TestVM } from '@cds/core/demo';
import { FilteredGridComponent } from '../utils/vm-data.interface';
import { VmSyncService } from '../utils/providers/vm-sync.service';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.scss'],
})
export class FilteringComponent implements FilteredGridComponent<TestVM> {
  data!: TestVM[];
  dataFields!: string[];
  filterAnchor: EventTarget | null = null;
  filterColumn: string = 'id'; // default to id, multiple column filters could work here with template adjustments.
  filterString: string = '';
  hiddenFilter = true;
  showDevNotes = false;

  constructor(private vmData: VmSyncService) {
    this.data = this.vmData.filteredData(this.filterColumn, this.filterString);
    this.dataFields = vmData.fields;
  }

  toggleFilter(event: Event, column: string) {
    this.filterColumn = column;
    this.filterAnchor = event.target;
    this.hiddenFilter = !this.hiddenFilter;
  }

  filterData(event: Event) {
    const input: HTMLInputElement = event.target as HTMLInputElement;
    this.filterString = input.value ? input.value : '';
    this.data = this.vmData.filteredData(this.filterColumn, this.filterString);
  }
}
