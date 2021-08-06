import { Component, OnInit } from '@angular/core';
import { sortStrings, TestVM } from '@cds/core/demo';
import { StringSortType, VmService } from '../vm.service';
import { SortedGridService } from '../utils/vm-data.interface';
import { VmSyncService } from '../utils/providers/vm-sync.service';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss'],
})
export class SortingComponent implements OnInit {
  // A list of test VM's to display in a grid
  data: TestVM[] = [];
  // Extracted 'fields' from a row of data -> These will become columns
  dataFields!: string[];
  // sortedData: TestVM[] = [];
  // sortType: 'none' | 'ascending' | 'descending' = 'none';
  sortType: StringSortType = StringSortType.NONE;
  showDevNotes = false;

  constructor(public vmData: VmSyncService) {
    this.data = vmData.get();
    this.dataFields = vmData.fields;
  }

  ngOnInit() {
    this.data = this.vmData.sortedData();
  }

  sortGrid(event: Event) {
    const sortEvent = event as CustomEvent;
    this.vmData.sortType = sortEvent.detail;
    this.data = this.vmData.sortedData();
  }
}
