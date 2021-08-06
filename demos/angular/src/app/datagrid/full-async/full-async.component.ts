import { Component } from '@angular/core';
import { filter, sortStrings, TestVM } from '@cds/core/demo';
import { StringSortType, VmService } from '../vm.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Sort } from '@clr/angular/data/datagrid/providers/sort';

// export class MyGridService extends BasidCdsGrid, Pagingation, Sort,  Filter {}

@Component({
  selector: 'app-full-async',
  templateUrl: './full-async.component.html',
  styleUrls: ['./full-async.component.scss'],
})
export class FullAsyncComponent {
  /**
   * feat: hide-show-column
   * This gets set when the cds-action button in the footer is clicked. It passed the event to setAnchor fn.
   */
  columnAnchor: EventTarget | null = null;
  /**
   * feat: detail-pane
   * This is set when the detail popover is toggled visible and nullified when toggled hidden.
   */
  currentVM!: TestVM | null;
  /**
   * feat: general
   * observable that mocks async behavior / http API request
   */
  data!: Observable<TestVM[]> | null;
  /**
   * feat: general
   * Extracted fields of the data (work is done in the service and set in constructor)
   */
  dataFields!: string[];

  /**
   * feat: detail-pane
   * Anchor element to connect the button/row with detail popover element in template.
   */
  detailAnchor: HTMLElement | null = null;

  /**
   * feat: filter
   * Anchor element to connect the filter trigger with the filter popover.
   */
  filterAnchor: EventTarget | null = null;

  /**
   * feat: filter
   * A property to hold the current value of a string filter.
   * Used to set the string filter value in the VmData service.
   */
  filterString: string = '';

  /**
   * feat: hide-shor-column
   * A boolean flag used by the template to control the hidden state of the hide/show the element with the column
   * toggle form.
   */
  hiddenColumnPicker = true;

  /**
   * feat: filter
   * A toggle used by the template. The filter popover [hidden] attribute binds to this and toggling hiddenFilter
   * hides/shows the filter input popover.
   */
  hiddenFilter = true;

  /**
   * feat: sort
   * cds-action-sort offers a sort attribute to configure the appearance. This enum binds to that with the correct
   * values needed to set the service property with so it can run the sort function for current state.
   */
  idSortType: StringSortType = StringSortType.NONE;

  /**
   * feat: hide-show-column
   * A reactive form group that generates controls based on the model returned from VmService.
   * The template uses id to map the [formControlName] to the columnName in this.dataFields.
   */
  hideShowForm!: FormGroup;

  /**
   * feat: multi-select, multi-action (rows)
   * A reactive FormGroup that maps generated inputs to each row in the dataset. It implements an alert action that
   * displays the currently selected rows.
   */
  multiSelectForm!: FormGroup;

  /**
   * feat: pinned columns
   * A boolean that will lock / unlock the first column from being pinned or scrollable on x axis.
   */
  pinFirstColumn = false;

  /**
   * Used to hide/show the dev notes accordion content.
   */
  showDevNotes = false;

  /**
   * feat: hide-show
   * Three properties used to a row model with the data passed to a function called when a single row action button is
   * clicked. It also controls the visibility of the popover with action buttons inside it that act onthe selected row
   * model.
   */
  actionPopoverAnchor: EventTarget | null = null;
  selectedRow: TestVM | null = null;
  hiddenRowAction = true;

  /**
   * feat: pagination
   * Component properties that are used in the template
   */
  currentPage = this.vmData.currentPage;
  pageSize = this.vmData.pageSize;
  pageCount = this.pageSize;

  /**
   * feat: single-row-action
   * A function that shows the row action popover and passed it a row model.
   */
  showRowActions(event: Event, vm: TestVM) {
    this.selectedRow = vm;
    this.actionPopoverAnchor = event.target;
    this.hiddenRowAction = false;
  }

  executeRowAction(action: string) {
    alert(`${action}: ${this.selectedRow?.id}`);
    this.closeRowActionPopover();
    this.selectedRow = null;
  }

  closeRowActionPopover() {
    this.selectedRow = null;
    this.hiddenRowAction = true;
  }

