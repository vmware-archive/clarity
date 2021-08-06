import { Component } from '@angular/core';
import {PinColumnService} from "./pin-column.service";

@Component({
  selector: 'app-pin-columns',
  templateUrl: './pin-columns.component.html',
  styleUrls: ['./pin-columns.component.scss'],
})
export class PinColumnsComponent {
  dataFields!: string[];
  showDevNotes = false;
  constructor(public vmData: PinColumnService) {}
}
