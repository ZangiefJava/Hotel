import { TestBed } from '@angular/core/testing';

import { DatiUtenteService } from './dati-utente.service';

describe('DatiUtenteService', () => {
  let service: DatiUtenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatiUtenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