  /**
   * feat: sort
   * cds-action-sort offers a sort attribute to configure the appearance. This enum binds to that with the correct
   * values needed to set the service property with so it can run the sort function for current state.
   */
  statusSortType: StringSortType = StringSortType.NONE;

  /**
   * feat: hide-show-column
   * a function that filters the column form controls. If all controls are selected it returns true.
   */
  get allColumnsVisible(): boolean {
    // The ternary also acts as a lifecycle guard for when the hideShowForm is undefined (b/c called in the template)
    return this.hideShowForm
      ? !!this.dataFields.map(column => this.hideShowForm.controls.columns.get(column)?.value).filter(value => !value)
          .length
      : false;
  }

  constructor(private formBuilder: FormBuilder, private vmData: VmService) {
    // Fetch data via the service.
    this.data = this.vmData.asyncGet(500);
    // Listen and handle initial set up when it resolves
    this.data.subscribe(data => {
      this.updateFormsForData(data);
    });
  }

  /**
   * feat: hide-show-column
   * A function used by the template to set the hidden attribute on cells and in an *ngIf on column elements.
   */
  isColumnVisible(columnType: string): boolean {
    return this.hideShowForm.controls.columns.get(columnType)?.value;
  }

  /**
   * feat: async / placeholder
   * Fetch 'new' data from the service and subscribe to do other things when it is ready.
   */
  refreshData(): void {
    this.data = null;
    this.currentVM = null;
    // reset pagination and selection stuff
    this.selectedRow = null;
    this.vmData.clearVMSelections();
    this.data = this.vmData.asyncGet(500);
    this.data.subscribe(data => {
      this.updateFormsForData(data);
    });
  }

  private updateFormsForData(data: TestVM[]): void {
    // Let the service be the source for truth of the columns
    this.dataFields = this.vmData.fields;
    // A reactive form that that we can use to generate a group i=of form controls for each row.
    this.hideShowForm = this.formBuilder.group({
      columns: new FormGroup({}),
    });
    this.dataFields.forEach(df =>
      (this.hideShowForm.controls.columns as FormGroup).addControl(df, new FormControl(true, { updateOn: 'change' }))
    );

    // Set up a new form group for multi-select
    this.multiSelectForm = this.formBuilder.group({
      allRows: [false],
      rows: new FormGroup({}),
    });

    // Create new form controls for each of the row models
    data.forEach(vm => (this.multiSelectForm.controls.rows as FormGroup).addControl(vm.id, new FormControl(false)));

    // subscribe to changes in the allRows control and update the control values on form value change.
    this.multiSelectForm.controls.allRows.valueChanges.subscribe(value => {
      data.forEach(row => {
        this.multiSelectForm.controls.rows.get(row.id)?.setValue(value);
        // add or remove it from the source of truth for selected VMs
        // value ? this.vmData.addMultiSelectVM(row) : this.vmData.removeMultiSelectVM(row);
        // console.log(`multi rows selected: ${this.vmData.multiSelectedVMs}`);
      });
    });

    this.multiSelectForm.controls.rows.valueChanges.subscribe(value => {
      /**
       * Note: I am extracting just the control name, I could also move this over to the service and get the full vm
       * object from a single source of truth but there are many app/team/product dependent ways to do this at this
       * point.
       */
      for (const [name, selected] of Object.entries(value)) {
        selected ? this.vmData.addMultiSelectVM(name) : this.vmData.removeMultiSelectVM(name);
      }
    });
  }

  get rowCount(): number {
    const rows = this.multiSelectForm.get('rows') as FormGroup;
    return Object.keys(rows.controls).length;
  }

  // private _selectedCount: number = 0;
  get selectedCount() {
    const rows = this.multiSelectForm.get('rows') as FormGroup;
    return Object.keys(rows.controls)
      .map(row => this.multiSelectForm.controls.rows.get(row))
      .filter(row => row?.value).length;
  }

  batchActionAnchor: EventTarget | null = null;
  showBatchActions(event: Event) {
    this.batchActionAnchor = event.target;
  }

