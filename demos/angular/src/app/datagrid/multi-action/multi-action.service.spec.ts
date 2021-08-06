import { TestBed } from '@angular/core/testing';

import { MultiActionGridService } from './multi-action-grid.service';

describe('MultiActionService', () => {
  let service: MultiActionGridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultiActionGridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
