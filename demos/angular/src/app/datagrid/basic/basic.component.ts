import { Component } from '@angular/core';
import { VmSyncService } from '../utils/providers/vm-sync.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
})
export class BasicComponent {
  showDevNotes = false;
  constructor(public vmData: VmSyncService) {}
}
