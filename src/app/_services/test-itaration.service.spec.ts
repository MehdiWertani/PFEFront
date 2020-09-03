import { TestBed } from '@angular/core/testing';

import { TestItarationService } from './test-itaration.service';

describe('TestItarationService', () => {
  let service: TestItarationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestItarationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
