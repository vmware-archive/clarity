import { Component } from '@angular/core';
import { VmService } from '../vm.service';
import { TestVM } from '@cds/core/demo';
import { VmSyncService } from '../utils/providers/vm-sync.service';

@Component({
  selector: 'app-pin-columns',
  templateUrl: './pin-columns.component.html',
  styleUrls: ['./pin-columns.component.scss'],
})
export class PinColumnsComponent {
  pinFirst = true;
  pinLast = true;
  data: TestVM[] = [];
  dataFields!: string[];
  showDevNotes = false;
  constructor(private vmData: VmSyncService) {
    this.data = vmData.get();
    this.dataFields = vmData.fields;
  }
}
