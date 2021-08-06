import {Injectable} from '@angular/core';
import {DetailGrid, SyncDataService} from '../utils/vm-data.interface';
import {getVMData, TestVM} from '@cds/core/demo';

@Injectable({
  providedIn: 'root',
})
export class DetailService implements SyncDataService<TestVM>, DetailGrid<TestVM> {
  // Implements SyncDataService interface
  readonly data: TestVM[];
  readonly fields: string[];

  //Implements DetailGrid interface
  public currentVM!: TestVM | null;
  public detailAnchor!: HTMLElement;

  constructor() {
    this.data = getVMData();
    this.fields = Object.keys(this.data[0]);
  }

  public get(): TestVM[] {
    return this.data;
  }
}
