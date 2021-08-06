import { Component } from '@angular/core';
import { BasicService } from './basic.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
})
export class BasicComponent {
  showDevNotes = false;

  constructor(public vmData: BasicService) {}
}