  batchAction(action: string) {
    alert(`${action}: ${this.vmData.multiSelectedVMs}`);
    this.batchActionAnchor = null;
  }

  /**
   * feat: hide-show-column
   * Use the event target element to set the column anchor so that the form can be positioned off the cds-action button.
   * Once the anchor is set, show the column picker form.
   */
  setAnchor(event: Event): void {
    this.columnAnchor = event.target;
    this.hiddenColumnPicker = !this.hiddenColumnPicker;
  }

  /**
   * feat: hide-show-columns
   * Iterate through all datafields and set the corresponding form control value to true.
   */
  showAllColumns(): void {
    this.dataFields.forEach(column => this.hideShowForm.controls.columns.get(column)?.setValue(true));
  }

  /**
   * feat: pinned-column
   * A function that figures out which column to pin by click event
   */
  togglePinned(event: Event) {
    console.log('pin', event);
  }

  /**
   * feat: general
   * optimize Angular with trackBy
   */
  trackById(index: number, vm: TestVM) {
    return vm.id;
  }

  /**
   * feat: detail-pane
   * Used in the template to provide aria-label details for the detail pane action-expand button
   * that is used to show/hide the detail popover.
   */
  getDetails(id: string): string {
    return `view host ${id} details`;
  }

  /**
   * feat: detail-pane
   * Function to pass an event and a vm object to toggle details in the UI. It is called with a (click) handler on the
   * detail row action button.
   */
  toggleDetail(event: any, vm: TestVM) {
    if (this.currentVM?.id !== vm.id) {
      this.currentVM = vm;
      this.detailAnchor = event.target;
    } else {
      this.currentVM = null;
    }
  }

  /**
   * feat: sort
   * A function bound to cds-action-sort button click event. This controls the 'Id' column sorting.
   * We get the next sort type from the custom event detail, update the service with the new value and then
   * refreshData()
   */
  sortGridId(event: Event) {
    const sortEvent = event as CustomEvent;
    this.idSortType = sortEvent.detail;
    this.vmData.idSortType = sortEvent.detail;
    this.refreshData();
  }

  /**
   * feat: sort
   * A function bound to cds-action-sort button click event. This controls the 'statys' column sorting.
   * We get the next sort type from the custom event detail, update the service with the new value and then refreshData()
   */
  sortGridStatus(event: Event) {
    const sortEvent = event as CustomEvent;
    this.statusSortType = sortEvent.detail; // needed to bind / update template
    this.vmData.statusSortType = sortEvent.detail; // needed to update sorting in the service
    this.refreshData();
  }

  /**
   * feat: filter
   * A utility function that manages hide/show for the filter form.
   */
  toggleFilter(event: Event) {
    this.filterAnchor = event.target;
    this.hiddenFilter = !this.hiddenFilter;
  }

  /**
   * feat: filter
   * A function that triggers filtering on the async data source.
   */
  filterByID(event: Event) {
    const input: HTMLInputElement = event.target as HTMLInputElement;
    this.filterString = input.value ? input.value : '';
    this.vmData.filterString = input.value ? input.value : '';
    this.refreshData();
  }

  /**
   * fet: pagination
   * Set and update hte current page for pagination, then refresh the data.
   */

  setPageSize(event: Event) {
    this.vmData.pageSize = parseInt((event.target as HTMLSelectElement).value);
    this.refreshData();
  }
  getPageSize(): number {
    return this.vmData.pageSize;
  }

  public setPage(event: any) {
    this.vmData.currentPage = parseInt(event.target.value) - 1;
    this.refreshData();
  }

  public nextPage() {
    if (this.currentPage < this.pageCount - 1) {
      this.vmData.currentPage++;
      this.refreshData();
    }
  }

  public prevPage() {
    if (this.currentPage > 0) {
      this.vmData.currentPage--;
      this.refreshData();
    }
  }

  public firstPage() {
    this.vmData.currentPage = 0;
    this.refreshData();
  }

  public lastPage() {
    this.vmData.currentPage = Math.ceil(this.vmData.dataLength / this.vmData.pageSize) - 1;
    this.refreshData();
  }
}
