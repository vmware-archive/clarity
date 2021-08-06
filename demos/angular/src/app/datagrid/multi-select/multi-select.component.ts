import { Component } from '@angular/core';
import { TestVM } from '@cds/core/demo';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { VmService } from '../vm.service';
import { MultiSelectGridComponent } from '../utils/vm-data.interface';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss'],
})
export class MultiSelectComponent implements MultiSelectGridComponent<TestVM> {
  // Array to hold items selected in the Angular ClrDatagrid
  clrNgSelected: TestVM[] = [];
  //
  // cdsSelected: Array<string> = [];
  // Form group for the generated form controls
  // A list of test VM's to display in a grid
  data: TestVM[] = [];
  // Extracted 'fields' from a row of data -> These will become columns
  dataFields!: string[];
  showDevNotes = false;
  multiSelectForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private vmData: VmService) {
    this.data = vmData.get();
    this.dataFields = Object.keys(this.data[0]);
    this.multiSelectForm = this.formBuilder.group({
      allRows: [false],
      rows: new FormGroup({}),
    });
    this.data.forEach(vm =>
      (this.multiSelectForm.controls.rows as FormGroup).addControl(vm.id, new FormControl(false))
    );
    this.multiSelectForm.controls.allRows.valueChanges.subscribe(value => {
      this.data.forEach(i => this.multiSelectForm.controls.rows.get(i.id)?.setValue(value));
    });
  }

  get selectedCount(): number {
    return this.data.map(i => this.multiSelectForm.controls.rows.get(i.id)?.value).filter((i: any) => i).length;
  }

  get selectedItems(): TestVM[] {
    return this.data
      .map(i => {
        if (this.multiSelectForm.controls.rows.get(i.id)?.value) {
          return i;
        } else {
          return;
        }
      })
      .filter(vm => vm !== undefined) as TestVM[];
  }
}
