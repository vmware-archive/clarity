import { TestBed } from '@angular/core/testing';

import { VmSyncService } from './vm-sync.service';

describe('VmSyncService', () => {
  let service: VmSyncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VmSyncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
