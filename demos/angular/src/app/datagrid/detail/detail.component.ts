import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TestVM } from '@cds/core/demo';
import { VmService } from '../vm.service';
import { DetailGridComponent } from '../utils/vm-data.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements DetailGridComponent<TestVM> {
  data: TestVM[];
  dataFields!: string[];
  currentVM!: TestVM | null;
  detailAnchor: EventTarget | null = null;
  showDevNotes = false;

  constructor(private vmData: VmService) {
    this.data = vmData.get();
    this.dataFields = vmData.fields;
  }

  getDetails(id: string): string {
    return `view host ${id} details`;
  }

  toggleDetail(event: Event, vm: TestVM): void {
    if (this.currentVM?.id !== vm.id) {
      this.currentVM = vm;
      this.detailAnchor = event.target;
    } else {
      this.currentVM = null;
    }
  }
}
