import { Injectable } from '@angular/core';
import { getVMData, TestVM } from '@cds/core/demo';
import { BehaviorSubject } from 'rxjs';

export interface GridState {
  data: TestVM[];
  orderPreference: string[];
}

export const initialState: GridState = {
  data: getVMData(),
  orderPreference: getVMData().map(vm => vm.id),
};

@Injectable()
export class VMService {
  private _hosts = new BehaviorSubject<TestVM[]>(getVMData());

  get hosts() {
    return this._hosts.asObservable();
  }
}
