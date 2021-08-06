import { TestBed } from '@angular/core/testing';

import { BasicService } from './basic.service';

describe('BasicService', () => {
  let service: BasicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
