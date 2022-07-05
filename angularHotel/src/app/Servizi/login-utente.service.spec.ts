import { TestBed } from '@angular/core/testing';

import { LoginUtenteService } from './login-utente.service';

describe('LoginUtenteService', () => {
  let service: LoginUtenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginUtenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
