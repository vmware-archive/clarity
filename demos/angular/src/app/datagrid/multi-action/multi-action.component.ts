import { Component } from '@angular/core';
import { TestVM } from '@cds/core/demo';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { VmService } from '../vm.service';
import { MultiSelectGridComponent } from '../utils/vm-data.interface';

@Component({
  selector: 'app-multi-action',
  templateUrl: './multi-action.component.html',
  styleUrls: ['./multi-action.component.scss'],
})
export class MultiActionComponent implements MultiSelectGridComponent<TestVM> {
  batchActionAnchor: EventTarget | null = null;
  clrNgSelected: TestVM[] = [];
  cdsSelected: Set<string> = new Set();
  get cdsSelectedVMs(): string[] {
    return Array.from(this.cdsSelected);
  }
  // Form group for the generated form controls
  // A list of test VM's to display in a grid
  data: TestVM[] = [];
  // Extracted 'fields' from a row of data -> These will become columns
  dataFields!: string[];
  showDevNotes = false;
  multiSelectForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private vmData: VmService) {
    this.data = vmData.get();
    this.dataFields = vmData.fields;
    // Reactive form for the Rows
    this.multiSelectForm = this.formBuilder.group({
      allRows: [false],
      currentPage: [1],
      pageSize: [10],
      rows: new FormGroup({}),
    });
    // Generate a control for each row with the vm id
    this.data.forEach(vm =>
      (this.multiSelectForm.controls.rows as FormGroup).addControl(vm.id, new FormControl(false))
    );
    // Listen for changes to the controls and set the value on the correct form control
    this.multiSelectForm.controls.allRows.valueChanges.subscribe(value =>
      this.data.forEach(i => this.multiSelectForm.controls.rows.get(i.id)?.setValue(value))
    );
  }

  get selectedCount() {
    return this.data.map(i => this.multiSelectForm.controls.rows.get(i.id)?.value).filter((i: any) => i).length;
  }

  get selectedItems(): TestVM[] {
    return this.data
      .map(vm => {
        if (this.multiSelectForm.controls.rows.get(vm.id)?.value) {
          return vm;
        } else {
          return;
        }
      })
      .filter(vm => vm !== undefined) as TestVM[];
  }

  batchAction(action: string) {
    alert(`${action}: ${this.selectedItems.map(vm => vm?.id)}`);
    this.batchActionAnchor = null;
  }

  clrAction(action: string) {
    alert(`${action}: ${this.clrNgSelected.map(vm => vm?.id)}`);
  }

  showBatchActions(event: Event) {
    this.batchActionAnchor = event.target;
  }
}
