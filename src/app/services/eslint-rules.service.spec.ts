import { TestBed } from '@angular/core/testing';

import { EslintRulesService } from './eslint-rules.service';

describe('EslintRulesService', () => {
  let service: EslintRulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EslintRulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
