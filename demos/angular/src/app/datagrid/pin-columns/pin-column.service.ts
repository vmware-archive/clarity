import { Injectable } from '@angular/core';
import {PinColumnGrid, SyncDataService} from "../utils/vm-data.interface";
import {getVMData, TestVM} from "@cds/core/demo";

@Injectable({
  providedIn: 'root'
})
export class PinColumnService implements SyncDataService<TestVM>, PinColumnGrid {
  readonly data: TestVM[];
  readonly fields: string[];
  pinFirst = true;
  pinLast = true;

  constructor() {
    this.data = getVMData();
    this.fields = Object.keys(this.data[0]);
  }

  public get(): TestVM[] {
    return this.data;
  }
}
