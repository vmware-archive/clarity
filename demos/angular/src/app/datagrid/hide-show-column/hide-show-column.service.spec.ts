import { TestBed } from '@angular/core/testing';

import { HideShowColumnService } from './hide-show-column.service';

describe('HideShowColumnService', () => {
  let service: HideShowColumnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HideShowColumnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
