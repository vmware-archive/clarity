import { Component } from '@angular/core';
import { FilteringService } from './filtering.service';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.scss'],
})
export class FilteringComponent {
  showDevNotes = false;

  constructor(public vmData: FilteringService) {}
}
