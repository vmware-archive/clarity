import { Injectable } from '@angular/core';
import {getVMData, TestVM} from "@cds/core/demo";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {SyncDataService} from "../utils/vm-data.interface";


/**
 * TODO start here but only need to add the MultiActionGrid interface
 */
@Injectable({
  providedIn: 'root'
})
export class MultiActionGridService implements SyncDataService<TestVM>{
  readonly data: TestVM[];
  readonly fields: string[];
  batchActionAnchor!: HTMLElement | null;
  cdsSelected: Set<string> = new Set();
  multiSelectForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.data = getVMData();
    this.fields = Object.keys(this.data[0]);
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

  public get(): TestVM[] {
    return this.data;
  }

  get cdsSelectedVMs(): string[] {
    return Array.from(this.cdsSelected);
  }

  batchAction(action: string) {
    alert(`${action}: ${this.selectedItems.map(vm => vm?.id)}`);
    this.batchActionAnchor = null;
  }

  showBatchActions(event: Event) {
    this.batchActionAnchor = event.target as HTMLElement;
  }
}
