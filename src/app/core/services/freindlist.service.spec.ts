import { TestBed } from '@angular/core/testing';

import { FreindlistService } from './freindlist.service';

describe('FreindlistService', () => {
  let service: FreindlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreindlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
