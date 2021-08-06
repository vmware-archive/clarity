import { TestBed } from '@angular/core/testing';

import { VmAsyncService } from './vm-async.service';

describe('VmAsyncService', () => {
  let service: VmAsyncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VmAsyncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
