import { TestBed } from '@angular/core/testing';

import { RunCampagneService } from './run-campagne.service';

describe('RunCampagneService', () => {
  let service: RunCampagneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RunCampagneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
