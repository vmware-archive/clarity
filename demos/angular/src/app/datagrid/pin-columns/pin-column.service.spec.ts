import { TestBed } from '@angular/core/testing';

import { PinColumnService } from './pin-column.service';

describe('PinColumnService', () => {
  let service: PinColumnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PinColumnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
