import { Component, OnInit } from '@angular/core';
import { paginate, TestVM } from '@cds/core/demo';
import { VmService } from '../vm.service';
import { VmSyncService } from '../utils/providers/vm-sync.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  data: TestVM[] = [];
  dataFields!: string[];
  showDevNotes = false;

  setPageSize(event: Event) {
    this.vmData.pageSize = parseInt((event.target as HTMLSelectElement).value);
    this.refreshData();
  }
  getPageSize(): number {
    return this.vmData.pageSize;
  }

  constructor(public vmData: VmSyncService) {
    this.data = this.vmData.paginateData();
    this.dataFields = vmData.fields;
  }

  private refreshData(): void {
    this.data = this.vmData.paginateData();
  }

  public setPage(event: any) {
    this.vmData.currentPage = parseInt(event.target.value) - 1;
    this.refreshData();
  }

  public nextPage() {
    if (this.vmData.currentPage < this.vmData.pageCount - 1) {
      this.vmData.currentPage++;
      this.refreshData();
    }
  }

  public prevPage() {
    if (this.vmData.currentPage > 0) {
      this.vmData.currentPage--;
      this.refreshData();
    }
  }

  public firstPage() {
    this.vmData.currentPage = 0;
    this.refreshData();
  }

  public lastPage() {
    this.vmData.currentPage = Math.ceil(this.vmData.get().length / this.vmData.pageSize) - 1;
    this.refreshData();
  }
}
