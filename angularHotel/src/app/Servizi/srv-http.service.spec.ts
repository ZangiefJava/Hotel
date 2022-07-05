import { TestBed } from '@angular/core/testing';

import { SrvHTTPService } from './srv-http.service';

describe('SrvHTTPService', () => {
  let service: SrvHTTPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvHTTPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
