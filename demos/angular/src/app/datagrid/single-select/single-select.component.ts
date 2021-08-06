import { Component, OnInit } from '@angular/core';
import { TestVM } from '@cds/core/demo';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { VmService } from '../vm.service';
import { VmSyncService } from '../utils/providers/vm-sync.service';
import { SingleSelectGridComponent } from '../utils/vm-data.interface';

@Component({
  selector: 'app-single-select',
  templateUrl: './single-select.component.html',
  styleUrls: ['./single-select.component.scss'],
})
export class SingleSelectComponent implements SingleSelectGridComponent<TestVM> {
  selectedRow!: TestVM;
  data: TestVM[] = [];
  dataFields!: string[];
  clrSelectedVM!: TestVM;
  paginationForm!: FormGroup;
  showDevNotes = true;

  constructor(private formBuilder: FormBuilder, private vmData: VmSyncService) {
    this.data = vmData.get();
    this.dataFields = Object.keys(this.data[0]);
  }

  rowSelectChange(event: Event): void {
    const vmInput: HTMLInputElement = event.target as HTMLInputElement;
    this.selectedRow = this.data.filter(i => i.id === vmInput.id)[0];
  }
}
