import { TestBed } from '@angular/core/testing';

import { CampagneprepareserviceService } from './campagneprepareservice.service';

describe('CampagneprepareserviceService', () => {
  let service: CampagneprepareserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampagneprepareserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
