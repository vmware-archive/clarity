import { Injectable } from '@angular/core';
import { AsyncGridService } from '../vm-data.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { TestVM } from '@cds/core/demo';

@Injectable({
  providedIn: 'root',
})
export class VmAsyncService implements AsyncGridService<TestVM> {
  readonly data: BehaviorSubject<TestVM[]> = new BehaviorSubject<TestVM[]>([]);
  public data$: Observable<TestVM[]> = this.data.asObservable();
  constructor() {}

  refresh(): void {}
}
