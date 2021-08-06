import { Component } from '@angular/core';
import { TestVM } from '@cds/core/demo';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { VmService } from '../vm.service';
import { MultiSelectGridComponent } from '../utils/vm-data.interface';
import {MultiActionGridService} from "./multi-action-grid.service";

@Component({
  selector: 'app-multi-action',
  templateUrl: './multi-action.component.html',
  styleUrls: ['./multi-action.component.scss'],
})
export class MultiActionComponent {
  clrNgSelected: TestVM[] = [];
  showDevNotes = false;

  constructor(public vmData: MultiActionGridService) { }

  clrAction(action: string) {
    alert(`${action}: ${this.clrNgSelected.map(vm => vm?.id)}`);
  }
}
