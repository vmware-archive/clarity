import { Component } from '@angular/core';
import { TestVM } from '@cds/core/demo';
import { DetailService } from './detail.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent {
  showDevNotes = false;

  constructor(public vmData: DetailService) {}

  // Component handles aria-label for the row expand button
  getDetails(id: string): string {
    return `view host ${id} details`;
  }

  // Component handles the `state` of the detail pane.
  toggleDetail(event: Event, vm: TestVM): void {
    if (this.vmData.currentVM?.id !== vm.id) {
      this.vmData.currentVM = vm;
      this.vmData.detailAnchor = event.target as HTMLElement;
    } else {
      this.vmData.currentVM = null;
    }
  }
}
