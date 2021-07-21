import { Component } from '@angular/core';
import pipe from 'ramda/es/pipe.js';
import '@cds/core/grid/register.js';
import '@cds/core/checkbox/register.js';
import '@cds/core/pagination/register.js';
import { TestVM, paginate, sortStrings, filter, StatusIconType, StatusDisplayType, getVMData, ColumnTypes } from '@cds/core/demo';
import { ClarityIcons, disconnectIcon, exclamationCircleIcon, exclamationTriangleIcon } from '@cds/core/icon';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

ClarityIcons.addIcons(exclamationTriangleIcon, exclamationCircleIcon, disconnectIcon);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  ColumnTypes = ColumnTypes;
  StatusIconType = StatusIconType;
  StatusDisplayType = StatusDisplayType;
  sortType: 'none' | 'ascending' | 'descending' = 'none';
  columns: ['Host', 'Status', 'CPU', 'Memory'] = ['Host', 'Status', 'CPU', 'Memory'];

  data = getVMData();
  form: FormGroup;
  currentDetail: TestVM | null = null;
  columnsDropdownAnchor: any = null;
  idFilterAnchor: any = null;
  detailAnchor: any = null;

  get selectedCount() {
    return this.data.map(i => this.form.controls.rows.get(i.id)?.value).filter((i: any) => i).length;
  }

  get pageCount() {
    return Math.ceil(this.data.length / this.form.controls.pageSize.value);
  }

  get filteredVMs() {
    return pipe(
      (d: TestVM[]) => d.sort((a, b) => (this.data.map(v => v.id).indexOf(a.id) > this.data.map(v => v.id).indexOf(b.id) ? 1 : -1)),
      d => filter<TestVM>(d, 'id', this.form.controls.search.value),
      d => sortStrings<TestVM>(d, 'status', this.sortType),
      d => paginate<TestVM>(d, this.form.controls.pageSize.value)[this.form.controls.page.value - 1]
    )([...this.data]);
  }

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      search: [''],
      page: [1],
      pageSize: [10],
      allRows: [false],
      columns: new FormGroup({}),
      rows: new FormGroup({}),
    });

    this.columns.forEach(i => (this.form.controls.columns as FormGroup).addControl(i, new FormControl(true)));
    this.data.forEach(i => (this.form.controls.rows as FormGroup).addControl(i.id, new FormControl(false)));
    this.form.controls.search.valueChanges.subscribe(() => this.form.controls.page.setValue(1));
    this.form.controls.allRows.valueChanges.subscribe(value => this.data.forEach(i => this.form.controls.rows.get(i.id)?.setValue(value)));
  }

  showAllColumns() {
    this.columns.forEach(col => this.form.controls.columns.get(col)?.setValue(true));
  }

  showDetail(vm: TestVM) {
    this.currentDetail = this.data.find(i => i.id === vm.id) as TestVM;
  }

  columnVisible(value: number) {
    return (value === (this.columns
      .map(col => (this.form.controls.columns.get(col)?.value ? ColumnTypes[col] : 0))
      .filter(i => i)
      .reduce((p, n) => p + n, 0) & value));
  }

  nextPage() {
    const page = this.form.controls.page.value;
    if (page <= this.pageCount) {
      this.form.controls.page.setValue(page + 1);
    }
  }

  prevPage() {
    const page = this.form.controls.page.value;
    if (page > 0) {
      this.form.controls.page.setValue(page - 1);
    }
  }
}
