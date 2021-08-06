import { Injectable } from '@angular/core';
import {HideShowColumnGrid, SyncDataService} from "../utils/vm-data.interface";
import {getVMData, TestVM} from "@cds/core/demo";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class HideShowColumnService implements SyncDataService<TestVM>, HideShowColumnGrid {
  readonly data: TestVM[];
  readonly fields: string[];

  columnAnchor: HTMLElement | null = null;
  hideShowForm: FormGroup;
  hiddenColumnPicker = true;

  isColumnVisible(columnName: string): boolean {
    return this.hideShowForm.controls.columns.get(columnName)?.value;
  }

  alert(str: string) {
    alert(str);
  }

  get allColumnsVisible(): boolean {
    // The ternary also acts as a lifecycle guard for when the hideShowForm is undefined (b/c called in the template)
    return this.hideShowForm
      ? !!this.fields.map(column => this.hideShowForm.controls.columns.get(column)?.value).filter(value => !value)
        .length
      : false;
  }

  constructor(private formBuilder: FormBuilder) {
    this.data = getVMData();
    this.fields = Object.keys(this.data[0]);
    // A reactive form that that we can use to generate a group of form controls for each row.
    this.hideShowForm = this.formBuilder.group({
      columns: new FormGroup({}),
    });
    this.fields.forEach(df =>
      (this.hideShowForm.controls.columns as FormGroup).addControl(df, new FormControl(true, { updateOn: 'change' }))
    );
  }

  public get(): TestVM[] {
    return this.data;
  }

  // Use the click target to set the anchor element (so that popover can calculate position
  // when the anchor is set, show the column picker form
  toggleColumnVisibility(event: Event): void {
    this.columnAnchor = event.target as HTMLElement;
    this.hiddenColumnPicker = !this.hiddenColumnPicker;
  }

  // Function that will show all columns
  // This idea is extendable and configurable:
  // Want to exclude some columns from being selected or unselected, this is the way
  showAllColumns(): void {
    this.fields.forEach((column) => this.hideShowForm.controls.columns.get(column)?.setValue(true));
  }
}
