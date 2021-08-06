import { Injectable } from '@angular/core';
import { SyncDataService } from '../utils/vm-data.interface';
import { getVMData, TestVM } from '@cds/core/demo';

@Injectable({
  providedIn: 'root',
})
export class BasicService implements SyncDataService<TestVM> {
  readonly data: TestVM[];
  readonly fields: string[];

  constructor() {
    this.data = getVMData();
    this.fields = Object.keys(this.data[0]);
  }

  public get(): TestVM[] {
    return this.data;
  }
}
