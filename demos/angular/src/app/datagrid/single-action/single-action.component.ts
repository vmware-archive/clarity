import { Component } from '@angular/core';
import { TestVM } from '@cds/core/demo';
import { VmSyncService } from '../utils/providers/vm-sync.service';
import { SingleActionGridComponent } from '../utils/vm-data.interface';

@Component({
  selector: 'app-multi-action',
  templateUrl: './single-action.component.html',
  styleUrls: ['./single-action.component.scss'],
})
export class SingleActionComponent implements SingleActionGridComponent<TestVM> {
  // Form group for the generated form controls
  // hideShowForm!: FormGroup;
  // reference to the click event target for positioning the popover ui w/ hide/show checkboxes
  singleActionAnchor: EventTarget | null = null;
  // A list of test VM's to display in a grid
  data: TestVM[] = [];
  // Extracted 'fields' from a row of data -> These will become columns
  dataFields!: string[];
  // a boolean flag to control column picker element visibility

  actionRow!: TestVM | null;
  showDevNotes = false;
  hiddenRowAction = true;

  constructor(private vmData: VmSyncService) {
    this.data = vmData.get();
    this.dataFields = vmData.fields;
  }

  shutdownVM(vm?: TestVM | null) {
    alert(`Shutdown: ${vm?.id}`);
    this.closeRowActionPopover();
    this.actionRow = null;
  }

  restartVM(vm: TestVM | null) {
    alert(`Restarted: ${vm?.id}`);
    this.closeRowActionPopover();
    this.actionRow = null;
  }

  displayRowActions(event: Event, vm: TestVM): void {
    this.actionRow = vm;
    this.singleActionAnchor = event.target;
    this.hiddenRowAction = false;
  }

  closeRowActionPopover() {
    this.actionRow = null;
    this.hiddenRowAction = true;
  }

  clrAction(action: string, vm: TestVM) {
    alert(`${action}: ${vm.id}`);
  }
}
